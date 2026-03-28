const sectionNavigation = [
  {
    label: "Position",
    sidebarLabel: "My Position",
    shortLabel: "Position",
    href: "#section/position",
    section: "position",
    icon: "pin",
  },
  {
    label: "Toolkit",
    sidebarLabel: "Toolkit Modules",
    shortLabel: "Toolkit",
    href: "#section/toolkit",
    section: "toolkit",
    icon: "figure",
  },
  {
    label: "Warnings",
    sidebarLabel: "Critical Warnings",
    shortLabel: "Warnings",
    href: "#section/warnings",
    section: "warnings",
    icon: "warning",
  },
  {
    label: "Commitments",
    sidebarLabel: "Final Commitments",
    shortLabel: "Final",
    href: "#section/commitments",
    section: "commitments",
    icon: "checklist",
  },
];

const guideIndexCards = [
  {
    section: "position",
    label: "My Position",
    title: "Establish a stance on co-design, translation, and responsibility.",
    body: "Open the positioning page to see the reflective statement, translation diagram, and the tension analysis panels.",
  },
  {
    section: "toolkit",
    label: "Toolkit Modules",
    title: "Browse four reusable practice lenses rather than a fixed method.",
    body: "Enter the toolkit page to choose a lens, then step into individual module views for deeper detail.",
  },
  {
    section: "warnings",
    label: "Critical Warnings",
    title: "Review the risks, misuses, and legitimacy traps I remain cautious about.",
    body: "Open the warnings page for quick caution panels that clarify what I resist in participatory work.",
  },
  {
    section: "commitments",
    label: "Final Commitments",
    title: "Read the commitments I want to carry into future co-design practice.",
    body: "Open the commitments page for a calmer manifesto-style closing view of the field guide.",
  },
];

const translationCards = [
  {
    label: "Lived Experience",
    title: "The Narrative",
    body: "Capturing daily friction, situated knowledge, and the expertise of those who already navigate the system.",
  },
  {
    label: "Organisational Constraints",
    title: "The Friction",
    body: "Tracing procurement cycles, risk thresholds, legacy software, and the quiet force of institutional habit.",
  },
  {
    label: "Implementation",
    title: "The Translation",
    body: "Converting insights into policy, interfaces, workflows, and technical decisions without erasing what gave rise to them.",
  },
];

const translationDiagram = {
  circles: [
    {
      key: "lived",
      label: "Lived Experience",
      annotation: "voice, vulnerability, context",
      cx: 202,
      cy: 134,
      r: 92,
      accent: false,
    },
    {
      key: "constraints",
      label: "Organisational Constraints",
      annotation: "policy, hierarchy, timelines",
      cx: 314,
      cy: 100,
      r: 92,
      accent: true,
    },
    {
      key: "technical",
      label: "Technical Feasibility",
      annotation: "systems, delivery, limits",
      cx: 378,
      cy: 176,
      r: 92,
      accent: false,
    },
  ],
  center: "Translation Site",
  centerAnnotation: "where participation becomes decision",
  note: "Translation does not happen outside power. It happens where lived realities, institutional pressures, and technical decisions overlap.",
};

const analysisItems = [
  {
    label: "Agency vs. Constraint",
    state: "High Friction",
    detail: "The project's ambition is currently constrained by rigid procurement timelines.",
    position: "76%",
    accent: true,
  },
  {
    label: "Voice Parity",
    state: "Moderately Balanced",
    detail: "Community participants have equal seat-time, but unequal decision-making power over the budget.",
    position: "49%",
  },
];

const statuses = [
  {
    id: "position-defined",
    title: "Position Defined",
    detail: "Current stance articulated",
    checked: false,
  },
  {
    id: "stakeholder-relations",
    title: "Stakeholder Relations In Review",
    detail: "Power relations still being traced",
    checked: false,
  },
  {
    id: "module-framework",
    title: "Module Framework Active",
    detail: "Practice lenses in active use",
    checked: false,
  },
];

const modulePreviewCaptions = {
  power: "Influence / Veto / Distance",
  translation: "Input / Translation / Loss",
  impact: "Insight / Adoption / Drop-off",
  exit: "Continue / Handover / Exit",
};

