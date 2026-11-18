const ALL_STAGES = ["OBO", "Chief", "DEVO", "Department Head", "XO", "CO", "COB"];

const PRIORITY_CLASS = {
  Routine: "routine",
  Priority: "priority",
  Urgent: "urgent",
};

const CERTIFICATES = [
  {
    id: "cert-obo",
    label: "OBO — YN2 Marsh, C.",
    stage: "OBO",
    pin: "2468",
  },
  {
    id: "cert-chief",
    label: "Chief — OSC Harper, D.",
    stage: "Chief",
    pin: "1357",
  },
  {
    id: "cert-devo",
    label: "DEVO — LTJG Kwon, S.",
    stage: "DEVO",
    pin: "8642",
  },
  {
    id: "cert-dh",
    label: "Department Head — LCDR Wells, R.",
    stage: "Department Head",
    pin: "9753",
  },
  {
    id: "cert-xo",
    label: "XO — CDR Blake, A.",
    stage: "XO",
    pin: "1122",
  },
  {
    id: "cert-co",
    label: "CO — CAPT Reyes, M.",
    stage: "CO",
    pin: "3344",
  },
  {
    id: "cert-cob",
    label: "COB — CMDCM Ortiz, L.",
    stage: "COB",
    pin: "5566",
  },
];

const ROLES = [
  { id: "submitter", label: "Submitter (demo user)" },
  ...ALL_STAGES.map((stage) => ({ id: stage, label: `Reviewer · ${stage}` })),
];

const TODAY = new Date("2026-11-18T12:00:00");

