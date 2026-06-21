# NovaTech Solutions Ltd. — Finance Simulation

**You are the Finance Manager** at NovaTech Solutions Ltd., a Manchester-based SaaS company with 48 employees, £1.2M annual recurring revenue, and 70+ customers across the UK.

This simulation puts you in the seat of a real finance professional for **10 full working days** (2 weeks). You'll do bank reconciliations, chase overdue customers, calculate payroll, prepare management accounts, negotiate with suppliers, build cash flow forecasts, and present to the board — just like a real finance job.

---

## 🚀 Quick Start

### Option A: HTML Interface (Recommended — opens in your browser)

```
double-click:  ui/index.html
```

No installation, no server, no internet needed. Opens instantly in any browser.

### Option B: PowerShell Launcher

```
powershell -ExecutionPolicy Bypass -File .\start-simulation.ps1
```

### Option C: Just Read the Files

Open any `.md` file in `tasks/` to see the daily task briefs. Open any `.csv` in `data/` to see the numbers.

---

## 📋 What You'll Do

### Week 1 — Mid-Month: Reporting & Control

| Day | Date | Role | Theme | Key Tasks |
|-----|------|------|-------|-----------|
| 1 | Mon 22 Jun | 📊 Accountant | Month-End Reconciliation | Bank rec, customer payment query, VAT control check |
| 2 | Tue 23 Jun | 📞 Credit Controller | Credit Control | Aged debtors, chase plan, credit check, supplier payments |
| 3 | Wed 24 Jun | 📈 FP&A Analyst | Payroll & Forecasting | Payroll projection, cash flow forecast, training budget |
| 4 | Thu 25 Jun | 📑 Management Accountant | Management Accounts | P&L vs Budget, fixed assets, key board metrics |
| 5 | Fri 26 Jun | 🎯 Finance Manager | Board Prep & Audit | Board pack, audit questionnaire, chargeback investigation |

### Week 2 — Month-End Close: Finalise & Present

| Day | Date | Role | Theme | Key Tasks |
|-----|------|------|-------|-----------|
| 6 | Mon 29 Jun | 📊 Accountant | Close — Revenue & AR | Revenue reconciliation, settlement negotiation, month-end journals |
| 7 | Tue 30 Jun | 📞 Credit Controller | Close — Payables & Accruals | Supplier negotiation, accruals schedule, VAT return |
| 8 | Wed 1 Jul | 📈 FP&A Analyst | Close — Payroll & Assets | New hire payroll, depreciation, new customer onboarding |
| 9 | Thu 2 Jul | 📑 Management Accountant | Full Management Accounts | Trial balance, balance sheet, cash flow statement |
| 10 | Fri 3 Jul | 🎯 Finance Manager | Board & Strategy | Board presentation, H2 reforecast, scenario analysis |

---

## 🖥️ HTML Interface (`ui/index.html`)

The HTML interface is a full interactive dashboard — **open it in any browser, no server needed**.

| Panel | Description |
|-------|-------------|
| **📊 Dashboard** | Company stats at a glance — cash, debtors, sales, headcount |
| **📋 Today's Tasks** | Current day's work with 3 tabs (Tasks / Inbox / Data) |
| **📧 Email Inbox** | 10 days of simulated inbox with clickable email threads |
| **📁 Data Browser** | Browse all 10 datasets as interactive tables with auto-summed totals |
| **🔧 Finance Tools** | 4 built-in calculators: Bank Recon, VAT Control, Cash Flow, Depreciation |
| **✅ Work Tracker** | 50 task checkboxes saved to your browser (persists across sessions) |
| **🏢 Company Profile** | Full company info — banks, people, products, policies |

The interface is a dark-mode, enterprise-style app built with vanilla HTML/CSS/JS. All data is embedded — nothing is fetched from the internet.

### 📖 Beginner's Guide

Open `ui/how-to.html` for a complete step-by-step walkthrough explaining every part of the simulation in plain language — what each tab does, how to use the tools, what each dataset means, and tips for every day.

---

## 📁 Project Structure