const modules = [
  {
    number: "01",
    slug: "power-mapping",
    title: "Power Mapping",
    preview: "power",
    summary: "Map influence, veto, and structural distance from decision-making.",
    why: "Invisible hierarchies dictate the boundaries of what can be built. Mapping them is the first act of co-design.",
    whenUse:
      "at the start of multi-stakeholder projects, before assuming who the 'user' is or where decision-making power actually sits.",
    steps: [
      "Identify stakeholders not by title, but by their ability to enable, block, delay, or absorb decisions.",
      "Trace the flow of information: who speaks first, who is consulted, who decides, and who carries the consequences.",
      "Locate where technical feasibility is being used as a neutral explanation for what are actually political or organisational choices.",
    ],
    metadata: [
      {
        label: "Tool Type",
        value: "Diagrammatic Analysis",
        support: "Maps influence, decision proximity, and hidden veto points.",
      },
      {
        label: "Typical Constraint",
        value: "Stakeholder Trust",
        support: "Participants may hesitate to name real authority, dependency, or conflict.",
      },
    ],
    warning:
      '"The map becomes a performance. We document power without challenging it, creating a decorative artifact rather than a tool for intervention."',
    reveal:
      "Power mapping reveals not only project dynamics, but also the practitioner’s own proximity to authority. Are you observing the structure from outside, or are you already embedded in the very system you are trying to describe?",
    workbook: "Open Interactive Workbook",
    diagram: {
      title: "Power Mapping",
      center: "Project Decision",
      nodes: [
        { title: "Sponsor", x: 210, y: 88, tier: "inner", size: "lg" },
        { title: "Facilitator", x: 322, y: 86, tier: "inner", size: "lg", accent: true },
        { title: "Technical Lead", x: 426, y: 108, tier: "inner", size: "lg" },
        { title: "Operations", x: 468, y: 184, tier: "middle", size: "md" },
        { title: "Policy / Management", x: 176, y: 200, tier: "middle", size: "md" },
        { title: "Partner Team", x: 402, y: 258, tier: "middle", size: "md" },
        { title: "Participants", x: 130, y: 274, tier: "outer", size: "sm" },
        { title: "Frontline Users", x: 262, y: 318, tier: "outer", size: "sm" },
        { title: "Affected Community", x: 490, y: 296, tier: "outer", size: "sm", accent: true },
      ],
      lines: [
        { x1: 320, y1: 176, x2: 322, y2: 98, type: "solid" },
        { x1: 320, y1: 176, x2: 426, y2: 120, type: "solid" },
        { x1: 320, y1: 176, x2: 210, y2: 100, type: "solid" },
        { x1: 320, y1: 176, x2: 468, y2: 184, type: "dash" },
        { x1: 320, y1: 176, x2: 176, y2: 200, type: "dash" },
        { x1: 320, y1: 176, x2: 490, y2: 296, type: "friction" },
        { x1: 320, y1: 176, x2: 130, y2: 274, type: "dash" },
      ],
      legend: [
        "solid — decision influence",
        "dashed — consultation",
        "red — veto / friction",
      ],
      caption:
        "Power mapping asks not only who is present, but who shapes outcomes, who absorbs risk, and who remains structurally distant from decision-making.",
      zones: [
        { r: 54, label: "Inner" },
        { r: 104, label: "Middle" },
        { r: 152, label: "Outer" },
      ],
    },
    open: true,
  },
  {
    number: "02",
    slug: "translation-logic",
    title: "Translation Logic",
    preview: "translation",
    summary:
      "Trace how lived experience becomes institutional language, and what gets lost in the process.",
    why: "Co-design often fails not because people do not speak, but because their knowledge is translated into institutional language too late, too loosely, or not at all.",
    whenUse:
      "when lived experience needs to be carried into technical or organisational language without flattening meaning.",
    steps: [
      "Identify what is being said in lived, emotional, or situational terms.",
      "Translate that into system requirements, organisational questions, or implementation constraints without flattening meaning.",
      "Check what gets lost between voice, documentation, and delivery.",
    ],
    metadata: [
      { label: "Tool Type", value: "Interpretive Framework" },
      { label: "Typical Constraint", value: "Language Loss" },
    ],
    warning:
      '"Translation becomes reduction. Complexity is cleaned up for organisational comfort, and the most difficult truths disappear."',
    reveal:
      "Translation logic reveals where design turns experience into decision, and where it quietly turns experience into noise.",
    workbook: "Open Translation Framework",
    sketchTitle: "Translation Cue",
    sketchCaption:
      "Track how voice becomes documentation and how documentation becomes delivery without assuming the translation is neutral.",
  },
  {
    number: "03",
    slug: "impact-assessment",
    title: "Impact Assessment",
    preview: "impact",
    summary: "Audit whether participation actually changed design decisions, priorities, or outcomes.",
    why: "Participation is meaningful only if it changes what gets built, what gets delayed, or what gets refused.",
    whenUse:
      "after workshops or co-design sessions, to audit what changed, what stalled, and why.",
    steps: [
      "Track which insights moved into concrete decisions.",
      "Identify which contributions were acknowledged but not implemented.",
      "Document the stated reasons: time, budget, policy, hierarchy, or technical delivery.",
    ],
    metadata: [
      { label: "Tool Type", value: "Decision Audit" },
      { label: "Typical Constraint", value: "Delivery Pressure" },
    ],
    warning:
      '"Impact assessment becomes a polished explanation of why nothing really changed."',
    reveal:
      "This module reveals whether co-design shaped outcomes, or merely softened the appearance of predetermined decisions.",
    workbook: "Open Decision Audit",
    sketchTitle: "Impact Trace",
    sketchCaption:
      "Assess whether participation changed priorities, timelines, or refusals rather than merely improving the story around the process.",
  },
  {
    number: "04",
    slug: "exit-strategies",
    title: "Exit Strategies",
    preview: "exit",
    summary: "Decide when to continue, hand over, pause, or deliberately stop a co-design process.",
    why: "Responsible co-design includes knowing when to continue, hand over, pause, withdraw, or refuse.",
    whenUse:
      "when participation risks becoming extractive, symbolic, or structurally dependent on the facilitator.",
    steps: [
      "Identify whether participation is still meaningful or becoming extractive.",
      "Clarify who will carry the work after the design team steps back.",
      "Decide whether to continue, transition ownership, or deliberately stop.",
    ],
    metadata: [
      { label: "Tool Type", value: "Closure Framework" },
      { label: "Typical Constraint", value: "Institutional Dependency" },
    ],
    warning:
      '"Exit becomes abandonment. The team leaves behind artifacts without stewardship, care, or transfer of ownership."',
    reveal:
      "Exit strategies reveal whether the process built shared capacity, or dependence on the facilitator.",
    workbook: "Open Exit Guide",
    sketchTitle: "Exit Paths",
    sketchCaption:
      "Closure should make visible the paths to continue, hand over, pause, or stop before the process becomes extractive.",
  },
];

const warningCards = [
  {
    title: "Tokenism",
    body: "Participation without meaningful influence only reproduces exclusion in a more polite form.",
    prompt: "Ask who can alter the brief, not just respond to it.",
  },
  {
    title: "False Participation",
    body: "A workshop, survey, or test session does not become co-design simply because people were invited into the room.",
    prompt: "Name the non-negotiables early and examine who set them.",
  },
  {
    title: "Feasibility as Veto",
    body: "Technical feasibility becomes political when it is used to close down questions before alternatives are properly explored.",
    prompt: "Separate engineering effort from institutional unwillingness.",
  },
  {
    title: "Performance Without Redistribution",
    body: "Co-design can become a legitimacy ritual if decision-making power remains untouched.",
    prompt: "Track what changed materially after participation was staged.",
  },
];

const commitments = [
  {
    title: "Design with, not only for",
  },
  {
    title: "Treat lived experience as expertise",
  },
  {
    title: "Make power visible, not invisible",
  },
  {
    title: "Use tools intentionally, not generically",
  },
  {
    title: "Translate participation into implementation",
  },
  {
    title: "Share back, not just extract insight",
  },
  {
    title: "Know when to continue, and when to exit responsibly",
  },
];

const footerModules = [
  { label: "Power Mapping", href: "#module/power-mapping" },
  { label: "Translation Logic", href: "#module/translation-logic" },
  { label: "Impact Assessment", href: "#module/impact-assessment" },
  { label: "Exit Strategies", href: "#module/exit-strategies" },
];

const footerResources = [
  { label: "Reflection Notes", href: "#" },
  { label: "Terminology Guide", href: "#" },
  { label: "Reading Archive", href: "#" },
  { label: "Project Index", href: "#" },
];

const footerLegal = [
  { label: "Privacy", href: "#" },
  { label: "License", href: "#" },
  { label: "Contribute", href: "#" },
];

