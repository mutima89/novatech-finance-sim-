<#
.SYNOPSIS
  VAT Control Account Calculator
.DESCRIPTION
  Calculates VAT position: opening balance + output VAT - input VAT = closing balance
#>

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  NovaTech - VAT Control Account Calculator" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

$openingVAT = [double](Read-Host "Opening VAT Payable (from TB)")
Write-Host ""

Write-Host "--- OUTPUT VAT (Sales) ---" -ForegroundColor Yellow
$outputVAT = 0
do {
    $desc = Read-Host "  Invoice ref (blank to finish)"
    if ([string]::IsNullOrWhiteSpace($desc)) { break }
    $amt = [double](Read-Host "  VAT amount")
    $outputVAT += $amt
} while ($true)

Write-Host ""
Write-Host "--- INPUT VAT (Purchases) ---" -ForegroundColor Yellow
$inputVAT = 0
do {
    $desc = Read-Host "  Invoice ref (blank to finish)"
    if ([string]::IsNullOrWhiteSpace($desc)) { break }
    $amt = [double](Read-Host "  VAT amount")
    $inputVAT += $amt
} while ($true)

Write-Host ""
Write-Host "==============================================" -ForegroundColor DarkGray
Write-Host "VAT CONTROL ACCOUNT" -ForegroundColor Magenta
Write-Host "==============================================" -ForegroundColor DarkGray
Write-Host ""

$closingVAT = $openingVAT + $outputVAT - $inputVAT
$paymentDue = if ($closingVAT -gt 0) { $closingVAT } else { 0 }
$reclaimDue = if ($closingVAT -lt 0) { [Math]::Abs($closingVAT) } else { 0 }

Write-Host "  Opening VAT Payable:         $($openingVAT.ToString('N2'))"
Write-Host "  Add: Output VAT on Sales:    $($outputVAT.ToString('N2'))"
Write-Host "  Less: Input VAT on Purchases: ($($inputVAT.ToString('N2')))"
Write-Host "-----------------------------------------------"
Write-Host "  Closing VAT Payable/(Reclaim): $($closingVAT.ToString('N2'))" -ForegroundColor Green

if ($paymentDue -gt 0) {
    Write-Host ""
    Write-Host "  Amount due to HMRC: $($paymentDue.ToString('N2'))" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "  Amount reclaimable from HMRC: $($reclaimDue.ToString('N2'))" -ForegroundColor Yellow
}
