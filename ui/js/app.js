// ============================================================
// NovaTech Finance Simulation — Application Logic
// ============================================================

let currentWeek = 1;
let currentDay = 1;
let currentTab = 'tasks';

// ======== INIT ========
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderTopNav();
  showDashboard();
  restoreTrackerState();
});

// ======== ROUTING ========
function navigate(view, params) {
  document.getElementById('main-content').innerHTML = '';
  switch (view) {
    case 'dashboard': showDashboard(); break;
    case 'day': showDay(params); break;
    case 'company': showCompanyProfile(); break;
    case 'data': showDataBrowser(); break;
    case 'tracker': showTracker(); break;
    case 'tools': showTools(); break;
    default: showDashboard();
  }
  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navMap = {
    'dashboard': 'nav-dashboard',
    'day': 'nav-day',
    'company': 'nav-company',
    'data': 'nav-data',
    'tracker': 'nav-tracker',
    'tools': 'nav-tools'
  };
  const targetId = navMap[view] || 'nav-dashboard';
  const navEl = document.getElementById(targetId);
  if (navEl) navEl.classList.add('active');
}

// ======== SIDEBAR ========
function renderSidebar() {
  const sb = document.getElementById('sidebar');
  let html = `
    <div class="sidebar-header">
      <h1><span class="logo">N</span> NovaTech</h1>
      <div class="subtitle">Finance Simulation</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">
        <div class="nav-section-title">Main</div>
        <div class="nav-item active" id="nav-dashboard" onclick="navigate('dashboard')">
          <span class="icon">📊</span> Dashboard
        </div>
        <div class="nav-item" id="nav-day" onclick="navigate('day')">
          <span class="icon">📋</span> Today's Tasks
        </div>
        <div class="nav-item" id="nav-company" onclick="navigate('company')">
          <span class="icon">🏢</span> Company Profile
        </div>
      </div>
      <div class="nav-section">
        <div class="nav-section-title">Data</div>
        <div class="nav-item" id="nav-data" onclick="navigate('data')">
          <span class="icon">📁</span> Data Browser
        </div>
        <div class="nav-item" id="nav-tools" onclick="navigate('tools')">
          <span class="icon">🔧</span> Finance Tools
        </div>
        <div class="nav-item" id="nav-tracker" onclick="navigate('tracker')">
          <span class="icon">✅</span> Work Tracker
        </div>
      </div>
      <div class="nav-section">
        <div class="nav-section-title">Weeks</div>
  `;

  WEEKS.forEach((week, wi) => {
    const isActive = currentWeek === week.id;
    html += `
      <div class="nav-item ${isActive ? 'active' : ''}" onclick="switchWeek(${week.id})">
        <span class="icon">${wi === 0 ? '1️⃣' : '2️⃣'}</span> ${week.label}
      </div>
      <div style="padding-left: 12px;">
    `;
    week.days.forEach(day => {
      const isDayActive = currentWeek === week.id && currentDay === day.id;
      html += `
        <div class="nav-item ${isDayActive ? 'active' : ''}" style="font-size:12px;padding:5px 12px;" onclick="switchDay(${day.id})">
          <span class="icon">📄</span> Day ${day.id}: ${day.label}
        </div>
      `;
    });
    html += `</div>`;
  });

  html += `</nav>`;
  sb.innerHTML = html;
}

function switchWeek(weekId) {
  currentWeek = weekId;
  const week = WEEKS.find(w => w.id === weekId);
  if (week && week.days.length > 0) {
    currentDay = week.days[0].id;
  }
  renderSidebar();
  navigate('day');
}

function switchDay(dayId) {
  currentDay = dayId;
  // Find which week this day belongs to
  for (const week of WEEKS) {
    if (week.days.some(d => d.id === dayId)) {
      currentWeek = week.id;
      break;
    }
  }
  renderSidebar();
  navigate('day');
}

// ======== TOP NAV ========
function renderTopNav() {
  const tn = document.getElementById('top-nav');
  const day = getCurrentDay();
  tn.innerHTML = `
    <div class="top-nav-left">
      <span class="status-dot online"></span>
      <h2>${day ? `Day ${day.id}: ${day.label}` : 'Dashboard'}</h2>
    </div>
    <div class="top-nav-right">
      <span class="badge badge-role">👤 Finance Manager</span>
      <span class="badge badge-cash">£159,361.50</span>
    </div>
  `;
}

function getCurrentDay() {
  for (const week of WEEKS) {
    const found = week.days.find(d => d.id === currentDay);
    if (found) return found;
  }
  return null;
}

