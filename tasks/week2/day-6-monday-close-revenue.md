# Day 6 — Monday 29th June 2026: Month-End Close — Revenue & AR

## Morning Brief (from Sarah Chen, CEO)
> *"Last week of June. Need the month-end closed by Thursday. Let's start with revenue — are all invoices out? Also, Sterling Partners (the £12,500 that's been sitting since March) finally responded. They say they can pay £7,500 now and the rest in 30 days. I'm inclined to accept but want your view on the provision impact."*

## Today's Tasks

### Task 6.1: June Revenue Reconciliation
**Files:** `data/transactions/sales-invoices-june.csv`, `data/transactions/bank-statement-barclays-main-june.csv`

Total June invoices raised: Sum the gross amounts from all invoices.
Revenue to recognise (excluding deferred revenue portion):

| Product | June Invoices (£) | Month's Recurring | One-Time / Setup |
|---------|------------------|-------------------|------------------|
| NovaFlow Core | | | |
| NovaFlow Pro | | | |
| NovaFlow Enterprise | | | |
| NovaAnalytics | | | |
| NovaSupport | | | |
| **Total** | | | |

**Calculate:** 
1. Total June invoicing
2. Of which is recurring monthly vs one-time/setup
3. What cash has been received so far (check bank statement credits)

### Task 6.2: Sterling Partners Settlement Proposal
Sterling Partners (INV-2026-0310) owes £12,500 from 10th March.

**Their proposal:** Pay £7,500 now, remaining £5,000 in 30 days.

**Current provision policy:** 2% of gross revenue as bad debt provision.
**Specific provision:** Should we book a specific provision against this?

Your analysis:
- Age: 111 days overdue (61-90+ bucket)
- Legal position: Contract allows service suspension after 90 days
- Proposal: They're offering 60% now
- Risk: If they go under, we get nothing

**Recommend:** Do you accept the settlement? What entry do you book?
```
Dr. Bank                   £7,500
Dr. Bad Debt Expense       £5,000
   Cr. Trade Debtors                  £12,500
```

Or do you hold out for the full amount?

### Task 6.3: Month-End Revenue Journals
Book the following adjusting entries for June:

**Deferred revenue amortisation:**
- Opening deferred revenue: £15,750
- Amount to recognise in June: £5,000 (portion of annual contracts earned)
- New deferred from June invoices: £3,200 (annual contracts starting mid-June)

**Prepaid expense amortisation:**
- Opening prepaid: £12,400
- Amount to amortise in June: £2,100 (insurance, MS365 annual)
- New prepaid additions: Microsoft 365 annual (£5,616 — from PO-2026-0608)

**Required:** Write the journal entries for deferred revenue and prepayments.

### Task 6.4: AR Aging Update
Using the existing data, project what the aged debtors will look like at 30th June.

| Customer | Current | 1-30 | 31-60 | 61-90 | 90+ | Total |
|----------|---------|------|-------|-------|-----|-------|
| Sterling Partners | — | — | — | — | | |
| Harbour Logistics | — | — | — | | — | |
| (carry over all existing + June invoices) | | | | | | |

Which accounts need escalation this week?

## Deliverables
1. ✅ June revenue reconciliation
2. ✅ Sterling Partners settlement recommendation + journal
3. ✅ Month-end adjusting journals (deferred revenue, prepayments)
4. ✅ Projected AR aging at 30th June
