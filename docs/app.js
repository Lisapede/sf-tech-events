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
  checkedAt: "September 25, 2026",
  updatedAt: "September 25, 2026",
  windowLabel: "September 25, 2026 → October 9, 2026",
  featured: [
    {
      title: "Hard Negatives: Engineers Debate Night",
      date: "Fri, Oct 9",
      recommendation: "Sign up now",
      summary: "Qdrant and Neo4j convene engineers and AI researchers for live debates on contested technical questions.",
      link: "https://luma.com/sf-meetup-oct26",
    },
    {
      title: "STACKED: Sandboxes, Inference, & Observability",
      date: "Wed, Sep 30",
      recommendation: "Sign up now",
      summary: "E2B, Fireworks, and Braintrust unpack the infrastructure stack behind production agents.",
      link: "https://luma.com/e2b-0e34",
    },
    {
      title: "Camp AI: Production-Ready Agents",
      date: "Tue, Oct 6",
      recommendation: "Sign up now",
      summary: "Anthropic, Auth0, Cloudflare, Browserbase, and CircleCI leaders unpack the production agent stack.",
      link: "https://luma.com/campai-sftw-2026",
    },
  ],
  days: [
    {
      date: "Friday, September 25",
      verdict: "One credible AI-for-social-good showcase",
      note: "Google hosts finished projects from a 50-person women-builders hackathon; the public program starts at the weekday floor.",
      events: [
        card("AI for Social Good: San Francisco Presentations & Reception", "4:30 PM - 8:00 PM PT", "Google, private SF address", "Ruth AI and Google", "Selected teams from a 50-woman daytime hackathon present AI tools built for real social challenges before judges and a technical invited audience.", "176 visible attendees, Google hosting, finished-project presentations, a substantive builder cohort, and an approval gate are strong signals.", "Registration is open with approval. Doors open at 4:30 PM; the program begins at 5:00 PM, meeting the weekday floor.", "https://luma.com/x2c2zl9p", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, September 26",
      verdict: "Two excellent weekend build rooms",
      note: "A YC-backed iPhone Duo hack leads, while BlueDot's two-day coordination-tools build is the open application option.",
      events: [
        card("Bitrig Hacks: iPhone Duo Edition", "10:30 AM - 6:00 PM PT", "YC office, private SF address", "Y Combinator and Bitrig", "Developers use Apple's new foldable-iPhone APIs to build something newly possible, then demo finished work to senior Apple, YC, security, and indie-development judges.", "Y Combinator hosting, OpenAI, Sentry, Supabase, and RevenueCat sponsorship, a strict build-and-demo format, and unusually strong judges make this an exceptional technical room.", "Luma registration is closed; the page points to YC's event portal for registration status. The all-day hack earns a substantive weekend exception.", "https://luma.com/yc-meetup-4378", "9.4/10", "Sign up now"),
        card("Hackathon: AI Tools for Better Decisions and Coordination", "8:30 AM Sat - 6:30 PM Sun PT", "BlueDot office, private SF address", "BlueDot Impact", "Teams build deployable AI prototypes that improve real-world decision quality and coordination rather than generic demos.", "The event targets 30-plus builders, offers a $5,000 prize, requires approval, and explicitly emphasizes real users and credible deployment paths.", "Registration is open with approval. This two-day substantive build runs through Sunday evening.", "https://luma.com/ai-tools-for-better-futures-hack", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 27",
      verdict: "One substantive two-day AI build continues",
      note: "BlueDot's hackathon runs through 6:30 PM; the only standalone AI alternative began before the weekend timing floor.",
      events: [
        card("Hackathon: AI Tools for Better Decisions and Coordination — Day 2", "Continues through 6:30 PM PT", "BlueDot office, private SF address", "BlueDot Impact", "The second day turns AI-for-decision-making prototypes into demos with credible users and deployment paths.", "The 30-plus-builder approval-gated cohort, two-day format, and $5,000 prize support a real execution-focused room.", "Registration is open with approval. This is the Sunday continuation of the September 26–27 hackathon.", "https://luma.com/ai-tools-for-better-futures-hack", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, September 28",
      verdict: "One focused production-agent show-and-tell",
      note: "A GitHub-hosted technical program clears the attendance floor with named talks on agent authorization, DSPy optimization, and agent-ready products.",
      events: [
        card("Agents on a Leash, Products on Trial | AI Show and Tell", "6:00 PM - 8:30 PM PT", "GitHub, 88 Colin P Kelly Jr St", "AI Show and Tell and Global AI Community", "Four short technical talks cover user-level agent authorization, DSPy and GEPA optimization, agent infrastructure, and product surfaces designed for agents.", "137 visible attendees, GitHub hosting, named speakers from ScaleKit, DSPy, Blaxel, and Microsoft, and a demo-forward format clear the normal room threshold.", "Registration is open. Entry is first come, first served even with registration.", "https://luma.com/wx7493ut", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 29",
      verdict: "One exceptional but expensive conference kickoff",
      note: "The AI Conference's capped Day ZERØ combines technical workshops, a live build, and a 5:30 PM mixer, but the official event page now marks it sold out.",
      events: [
        card("The AI Conference 2026 — Day ZERØ", "9:00 AM - evening PT; mixer at 5:30 PM", "Pier 48, Mission Rock", "The AI Conference", "A capped kickoff offers 90-minute workshops on production agents, eval environments, private multimodal systems, and AI strategy, plus a live Hack Day and evening mixer.", "The room is capped at 350 senior builders and leaders, with named technical sessions, 120-plus conference speakers, and a strong infrastructure partner set.", "Sold out on the official event page; monitor for cancellations. This is a paid conference add-on.", "https://aiconference.com/dz/", "9.0/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, September 30",
      verdict: "Two excellent production-agent rooms",
      note: "E2B, Fireworks, and Braintrust lead with agent infrastructure; Chime's practitioner analytics roundtable is a strong second choice.",
      events: [
        card("STACKED: Sandboxes, Inference, & Observability", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "E2B, Fireworks AI, and Braintrust", "Three technical talks cover sandboxing untrusted agent code, serving models at agent-loop speed, and using evals and traces to measure whether agents improve.", "Attendance is hidden, but three top-tier infrastructure hosts, an approval gate, and a tightly scoped production-agent agenda are exceptional signals.", "Registration is open with approval.", "https://luma.com/e2b-0e34", "9.6/10", "Sign up now"),
        card("Agentic Analytics Meetup San Francisco", "5:30 PM - 9:30 PM PT", "Chime, 101 California St", "nao Labs and Chime", "Data teams compare deployed analytics agents built with Hex, nao, Claude, and in-house systems in a practitioner roundtable.", "138 visible attendees, Chime hosting, named senior data practitioners, and a real-world deployment focus make this a credible technical room.", "Registration is open.", "https://luma.com/qefxlyb4", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 1",
      verdict: "A frontier-systems salon plus an agent-interface demo night",
      note: "Formal oversight for advanced AI leads, with a WorkOS-hosted generative-UI room as the applied builder alternative.",
      events: [
        card("Foresight Institute and Convergent Research Salon: Launching Atlas and Oath", "5:30 PM - 8:30 PM PT", "The Fold, 3359 26th St", "Foresight Institute and Convergent Research", "A fireside examines formal methods for overseeing advanced AI and new institutions focused on epistemic security, model-weight security, and critical infrastructure.", "225 visible attendees, named technical organizations, a focused fireside and Q&A, and a high-trust research community make this an excellent frontier-systems room.", "Event full; join the waitlist.", "https://luma.com/foresight-lqwp", "9.3/10", "Sign up now"),
        card("Generative UI Night III", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "CopilotKit and WorkOS", "Live demos explore agent interfaces, MCP Apps, and agent-generated HTML without slide decks or product pitches.", "402 visible attendees, WorkOS hosting, and a demo-only format focused on emerging agent UX make this a strong applied-builder room.", "Event full; join the waitlist.", "https://luma.com/copilo-ldpw", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 2",
      verdict: "One large devtools builder drinkup",
      note: "WorkOS brings API, devtools, and AI builders together after work; it is social, but unusually well targeted to the profile.",
      events: [
        card("SF Devtools Drinkup", "6:00 PM - 9:00 PM PT", "Southern Pacific Brewing, 620 Treat Ave", "WorkOS", "A large after-work gathering connects engineers building developer tools, APIs, infrastructure, and AI products.", "694 visible attendees and WorkOS hosting signal a deep devtools crowd, even though the format is more social than technical.", "Registration is open; attendees must be 21 or older.", "https://luma.com/drinkup-f26", "8.5/10", "Consider"),
      ],
    },
    {
      date: "Saturday, October 3",
      verdict: "Two standout weekend build-and-demo rooms",
      note: "Supabase's high-stakes hackathon leads, with a curated AI-commerce exhibition as the broader full-day alternative.",
      events: [
        card("Supabase Select 2026 Hackathon", "9:00 AM - 5:00 PM PT", "580 20th St, San Francisco", "Supabase", "Teams build and demo products with Supabase, Anthropic, Vercel, and Stripe tooling for a prize pool of up to $100,000 in platform credits.", "Official Supabase hosting, top-tier technical partners, substantial prizes, and a full build-and-demo day make this an exceptional weekend room.", "Registration is open with approval. The all-day build earns a substantive weekend exception.", "https://luma.com/select-2026-hackathon", "9.4/10", "Sign up now"),
        card("The AI Commerce Gallery — Hackathon", "9:00 AM - 9:00 PM PT", "Walt Disney Family Museum, San Francisco", "AI Valley and ZooWork", "A curated group of 100–150 builders develops and exhibits AI-commerce projects through working demos and gallery-style presentations.", "A 25–35-team cohort, finished-project format, curated attendance, and full-day program signal meaningful builder density.", "Registration is open with approval. The exact address is disclosed to approved attendees; the all-day format earns a substantive weekend exception.", "https://luma.com/6bbloggr", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, October 4",
      verdict: "Open night",
      note: "Both primary calendars, the SF city feed, and the SF Tech Week fallback yielded only early or generic social options; none cleared the Sunday timing and room-quality bars.",
      events: [],
    },
    {
      date: "Monday, October 5",
      verdict: "Three strong agent-building and demo rooms",
      note: "A packed software-factories showcase leads, while WorkOS offers a smaller live-demo room and n8n hosts a hands-on MCP workflow build.",
      events: [
        card("Ship it & Sip it: Software Factories Night", "6:00 PM - 8:00 PM PT", "Corgi Cafe, 9 Claude Ln", "CopilotKit and partners", "Live demos examine agent software factories, production guardrails, and evals without slides or company pitches.", "420 visible attendees, a live-demo-only format, and a tightly scoped production-agent agenda make this the strongest room of the night.", "Event full; join the waitlist.", "https://luma.com/copilo-y6wx", "9.4/10", "Sign up now"),
        card("Demo Night @ WorkOS (October)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS", "Builders show working products live, with no slides and no company pitches, followed by technical conversation with the room.", "147 visible attendees, WorkOS hosting, an approval gate, and a demos-only format create a focused room.", "Registration is open with approval.", "https://luma.com/demo-night-oct2026", "9.0/10", "Sign up now"),
        card("Automate Your SF Tech Week with n8n", "6:00 PM - 9:00 PM PT", "Digital Jungle, 972 Mission St", "n8n community", "A laptop workshop guides participants through connecting n8n and Claude Code over MCP to leave with a working automation.", "136 visible attendees, a hands-on build requirement, and a concrete take-home workflow make this substantially stronger than a generic meetup.", "Registration is open. Bring a laptop and an n8n account; Claude Code is optional.", "https://luma.com/n8n-ntlt", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, October 6",
      verdict: "Three strong production-AI rooms",
      note: "A production-agent leadership lineup leads, followed by a live AI demo night and a waitlisted hands-on documentation workshop.",
      events: [
        card("Camp AI: Production-Ready Agents", "5:30 PM - 8:30 PM PT", "Ferry Building, 1 Ferry Building", "Auth0 with Anthropic, Cloudflare, Browserbase, and CircleCI", "Anthropic's MCP maintainer joins senior leaders from Auth0, Cloudflare, Browserbase, and CircleCI for talks and demos on securing, automating, and scaling production agents.", "Named infrastructure leaders across identity, edge, browsers, CI, and MCP create the day's highest-signal technical room despite hidden attendance.", "Registration is open on the linked external Partiful page; the Luma listing itself is informational.", "https://luma.com/campai-sftw-2026", "9.6/10", "Sign up now"),
        card("SF Tech Week AI Demo Night", "5:00 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "ClickHouse, Artie, LlamaIndex, Langfuse, and LibreChat", "Eight to ten builders demo AI products, infrastructure, and developer tools live without slide decks or pitch-competition framing.", "Five respected AI infrastructure hosts, a demos-only format, and an explicit developer and builder audience outweigh hidden attendance.", "Registration is open. Doors open at 5:00 PM and demos begin at 5:45 PM.", "https://luma.com/clickh-zngw", "9.3/10", "Sign up now"),
        card("Practical AI for Documentation", "6:30 PM - 9:00 PM PT", "Mindspace, 575 Market St", "Write the Docs Bay Area and GitBook", "Airbyte's technical-writing lead explains a self-healing documentation system for 600-plus connectors before a hands-on GitBook AI workshop.", "70 visible attendees, a production case study, a laptop workshop, and a technical-writer audience create a credible applied room.", "Event full; join the waitlist and bring a laptop if admitted.", "https://luma.com/mngid6og", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 7",
      verdict: "Three exceptional AI infrastructure rooms",
      note: "Open-source models and inference lead, with a rigorous production-data research club and a focused VLA-training session as excellent alternatives.",
      events: [
        card("Open Source AI Stack: Models, Inference, and Agent Harness", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "Nous Research, AWS Builder Loft, LMSYS, Novita AI, and partners", "Leaders from Artificial Analysis, Nous Research, RadixArk, and Vercel discuss the open-source model, inference, post-training, gateway, and agent-harness stack.", "Named practitioners building Hermes Agent, Vercel AI SDK and Gateway, inference benchmarks, and post-training systems make this a deep technical room.", "Registration is open with approval. Government-issued physical photo ID is required.", "https://luma.com/novita-oas6", "9.6/10", "Sign up now"),
        card("Frontier Research Club: Agents in Production — The Data Layer", "5:30 PM - 8:30 PM PT", "Pebblebed, private SF address", "Frontier Research Club and Pebblebed", "Two research talks and a long-form discussion examine agent state, memory, database access, authorization, isolation, evaluation, and rollback in production systems.", "A curated dinner, papers shared in advance, and an audience drawn from frontier labs, Stanford, Berkeley, and production infrastructure teams signal unusual rigor.", "Registration is open with approval; capacity is limited.", "https://luma.com/82gz0ggu", "9.3/10", "Sign up now"),
        card("Learning From Human Video & Scaling VLA Training", "6:00 PM - 9:00 PM PT", "Bright Data, 625 2nd St", "HackerSquad and Bright Data", "A new physical-AI series focuses on sourcing human demonstration video, scaling vision-language-action training, and identifying the next robotics data bottleneck.", "78 visible attendees and a deliberately narrow audience of robotics founders and VLA or world-model builders clear the room-quality bar.", "Registration is open.", "https://luma.com/learning-from-human-video", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 8",
      verdict: "Three high-signal frontier and production-AI rooms",
      note: "Air Street's annual State of AI launch leads, with a production-agent authorization deep dive and Snorkel's COLM research gathering as strong alternatives.",
      events: [
        card("State of AI Report 2026 — SF Launch", "5:30 PM - 9:30 PM PT", "Private address, San Francisco", "Air Street Capital and Nathan Benaich", "Nathan Benaich presents the ninth annual State of AI Report, followed by Wayve chief scientist Jamie Shotton and another fireside conversation.", "Air Street's established report, a named frontier-autonomy scientist, and an approval gate create the strongest research-and-strategy room of the night.", "Registration is open with approval. Bring a valid photo ID.", "https://luma.com/soai", "9.7/10", "Sign up now"),
        card("Agents in Production: The Auth Stack for AI", "5:00 PM - 7:30 PM PT", "Industrious, 345 California St", "Agentic Fabriq and Open Future Forum", "A technical discussion covers agent identity, delegated authorization, least-privilege access, token lifecycles, secrets, auditability, and human approval workflows.", "Attendance is hidden, but the tightly scoped production-security agenda and explicit CTO, engineering, security, and platform audience are strong signals.", "Registration is open with approval.", "https://luma.com/obrx792x", "9.1/10", "Sign up now"),
        card("COLM Closing Happy Hour", "5:00 PM - 7:00 PM PT", "Private address, San Francisco", "Snorkel AI", "Researchers from COLM, frontier labs, and universities compare work on datasets, benchmarks, evaluations, and model-card methodology over a small closing gathering.", "Snorkel AI hosting and an explicitly research-heavy room offset the social format and hidden attendance.", "Registration is open with approval; space is limited.", "https://luma.com/ozv5033v", "8.7/10", "Consider"),
      ],
    },
    {
      date: "Friday, October 9",
      verdict: "An engineer debate plus a hardware-builder room",
      note: "Qdrant and Neo4j lead a participatory AI debate, while Hardware FYI offers a broader physical-systems fireside at the weekday floor.",
      events: [
        card("Hard Negatives: Engineers Debate Night", "6:30 PM - evening PT", "Manny's, 3092 16th St", "Qdrant and Neo4j", "Engineers and AI researchers split into one-on-one teams to debate contested technical questions such as whether open weights should be banned, with live audience voting.", "Qdrant and Neo4j hosting, an approval gate, limited capacity, and an explicitly technical audience make this a more substantive participatory room than a standard mixer.", "Registration is open with approval. Check-in starts at 6:30 PM and debates begin at 7:00 PM.", "https://luma.com/sf-meetup-oct26", "8.8/10", "Sign up now"),
        card("Hardware FYI: SF Tech Week Edition", "5:00 PM - evening PT", "Dogpatch Studios, 991 Tennessee St", "Hardware FYI", "A focused fireside covers emerging work at the intersection of AI, manufacturing, robotics, and product development before a hardware-industry gathering.", "A hardware-professional approval gate, limited attendance, and a 20,000-plus-reader technical community are good room signals, though speakers are still unannounced.", "Registration is open with approval for hardware professionals. Doors open at 5:00 PM; program details are still to come.", "https://luma.com/g5sdw0b6", "8.4/10", "Consider"),
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