let packages = [
  {
    id: "EVAL-E6-044",
    formType: "Eval / FITREP Endorsement",
    formCode: "NAVPERS 1616/26",
    originator: "FC1 Nguyen, T.",
    rate: "Fire Controlman",
    subject: "E6 Eval endorsement package",
    summary:
      "Periodic evaluation for FC1 Nguyen covering weapons system readiness and watchstanding.",
    dateSubmitted: "2026-11-06",
    priority: "Urgent",
    chain: ["OBO", "Chief", "DEVO", "Department Head", "XO", "CO"],
    status: "routing",
    currentStageIndex: 3,
    checklist: [
      { id: "c1", label: "Eval block completeness verified", checked: true },
      { id: "c2", label: "Trait marks consistent with narrative", checked: true },
      { id: "c3", label: "Reporting senior endorsement attached", checked: false },
    ],
    signatures: [
      { stage: "OBO", by: "YN2 Marsh, C.", at: "2026-11-07T09:10:00" },
      { stage: "Chief", by: "OSC Harper, D.", at: "2026-11-08T14:22:00" },
      { stage: "DEVO", by: "LTJG Kwon, S.", at: "2026-11-10T11:05:00" },
    ],
    returns: [],
  },
  {
    id: "LEAVE-26-118",
    formType: "Leave Request",
    formCode: "NAVCOMPT 3065",
    originator: "BM3 Alvarez, J.",
    rate: "Boatswain's Mate",
    subject: "Annual leave 22–28 NOV",
    summary: "Leave chit for family event; watchbill coverage confirmed by LPO.",
    dateSubmitted: "2026-11-12",
    priority: "Routine",
    chain: ["OBO", "Chief", "Department Head", "XO"],
    status: "routing",
    currentStageIndex: 1,
    checklist: [
      { id: "c1", label: "Leave balance verified", checked: true },
      { id: "c2", label: "Watchbill coverage attached", checked: false },
      { id: "c3", label: "Emergency contact current", checked: true },
    ],
    signatures: [{ stage: "OBO", by: "YN2 Marsh, C.", at: "2026-11-12T16:40:00" }],
    returns: [],
  },
  {
    id: "AWARDS-NAM-09",
    formType: "Awards Package",
    formCode: "OPNAV 1650/3",
    originator: "EMC Brooks, A.",
    rate: "Electrician's Mate",
    subject: "Navy Achievement Medal nomination",
    summary: "NAM package for sustained superior performance during SRA.",
    dateSubmitted: "2026-11-03",
    priority: "Priority",
    chain: ["OBO", "Chief", "DEVO", "Department Head", "XO", "CO", "COB"],
    status: "returned",
    currentStageIndex: 0,
    checklist: [
      { id: "c1", label: "Citation draft attached", checked: true },
      { id: "c2", label: "Impact bullets quantified", checked: false },
      { id: "c3", label: "Prior awards history reviewed", checked: true },
    ],
    signatures: [
      { stage: "OBO", by: "YN2 Marsh, C.", at: "2026-11-04T08:15:00" },
      { stage: "Chief", by: "OSC Harper, D.", at: "2026-11-05T10:02:00" },
    ],
    returns: [
      {
        id: "ret-1",
        fromStage: "DEVO",
        fromName: "LTJG Kwon, S.",
        at: "2026-11-11T13:30:00",
        comment:
          "Impact bullets need measurable readiness outcomes. Resubmit with quantified metrics and corrected OPNAV 1650/3 block 18.",
        unread: true,
      },
    ],
  },
  {
    id: "DRB-CHIT-21",
    formType: "Disciplinary Review Chit",
    formCode: "NAVPERS 1626/7",
    originator: "MA2 Cole, R.",
    rate: "Master-at-Arms",
    subject: "DRB referral package",
    summary: "Disciplinary review board referral with supporting statements.",
    dateSubmitted: "2026-11-14",
    priority: "Urgent",
    chain: ["OBO", "Chief", "Department Head", "XO", "CO"],
    status: "routing",
    currentStageIndex: 4,
    checklist: [
      { id: "c1", label: "Witness statements attached", checked: true },
      { id: "c2", label: "Rights advisement documented", checked: true },
      { id: "c3", label: "Previous mast history reviewed", checked: true },
    ],
    signatures: [
      { stage: "OBO", by: "YN2 Marsh, C.", at: "2026-11-14T18:05:00" },
      { stage: "Chief", by: "OSC Harper, D.", at: "2026-11-15T09:40:00" },
      { stage: "Department Head", by: "LCDR Wells, R.", at: "2026-11-16T11:18:00" },
      { stage: "XO", by: "CDR Blake, A.", at: "2026-11-17T15:55:00" },
    ],
    returns: [],
  },
  {
    id: "MED-LIMDU-5",
    formType: "Limited Duty Package",
    formCode: "NAVPERS 1306/7",
    originator: "HM2 Ortiz, L.",
    rate: "Hospital Corpsman",
    subject: "LIMDU package for medical board routing",
    summary: "Limited duty request with medical provider endorsement.",
    dateSubmitted: "2026-11-01",
    priority: "Priority",
    chain: ["OBO", "Chief", "DEVO", "Department Head", "XO", "CO"],
    status: "routing",
    currentStageIndex: 2,
    checklist: [
      { id: "c1", label: "Medical provider letter attached", checked: true },
      { id: "c2", label: "Duty limitations clearly stated", checked: true },
      { id: "c3", label: "Command sponsor identified", checked: false },
    ],
    signatures: [
      { stage: "OBO", by: "YN2 Marsh, C.", at: "2026-11-02T10:20:00" },
      { stage: "Chief", by: "OSC Harper, D.", at: "2026-11-03T12:11:00" },
    ],
    returns: [],
  },
];

let activePackageId = "EVAL-E6-044";
let currentRole = "Department Head";
let pendingSignCertId = null;

function daysBetween(isoDate) {
  const submitted = new Date(`${isoDate}T12:00:00`);
  return Math.max(0, Math.round((TODAY - submitted) / 86400000));
}

function formatDate(isoDate) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "America/New_York",
  });
}

function formatDateTime(iso) {
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function agingClass(days) {
  if (days >= 10) return "hot";
  if (days >= 5) return "warn";
  return "ok";
}

function getPackage(id) {
  return packages.find((pkg) => pkg.id === id);
}

function getActivePackage() {
  return getPackage(activePackageId) || packages[0];
}

function unreadReturnCount() {
  return packages.reduce(
    (sum, pkg) => sum + pkg.returns.filter((r) => r.unread).length,
    0
  );
}

function statusLabel(pkg) {
  if (pkg.status === "returned") return "Returned";
  if (pkg.status === "complete") return "Complete";
  const stage = pkg.chain[pkg.currentStageIndex] || "Final";
  return `At ${stage}`;
}

function switchView(view) {
  const tabs = document.querySelectorAll(".tab");
  const views = {
    dashboard: document.getElementById("view-dashboard"),
    submit: document.getElementById("view-submit"),
    workspace: document.getElementById("view-workspace"),
    inbox: document.getElementById("view-inbox"),
  };

  tabs.forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });

  Object.entries(views).forEach(([key, el]) => {
    const active = key === view;
    el.classList.toggle("active", active);
    el.hidden = !active;
  });

  if (view === "inbox") {
    markVisibleReturnsRead();
  }
}

