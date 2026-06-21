# Day 1 — Monday 22nd June 2026: Month-End Reconciliation Kickoff

## Morning Brief (from Sarah Chen, CEO)
> *"Morning! Hope you had a good weekend. We're mid-June and I need the Month 5 (May) management accounts by end of this week. Also, James O mentioned that Oxbridge Analytics called — they say they paid us last week but I can't see it on my radar. Can you check?"*

## Today's Tasks

### Task 1.1: Bank Reconciliation — Barclays Main (as at 19th June)
**Files:** `data/transactions/bank-statement-barclays-main-june.csv`

Your general ledger shows the following entries that **should** match the bank statement up to 19th June. Reconcile them:

| Date | Reference | Description | GL Amount |
|------|-----------|-------------|-----------|
| 01-Jun | DD-8721 | WeWork rent | £3,600 |
| 02-Jun | DD-8722 | AWS hosting | £5,100 |
| 02-Jun | PAY-601 | DataFlow Corp | £2,157.60 |
| 03-Jun | PAY-602 | Manchester Digital | £1,794.00 |
| 03-Jun | INT-101 | Payroll transfer | £48,720 |
| 05-Jun | PAY-605 | Pinnacle Media | £1,173.60 |
| 05-Jun | DD-8723 | Apple Inc - MacBooks | £5,517.60 |
| 06-Jun | PAY-608 | Quantum Startups | £1,612.80 |
| 08-Jun | CHQ-301 | HubSpot Q3 | £2,880 |
| 09-Jun | DD-8724 | Intercom | £720 |
| 09-Jun | CHQ-302 | Stripe fees | £1,416 |
| 10-Jun | BP-550 | Loan repayment | £4,500 |
| 12-Jun | DD-8725 | SendGrid | £612 |
| 15-Jun | CHQ-303 | Microsoft 365 | £5,616 |
| 18-Jun | DD-8726 | BT Business | £408 |
| 19-Jun | CHQ-304 | LegalEagle | £2,880 |

**Check:** Is the bank statement balance correct? Are there any missing entries or discrepancies?

### Task 1.2: Customer Payment Query
Oxbridge Analytics claims they paid INV-2026-0603 (£2,998.80) on 16th June. Check the bank statement and sales ledger. Did they pay? If not, what do you tell Sarah?

### Task 1.3: VAT Review
The quarterly VAT payment of £12,300 left the account on 26th June (per the statement). Look at the opening VAT balances and June transactions. Run a quick VAT control check:
- Opening VAT Payable (from opening balances): £12,300
- Add: Output VAT on June sales invoices
- Less: Input VAT on June purchase invoices
- What should the closing VAT position be?

## Deliverables
1. ✅ Completed bank reconciliation spreadsheet
2. ✅ Email draft to Sarah re: Oxbridge payment status
3. ✅ VAT control account check
