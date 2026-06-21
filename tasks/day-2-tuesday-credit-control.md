# Day 2 — Tuesday 23rd June 2026: Credit Control & Supplier Payments

## Morning Brief (from James Okonkwo, Sales Director)
> *"Finance! Good timing. We've got a few customers who are dragging their feet on payment. Westwood Associates (INV-2026-0515, £3,480) are now 12 days overdue. TechVista Ltd (INV-2026-0502, £4,995) are at 23 days. And Harbour Logistics (INV-2026-0412, £6,240) — that's been sitting since April. Can you run the full debtors report and tell me who we need to chase? Also, I've got a new client — **Meridian Trust Group** — signatory expected this week for NovaFlow Enterprise at £2,499/mo. Need a credit check done before we activate."*

## Today's Tasks

### Task 2.1: Aged Debtors Analysis
**Files:** `data/transactions/debtors-aged-analysis.csv`, `data/transactions/sales-invoices-june.csv`

Create a full aged debtors summary. Use today as 23rd June 2026.

| Aging Bucket | Total (£) | Count |
|-------------|-----------|-------|
| Current (not yet due) | | |
| 1-30 Days overdue | | |
| 31-60 Days overdue | | |
| 61-90 Days overdue | | |
| 90+ Days overdue | | |
| **Total Outstanding** | | |

**Then calculate:** What % of total receivables is overdue?

### Task 2.2: Chase Plan
Prioritise the top 3 accounts to chase today. For each:
- Customer name, invoice ID, amount, days overdue
- Suggested action (call/email/escalate to collections?)
- Your recommended next step

### Task 2.3: Credit Check — Meridian Trust Group
You've run a basic credit check. Meridian Trust Group has:
- Registered: 14 months ago
- Credit Score: 62/100 (moderate risk)
- Previous County Court Judgements (CCJs): 1 (satisfied, £1,200 — 8 months ago)
- Industry: Financial Services Consulting
- Annual turnover: £1.2M (self-declared)

**Decision:** Do you recommend:
- (a) Proceed with standard terms (30 days)
- (b) Proceed with reduced terms (14 days)
- (c) Proceed with prepayment only
- (d) Decline and refer to Sales Director

Write your recommendation with justification.

### Task 2.4: Supplier Payment Run
**Files:** `data/transactions/purchase-invoices-june.csv`

It's Tuesday — our standard supplier payment day. The following are due for payment this week:
- WeWork (£3,600) — overdue from 01-Jun
- SendGrid (£612) — due 05-Jul
- Intercom (£720) — due 04-Jul
- HubSpot (£2,880) — due 03-Jul
- Google Cloud (£1,068) — due 04-Jul
- Northern Power Grid (£744) — due 06-Jul

Available balance in Barclays Main: ~£159,000.

Who do you pay today and who can wait? Prioritise suppliers who are already overdue.

## Deliverables
1. ✅ Aged debtors summary (prepare for James)
2. ✅ Chase plan — top 3 priorities
3. ✅ Credit check recommendation for Meridian Trust Group
4. ✅ Payment run instructions for this week
