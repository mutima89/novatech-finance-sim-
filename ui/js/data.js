// ============================================================
// NovaTech Finance Simulation — Embedded Dataset
// ============================================================

const COMPANY = {
  name: "NovaTech Solutions Ltd.",
  legal: "NovaTech Solutions Ltd.",
  trading: "NovaTech",
  industry: "SaaS / Cloud Software",
  founded: "January 2019",
  employees: 48,
  legalStructure: "Private Limited Company (Ltd)",
  currency: "GBP (£)",
  vatReg: "GB-372-9814-55",
  coNo: "11223344",
  address: "71 Innovation Drive, Tech Park, Manchester M1 2WD, United Kingdom",
  banks: [
    { name: "Barclays Main", sort: "20-45-78", acc: "89374621", type: "Business Current" },
    { name: "Barclays Payroll", sort: "20-45-78", acc: "89374622", type: "Business Reserve" },
    { name: "Starling Expense", sort: "60-83-10", acc: "37281900", type: "Business Debit" }
  ],
  people: [
    { role: "CEO / Founder", name: "Sarah Chen", email: "s.chen@novatech.dev" },
    { role: "CTO", name: "Mark Rivers", email: "m.rivers@novatech.dev" },
    { role: "Finance Manager", name: "[You]", email: "finance@novatech.dev" },
    { role: "Sales Director", name: "James Okonkwo", email: "j.okonkwo@novatech.dev" },
    { role: "Head of Engineering", name: "Priya Sharma", email: "p.sharma@novatech.dev" }
  ],
  products: [
    { name: "NovaFlow Core", sku: "NFC-", price: 299, desc: "Workflow automation platform" },
    { name: "NovaFlow Pro", sku: "NFP-", price: 899, desc: "Advanced automation with API" },
    { name: "NovaFlow Enterprise", sku: "NFE-", price: 2499, desc: "Custom workflow + SLA" },
    { name: "NovaAnalytics", sku: "NNA-", price: 149, desc: "Business intelligence add-on" },
    { name: "NovaSupport Add-On", sku: "NNS-", price: 79, desc: "Priority support + account mgr" }
  ]
};

// ======== CHART OF ACCOUNTS ========
const CHART_OF_ACCOUNTS = [
  { code: "1000", name: "Cash at Bank - Barclays Main", category: "Current Assets", type: "Debit" },
  { code: "1010", name: "Cash at Bank - Barclays Payroll", category: "Current Assets", type: "Debit" },
  { code: "1020", name: "Cash at Bank - Starling Expense", category: "Current Assets", type: "Debit" },
  { code: "1100", name: "Trade Debtors / Accounts Receivable", category: "Current Assets", type: "Debit" },
  { code: "1200", name: "Prepaid Expenses", category: "Current Assets", type: "Debit" },
  { code: "1300", name: "VAT Reclaimable", category: "Current Assets", type: "Debit" },
  { code: "1400", name: "Office Equipment (Cost)", category: "Fixed Assets", type: "Debit" },
  { code: "1410", name: "Accum. Depreciation - Office Equipment", category: "Fixed Assets", type: "Credit" },
  { code: "1500", name: "Computer Equipment (Cost)", category: "Fixed Assets", type: "Debit" },
  { code: "1510", name: "Accum. Depreciation - Computer Equipment", category: "Fixed Assets", type: "Credit" },
  { code: "1600", name: "Software Development (Capitalised)", category: "Intangible Assets", type: "Debit" },
  { code: "1610", name: "Accum. Amortisation - Software", category: "Intangible Assets", type: "Credit" },
  { code: "2000", name: "Trade Creditors / Accounts Payable", category: "Current Liabilities", type: "Credit" },
  { code: "2100", name: "Accrued Expenses", category: "Current Liabilities", type: "Credit" },
  { code: "2200", name: "VAT Payable", category: "Current Liabilities", type: "Credit" },
  { code: "2300", name: "PAYE / NI Payable", category: "Current Liabilities", type: "Credit" },
  { code: "2400", name: "Pension Payable", category: "Current Liabilities", type: "Credit" },
  { code: "2500", name: "Corporation Tax Payable", category: "Current Liabilities", type: "Credit" },
  { code: "2600", name: "Deferred Revenue", category: "Current Liabilities", type: "Credit" },
  { code: "2700", name: "Bank Loan (Short Term)", category: "Current Liabilities", type: "Credit" },
  { code: "3000", name: "Share Capital", category: "Equity", type: "Credit" },
  { code: "3100", name: "Retained Earnings", category: "Equity", type: "Credit" },
  { code: "3200", name: "Profit & Loss Account", category: "Equity", type: "Credit" },
  { code: "4000", name: "Sales - NovaFlow Core", category: "Revenue", type: "Credit" },
  { code: "4010", name: "Sales - NovaFlow Pro", category: "Revenue", type: "Credit" },
  { code: "4020", name: "Sales - NovaFlow Enterprise", category: "Revenue", type: "Credit" },
  { code: "4030", name: "Sales - NovaAnalytics", category: "Revenue", type: "Credit" },
  { code: "4040", name: "Sales - NovaSupport Add-On", category: "Revenue", type: "Credit" },
  { code: "4100", name: "Sales - Professional Services", category: "Revenue", type: "Credit" },
  { code: "5000", name: "Cost of Sales - Cloud Infrastructure", category: "Cost of Sales", type: "Debit" },
  { code: "5100", name: "Cost of Sales - Payment Processing", category: "Cost of Sales", type: "Debit" },
  { code: "6000", name: "Employee Salaries", category: "Expenses", type: "Debit" },
  { code: "6010", name: "Employer Pension Contributions", category: "Expenses", type: "Debit" },
  { code: "6020", name: "Employer NI Contributions", category: "Expenses", type: "Debit" },
  { code: "6100", name: "Rent & Office Costs", category: "Expenses", type: "Debit" },
  { code: "6110", name: "Utilities & Internet", category: "Expenses", type: "Debit" },
  { code: "6120", name: "Office Supplies", category: "Expenses", type: "Debit" },
  { code: "6200", name: "Sales & Marketing", category: "Expenses", type: "Debit" },
  { code: "6210", name: "Software Subscriptions", category: "Expenses", type: "Debit" },
  { code: "6220", name: "Travel & Accommodation", category: "Expenses", type: "Debit" },
  { code: "6230", name: "Entertainment & Client Meals", category: "Expenses", type: "Debit" },
  { code: "6300", name: "Professional Fees (Legal & Accounting)", category: "Expenses", type: "Debit" },
  { code: "6310", name: "Insurance", category: "Expenses", type: "Debit" },
  { code: "6320", name: "Bank Charges & Interest", category: "Expenses", type: "Debit" },
  { code: "6400", name: "Depreciation", category: "Expenses", type: "Debit" },
  { code: "6410", name: "Amortisation", category: "Expenses", type: "Debit" },
  { code: "6500", name: "Other Operating Costs", category: "Expenses", type: "Debit" },
  { code: "7000", name: "Other Income", category: "Other Income", type: "Credit" },
  { code: "7100", name: "Interest Received", category: "Other Income", type: "Credit" }
];