function openPackage(id) {
  activePackageId = id;
  document.getElementById("workspace-select").value = id;
  renderWorkspace();
  switchView("workspace");
}

function renderRoleSelect() {
  const select = document.getElementById("role-select");
  select.innerHTML = ROLES.map(
    (role) =>
      `<option value="${role.id}" ${role.id === currentRole ? "selected" : ""}>${role.label}</option>`
  ).join("");
}

function renderSummary() {
  const strip = document.getElementById("summary-strip");
  const active = packages.filter((p) => p.status !== "complete");
  const urgent = active.filter((f) => f.priority === "Urgent").length;
  const returned = packages.filter((p) => p.status === "returned").length;
  const oldest = Math.max(
    0,
    ...active.map((f) => daysBetween(f.dateSubmitted))
  );

  strip.innerHTML = [
    { label: "In routing", value: active.length },
    { label: "Urgent", value: urgent },
    { label: "Returned", value: returned },
    { label: "Oldest (days)", value: oldest },
  ]
    .map(
      (item) => `
      <div class="summary-item">
        <span class="label">${item.label}</span>
        <span class="value">${item.value}</span>
      </div>`
    )
    .join("");
}

function renderFormsTable() {
  const tbody = document.getElementById("forms-tbody");
  const sorted = [...packages].sort(
    (a, b) => daysBetween(b.dateSubmitted) - daysBetween(a.dateSubmitted)
  );

  tbody.innerHTML = sorted
    .map((form) => {
      const days = daysBetween(form.dateSubmitted);
      const priorityClass = PRIORITY_CLASS[form.priority];
      const statusClass =
        form.status === "returned"
          ? "status-returned"
          : form.status === "complete"
            ? "status-complete"
            : "status-routing";
      return `
        <tr>
          <td>
            <span class="form-type">${form.formType}</span>
            <span class="form-code">${form.formCode}</span>
          </td>
          <td>
            <span class="originator">${form.originator}</span>
            <span class="originator-rate">${form.rate}</span>
          </td>
          <td class="date-cell">${formatDate(form.dateSubmitted)}</td>
          <td>
            <span class="priority-box ${priorityClass}">${form.priority}</span>
          </td>
          <td>
            <span class="aging ${agingClass(days)}">${days}</span>
          </td>
          <td><span class="status-pill ${statusClass}">${statusLabel(form)}</span></td>
          <td>
            <button type="button" class="btn compact" data-open="${form.id}">
              Open
            </button>
          </td>
        </tr>`;
    })
    .join("");
}

function renderChainPicker() {
  const picker = document.getElementById("chain-picker");
  const defaults = new Set(["OBO", "Chief", "Department Head", "XO", "CO"]);
  picker.innerHTML = ALL_STAGES.map((stage, index) => {
    const checked = defaults.has(stage) ? "checked" : "";
    return `
      <label class="chain-option">
        <input type="checkbox" name="chain" value="${stage}" ${checked} />
        <span class="order">${index + 1}</span>
        <span class="name">${stage}</span>
      </label>`;
  }).join("");
}

function renderWorkspaceSelect() {
  const select = document.getElementById("workspace-select");
  select.innerHTML = packages
    .map(
      (pkg) =>
        `<option value="${pkg.id}" ${pkg.id === activePackageId ? "selected" : ""}>${pkg.formType} — ${pkg.originator}</option>`
    )
    .join("");
}

function renderCertSelect(pkg) {
  const select = document.getElementById("cert-select");
  const stage = pkg.chain[pkg.currentStageIndex];
  const options = CERTIFICATES.filter((cert) =>
    pkg.status === "routing" ? cert.stage === stage || currentRole === cert.stage : true
  );
  const list = options.length ? options : CERTIFICATES;
  select.innerHTML = list
    .map(
      (cert) =>
        `<option value="${cert.id}">${cert.label} · demo PIN ${cert.pin}</option>`
    )
    .join("");
}

function renderMiniStepper(pkg) {
  const stepper = document.getElementById("mini-stepper");
  stepper.innerHTML = pkg.chain
    .map((stage, index) => {
      let state = "pending";
      if (pkg.signatures.some((s) => s.stage === stage)) state = "complete";
      else if (pkg.status === "routing" && index === pkg.currentStageIndex)
        state = "current";
      else if (pkg.status === "returned" && index === 0) state = "returned";
      return `<li class="mini-step ${state}"><span>${stage}</span></li>`;
    })
    .join("");
}

