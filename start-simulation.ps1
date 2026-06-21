#Requires -Version 5.1

$SimDir = Split-Path -Parent $MyInvocation.MyCommand.Path

function Show-Menu {
    param([int]$DayIndex)

    $Days = @(
        @{Name="Monday 22 Jun — Month-End Reconciliation"; File="day-1-monday-reconciliation.md"; Inbox="day-1-inbox.txt"},
        @{Name="Tuesday 23 Jun — Credit Control"; File="day-2-tuesday-credit-control.md"; Inbox="day-2-inbox.txt"},
        @{Name="Wednesday 24 Jun — Payroll & Cash Flow"; File="day-3-wednesday-payroll-forecast.md"; Inbox="day-3-inbox.txt"},
        @{Name="Thursday 25 Jun — Management Accounts"; File="day-4-thursday-management-accounts.md"; Inbox="day-4-inbox.txt"},
        @{Name="Friday 26 Jun — Board Prep & Audit"; File="day-5-friday-board-prep-audit.md"; Inbox="day-5-inbox.txt"}
    )

    Clear-Host
    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "  NovaTech Solutions Ltd. — Finance Simulation" -ForegroundColor Cyan
    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  Welcome, Finance Manager" -ForegroundColor Yellow
    Write-Host "────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host ""

    Write-Host "  THIS WEEK'S TASKS" -ForegroundColor Magenta
    Write-Host "  ═════════════════════════════════════════" -ForegroundColor DarkGray
    Write-Host ""

    for ($i = 0; $i -lt $Days.Count; $i++) {
        $d = $Days[$i]
        $prefix = if ($i -lt $DayIndex) { "  ✓" } elseif ($i -eq $DayIndex) { "  ▸" } else { "   " }
        $color = if ($i -eq $DayIndex) { "Green" } elseif ($i -lt $DayIndex) { "DarkGray" } else { "Gray" }
        Write-Host "$prefix  Day $($i+1): $($d.Name)" -ForegroundColor $color
    }

    Write-Host ""
    Write-Host "  ═════════════════════════════════════════" -ForegroundColor DarkGray
    Write-Host ""

    if ($DayIndex -lt $Days.Count) {
        $today = $Days[$DayIndex]

        Write-Host "  ┌──────────────────────────────────────────┐" -ForegroundColor Yellow
        Write-Host "  │  INBOX  —  $($today.Name)" -ForegroundColor Yellow
        Write-Host "  └──────────────────────────────────────────┘" -ForegroundColor Yellow
        Write-Host ""

        Write-Host "  Select an option:" -ForegroundColor Cyan
        Write-Host "    [1]  Read today's task brief" -ForegroundColor White
        Write-Host "    [2]  Check email inbox" -ForegroundColor White
        if ($DayIndex -gt 0) {
            Write-Host "    [3]  Review yesterday's tasks" -ForegroundColor White
        }
        Write-Host "    [4]  Company profile & contacts" -ForegroundColor White
        Write-Host "    [5]  Browse data files" -ForegroundColor White
        Write-Host "    [6]  Open work tracker" -ForegroundColor White
        Write-Host "    [7]  Mark day as DONE → next day" -ForegroundColor Green
        Write-Host "    [Q]  Quit simulation" -ForegroundColor White
        Write-Host ""

        $choice = Read-Host "  » "

        switch ($choice) {
            "1" {
                $taskFile = Join-Path $SimDir "tasks" $today.File
                if (Test-Path $taskFile) {
                    Clear-Host
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host "  Day $($DayIndex+1) Task Brief" -ForegroundColor Cyan
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host ""
                    Get-Content $taskFile -Raw | Write-Host
                    Write-Host ""
                    Write-Host "────────────────────────────────────────────" -ForegroundColor DarkGray
                    Write-Host "  Quick links:" -ForegroundColor Yellow
                    Write-Host "  • Data: .\data\ " -ForegroundColor Cyan
                    Write-Host "  • Templates: .\tools\ " -ForegroundColor Cyan
                    Write-Host "  • Output folder: .\output\ " -ForegroundColor Cyan
                    Write-Host ""
                    Write-Host "  Press any key to return..." -ForegroundColor Gray
                    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                }
            }
            "2" {
                $inboxFile = Join-Path $SimDir "data" "inbox" $today.Inbox
                if (Test-Path $inboxFile) {
                    Clear-Host
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host "  NovaTech Email — Inbox" -ForegroundColor Cyan
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host ""
                    Get-Content $inboxFile -Raw | Write-Host
                    Write-Host ""
                    Write-Host "  Press any key to return..." -ForegroundColor Gray
                    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                } else {
                    Write-Host "  No inbox for today yet." -ForegroundColor Red
                    Start-Sleep -Seconds 1.5
                }
            }
            "3" {
                if ($DayIndex -gt 0) {
                    $yesterday = $Days[$DayIndex - 1]
                    $taskFile = Join-Path $SimDir "tasks" $yesterday.File
                    if (Test-Path $taskFile) {
                        Clear-Host
                        Write-Host "═══ Day $DayIndex (Yesterday) ═══" -ForegroundColor DarkGray
                        Get-Content $taskFile -Raw | Write-Host
                        Write-Host ""
                        Write-Host "  Press any key to return..." -ForegroundColor Gray
                        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                    }
                }
            }
            "4" {
                $profileFile = Join-Path $SimDir "company-profile.md"
                if (Test-Path $profileFile) {
                    Clear-Host
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host "  Company Profile" -ForegroundColor Cyan
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host ""
                    Get-Content $profileFile -Raw | Write-Host
                    Write-Host ""
                    Write-Host "  Press any key to return..." -ForegroundColor Gray
                    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                }
            }
            "5" {
                $allFiles = @()
                $allFiles += Get-ChildItem (Join-Path $SimDir "data") -Recurse -File | Sort-Object FullName

                $choice = "0"
                while ($choice -ne "0") {
                    Clear-Host
                    Write-Host "Data Files:" -ForegroundColor Magenta
                    Write-Host "───────────" -ForegroundColor DarkGray
                    for ($i = 0; $i -lt $allFiles.Count; $i++) {
                        $rel = $allFiles[$i].FullName.Substring($SimDir.Length + 1)
                        Write-Host "  [$($i+1)] $rel" -ForegroundColor Cyan
                    }
                    Write-Host "  [0]  Back to menu" -ForegroundColor DarkGray
                    Write-Host ""
                    $fchoice = Read-Host "  View which file? "
                    if ($fchoice -gt 0 -and $fchoice -le $allFiles.Count) {
                        Clear-Host
                        $file = $allFiles[$fchoice - 1]
                        Write-Host "══════ $($file.Name) ══════" -ForegroundColor Yellow
                        Write-Host ""
                        Get-Content $file.FullName -Raw | Write-Host
                        Write-Host ""
                        Write-Host "  Press any key..." -ForegroundColor Gray
                        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                    } else {
                        $choice = "0"
                    }
                }
            }
            "6" {
                $trackerFile = Join-Path $SimDir "output" "tracker.md"
                if (Test-Path $trackerFile) {
                    Clear-Host
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host "  Work Tracker" -ForegroundColor Cyan
                    Write-Host "══════════════════════════════════════════════" -ForegroundColor Cyan
                    Write-Host ""
                    Get-Content $trackerFile -Raw | Write-Host
                    Write-Host ""
                    Write-Host "  Tip: Edit output\tracker.md to check off tasks." -ForegroundColor Gray
                    Write-Host "  Press any key to return..." -ForegroundColor Gray
                    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
                }
            }
            "7" {
                Write-Host ""
                Write-Host "  Mark Day $($DayIndex+1) as complete and move to Day $($DayIndex+2)?" -ForegroundColor Yellow
                $confirm = Read-Host "  (y/n) "
                if ($confirm -eq "y" -or $confirm -eq "Y") {
                    return ($DayIndex + 1)
                }
            }
            "Q" { exit }
            "q" { exit }
        }
    } else {
        Clear-Host
        Write-Host "══════════════════════════════════════════════" -ForegroundColor Green
        Write-Host "  Congratulations!" -ForegroundColor Green
        Write-Host "══════════════════════════════════════════════" -ForegroundColor Green
        Write-Host ""
        Write-Host "  You've completed all 5 days of the" -ForegroundColor White
        Write-Host "  NovaTech Finance Simulation." -ForegroundColor White
        Write-Host ""
        Write-Host "  What you've done:" -ForegroundColor Yellow
        Write-Host "  • Bank reconciliation & VAT control"
        Write-Host "  • Credit control & aged debtors"
        Write-Host "  • Payroll projection & cash flow forecasting"
        Write-Host "  • Management accounts & board pack"
        Write-Host "  • Audit prep & chargeback investigation"
        Write-Host ""
        Write-Host "  Press any key to exit..." -ForegroundColor Gray
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit
    }

    return $DayIndex
}

# Main loop
$dayIndex = 0
while ($true) {
    $result = Show-Menu -DayIndex $dayIndex
    if ($result -gt $dayIndex) {
        $dayIndex = $result
    }
    Start-Sleep -Milliseconds 200
}