// ======== OPENING BALANCES ========
const OPENING_BALANCES = [
  { code: "1000", name: "Cash at Bank - Barclays Main", balance: 247830.55 },
  { code: "1010", name: "Cash at Bank - Barclays Payroll", balance: 0.00 },
  { code: "1020", name: "Cash at Bank - Starling Expense", balance: 5000.00 },
  { code: "1100", name: "Trade Debtors / AR", balance: 89450.00 },
  { code: "1200", name: "Prepaid Expenses", balance: 12400.00 },
  { code: "1300", name: "VAT Reclaimable", balance: 8200.00 },
  { code: "1400", name: "Office Equipment (Cost)", balance: 35000.00 },
  { code: "1410", name: "Accum Depreciation - Office Equip", balance: -14000.00 },
  { code: "1500", name: "Computer Equipment (Cost)", balance: 128000.00 },
  { code: "1510", name: "Accum Depreciation - Computer Equip", balance: -64000.00 },
  { code: "1600", name: "Software Development (Capitalised)", balance: 210000.00 },
  { code: "1610", name: "Accum Amortisation - Software", balance: -84000.00 },
  { code: "2000", name: "Trade Creditors / AP", balance: -31200.00 },
  { code: "2100", name: "Accrued Expenses", balance: -8800.00 },
  { code: "2200", name: "VAT Payable", balance: -12300.00 },
  { code: "2300", name: "PAYE / NI Payable", balance: -18700.00 },
  { code: "2400", name: "Pension Payable", balance: -4200.00 },
  { code: "2600", name: "Deferred Revenue", balance: -15750.00 },
  { code: "2700", name: "Bank Loan (Short Term)", balance: -50000.00 },
  { code: "3000", name: "Share Capital", balance: -100000.00 },
  { code: "3100", name: "Retained Earnings", balance: -315530.55 },
  { code: "3200", name: "Profit & Loss Account (YTD)", balance: -17400.00 }
];

