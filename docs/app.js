const card = (
  title,
  time,
  venue,
  host,
  why,
  signal,
  notes,
  link,
  score,
  recommendation = "Consider",
) => ({ title, time, venue, host, why, signal, notes, link, score, recommendation });

const scan = {
  checkedAt: "October 6, 2026",
  updatedAt: "October 6, 2026",
  windowLabel: "October 6, 2026 → October 20, 2026",
  featured: [
    {
      title: "State of AI Report 2026",
      date: "Thu, Oct 8",
      recommendation: "Sign up now",
      summary: "Air Street launches its ninth annual report with Wayve chief scientist Jamie Shotton.",
      link: "https://luma.com/soai",
    },
    {
      title: "Open Together: AI Builders Unite",
      date: "Fri, Oct 16",
      recommendation: "Sign up now",
      summary: "Hugging Face, Ai2, Nous, LMSYS, Arcee, and Unsloth bring more than 1,100 open-model builders together for community demos.",
      link: "https://luma.com/OpenTogether",
    },
    {
      title: "ExecuTorch Hackathon",
      date: "Sat–Sun, Oct 17–18",
      recommendation: "Sign up now",
      summary: "Meta, Qualcomm, GitHub, and PyTorch back a 200-person build on open-source, on-device AI across compute, XR, and IoT.",
      link: "https://luma.com/executorch-hackathon",
    },
  ],
  days: [
    {
      date: "Tuesday, October 6",
      verdict: "Three strong production-AI rooms",
      note: "Heavybit's agent-infrastructure incident stories lead, followed by a sold-out live-demo night and a registration-closed hands-on documentation workshop.",
      events: [
        card("Haunted Agent + Infra Horror Night", "6:30 PM - 8:30 PM PT", "SVB Experience Center, 532 Market St", "Heavybit, Tailscale, and SVB", "Three short incident stories cover inference theft and token fraud, agent failures under incident command, and hard data problems in AI systems.", "266 visible attendees, Heavybit and Tailscale hosting, speakers from NVIDIA and a former Google DeepMind data leader, and a no-pitches format create a focused infrastructure room.", "Registration is open with approval. Doors open at 6:30 PM; talks and Q&A follow.", "https://luma.com/infra-horror-night", "9.4/10", "Sign up now"),
        card("SF Tech Week AI Demo Night", "5:00 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "ClickHouse, Artie, LlamaIndex, Langfuse, and LibreChat", "Eight to ten builders demo AI products, infrastructure, and developer tools live without slide decks or pitch-competition framing.", "Five respected AI infrastructure hosts, a demos-only format, and an explicit developer and builder audience make this a high-signal room.", "Event full; join the waitlist. Demos begin at 5:45 PM.", "https://luma.com/clickh-zngw", "9.3/10", "Sign up now"),
        card("Practical AI for Documentation", "6:30 PM - 9:00 PM PT", "Mindspace, 575 Market St", "Write the Docs Bay Area and GitBook", "Airbyte's technical-writing lead explains a self-healing documentation system for 700-plus connectors before a hands-on GitBook AI workshop.", "196 visible attendees, a production case study, a laptop workshop, and a technical-writer audience create a credible applied room.", "Registration is closed. Contact the host or subscribe for updates.", "https://luma.com/mngid6og", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 7",
      verdict: "Three exceptional AI infrastructure rooms",
      note: "Open-source models and inference lead, with a rigorous production-data research club and a focused VLA-training session as excellent alternatives.",
      events: [
        card("Open Source AI Stack: Models, Inference, and Agent Harness", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "Nous Research, AWS Builder Loft, LMSYS, Novita AI, and partners", "Leaders from Artificial Analysis, Nous Research, RadixArk, and Vercel discuss the open-source model, inference, post-training, gateway, and agent-harness stack.", "775 visible attendees and named practitioners building Hermes Agent, Vercel AI SDK and Gateway, inference benchmarks, and post-training systems make this a deep technical room.", "Registration is open with approval. Government-issued physical photo ID is required.", "https://luma.com/novita-oas6", "9.6/10", "Sign up now"),
        card("Frontier Research Club: Agents in Production — The Data Layer", "5:30 PM - 8:30 PM PT", "Pebblebed, private SF address", "Frontier Research Club and Pebblebed", "Two research talks and a long-form discussion examine agent state, memory, database access, authorization, isolation, evaluation, and rollback in production systems.", "A curated dinner, papers shared in advance, and an audience drawn from frontier labs, Stanford, Berkeley, and production infrastructure teams signal unusual rigor.", "Registration is open with approval; capacity is limited.", "https://luma.com/82gz0ggu", "9.3/10", "Sign up now"),
        card("Learning From Human Video & Scaling VLA Training", "6:00 PM - 9:00 PM PT", "Bright Data, 625 2nd St", "HackerSquad and Bright Data", "A new physical-AI series focuses on sourcing human demonstration video, scaling vision-language-action training, and identifying the next robotics data bottleneck.", "279 visible attendees and a deliberately narrow audience of robotics founders and VLA or world-model builders clear the room-quality bar.", "Registration is open.", "https://luma.com/learning-from-human-video", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 8",
      verdict: "Three high-signal frontier and production-AI rooms",
      note: "Air Street's annual State of AI launch leads, with a production-agent safety panel and a 20-seat post-training and evals dinner as strong alternatives.",
      events: [
        card("State of AI Report 2026 — SF Launch", "5:30 PM - 9:30 PM PT", "Private address, San Francisco", "Air Street Capital and Nathan Benaich", "Nathan Benaich presents the ninth annual State of AI Report, followed by Wayve chief scientist Jamie Shotton and another fireside conversation.", "Air Street's established report, a named frontier-autonomy scientist, and an approval gate create the strongest research-and-strategy room of the night.", "Event full; join the waitlist. Bring a valid photo ID.", "https://luma.com/soai", "9.7/10", "Sign up now"),
        card("Agents You Can Trust: A COLM Happy Hour", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Centific and Reinforce Labs", "Leaders from Google, Meta, Salesforce, Glean, and UC Berkeley examine production agent evaluation, red teaming, guardrails, accountability, and user trust.", "215 visible attendees, named senior practitioners, a 100-guest approval gate, and a 90-minute fireside-and-panel program create a rigorous production-safety room.", "Event full; join the waitlist. Exact address is disclosed to approved attendees.", "https://luma.com/hv3vd3aa", "9.3/10", "Sign up now"),
        card("Beyond the Base Model: Post-Training, Evals & Agentic Systems", "6:00 PM - 9:00 PM PT", "The Progress, 1525 Fillmore St", "Prolific and AI Circle", "A private fireside with Microsoft Research and Prolific examines post-training, human versus automated evaluation, full agent trajectories, and learning from system failures.", "Only 20 approved researchers, engineers, and technical leaders are admitted, with no stage or pitches, creating a genuinely candid room.", "Event full; join the waitlist. Approval is required, including for plus-ones.", "https://luma.com/prolific-j12n", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 9",
      verdict: "An engineer debate plus a hardware-builder room",
      note: "Qdrant and Neo4j lead a participatory AI debate, while Hardware FYI offers a broader physical-systems fireside at the weekday floor.",
      events: [
        card("Hard Negatives: Engineers Debate Night", "6:30 PM - 9:00 PM PT", "Manny's, 3092 16th St", "Qdrant and Neo4j", "Engineers and AI researchers split into one-on-one teams to debate contested technical questions such as whether open weights should be banned, with live audience voting.", "217 visible attendees, Qdrant and Neo4j hosting, limited capacity, and an explicitly technical audience make this a substantive participatory room.", "Registration is open with approval. Check-in starts at 6:30 PM and debates begin at 7:00 PM.", "https://luma.com/sf-meetup-oct26", "8.8/10", "Sign up now"),
        card("Hardware FYI: SF Tech Week Edition", "5:00 PM - 9:00 PM PT", "Dogpatch Studios, 991 Tennessee St", "Hardware FYI", "A focused fireside covers emerging work at the intersection of AI, manufacturing, robotics, and product development before a hardware-industry gathering.", "Limited attendance and a 20,000-plus-reader technical community are good room signals, though speakers are still unannounced.", "Sold out; join the waitlist. Doors open at 5:00 PM.", "https://luma.com/g5sdw0b6", "8.4/10", "Consider"),
      ],
    },
    {
      date: "Saturday, October 10",
      verdict: "Open night",
      note: "Production Agent Lab moved to October 22. The remaining Tech Week options were a startup-pitch hackathon, beginner-friendly workshops starting before the weekend floor, a sub-30 early listing, sports, or generic networking.",
      events: [],
    },
    {
      date: "Sunday, October 11",
      verdict: "One strong multimodel build-and-demo day",
      note: "BuilderBase's full-day technical hack now has a substantial room; the other visible options are recruiting, investor, founder-social, or generic startup-pitch rooms.",
      events: [
        card("Multi Model Hackathon", "9:00 AM - 6:00 PM PT", "Frontier Tower, 995 Market St", "BuilderBase, Women in AI Club, and partners", "Teams build a useful product that combines multiple models, providers, agents, or modalities, then explain why the system could not work as well with a single model and demo it live.", "244 visible attendees, a full-day build-test-demo format, an explicit engineer and AI-practitioner audience, and agent infrastructure sponsors make this a substantive room.", "Registration is open with approval.", "https://luma.com/builde-pozq", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, October 12",
      verdict: "One focused frontier-hardware room",
      note: "Syntro's robotics and hardware operator gathering is social, but the 130-person room is targeted enough to clear the Consider floor.",
      events: [
        card("Long Lead Time: A Hardware Happy Hour", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Syntro", "Robotics, chip, rocket, and frontier-hardware founders, engineers, and operators trade supplier lessons and production war stories.", "130 visible attendees and a sharply defined physical-systems audience make this more useful than a generic conference mixer, despite the no-program format.", "Registration is open; exact address is disclosed after registration.", "https://luma.com/j0d8zw82", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, October 13",
      verdict: "Two excellent production-agent rooms",
      note: "AWS Community Day leads with an unusually deep full-day program, while Databricks hosts an after-work agent-observability meetup for production practitioners.",
      events: [
        card("AWS Community Day — AI Edition", "9:30 AM - 7:00 PM PT", "AWS Builder Loft, 525 Market St", "AWS Community Bay Area", "Eleven practitioner-led sessions cover production agents, self-hosted LLMs, AgentOps simulations, runtime steering, guardrails, agentic lakehouses, and AI-assisted development before eight hackathon finalists demo live.", "A free community-run program, named speakers from AWS, Snorkel AI, Dolby, UC Berkeley, and production teams, and a no-vendor-pitches policy justify the full-day exception.", "Registration is open on Luma and must also be completed on the AWS Builder Loft site. Bring a physical photo ID.", "https://luma.com/acba2610", "9.5/10", "Sign up now"),
        card("Agentic + AI Observability Meetup SF", "5:00 PM - 8:00 PM PT", "Databricks, private SF address", "Agentic + AI Observability", "Databricks engineers and agent practitioners examine production traces, failure modes, MLflow observability, evaluation loops, and multi-step agent workflows.", "A tightly scoped engineer audience, two technical talks, a named Databricks senior software engineer, and an approval gate make this a strong after-work alternative.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/Agentic_AI_10-13", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 14",
      verdict: "Two build rooms plus a physical-AI demo night",
      note: "Vercel and Meta's focused agent-and-multimodal hackathon leads, with The Build as a broader ship-and-demo alternative and a new world-models room after work.",
      events: [
        card("Fast Forward", "10:00 AM - 6:00 PM PT", "Private address, Union Street", "Vercel, Meta, and Neon", "Builders ship agents, multimodal AI apps, or VR experiences through two hacking blocks before judge walkthroughs and top-team demos.", "121 visible attendees, official Vercel hosting, Meta and Neon support, a concrete build agenda, and live demos make this the strongest room of the day.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/fastforwardhack", "9.4/10", "Sign up now"),
        card("The Build: Hackathon", "9:30 AM - 5:30 PM PT", "Private address, San Francisco", "Devnovate", "Engineers, AI builders, product leads, and data scientists spend a full day turning an idea into a working AI, agent, devtool, workflow, or data product and demo it to judges.", "The approval gate, ship-and-demo requirement, and open-source RocketRide AI meta-harness partnership outweigh the broad theme and justify a substantive weekday exception.", "Registration is open with approval. The page header ends at 5:30 PM, while the published agenda runs to 7:00 PM.", "https://luma.com/kwnikzpo", "8.3/10", "Sign up now"),
        card("Worldmodels: See the World in 4D", "6:00 PM - 11:00 PM PT", "Private address, SoMa", "Nlink and Spatial Frontier Club", "Live 4D capture and reconstruction anchor an after-hours gathering on physical AI, spatial intelligence, robotics, and world models.", "Attendance is hidden, but the live technical demo, tightly scoped practitioner audience, and established Spatial Frontier Club community support the new-listing exception.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/bodsfu42", "7.9/10", "Consider"),
      ],
    },
    {
      date: "Thursday, October 15",
      verdict: "A production-agent orchestration conference",
      note: "Orkes Shift is a rare single-day engineering room focused on durable execution rather than generic agent demos.",
      events: [
        card("Orkes Shift", "10:00 AM - 6:30 PM PT", "Private address, downtown San Francisco", "Orkes", "Engineering teams examine how to combine deterministic workflows and nondeterministic agents, including long-running state, retries, human approvals, failure handling, coding-agent runtimes, and production migrations.", "170 visible attendees, a capped approval gate, an explicit engineers-and-architects audience, and production examples built on the open-source Conductor lineage make this a high-signal room.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/zj2gat16", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 16",
      verdict: "One exceptional open-model builder gathering",
      note: "Hugging Face and a remarkable set of open-model labs bring a very large technical community together for demos and hands-on participation; registration has reopened since the prior scan.",
      events: [
        card("Open Together: AI Builders Unite", "6:00 PM - 12:00 AM PT", "The Midway, 900 Marin St", "Hugging Face, Ai2, Nous Research, LMSYS, Arcee AI, and Unsloth", "Open-model builders gather for community demos, project showcases, and direct exchange across model research, training, inference, and tooling ecosystems.", "1,168 visible attendees plus hosts behind Hugging Face, Ai2, Nous, LMSYS, Arcee, and Unsloth make this the highest-density open-source AI room in the window.", "Registration is open again. Community-demo applications are closed.", "https://luma.com/OpenTogether", "9.6/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, October 17",
      verdict: "A flagship on-device AI build plus a focused devtools movie night",
      note: "The two-day ExecuTorch hackathon is the clear priority; PlanetScale offers a smaller, culturally relevant alternative for people who want a lighter Saturday room.",
      events: [
        card("ExecuTorch Hackathon", "10:00 AM Sat - 7:00 PM Sun PT", "Founders, Inc., 2 Marina Blvd", "HackerSquad, Qualcomm, GitHub, Meta, and PyTorch Foundation", "Teams of three to five build open-source on-device AI across Snapdragon compute, Samsung mobile and XR, or Arduino IoT hardware before live judging.", "A 200-person cap, application gate, official Open Source AI Week placement, first-party hardware, and hosts from Meta, Qualcomm, GitHub, and PyTorch create an exceptional technical room.", "Luma still accepts track proposals with approval, though the published proposal deadline was October 4 and selections are scheduled for October 7.", "https://luma.com/executorch-hackathon", "9.6/10", "Sign up now"),
        card("PlanetScale Movie Night: You Can See Everything", "5:30 PM - 10:30 PM PT", "AMC Kabuki 8, 1881 Post St", "PlanetScale", "PlanetScale gathers a limited group to watch Nathan Fielder and Lance Oppenheim's documentary about Elizabeth Holmes and Silicon Valley culture.", "PlanetScale hosting and a tightly limited room should draw strong database and devtools operators, though the evening is cultural rather than technical.", "Registration is open with approval; arrive early to receive a ticket.", "https://luma.com/qjw9i5a9", "6.6/10", "Consider"),
      ],
    },
    {
      date: "Sunday, October 18",
      verdict: "One focused open-source AI evening",
      note: "Ant Open Source's technical happy hour is the only Sunday option that clears the location, timing, attendance, and substance bars.",
      events: [
        card("InclusionAI Tech Night: Your AI Reality Check", "4:00 PM - 8:00 PM PT", "Private address, San Francisco", "Ant Open Source and inclusionAI", "Developers and researchers discuss benchmark reliability, whether agent systems can exceed their best model, and domain-specific models for healthcare and finance.", "45 visible attendees, an approval gate, official Open Source AI Week placement, and an agenda centered on open models and agent systems signal a credible technical room.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/xs9sn0lp", "8.4/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, October 19",
      verdict: "One standout open-model debate at GitHub",
      note: "Open Source AI Week's flagship debate gives the formerly empty date a rigorous after-work room; the other viable AI options were daytime or outside San Francisco.",
      events: [
        card("Open Weight Debate Night", "5:00 PM - 9:00 PM PT", "GitHub HQ, private SF address", "Open Source AI Week, GitHub, and Matt White", "Ion Stoica, Percy Liang, Ben Brooks, and other open-model leaders debate frontier-weight risk, investment returns, and whether closed models will retain a capability edge through 2030.", "175 visible attendees, three structured debates, an approval gate, GitHub hosting, and named Berkeley, Stanford, and Black Forest Labs leaders make this a high-signal technical-policy room.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/592fcwx2", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, October 20",
      verdict: "An open-agent meetup plus a smaller enterprise-agent session",
      note: "OpenClaw's talks and demos lead; Powering an AI Workforce is a credible new listing for builders interested in versioning, evals, credentials, and autonomous enterprise agents.",
      events: [
        card("OpenClaw & Friends Meetup", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "OpenClaw Foundation", "Open-source agent builders present short talks and project demos focused on AI systems people can own, understand, control, and extend.", "58 visible attendees, official Open Source AI Week placement, an approval gate, and a concrete talks-and-demos format create a credible practitioner room.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/oah05xax", "8.5/10", "Sign up now"),
        card("Powering an AI Workforce", "6:30 PM - 8:00 PM PT", "80 Langton St", "Sim and invited AI builders", "Builders discuss how autonomous enterprise agents should be built, integrated, versioned, evaluated, and given credentials and access.", "Attendance is hidden, but the specific production-agent agenda, in-person SF venue, approval gate, and official Open Source AI Week placement support the new-listing exception.", "Registration is open with approval.", "https://luma.com/xc44tt1f", "7.4/10", "Consider"),
      ],
    },
  ],
  profile: {
    description: "Our recommended events target high-signal, after-work gatherings across AI topics, prioritizing rooms with applied AI builders and technical PMs over generic networking. We favor curated venues and substantive topics like agents, evals, and AI infrastructure, while filtering out founder-heavy and novice-oriented events.",
    sourceHeading: "Event Calendars",
    sources: [
      {
        label: "Discover tech events",
        link: "https://luma.com/tech",
        image: "./tech-square.png",
      },
      {
        label: "Discover AI events",
        link: "https://luma.com/ai",
        image: "./ai-square.png",
      },
    ],
  },
};

function badgeClass(label) {
  const normalized = label.toLowerCase();
  if (normalized.includes("sign up")) return "badge badge-hot";
  if (normalized.includes("consider")) return "badge badge-warm";
  return "badge badge-muted";
}

function ctaLabel(label) {
  return label.toLowerCase().includes("sign up") ? "Sign up now" : "View event";
}

const openNightLines = [
  "Enjoy the night off.",
  "Leave room for serendipity.",
  "A quiet night is still a good call.",
  "Stay in and ship.",
  "Time to catch up on your favorite podcast.",
];

function openNightLine(dayIndex) {
  return openNightLines[dayIndex % openNightLines.length];
}

function renderFeatured() {
  const target = document.getElementById("featured-grid");
  target.innerHTML = scan.featured
    .map(
      (event) => `
        <article class="featured-card">
          <p class="featured-date">${event.date}</p>
          <h4>${event.title}</h4>
          <span class="${badgeClass(event.recommendation)}">${event.recommendation}</span>
          <p class="body-copy">${event.summary}</p>
          <a
            class="event-button ${event.recommendation === "Sign up now" ? "event-button-primary" : "event-button-secondary"}"
            href="${event.link}"
            target="_blank"
            rel="noreferrer"
          >${ctaLabel(event.recommendation)}</a>
        </article>
      `,
    )
    .join("");
}

function renderPlanner() {
  const target = document.getElementById("planner-grid");
  target.innerHTML = scan.days
    .map((day, dayIndex) => {
      const cards = day.events.length
        ? day.events
            .map(
              (event) => `
                <article class="event-card">
                  <div class="event-card-top">
                    <div>
                      <h4>${event.title}</h4>
                      <p class="event-meta">${event.time}</p>
                    </div>
                    <div class="event-card-badges">
                      <span class="${badgeClass(event.recommendation)}">${event.recommendation}</span>
                      <span class="badge badge-score">${event.score}</span>
                    </div>
                  </div>
                  <p class="event-meta"><strong>Venue:</strong> ${event.venue}</p>
                  <p class="event-meta"><strong>Host:</strong> ${event.host}</p>
                  <p class="event-copy"><strong>Why it made the cut:</strong> ${event.why}</p>
                  <p class="event-copy"><strong>Signal:</strong> ${event.signal}</p>
                  <p class="event-copy"><strong>Notes:</strong> ${event.notes}</p>
                  <a
                    class="event-button ${event.recommendation === "Sign up now" ? "event-button-primary" : "event-button-secondary"}"
                    href="${event.link}"
                    target="_blank"
                    rel="noreferrer"
                  >${ctaLabel(event.recommendation)}</a>
                </article>
              `,
            )
            .join("")
        : `<div class="no-event-card">
             <h4 class="no-event-title">Open night</h4>
             <p>${openNightLine(dayIndex)}</p>
           </div>`;

      return `
        <section class="day-block">
          <div class="day-header">
            <div>
              <p class="eyebrow">Recommendation</p>
              <h3>${day.date}</h3>
            </div>
            ${day.events.length ? `<div class="day-verdict"><span class="${badgeClass(day.verdict)}">${day.verdict}</span></div>` : ""}
          </div>
          ${day.events.length ? `<p class="day-note">${day.note}</p>` : ""}
          <div class="event-stack">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function renderTasteProfile() {
  const target = document.getElementById("taste-grid");
  const sourceCards = scan.profile.sources
    .map(
      (source) => `
        <a
          class="taste-promo"
          href="${source.link}"
          target="_blank"
          rel="noreferrer"
          aria-label="${source.label}"
        >
          <img class="taste-promo-image" src="${source.image}" alt="${source.label}" />
        </a>
      `,
    )
    .join("");

  target.innerHTML = `
    <article class="taste-card taste-card-summary">
      <p class="taste-copy">${scan.profile.description}</p>
      <p class="eyebrow taste-sources-heading">${scan.profile.sourceHeading}</p>
      <div class="taste-promo-grid">${sourceCards}</div>
    </article>
  `;
}

function parseDayDate(dateStr) {
  const dateSource = scan.checkedAt || scan.updatedAt;
  const yearMatch = dateSource && dateSource.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : new Date().getFullYear();
  const cleaned = dateStr.replace(/^[^,]+,\s*/, "");
  const parsed = new Date(`${cleaned}, ${year}`);
  return isNaN(parsed) ? null : parsed;
}

function compactWindowLabel() {
  const days = scan.days || [];
  if (days.length < 2) return scan.windowLabel || "";
  const first = parseDayDate(days[0].date);
  const last = parseDayDate(days[days.length - 1].date);
  if (!first || !last) return scan.windowLabel || "";

  const fmtMonthDay = (d) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const sameMonth = first.getMonth() === last.getMonth();
  return sameMonth
    ? `${fmtMonthDay(first)}–${last.getDate()}`
    : `${fmtMonthDay(first)} – ${fmtMonthDay(last)}`;
}

function renderHeroMeta() {
  const allEvents = scan.days.flatMap((day) => day.events || []);
  const recommendedCount = allEvents.filter((event) => {
    const recommendation = (event.recommendation || "").toLowerCase();
    return recommendation.includes("sign up") || recommendation.includes("consider");
  }).length;

  const set = (id, value) => {
    const target = document.getElementById(id);
    if (target) target.textContent = value;
  };

  set("meta-window", compactWindowLabel());
  set("meta-scanned", `${allEvents.length} events`);
  set("meta-recommended", recommendedCount);
  set(
    "hero-refresh",
    scan.checkedAt && scan.checkedAt !== scan.updatedAt
      ? `Last checked ${scan.checkedAt} · planner updated ${scan.updatedAt}`
      : `Last checked ${scan.checkedAt || scan.updatedAt}`,
  );
}

function renderHeroDensity() {
  const barsEl = document.getElementById("hero-density-bars");
  const axisEl = document.getElementById("hero-density-axis");
  if (!barsEl) return;

  const days = scan.days || [];
  const counts = days.map((day) => ({
    total: (day.events || []).length,
    hasBestBet: (day.events || []).some((event) =>
      (event.recommendation || "").toLowerCase().includes("sign up"),
    ),
    dateLabel: day.date,
  }));
  const maxCount = Math.max(...counts.map((count) => count.total), 1);

  barsEl.style.setProperty("--day-count", counts.length);
  barsEl.innerHTML = counts
    .map(({ total, hasBestBet, dateLabel }) => {
      const heightPct = total === 0 ? 10 : Math.max(22, (total / maxCount) * 100);
      let cls = "hero-density-bar";
      if (hasBestBet) cls += " is-strong";
      else if (total >= maxCount * 0.5) cls += " is-mid";
      const eventLabel = total === 1 ? "event" : "events";
      return `<div class="${cls}" style="height: ${heightPct}%;" title="${dateLabel}: ${total} ${eventLabel}"></div>`;
    })
    .join("");

  if (axisEl && days.length >= 3) {
    const fmt = (day) => {
      const parsed = parseDayDate(day.date);
      return parsed
        ? parsed.toLocaleDateString("en-US", { month: "short", day: "numeric" })
        : day.date;
    };
    const midIdx = Math.floor(days.length / 2);
    axisEl.children[0].textContent = fmt(days[0]);
    axisEl.children[1].textContent = fmt(days[midIdx]);
    axisEl.children[2].textContent = fmt(days[days.length - 1]);
  }
}

function render() {
  const windowLabel = document.getElementById("window-label");
  if (windowLabel) {
    windowLabel.textContent = scan.windowLabel;
  }
  renderHeroMeta();
  renderHeroDensity();
  renderFeatured();
  renderPlanner();
  renderTasteProfile();
}

render();
