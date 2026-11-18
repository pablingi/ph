const STAGES = ["OBO", "Chief", "DEVO", "Department Head", "XO", "CO", "COB"];

const PRIORITY_CLASS = {
  Routine: "routine",
  Priority: "priority",
  Urgent: "urgent",
};

const PENDING_FORMS = [
  {
    id: "NAVPERS-1336-1",
    formType: "Special Request / Authorization",
    formCode: "NAVPERS 1336/3",
    originator: "OS2 Rivera, M.",
    rate: "Operations Specialist",
    dateSubmitted: "2026-11-10",
    priority: "Priority",
  },
  {
    id: "EVAL-E6-044",
    formType: "Eval / FITREP Endorsement",
    formCode: "NAVPERS 1616/26",
    originator: "FC1 Nguyen, T.",
    rate: "Fire Controlman",
    dateSubmitted: "2026-11-06",
    priority: "Urgent",
  },
  {
    id: "LEAVE-26-118",
    formType: "Leave Request",
    formCode: "NAVCOMPT 3065",
    originator: "BM3 Alvarez, J.",
    rate: "Boatswain's Mate",
    dateSubmitted: "2026-11-12",
    priority: "Routine",
  },
  {
    id: "AWARDS-NAM-09",
    formType: "Awards Package",
    formCode: "OPNAV 1650/3",
    originator: "EMC Brooks, A.",
    rate: "Electrician's Mate",
    dateSubmitted: "2026-11-03",
    priority: "Priority",
  },
  {
    id: "DRB-CHIT-21",
    formType: "Disciplinary Review Chit",
    formCode: "NAVPERS 1626/7",
    originator: "MA2 Cole, R.",
    rate: "Master-at-Arms",
    dateSubmitted: "2026-11-14",
    priority: "Urgent",
  },
  {
    id: "PCS-ORD-77",
    formType: "PCS / Transfer Checklist",
    formCode: "NAVPERS 1306/92",
    originator: "YN1 Patel, S.",
    rate: "Yeoman",
    dateSubmitted: "2026-11-08",
    priority: "Routine",
  },
  {
    id: "MED-LIMDU-5",
    formType: "Limited Duty Package",
    formCode: "NAVPERS 1306/7",
    originator: "HM2 Ortiz, L.",
    rate: "Hospital Corpsman",
    dateSubmitted: "2026-11-01",
    priority: "Priority",
  },
  {
    id: "QUAL-ESWS-12",
    formType: "Warfare Qual Board Request",
    formCode: "COMNAVSURFOR 1414",
    originator: "GM3 Hayes, K.",
    rate: "Gunner's Mate",
    dateSubmitted: "2026-11-15",
    priority: "Routine",
  },
];

const ROUTING_PACKAGES = [
  {
    id: "EVAL-E6-044",
    title: "Eval Endorsement — FC1 Nguyen",
    detail: "NAVPERS 1616/26 · Weapons Dept · Due for soft copy routing",
    signedThrough: 3,
  },
  {
    id: "AWARDS-NAM-09",
    title: "NAM Package — EMC Brooks",
    detail: "OPNAV 1650/3 · Engineering · Awaiting Department Head",
    signedThrough: 2,
  },
  {
    id: "DRB-CHIT-21",
    title: "DRB Chit — MA2 Cole",
    detail: "NAVPERS 1626/7 · Security · Expedite for CO review",
    signedThrough: 5,
  },
  {
    id: "LEAVE-26-118",
    title: "Leave Request — BM3 Alvarez",
    detail: "NAVCOMPT 3065 · Deck · Routine routing",
    signedThrough: 1,
  },
];

const TODAY = new Date("2026-11-18T12:00:00");

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

function agingClass(days) {
  if (days >= 10) return "hot";
  if (days >= 5) return "warn";
  return "ok";
}

function renderSummary() {
  const strip = document.getElementById("summary-strip");
  const urgent = PENDING_FORMS.filter((f) => f.priority === "Urgent").length;
  const priority = PENDING_FORMS.filter((f) => f.priority === "Priority").length;
  const oldest = Math.max(...PENDING_FORMS.map((f) => daysBetween(f.dateSubmitted)));

  strip.innerHTML = [
    { label: "Pending", value: PENDING_FORMS.length },
    { label: "Urgent", value: urgent },
    { label: "Priority", value: priority },
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
  const sorted = [...PENDING_FORMS].sort(
    (a, b) => daysBetween(b.dateSubmitted) - daysBetween(a.dateSubmitted)
  );

  tbody.innerHTML = sorted
    .map((form) => {
      const days = daysBetween(form.dateSubmitted);
      const priorityClass = PRIORITY_CLASS[form.priority];
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
        </tr>`;
    })
    .join("");
}

function stageStatus(index, signedThrough) {
  if (index < signedThrough) return "complete";
  if (index === signedThrough) return "current";
  return "pending";
}

function statusLabel(status) {
  if (status === "complete") return "Signed";
  if (status === "current") return "Awaiting";
  return "Queued";
}

function renderPackageSelect() {
  const select = document.getElementById("package-select");
  select.innerHTML = ROUTING_PACKAGES.map(
    (pkg) => `<option value="${pkg.id}">${pkg.title}</option>`
  ).join("");
}

function getActivePackage() {
  const id = document.getElementById("package-select").value;
  return ROUTING_PACKAGES.find((pkg) => pkg.id === id) || ROUTING_PACKAGES[0];
}

function renderRouting() {
  const pkg = getActivePackage();
  const banner = document.getElementById("package-banner");
  const stepper = document.getElementById("stepper");

  banner.innerHTML = `
    <strong>${pkg.title}</strong>
    <span>${pkg.detail}</span>
    <span>${pkg.signedThrough} of ${STAGES.length} stages certified</span>
  `;

  stepper.innerHTML = STAGES.map((stage, index) => {
    const status = stageStatus(index, pkg.signedThrough);
    const checked = index < pkg.signedThrough ? "checked" : "";
    const short = stage
      .split(" ")
      .map((part) => part[0])
      .join("");

    return `
      <li class="step ${status}" data-stage-index="${index}">
        <div class="step-node" aria-hidden="true">${short}</div>
        <div class="step-label">${stage}</div>
        <div class="step-status">${statusLabel(status)}</div>
        <label class="cert-check">
          <input type="checkbox" data-stage-index="${index}" ${checked} />
          DigiCert Sig
        </label>
      </li>`;
  }).join("");
}

function applySignatureThrough(index, signed) {
  const pkg = getActivePackage();
  if (signed) {
    pkg.signedThrough = Math.max(pkg.signedThrough, index + 1);
  } else {
    pkg.signedThrough = Math.min(pkg.signedThrough, index);
  }
  renderRouting();
  const refreshed = document.querySelector(
    `#stepper input[data-stage-index="${index}"]`
  );
  if (refreshed) refreshed.focus();
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const views = {
    dashboard: document.getElementById("view-dashboard"),
    routing: document.getElementById("view-routing"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const view = tab.dataset.view;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      Object.entries(views).forEach(([key, el]) => {
        const active = key === view;
        el.classList.toggle("active", active);
        el.hidden = !active;
      });
    });
  });
}

function setupRoutingControls() {
  document.getElementById("package-select").addEventListener("change", renderRouting);

  document.getElementById("stepper").addEventListener("change", (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
      const index = Number(event.target.dataset.stageIndex);
      applySignatureThrough(index, event.target.checked);
    }
  });
}

function init() {
  renderSummary();
  renderFormsTable();
  renderPackageSelect();
  renderRouting();
  setupTabs();
  setupRoutingControls();
}

init();