// ======== SALES INVOICES ========
const SALES_INVOICES = [
  { id: "INV-2026-0601", customer: "DataFlow Corp", date: "01-Jun-26", due: "30-Jun-26", products: "NovaFlow Pro x2", net: 1798.00, vat: 359.60, gross: 2157.60, status: "Paid" },
  { id: "INV-2026-0602", customer: "Manchester Digital Ltd", date: "02-Jun-26", due: "02-Jul-26", products: "NovaFlow Core x5", net: 1495.00, vat: 299.00, gross: 1794.00, status: "Paid" },
  { id: "INV-2026-0603", customer: "Oxbridge Analytics", date: "03-Jun-26", due: "03-Jul-26", products: "NovaFlow Enterprise x1", net: 2499.00, vat: 499.80, gross: 2998.80, status: "Unpaid" },
  { id: "INV-2026-0604", customer: "GreenLeaf Consulting", date: "04-Jun-26", due: "04-Jul-26", products: "NovaAnalytics x3", net: 447.00, vat: 89.40, gross: 536.40, status: "Unpaid" },
  { id: "INV-2026-0605", customer: "Pinnacle Media Group", date: "05-Jun-26", due: "05-Jul-26", products: "NovaFlow Pro x1 + NovaSupport x1", net: 978.00, vat: 195.60, gross: 1173.60, status: "Paid" },
  { id: "INV-2026-0606", customer: "Atlas Logistics Ltd", date: "05-Jun-26", due: "05-Jul-26", products: "NovaFlow Core x8", net: 2392.00, vat: 478.40, gross: 2870.40, status: "Unpaid" },
  { id: "INV-2026-0607", customer: "North Shore Hospital", date: "08-Jun-26", due: "08-Jul-26", products: "NovaFlow Enterprise x2", net: 4998.00, vat: 999.60, gross: 5997.60, status: "Unpaid" },
  { id: "INV-2026-0608", customer: "Quantum Startups Inc", date: "09-Jun-26", due: "09-Jul-26", products: "NovaFlow Core x3 + NovaAnalytics x3", net: 1344.00, vat: 268.80, gross: 1612.80, status: "Paid" },
  { id: "INV-2026-0609", customer: "Thornton & Sons Ltd", date: "10-Jun-26", due: "10-Jul-26", products: "NovaFlow Pro x2 + NovaSupport x2", net: 1956.00, vat: 391.20, gross: 2347.20, status: "Unpaid" },
  { id: "INV-2026-0610", customer: "City University London", date: "11-Jun-26", due: "11-Jul-26", products: "NovaFlow Enterprise x1 + NovaAnalytics x3", net: 2646.00, vat: 529.20, gross: 3175.20, status: "Unpaid" },
  { id: "INV-2026-0611", customer: "Reed Shipping Co", date: "12-Jun-26", due: "12-Jul-26", products: "NovaFlow Core x4", net: 1196.00, vat: 239.20, gross: 1435.20, status: "Unpaid" },
  { id: "INV-2026-0612", customer: "BrightPath Education", date: "15-Jun-26", due: "15-Jul-26", products: "NovaAnalytics x10", net: 1490.00, vat: 298.00, gross: 1788.00, status: "Unpaid" },
  { id: "INV-2026-0613", customer: "Fortress Security Group", date: "16-Jun-26", due: "16-Jul-26", products: "NovaFlow Pro x3", net: 2697.00, vat: 539.40, gross: 3236.40, status: "Unpaid" },
  { id: "INV-2026-0614", customer: "WebCraft Agency", date: "18-Jun-26", due: "18-Jul-26", products: "NovaFlow Core x6 + NovaSupport x2", net: 1952.00, vat: 390.40, gross: 2342.40, status: "Unpaid" },
  { id: "INV-2026-0615", customer: "Aviva Health Partners", date: "19-Jun-26", due: "19-Jul-26", products: "NovaFlow Enterprise x1 + NovaAnalytics x1 + NovaSupport x1", net: 2727.00, vat: 545.40, gross: 3272.40, status: "Unpaid" },
  { id: "INV-2026-0616", customer: "St. Mary's School Trust", date: "22-Jun-26", due: "22-Jul-26", products: "NovaFlow Core x12", net: 3588.00, vat: 717.60, gross: 4305.60, status: "Unpaid" },
  { id: "INV-2026-0617", customer: "OmniTech Solutions", date: "23-Jun-26", due: "23-Jul-26", products: "NovaFlow Pro x2 + NovaAnalytics x2", net: 2096.00, vat: 419.20, gross: 2515.20, status: "Unpaid" },
  { id: "INV-2026-0618", customer: "Summit Hospitality", date: "25-Jun-26", due: "25-Jul-26", products: "NovaAnalytics x5", net: 745.00, vat: 149.00, gross: 894.00, status: "Unpaid" },
  { id: "INV-2026-0619", customer: "Phoenix Insurance Ltd", date: "26-Jun-26", due: "26-Jul-26", products: "NovaFlow Enterprise x1", net: 2499.00, vat: 499.80, gross: 2998.80, status: "Unpaid" },
  { id: "INV-2026-0620", customer: "Creative Spark Agency", date: "30-Jun-26", due: "30-Jul-26", products: "NovaFlow Core x3", net: 897.00, vat: 179.40, gross: 1076.40, status: "Unpaid" }
];

