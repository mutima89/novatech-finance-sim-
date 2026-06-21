<#
.SYNOPSIS
  Bank reconciliation tool — compares GL entries to bank statement
.DESCRIPTION
  Interactive tool to help you reconcile the bank. Enter GL entries,
  the script compares them to the bank statement and shows differences.
#>

param(
    [string]$StatementPath = "..\data\transactions\bank-statement-barclays-main-june.csv",
    [switch]$Interactive
)

function Show-BankRec {
    $statement = @()
    if (Test-Path $StatementPath) {
        $statement = Import-Csv $StatementPath
    }

    Write-Host "==============================================" -ForegroundColor Cyan
    Write-Host "  NovaTech - Bank Reconciliation Tool" -ForegroundColor Cyan
    Write-Host "==============================================" -ForegroundColor Cyan
    Write-Host ""

    if ($statement.Count -gt 0) {
        Write-Host "Bank Statement: $(Split-Path $StatementPath -Leaf)" -ForegroundColor Yellow
        Write-Host "$($statement.Count) transactions loaded"
        Write-Host ""

        $endBalance = $statement[-1]."Balance (after)"
        Write-Host "Statement Closing Balance: $([double]$endBalance | ForEach-Object { $_.ToString('N2') })" -ForegroundColor Green
    }

    Write-Host ""
    Write-Host "GL Ledger Entries (enter them below):" -ForegroundColor Magenta
    Write-Host "---------------------------------------------"

    $glEntries = @()
    do {
        $date = Read-Host "  Date (dd-Mon-yy or blank to finish)"
        if ([string]::IsNullOrWhiteSpace($date)) { break }

        $ref = Read-Host "  Reference"
        $desc = Read-Host "  Description"
        $amount = Read-Host "  Amount (use + for debit/inflow, - for credit/outflow)"

        $glEntries += [PSCustomObject]@{
            Date = $date
            Reference = $ref
            Description = $desc
            Amount = [double]$amount
        }
    } while ($true)

    if ($glEntries.Count -eq 0) {
        Write-Host "No entries entered. Exiting." -ForegroundColor Gray
        return
    }

    Write-Host ""
    Write-Host "==============================================" -ForegroundColor DarkGray
    Write-Host "RECONCILIATION SUMMARY" -ForegroundColor Yellow
    Write-Host "==============================================" -ForegroundColor DarkGray
    Write-Host ""

    $totalGL = ($glEntries | Measure-Object Amount -Sum).Sum
    $totalBank = 0.00

    if ($statement.Count -gt 0) {
        $totalBank = ($statement | Where-Object { $_."Debit" -or $_."Credit" } | ForEach-Object {
            $d = [double]0; [void][double]::TryParse($_."Debit", [ref]$d)
            $c = [double]0; [void][double]::TryParse($_."Credit", [ref]$c)
            $c - $d
        } | Measure-Object -Sum).Sum
    }

    Write-Host "  Total GL Entries:     $($totalGL.ToString('N2'))"
    Write-Host "  Bank Statement Total: $($totalBank.ToString('N2'))"
    Write-Host "  Difference:           $(($totalGL - $totalBank).ToString('N2'))"

    if ([Math]::Abs($totalGL - $totalBank) -lt 0.01) {
        Write-Host ""
        Write-Host "  RECONCILED!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "  DIFFERENCE OF $([Math]::Abs($totalGL - $totalBank).ToString('N2'))" -ForegroundColor Red
        Write-Host "    Check for missing entries or transposition errors."
    }

    $outputPath = "..\output\reconciliation-$(Get-Date -Format 'yyyyMMdd-HHmmss').csv"
    $glEntries | Export-Csv -Path $outputPath -NoTypeInformation
    Write-Host ""
    Write-Host "  Entries saved to: $outputPath" -ForegroundColor Gray
}

Show-BankRec