// ======== DASHBOARD ========
function showDashboard() {
  const main = document.getElementById('main-content');
  document.getElementById('top-nav').querySelector('h2').textContent = 'Dashboard';

  const totalSales = SALES_INVOICES.reduce((s, i) => s + i.gross, 0);
  const totalPurchases = PURCHASE_INVOICES.reduce((s, i) => s + i.gross, 0);
  const totalDebtors = DEBTORS_AGED.reduce((s, d) => s + d.amount, 0);
  const cashBalance = BANK_MAIN[BANK_MAIN.length - 1].balance;

  main.innerHTML = `
    <div class="welcome-section fade-in">
      <h2>Welcome back, Finance Manager</h2>
      <p class="tagline">NovaTech Solutions Ltd. — ${COMPANY.industry}</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Cash at Bank</div>
          <div class="value">£${cashBalance.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
          <div class="change neg">↓ from £247,830 (1 Jun)</div>
        </div>
        <div class="stat-card">
          <div class="label">Accounts Receivable</div>
          <div class="value">£${totalDebtors.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
          <div class="change neg">${DEBTORS_AGED.filter(d => d.bucket !== 'Current').length} overdue accounts</div>
        </div>
        <div class="stat-card">
          <div class="label">June Sales (Gross)</div>
          <div class="value">£${totalSales.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
          <div class="change pos">${SALES_INVOICES.filter(i => i.status === 'Paid').length} of 20 paid</div>
        </div>
        <div class="stat-card">
          <div class="label">Employee Count</div>
          <div class="value">${EMPLOYEES.length}</div>
          <div class="change pos">2 new hires starting 1 Jul</div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="profile-card">
          <h3>📍 Today's Focus</h3>
          <p style="color:var(--text-secondary);font-size:13px;line-height:1.7;">
            <strong style="color:var(--text-primary);">Day ${currentDay}:</strong> ${getCurrentDay()?.theme || 'Dashboard'}<br><br>
            ${getTaskPreview()}
          </p>
          <button class="btn btn-primary" onclick="navigate('day')" style="margin-top:12px;">
            Open Tasks →
          </button>
        </div>
        <div class="profile-card">
          <h3>⚡ Quick Actions</h3>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <button class="btn btn-outline btn-sm" onclick="navigate('day')" style="text-align:left;">📋 View Today's Tasks</button>
            <button class="btn btn-outline btn-sm" onclick="navigate('data')" style="text-align:left;">📁 Browse Financial Data</button>
            <button class="btn btn-outline btn-sm" onclick="navigate('tools')" style="text-align:left;">🔧 Open Finance Tools</button>
            <button class="btn btn-outline btn-sm" onclick="navigate('tracker')" style="text-align:left;">✅ Check Progress</button>
            <button class="btn btn-outline btn-sm" onclick="navigate('company')" style="text-align:left;">🏢 Company Profile</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getTaskPreview() {
  const tasks = TRACKER_TASKS[currentDay];
  if (!tasks) return 'No tasks defined for today.';
  return tasks.slice(0, 3).map(t => `• ${t}`).join('<br>') + (tasks.length > 3 ? `<br>• +${tasks.length - 3} more` : '');
}

// ======== DAY VIEW ========
function showDay() {
  const main = document.getElementById('main-content');
  const day = getCurrentDay();
  if (!day) { showDashboard(); return; }

  renderTopNav();
  main.innerHTML = `
    <div class="day-view fade-in">
      <div class="day-header">
        <div>
          <h2>Day ${day.id}: ${day.label}</h2>
          <div class="day-date">${day.theme}</div>
        </div>
        <div class="day-actions">
          <button class="btn btn-outline btn-sm" onclick="prevDay()">← Previous</button>
          <button class="btn btn-outline btn-sm" onclick="nextDay()">Next →</button>
        </div>
      </div>

      <div class="tab-bar">
        <button class="tab-btn active" onclick="switchDayTab('tasks', this)">📋 Tasks</button>
        <button class="tab-btn" onclick="switchDayTab('inbox', this)">📧 Inbox</button>
        <button class="tab-btn" onclick="switchDayTab('data', this)">📁 Data</button>
      </div>

      <div id="day-tasks" class="tab-content active">${renderDayTasks(day)}</div>
      <div id="day-inbox" class="tab-content">${renderDayInbox(day)}</div>
      <div id="day-data" class="tab-content">${renderDayDataLinks()}</div>
    </div>
  `;
  currentTab = 'tasks';
}

function switchDayTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`day-${tab}`).classList.add('active');
  currentTab = tab;
}

function prevDay() {
  const allDays = WEEKS.flatMap(w => w.days);
  const idx = allDays.findIndex(d => d.id === currentDay);
  if (idx > 0) switchDay(allDays[idx - 1].id);
}

function nextDay() {
  const allDays = WEEKS.flatMap(w => w.days);
  const idx = allDays.findIndex(d => d.id === currentDay);
  if (idx < allDays.length - 1) switchDay(allDays[idx + 1].id);
}

// ======== RENDER TASKS ========
function renderDayTasks(day) {
  // Try to load markdown content from embedded placeholder
  const path = `tasks/${day.file}`;
  return `
    <div class="task-brief">
      <p><em>Task content loaded from <code>${path}</code></em></p>
      <p>Open the corresponding markdown file in the <strong>tasks/</strong> folder for full details, or use the tabs below to view your data and inbox.</p>
      <hr>
      <h3>📋 Today's Deliverables</h3>
      <ul>
        ${(TRACKER_TASKS[day.id] || ['No specific tasks']).map(t => `<li>${t}</li>`).join('')}
      </ul>
      <hr>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary btn-sm" onclick="navigate('data')">📁 Open Data Browser</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('tools')">🔧 Open Finance Tools</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('tracker')">✅ Track Progress</button>
      </div>
    </div>
  `;
}

// ======== RENDER INBOX ========
function renderDayInbox(day) {
  const inboxes = {
    1: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Month-end accounts + Oxbridge query", preview: "Two things: 1. I need the May management accounts by Friday. 2. Oxbridge Analytics says they paid INV-2026-0603..." },
      { from: "James Okonkwo <j.okonkwo@novatech.dev>", subject: "New prospect — credit check needed", preview: "Meridian Trust Group, potential Enterprise client. Can we fast-track a credit check?" },
      { from: "PWC Accounts <pwc.audit@uk.pwc.com>", subject: "Audit prep — June YE readiness", preview: "Please complete the attached questionnaire and return by Friday 26th June." },
      { from: "HMRC <noreply@tax.service.gov.uk>", subject: "VAT Payment Reminder", preview: "Your VAT payment of £12,300 is due by 30 June 2026." }
    ],
    2: [
      { from: "James Okonkwo <j.okonkwo@novatech.dev>", subject: "Debtor chase — some are getting old", preview: "Can you run the aged debtors report? Harbour Logistics £6,240, TechVista £4,995, Westwood £3,480..." },
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Oxbridge follow-up", preview: "Did you check on Oxbridge? They emailed again asking if we received their payment." },
      { from: "WeWork <accounts@wework.com>", subject: "REMINDER — June rent overdue", preview: "Your June rent invoice for £3,600 is now overdue." },
      { from: "Stripe <notifications@stripe.com>", subject: "New chargeback filed", preview: "A customer has filed a chargeback for £899.00." }
    ],
    3: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Friday board prep + new hires", preview: "I need a cash flow forecast for July. Two new engineers starting 1st July." },
      { from: "Priya Sharma <p.sharma@novatech.dev>", subject: "Training request — AI/ML course", preview: "Course fee £1,800+VAT. Is there budget for this?" },
      { from: "Mark Rivers <m.rivers@novatech.dev>", subject: "AWS Enterprise Support renewal", preview: "New pricing is £4,250/mo (was £3,800). Can we absorb this?" },
      { from: "HMRC <noreply@tax.service.gov.uk>", subject: "RTI — Late submission warning", preview: "EMP-016 (Ben Thompson) RTI was submitted 2 days late." }
    ],
    4: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "URGENT — Board pack by 4pm", preview: "I need May P&L vs Budget, cash position, burn rate, key metrics by 4pm." },
      { from: "PWC Audit <pwc.audit@uk.pwc.com>", subject: "Fixed Asset Register needed", preview: "Please send your fixed asset register with depreciation calculations." },
      { from: "James Okonkwo <j.okonkwo@novatech.dev>", subject: "Meridian credit check update?", preview: "Any word on Meridian? They need a decision by end of today." }
    ],
    5: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Board call at 10am — ready?", preview: "Expect questions on net loss, debtors, runway, and break-even timing." },
      { from: "PWC Audit <pwc.audit@uk.pwc.com>", subject: "Audit questionnaire — due today", preview: "Items outstanding: bank confirmations, debtors, related party, post-BSE." },
      { from: "Stripe <notifications@stripe.com>", subject: "Chargeback — 3 days remaining", preview: "Respond by 29 June or £899 will be deducted." },
      { from: "Barclays Business", subject: "Weekly Account Summary", preview: "Closing Balance: £159,361.50." }
    ],
    6: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Month-end close — revenue", preview: "Sterling Partners offering £7,500 now, £5,000 later. Your view?" },
      { from: "James Okonkwo <j.okonkwo@novatech.dev>", subject: "Meridian signed!", preview: "£2,499/mo NovaFlow Enterprise starting 1st July." }
    ],
    7: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Dell payment + AWS spike", preview: "Can we negotiate 30-day terms with Dell? AWS bill will be higher." }
    ],
    8: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "New hires starting today!", preview: "Alex Rivera and Samira Hassan on board. Need laptops urgently." }
    ],
    9: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Board tomorrow — full accounts needed", preview: "Balance sheet AND cash flow statement this time." }
    ],
    10: [
      { from: "Sarah Chen <s.chen@novatech.dev>", subject: "Board at 10am — be ready", preview: "They'll be tough on cash burn. We need a credible H2 plan." }
    ]
  };

  const emails = inboxes[day.id] || [{ from: "System", subject: "No new messages", preview: "Your inbox is empty for today." }];

  return `
    <div class="inbox-list">
      ${emails.map((e, i) => `
        <div class="email-card ${i === 0 ? 'unread' : ''}" onclick="showEmailDetail(${day.id}, ${i})">
          <div class="from"><strong>${e.from}</strong></div>
          <div class="subject">${e.subject}</div>
          <div class="preview">${e.preview}</div>
        </div>
      `).join('')}
    </div>
    <div id="email-detail-container"></div>
  `;
}

function showEmailDetail(dayId, emailIdx) {
  const inboxes = {
    1: [
      { from: "Sarah Chen", to: "finance@novatech.dev", subject: "Month-end accounts + Oxbridge query", body: "Morning!\n\nTwo things:\n1. I need the May management accounts by Friday. Can you start pulling the P&L together?\n2. Oxbridge Analytics called me — they say they paid INV-2026-0603 (£2,998.80) last week. Can you check the bank and confirm?\n\nThanks,\nSarah" },
      { from: "James Okonkwo", to: "finance@novatech.dev", subject: "New prospect — credit check needed", body: "Hi — got a hot lead, Meridian Trust Group, potential Enterprise client. Can we fast-track a credit check? They want to sign by end of week.\n\nCheers,\nJames" },
      { from: "David Whittaker (PWC)", to: "finance@novatech.dev", subject: "Audit prep — June YE readiness", body: "Dear NovaTech Finance Team,\n\nAs part of our year-end audit planning, please complete the attached questionnaire and return by Friday 26th June.\n\nKey items: bank confirmations, aged debtors, fixed asset register, related party disclosures.\n\nBest regards,\nDavid Whittaker\nSenior Audit Manager, PWC Manchester" },
      { from: "HMRC", to: "finance@novatech.dev", subject: "VAT Payment Reminder", body: "Your VAT payment of £12,300 for the period ending 31 May 2026 is due by 30 June 2026. Reference: VB-372981455-0526." }
    ],
    2: [
      { from: "James Okonkwo", to: "finance@novatech.dev", subject: "Debtor chase", body: "Morning — can you run the aged debtors report?\n\nGetting worried about:\n- Harbour Logistics (£6,240 — from April!)\n- TechVista Ltd (£4,995 — due 31st May)\n- Westwood Associates (£3,480 — overdue now)\n\nAlso — Meridian Trust Group want to sign by Friday. Any news on the credit check?\n\nJames" }
    ]
  };

  const emails = inboxes[dayId] || [];
  const email = emails[emailIdx];
  if (!email) return;

  const container = document.getElementById('email-detail-container');
  container.innerHTML = `
    <div class="email-detail fade-in">
      <div class="email-header">
        <div class="field"><strong>From:</strong> ${email.from}</div>
        <div class="field"><strong>To:</strong> ${email.to}</div>
        <div class="field"><strong>Subject:</strong> ${email.subject}</div>
      </div>
      <div class="email-body">${email.body}</div>
      <button class="btn btn-outline btn-sm" style="margin-top:12px;" onclick="closeEmailDetail()">Close</button>
    </div>
  `;
}

function closeEmailDetail() {
  document.getElementById('email-detail-container').innerHTML = '';
}

// ======== RENDER DATA LINKS IN DAY VIEW ========
function renderDayDataLinks() {
  const dataSets = [
    { name: "Sales Invoices — June 2026", data: SALES_INVOICES, cols: ["id","customer","date","due","net","vat","gross","status"] },
    { name: "Purchase Invoices — June 2026", data: PURCHASE_INVOICES, cols: ["id","vendor","date","due","desc","net","vat","gross","status"] },
    { name: "Bank Statement — Barclays Main", data: BANK_MAIN, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Barclays Payroll", data: BANK_PAYROLL, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Starling Expense", data: BANK_STARLING, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Aged Debtors Analysis", data: DEBTORS_AGED, cols: ["customer","inv","date","due","amount","bucket"] },
    { name: "Chart of Accounts", data: CHART_OF_ACCOUNTS, cols: ["code","name","category","type"] },
    { name: "Opening Balances", data: OPENING_BALANCES, cols: ["code","name","balance"] },
    { name: "Fixed Asset Schedule", data: FIXED_ASSETS, cols: ["id","cat","desc","date","cost","life","monthlyDep","accumDep","nbv"] },
    { name: "Employee List", data: EMPLOYEES, cols: ["id","name","dept","role","salary"] }
  ];

  return `
    <p style="color:var(--text-secondary);margin-bottom:12px;">Select a dataset to view:</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px;">
      ${dataSets.map((ds, i) => `
        <button class="btn btn-outline btn-sm" style="text-align:left;padding:10px 14px;" onclick="showDataTable(${i})">
          📄 ${ds.name}
        </button>
      `).join('')}
    </div>
    <div id="data-table-container" style="margin-top:16px;"></div>
  `;
}

// ======== DATA BROWSER (full page) ========
function showDataBrowser() {
  const main = document.getElementById('main-content');
  document.getElementById('top-nav').querySelector('h2').textContent = 'Data Browser';

  const dataSets = [
    { name: "Sales Invoices — June 2026", data: SALES_INVOICES, cols: ["id","customer","date","due","net","vat","gross","status"] },
    { name: "Purchase Invoices — June 2026", data: PURCHASE_INVOICES, cols: ["id","vendor","date","due","desc","net","vat","gross","status"] },
    { name: "Bank Statement — Barclays Main", data: BANK_MAIN, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Barclays Payroll", data: BANK_PAYROLL, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Starling Expense", data: BANK_STARLING, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Aged Debtors Analysis", data: DEBTORS_AGED, cols: ["customer","inv","date","due","amount","bucket"] },
    { name: "Chart of Accounts", data: CHART_OF_ACCOUNTS, cols: ["code","name","category","type"] },
    { name: "Opening Balances (TB)", data: OPENING_BALANCES, cols: ["code","name","balance"] },
    { name: "Fixed Asset Schedule", data: FIXED_ASSETS, cols: ["id","cat","desc","date","cost","monthlyDep","accumDep","nbv"] },
    { name: "Employee List", data: EMPLOYEES, cols: ["id","name","dept","role","salary"] }
  ];

  main.innerHTML = `
    <div class="fade-in">
      <h2 style="margin-bottom:16px;">📁 Financial Data Browser</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;margin-bottom:20px;">
        ${dataSets.map((ds, i) => `
          <button class="btn btn-outline btn-sm" style="text-align:left;padding:10px 14px;" onclick="showDataTable(${i})">
            📄 ${ds.name} <span style="color:var(--text-muted);font-size:11px;">(${ds.data.length} rows)</span>
          </button>
        `).join('')}
      </div>
      <div id="data-table-container"></div>
    </div>
  `;
}

function showDataTable(idx) {
  const dataSets = [
    { name: "Sales Invoices — June 2026", data: SALES_INVOICES, cols: ["id","customer","date","due","net","vat","gross","status"] },
    { name: "Purchase Invoices — June 2026", data: PURCHASE_INVOICES, cols: ["id","vendor","date","due","desc","net","vat","gross","status"] },
    { name: "Bank Statement — Barclays Main", data: BANK_MAIN, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Barclays Payroll", data: BANK_PAYROLL, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Bank Statement — Starling Expense", data: BANK_STARLING, cols: ["date","type","desc","ref","debit","credit","balance"] },
    { name: "Aged Debtors Analysis", data: DEBTORS_AGED, cols: ["customer","inv","date","due","amount","bucket"] },
    { name: "Chart of Accounts", data: CHART_OF_ACCOUNTS, cols: ["code","name","category","type"] },
    { name: "Opening Balances (TB)", data: OPENING_BALANCES, cols: ["code","name","balance"] },
    { name: "Fixed Asset Schedule", data: FIXED_ASSETS, cols: ["id","cat","desc","date","cost","monthlyDep","accumDep","nbv"] },
    { name: "Employee List", data: EMPLOYEES, cols: ["id","name","dept","role","salary"] }
  ];

  const ds = dataSets[idx];
  if (!ds) return;

  const container = document.getElementById('data-table-container');
  if (!container) return;

  const isFinancial = ['net','vat','gross','balance','amount','debit','credit','cost','salary','monthlyDep','accumDep','nbv','price'];

  // Summary
  let summaryHtml = '';
  if (ds.data.length > 0 && ds.cols.some(c => isFinancial.includes(c))) {
    const numericCols = ds.cols.filter(c => isFinancial.includes(c));
    summaryHtml = `<div class="data-summary">`;
    numericCols.forEach(col => {
      const total = ds.data.reduce((s, row) => {
        const v = parseFloat(row[col]);
        return s + (isNaN(v) ? 0 : v);
      }, 0);
      if (total !== 0) {
        summaryHtml += `
          <div class="summary-item">
            <div class="s-label">Total ${col}</div>
            <div class="s-value">£${total.toLocaleString('en-GB', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
          </div>
        `;
      }
    });
    summaryHtml += `</div>`;
  }

  const numberFormatCols = ds.cols.filter(c => isFinancial.includes(c));

  let html = `
    <h3 style="margin-bottom:8px;color:var(--accent-cyan);">${ds.name}</h3>
    ${summaryHtml}
    <div class="data-viewer">
      <table class="data-table">
        <thead>
          <tr>${ds.cols.map(c => `<th>${c}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${ds.data.map(row => {
            const isStatusRow = row.status !== undefined;
            const statusClass = row.status === 'Paid' ? 'badge-paid' : row.status === 'Unpaid' ? 'badge-unpaid' : '';
            return `<tr>
              ${ds.cols.map(col => {
                let val = row[col];
                if (val === undefined || val === null) val = '';
                // Format numbers
                if (numberFormatCols.includes(col) && !isNaN(parseFloat(val)) && val !== '') {
                  const num = parseFloat(val);
                  const cls = num < 0 ? 'negative' : num > 0 ? 'positive' : '';
                  return `<td class="amount ${cls}">${num < 0 ? '(' + Math.abs(num).toLocaleString('en-GB', {minimumFractionDigits:2}) + ')' : num.toLocaleString('en-GB', {minimumFractionDigits:2})}</td>`;
                }
                // Status badges
                if (col === 'status' && statusClass) {
                  return `<td><span class="badge-cell ${statusClass}">${val}</span></td>`;
                }
                // Bucket badges
                if (col === 'bucket') {
                  const bucketClass = val === 'Current' ? 'badge-current' : val === '1-30 Days' ? 'badge-unpaid' : 'badge-unpaid';
                  return `<td><span class="badge-cell ${bucketClass}">${val}</span></td>`;
                }
                return `<td>${val}</td>`;
              }).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

// ======== TOOLS ========
function showTools() {
  const main = document.getElementById('main-content');
  document.getElementById('top-nav').querySelector('h2').textContent = 'Finance Tools';

  main.innerHTML = `
    <div class="fade-in">
      <h2 style="margin-bottom:16px;">🔧 Finance Tools</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="tool-panel">
          <h3>💰 Bank Reconciliation</h3>
          <p style="color:var(--text-secondary);font-size:13px;margin-bottom:12px;">Compare GL entries to bank statement.</p>
          <div class="form-group">
            <label>GL Ledger Entries (enter line by line)</label>
            <textarea id="recon-gl" rows="4" placeholder="Date | Ref | Description | Amount&#10;e.g. 01-Jun | DD-8721 | WeWork rent | -3600"></textarea>
          </div>
          <button class="btn btn-primary btn-sm" onclick="calcReconciliation()">Run Reconciliation</button>
          <div id="recon-result" class="tool-result" style="display:none;"></div>
        </div>

        <div class="tool-panel">
          <h3>🧾 VAT Control Account</h3>
          <p style="color:var(--text-secondary);font-size:13px;margin-bottom:12px;">Calculate VAT position: opening + output - input.</p>
          <div class="form-group">
            <label>Opening VAT Payable</label>
            <input type="number" id="vat-opening" value="12300" step="0.01">
          </div>
          <div class="form-group">
            <label>Output VAT (Sales) — total from sales invoices</label>
            <input type="number" id="vat-output" step="0.01">
          </div>
          <div class="form-group">
            <label>Input VAT (Purchases) — total from purchase invoices</label>
            <input type="number" id="vat-input" step="0.01">
          </div>
          <button class="btn btn-primary btn-sm" onclick="calcVAT()">Calculate VAT Position</button>
          <div id="vat-result" class="tool-result" style="display:none;"></div>
        </div>

        <div class="tool-panel">
          <h3>📈 Cash Flow Forecast</h3>
          <p style="color:var(--text-secondary);font-size:13px;margin-bottom:12px;">Project cash position with weekly inflows/outflows.</p>
          <div class="form-group">
            <label>Opening Balance (£)</label>
            <input type="number" id="cf-opening" value="159361.50" step="0.01">
          </div>
          <div class="form-group">
            <label>Weekly Inflows (comma-separated, 4 weeks)</label>
            <input type="text" id="cf-inflows" placeholder="e.g. 15000,12000,18000,14000">
          </div>
          <div class="form-group">
            <label>Weekly Outflows (comma-separated, 4 weeks)</label>
            <input type="text" id="cf-outflows" placeholder="e.g. 18000,22000,15000,16000">
          </div>
          <button class="btn btn-primary btn-sm" onclick="calcCashFlow()">Build Forecast</button>
          <div id="cf-result" class="tool-result" style="display:none;"></div>
        </div>

        <div class="tool-panel">
          <h3>📊 Depreciation Calculator</h3>
          <p style="color:var(--text-secondary);font-size:13px;margin-bottom:12px;">Calculate straight-line depreciation.</p>
          <div class="form-group">
            <label>Asset Cost (£)</label>
            <input type="number" id="dep-cost" step="0.01">
          </div>
          <div class="form-group">
            <label>Residual Value (£)</label>
            <input type="number" id="dep-residual" value="0" step="0.01">
          </div>
          <div class="form-group">
            <label>Useful Life (years)</label>
            <input type="number" id="dep-life" value="3">
          </div>
          <button class="btn btn-primary btn-sm" onclick="calcDepreciation()">Calculate</button>
          <div id="dep-result" class="tool-result" style="display:none;"></div>
        </div>
      </div>
    </div>
  `;
}

function calcReconciliation() {
  const glText = document.getElementById('recon-gl').value;
  const lines = glText.trim().split('\n').filter(l => l.trim());
  const result = document.getElementById('recon-result');
  result.style.display = 'block';

  if (lines.length === 0) {
    result.innerHTML = '<h4>No entries entered</h4><p>Enter GL entries in the format: Date | Ref | Description | Amount</p>';
    return;
  }

  let total = 0;
  let parsed = [];
  lines.forEach(line => {
    const parts = line.split('|').map(s => s.trim());
    if (parts.length >= 4) {
      const amt = parseFloat(parts[3]) || 0;
      total += amt;
      parsed.push(parts);
    }
  });

  const bankTotal = 0; // Simple version: user provides their own comparison

  result.innerHTML = `
    <h4>Reconciliation Summary</h4>
    <div class="result-line">Entries processed: ${parsed.length}</div>
    <div class="result-line">Total GL Amount: £${total.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <hr style="border-color:var(--border);margin:8px 0;">
    <div style="font-size:12px;color:var(--text-muted);">
      Compare this total to the net change on your bank statement.
      ${parsed.map(p => `<br>• ${p[0]} | ${p[1]} | ${p[2]} | ${p[3]}`).join('')}
    </div>
  `;
}

function calcVAT() {
  const opening = parseFloat(document.getElementById('vat-opening').value) || 0;
  const output = parseFloat(document.getElementById('vat-output').value) || 0;
  const input = parseFloat(document.getElementById('vat-input').value) || 0;
  const closing = opening + output - input;
  const result = document.getElementById('vat-result');
  result.style.display = 'block';

  result.innerHTML = `
    <h4>VAT Control Account</h4>
    <div class="result-line">Opening VAT Payable: £${opening.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line">Add: Output VAT: £${output.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line">Less: Input VAT: (£${input.toLocaleString('en-GB', {minimumFractionDigits:2})})</div>
    <hr style="border-color:var(--border);margin:8px 0;">
    <div class="result-line" style="font-weight:700;color:${closing > 0 ? 'var(--accent-yellow)' : 'var(--accent-green)'}">
      ${closing > 0 ? 'Amount due to HMRC:' : 'Amount reclaimable from HMRC:'} 
      £${Math.abs(closing).toLocaleString('en-GB', {minimumFractionDigits:2})}
    </div>
  `;
}

function calcCashFlow() {
  const opening = parseFloat(document.getElementById('cf-opening').value) || 0;
  const inflows = (document.getElementById('cf-inflows').value || '').split(',').map(s => parseFloat(s.trim()) || 0);
  const outflows = (document.getElementById('cf-outflows').value || '').split(',').map(s => parseFloat(s.trim()) || 0);
  const result = document.getElementById('cf-result');
  result.style.display = 'block';

  const weeks = Math.min(inflows.length, outflows.length, 4);
  let balance = opening;
  let html = `<h4>Cash Flow Forecast</h4>
    <div class="result-line">Opening: £${opening.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <hr style="border-color:var(--border);margin:8px 0;">`;

  for (let w = 0; w < weeks; w++) {
    const net = (inflows[w] || 0) - (outflows[w] || 0);
    balance += net;
    const color = balance < 0 ? 'var(--accent-red)' : balance < 50000 ? 'var(--accent-yellow)' : 'var(--accent-green)';
    html += `
      <div class="result-line">Week ${w+1}: In £${(inflows[w]||0).toLocaleString('en-GB',{minimumFractionDigits:2})} | Out £${(outflows[w]||0).toLocaleString('en-GB',{minimumFractionDigits:2})} | Net £${net.toLocaleString('en-GB',{minimumFractionDigits:2})}</div>
      <div class="result-line" style="color:${color};font-weight:600;">  → Balance: £${balance.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    `;
    if (balance < 0) html += `<div class="result-line" style="color:var(--accent-red);">⚠ CASH SHORTFALL — immediate action needed</div>`;
    else if (balance < 50000) html += `<div class="result-line" style="color:var(--accent-yellow);">⚠ Low cash buffer (< 1 month expenses)</div>`;
  }

  html += `<hr style="border-color:var(--border);margin:8px 0;">
    <div class="result-line" style="font-weight:700;">Closing: £${balance.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>`;

  result.innerHTML = html;
}

function calcDepreciation() {
  const cost = parseFloat(document.getElementById('dep-cost').value) || 0;
  const residual = parseFloat(document.getElementById('dep-residual').value) || 0;
  const life = parseInt(document.getElementById('dep-life').value) || 3;
  const depreciable = cost - residual;
  const annual = depreciable / life;
  const monthly = annual / 12;
  const result = document.getElementById('dep-result');
  result.style.display = 'block';

  result.innerHTML = `
    <h4>Depreciation Calculation (Straight Line)</h4>
    <div class="result-line">Cost: £${cost.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line">Residual Value: £${residual.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line">Depreciable Amount: £${depreciable.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line">Useful Life: ${life} years</div>
    <hr style="border-color:var(--border);margin:8px 0;">
    <div class="result-line" style="font-weight:700;">Annual Depreciation: £${annual.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
    <div class="result-line" style="font-weight:700;">Monthly Depreciation: £${monthly.toLocaleString('en-GB', {minimumFractionDigits:2})}</div>
  `;
}

// ======== COMPANY PROFILE ========
function showCompanyProfile() {
  const main = document.getElementById('main-content');
  document.getElementById('top-nav').querySelector('h2').textContent = 'Company Profile';

  main.innerHTML = `
    <div class="fade-in">
      <h2 style="margin-bottom:16px;">🏢 ${COMPANY.name}</h2>

      <div class="profile-grid">
        <div class="profile-card">
          <h3>Company Details</h3>
          <table>
            <tr><td>Legal Name</td><td>${COMPANY.legal}</td></tr>
            <tr><td>Industry</td><td>${COMPANY.industry}</td></tr>
            <tr><td>Founded</td><td>${COMPANY.founded}</td></tr>
            <tr><td>Employees</td><td>${COMPANY.employees}</td></tr>
            <tr><td>Currency</td><td>${COMPANY.currency}</td></tr>
            <tr><td>VAT Reg</td><td>${COMPANY.vatReg}</td></tr>
            <tr><td>Company No</td><td>${COMPANY.coNo}</td></tr>
            <tr><td>Address</td><td>${COMPANY.address}</td></tr>
          </table>
        </div>

        <div class="profile-card">
          <h3>Bank Accounts</h3>
          <table>
            ${COMPANY.banks.map(b => `
              <tr><td>${b.name}</td><td>${b.sort} ${b.acc}<br><span style="color:var(--text-muted);font-size:11px;">${b.type}</span></td></tr>
            `).join('')}
          </table>
        </div>

        <div class="profile-card">
          <h3>Key People</h3>
          <table>
            ${COMPANY.people.map(p => `
              <tr><td>${p.role}</td><td>${p.name}<br><span style="color:var(--text-muted);font-size:11px;">${p.email}</span></td></tr>
            `).join('')}
          </table>
        </div>

        <div class="profile-card">
          <h3>Products & Pricing</h3>
          <table>
            ${COMPANY.products.map(p => `
              <tr><td>${p.name}</td><td>£${p.price}/mo<br><span style="color:var(--text-muted);font-size:11px;">${p.desc}</span></td></tr>
            `).join('')}
          </table>
        </div>
      </div>
    </div>
  `;
}

// ======== TRACKER ========
function showTracker() {
  const main = document.getElementById('main-content');
  document.getElementById('top-nav').querySelector('h2').textContent = 'Work Tracker';

  let html = `
    <div class="fade-in">
      <h2 style="margin-bottom:16px;">✅ Work Tracker</h2>
      <p style="color:var(--text-secondary);margin-bottom:20px;">Check off tasks as you complete them. Progress is saved locally.</p>
      <div class="tracker-grid">
  `;

  const savedState = JSON.parse(localStorage.getItem('novatech-tracker') || '{}');

  for (const week of WEEKS) {
    week.days.forEach(day => {
      const tasks = TRACKER_TASKS[day.id] || [];
      const completedCount = tasks.filter((_, i) => savedState[`day-${day.id}-${i}`]).length;
      html += `
        <div class="tracker-day">
          <h3>Day ${day.id}: ${day.label} <span style="font-weight:400;font-size:11px;color:var(--text-muted);">${day.theme}</span></h3>
          <span style="font-size:11px;color:var(--text-muted);">${completedCount}/${tasks.length} completed</span>
          ${tasks.map((task, i) => {
            const checked = savedState[`day-${day.id}-${i}`] || false;
            return `
              <div class="tracker-task ${checked ? 'done' : ''}">
                <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTrackerTask(${day.id}, ${i}, this.checked)">
                <span class="task-label">${task}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    });
  }

  html += `
      </div>
      <div style="margin-top:16px;">
        <button class="btn btn-danger btn-sm" onclick="resetTracker()">Reset All Progress</button>
      </div>
    </div>
  `;

  main.innerHTML = html;
}

function toggleTrackerTask(day, taskIdx, checked) {
  const saved = JSON.parse(localStorage.getItem('novatech-tracker') || '{}');
  saved[`day-${day}-${taskIdx}`] = checked;
  localStorage.setItem('novatech-tracker', JSON.stringify(saved));
}

function restoreTrackerState() {
  // Just ensure the key exists
  if (!localStorage.getItem('novatech-tracker')) {
    localStorage.setItem('novatech-tracker', '{}');
  }
}

function resetTracker() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    localStorage.setItem('novatech-tracker', '{}');
    showTracker();
  }
}