const iconMarkup = {
  pin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"></path>
      <circle cx="12" cy="10" r="2.3"></circle>
    </svg>
  `,
  figure: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="2.2"></circle>
      <path d="M7.4 20.2 11 11.6l-2.2-3"></path>
      <path d="m12.8 8.5 2.4 2.4L18 20.2"></path>
      <path d="M10 9.3 6.5 13"></path>
    </svg>
  `,
  warning: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.3 20.1 19H3.9L12 4.3Z"></path>
      <path d="M12 9v5"></path>
      <circle cx="12" cy="16.8" r="0.8" fill="currentColor" stroke="none"></circle>
    </svg>
  `,
  checklist: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="1.4"></rect>
      <path d="M9 4.5h6"></path>
      <path d="m9.2 11 1.5 1.5 3.2-3.4"></path>
      <path d="M9 16h5"></path>
    </svg>
  `,
  settings: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.4"></circle>
      <path d="m19 12 .9-1.6-1.6-2.8-1.8.1-.8-1.6-3.1-.9-1.2 1.4-1.9-.1-2.2 2.3.6 1.8-1 1.6 1.1 2.9 1.8.3.9 1.5 3.2.4 1.1-1.4 1.9-.2 2-2.5-.7-1.7Z"></path>
    </svg>
  `,
  support: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9.5 9.4a2.8 2.8 0 1 1 5 1.8c-.7.7-1.5 1.1-1.5 2"></path>
      <circle cx="12" cy="16.8" r="0.75" fill="currentColor" stroke="none"></circle>
    </svg>
  `,
  account: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <circle cx="12" cy="9" r="2.5"></circle>
      <path d="M7.8 17.2c1.2-2 3-3 4.2-3s3 .9 4.2 3"></path>
    </svg>
  `,
  analytics: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19V9"></path>
      <path d="M10 19V12"></path>
      <path d="M15 19V6"></path>
      <path d="M20 19V10"></path>
    </svg>
  `,
  arrow: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13"></path>
      <path d="m13 6 6 6-6 6"></path>
    </svg>
  `,
  chevron: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5"></path>
    </svg>
  `,
  "check-circle": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5"></circle>
      <path d="m8.9 12.2 2.1 2.2 4.3-4.6"></path>
    </svg>
  `,
  circle: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5"></circle>
    </svg>
  `,
};

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const icon = node.dataset.icon;
    if (iconMarkup[icon]) node.innerHTML = iconMarkup[icon];
  });
}

function renderSidebarNav() {
  const root = document.querySelector("#sidebar-nav");
  root.innerHTML = sectionNavigation
    .map(
      (item, index) => `
        <li class="nav-item">
          <a class="nav-item__link ${index === 0 ? "is-active" : ""}" href="${item.href}" data-section="${item.section}">
            <span data-icon="${item.icon}"></span>
            <span>${item.sidebarLabel}</span>
          </a>
        </li>
      `,
    )
    .join("");
}

function renderTopNav() {
  const root = document.querySelector("#top-nav");
  root.innerHTML = sectionNavigation
    .map(
      (item, index) => `
        <li>
          <a class="${index === 0 ? "is-active" : ""}" href="${item.href}" data-section="${item.section}">${item.label}</a>
        </li>
      `,
    )
    .join("");
}

function renderMobileNav() {
  const root = document.querySelector("#mobile-nav");
  root.innerHTML = sectionNavigation
    .map(
      (item, index) => `
        <li>
          <a class="${index === 0 ? "is-active" : ""}" href="${item.href}" data-section="${item.section}">
            <span data-icon="${item.icon}"></span>
            <span>${item.shortLabel}</span>
          </a>
        </li>
      `,
    )
    .join("");
}

