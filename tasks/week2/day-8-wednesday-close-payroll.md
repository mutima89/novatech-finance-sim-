# Day 8 — Wednesday 1st July 2026: Month-End Close — Payroll & Fixed Assets

## Morning Brief (from Sarah Chen, CEO)
> *"First day of H2! Two new engineers start today — Sr Backend Dev at £75k and DevOps at £65k. Mark says they need laptops urgently — can we fast-track the MacBook order from the Apple account? Also, we need to process the July payroll run — RTI needs submitting by 3rd July. Oh, and James closed Meridian Trust Group (NovaFlow Enterprise at £2,499/mo — starts today!)."*

## Today's Tasks

### Task 8.1: July Payroll — New Hires Onboarding
**New employees starting 1st July:**

| Employee | Name | Role | Salary | Monthly Gross | NI Cat | Pension Opt-in |
|----------|------|------|--------|--------------|--------|---------------|
| EMP-031 | Alex Rivera | Sr Backend Developer | £75,000 | £6,250 | A | YES |
| EMP-032 | Samira Hassan | DevOps Engineer | £65,000 | £5,417 | A | YES |

**Payroll calculation for July (full month):**

| Employee | Gross Pay | Employee NI (est.) | Employee Pension (5%) | Employer NI (13.8%) | Employer Pension (3%) | Net Pay to Employee |
|----------|-----------|-------------------|----------------------|--------------------|---------------------|-------------------|
| Alex Rivera | £6,250 | | | | | |
| Samira Hassan | £5,417 | | | | | |

**NI calculation (2025/26 rates for Category A):**
- 0% on first £758/mo (Primary Threshold)
- 8% on £758.01 to £4,189/mo
- 2% on earnings above £4,189/mo
- Employer: 13.8% on earnings above £758/mo

**Pension:**
- Employee: 5% of qualifying earnings (between £520 and £4,189/mo)
- Employer: 3% of qualifying earnings

Calculate the net pay for each new hire and the total employer cost.

### Task 8.2: July Monthly Payroll Run
**Current employees (48):** total gross = £195,000
**New hires (2):** total gross = £11,667

**Questions:**
1. What is the total July gross payroll?
2. What is the total employer NI (current 48 + new 2)?
3. What is the total employer pension?
4. What total cash is needed for July payroll (net pay)?
5. What is the fully-loaded cost of payroll for July?

### Task 8.3: June Depreciation & Amortisation
Using the fixed asset schedule (`data/assets/fixed-asset-schedule.csv`):

**June additions to capitalise:**
- MacBook Pro M4 x2 (FA-010): £4,598 — purchased 8th June
- PowerEdge Servers x2 (FA-012): £7,200 — but only deposit of £4,320 paid so far

**Calculate:**
1. Total depreciation for June (existing assets + new additions pro-rata)
2. Amortisation for June (capitalised software development)
3. Journal entry to post depreciation/amortisation

### Task 8.4: New Customer Onboarding — Meridian Trust Group
Meridian Trust signed today: NovaFlow Enterprise at £2,499/mo.

Your credit check (Day 2) should have recommended terms. Regardless of what you chose, the decision was to proceed.

**Revenue recognition:**
- Contract signed: 1st July
- First invoice: 1st July (for July service)
- Payment terms: whatever you recommended

**Journal for first invoice:**
```
Dr. Trade Debtors       £2,998.80 (inc VAT)
   Cr. Sales Revenue               £2,499.00
   Cr. VAT Payable                  £499.80
```

**Cash flow impact:** When will the cash arrive based on your recommended terms?

## Deliverables
1. ✅ New hire payroll calculations (net pay, NI, pension)
2. ✅ July total payroll costing
3. ✅ June depreciation/amortisation journal
4. ✅ Meridian Trust onboarding — revenue and cash flow impact
