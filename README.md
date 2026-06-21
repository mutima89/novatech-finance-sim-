# NovaTech Solutions Ltd. — Finance Simulation

**You are the Finance Manager at NovaTech Solutions Ltd., a Manchester-based SaaS company with 48 employees, £1.2M annual recurring revenue, and 70+ customers across the UK.**

Your week runs **Monday 22nd June — Friday 26th June 2026** with a fresh inbox every day.

## Getting Started

```
powershell -ExecutionPolicy Bypass -File .\start-simulation.ps1
```

## Simulated Week Overview

| Day | Focus Area | Key Tasks |
|-----|-----------|-----------|
| **Mon 22 Jun** | Month-End Reconciliation | Bank rec, customer payment query, VAT control check |
| **Tue 23 Jun** | Credit Control | Aged debtors, chase plan, credit check, supplier payments |
| **Wed 24 Jun** | Payroll & Forecasting | Payroll projection, cash flow forecast, training budget |
| **Thu 25 Jun** | Management Accounts | P&L vs Budget, fixed assets, key board metrics |
| **Fri 26 Jun** | Board Prep & Audit | Board pack, audit questionnaire, chargeback investigation |

## Directory Structure

```
novatech-finance-sim/
├── company-profile.md         ← Company overview, people, products
├── start-simulation.ps1       ← Launcher script
├── data/
│   ├── chart-of-accounts.csv
│   ├── opening-balances-june-2026.csv
│   ├── transactions/
│   │   ├── sales-invoices-june.csv
│   │   ├── purchase-invoices-june.csv
│   │   ├── bank-statement-barclays-main-june.csv
│   │   ├── bank-statement-barclays-payroll-june.csv
│   │   ├── bank-statement-starling-june.csv
│   │   └── debtors-aged-analysis.csv
│   └── reports/
├── tasks/
│   ├── day-1-monday-reconciliation.md
│   ├── day-2-tuesday-credit-control.md
│   ├── day-3-wednesday-payroll-forecast.md
│   ├── day-4-thursday-management-accounts.md
│   └── day-5-friday-board-prep-audit.md
├── tools/
│   ├── reconciliation-template.csv
│   ├── pl-statement-template.csv
│   ├── fixed-asset-register-template.csv
│   └── cashflow-template.csv
└── output/
    └── tracker.md             ← Check off tasks as you go
```

## How to Play

1. **Run the launcher** → it shows your "inbox" for the day
2. **Read the day's task file** in `tasks/`
3. **Pull data** from `data/` files to do your work
4. **Use the templates** in `tools/` to structure your outputs
5. **Save your work** in `output/`
6. **Check off tasks** in `output/tracker.md`

## Real Finance Tools You'd Use

Each task maps to a real finance function:
- **Bank Reconciliation** — matching GL to bank statement, identifying discrepancies
- **Aged Debtors** — sorting overdue invoices, prioritising collection actions
- **Cash Flow Forecasting** — projecting inflows/outflows, identifying shortfalls
- **VAT Control** — verifying output vs input VAT reconciles to balance sheet
- **Management Accounts** — P&L vs budget, variance analysis, board reporting
- **Fixed Asset Register** — tracking cost, depreciation, NBV
- **Credit Control** — assessing new customer risk
- **Audit Prep** — confirming balances, related party disclosure, post-BSE
- **Chargeback Investigation** — reviewing evidence, deciding to dispute
