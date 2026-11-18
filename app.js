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
  {
    id: "QUAL-ESWS-12",
    formType: "Warfare Qual Board Request",
    formCode: "COMNAVSURFOR 1414",
    originator: "GM3 Hayes, K.",
    rate: "Gunner's Mate",
    subject: "ESWS board request — fully endorsed",
    summary:
      "Warfare qualification board request completed through the selected chain and delivered back to the submitter as a signed PDF.",
    dateSubmitted: "2026-10-28",
    priority: "Routine",
    chain: ["OBO", "Chief", "Department Head", "XO"],
    status: "complete",
    currentStageIndex: 4,
    checklist: [
      { id: "c1", label: "PQS completeness verified", checked: true },
      { id: "c2", label: "Oral board package attached", checked: true },
      { id: "c3", label: "Division officer endorsement attached", checked: true },
    ],
    signatures: [
      {
        stage: "OBO",
        by: "YN2 Marsh, C.",
        at: "2026-10-29T09:00:00",
        box: { xPct: 0.1, yPct: 0.58, wPct: 0.38, hPct: 0.06 },
      },
      {
        stage: "Chief",
        by: "OSC Harper, D.",
        at: "2026-10-30T11:20:00",
        box: { xPct: 0.52, yPct: 0.58, wPct: 0.38, hPct: 0.06 },
      },
      {
        stage: "Department Head",
        by: "LCDR Wells, R.",
        at: "2026-11-02T14:05:00",
        box: { xPct: 0.1, yPct: 0.67, wPct: 0.38, hPct: 0.06 },
      },
      {
        stage: "XO",
        by: "CDR Blake, A.",
        at: "2026-11-04T16:40:00",
        box: { xPct: 0.52, yPct: 0.67, wPct: 0.38, hPct: 0.06 },
      },
    ],
    returns: [],
    delivery: {
      unread: true,
      at: "2026-11-04T16:41:00",
      fileName: "QUAL-ESWS-12-signed.pdf",
    },
    finalPdfBytes: null,
  },
];

let activePackageId = "EVAL-E6-044";
let currentRole = "Department Head";
let pendingSignCertId = null;
let pendingSigBox = null;
let pdfBytesCache = null;
let pdfDrawState = null;

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
}

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

function unreadDeliveryCount() {
  return packages.filter((pkg) => pkg.delivery?.unread).length;
}

function inboxBadgeCount() {
  return unreadReturnCount() + unreadDeliveryCount();
}

function ensureSignatureBoxes(pkg) {
  let autoIndex = 0;
  pkg.signatures.forEach((sig) => {
    if (sig.box) return;
    const col = autoIndex % 2;
    const row = Math.floor(autoIndex / 2);
    sig.box = {
      xPct: 0.1 + col * 0.42,
      yPct: 0.58 + row * 0.08,
      wPct: 0.38,
      hPct: 0.06,
    };
    autoIndex += 1;
  });
}

function downloadPdfBytes(bytes, fileName) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function deliverFinalPdfToSubmitter(pkg) {
  ensureSignatureBoxes(pkg);
  const bytes = await buildPackagePdf(pkg, null, null, { final: true });
  pkg.finalPdfBytes = bytes;
  pkg.delivery = {
    unread: true,
    at: new Date().toISOString(),
    fileName: `${pkg.id}-signed.pdf`,
  };
  return bytes;
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
                <span class="sig-mark">CERT SIGNED${
                  sig.box ? " · BOX PLACED" : ""
                }</span>
              </div>`
                )
                .join("")
            : `<p class="muted">No certificate signatures applied yet.</p>`
        }
      </div>
    </section>
  `;
}

function escapePdfText(value) {
  return String(value || "").replace(/\(|\)|\\/g, " ");
}

