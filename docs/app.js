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
  checkedAt: "August 14, 2026",
  updatedAt: "August 14, 2026",
  windowLabel: "August 14, 2026 → August 28, 2026",
  featured: [
    {
      title: "Agents are changing the web with Parag Agrawal",
      date: "Thu, Aug 20",
      recommendation: "Sign up now",
      summary: "Baseten and Parallel pair a serious technical speaker with a focused discussion on agent-native search and production infrastructure.",
      link: "https://luma.com/sy0mt1m4",
    },
    {
      title: "Demo Night SF: Ship AI Apps",
      date: "Thu, Aug 27",
      recommendation: "Sign up now",
      summary: "Anthropic, Postman, Supabase, and Vercel put live AI application demos and a very large builder audience in one room.",
      link: "https://luma.com/august-SF-supabase-vercel-postman",
    },
    {
      title: "SkyPilot AI Infra Meetup with VAST Data",
      date: "Tue, Aug 18",
      recommendation: "Sign up now",
      summary: "SkyPilot, VAST Data, NVIDIA, SGLang, and Anyscale make this the window's deepest AI-systems room.",
      link: "https://luma.com/hgom4lk2",
    },
  ],
  days: [
    {
      date: "Friday, August 14",
      verdict: "One live best-available option",
      note: "The larger vibe-coding workshop is the only remaining room that clears the attendance and timing filters.",
      events: [
        card("Crashout Labs: What is Vibe Coding?", "6:00 PM PT", "545 Sutter St, San Francisco", "Crashout Labs", "A live build-oriented session is more substantive than tonight's founder socials and generic mixers.", "162 visible attendees gives this late-added workshop a real builder audience.", "Already underway. The framing may skew broad, so prioritize demos and technically experienced attendees.", "https://luma.com/bpd634y7", "7.2/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 15",
      verdict: "One credible best-available option",
      note: "A formal lecture offers substance and a real audience, though it is philosophical rather than a builder room.",
      events: [
        card("The Problem Of Humanity", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "The Students with Wolf Tivy", "A serious lecture on posthumanity and the moral frame around AI offers more intellectual depth than the day's founder and beginner events.", "63 visible attendees and a formal discussion format should produce a small, engaged room rather than a generic mixer.", "Tickets are $30. The politics may be polarizing, and the event is not focused on building or deploying AI systems.", "https://luma.com/wbqgpxm8", "6.7/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 16",
      verdict: "Not recommended - best available",
      note: "The only high-signal room starts one hour earlier than the weekend preference, but the speaker and audience justify keeping it visible.",
      events: [
        card("Astronaut Interview: Soyeon Yi, South Korea's First Person in Space", "2:00 PM PT", "Fort Mason, San Francisco", "Alder Riley", "A live interview with a working astronaut is a rare science-and-technology program with genuine subject-matter depth.", "169 visible attendees and waitlist status indicate strong demand and a credible room.", "Waitlist only. It starts before the 3:00 PM weekend preference and is space/science rather than applied AI.", "https://luma.com/bysqxy5w", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, August 17",
      verdict: "Three strong builder options",
      note: "WorkOS and Workato anchor two hands-on rooms, with a technical hardware talk as a quieter alternative.",
      events: [
        card("Moonlighting with Gemini + Exa", "5:30 PM - 8:30 PM PT", "WorkOS, 660 Market St", "Build Club, Gemini, Exa, and WorkOS", "A selective three-hour build lab at WorkOS offers direct contact with researchers and engineers shipping agents, devtools, and research prototypes.", "310 visible attendees plus the WorkOS venue and application review are strong builder-room signals.", "Registration is open with approval. Build Club can skew younger and more founder-heavy than the venue's usual crowd.", "https://luma.com/buildclub-ua0n", "9.3/10", "Sign up now"),
        card("Move it Forward: Workato × AI Valley", "5:00 PM - 8:00 PM PT", "Workato, San Francisco", "Workato, AI Valley, and Base44", "A structured build session with Workato experts should surface real enterprise automation and agent-integration work.", "52 visible attendees, direct Workato hosting, approval, and a concrete work-session format are credible quality signals.", "Registration is open with approval. The community may be broad, and a virtual intro the night before is optional.", "https://luma.com/aivalley-tdlu", "8.8/10", "Sign up now"),
        card("Neuromorphic Computing: The Brain's Lessons for Reducing AI Energy Consumption", "5:00 PM - 7:00 PM PT", "9Zero Climate Innovation Hub, 350 California St", "9Zero and Guthrie Gintzler", "A researcher with real Intel Loihi deployment experience offers rare technical depth on energy-efficient AI hardware.", "Attendance is hidden, but 9Zero's members-only setting and the named Virginia Tech speaker are credible expert-room signals.", "Registration is open with approval. The talk is hardware and climate focused rather than agent or product oriented.", "https://luma.com/vazlk2kw", "8.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 18",
      verdict: "Three exceptional options",
      note: "Production evals, AI compute, and agent harnesses make this the strongest infrastructure night in the window.",
      events: [
        card("The AI Dev Stack: Beyond Code", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Antimetal, Fireworks, Braintrust, and Browserbase", "Evals as training data, production-agent debugging, browser infrastructure, and operational signal are unusually well matched to applied AI work.", "Four strong infrastructure companies and solutions-engineering speakers should concentrate AI platform builders and technical operators.", "Registration is open with approval. Attendance is hidden and the program is lightning-talk based.", "https://luma.com/ai-dev-stack", "9.7/10", "Sign up now"),
        card("SkyPilot AI Infra Meetup with VAST Data", "5:30 PM - 8:30 PM PT", "DG717, 717 Market St", "SkyPilot, VAST Data, NVIDIA, SGLang, and Anyscale", "RL infrastructure, agent sandboxes, storage, training, and inference make this a highly technical production-compute room.", "294 visible attendees and speakers from SkyPilot, NVIDIA, VAST, and SGLang imply exceptional systems and research-engineering density.", "Registration is open with approval. It is infrastructure-heavy and will reward technical fluency.", "https://luma.com/hgom4lk2", "9.5/10", "Sign up now"),
        card("The Agent Harness Workshop", "5:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St", "TrueFoundry, HackerSquad, and AWS Builder Loft", "Routing, MCP access, evals, tracing, retries, guardrails, quotas, and governance are the concrete production problems this profile prioritizes.", "55 visible attendees, invite-only positioning, and a hands-on AWS session should create a focused platform and backend engineering room.", "Registration is open with approval. Bring a laptop; this is a working session rather than a polished conference.", "https://luma.com/agent-harness-workshop", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, August 19",
      verdict: "Three exceptional options",
      note: "Post-training research, enterprise deployment, and agent memory cover research and production equally well.",
      events: [
        card("Researcher Night: Grace Gong x Patronus AI", "5:30 PM - 7:30 PM PT", "Private address, San Francisco", "Patronus AI and Grace Gong", "Spotlight talks on post-training, evals, multimodal world models, reward modeling, and computer-use agents are almost perfectly aligned.", "Patronus AI, an approval gate, and a researcher-specific agenda should concentrate research engineers and serious model builders.", "Registration is open with approval. Attendance is hidden, the event is filmed, and sponsor contact sharing is disclosed.", "https://luma.com/c3jansgp", "9.5/10", "Sign up now"),
        card("Bring Your Own Cloud: Running Software in Customer Environments", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Rootly, Twingate, and Tensor9", "BYOC architecture, secure access, and day-two operations map directly to enterprise AI deployment and FDE-style customer constraints.", "Rootly and Twingate plus senior infrastructure speakers should attract platform engineers, technical product leaders, and enterprise operators.", "Registration is open with approval until 3:00 PM that day. Attendance is hidden and the AI angle is operational rather than model-centric.", "https://luma.com/2709f44u", "9.2/10", "Sign up now"),
        card("Agent Memory Hack Night | Mastra x Elasticsearch", "5:00 PM - 9:00 PM PT", "Elastic, 33 New Montgomery St", "Mastra and Elastic", "A four-hour build night centered on agent memory, recency, retrieval, and continuity offers direct hands-on experience with a core agent problem.", "142 visible attendees and recognized framework and search hosts should produce a practical mix of developers, data practitioners, and product builders.", "Registration is open. All skill levels are welcomed, so depth will vary, but the build format is substantive.", "https://luma.com/mastra-hack", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 20",
      verdict: "Three exceptional options",
      note: "Baseten, open-model engineering, and a research paper club create a rare mix of strategy and technical depth.",
      events: [
        card("Agents are changing the web with Parag Agrawal", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Baseten and Parallel Web Systems", "A technical deep dive on agent-native web search with Parallel's founder and Baseten's model-training lead is a standout frontier infrastructure conversation.", "232 visible attendees and direct Baseten hosting should attract model engineers, product leaders, and teams building demanding production agents.", "Registration is open with approval. The interview format leaves less hands-on time than a workshop.", "https://luma.com/sy0mt1m4", "9.7/10", "Sign up now"),
        card("Open Models, Production Agents", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "OpenHands, Ollama, and FriendliAI", "Open versus closed coding models, cost, latency, governance, and running autonomous agents in production are directly on target.", "Named leaders from OpenHands, Ollama, and FriendliAI should create a high-quality CTO, platform, and AI-engineering room.", "Registration is open with approval. It is explicitly director-and-above and includes host marketing consent.", "https://luma.com/o9tv62y5", "9.4/10", "Sign up now"),
        card("AI Research Paper Club #002: The Future of Diffusion Models", "5:30 PM - 8:00 PM PT", "Bright Data loft, San Francisco", "TensorWave, DeCart, Leverage, and Compute Exchange", "A small research discussion on training cost, inference latency, and the future of diffusion architecture should reward technical depth.", "Attendance is hidden, but an approval gate and explicit PhD, research, and applied-ML audience are strong signals.", "Registration is open with approval. The event copy lists 6:00–8:30 PM while Luma shows 5:30–8:00 PM, so confirm timing after approval.", "https://luma.com/AI002", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 21",
      verdict: "Two credible curated options",
      note: "A small applied-AI dinner is the best room; computational theater is the creative-technology alternative.",
      events: [
        card("Frontier Table: San Francisco", "7:30 PM - 10:00 PM PT", "Private address, San Francisco", "Obvious", "A small-table discussion about durable companies, agent-scale operations, and separating real AI leverage from hype fits the preferred salon format.", "Attendance is hidden, but Obvious is an applied AI research lab and the approval-gated dinner should support unusually deep peer conversation.", "Registration is open with approval. The room is founder-heavy, so treat it as a curated strategy dinner rather than a technical meetup.", "https://luma.com/frontierTableSF", "8.2/10", "Consider"),
        card("A Night of Computational Theater", "6:30 PM - 8:00 PM PT", "tiat, 151 Powell St", "tiat and Halim Madi", "A live exploration of language, computers, and performance offers an inventive product-and-culture counterpoint to standard AI networking.", "Attendance is hidden, but tiat's repeat art-and-technology community and open-mic structure favor substantive creative-technology exchange.", "Suggested donation is $20. This is AI-adjacent and artistic rather than a room for enterprise builders.", "https://luma.com/computertheater", "7.1/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 22",
      verdict: "One credible best-available option",
      note: "An AI-safety media program has real scale and substance, though it is outside the usual technical-builder lane.",
      events: [
        card("Create for Good", "5:30 PM - 10:00 PM PT", "Palace of Fine Arts Theatre, 3301 Lyon St", "80,000 Hours, From Fauna, and Giving What We Can", "Film premieres and discussion about keeping powerful AI safe provide a substantive public-interest AI program on an otherwise thin evening.", "202 visible attendees and established effective-altruism organizations should bring policy, media, nonprofit, and some technical AI-safety participants.", "Tickets are $30 and include dinner. The creator-economy and philanthropy framing is less aligned with engineering and product networking.", "https://luma.com/ghnew59o", "7.2/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 23",
      verdict: "Open night",
      note: "No SF in-person event survived the 3:00 PM start, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
      events: [],
    },
    {
      date: "Monday, August 24",
      verdict: "One credible best-available option",
      note: "The official Step SF satellite list surfaces one hands-on personal-agent room at Frontier Tower.",
      events: [
        card("ClawCamp Campfire", "6:00 PM PT", "Frontier Tower, 995 Market St", "ClawCamp and Frontier Tower SF", "Hands-on personal-agent setup, orchestration, memory, and advanced workflow breakouts are more concrete than the day's founder events.", "The official Step SF hub confirms the date, time, and Frontier Tower venue; recurring ClawCamp editions have drawn roughly 90 attendees.", "The satellite listing does not expose a separate registration link yet, so the button opens the official Step SF hub. Some beginner content is mixed with advanced breakouts.", "https://luma.com/StepSF26", "7.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 25",
      verdict: "Two strong applied-AI options",
      note: "AI infrastructure is the sharper room; the Tesla program offers broader demos across agents, robotics, and worktech.",
      events: [
        card("AI Data Center Night", "6:00 PM PT", "AngelList, San Francisco", "SFPlayground and Founders Cafe", "Compute, power, cooling, deployment software, and capital constraints make this a substantive look at the physical systems behind AI scale.", "38 visible attendees and a focused infrastructure agenda should support direct conversations with operators and technical executives.", "Registration is open. The host framing includes investors, but the topic and panel are infrastructure-first.", "https://luma.com/datacenterai", "8.1/10", "Sign up now"),
        card("Future of Work Pitch Night + Open Demos", "5:00 PM - 8:30 PM PT", "Tesla Showroom, 999 Van Ness Ave", "Ontology of Value, Step SF, and community partners", "Open demos span agentic AI, robotics, security, and worktech, giving this broad room more substance than a standard pitch mixer.", "379 visible attendees and a long published demo roster imply high product density.", "General admission remains open; pitching tickets are sold out. The event is founder-and-investor heavy, so prioritize demo tables over general networking.", "https://luma.com/yktcpve0", "7.7/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, August 26",
      verdict: "Three strong technical rooms",
      note: "Manufacturing AI, production-agent durability, and an AI-builder meetup provide excellent range.",
      events: [
        card("AI, X-rays, and Manufacturing: Lumafield Open House", "5:00 PM PT", "Lumafield Headquarters, San Francisco", "Lumafield", "A live industrial X-ray workflow and recording session puts applied AI next to real manufacturing hardware and inspection data.", "117 visible attendees and direct company hosting should attract hardware, robotics, manufacturing, and applied-ML builders.", "Registration is open. This is specialized industrial AI rather than general agent infrastructure.", "https://luma.com/uo8fmq5o", "8.8/10", "Sign up now"),
        card("Daytona AI Builders - SF", "5:30 PM PT", "North Beach, San Francisco", "Daytona and Descope", "A builder-focused night around AI development environments and authentication is a practical production-engineering fit.", "239 visible attendees plus two credible developer-infrastructure hosts indicate a dense technical room.", "Registration is open with approval. Expect a larger meetup rather than an intimate discussion.", "https://luma.com/ai-builders-sf-aug", "8.6/10", "Sign up now"),
        card("Durable AI: Agent Context is Everything", "5:30 PM PT", "Financial District, San Francisco", "Temporal and technical community hosts", "Context, durable execution, and agent reliability map directly to shipping long-running production systems.", "58 visible attendees and Temporal's direct involvement are strong platform-engineering signals.", "Registration is open. The room is smaller and more focused than the Daytona meetup.", "https://luma.com/durable-ai-august", "8.5/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 27",
      verdict: "Three exceptional options",
      note: "An Anthropic-stack demo night leads, with OpenRouter strategy and foundation-model biology as focused alternatives.",
      events: [
        card("Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel", "5:30 PM PT", "CANOPY Jackson Square, San Francisco", "Anthropic, Postman, Supabase, Vercel, and Patricia Dugan", "Live application demos across a best-in-class AI and developer-tool stack make this the clearest builder room of the night.", "387 visible attendees and four strong platform partners should create exceptional applied-AI and devtools density.", "Registration is open with approval. The room will be large, so target demo teams and platform engineers.", "https://luma.com/august-SF-supabase-vercel-postman", "9.6/10", "Sign up now"),
        card("Who Will Own the Intelligence Layer?", "5:30 PM PT", "Financial District, San Francisco", "OpenRouter", "A focused OpenRouter discussion should get beyond model rankings into routing, market structure, and who controls the application-to-model layer.", "Attendance is hidden, but direct OpenRouter hosting and the precise strategic topic are strong room-quality signals.", "Registration is open with approval. Expect a strategy-heavy discussion rather than hands-on building.", "https://luma.com/openro-3qtx", "9.1/10", "Sign up now"),
        card("Building Resilient Systems in the Age of Agentic Development", "5:00 PM PT", "SPIN San Francisco", "Antithesis and technical community hosts", "Resilience and testing for increasingly agent-written systems is a concrete developer-infrastructure problem with immediate production relevance.", "31 visible attendees clears the room-size floor, and the focused systems topic should keep the audience technical.", "Registration is open. This is a smaller room and the agent angle is primarily software reliability.", "https://luma.com/antith-f2e9", "8.0/10", "Consider"),
      ],
    },
    {
      date: "Friday, August 28",
      verdict: "Open night",
      note: "No SF in-person event survived the 5:00 PM start, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
      events: [],
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