function renderDocument(pkg) {
  const panel = document.getElementById("document-panel");
  const latestReturn = pkg.returns[pkg.returns.length - 1];

  panel.innerHTML = `
    <header class="doc-header">
      <div>
        <p class="doc-kicker">${pkg.formCode}</p>
        <h2>${pkg.formType}</h2>
        <p class="doc-subject">${pkg.subject}</p>
      </div>
      <div class="doc-meta">
        <span>Originator: ${pkg.originator}</span>
        <span>${pkg.rate}</span>
        <span>Submitted: ${formatDate(pkg.dateSubmitted)}</span>
        <span class="priority-box ${PRIORITY_CLASS[pkg.priority]}">${pkg.priority}</span>
      </div>
    </header>

    ${
      latestReturn
        ? `<div class="return-callout" role="status">
            <div class="return-callout-head">
              <strong>Returned for correction</strong>
              <span>${latestReturn.fromStage} · ${formatDateTime(latestReturn.at)}</span>
            </div>
            <p>${latestReturn.comment}</p>
          </div>`
        : ""
    }

    <section class="doc-section">
      <h3>Package summary</h3>
      <p>${pkg.summary}</p>
    </section>

    <section class="doc-section">
      <h3>Selected chain of command</h3>
      <p class="chain-line">${pkg.chain.join(" → ")}</p>
    </section>

    <section class="doc-section">
      <h3>Review checklist</h3>
      <ul class="check-list" id="doc-checklist">
        ${pkg.checklist
          .map(
            (item) => `
          <li>
            <label>
              <input
                type="checkbox"
                data-check-id="${item.id}"
                ${item.checked ? "checked" : ""}
                ${pkg.status === "complete" ? "disabled" : ""}
              />
              <span>${item.label}</span>
            </label>
          </li>`
          )
          .join("")}
      </ul>
    </section>

    <section class="doc-section">
      <h3>Digital signature block</h3>
      <div class="sig-block">
        ${
          pkg.signatures.length
            ? pkg.signatures
                .map(
                  (sig) => `
              <div class="sig-row">
                <span class="sig-stage">${sig.stage}</span>
                <span class="sig-by">${sig.by}</span>
                <span class="sig-at">${formatDateTime(sig.at)}</span>
                <span class="sig-mark">CERT SIGNED</span>
              </div>`
                )
                .join("")
            : `<p class="muted">No certificate signatures applied yet.</p>`
        }
      </div>
    </section>
  `;
}

function renderWorkspace() {
  const pkg = getActivePackage();
  const empty = document.getElementById("workspace-empty");
  const content = document.getElementById("workspace-content");

  if (!pkg) {
    empty.hidden = false;
    content.hidden = true;
    return;
  }

  empty.hidden = true;
  content.hidden = false;

  const stage = pkg.chain[pkg.currentStageIndex] || "—";
  document.getElementById("workspace-banner").innerHTML = `
    <strong>${pkg.subject}</strong>
    <span>${pkg.formCode} · ${pkg.originator}</span>
    <span class="status-pill ${
      pkg.status === "returned"
        ? "status-returned"
        : pkg.status === "complete"
          ? "status-complete"
          : "status-routing"
    }">${statusLabel(pkg)}</span>
  `;

  document.getElementById("acting-role-label").textContent =
    ROLES.find((r) => r.id === currentRole)?.label || currentRole;
  document.getElementById("acting-stage-label").textContent =
    pkg.status === "routing" ? stage : pkg.status;

  renderCertSelect(pkg);
  renderMiniStepper(pkg);
  renderDocument(pkg);

  const isReviewer = currentRole !== "submitter";
  const atMyStage = pkg.status === "routing" && currentRole === stage;
  document.getElementById("btn-sign").disabled = !atMyStage;
  document.getElementById("btn-return").disabled = !atMyStage;
  const resubmitBlock = document.getElementById("resubmit-block");
  resubmitBlock.hidden = !(pkg.status === "returned" && currentRole === "submitter");
  document.getElementById("sign-status").textContent =
    pkg.status === "returned"
      ? currentRole === "submitter"
        ? "Package returned to you — review the comment and resubmit."
        : "Package is with the submitter for corrections."
      : pkg.status === "complete"
        ? "Routing complete."
        : atMyStage
          ? `Ready for ${stage} action.`
          : isReviewer
            ? `Waiting on ${stage}. Switch Acting as to that stage to sign.`
            : "Switch to a reviewer role to sign or return.";
}

