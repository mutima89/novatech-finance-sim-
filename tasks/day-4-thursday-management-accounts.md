# Day 4 — Thursday 25th June 2026: Management Accounts

## Morning Brief (from Sarah Chen, CEO)
> *"Board call is tomorrow at 10am. I need the May management accounts pack ready by 4pm today. Key things I want to see: P&L vs Budget, actual cash position, and our burn rate. Also — the auditors (PWC) emailed, they need our fixed asset register for the year-end prep. Can you sort that?"*

## Today's Tasks

### Task 4.1: Profit & Loss — May 2026 (Draft)
Using the trial balance data and June transactions you've seen so far, prepare a May 2026 P&L summary.

Use this template:

```
NovaTech Solutions Ltd — P&L
For the month ended 31 May 2026

Revenue:
  NovaFlow Core                         £XX,XXX
  NovaFlow Pro                          £XX,XXX
  NovaFlow Enterprise                   £XX,XXX
  NovaAnalytics                         £XX,XXX
  NovaSupport Add-On                    £XX,XXX
  Professional Services                 £XX,XXX
Total Revenue                           £XX,XXX

Cost of Sales:
  Cloud Infrastructure                  (£X,XXX)
  Payment Processing Fees               (£X,XXX)
Total Cost of Sales                     (£X,XXX)

Gross Profit                            £XX,XXX
Gross Margin %                          XX.X%

Operating Expenses:
  Employee Costs (Salaries + NI + Pen)  (£XX,XXX)
  Rent & Office                         (£X,XXX)
  Software Subscriptions                (£X,XXX)
  Sales & Marketing                     (£X,XXX)
  Professional Fees                     (£X,XXX)
  Depreciation & Amortisation           (£X,XXX)
  Other Operating Costs                 (£X,XXX)
Total Operating Expenses                (£XX,XXX)

Operating Profit / (Loss)               £X,XXX
Interest & Tax                          (£X,XXX)
Net Profit / (Loss)                     £X,XXX
```

**Relevant May data (from accounting system):**
| Account | May Actual (£) | May Budget (£) |
|---------|---------------|----------------|
| Revenue — NovaFlow Core | 32,500 | 35,000 |
| Revenue — NovaFlow Pro | 28,700 | 30,000 |
| Revenue — NovaFlow Enterprise | 22,500 | 25,000 |
| Revenue — NovaAnalytics | 8,900 | 10,000 |
| Revenue — NovaSupport | 3,200 | 4,000 |
| Revenue — Professional Services | 4,500 | 5,000 |
| Cloud Infrastructure (AWS/Azure/GCP) | 5,800 | 5,000 |
| Payment Processing Fees | 1,200 | 1,400 |
| Employee Costs (total) | 192,400 | 185,000 |
| Rent & Office | 7,200 | 7,000 |
| Software Subscriptions | 8,400 | 7,500 |
| Sales & Marketing | 6,200 | 8,000 |
| Professional Fees | 4,800 | 4,000 |
| Depreciation | 3,100 | 3,000 |
| Amortisation | 2,800 | 2,800 |
| Other Operating Costs | 3,900 | 3,500 |
| Interest Expense | 375 | 400 |
| Corporation Tax (estimate) | 0 | 0 |

**Calculate:**
- Actual Gross Profit and Gross Margin %
- Actual Net Profit/Loss
- The variance (Actual vs Budget) for each line item
- The biggest negative variance and your recommendation

### Task 4.2: Fixed Asset Register
**Files:** `data/chart-of-accounts.csv`

Using the opening balances, build a fixed asset register:

| Asset Category | Cost (£) | Accum. Deprec. (£) | NBV (£) | Deprec. Rate | Monthly Deprec. |
|---------------|----------|-------------------|---------|-------------|----------------|
| Office Equipment | 35,000 | (14,000) | 21,000 | 20% SL | ? |
| Computer Equipment | 128,000 | (64,000) | 64,000 | 33% SL | ? |
| Software Dev (Capitalised) | 210,000 | (84,000) | 126,000 | 20% SL | ? |

**Calculate:** Monthly depreciation for each category. Verify the accumulated depreciation makes sense.

### Task 4.3: Key Metrics Summary for Board Pack
Calculate:
1. **Burn Rate** (avg monthly net cash outflow over last 3 months)
   - April: Net cash flow = +£3,200
   - May: Net cash flow = -£8,500
   - June (YTD): Net cash flow = ? (calculate from statement)
2. **Runway** (Cash ÷ Burn Rate) — months until cash runs out
3. **AR Days** (Debtors ÷ Revenue × 365)
4. **AP Days** (Creditors ÷ COGS × 365)

## Deliverables
1. ✅ May 2026 P&L with budget variances
2. ✅ Fixed asset register with depreciation
3. ✅ Key metrics (burn rate, runway, AR/AP days) for board pack
