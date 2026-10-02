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
  checkedAt: "October 2, 2026",
  updatedAt: "October 2, 2026",
  windowLabel: "October 2, 2026 → October 16, 2026",
  featured: [
    {
      title: "State of AI Report 2026",
      date: "Thu, Oct 8",
      recommendation: "Sign up now",
      summary: "Air Street launches its ninth annual report with Wayve chief scientist Jamie Shotton.",
      link: "https://luma.com/soai",
    },
    {
      title: "AWS Community Day — AI Edition",
      date: "Tue, Oct 13",
      recommendation: "Sign up now",
      summary: "Eleven practitioner sessions and live agent-hackathon finals cover production AI from infrastructure through evals.",
      link: "https://luma.com/acba2610",
    },
    {
      title: "Open Together: AI Builders Unite",
      date: "Fri, Oct 16",
      recommendation: "Sign up now",
      summary: "Hugging Face, Ai2, Nous, LMSYS, Arcee, and Unsloth bring 887 open-model builders together for community demos.",
      link: "https://luma.com/OpenTogether",
    },
  ],
  days: [
    {
      date: "Friday, October 2",
      verdict: "One large devtools builder drinkup",
      note: "WorkOS brings API, devtools, and AI builders together after work; it is social, but unusually well targeted to the profile.",
      events: [
        card("SF Devtools Drinkup", "6:00 PM - 9:00 PM PT", "Southern Pacific Brewing, 620 Treat Ave", "WorkOS", "A large after-work gathering connects engineers building developer tools, APIs, infrastructure, and AI products.", "834 visible attendees and WorkOS hosting signal a deep devtools crowd, even though the format is more social than technical.", "Registration is open; attendees must be 21 or older.", "https://luma.com/drinkup-f26", "8.5/10", "Consider"),
      ],
    },
    {
      date: "Saturday, October 3",
      verdict: "Two standout weekend build-and-demo rooms",
      note: "Supabase's high-stakes hackathon leads, with a curated AI-commerce exhibition as the broader full-day alternative.",
      events: [
        card("Supabase Select 2026 Hackathon", "9:00 AM - 5:00 PM PT", "580 20th St, San Francisco", "Supabase", "Teams build and demo products with Supabase, Anthropic, Vercel, and Stripe tooling for a prize pool of up to $100,000 in platform credits.", "Official Supabase hosting, top-tier technical partners, substantial prizes, and a full build-and-demo day make this an exceptional weekend room.", "Event full; join the waitlist. The all-day build earns a substantive weekend exception.", "https://luma.com/select-2026-hackathon", "9.4/10", "Sign up now"),
        card("The AI Commerce Gallery — Hackathon", "9:00 AM - 9:00 PM PT", "Walt Disney Family Museum, San Francisco", "AI Valley and ZooWork", "A curated group of 100–150 builders develops and exhibits AI-commerce projects through working demos and gallery-style presentations.", "A 25–35-team cohort, finished-project format, curated attendance, and full-day program signal meaningful builder density.", "Sold out; join the waitlist. Approval is required, and the exact address is disclosed to approved attendees.", "https://luma.com/6bbloggr", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, October 4",
      verdict: "Open night",
      note: "Both primary calendars and the SF Tech Week fallback yielded only a 2:00 PM beginner app workshop, a 2:00 PM waitlisted cyberdeck session, sub-30 rooms, or generic founder socials; none cleared the Sunday timing and room-quality bars.",
      events: [],
    },
    {
      date: "Monday, October 5",
      verdict: "Two strong production-building rooms",
      note: "The waitlisted software-factories showcase leads, with n8n's hands-on MCP workflow build as the open alternative.",
      events: [
        card("Ship it & Sip it: Software Factories Night", "6:00 PM - 8:00 PM PT", "Corgi Cafe, 9 Claude Ln", "CopilotKit and partners", "Live demos examine agent software factories, production guardrails, and evals without slides or company pitches.", "658 visible attendees, a live-demo-only format, and a tightly scoped production-agent agenda make this the strongest room of the night.", "Event full; join the waitlist.", "https://luma.com/copilo-y6wx", "9.4/10", "Sign up now"),
        card("Automate Your SF Tech Week with n8n", "6:00 PM - 9:00 PM PT", "Digital Jungle, 972 Mission St", "n8n community", "A laptop workshop guides participants through connecting n8n and Claude Code over MCP to leave with a working automation.", "Attendance is now hidden, but official n8n hosting, a hands-on build requirement, and a concrete take-home workflow are strong room signals.", "Registration is open. Bring a laptop and an n8n account; Claude Code is optional.", "https://luma.com/n8n-ntlt", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, October 6",
      verdict: "Three strong production-AI rooms",
      note: "Heavybit's agent-infrastructure incident stories lead, followed by a waitlisted live-demo night and an open hands-on documentation workshop.",
      events: [
        card("Haunted Agent + Infra Horror Night", "6:30 PM - 8:30 PM PT", "SVB Experience Center, 532 Market St", "Heavybit, Tailscale, and SVB", "Three short incident stories cover inference theft and token fraud, agent failures under incident command, and hard data problems in AI systems.", "Heavybit and Tailscale hosting, speakers from NVIDIA and a former Google DeepMind data leader, and a no-pitches format create a focused infrastructure room.", "Registration is open with approval. Doors open at 6:30 PM; talks and Q&A follow.", "https://luma.com/infra-horror-night", "9.4/10", "Sign up now"),
        card("SF Tech Week AI Demo Night", "5:00 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "ClickHouse, Artie, LlamaIndex, Langfuse, and LibreChat", "Eight to ten builders demo AI products, infrastructure, and developer tools live without slide decks or pitch-competition framing.", "Five respected AI infrastructure hosts, a demos-only format, and an explicit developer and builder audience make this a high-signal room.", "Event full; join the waitlist. Demos begin at 5:45 PM.", "https://luma.com/clickh-zngw", "9.3/10", "Sign up now"),
        card("Practical AI for Documentation", "6:30 PM - 9:00 PM PT", "Mindspace, 575 Market St", "Write the Docs Bay Area and GitBook", "Airbyte's technical-writing lead explains a self-healing documentation system for 600-plus connectors before a hands-on GitBook AI workshop.", "115 visible attendees, a production case study, a laptop workshop, and a technical-writer audience create a credible applied room.", "Registration is open; bring a laptop for the workshop.", "https://luma.com/mngid6og", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 7",
      verdict: "Three exceptional AI infrastructure rooms",
      note: "Open-source models and inference lead, with a rigorous production-data research club and a focused VLA-training session as excellent alternatives.",
      events: [
        card("Open Source AI Stack: Models, Inference, and Agent Harness", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "Nous Research, AWS Builder Loft, LMSYS, Novita AI, and partners", "Leaders from Artificial Analysis, Nous Research, RadixArk, and Vercel discuss the open-source model, inference, post-training, gateway, and agent-harness stack.", "415 visible attendees and named practitioners building Hermes Agent, Vercel AI SDK and Gateway, inference benchmarks, and post-training systems make this a deep technical room.", "Registration is open with approval. Government-issued physical photo ID is required.", "https://luma.com/novita-oas6", "9.6/10", "Sign up now"),
        card("Frontier Research Club: Agents in Production — The Data Layer", "5:30 PM - 8:30 PM PT", "Pebblebed, private SF address", "Frontier Research Club and Pebblebed", "Two research talks and a long-form discussion examine agent state, memory, database access, authorization, isolation, evaluation, and rollback in production systems.", "A curated dinner, papers shared in advance, and an audience drawn from frontier labs, Stanford, Berkeley, and production infrastructure teams signal unusual rigor.", "Registration is open with approval; capacity is limited.", "https://luma.com/82gz0ggu", "9.3/10", "Sign up now"),
        card("Learning From Human Video & Scaling VLA Training", "6:00 PM - 9:00 PM PT", "Bright Data, 625 2nd St", "HackerSquad and Bright Data", "A new physical-AI series focuses on sourcing human demonstration video, scaling vision-language-action training, and identifying the next robotics data bottleneck.", "190 visible attendees and a deliberately narrow audience of robotics founders and VLA or world-model builders clear the room-quality bar.", "Registration is open.", "https://luma.com/learning-from-human-video", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 8",
      verdict: "Three high-signal frontier and production-AI rooms",
      note: "Air Street's annual State of AI launch leads, with a production-agent authorization deep dive and a 20-seat post-training and evals dinner as strong alternatives.",
      events: [
        card("State of AI Report 2026 — SF Launch", "5:30 PM - 9:30 PM PT", "Private address, San Francisco", "Air Street Capital and Nathan Benaich", "Nathan Benaich presents the ninth annual State of AI Report, followed by Wayve chief scientist Jamie Shotton and another fireside conversation.", "Air Street's established report, a named frontier-autonomy scientist, and an approval gate create the strongest research-and-strategy room of the night.", "Registration is open with approval. Bring a valid photo ID.", "https://luma.com/soai", "9.7/10", "Sign up now"),
        card("Agents in Production: The Auth Stack for AI", "5:00 PM - 7:30 PM PT", "Industrious, 345 California St", "Agentic Fabriq and Open Future Forum", "A technical discussion covers agent identity, delegated authorization, least-privilege access, token lifecycles, secrets, auditability, and human approval workflows.", "Attendance is hidden, but the tightly scoped production-security agenda and explicit CTO, engineering, security, and platform audience are strong signals.", "Registration is open with approval.", "https://luma.com/obrx792x", "9.1/10", "Sign up now"),
        card("Beyond the Base Model: Post-Training, Evals & Agentic Systems", "6:00 PM - dinner PT", "The Progress, 1525 Fillmore St", "Prolific and AI Circle", "A private fireside with Microsoft Research and Prolific examines post-training, human versus automated evaluation, full agent trajectories, and learning from system failures.", "Only 20 approved researchers, engineers, and technical leaders are admitted, with no stage or pitches, creating a genuinely candid room.", "Registration is open with approval; plus-ones also require approval.", "https://luma.com/prolific-j12n", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 9",
      verdict: "An engineer debate plus a hardware-builder room",
      note: "Qdrant and Neo4j lead a participatory AI debate, while Hardware FYI offers a broader physical-systems fireside at the weekday floor.",
      events: [
        card("Hard Negatives: Engineers Debate Night", "6:30 PM - 9:00 PM PT", "Manny's, 3092 16th St", "Qdrant and Neo4j", "Engineers and AI researchers split into one-on-one teams to debate contested technical questions such as whether open weights should be banned, with live audience voting.", "99 visible attendees, Qdrant and Neo4j hosting, limited capacity, and an explicitly technical audience make this a substantive participatory room.", "Registration is open. Check-in starts at 6:30 PM and debates begin at 7:00 PM.", "https://luma.com/sf-meetup-oct26", "8.8/10", "Sign up now"),
        card("Hardware FYI: SF Tech Week Edition", "5:00 PM - 9:00 PM PT", "Dogpatch Studios, 991 Tennessee St", "Hardware FYI", "A focused fireside covers emerging work at the intersection of AI, manufacturing, robotics, and product development before a hardware-industry gathering.", "Limited attendance and a 20,000-plus-reader technical community are good room signals, though speakers are still unannounced.", "Sold out; join the waitlist. Doors open at 5:00 PM.", "https://luma.com/g5sdw0b6", "8.4/10", "Consider"),
      ],
    },
    {
      date: "Saturday, October 10",
      verdict: "One exceptional production-agent workshop day",
      note: "A four-workshop lab for experienced engineers is the only option that clears both the technical-depth and room-quality bars; the other visible hackathon is startup-pitch focused.",
      events: [
        card("Production Agent Lab", "10:00 AM - 4:00 PM PT", "Private address, Mission District", "tokens& with Comet, Nimble, and Nexla", "Four hands-on workshops let engineers build, test, and debug production-agent patterns, including live-web research, reliable agent loops, observability, and practical data infrastructure.", "A strictly limited approval-gated room for mid-to-senior engineers, named FDE and AI-research instructors, strong infrastructure partners, and live closing demos justify the full-day weekend exception.", "Registration is open with approval. The page header lists 10:00 AM–8:00 PM, but the published agenda ends at 4:00 PM.", "https://luma.com/oct10lab", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, October 11",
      verdict: "One strong multimodel build-and-demo day",
      note: "BuilderBase's full-day technical hack now has a substantial room; the other visible options are recruiting, investor, founder-social, or generic startup-pitch rooms.",
      events: [
        card("Multi Model Hackathon", "9:00 AM - 6:00 PM PT", "Frontier Tower, 995 Market St", "BuilderBase, Women in AI Club, and partners", "Teams build a useful product that combines multiple models, providers, agents, or modalities, then explain why the system could not work as well with a single model and demo it live.", "145 visible attendees, a full-day build-test-demo format, an explicit engineer and AI-practitioner audience, and agent infrastructure sponsors make this a substantive room.", "Registration is open with approval.", "https://luma.com/builde-pozq", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, October 12",
      verdict: "One focused frontier-hardware room",
      note: "Syntro's robotics and hardware operator gathering is social, but the 51-person room is targeted enough to clear the Consider floor.",
      events: [
        card("Long Lead Time: A Hardware Happy Hour", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Syntro", "Robotics, chip, rocket, and frontier-hardware founders, engineers, and operators trade supplier lessons and production war stories.", "51 visible attendees and a sharply defined physical-systems audience make this more useful than a generic conference mixer, despite the no-program format.", "Registration is open; exact address is disclosed after registration.", "https://luma.com/j0d8zw82", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, October 13",
      verdict: "Two excellent production-agent rooms",
      note: "AWS Community Day leads with an unusually deep full-day program, while Databricks hosts an after-work agent-observability meetup for production practitioners.",
      events: [
        card("AWS Community Day — AI Edition", "9:30 AM - 7:00 PM PT", "AWS Builder Loft, 525 Market St", "AWS Community Bay Area", "Eleven practitioner-led sessions cover production agents, self-hosted LLMs, AgentOps simulations, runtime steering, guardrails, agentic lakehouses, and AI-assisted development before eight hackathon finalists demo live.", "A free community-run program for 200-plus builders, named speakers from AWS, Snorkel AI, Dolby, UC Berkeley, and production teams, and a no-vendor-pitches policy justify the full-day exception.", "Registration is open on Luma and must also be completed on the AWS Builder Loft site. Bring a physical photo ID.", "https://luma.com/acba2610", "9.5/10", "Sign up now"),
        card("Agentic + AI Observability Meetup SF", "5:00 PM - 8:00 PM PT", "Databricks, private SF address", "Agentic + AI Observability", "Databricks engineers and agent practitioners examine production traces, failure modes, MLflow observability, evaluation loops, and multi-step agent workflows.", "A tightly scoped engineer audience, two technical talks, a named Databricks senior software engineer, and an approval gate make this a strong after-work alternative.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/Agentic_AI_10-13", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 14",
      verdict: "Two substantive all-day build rooms",
      note: "Vercel and Meta's focused agent-and-multimodal hackathon leads, with The Build as a broader ship-and-demo alternative.",
      events: [
        card("Fast Forward", "10:00 AM - 6:00 PM PT", "Private address, Union Street", "Vercel, Meta, and Neon", "Builders ship agents, multimodal AI apps, or VR experiences through two hacking blocks before judge walkthroughs and top-team demos.", "122 visible attendees, official Vercel hosting, Meta and Neon support, a concrete build agenda, and live demos make this the strongest room of the day.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/fastforwardhack", "9.4/10", "Sign up now"),
        card("The Build: Hackathon", "9:30 AM - 5:30 PM PT", "Private address, San Francisco", "Devnovate", "Engineers, AI builders, product leads, and data scientists spend a full day turning an idea into a working AI, agent, devtool, workflow, or data product and demo it to judges.", "The approval gate, ship-and-demo requirement, and open-source RocketRide AI meta-harness partnership outweigh the broad theme and justify a substantive weekday exception.", "Registration is open with approval. The page header ends at 5:30 PM, while the published agenda runs to 7:00 PM.", "https://luma.com/kwnikzpo", "8.3/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 15",
      verdict: "A production-agent orchestration conference",
      note: "Orkes Shift is a rare single-day engineering room focused on durable execution rather than generic agent demos.",
      events: [
        card("Orkes Shift", "10:00 AM - 6:30 PM PT", "Private address, downtown San Francisco", "Orkes", "Engineering teams examine how to combine deterministic workflows and nondeterministic agents, including long-running state, retries, human approvals, failure handling, coding-agent runtimes, and production migrations.", "140 visible attendees, a capped approval gate, an explicit engineers-and-architects audience, and production examples built on the open-source Conductor lineage make this a high-signal room.", "Registration is open with approval; exact address is disclosed to approved attendees.", "https://luma.com/zj2gat16", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, October 16",
      verdict: "One exceptional open-model builder gathering",
      note: "Hugging Face and a remarkable set of open-model labs bring a very large technical community together for demos and hands-on participation.",
      events: [
        card("Open Together: AI Builders Unite", "6:00 PM - 12:00 AM PT", "The Midway, 900 Marin St", "Hugging Face, Ai2, Nous Research, LMSYS, Arcee AI, and Unsloth", "Open-model builders gather for community demos, project showcases, and direct exchange across model research, training, inference, and tooling ecosystems.", "887 visible attendees plus hosts behind Hugging Face, Ai2, Nous, LMSYS, Arcee, and Unsloth make this the highest-density open-source AI room in the window.", "Registration is open. Community-demo applications close October 2, but general attendance remains available.", "https://luma.com/OpenTogether", "9.6/10", "Sign up now"),
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