function renderInboxBadge() {
  const badge = document.getElementById("inbox-badge");
  const count = unreadReturnCount();
  if (count > 0) {
    badge.hidden = false;
    badge.textContent = String(count);
  } else {
    badge.hidden = true;
  }
}

function renderInbox() {
  const list = document.getElementById("inbox-list");
  const summary = document.getElementById("inbox-summary");
  const returned = packages
    .filter((pkg) => pkg.returns.length)
    .sort((a, b) => {
      const aAt = a.returns[a.returns.length - 1].at;
      const bAt = b.returns[b.returns.length - 1].at;
      return bAt.localeCompare(aAt);
    });

  const unread = unreadReturnCount();
  summary.innerHTML = [
    { label: "Returned pkgs", value: returned.length },
    { label: "Unread", value: unread },
  ]
    .map(
      (item) => `
      <div class="summary-item">
        <span class="label">${item.label}</span>
        <span class="value">${item.value}</span>
      </div>`
    )
    .join("");

  if (!returned.length) {
    list.innerHTML = `<div class="empty-state">No returned packages. When a reviewer sends a package back, the comment appears here.</div>`;
    return;
  }

  list.innerHTML = returned
    .map((pkg) => {
      const notes = [...pkg.returns].reverse();
      return `
        <article class="inbox-card ${notes.some((n) => n.unread) ? "has-unread" : ""}">
          <header>
            <div>
              <h2>${pkg.formType}</h2>
              <p>${pkg.subject} · ${pkg.formCode}</p>
            </div>
            <button type="button" class="btn compact" data-open="${pkg.id}">Open form</button>
          </header>
          <div class="comment-stack">
            ${notes
              .map(
                (note) => `
              <div class="comment-card ${note.unread ? "unread" : ""}">
                <div class="comment-head">
                  <strong>${note.fromStage} — ${note.fromName}</strong>
                  <span>${formatDateTime(note.at)}</span>
                  ${note.unread ? `<span class="new-tag">New</span>` : ""}
                </div>
                <p>${note.comment}</p>
              </div>`
              )
              .join("")}
          </div>
        </article>`;
    })
    .join("");
}

function markVisibleReturnsRead() {
  packages.forEach((pkg) => {
    pkg.returns.forEach((note) => {
      note.unread = false;
    });
  });
  renderInboxBadge();
  renderInbox();
  renderFormsTable();
}

function refreshAll() {
  renderSummary();
  renderFormsTable();
  renderWorkspaceSelect();
  renderWorkspace();
  renderInboxBadge();
  renderInbox();
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });
}

function setupDashboard() {
  document.getElementById("forms-tbody").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-open]");
    if (btn) openPackage(btn.dataset.open);
  });
}

function setupSubmit() {
  document.getElementById("submit-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const typeValue = document.getElementById("submit-form-type").value;
    const [formType, formCode] = typeValue.split("|");
    const chain = [...document.querySelectorAll('#chain-picker input:checked')].map(
      (el) => el.value
    );

    if (!chain.length) {
      const note = document.getElementById("submit-note");
      note.hidden = false;
      note.textContent = "Select at least one office in the chain of command.";
      return;
    }

    const id = `PKG-${Date.now().toString().slice(-6)}`;
    const pkg = {
      id,
      formType,
      formCode,
      originator: "YN3 Demo, A.",
      rate: "Yeoman (demo submitter)",
      subject: document.getElementById("submit-subject").value.trim(),
      summary: document.getElementById("submit-summary").value.trim(),
      dateSubmitted: "2026-11-18",
      priority: document.getElementById("submit-priority").value,
      chain,
      status: "routing",
      currentStageIndex: 0,
      checklist: [
        { id: "c1", label: "Required enclosures attached", checked: false },
        { id: "c2", label: "Administrative data verified", checked: false },
        { id: "c3", label: "Routing justification complete", checked: true },
      ],
      signatures: [],
      returns: [],
    };

    packages.unshift(pkg);
    activePackageId = id;
    document.getElementById("submit-form").reset();
    renderChainPicker();
    const note = document.getElementById("submit-note");
    note.hidden = false;
    note.textContent = `Submitted ${id}. Opening form workspace…`;
    refreshAll();
    openPackage(id);
  });
}