// ======== PURCHASE INVOICES ========
const PURCHASE_INVOICES = [
  { id: "PO-2026-0601", vendor: "AWS", date: "01-Jun-26", due: "15-Jun-26", desc: "May cloud infra (EC2 + RDS + S3)", net: 4250.00, vat: 850.00, gross: 5100.00, status: "Paid" },
  { id: "PO-2026-0602", vendor: "WeWork", date: "01-Jun-26", due: "01-Jul-26", desc: "Monthly office rent - June", net: 3000.00, vat: 600.00, gross: 3600.00, status: "Unpaid" },
  { id: "PO-2026-0603", vendor: "HubSpot", date: "03-Jun-26", due: "03-Jul-26", desc: "Q3 CRM subscription (quarterly)", net: 2400.00, vat: 480.00, gross: 2880.00, status: "Unpaid" },
  { id: "PO-2026-0604", vendor: "Intercom", date: "04-Jun-26", due: "04-Jul-26", desc: "June customer messaging platform", net: 600.00, vat: 120.00, gross: 720.00, status: "Unpaid" },
  { id: "PO-2026-0605", vendor: "SendGrid (Twilio)", date: "05-Jun-26", due: "05-Jul-26", desc: "May email delivery services", net: 510.00, vat: 102.00, gross: 612.00, status: "Unpaid" },
  { id: "PO-2026-0606", vendor: "Stripe", date: "06-Jun-26", due: "06-Jul-26", desc: "May payment processing fees", net: 1180.00, vat: 236.00, gross: 1416.00, status: "Unpaid" },
  { id: "PO-2026-0607", vendor: "Apple Inc", date: "08-Jun-26", due: "22-Jun-26", desc: 'MacBook Pro 14" M4 x2', net: 4598.00, vat: 919.60, gross: 5517.60, status: "Paid" },
  { id: "PO-2026-0608", vendor: "Microsoft Corp", date: "10-Jun-26", due: "10-Jul-26", desc: "Microsoft 365 Business x50 (annual)", net: 4680.00, vat: 936.00, gross: 5616.00, status: "Unpaid" },
  { id: "PO-2026-0609", vendor: "BT Business", date: "10-Jun-26", due: "01-Jul-26", desc: "June office broadband & phone", net: 340.00, vat: 68.00, gross: 408.00, status: "Unpaid" },
  { id: "PO-2026-0610", vendor: "LegalEagle LLP", date: "12-Jun-26", due: "12-Jul-26", desc: "Contract review - Aviva Health", net: 2400.00, vat: 480.00, gross: 2880.00, status: "Unpaid" },
  { id: "PO-2026-0611", vendor: "WealthGuard Insurance", date: "15-Jun-26", due: "15-Jul-26", desc: "Q3 employer liability & PI insurance", net: 1850.00, vat: 370.00, gross: 2220.00, status: "Unpaid" },
  { id: "PO-2026-0612", vendor: "Dell Technologies", date: "17-Jun-26", due: "01-Jul-26", desc: "PowerEdge Server x2 (infra upgrade)", net: 7200.00, vat: 1440.00, gross: 8640.00, status: "Unpaid" },
  { id: "PO-2026-0613", vendor: "Staples UK", date: "18-Jun-26", due: "02-Jul-26", desc: "Office supplies - June order", net: 380.00, vat: 76.00, gross: 456.00, status: "Unpaid" },
  { id: "PO-2026-0614", vendor: "Google Cloud", date: "20-Jun-26", due: "04-Jul-26", desc: "May Google Workspace + GCP usage", net: 890.00, vat: 178.00, gross: 1068.00, status: "Unpaid" },
  { id: "PO-2026-0615", vendor: "Northern Power Grid", date: "22-Jun-26", due: "06-Jul-26", desc: "Q2 office electricity bill", net: 620.00, vat: 124.00, gross: 744.00, status: "Unpaid" },
  { id: "PO-2026-0616", vendor: "Eventbrite", date: "25-Jun-26", due: "09-Jul-26", desc: "Annual user conference - venue deposit", net: 3500.00, vat: 700.00, gross: 4200.00, status: "Unpaid" },
  { id: "PO-2026-0617", vendor: "Upwork", date: "28-Jun-26", due: "12-Jul-26", desc: "Contract developer (freelance - API)", net: 3200.00, vat: 640.00, gross: 3840.00, status: "Unpaid" },
  { id: "PO-2026-0618", vendor: "PWC Accountants", date: "30-Jun-26", due: "14-Jul-26", desc: "June advisory & tax compliance retainer", net: 4000.00, vat: 800.00, gross: 4800.00, status: "Unpaid" }
];

// ======== BANK STATEMENTS ========
const BANK_MAIN = [
  { date: "01-Jun-26", type: "B/FWD", desc: "Balance brought forward", ref: "", debit: 0, credit: 0, balance: 247830.55 },
  { date: "01-Jun-26", type: "DD", desc: "WeWork - June rent", ref: "DD-8721", debit: 3600.00, credit: 0, balance: 244230.55 },
  { date: "02-Jun-26", type: "DD", desc: "AWS - May hosting", ref: "DD-8722", debit: 5100.00, credit: 0, balance: 239130.55 },
  { date: "02-Jun-26", type: "BACS", desc: "DataFlow Corp - INV-2026-0601", ref: "PAY-601", debit: 0, credit: 2157.60, balance: 241288.15 },
  { date: "03-Jun-26", type: "BACS", desc: "Manchester Digital Ltd - INV-2026-0602", ref: "PAY-602", debit: 0, credit: 1794.00, balance: 243082.15 },
  { date: "03-Jun-26", type: "CHAPS", desc: "Payroll transfer to Barclays Payroll", ref: "INT-101", debit: 48720.00, credit: 0, balance: 194362.15 },
  { date: "05-Jun-26", type: "BACS", desc: "Pinnacle Media Group - INV-2026-0605", ref: "PAY-605", debit: 0, credit: 1173.60, balance: 195535.75 },
  { date: "05-Jun-26", type: "DD", desc: "Apple Inc - MacBooks PO-2026-0607", ref: "DD-8723", debit: 5517.60, credit: 0, balance: 190018.15 },
  { date: "06-Jun-26", type: "BACS", desc: "Quantum Startups Inc - INV-2026-0608", ref: "PAY-608", debit: 0, credit: 1612.80, balance: 191630.95 },
  { date: "08-Jun-26", type: "BACS", desc: "HubSpot - Q3 subscription", ref: "CHQ-301", debit: 2880.00, credit: 0, balance: 188750.95 },
  { date: "09-Jun-26", type: "DD", desc: "Intercom - June platform", ref: "DD-8724", debit: 720.00, credit: 0, balance: 188030.95 },
  { date: "09-Jun-26", type: "BACS", desc: "Stripe - May processing fees", ref: "CHQ-302", debit: 1416.00, credit: 0, balance: 186614.95 },
  { date: "10-Jun-26", type: "CHAPS", desc: "Bank Loan Repayment (instalment 6/12)", ref: "BP-550", debit: 4500.00, credit: 0, balance: 182114.95 },
  { date: "12-Jun-26", type: "DD", desc: "SendGrid - May email delivery", ref: "DD-8725", debit: 612.00, credit: 0, balance: 181502.95 },
  { date: "15-Jun-26", type: "BACS", desc: "Microsoft 365 annual license", ref: "CHQ-303", debit: 5616.00, credit: 0, balance: 175886.95 },
  { date: "16-Jun-26", type: "LODGEMENT", desc: "Cheque deposit - June contracts", ref: "DEP-01", debit: 0, credit: 3535.20, balance: 179422.15 },
  { date: "18-Jun-26", type: "DD", desc: "BT Business - June broadband", ref: "DD-8726", debit: 408.00, credit: 0, balance: 179014.15 },
  { date: "19-Jun-26", type: "BACS", desc: "LegalEagle LLP - Contract review", ref: "CHQ-304", debit: 2880.00, credit: 0, balance: 176134.15 },
  { date: "22-Jun-26", type: "DD", desc: "Google Cloud - May usage", ref: "DD-8727", debit: 1068.00, credit: 0, balance: 175066.15 },
  { date: "23-Jun-26", type: "BACS", desc: "OmniTech Solutions (early settlement)", ref: "PAY-617", debit: 0, credit: 2464.90, balance: 177531.05 },
  { date: "24-Jun-26", type: "BACS", desc: "Staples UK - Office supplies", ref: "CHQ-305", debit: 456.00, credit: 0, balance: 177075.05 },
  { date: "25-Jun-26", type: "DD", desc: "Dell Technologies - Servers (deposit)", ref: "DD-8728", debit: 4320.00, credit: 0, balance: 172755.05 },
  { date: "26-Jun-26", type: "CHAPS", desc: "Quarterly VAT Payment to HMRC", ref: "BP-551", debit: 12300.00, credit: 0, balance: 160455.05 },
  { date: "27-Jun-26", type: "BACS", desc: "Northern Power Grid - Q2 electricity", ref: "CHQ-306", debit: 744.00, credit: 0, balance: 159711.05 },
  { date: "28-Jun-26", type: "LODGEMENT", desc: "BrightPath Education - INV-0612", ref: "PAY-612", debit: 0, credit: 1788.00, balance: 161499.05 },
  { date: "29-Jun-26", type: "DD", desc: "WealthGuard Insurance - Q3 premium", ref: "DD-8729", debit: 2220.00, credit: 0, balance: 159279.05 },
  { date: "30-Jun-26", type: "INT", desc: "Monthly interest credit", ref: "INT-002", debit: 0, credit: 82.45, balance: 159361.50 }
];