async function buildPackagePdf(
  pkg,
  draftBox = null,
  draftLabel = null,
  options = {}
) {
  const final = Boolean(options.final || pkg.status === "complete");
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.08, 0.12, 0.16);
  const muted = rgb(0.35, 0.42, 0.48);
  const accent = rgb(0.55, 0.42, 0.18);
  const ok = rgb(0.15, 0.45, 0.3);

  let y = 748;
  const write = (text, size = 11, bold = false, color = ink, x = 48) => {
    page.drawText(escapePdfText(text), {
      x,
      y,
      size,
      font: bold ? fontBold : font,
      color,
    });
  };

  write(
    final
      ? "NAVOPS FINAL SIGNED PACKAGE — RETURN TO SUBMITTER"
      : "NAVOPS DIGITAL ROUTING PACKAGE",
    13,
    true,
    final ? ok : accent
  );
  y -= 22;
  write(pkg.formCode, 10, false, muted);
  y -= 18;
  write(pkg.formType, 16, true);
  y -= 20;
  write(pkg.subject, 12);
  y -= 28;

  write(`Originator / Submitter: ${pkg.originator}  ·  ${pkg.rate}`, 10);
  y -= 16;
  write(
    `Submitted: ${formatDate(pkg.dateSubmitted)}  ·  Priority: ${pkg.priority}`,
    10
  );
  y -= 16;
  write(`Chain: ${pkg.chain.join(" > ")}`, 10);
  y -= 16;
  if (final) {
    write(
      `Status: COMPLETE — all ${pkg.signatures.length} certificate signatures applied`,
      10,
      true,
      ok
    );
    y -= 28;
  } else {
    y -= 12;
  }

  write("PACKAGE SUMMARY", 11, true, accent);
  y -= 16;
  const summary = pkg.summary || "";
  const words = summary.split(/\s+/);
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > 86) {
      write(line, 10);
      y -= 14;
      line = word;
    } else {
      line = next;
    }
  });
  if (line) {
    write(line, 10);
    y -= 14;
  }
  y -= 14;

  write("REVIEW CHECKLIST", 11, true, accent);
  y -= 16;
  pkg.checklist.forEach((item) => {
    write(`[${item.checked ? "X" : " "}]  ${item.label}`, 10);
    y -= 15;
  });
  y -= 18;

  write(
    final ? "APPLIED CERTIFICATE SIGNATURES" : "SIGNATURE / ENDORSEMENT AREA",
    11,
    true,
    accent
  );
  y -= 10;
  page.drawRectangle({
    x: 48,
    y: 90,
    width: 516,
    height: Math.max(120, y - 100),
    borderColor: rgb(0.55, 0.62, 0.7),
    borderWidth: 1,
  });
  write(
    final
      ? "This PDF was delivered back to the original submitter with all endorsements."
      : "Draw signature box inside this area, then enter certificate PIN.",
    9,
    false,
    muted,
    58
  );
  y = 84;
  write(
    final ? "Certificate signature register:" : "Prior certificate signatures:",
    10,
    true
  );
  y -= 14;
  if (!pkg.signatures.length) {
    write("None applied yet.", 10, false, muted);
  } else {
    pkg.signatures.forEach((sig) => {
      write(`${sig.stage}: ${sig.by}  (${formatDateTime(sig.at)})`, 9, false, ok);
      y -= 13;
    });
  }

  const drawSigBox = (box, label, color) => {
    if (!box) return;
    const pageHeight = 792;
    const x = box.xPct * 612;
    const w = box.wPct * 612;
    const h = box.hPct * 792;
    const top = box.yPct * 792;
    const pdfY = pageHeight - top - h;
    page.drawRectangle({
      x,
      y: pdfY,
      width: w,
      height: h,
      borderColor: color,
      borderWidth: 1.5,
      color: rgb(color.red, color.green, color.blue),
      opacity: 0.08,
      borderOpacity: 1,
    });
    page.drawText(escapePdfText(label).slice(0, 48), {
      x: x + 6,
      y: pdfY + Math.max(8, h - 14),
      size: 9,
      font: fontBold,
      color,
    });
    if (h > 28) {
      page.drawText("Digital certificate signature", {
        x: x + 6,
        y: pdfY + 10,
        size: 8,
        font,
        color: muted,
      });
    }
  };

  ensureSignatureBoxes(pkg);
  pkg.signatures.forEach((sig) => {
    if (sig.box) {
      drawSigBox(sig.box, `SIGNED ${sig.stage} / ${sig.by}`, ok);
    }
  });

  if (draftBox) {
    drawSigBox(draftBox, draftLabel || "SIGNATURE BOX", accent);
  }

  return pdfDoc.save();
}

function syncOverlaySize() {
  const pageCanvas = document.getElementById("pdf-page-canvas");
  const overlay = document.getElementById("pdf-overlay-canvas");
  overlay.width = pageCanvas.width;
  overlay.height = pageCanvas.height;
  overlay.style.width = pageCanvas.style.width;
  overlay.style.height = pageCanvas.style.height;
}