function setupWorkspace() {
  document.getElementById("workspace-select").addEventListener("change", (event) => {
    activePackageId = event.target.value;
    renderWorkspace();
  });

  document.getElementById("document-panel").addEventListener("change", (event) => {
    if (!event.target.matches('[data-check-id]')) return;
    const pkg = getActivePackage();
    const item = pkg.checklist.find((c) => c.id === event.target.dataset.checkId);
    if (item) item.checked = event.target.checked;
  });

  document.getElementById("btn-sign").addEventListener("click", () => {
    const pkg = getActivePackage();
    if (pkg.status !== "routing" || currentRole === "submitter") return;
    pendingSignCertId = document.getElementById("cert-select").value;
    const cert = CERTIFICATES.find((c) => c.id === pendingSignCertId);
    document.getElementById("pin-cert-name").textContent = cert?.label || "certificate";
    document.getElementById("pin-input").value = "";
    document.getElementById("pin-error").hidden = true;
    document.getElementById("pin-dialog").showModal();
    document.getElementById("pin-input").focus();
  });

  document.getElementById("pin-form").addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (submitter?.value === "cancel") {
      pendingSignCertId = null;
      return;
    }

    event.preventDefault();
    const cert = CERTIFICATES.find((c) => c.id === pendingSignCertId);
    const pin = document.getElementById("pin-input").value.trim();
    if (!cert || pin !== cert.pin) {
      document.getElementById("pin-error").hidden = false;
      return;
    }

    const pkg = getActivePackage();
    const stage = pkg.chain[pkg.currentStageIndex];
    if (cert.stage !== stage && currentRole !== cert.stage) {
      document.getElementById("pin-error").hidden = false;
      document.getElementById("pin-error").textContent =
        "Selected certificate does not match the current routing stage.";
      return;
    }

    pkg.signatures.push({
      stage,
      by: cert.label.split("—")[1]?.trim() || cert.label,
      at: new Date().toISOString(),
    });

    if (pkg.currentStageIndex >= pkg.chain.length - 1) {
      pkg.status = "complete";
      pkg.currentStageIndex = pkg.chain.length;
    } else {
      pkg.currentStageIndex += 1;
    }

    document.getElementById("pin-dialog").close();
    pendingSignCertId = null;
    document.getElementById("sign-status").textContent = `Signed at ${stage}.`;
    refreshAll();
  });

  document.getElementById("btn-return").addEventListener("click", () => {
    const pkg = getActivePackage();
    const comment = document.getElementById("return-comment").value.trim();
    if (!comment) {
      document.getElementById("return-comment").focus();
      document.getElementById("sign-status").textContent =
        "Add a comment before sending back.";
      return;
    }
    if (pkg.status !== "routing" || currentRole === "submitter") return;

    const cert =
      CERTIFICATES.find((c) => c.stage === currentRole) ||
      CERTIFICATES.find((c) => c.id === document.getElementById("cert-select").value);

    pkg.returns.push({
      id: `ret-${Date.now()}`,
      fromStage: currentRole,
      fromName: cert?.label.split("—")[1]?.trim() || currentRole,
      at: new Date().toISOString(),
      comment,
      unread: true,
    });
    pkg.status = "returned";
    pkg.currentStageIndex = 0;
    pkg.signatures = [];
    document.getElementById("return-comment").value = "";
    refreshAll();
    switchView("inbox");
  });

  document.getElementById("inbox-list").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-open]");
    if (btn) openPackage(btn.dataset.open);
  });

  document.getElementById("btn-resubmit").addEventListener("click", () => {
    const pkg = getActivePackage();
    if (pkg.status !== "returned" || currentRole !== "submitter") return;
    pkg.status = "routing";
    pkg.currentStageIndex = 0;
    pkg.signatures = [];
    document.getElementById("sign-status").textContent =
      "Resubmitted into routing at OBO / first selected stage.";
    refreshAll();
  });
}

function setupRole() {
  document.getElementById("role-select").addEventListener("change", (event) => {
    currentRole = event.target.value;
    renderWorkspace();
  });
}

function init() {
  renderRoleSelect();
  renderChainPicker();
  setupTabs();
  setupDashboard();
  setupSubmit();
  setupWorkspace();
  setupRole();
  refreshAll();
}

init();
