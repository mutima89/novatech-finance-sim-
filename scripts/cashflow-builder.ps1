<#
.SYNOPSIS
  Cash Flow Forecast Builder
.DESCRIPTION
  Interactive tool to build a weekly cash flow forecast
#>

function Build-CashFlow {
    Write-Host "==============================================" -ForegroundColor Cyan
    Write-Host "  NovaTech - Cash Flow Forecast Builder" -ForegroundColor Cyan
    Write-Host "==============================================" -ForegroundColor Cyan
    Write-Host ""

    $openingBalance = [double](Read-Host "Opening Cash Balance")
    Write-Host ""

    $weeks = @()
    for ($w = 1; $w -le 4; $w++) {
        Write-Host "--- Week $w ---" -ForegroundColor Yellow
        $weekLabel = Read-Host "  Week commencing (e.g. 06-Jul)"
        $inflows = [double](Read-Host "  Total inflows")
        $outflows = [double](Read-Host "  Total outflows")
        Write-Host ""

        $weeks += [PSCustomObject]@{
            Week = $weekLabel
            Inflows = $inflows
            Outflows = $outflows
        }
    }

    Write-Host ""
    Write-Host "==============================================" -ForegroundColor DarkGray
    Write-Host "CASH FLOW FORECAST" -ForegroundColor Magenta
    Write-Host "==============================================" -ForegroundColor DarkGray
    Write-Host ""

    $runningBalance = $openingBalance
    Write-Host "  Opening Balance: $($runningBalance.ToString('N2'))" -ForegroundColor Cyan
    Write-Host ""

    foreach ($week in $weeks) {
        $netFlow = $week.Inflows - $week.Outflows
        $runningBalance += $netFlow
        $color = if ($runningBalance -lt 0) { "Red" } elseif ($runningBalance -lt 50000) { "Yellow" } else { "Green" }

        Write-Host "  Week: $($week.Week)"
        Write-Host "    Inflows:  $($week.Inflows.ToString('N2'))"
        Write-Host "    Outflows: $($week.Outflows.ToString('N2'))"
        Write-Host "    Net:      $($netFlow.ToString('N2'))"
        Write-Host "    Balance:  $($runningBalance.ToString('N2'))" -ForegroundColor $color
        Write-Host ""

        if ($runningBalance -lt 0) {
            Write-Host "    *** CASH SHORTFALL ***" -ForegroundColor Red
            Write-Host "    Need to arrange overdraft or delay payments." -ForegroundColor Red
            Write-Host ""
        } elseif ($runningBalance -lt 50000) {
            Write-Host "    Warning: Low cash buffer (< 1 week of expenses)" -ForegroundColor Yellow
            Write-Host ""
        }
    }

    Write-Host "  Closing Balance: $($runningBalance.ToString('N2'))" -ForegroundColor Cyan

    # Save
    $outputPath = "..\output\cashflow-forecast-$(Get-Date -Format 'yyyyMMdd-HHmmss').csv"
    $weeks | Export-Csv -Path $outputPath -NoTypeInformation
    Write-Host ""
    Write-Host "  Saved to: $outputPath" -ForegroundColor Gray
}

Build-CashFlow