function renderTranslationCards(root = document.querySelector("#translation-cards")) {
  if (!root) return;
  root.innerHTML = translationCards
    .map(
      (card) => `
        <article class="translation-card">
          <p class="translation-card__label">${card.label}</p>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderTranslationDiagram(root = document.querySelector("#translation-diagram")) {
  if (!root) return;
  const labelPositions = {
    lived: { x: 118, y: 92, anchor: "start" },
    constraints: { x: 276, y: 54, anchor: "start" },
    technical: { x: 408, y: 240, anchor: "start" },
  };

  root.innerHTML = `
    <div class="translation-venn">
      <svg class="translation-venn__svg" viewBox="0 0 600 320" role="img" aria-label="A three-circle relationship diagram showing lived experience, organisational constraints, and technical feasibility overlapping at a translation site.">
        ${translationDiagram.circles
          .map(
            (circle) => `
              <circle
                class="translation-venn__circle ${circle.accent ? "is-accent" : ""}"
                cx="${circle.cx}"
                cy="${circle.cy}"
                r="${circle.r}"
              ></circle>
            `,
          )
          .join("")}
        <rect class="translation-venn__center-box" x="244" y="136" width="140" height="48" rx="0"></rect>
        <text class="translation-venn__center-label" x="314" y="152" text-anchor="middle">
          <tspan class="translation-venn__center-title" x="313" dy="0">TRANSLATION SITE</tspan>
          <tspan class="translation-venn__center-note" x="313" dy="14">${translationDiagram.centerAnnotation}</tspan>
        </text>
        ${translationDiagram.circles
          .map((circle) => {
            const position = labelPositions[circle.key];
            return `
              <text class="translation-venn__label ${circle.accent ? "is-accent" : ""}" x="${position.x}" y="${position.y}" text-anchor="${position.anchor}">
                <tspan x="${position.x}" dy="0">${circle.label.toUpperCase()}</tspan>
                <tspan class="translation-venn__annotation" x="${position.x}" dy="11">${circle.annotation}</tspan>
              </text>
            `;
          })
          .join("")}
      </svg>
      <p class="translation-venn__caption">${translationDiagram.note}</p>
    </div>
  `;
}

function renderAnalysis(root = document.querySelector("#analysis-rows")) {
  if (!root) return;
  root.innerHTML = analysisItems
    .map(
      (item) => `
        <section class="analysis-item">
          <div class="analysis-item__head">
            <span class="analysis-item__label">${item.label}</span>
            <span class="analysis-item__state">${item.state}</span>
          </div>
          <div class="analysis-item__bar">
            <span class="analysis-item__dot ${item.accent ? "is-accent" : ""}" style="left:${item.position}"></span>
          </div>
          <p>${item.detail}</p>
        </section>
      `,
    )
    .join("");
}

function renderStatuses(root = document.querySelector("#status-list")) {
  if (!root) return;
  root.innerHTML = statuses
    .map(
      (item) => `
        <li>
          <button
            type="button"
            class="status-item ${item.checked ? "is-checked" : ""}"
            data-status-toggle="${item.id}"
            aria-pressed="${item.checked ? "true" : "false"}"
          >
            <span
              class="status-item__icon"
              data-icon="${item.checked ? "check-circle" : "circle"}"
            ></span>
            <span>
              <span class="status-item__title">${item.title}</span>
              <span class="status-item__detail">${item.detail}</span>
            </span>
          </button>
        </li>
      `,
    )
    .join("");
}

function renderModuleFigure(module) {
  if (module.diagram) {
    return `
      <section class="power-map" aria-label="${module.diagram.title}">
        <h4 class="eyebrow eyebrow--muted">${module.diagram.title}</h4>
        <div class="power-map__canvas">
          <div class="power-map__bridge">
            <span class="power-map__bridge-label">Preview Lens</span>
            <span class="power-map__bridge-focus">${modulePreviewCaptions[module.preview]}</span>
          </div>
          <p class="power-map__bridge-note">
            The card preview condenses this module's core lens; the expanded diagram maps it in context.
          </p>
          <svg class="power-map__svg" viewBox="0 0 600 360" role="img" aria-label="Power mapping diagram with concentric influence zones around project decision.">
            ${module.diagram.zones
              .map(
                (zone, zoneIndex) => `
                  <circle class="power-map__zone power-map__zone--${zoneIndex + 1}" cx="320" cy="176" r="${zone.r}"></circle>
                `,
              )
              .join("")}
            ${module.diagram.lines
              .map(
                (line) => `
                  <line
                    class="power-map__line power-map__line--${line.type}"
                    x1="${line.x1}"
                    y1="${line.y1}"
                    x2="${line.x2}"
                    y2="${line.y2}"
                  ></line>
                `,
              )
              .join("")}
            <g class="power-map__decision">
              <rect x="267" y="159" width="106" height="34" rx="0"></rect>
              <text x="320" y="180" text-anchor="middle">${module.diagram.center.toUpperCase()}</text>
            </g>
            ${module.diagram.nodes
              .map(
                (node) => `
                  <g class="power-map__node ${node.accent ? "is-accent" : ""}" transform="translate(${node.x}, ${node.y})">
                    <circle class="power-map__dot power-map__dot--${node.size}" cx="0" cy="0" r="${
                      node.size === "lg" ? 6 : node.size === "md" ? 4.7 : 3.8
                    }"></circle>
                    <text class="power-map__node-label" x="10" y="-2">${node.title.toUpperCase()}</text>
                  </g>
                `,
              )
              .join("")}
          </svg>
          <div class="power-map__legend">
            ${module.diagram.legend.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <p class="power-map__caption">${module.diagram.caption}</p>
        </div>
      </section>
    `;
  }

  if (module.preview === "translation") {
    return `
      <section class="module-sketch" aria-label="${module.sketchTitle}">
        <h4 class="eyebrow eyebrow--muted">${module.sketchTitle}</h4>
        <div class="module-sketch__canvas">
          <svg class="module-sketch__svg" viewBox="0 0 600 240" role="img" aria-label="Translation logic diagram showing lived input translated into institutional output with a point of loss in the middle.">
            <rect class="module-sketch__box" x="40" y="44" width="126" height="54"></rect>
            <line class="module-sketch__axis" x1="166" y1="127" x2="248" y2="127"></line>
            <circle class="module-sketch__node" cx="248" cy="127" r="5"></circle>
            <line class="module-sketch__axis" x1="253" y1="127" x2="344" y2="127"></line>
            <circle class="module-sketch__node module-sketch__node--accent" cx="344" cy="127" r="6"></circle>
            <line class="module-sketch__axis" x1="350" y1="127" x2="440" y2="127"></line>
            <rect class="module-sketch__box module-sketch__box--rigid" x="440" y="84" width="124" height="86"></rect>
            <text class="module-sketch__label" x="53" y="35">LIVED INPUT</text>
            <text class="module-sketch__label" x="217" y="88">TRANSLATION</text>
            <text class="module-sketch__label module-sketch__label--accent" x="324" y="88">LOSS</text>
            <text class="module-sketch__label" x="451" y="75">INSTITUTIONAL OUTPUT</text>
          </svg>
        </div>
        <p class="module-sketch__caption">${module.sketchCaption}</p>
      </section>
    `;
  }

  if (module.preview === "impact") {
    return `
      <section class="module-sketch" aria-label="${module.sketchTitle}">
        <h4 class="eyebrow eyebrow--muted">${module.sketchTitle}</h4>
        <div class="module-sketch__canvas">
          <svg class="module-sketch__svg" viewBox="0 0 600 240" role="img" aria-label="Impact assessment diagram showing a decision trail with one stalled point before the final implementation threshold.">
            <line class="module-sketch__axis" x1="42" y1="126" x2="520" y2="126"></line>
            <circle class="module-sketch__node" cx="84" cy="126" r="4.8"></circle>
            <circle class="module-sketch__node" cx="182" cy="126" r="4.8"></circle>
            <circle class="module-sketch__node module-sketch__node--accent" cx="292" cy="126" r="6"></circle>
            <circle class="module-sketch__node" cx="404" cy="126" r="4.8"></circle>
            <line class="module-sketch__marker" x1="520" y1="92" x2="520" y2="160"></line>
            <text class="module-sketch__label" x="66" y="96">INSIGHT</text>
            <text class="module-sketch__label" x="158" y="96">ADOPTED</text>
            <text class="module-sketch__label module-sketch__label--accent" x="274" y="96">DROP-OFF</text>
            <text class="module-sketch__label" x="381" y="96">DECISION</text>
            <text class="module-sketch__label" x="474" y="182">OUTCOME</text>
          </svg>
        </div>
        <p class="module-sketch__caption">${module.sketchCaption}</p>
      </section>
    `;
  }

  return `
    <section class="module-sketch" aria-label="${module.sketchTitle}">
      <h4 class="eyebrow eyebrow--muted">${module.sketchTitle}</h4>
      <div class="module-sketch__canvas">
        <svg class="module-sketch__svg" viewBox="0 0 600 240" role="img" aria-label="Exit strategies diagram showing a branch from continuation toward a deliberate closure boundary.">
          <line class="module-sketch__axis" x1="48" y1="82" x2="238" y2="82"></line>
          <circle class="module-sketch__node" cx="82" cy="82" r="4.8"></circle>
          <circle class="module-sketch__node" cx="238" cy="82" r="4.8"></circle>
          <path class="module-sketch__branch" d="M238 82 C292 84, 338 112, 372 146"></path>
          <circle class="module-sketch__node module-sketch__node--accent" cx="378" cy="148" r="6"></circle>
          <line class="module-sketch__axis" x1="384" y1="148" x2="478" y2="148"></line>
          <line class="module-sketch__marker" x1="478" y1="112" x2="478" y2="184"></line>
          <text class="module-sketch__label" x="56" y="56">CONTINUE</text>
          <text class="module-sketch__label" x="214" y="56">REVIEW</text>
          <text class="module-sketch__label module-sketch__label--accent" x="344" y="124">EXIT</text>
          <text class="module-sketch__label" x="430" y="206">CLOSURE</text>
        </svg>
      </div>
      <p class="module-sketch__caption">${module.sketchCaption}</p>
    </section>
  `;
}

function getModuleBySlug(slug) {
  return modules.find((module) => module.slug === slug) || modules[0];
}

function renderModuleDetailMarkup(activeModule, asPage = false) {
  return `
    <article id="${asPage ? "module-page-detail" : "toolkit-detail"}" class="module-detail ${
      asPage ? "module-detail--page" : ""
    }">
      <div class="module-detail__header">
        <span class="module-detail__label">MODULE ${activeModule.number}: ${activeModule.title.toUpperCase()}</span>
        <h3 class="module-detail__title">${activeModule.title}</h3>
      </div>
      <div class="module-detail__grid">
        <section class="module-detail__main">
          <div class="module-detail__block">
            <h4 class="eyebrow eyebrow--accent">Why It Matters</h4>
            <p class="module-detail__lede">${activeModule.why}</p>
          </div>
          <div class="module-detail__block">
            <h4 class="eyebrow eyebrow--muted">How I Use It</h4>
            <ol class="step-list">
              ${activeModule.steps
                .map(
                  (step, stepIndex) => `
                    <li>
                      <strong>${String(stepIndex + 1).padStart(2, "0")}.</strong>
                      <span>${step}</span>
                    </li>
                  `,
                )
                .join("")}
            </ol>
          </div>
          <div class="module-detail__block">
            <h4 class="eyebrow eyebrow--muted">When I Would Use This</h4>
            <p class="module-detail__use-case">${activeModule.whenUse}</p>
          </div>
          <div class="module-detail__meta-row">
            ${activeModule.metadata
              .map(
                (item) => `
                  <div class="module-meta">
                    <span class="module-meta__label">${item.label}</span>
                    <span class="module-meta__value">${item.value}</span>
                    ${item.support ? `<span class="module-meta__support">${item.support}</span>` : ""}
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
        <aside class="module-detail__aside">
          ${renderModuleFigure(activeModule)}
          <div class="warning-block module-detail__panel">
            <h4 class="eyebrow eyebrow--accent">What Can Go Wrong</h4>
            <p>${activeModule.warning}</p>
          </div>
          <div class="reveal-block module-detail__reveal">
            <h4 class="eyebrow eyebrow--muted">What This Reveals</h4>
            <p>${activeModule.reveal}</p>
          </div>
        </aside>
      </div>
    </article>
  `;
}

function renderToolkitModules(activeModuleSlug = null, root = document.querySelector("#toolkit-modules")) {
  if (!root) return;

  root.innerHTML = `
    <div class="toolkit-index-grid">
      ${modules
        .map(
          (card) => `
            <article
              class="toolkit-index-card ${card.slug === activeModuleSlug ? "is-active" : ""}"
              data-module-slug="${card.slug}"
              role="link"
              tabindex="0"
            >
              <div class="toolkit-index-card__head">
                <span class="toolkit-index-card__label">Module ${card.number}</span>
              </div>
              <h3 class="toolkit-index-card__title">${card.title}</h3>
              <p class="toolkit-index-card__summary">${card.summary}</p>
              <div class="toolkit-index-card__preview" aria-hidden="true">
                ${renderModulePreview(card.preview)}
              </div>
              <a class="toolkit-index-card__cta" href="#module/${card.slug}" aria-label="Open ${card.title}">
                <span>Open Module</span>
                <span class="inline-action__icon" data-icon="arrow"></span>
              </a>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderModulePreview(type) {
  if (type === "power") {
    return `
      <div class="module-preview module-preview--power">
        <svg class="module-preview__svg" viewBox="0 0 240 72" aria-hidden="true">
          <line class="module-preview__axis" x1="30" y1="34" x2="194" y2="34"></line>
          <circle class="module-preview__node" cx="48" cy="34" r="3.2"></circle>
          <circle class="module-preview__node" cx="104" cy="34" r="3.2"></circle>
          <circle class="module-preview__node module-preview__node--accent" cx="148" cy="34" r="3.8"></circle>
          <line class="module-preview__marker" x1="194" y1="24" x2="194" y2="44"></line>
          <circle class="module-preview__node module-preview__node--offset" cx="92" cy="50" r="2.6"></circle>
        </svg>
        <span class="module-preview__caption">${modulePreviewCaptions.power}</span>
      </div>
    `;
  }

  if (type === "translation") {
    return `
      <div class="module-preview module-preview--translation">
        <svg class="module-preview__svg" viewBox="0 0 240 72" aria-hidden="true">
          <rect class="module-preview__box" x="24" y="24" width="24" height="20"></rect>
          <line class="module-preview__axis" x1="48" y1="34" x2="104" y2="34"></line>
          <circle class="module-preview__node" cx="104" cy="34" r="3.2"></circle>
          <line class="module-preview__axis" x1="107" y1="34" x2="152" y2="34"></line>
          <circle class="module-preview__node module-preview__node--accent" cx="152" cy="34" r="3.8"></circle>
          <line class="module-preview__axis" x1="156" y1="34" x2="192" y2="34"></line>
          <rect class="module-preview__box module-preview__box--rigid" x="192" y="18" width="28" height="32"></rect>
        </svg>
        <span class="module-preview__caption">${modulePreviewCaptions.translation}</span>
      </div>
    `;
  }

  if (type === "impact") {
    return `
      <div class="module-preview module-preview--impact">
        <svg class="module-preview__svg" viewBox="0 0 240 72" aria-hidden="true">
          <line class="module-preview__axis" x1="26" y1="36" x2="202" y2="36"></line>
          <circle class="module-preview__node" cx="40" cy="36" r="3"></circle>
          <circle class="module-preview__node" cx="84" cy="36" r="3"></circle>
          <circle class="module-preview__node module-preview__node--accent" cx="126" cy="36" r="3.8"></circle>
          <circle class="module-preview__node" cx="168" cy="36" r="3"></circle>
          <line class="module-preview__marker" x1="202" y1="24" x2="202" y2="48"></line>
        </svg>
        <span class="module-preview__caption">${modulePreviewCaptions.impact}</span>
      </div>
    `;
  }

  return `
    <div class="module-preview module-preview--exit">
      <svg class="module-preview__svg" viewBox="0 0 240 72" aria-hidden="true">
        <line class="module-preview__axis" x1="30" y1="24" x2="114" y2="24"></line>
        <circle class="module-preview__node" cx="42" cy="24" r="3"></circle>
        <circle class="module-preview__node" cx="114" cy="24" r="3"></circle>
        <path class="module-preview__branch" d="M114 24 C132 26, 140 34, 150 44"></path>
        <circle class="module-preview__node module-preview__node--accent" cx="154" cy="46" r="3.8"></circle>
        <line class="module-preview__axis" x1="158" y1="46" x2="196" y2="46"></line>
        <line class="module-preview__marker" x1="196" y1="34" x2="196" y2="58"></line>
      </svg>
      <span class="module-preview__caption">${modulePreviewCaptions.exit}</span>
    </div>
  `;
}

function renderModulePage(slug) {
  const module = getModuleBySlug(slug);
  const root = document.querySelector("#module-view");
  const currentIndex = modules.findIndex((item) => item.slug === module.slug);
  const previousModule = modules[(currentIndex - 1 + modules.length) % modules.length];
  const nextModule = modules[(currentIndex + 1) % modules.length];

  root.innerHTML = `
    <header class="module-page__hero">
      <div class="eyebrow eyebrow--accent">
        <span class="eyebrow__rule"></span>
        <span>Toolkit Module</span>
      </div>
        <div class="module-page__hero-row">
        <div class="module-page__hero-copy">
          <a class="inline-action inline-action--soft module-page__back" href="#section/toolkit">
            <span>Back to Field Guide</span>
            <span class="inline-action__icon" data-icon="arrow"></span>
          </a>
          <h1 id="module-page-title" class="module-page__title">${module.title}</h1>
          <p class="module-page__summary">${module.summary}</p>
        </div>
        <aside class="module-page__hero-note">
          <span class="module-page__hero-label">Reusable Lens</span>
          <p>
            This module is one part of the toolkit. It can be entered independently, revisited out
            of order, and used as a lens rather than a step.
          </p>
        </aside>
      </div>
    </header>

    <div class="module-page__layout">
      <aside class="module-page__rail">
        <div class="module-page__rail-block">
          <h2 class="eyebrow eyebrow--muted">Module Index</h2>
          <nav class="module-page__menu" aria-label="Module index">
            ${modules
              .map(
                (item) => `
                  <a class="module-page__menu-link ${item.slug === module.slug ? "is-active" : ""}" href="#module/${item.slug}">
                    <span class="module-page__menu-number">Module ${item.number}</span>
                    <span class="module-page__menu-title">${item.title}</span>
                  </a>
                `,
              )
              .join("")}
          </nav>
        </div>
        <div class="module-page__rail-block module-page__rail-block--note">
          <h2 class="eyebrow eyebrow--muted">Field Note</h2>
          <p>
            Open a single lens, stay with it, and then move back to the field guide. The toolkit
            is meant to be revisited, not consumed linearly.
          </p>
        </div>
      </aside>

      <div class="module-page__content">
        <article class="module-worksurface">
          <section class="module-worksurface__main">
            <div class="module-detail__header">
              <span class="module-detail__label">MODULE ${module.number}: ${module.title.toUpperCase()}</span>
              <h2 class="module-detail__title">${module.title}</h2>
            </div>

            <div class="module-detail__block">
              <h3 class="eyebrow eyebrow--accent">Why It Matters</h3>
              <p class="module-detail__lede">${module.why}</p>
            </div>

            <div class="module-detail__block">
              <h3 class="eyebrow eyebrow--muted">How I Use It</h3>
              <ol class="step-list">
                ${module.steps
                  .map(
                    (step, stepIndex) => `
                      <li>
                        <strong>${String(stepIndex + 1).padStart(2, "0")}.</strong>
                        <span>${step}</span>
                      </li>
                    `,
                  )
                  .join("")}
              </ol>
            </div>

            <div class="module-detail__meta-row">
              ${module.metadata
                .map(
                  (item) => `
                    <div class="module-meta">
                      <span class="module-meta__label">${item.label}</span>
                      <span class="module-meta__value">${item.value}</span>
                      ${item.support ? `<span class="module-meta__support">${item.support}</span>` : ""}
                    </div>
                  `,
                )
                .join("")}
            </div>

          </section>

          <aside class="module-worksurface__aside">
            ${renderModuleFigure(module)}
            <div class="warning-block module-detail__panel">
              <h3 class="eyebrow eyebrow--accent">What Can Go Wrong</h3>
              <p>${module.warning}</p>
            </div>
            <div class="reveal-block module-detail__reveal">
              <h3 class="eyebrow eyebrow--muted">What This Reveals</h3>
              <p>${module.reveal}</p>
            </div>
          </aside>
        </article>
        <div class="module-page__pager">
          <a class="module-page__pager-link" href="#module/${previousModule.slug}">
            <span class="module-page__pager-label">Previous Lens</span>
            <strong>${previousModule.title}</strong>
          </a>
          <a class="module-page__pager-link" href="#module/${nextModule.slug}">
            <span class="module-page__pager-label">Next Lens</span>
            <strong>${nextModule.title}</strong>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderGuideIndex() {
  const root = document.querySelector("#guide-index");
  if (!root) return;

  root.innerHTML = guideIndexCards
    .map(
      (card) => `
        <article class="guide-index-card">
          <div class="guide-index-card__head">
            <span class="guide-index-card__label">${card.label}</span>
          </div>
          <h3 class="guide-index-card__title">${card.title}</h3>
          <p class="guide-index-card__body">${card.body}</p>
          <a class="guide-index-card__cta" href="#section/${card.section}">
            <span>Open Section</span>
            <span class="inline-action__icon" data-icon="arrow"></span>
          </a>
        </article>
      `,
    )
    .join("");
}

function renderSectionPage(sectionId) {
  const root = document.querySelector("#section-view");
  if (!root) return;

  if (sectionId === "position") {
    root.innerHTML = `
      <section class="section-page section-page--position" aria-labelledby="section-page-title">
        <header class="section-page__header section-header section-header--split">
          <div class="section-page__back-wrap">
            <a class="inline-action inline-action--soft" href="#home">
              <span>Back to Directory</span>
              <span class="inline-action__icon" data-icon="arrow"></span>
            </a>
          </div>
          <div class="section-header__content">
            <div class="eyebrow eyebrow--accent">
              <span class="eyebrow__rule"></span>
              <span>My Position</span>
            </div>
            <h1 id="section-page-title" class="section-title">
              Co-design, for me, is not simply participation. It is the work of framing
              responsibly, making power visible, and translating lived realities into accountable
              decisions.
            </h1>
          </div>
          <p class="section-note">
            A positioning workspace for reading translation, tension, and reflective
            accountability together rather than as separate notes.
          </p>
        </header>

        <div class="position-workspace">
          <article class="position-card position-card--statement">
            <div class="position-card__header">
              <h3 class="eyebrow">Positioning Statement</h3>
              <span class="position-card__meta">Field Note 01</span>
            </div>
            <p class="position-card__statement">
              I work from the premise that co-design is not the staging of inclusion, but the
              continual negotiation of who is heard, who is protected, and who is asked to adapt.
            </p>
            <p class="position-card__body">
              My role is to translate lived realities into technical and institutional language
              without flattening their complexity. This requires tracing where power accumulates,
              where veto is hidden, and where implementation quietly redefines what participation
              was meant to promise.
            </p>
          </article>

          <section class="diagram-panel diagram-panel--translation" aria-labelledby="diagram-title">
            <div class="diagram-panel__header">
              <h3 id="diagram-title" class="eyebrow eyebrow--muted">Translation Relationship</h3>
            </div>
            <div id="translation-diagram" class="translation-diagram-shell"></div>
            <div id="translation-cards" class="translation-grid"></div>
            <div class="translation-strip" aria-hidden="true">
              <span>Lived experience</span>
              <span class="translation-strip__arrow" data-icon="arrow"></span>
              <span>Institutional friction</span>
              <span class="translation-strip__arrow" data-icon="arrow"></span>
              <span>Implementation</span>
            </div>
          </section>

          <section class="panel position-support" aria-labelledby="support-title">
            <div class="panel__header panel__header--compact">
              <h2 id="support-title" class="panel__title">Supporting Reflection</h2>
            </div>
            <p class="position-support__body">
              Because of my background across engineering, product thinking, interface design, and
              systems work, I often stand between different forms of knowledge: lived experience,
              organisational priorities, and technical constraints. My role is not to speak for
              people, but to create structures where different voices can shape what gets built.
            </p>
            <p class="position-support__body">
              For me, power mapping begins with representation: who is in the room, who is
              missing, and who is being interpreted by others.
            </p>
            <div class="position-support__note">
              Translation does not happen outside power. It happens where lived realities,
              institutional pressures, and technical decisions overlap.
            </div>
          </section>

          <aside class="position-rail">
            <section class="panel panel--analysis" aria-labelledby="analysis-title">
              <div class="panel__header">
                <h2 id="analysis-title" class="panel__title">Tension Analysis</h2>
                <span class="panel__icon" data-icon="analytics"></span>
              </div>
              <div id="analysis-rows" class="analysis-list"></div>

              <div class="practitioner-note">
                <h3 class="eyebrow eyebrow--muted">Practitioner Note</h3>
                <p>
                  "I am noticing a trend where technical feasibility is used as a silent veto. We
                  need to move this from a conversation about 'what can be done' to 'what must be
                  changed'."
                </p>
              </div>
            </section>

            <section class="panel panel--status" aria-labelledby="status-title">
              <div class="panel__header panel__header--compact">
                <h2 id="status-title" class="panel__title panel__title--accent">Practice Status</h2>
              </div>
              <ul id="status-list" class="status-list"></ul>
            </section>
          </aside>
        </div>
      </section>
    `;

    renderTranslationDiagram(root.querySelector("#translation-diagram"));
    renderTranslationCards(root.querySelector("#translation-cards"));
    renderAnalysis(root.querySelector("#analysis-rows"));
    renderStatuses(root.querySelector("#status-list"));
    return;
  }

  if (sectionId === "toolkit") {
    root.innerHTML = `
      <section class="section-page section-page--toolkit" aria-labelledby="section-page-title">
        <header class="section-page__header section-header section-header--split">
          <div class="section-header__content">
            <a class="inline-action inline-action--soft section-page__back-link" href="#home">
              <span>Back to Directory</span>
              <span class="inline-action__icon" data-icon="arrow"></span>
            </a>
            <div class="eyebrow eyebrow--accent">
              <span class="eyebrow__rule"></span>
              <span>Toolkit Modules</span>
            </div>
            <h1 id="section-page-title" class="section-title section-title--compact">
              Four modular lenses for reading power, translation, impact, and exit.
            </h1>
          </div>
          <p class="section-note">
            A module workspace for opening one lens at a time while keeping the whole toolkit in
            view.
          </p>
        </header>
        <div class="toolkit-workspace">
          <aside class="panel toolkit-workspace__index">
            <div class="panel__header panel__header--compact">
              <h2 class="panel__title">Module Index</h2>
            </div>
            <p class="toolkit-context-line">
              These modules are not sequential steps, but reusable lenses for practicing co-design
              across power, translation, impact, and exit.
            </p>
            <nav class="toolkit-jump-list" aria-label="Toolkit quick jump">
              ${modules
                .map(
                  (module) => `
                    <a class="toolkit-jump-link" href="#module/${module.slug}">
                      <span class="toolkit-jump-link__number">Module ${module.number}</span>
                      <span class="toolkit-jump-link__title">${module.title}</span>
                    </a>
                  `,
                )
                .join("")}
            </nav>
          </aside>

          <div id="toolkit-modules" class="toolkit-modules-shell"></div>

          <aside class="panel toolkit-workspace__note">
            <div class="panel__header panel__header--compact">
              <h2 class="panel__title">How to Use</h2>
            </div>
            <p>
              Choose a lens, open the dedicated module page, and move between modules without
              assuming a fixed order. This toolkit is meant to be revisited as a workbench, not
              consumed as a sequence.
            </p>
            <div class="toolkit-workspace__note-block">
              <span class="toolkit-workspace__note-label">Current Mode</span>
              <strong>Toolkit Overview</strong>
            </div>
          </aside>
        </div>
      </section>
    `;

    renderToolkitModules(null, root.querySelector("#toolkit-modules"));
    return;
  }

  if (sectionId === "warnings") {
    root.innerHTML = `
      <section class="section-page section-page--warnings" aria-labelledby="section-page-title">
        <header class="section-page__header section-header section-header--split">
          <div class="section-header__content">
            <a class="inline-action inline-action--soft section-page__back-link" href="#home">
              <span>Back to Directory</span>
              <span class="inline-action__icon" data-icon="arrow"></span>
            </a>
            <div class="eyebrow eyebrow--accent">
              <span class="eyebrow__rule"></span>
              <span>Critical Warnings</span>
            </div>
            <h1 id="section-page-title" class="section-title section-title--compact">
              Co-design is not automatically equitable. These are the conditions I remain cautious
              about.
            </h1>
          </div>
          <p class="section-note">
            A risk review surface for the patterns I resist when participation is staged without
            structural consequence.
          </p>
        </header>
        <div class="warnings-workspace">
          <aside class="panel warnings-workspace__intro">
            <div class="panel__header panel__header--compact">
              <h2 class="panel__title">Risk Framing</h2>
            </div>
            <p>
              These warnings are not edge cases. They are recurrent failure modes in participatory
              work whenever legitimacy is performed more carefully than power is redistributed.
            </p>
            <div class="warnings-workspace__tags">
              <span>Power</span>
              <span>Legitimacy</span>
              <span>Translation</span>
            </div>
          </aside>

          <div id="warning-cards" class="warning-grid warnings-workspace__grid"></div>

          <aside class="panel warnings-workspace__summary">
            <div class="panel__header panel__header--compact">
              <h2 class="panel__title">Systemic Note</h2>
            </div>
            <p>
              The most polished participatory processes can still preserve the original
              distribution of authority. I use these cards as checks against legitimacy theatre.
            </p>
            <div class="warnings-workspace__summary-strip">
              <span>Review the invitation</span>
              <span data-icon="arrow"></span>
              <span>Review the decision path</span>
            </div>
          </aside>
        </div>
      </section>
    `;

    renderWarningCards(root.querySelector("#warning-cards"));
    return;
  }

  root.innerHTML = `
    <section class="section-page section-page--commitments" aria-labelledby="section-page-title">
      <header class="section-page__header section-header section-header--split">
        <div class="section-header__content">
          <a class="inline-action inline-action--soft section-page__back-link" href="#home">
            <span>Back to Directory</span>
            <span class="inline-action__icon" data-icon="arrow"></span>
          </a>
          <div class="eyebrow eyebrow--accent">
            <span class="eyebrow__rule"></span>
            <span>Final Commitments</span>
          </div>
          <h1 id="section-page-title" class="section-title section-title--compact">
            What I want to carry forward into future practice
          </h1>
        </div>
        <p class="section-note">
          This closing section distills the toolkit into the commitments I want to keep close in
          future co-design practice.
        </p>
      </header>

      <div class="commitments-workspace">
        <aside class="manifesto-panel">
          <div class="manifesto-panel__eyebrow">Manifesto Fragment</div>
          <p>
            The toolkit does not promise clarity without conflict. It asks for better terms of
            translation, better records of power, and better reasons for staying in the work.
          </p>
          <a class="inline-action inline-action--soft" href="#section/position">
            <span>Return to Position</span>
            <span class="inline-action__icon" data-icon="arrow"></span>
          </a>
        </aside>

        <ol id="commitment-list" class="commitment-list"></ol>

        <aside class="panel commitments-workspace__note">
          <div class="panel__header panel__header--compact">
            <h2 class="panel__title">Future Practice</h2>
          </div>
          <p>
            These commitments are not a final summary so much as a set of guardrails. They are the
            conditions I want to keep visible when future projects become pressured, abstract, or
            too convenient.
          </p>
          <p>
            I see this toolkit as most useful in accessibility-focused work and in complex service
            or system contexts, where participation, organisational realities, and implementation
            are constantly in tension.
          </p>
        </aside>
      </div>
    </section>
  `;

  renderCommitments(root.querySelector("#commitment-list"));
}

function renderWarningCards(root = document.querySelector("#warning-cards")) {
  if (!root) return;
  root.innerHTML = warningCards
    .map(
      (warning, index) => `
        <article class="warning-card">
          <div class="warning-card__head">
            <span class="warning-card__label">Warning</span>
            <span class="warning-card__index">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>${warning.title}</h3>
          <p>${warning.body}</p>
          <div class="warning-card__prompt">${warning.prompt}</div>
        </article>
      `,
    )
    .join("");
}

function renderCommitments(root = document.querySelector("#commitment-list")) {
  if (!root) return;
  root.innerHTML = commitments
    .map(
      (item, index) => `
        <li class="commitment-card">
          <div class="commitment-card__index">0${index + 1}</div>
          <div>
            <h3>${item.title}</h3>
            ${item.body ? `<p>${item.body}</p>` : ""}
          </div>
        </li>
      `,
    )
    .join("");
}

function renderFooter() {
  document.querySelector("#footer-modules").innerHTML = footerModules
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  document.querySelector("#footer-resources").innerHTML = footerResources
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  document.querySelector("#footer-legal").innerHTML = footerLegal
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");
}

function setActiveSection(sectionId) {
  document.querySelectorAll("[data-section]").forEach((link) => {
    const isActive = link.dataset.section === sectionId;
    link.classList.toggle("is-active", isActive);
  });
}

function clearActiveSections() {
  document.querySelectorAll("[data-section]").forEach((link) => {
    link.classList.remove("is-active");
  });
}

function setViewVisibility(activeView) {
  const views = {
    home: document.querySelector("#home-view"),
    section: document.querySelector("#section-view"),
    module: document.querySelector("#module-view"),
  };

  Object.entries(views).forEach(([key, node]) => {
    if (!node) return;
    const isActive = key === activeView;
    node.hidden = !isActive;
    node.style.display = isActive ? "" : "none";
    if (isActive) {
      node.scrollTop = 0;
    }
  });

  const pageMain = document.querySelector(".page-main");
  if (pageMain) pageMain.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function parseRoute() {
  const { hash } = window.location;
  if (hash.startsWith("#section/")) {
    return {
      type: "section",
      section: hash.replace("#section/", "") || "position",
    };
  }

  if (hash.startsWith("#module/")) {
    return {
      type: "module",
      slug: hash.replace("#module/", "") || modules[0].slug,
    };
  }

  return {
    type: "home",
  };
}

function showHomeView() {
  setViewVisibility("home");
  document.body.classList.remove("view-module", "view-section");
  document.body.classList.add("view-home");
  clearActiveSections();
}

function showSectionView(sectionId) {
  const sectionView = document.querySelector("#section-view");
  setViewVisibility("section");
  document.body.classList.remove("view-module", "view-home");
  document.body.classList.add("view-section");

  renderSectionPage(sectionId);
  renderIcons();
  setActiveSection(sectionId);

  requestAnimationFrame(() => {
    if (sectionView) sectionView.scrollTop = 0;
  });
}

function showModuleView(slug) {
  const moduleView = document.querySelector("#module-view");
  const module = getModuleBySlug(slug);

  setViewVisibility("module");
  document.body.classList.remove("view-section", "view-home");
  document.body.classList.add("view-module");

  renderModulePage(module.slug);
  renderIcons();
  setActiveSection("toolkit");

  requestAnimationFrame(() => {
    if (moduleView) moduleView.scrollTop = 0;
  });
}

function applyRoute() {
  const route = parseRoute();

  if (route.type === "section") {
    showSectionView(route.section);
    return;
  }

  if (route.type === "module") {
    showModuleView(route.slug);
    return;
  }

  showHomeView();
}

function initToolkitModuleInteractions() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-module-slug]");
    if (!trigger) return;

    const link = event.target.closest('a[href^="#module/"]');
    if (link) return;

    window.location.hash = `#module/${trigger.dataset.moduleSlug}`;
  });

  document.addEventListener("keydown", (event) => {
    const trigger = event.target.closest("[data-module-slug]");
    if (!trigger) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    window.location.hash = `#module/${trigger.dataset.moduleSlug}`;
  });
}

function initStatusInteractions() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-status-toggle]");
    if (!trigger) return;

    const statusId = trigger.dataset.statusToggle;
    const targetStatus = statuses.find((item) => item.id === statusId);
    if (!targetStatus) return;
    targetStatus.checked = !targetStatus.checked;

    const statusList = document.querySelector("#status-list");
    if (statusList) {
      renderStatuses(statusList);
      renderIcons();
    }
  });
}

function init() {
  renderSidebarNav();
  renderTopNav();
  renderMobileNav();
  renderGuideIndex();
  renderModulePage(modules[0].slug);
  renderFooter();
  renderIcons();
  initToolkitModuleInteractions();
  initStatusInteractions();
  window.addEventListener("hashchange", applyRoute);
  applyRoute();
}

init();