const BANK_PAYROLL = [
  { date: "03-Jun-26", type: "B/FWD", desc: "Balance brought forward", debit: 0, credit: 0, balance: 0.00 },
  { date: "03-Jun-26", type: "CHAPS", desc: "Transfer from Barclays Main (payroll funding)", ref: "INT-101", debit: 0, credit: 48720.00, balance: 48720.00 },
  { date: "03-Jun-26", type: "CHAPS", desc: "HMRC - PAYE & NI (May payroll)", ref: "PAYE-06", debit: 18700.00, credit: 0, balance: 30020.00 },
  { date: "03-Jun-26", type: "CHAPS", desc: "Pension Provider - Workplace pensions", ref: "AEO-06", debit: 4200.00, credit: 0, balance: 25820.00 },
  { date: "03-Jun-26", type: "BACS", desc: "Employee salary payments (net salaries)", ref: "PAYROLL-06", debit: 25820.00, credit: 0, balance: 0.00 }
];

const BANK_STARLING = [
  { date: "01-Jun-26", type: "B/FWD", desc: "Balance brought forward", debit: 0, credit: 0, balance: 5000.00 },
  { date: "02-Jun-26", type: "POS", desc: "Costa Coffee - Client meeting (James O)", ref: "TX-001", debit: 8.50, credit: 0, balance: 4991.50 },
  { date: "03-Jun-26", type: "POS", desc: "Greggs - Office team breakfast", ref: "TX-002", debit: 32.40, credit: 0, balance: 4959.10 },
  { date: "05-Jun-26", type: "POS", desc: "Trainline - James O to London", ref: "TX-003", debit: 128.00, credit: 0, balance: 4831.10 },
  { date: "08-Jun-26", type: "POS", desc: "Uber - Priya S to airport (conference)", ref: "TX-004", debit: 45.00, credit: 0, balance: 4786.10 },
  { date: "10-Jun-26", type: "POS", desc: "Amazon Business - Office cable kit", ref: "TX-005", debit: 67.80, credit: 0, balance: 4718.30 },
  { date: "12-Jun-26", type: "POS", desc: "The Pasta Factory - Team lunch (12 ppl)", ref: "TX-006", debit: 156.00, credit: 0, balance: 4562.30 },
  { date: "15-Jun-26", type: "POS", desc: "Currys - Webcam x5 (remote hires)", ref: "TX-007", debit: 149.50, credit: 0, balance: 4412.80 },
  { date: "17-Jun-26", type: "POS", desc: "OpenTable - Client dinner (Sarah C)", ref: "TX-008", debit: 234.00, credit: 0, balance: 4178.80 },
  { date: "19-Jun-26", type: "BACS", desc: "Adobe Creative Cloud subscription", ref: "TX-009", debit: 59.99, credit: 0, balance: 4118.81 },
  { date: "22-Jun-26", type: "POS", desc: "Trainline - Mark R to Birmingham", ref: "TX-010", debit: 85.00, credit: 0, balance: 4033.81 },
  { date: "24-Jun-26", type: "POS", desc: "WH Smith - Conference supplies", ref: "TX-011", debit: 42.50, credit: 0, balance: 3991.31 },
  { date: "26-Jun-26", type: "POS", desc: "The Botanist - Client drinks event", ref: "TX-012", debit: 312.00, credit: 0, balance: 3679.31 },
  { date: "28-Jun-26", type: "BACS", desc: "DigitalOcean - Side project hosting", ref: "TX-013", debit: 24.00, credit: 0, balance: 3655.31 },
  { date: "30-Jun-26", type: "POS", desc: "Argos - Office chair replacement x2", ref: "TX-014", debit: 289.00, credit: 0, balance: 3366.31 }
];

