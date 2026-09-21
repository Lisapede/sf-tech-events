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
  checkedAt: "September 21, 2026",
  updatedAt: "September 21, 2026",
  windowLabel: "September 21, 2026 → October 5, 2026",
  featured: [
    {
      title: "The Future of AI Elsewhere | Greeking Out in SF",
      date: "Mon, Sep 21",
      recommendation: "Sign up now",
      summary: "A rare closed-room AI conversation with Greece's prime minister and leaders from Sequoia, Runway, and frontier startups.",
      link: "https://luma.com/greekingoutSF",
    },
    {
      title: "Codex Community Meetup",
      date: "Tue, Sep 22",
      recommendation: "Sign up now",
      summary: "WorkOS and Parallel host live voice-driven coding-agent workflows for serious Codex builders.",
      link: "https://luma.com/5cewfkx1",
    },
    {
      title: "SF Systems: Research to Practice",
      date: "Thu, Sep 24",
      recommendation: "Sign up now",
      summary: "CMU and Berkeley researchers unpack AI-SQL inference and multimodal programming systems; the room is now waitlist-only.",
      link: "https://luma.com/mzkxb97z",
    },
  ],
  days: [
    {
      date: "Monday, September 21",
      verdict: "A rare AI-policy room plus a serious paper club",
      note: "A closed global-AI conversation leads, while Mox offers a smaller technical reading group on synthetic data and evaluation.",
      events: [
        card("The Future of AI Elsewhere | Greeking Out in SF", "6:00 PM - 8:30 PM PT", "Shack15, private SF address", "Endeavor Greece and The Hellenic Initiative", "A conversation on the direction of AI pairs Prime Minister Kyriakos Mitsotakis with leaders from Sequoia, Runway, Reflection AI, Resolve AI, Arena, and TechCrunch.", "300 visible attendees, an approval gate, a closed-room format, and an unusually strong frontier-founder roster make this an exceptional room.", "Event full; join the waitlist.", "https://luma.com/greekingoutSF", "9.6/10", "Sign up now"),
        card("90/30 AI Paper Reading Club", "7:00 PM - 10:00 PM PT", "Mox, 1680 Mission St", "90/30 and Mox", "A quiet reading hour and guided discussion unpack Simula's work on reasoning-driven synthetic-data generation and evaluation.", "50 visible attendees, a specific research paper, and a three-hour read-and-discuss format make this a substantive small-room alternative.", "Registration is open. Quiet reading runs 7:00–8:00 PM, followed by discussion.", "https://luma.com/t2ghhif8", "8.5/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, September 22",
      verdict: "Two excellent coding-agent and robotics rooms",
      note: "A WorkOS-backed Codex voice session leads, followed closely by live robotics demos and embodied-AI deployment discussion.",
      events: [
        card("Codex Community Meetup — Voice Workflows", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Codex SF, WorkOS, and Parallel Web Systems", "Live demos show builders using voice to launch coding tasks, steer agents, monitor progress, and coordinate several work threads without returning to the keyboard.", "394 visible attendees, WorkOS hosting, and an audience explicitly centered on serious coding-agent practice create a focused technical room.", "Event full; join the waitlist.", "https://luma.com/5cewfkx1", "9.5/10", "Sign up now"),
        card("Robotics Demos & Meet", "5:00 PM - 9:00 PM PT", "Bright Data, 625 2nd St", "Bright Data, HackerSquad, and Devang Adhyaru", "Live demos and a practitioner panel cover robot learning, VLA models, manipulation, simulation, teleoperation, infrastructure, and real-world deployment.", "271 visible attendees, an approval gate, a live-demo format, and an explicit researcher and engineer audience make this a strong embodied-AI room.", "Registration is open with approval. The 5:00 PM start meets the weekday floor.", "https://luma.com/bright-hboi", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 23",
      verdict: "Two strong applied-agent rooms",
      note: "Twilio's agentic communications build leads, with a hands-on Langfuse observability training as the smaller technical alternative.",
      events: [
        card("Twilio Assemble SF: The Future of Comms + AI", "5:00 PM - 9:30 PM PT", "Studio by Tishman Speyer, 365 Toni Stone Xing", "Twilio and HackerSquad", "A technical talk on the communication backbone for agents leads into a hands-on interactive build challenge using Twilio's AI product stack.", "298 visible attendees, Twilio's developer team, a substantive build block, and a strong applied-AI audience create an excellent room.", "General admission sold out, but free second-wave tickets remain available until 2:00 PM on event day.", "https://luma.com/kwdnwg1g", "9.3/10", "Sign up now"),
        card("Hands-on Training: Agent Observability with Langfuse", "5:15 PM - 8:15 PM PT", "Mindspace, 575 Market St", "ClickHouse Events and Langfuse", "A two-hour laptop workshop walks through tracing, debugging, and improving a working AI application with Langfuse.", "91 visible attendees, required tooling prerequisites, a real sample application, and hands-on instruction distinguish this from beginner-level AI programming.", "Registration is open. Bring a laptop, a Langfuse account or local Docker deployment, and an LLM API key.", "https://luma.com/gp4dehl2", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 24",
      verdict: "Three exceptional AI systems rooms",
      note: "CMU and Berkeley research-to-practice talks lead a large agents-and-APIs meetup and Baseten's production-resilience session.",
      events: [
        card("SF Systems: Research to Practice", "5:30 PM - 8:30 PM PT", "LatchBio, 185 Berry St", "SF Systems Club and LatchBio", "CMU's Shreya Shankar presents Quail's AI-SQL inference engine, followed by Berkeley's Parker Zeigler on interactive multimodal programming and compiler foundations.", "350 visible attendees, two unusually concrete research talks, and a systems-focused community make this the window's strongest technical room.", "Event full; join the waitlist.", "https://luma.com/mzkxb97z", "9.8/10", "Sign up now"),
        card("Agents & APIs SF Developer Meetup", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "Postman Developer Events", "Canva, smol machines, and Scope practitioners present production patterns for MCP design surfaces, branchable cloud workloads, and agent infrastructure.", "393 visible attendees, a developer-only focus, and multiple named implementation talks create an excellent applied room.", "Registration is open. Doors open at 5:15 PM.", "https://luma.com/Sept-SF-Agents-APIS-meetup", "9.6/10", "Sign up now"),
        card("Building Active-Active, Multi-Cloud Systems", "6:00 PM - 8:00 PM PT", "Baseten, 560 Davis St", "Baseten", "Baseten's head of infrastructure covers routing, consistency, failure recovery, cost, and practical patterns behind resilient multi-cloud AI systems.", "123 visible attendees, a named infrastructure leader, and a production case study aimed at engineering leaders create a focused, high-trust room.", "Registration is open with approval.", "https://luma.com/rgj99uu9", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 25",
      verdict: "One credible AI-for-social-good showcase",
      note: "Google hosts finished projects from a 50-person women-builders hackathon; the public program starts at the weekday floor.",
      events: [
        card("AI for Social Good: San Francisco Presentations & Reception", "4:45 PM - 8:00 PM PT", "Google, private SF address", "Ruth AI and Google", "Selected teams from a 50-woman daytime hackathon present AI tools built for real social challenges before judges and a technical invited audience.", "Attendance is hidden, but Google hosting, finished-project presentations, a substantive builder cohort, and an approval gate are strong signals.", "Registration is open with approval. Doors open at 4:45 PM; the program begins at 5:00 PM, meeting the weekday floor.", "https://luma.com/x2c2zl9p", "8.7/10", "Sign up now"),
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
        card("Agents on a Leash, Products on Trial | AI Show and Tell", "6:00 PM - 8:30 PM PT", "GitHub, 88 Colin P Kelly Jr St", "AI Show and Tell and Global AI Community", "Four short technical talks cover user-level agent authorization, DSPy and GEPA optimization, agent infrastructure, and product surfaces designed for agents.", "64 visible attendees, GitHub hosting, named speakers from ScaleKit, DSPy, Blaxel, and Microsoft, and a demo-forward format clear the normal room threshold.", "Registration is open. Entry is first come, first served even with registration.", "https://luma.com/wx7493ut", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 29",
      verdict: "One exceptional but expensive conference kickoff",
      note: "The AI Conference's capped Day ZERØ combines technical workshops, a live build, and a 5:30 PM mixer, but the kickoff is now sold out.",
      events: [
        card("The AI Conference 2026 — Day ZERØ", "9:00 AM - 7:00 PM PT; mixer at 5:30 PM", "Pier 48, Mission Rock", "The AI Conference", "A capped kickoff offers 90-minute workshops on production agents, eval environments, private multimodal systems, and AI strategy, plus a live Hack Day and evening mixer.", "The room is capped at 350 senior builders and leaders, with named technical sessions, 120-plus conference speakers, and a strong infrastructure partner set.", "Day ZERØ is sold out. Two-day conference passes remain, but they do not include this kickoff.", "https://aiconference.com/dz/", "9.0/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, September 30",
      verdict: "Two excellent production-agent rooms",
      note: "E2B, Fireworks, and Braintrust lead with agent infrastructure; Chime's practitioner analytics roundtable is a strong second choice.",
      events: [
        card("STACKED: Sandboxes, Inference, & Observability", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "E2B, Fireworks AI, and Braintrust", "Three technical talks cover sandboxing untrusted agent code, serving models at agent-loop speed, and using evals and traces to measure whether agents improve.", "Attendance is hidden, but three top-tier infrastructure hosts, an approval gate, and a tightly scoped production-agent agenda are exceptional signals.", "Registration is open with approval.", "https://luma.com/e2b-0e34", "9.6/10", "Sign up now"),
        card("Agentic Analytics Meetup San Francisco", "5:30 PM - 9:30 PM PT", "Chime, 101 California St", "nao Labs and Chime", "Data teams compare deployed analytics agents built with Hex, nao, Claude, and in-house systems in a practitioner roundtable.", "94 visible attendees, Chime hosting, named senior data practitioners, and a real-world deployment focus make this a credible technical room.", "Registration is open.", "https://luma.com/qefxlyb4", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 1",
      verdict: "A frontier-systems salon plus an agent-interface demo night",
      note: "Formal oversight for advanced AI leads, with a WorkOS-hosted generative-UI room as the applied builder alternative.",
      events: [
        card("Foresight Institute and Convergent Research Salon: Launching Atlas and Oath", "5:30 PM - 8:30 PM PT", "The Fold, 3359 26th St", "Foresight Institute and Convergent Research", "A fireside examines formal methods for overseeing advanced AI and new institutions focused on epistemic security, model-weight security, and critical infrastructure.", "219 visible attendees, named technical organizations, a focused fireside and Q&A, and a high-trust research community make this an excellent frontier-systems room.", "Event full; join the waitlist.", "https://luma.com/foresight-lqwp", "9.3/10", "Sign up now"),
        card("Generative UI Night III", "5:30 PM - 8:00 PM PT", "WorkOS, San Francisco", "CopilotKit and WorkOS", "Live demos explore agent interfaces, MCP Apps, and agent-generated HTML without slide decks or product pitches.", "68 visible attendees, WorkOS hosting, and a demo-only format focused on emerging agent UX make this a strong applied-builder room.", "Registration is open.", "https://luma.com/copilo-ldpw", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 2",
      verdict: "One large devtools builder drinkup",
      note: "WorkOS brings API, devtools, and AI builders together after work; it is social, but unusually well targeted to the profile.",
      events: [
        card("SF Devtools Drinkup", "6:00 PM PT", "Southern Pacific Brewing, San Francisco", "WorkOS", "A large after-work gathering connects engineers building developer tools, APIs, infrastructure, and AI products.", "657 visible attendees and WorkOS hosting signal a deep devtools crowd, even though the format is more social than technical.", "Registration is open.", "https://luma.com/drinkup-f26", "8.5/10", "Consider"),
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
      note: "Both primary calendars and the SF Tech Week fallback yielded only 2:00 PM workshops or picnics and a tiny talent-focused dinner, so none cleared the Sunday 3:00 PM floor and room-quality bar.",
      events: [],
    },
    {
      date: "Monday, October 5",
      verdict: "Three strong agent-building and demo rooms",
      note: "A packed software-factories showcase leads, while WorkOS offers a smaller live-demo room and n8n hosts a hands-on MCP workflow build.",
      events: [
        card("Ship it & Sip it: Software Factories Night", "6:00 PM - 8:00 PM PT", "Corgi Cafe, San Francisco", "CopilotKit and partners", "Live demos examine agent software factories, production guardrails, and evals without slide decks or company pitches.", "250 visible attendees, a live-demo-only format, and a tightly scoped production-agent agenda make this the strongest room of the night.", "Event full; join the waitlist.", "https://luma.com/copilo-y6wx", "9.4/10", "Sign up now"),
        card("Demo Night @ WorkOS (October)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS", "Builders show working products live, with no slides and no company pitches, followed by technical conversation with the room.", "40 visible attendees, WorkOS hosting, an approval gate, and a demos-only format create a focused small-room alternative.", "Registration is open with approval.", "https://luma.com/demo-night-oct2026", "9.0/10", "Sign up now"),
        card("Build AI Workflows with n8n and Claude Code MCP", "6:00 PM - 9:00 PM PT", "Digital Jungle, San Francisco", "n8n community", "A laptop workshop guides participants through connecting n8n and Claude Code over MCP to leave with a working automation.", "68 visible attendees, a hands-on build requirement, and a concrete take-home workflow make this substantially stronger than a generic meetup.", "Registration is open. Bring a laptop.", "https://luma.com/n8n-ntlt", "8.8/10", "Sign up now"),
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