function drawOverlayBox(box) {
  const overlay = document.getElementById("pdf-overlay-canvas");
  const ctx = overlay.getContext("2d");
  ctx.clearRect(0, 0, overlay.width, overlay.height);
  if (!box) return;
  const x = box.xPct * overlay.width;
  const y = box.yPct * overlay.height;
  const w = box.wPct * overlay.width;
  const h = box.hPct * overlay.height;
  ctx.fillStyle = "rgba(196, 163, 90, 0.16)";
  ctx.strokeStyle = "#c4a35a";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
  ctx.setLineDash([]);
  ctx.fillStyle = "#c4a35a";
  ctx.font = "700 14px 'Barlow Condensed', sans-serif";
  ctx.fillText("SIGNATURE BOX", x + 8, y + 18);
}

async function renderPdfBytes(bytes) {
  const loadingTask = pdfjsLib.getDocument({ data: bytes });
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.25 });
  const canvas = document.getElementById("pdf-page-canvas");
  const context = canvas.getContext("2d");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  canvas.style.width = `${viewport.width}px`;
  canvas.style.height = `${viewport.height}px`;
  await page.render({ canvasContext: context, viewport }).promise;
  syncOverlaySize();
  drawOverlayBox(pendingSigBox);
}

async function openPdfSigner() {
  const pkg = getActivePackage();
  const cert = CERTIFICATES.find((c) => c.id === pendingSignCertId);
  pendingSigBox = null;
  document.getElementById("btn-pdf-clear").disabled = true;
  document.getElementById("btn-pdf-pin").disabled = true;
  document.getElementById("pdf-sign-subtitle").textContent =
    `${pkg.formCode} · ${cert?.label || "certificate"} — drag a box, then enter PIN.`;
  document.getElementById("pdf-tool-hint").textContent =
    "Click and drag on the PDF to place the digital signature box.";

  const dialog = document.getElementById("pdf-sign-dialog");
  dialog.showModal();

  pdfBytesCache = await buildPackagePdf(pkg);
  await renderPdfBytes(pdfBytesCache);
}

function pointerToBoxPct(start, end, canvas) {
  const x1 = Math.min(start.x, end.x);
  const y1 = Math.min(start.y, end.y);
  const x2 = Math.max(start.x, end.x);
  const y2 = Math.max(start.y, end.y);
  const w = Math.max(24, x2 - x1);
  const h = Math.max(18, y2 - y1);
  return {
    xPct: x1 / canvas.width,
    yPct: y1 / canvas.height,
    wPct: w / canvas.width,
    hPct: h / canvas.height,
  };
}