// ======== DEBTORS AGED ========
const DEBTORS_AGED = [
  { customer: "Oxbridge Analytics", inv: "INV-2026-0603", date: "03-Jun-26", due: "03-Jul-26", amount: 2998.80, bucket: "Current" },
  { customer: "GreenLeaf Consulting", inv: "INV-2026-0604", date: "04-Jun-26", due: "04-Jul-26", amount: 536.40, bucket: "Current" },
  { customer: "Atlas Logistics Ltd", inv: "INV-2026-0606", date: "05-Jun-26", due: "05-Jul-26", amount: 2870.40, bucket: "Current" },
  { customer: "North Shore Hospital", inv: "INV-2026-0607", date: "08-Jun-26", due: "08-Jul-26", amount: 5997.60, bucket: "Current" },
  { customer: "Thornton & Sons Ltd", inv: "INV-2026-0609", date: "10-Jun-26", due: "10-Jul-26", amount: 2347.20, bucket: "Current" },
  { customer: "City University London", inv: "INV-2026-0610", date: "11-Jun-26", due: "11-Jul-26", amount: 3175.20, bucket: "Current" },
  { customer: "Reed Shipping Co", inv: "INV-2026-0611", date: "12-Jun-26", due: "12-Jul-26", amount: 1435.20, bucket: "Current" },
  { customer: "BrightPath Education", inv: "INV-2026-0612", date: "15-Jun-26", due: "15-Jul-26", amount: 1788.00, bucket: "Current" },
  { customer: "Fortress Security Group", inv: "INV-2026-0613", date: "16-Jun-26", due: "16-Jul-26", amount: 3236.40, bucket: "Current" },
  { customer: "WebCraft Agency", inv: "INV-2026-0614", date: "18-Jun-26", due: "18-Jul-26", amount: 2342.40, bucket: "Current" },
  { customer: "Aviva Health Partners", inv: "INV-2026-0615", date: "19-Jun-26", due: "19-Jul-26", amount: 3272.40, bucket: "Current" },
  { customer: "St. Mary's School Trust", inv: "INV-2026-0616", date: "22-Jun-26", due: "22-Jul-26", amount: 4305.60, bucket: "Current" },
  { customer: "OmniTech Solutions", inv: "INV-2026-0617", date: "23-Jun-26", due: "23-Jul-26", amount: 2515.20, bucket: "Current" },
  { customer: "Summit Hospitality", inv: "INV-2026-0618", date: "25-Jun-26", due: "25-Jul-26", amount: 894.00, bucket: "Current" },
  { customer: "Phoenix Insurance Ltd", inv: "INV-2026-0619", date: "26-Jun-26", due: "26-Jul-26", amount: 2998.80, bucket: "Current" },
  { customer: "Creative Spark Agency", inv: "INV-2026-0620", date: "30-Jun-26", due: "30-Jul-26", amount: 1076.40, bucket: "Current" },
  { customer: "Westwood Associates", inv: "INV-2026-0515", date: "12-May-26", due: "11-Jun-26", amount: 3480.00, bucket: "1-30 Days" },
  { customer: "Elm Street Clinic", inv: "INV-2026-0508", date: "05-May-26", due: "04-Jun-26", amount: 2195.00, bucket: "1-30 Days" },
  { customer: "TechVista Ltd", inv: "INV-2026-0502", date: "01-May-26", due: "31-May-26", amount: 4995.00, bucket: "1-30 Days" },
  { customer: "Lakeside Group", inv: "INV-2026-0520", date: "18-May-26", due: "17-Jun-26", amount: 1678.00, bucket: "1-30 Days" },
  { customer: "Harbour Logistics", inv: "INV-2026-0412", date: "08-Apr-26", due: "08-May-26", amount: 6240.00, bucket: "31-60 Days" },
  { customer: "Cornerstone Retail", inv: "INV-2026-0405", date: "02-Apr-26", due: "02-May-26", amount: 3890.00, bucket: "31-60 Days" },
  { customer: "Sterling Partners Inc", inv: "INV-2026-0310", date: "10-Mar-26", due: "09-Apr-26", amount: 12500.00, bucket: "61-90 Days" }
];