```
novatech-finance-sim/
│
├── 📄 README.md                          ← This file
├── 📄 company-profile.md                 ← Company overview, people, products
├── 📄 start-simulation.ps1               ← PowerShell launcher
│
├── 🖥️ ui/                               ← HTML interface (open index.html)
│   ├── 📄 index.html                     ← Main application
│   ├── 📄 how-to.html                    ← Beginner's guide
│   ├── 🎨 css/style.css                  ← Design system (541 lines)
│   └── 📜 js/
│       ├── data.js                       ← All embedded datasets
│       └── app.js                        ← Application logic
│
├── 📋 tasks/                             ← Week 1 daily task briefs
│   ├── 📄 day-1-monday-reconciliation.md
│   ├── 📄 day-2-tuesday-credit-control.md
│   ├── 📄 day-3-wednesday-payroll-forecast.md
│   ├── 📄 day-4-thursday-management-accounts.md
│   └── 📄 day-5-friday-board-prep-audit.md
│
├── 📋 tasks/week2/                       ← Week 2 daily task briefs
│   ├── 📄 week2-overview.md
│   ├── 📄 day-6-monday-close-revenue.md
│   ├── 📄 day-7-tuesday-close-payables.md
│   ├── 📄 day-8-wednesday-close-payroll.md
│   ├── 📄 day-9-thursday-management-accounts-complete.md
│   └── 📄 day-10-friday-board-strategy.md
│
├── 📊 data/                              ← All financial data (CSV)
│   ├── 📄 chart-of-accounts.csv           ← 50 account codes
│   ├── 📄 opening-balances-june-2026.csv  ← Trial balance (balanced)
│   ├── 📁 transactions/                   ← Sales, purchases, bank statements
│   │   ├── 📄 sales-invoices-june.csv
│   │   ├── 📄 purchase-invoices-june.csv
│   │   ├── 📄 bank-statement-barclays-main-june.csv
│   │   ├── 📄 bank-statement-barclays-payroll-june.csv
│   │   ├── 📄 bank-statement-starling-june.csv
│   │   └── 📄 debtors-aged-analysis.csv
│   ├── 📁 inbox/                          ← Email text files per day
│   ├── 📁 assets/                         ← Fixed asset schedule (16 assets)
│   ├── 📁 budgets/                        ← FY2026 budget (month-by-month)
│   ├── 📁 journals/                       ← Journal templates & sample entries
│   └── 📁 additional-data/               ← Employee list (30 staff)
│
├── 🔧 tools/                              ← Templates for your work
│   ├── 📄 reconciliation-template.csv
│   ├── 📄 pl-statement-template.csv
│   ├── 📄 fixed-asset-register-template.csv
│   └── 📄 cashflow-template.csv
│
├── 📜 processes/                         ← Finance policies & procedures
│   ├── 📄 month-end-close-checklist.md    ← 50-step close process
│   └── 📄 finance-policies.md             ← PO policy, credit control, etc.
│
├── ⚙️ scripts/                           ← PowerShell finance tools
│   ├── 📄 reconcile.ps1
│   ├── 📄 vat-calculator.ps1
│   └── 📄 cashflow-builder.ps1
│
└── 📁 output/                            ← Save your work here
    └── 📄 tracker.md
```

---

## 📊 Datasets Included

| Dataset | Rows | What's In It |
|---------|------|-------------|
| Sales Invoices | 20 | All June invoices with customer, product, amounts, payment status |
| Purchase Invoices | 18 | All supplier bills — AWS, WeWork, Dell, HubSpot, etc. |
| Barclays Main Statement | 27 | Every transaction hitting the main business account |
| Barclays Payroll Statement | 5 | Payroll funding, HMRC, pension, net salaries |
| Starling Expense Statement | 15 | Staff expenses — travel, meals, office supplies |
| Aged Debtors | 23 | Who owes money with aging buckets (Current to 90+ days) |
| Chart of Accounts | 50 | Full COA with account codes, categories, balance types |
| Opening Balances | 21 | Trial balance at 1st June (balanced: debits = credits) |
| Fixed Asset Schedule | 16 | Every asset with cost, depreciation, NBV |
| Employee List | 30 | All staff with roles, salaries, departments |

---

## 🔧 Built-in Finance Tools

The HTML interface includes 4 interactive calculators:

| Tool | Input | Output |
|------|-------|--------|
| **💰 Bank Reconciliation** | GL entries (date, ref, desc, amount) | Total compared to bank statement |
| **🧾 VAT Control Account** | Opening VAT + output VAT + input VAT | Amount due to or from HMRC |
| **📈 Cash Flow Forecast** | Opening balance + weekly in/outflows | Projected balance with shortfall warnings |
| **📊 Depreciation Calculator** | Cost, residual value, useful life | Annual & monthly straight-line depreciation |

---

## 💼 Real Finance Skills You'll Practice

- **Bank Reconciliation** — matching GL to bank statement, finding discrepancies
- **Aged Debtors Analysis** — sorting overdue invoices, prioritising collection actions
- **Cash Flow Forecasting** — projecting inflows/outflows, identifying shortfalls
- **VAT Control & Returns** — verifying output vs input VAT, quarterly return prep
- **Management Accounts** — P&L vs budget, variance analysis, board reporting
- **Balance Sheet & Cash Flow Statement** — full set of accounts
- **Fixed Asset Register** — tracking cost, depreciation, NBV
- **Credit Control** — assessing new customer risk, setting payment terms
- **Payroll Processing** — calculating NI, pension, net pay for new hires
- **Audit Preparation** — bank confirmations, related party disclosure, post-BSE
- **Chargeback Investigation** — reviewing evidence, deciding to dispute
- **Supplier Negotiation** — managing payment terms when cash is tight
- **Board Presentation** — executive dashboard, strategic recommendations

---

## 🧭 How to Play

1. **Open `ui/index.html`** in your browser (just double-click it)
2. **Read the beginner's guide** at `ui/how-to.html` for a full walkthrough
3. **Start Day 1** — click "Today's Tasks" in the sidebar
4. **Read the Tasks tab** to see what you need to do
5. **Check your Inbox tab** — emails contain context and instructions
6. **Browse the Data tab** to find the numbers you need
7. **Use Finance Tools** for calculations (VAT, cash flow, etc.)
8. **Check off tasks** in the Work Tracker (saves automatically)
9. **Click "Next →"** to move to the next day
10. **Week 2** covers month-end close — even more advanced

---

## 📝 License

Feel free to use, modify, and share this simulation for learning purposes.