function setupPdfSigner() {
  const overlay = document.getElementById("pdf-overlay-canvas");

  overlay.addEventListener("pointerdown", (event) => {
    const rect = overlay.getBoundingClientRect();
    const scaleX = overlay.width / rect.width;
    const scaleY = overlay.height / rect.height;
    pdfDrawState = {
      start: {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY,
      },
    };
    overlay.setPointerCapture(event.pointerId);
  });

  overlay.addEventListener("pointermove", (event) => {
    if (!pdfDrawState) return;
    const rect = overlay.getBoundingClientRect();
    const scaleX = overlay.width / rect.width;
    const scaleY = overlay.height / rect.height;
    const end = {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
    const box = pointerToBoxPct(pdfDrawState.start, end, overlay);
    drawOverlayBox(box);
  });

  overlay.addEventListener("pointerup", (event) => {
    if (!pdfDrawState) return;
    const rect = overlay.getBoundingClientRect();
    const scaleX = overlay.width / rect.width;
    const scaleY = overlay.height / rect.height;
    const end = {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
    pendingSigBox = pointerToBoxPct(pdfDrawState.start, end, overlay);
    pdfDrawState = null;
    drawOverlayBox(pendingSigBox);
    document.getElementById("btn-pdf-clear").disabled = false;
    document.getElementById("btn-pdf-pin").disabled = false;
    document.getElementById("pdf-tool-hint").textContent =
      "Signature box ready. Enter PIN to apply the certificate signature.";
  });

  document.getElementById("btn-pdf-clear").addEventListener("click", () => {
    pendingSigBox = null;
    drawOverlayBox(null);
    document.getElementById("btn-pdf-clear").disabled = true;
    document.getElementById("btn-pdf-pin").disabled = true;
    document.getElementById("pdf-tool-hint").textContent =
      "Click and drag on the PDF to place the digital signature box.";
  });

  document.getElementById("btn-pdf-cancel").addEventListener("click", () => {
    document.getElementById("pdf-sign-dialog").close();
    pendingSignCertId = null;
    pendingSigBox = null;
  });

  document.getElementById("btn-pdf-pin").addEventListener("click", () => {
    if (!pendingSigBox) return;
    const cert = CERTIFICATES.find((c) => c.id === pendingSignCertId);
    document.getElementById("pin-cert-name").textContent = cert?.label || "certificate";
    document.getElementById("pin-input").value = "";
    document.getElementById("pin-error").hidden = true;
    document.getElementById("pin-error").textContent =
      "Invalid PIN. Demo PINs are listed under each certificate.";
    document.getElementById("pin-dialog").showModal();
    document.getElementById("pin-input").focus();
  });
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
  const finalBlock = document.getElementById("final-pdf-block");
  finalBlock.hidden = pkg.status !== "complete";
  document.getElementById("sign-status").textContent =
    pkg.status === "returned"
      ? currentRole === "submitter"
        ? "Package returned to you — review the comment and resubmit."
        : "Package is with the submitter for corrections."
      : pkg.status === "complete"
        ? "Routing complete — signed PDF delivered to submitter inbox."
        : atMyStage
          ? `Ready for ${stage} action.`
          : isReviewer
            ? `Waiting on ${stage}. Switch Acting as to that stage to sign.`
            : "Switch to a reviewer role to sign or return.";
}

function renderInboxBadge() {
  const badge = document.getElementById("inbox-badge");
  const count = inboxBadgeCount();
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
  const delivered = packages
    .filter((pkg) => pkg.status === "complete" && pkg.delivery)
    .sort((a, b) => b.delivery.at.localeCompare(a.delivery.at));

  const unread = inboxBadgeCount();
  summary.innerHTML = [
    { label: "Returned", value: returned.length },
    { label: "Signed PDFs", value: delivered.length },
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

  if (!returned.length && !delivered.length) {
    list.innerHTML = `<div class="empty-state">No inbox items yet. Returned comments and completed signed PDFs appear here for the submitter.</div>`;
    return;
  }

  const deliveredHtml = delivered
    .map((pkg) => {
      const unreadTag = pkg.delivery.unread
        ? `<span class="new-tag">New</span>`
        : "";
      return `
        <article class="inbox-card delivery-card ${
          pkg.delivery.unread ? "has-unread" : ""
        }">
          <header>
            <div>
              <h2>Signed PDF delivered</h2>
              <p>${pkg.formType} · ${pkg.subject} · ${pkg.formCode}</p>
            </div>
            <div class="inbox-actions">
              <button type="button" class="btn compact primary" data-download-pdf="${pkg.id}">
                Download PDF
              </button>
              <button type="button" class="btn compact" data-open="${pkg.id}">Open form</button>
            </div>
          </header>
          <div class="comment-card ${pkg.delivery.unread ? "unread" : ""}">
            <div class="comment-head">
              <strong>Final package with ${pkg.signatures.length} certificate signatures</strong>
              <span>${formatDateTime(pkg.delivery.at)}</span>
              ${unreadTag}
            </div>
            <p>
              Routing finished through ${pkg.chain.join(" → ")}. The completed
              PDF was returned to the submitter as
              <strong>${pkg.delivery.fileName}</strong>.
            </p>
          </div>
        </article>`;
    })
    .join("");

  const returnedHtml = returned
    .map((pkg) => {
      const notes = [...pkg.returns].reverse();
      return `
        <article class="inbox-card ${notes.some((n) => n.unread) ? "has-unread" : ""}">
          <header>
            <div>
              <h2>Returned for correction</h2>
              <p>${pkg.formType} · ${pkg.subject} · ${pkg.formCode}</p>
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

  list.innerHTML = `${deliveredHtml}${returnedHtml}`;
}

function markVisibleReturnsRead() {
  packages.forEach((pkg) => {
    pkg.returns.forEach((note) => {
      note.unread = false;
    });
    if (pkg.delivery) pkg.delivery.unread = false;
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
      delivery: null,
      finalPdfBytes: null,
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

  document.getElementById("btn-sign").addEventListener("click", async () => {
    const pkg = getActivePackage();
    if (pkg.status !== "routing" || currentRole === "submitter") return;
    pendingSignCertId = document.getElementById("cert-select").value;
    document.getElementById("sign-status").textContent =
      "Opening PDF for signature placement…";
    try {
      await openPdfSigner();
      document.getElementById("sign-status").textContent =
        "Draw a signature box on the PDF, then enter your certificate PIN.";
    } catch (error) {
      console.error(error);
      document.getElementById("sign-status").textContent =
        "Could not open PDF signer. Check network access for PDF libraries.";
    }
  });

  document.getElementById("pin-form").addEventListener("submit", async (event) => {
    const submitter = event.submitter;
    if (submitter?.value === "cancel") {
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

    if (!pendingSigBox) {
      document.getElementById("pin-error").hidden = false;
      document.getElementById("pin-error").textContent =
        "Draw a signature box on the PDF before entering PIN.";
      return;
    }

    const by = cert.label.split("—")[1]?.trim() || cert.label;
    pkg.signatures.push({
      stage,
      by,
      at: new Date().toISOString(),
      box: { ...pendingSigBox },
    });

    let completed = false;
    if (pkg.currentStageIndex >= pkg.chain.length - 1) {
      pkg.status = "complete";
      pkg.currentStageIndex = pkg.chain.length;
      completed = true;
    } else {
      pkg.currentStageIndex += 1;
    }

    try {
      if (completed) {
        const finalBytes = await deliverFinalPdfToSubmitter(pkg);
        pdfBytesCache = finalBytes;
        await renderPdfBytes(finalBytes);
      } else {
        const signedBytes = await buildPackagePdf(
          pkg,
          pendingSigBox,
          `SIGNED ${stage} / ${by}`
        );
        pdfBytesCache = signedBytes;
        await renderPdfBytes(signedBytes);
      }
    } catch (error) {
      console.error(error);
    }

    document.getElementById("pin-dialog").close();
    document.getElementById("pdf-sign-dialog").close();
    pendingSignCertId = null;
    pendingSigBox = null;
    document.getElementById("sign-status").textContent = completed
      ? `Final signature applied at ${stage}. Signed PDF delivered to submitter inbox.`
      : `Signed at ${stage} inside the selected PDF box.`;
    refreshAll();
    if (completed) switchView("inbox");
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

  document.getElementById("inbox-list").addEventListener("click", async (event) => {
    const openBtn = event.target.closest("[data-open]");
    if (openBtn) {
      openPackage(openBtn.dataset.open);
      return;
    }
    const downloadBtn = event.target.closest("[data-download-pdf]");
    if (downloadBtn) {
      const pkg = getPackage(downloadBtn.dataset.downloadPdf);
      if (!pkg) return;
      try {
        if (!pkg.finalPdfBytes) {
          pkg.finalPdfBytes = await buildPackagePdf(pkg, null, null, {
            final: true,
          });
        }
        downloadPdfBytes(
          pkg.finalPdfBytes,
          pkg.delivery?.fileName || `${pkg.id}-signed.pdf`
        );
        if (pkg.delivery) pkg.delivery.unread = false;
        renderInboxBadge();
        renderInbox();
      } catch (error) {
        console.error(error);
      }
    }
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

  document.getElementById("btn-download-final").addEventListener("click", async () => {
    const pkg = getActivePackage();
    if (pkg.status !== "complete") return;
    try {
      if (!pkg.finalPdfBytes) {
        pkg.finalPdfBytes = await deliverFinalPdfToSubmitter(pkg);
      }
      downloadPdfBytes(
        pkg.finalPdfBytes,
        pkg.delivery?.fileName || `${pkg.id}-signed.pdf`
      );
      if (pkg.delivery) pkg.delivery.unread = false;
      renderInboxBadge();
      renderInbox();
    } catch (error) {
      console.error(error);
      document.getElementById("sign-status").textContent =
        "Could not build the signed PDF for download.";
    }
  });
}

function setupRole() {
  document.getElementById("role-select").addEventListener("change", (event) => {
    currentRole = event.target.value;
    renderWorkspace();
  });
}

async function init() {
  renderRoleSelect();
  renderChainPicker();
  setupTabs();
  setupDashboard();
  setupSubmit();
  setupWorkspace();
  setupPdfSigner();
  setupRole();
  refreshAll();

  // Prefetch sample completed PDF so submitter inbox download works offline of the flow.
  const sample = packages.find((pkg) => pkg.id === "QUAL-ESWS-12");
  if (sample && !sample.finalPdfBytes) {
    try {
      sample.finalPdfBytes = await buildPackagePdf(sample, null, null, {
        final: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

init();