// ======== EMPLOYEES ========
const EMPLOYEES = [
  { id: "EMP-001", name: "Sarah Chen", dept: "Executive", role: "CEO", salary: 120000, start: "01-Jan-19" },
  { id: "EMP-002", name: "Mark Rivers", dept: "Executive", role: "CTO", salary: 105000, start: "01-Mar-19" },
  { id: "EMP-003", name: "James Okonkwo", dept: "Sales", role: "Sales Director", salary: 95000, start: "01-Jun-19" },
  { id: "EMP-004", name: "Priya Sharma", dept: "Engineering", role: "Head of Engineering", salary: 95000, start: "01-Sep-19" },
  { id: "EMP-005", name: "Aisha Patel", dept: "Engineering", role: "Sr Backend Developer", salary: 85000, start: "04-Nov-19" },
  { id: "EMP-006", name: "Tom Fletcher", dept: "Engineering", role: "Sr Frontend Developer", salary: 80000, start: "06-Jan-20" },
  { id: "EMP-007", name: "Emma Wilson", dept: "Engineering", role: "Full Stack Developer", salary: 65000, start: "02-Mar-20" },
  { id: "EMP-008", name: "Raj Kapoor", dept: "Engineering", role: "SRE / DevOps", salary: 70000, start: "01-Jun-20" },
  { id: "EMP-009", name: "Lisa Chen", dept: "Engineering", role: "Data Engineer", salary: 72000, start: "01-Sep-20" },
  { id: "EMP-010", name: "David O'Connor", dept: "Engineering", role: "QA Lead", salary: 55000, start: "04-Jan-21" },
  { id: "EMP-011", name: "Nina Johansson", dept: "Engineering", role: "Backend Developer", salary: 60000, start: "01-Mar-21" },
  { id: "EMP-012", name: "Carlos Mendez", dept: "Engineering", role: "Frontend Developer", salary: 55000, start: "01-Jun-21" },
  { id: "EMP-013", name: "Fatima Al-Rashid", dept: "Product", role: "Product Manager", salary: 65000, start: "01-Sep-21" },
  { id: "EMP-014", name: "Oliver Gray", dept: "Sales", role: "Account Executive", salary: 55000, start: "04-Jan-22" },
  { id: "EMP-015", name: "Amara Singh", dept: "Sales", role: "SDR", salary: 35000, start: "07-Mar-22" },
  { id: "EMP-016", name: "Ben Thompson", dept: "Engineering", role: "Jr Developer", salary: 40000, start: "06-Jun-22" },
  { id: "EMP-017", name: "Chloe Wright", dept: "Marketing", role: "Marketing Manager", salary: 45000, start: "05-Sep-22" },
  { id: "EMP-018", name: "Daniel Kim", dept: "Product", role: "Product Designer", salary: 50000, start: "03-Jan-23" },
  { id: "EMP-019", name: "Elena Rossi", dept: "Customer Success", role: "CS Lead", salary: 48000, start: "06-Mar-23" },
  { id: "EMP-020", name: "Freddie Jones", dept: "Customer Success", role: "CSM", salary: 42000, start: "05-Jun-23" },
  { id: "EMP-021", name: "Grace Lee", dept: "Engineering", role: "Jr Backend Developer", salary: 38000, start: "04-Sep-23" },
  { id: "EMP-022", name: "Henry Brown", dept: "Customer Success", role: "Support Engineer", salary: 35000, start: "02-Jan-24" },
  { id: "EMP-023", name: "Ivy Wang", dept: "Marketing", role: "Content Marketing Exec", salary: 32000, start: "04-Mar-24" },
  { id: "EMP-024", name: "Jake Miller", dept: "Sales", role: "SDR", salary: 30000, start: "03-Jun-24" },
  { id: "EMP-025", name: "Katie Scott", dept: "Operations", role: "Office Manager", salary: 28000, start: "02-Sep-24" },
  { id: "EMP-026", name: "Liam Taylor", dept: "Engineering", role: "Jr Frontend Developer", salary: 35000, start: "06-Jan-25" },
  { id: "EMP-027", name: "Mia Clark", dept: "Product", role: "Associate PM", salary: 38000, start: "03-Mar-25" },
  { id: "EMP-028", name: "Noah Walker", dept: "Marketing", role: "Graphic Designer", salary: 32000, start: "02-Jun-25" },
  { id: "EMP-029", name: "Olivia Hall", dept: "Customer Success", role: "Onboarding Specialist", salary: 35000, start: "01-Sep-25" },
  { id: "EMP-030", name: "Patrick Young", dept: "Engineering", role: "Graduate Developer", salary: 30000, start: "05-Jan-26" }
];

// ======== FIXED ASSETS ========
const FIXED_ASSETS = [
  { id: "FA-001", cat: "Office Equipment", desc: "Meeting room furniture set", date: "15-Mar-20", cost: 8500, life: 5, monthlyDep: 141.67, accumDep: 10625.00, nbv: -2125.00 },
  { id: "FA-002", cat: "Office Equipment", desc: "Reception desk & chairs", date: "20-Jun-20", cost: 5200, life: 5, monthlyDep: 86.67, accumDep: 6500.00, nbv: -1300.00 },
  { id: "FA-003", cat: "Office Equipment", desc: "Office kitchen appliances", date: "05-Sep-20", cost: 3800, life: 5, monthlyDep: 63.33, accumDep: 4516.67, nbv: -716.67 },
  { id: "FA-004", cat: "Office Equipment", desc: "Server room rack & cooling", date: "10-Jan-21", cost: 7500, life: 5, monthlyDep: 125.00, accumDep: 8125.00, nbv: -625.00 },
  { id: "FA-005", cat: "Office Equipment", desc: "Ergonomic chairs (x10)", date: "02-Mar-22", cost: 5500, life: 5, monthlyDep: 91.67, accumDep: 4675.00, nbv: 825.00 },
  { id: "FA-006", cat: "Office Equipment", desc: "Standing desks (x8)", date: "15-Jun-22", cost: 4500, life: 5, monthlyDep: 75.00, accumDep: 3550.00, nbv: 950.00 },
  { id: "FA-007", cat: "Computer Equipment", desc: "Dev laptops (x15 - mixed)", date: "Various", cost: 67500, life: 3, monthlyDep: 1875.00, accumDep: 67500.00, nbv: 0.00 },
  { id: "FA-008", cat: "Computer Equipment", desc: "Dev laptops (x10 - 2024 batch)", date: "15-Jan-24", cost: 38500, life: 3, monthlyDep: 1069.44, accumDep: 28472.22, nbv: 10027.78 },
  { id: "FA-009", cat: "Computer Equipment", desc: "Dev laptops (x5 - 2025 batch)", date: "10-Jun-25", cost: 18000, life: 3, monthlyDep: 500.00, accumDep: 12000.00, nbv: 6000.00 },
  { id: "FA-010", cat: "Computer Equipment", desc: 'MacBook Pro M4 x2 (Jun 2026)', date: "08-Jun-26", cost: 4598, life: 3, monthlyDep: 127.72, accumDep: 0.00, nbv: 4598.00 },
  { id: "FA-011", cat: "Computer Equipment", desc: "Office monitors (x20)", date: "20-Aug-22", cost: 8000, life: 3, monthlyDep: 222.22, accumDep: 8333.33, nbv: -333.33 },
  { id: "FA-012", cat: "Computer Equipment", desc: "PowerEdge Servers x2", date: "17-Jun-26", cost: 7200, life: 3, monthlyDep: 0.00, accumDep: 0.00, nbv: 7200.00 },
  { id: "FA-013", cat: "Software Dev", desc: "Platform dev costs (2022)", date: "01-Jan-22", cost: 90000, life: 5, monthlyDep: 1500.00, accumDep: 67500.00, nbv: 22500.00 },
  { id: "FA-014", cat: "Software Dev", desc: "Platform dev costs (2023)", date: "01-Jan-23", cost: 65000, life: 5, monthlyDep: 1083.33, accumDep: 30333.33, nbv: 34666.67 },
  { id: "FA-015", cat: "Software Dev", desc: "Platform dev costs (2024)", date: "01-Jan-24", cost: 35000, life: 5, monthlyDep: 583.33, accumDep: 11666.67, nbv: 23333.33 },
  { id: "FA-016", cat: "Software Dev", desc: "Platform dev costs (2025)", date: "01-Jan-25", cost: 20000, life: 5, monthlyDep: 333.33, accumDep: 3333.33, nbv: 16666.67 }
];

// ======== WEEK DAYS STRUCTURE ========
const WEEKS = [
  {
    id: 1,
    label: "Week 1: 22-26 June 2026",
    days: [
      { id: 1, label: "Monday 22 Jun", theme: "Month-End Reconciliation", file: "day-1-monday-reconciliation.md" },
      { id: 2, label: "Tuesday 23 Jun", theme: "Credit Control", file: "day-2-tuesday-credit-control.md" },
      { id: 3, label: "Wednesday 24 Jun", theme: "Payroll & Cash Flow", file: "day-3-wednesday-payroll-forecast.md" },
      { id: 4, label: "Thursday 25 Jun", theme: "Management Accounts", file: "day-4-thursday-management-accounts.md" },
      { id: 5, label: "Friday 26 Jun", theme: "Board Prep & Audit", file: "day-5-friday-board-prep-audit.md" }
    ]
  },
  {
    id: 2,
    label: "Week 2: 29 Jun - 3 Jul 2026",
    days: [
      { id: 6, label: "Monday 29 Jun", theme: "Month-End Close — Revenue & AR", file: "week2/day-6-monday-close-revenue.md" },
      { id: 7, label: "Tuesday 30 Jun", theme: "Month-End Close — Payables & Accruals", file: "week2/day-7-tuesday-close-payables.md" },
      { id: 8, label: "Wednesday 1 Jul", theme: "Month-End — Payroll & Fixed Assets", file: "week2/day-8-wednesday-close-payroll.md" },
      { id: 9, label: "Thursday 2 Jul", theme: "Management Accounts & Board Pack", file: "week2/day-9-thursday-management-accounts-complete.md" },
      { id: 10, label: "Friday 3 Jul", theme: "Board Presentation & Strategy", file: "week2/day-10-friday-board-strategy.md" }
    ]
  }
];

// ======== TRACKER TASKS ========
const TRACKER_TASKS = {
  1: [
    "1.1 Bank Reconciliation — Barclays Main",
    "1.2 Oxbridge Analytics Payment Query",
    "1.3 VAT Control Account Check"
  ],
  2: [
    "2.1 Aged Debtors Analysis",
    "2.2 Chase Plan — Top 3 Priorities",
    "2.3 Credit Check — Meridian Trust Group",
    "2.4 Supplier Payment Run"
  ],
  3: [
    "3.1 July Payroll Projection",
    "3.2 Cash Flow Forecast — July",
    "3.3 Training Budget Decision"
  ],
  4: [
    "4.1 P&L vs Budget — May 2026",
    "4.2 Fixed Asset Register",
    "4.3 Key Metrics for Board Pack"
  ],
  5: [
    "5.1 Finalise Board Pack",
    "5.2 PWC Audit Prep Questionnaire",
    "5.3 Chargeback Investigation",
    "5.4 Weekly Cash Position Report"
  ],
  6: [
    "6.1 June Revenue Reconciliation",
    "6.2 Sterling Partners Settlement",
    "6.3 Month-End Revenue Journals",
    "6.4 AR Aging Update"
  ],
  7: [
    "7.1 Dell Payment Negotiation",
    "7.2 Accruals Schedule — June",
    "7.3 Bank Loan Disclosure Review",
    "7.4 VAT Return Preparation"
  ],
  8: [
    "8.1 New Hire Payroll Calculations",
    "8.2 July Monthly Payroll Run",
    "8.3 June Depreciation & Amortisation",
    "8.4 Meridian Trust Onboarding"
  ],
  9: [
    "9.1 June 2026 Trial Balance",
    "9.2 Balance Sheet at 30th June",
    "9.3 Cash Flow Statement — June",
    "9.4 PWC Audit File Submission"
  ],
  10: [
    "10.1 Board Presentation Pack",
    "10.2 H2 2026 Reforecast",
    "10.3 Strategic Scenario Analysis",
    "10.4 Final Week Summary Report"
  ]
};
