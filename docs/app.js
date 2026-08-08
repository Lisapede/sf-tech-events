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
  checkedAt: "August 8, 2026",
  updatedAt: "August 8, 2026",
  windowLabel: "August 8, 2026 → August 22, 2026",
  featured: [
    {
      title: "The AI Dev Stack: Beyond Code",
      date: "Tue, Aug 18",
      recommendation: "Sign up now",
      summary: "Antimetal, Fireworks, Braintrust, and Browserbase put production evals, agent reliability, and web infrastructure in one unusually aligned room.",
      link: "https://luma.com/ai-dev-stack",
    },
    {
      title: "World Labs x BITKRAFT World Model Builders Meetup",
      date: "Mon, Aug 10",
      recommendation: "Sign up now",
      summary: "A capped World Labs fireside, spatial-intelligence demos, and a strong researcher-builder mix make this the rarest room in the window.",
      link: "https://luma.com/4hemhurn",
    },
    {
      title: "Agents are changing the web with Parag Agrawal",
      date: "Thu, Aug 20",
      recommendation: "Sign up now",
      summary: "Baseten and Parallel pair a serious technical speaker with a focused discussion on agent-native search and production infrastructure.",
      link: "https://luma.com/sy0mt1m4",
    },
  ],
  days: [
    {
      date: "Saturday, August 8",
      verdict: "One excellent room, already underway",
      note: "The strongest surviving SF option is a production-agent governance room with real platform and security depth.",
      events: [
        card("Accountable AI: Governing Autonomous Agents in Production", "3:00 PM - 7:00 PM PT", "Tesla San Francisco, 999 Van Ness Ave", "Accountable AI SF with Temporal, CopilotKit, Scalekit, and DSALTA", "Runtime policy, audit trails, identity, prompt-injection defenses, and durable execution make this directly relevant to production agent operations.", "149 visible attendees plus Temporal and CopilotKit should produce a dense mix of platform, security, product, and agent engineers.", "Event is underway and full; waitlist only. The Tesla test-drive component adds some promotional noise.", "https://luma.com/msf5yzmh", "9.1/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 9",
      verdict: "One intimate salon",
      note: "A tightly capped discussion is the only SF event that survives the weekend time and quality filters.",
      events: [
        card("Dinner Salon: AI as a Companion in Parenting", "4:00 PM - 6:00 PM PT", "Private address, San Francisco", "Moms who AI", "The guided salon format creates a thoughtful discussion about where AI adds value and where human judgment should remain primary.", "Six of seven seats are visible, but the tiny curated table should support unusually substantive conversation for a new community.", "One spot remains and approval is required. The audience is narrow and the topic is consumer-facing rather than technical infrastructure.", "https://luma.com/h71bv972", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Monday, August 10",
      verdict: "Three exceptional options",
      note: "World models, physical-AI infrastructure, and Notion-hosted policy create rare technical range.",
      events: [
        card("World Labs x BITKRAFT World Model Builders Meetup", "5:30 PM - 9:00 PM PT", "Founders, Inc., Fort Mason, San Francisco", "World Labs, BITKRAFT Events, and Founders, Inc.", "A World Labs fireside plus spatial-intelligence demos is unusually close to frontier research while staying concrete and builder-oriented.", "The approval gate and roughly 70-person cap should concentrate world-model researchers, applied engineers, and serious technical founders.", "Registration is open with approval. The venture host adds some investor energy, but the technical program is the main draw.", "https://luma.com/4hemhurn", "9.6/10", "Sign up now"),
        card("Frontier Signals #01: Infrastructure Behind Physical AI", "5:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St, San Francisco", "AWS Builder Loft, Bay Forge, and technical community hosts", "Compute, world models, real-time inference, orchestration, evals, and reliability make this a direct fit for infrastructure-minded AI builders.", "432 visible attendees and AWS Builder Loft should produce exceptional density across systems, robotics, platform, and research roles.", "Registration is open, but AWS requires a separate official registration and physical ID. Expect a large rather than intimate room.", "https://luma.com/ckpqzfae", "9.4/10", "Sign up now"),
        card("No Data Centers In My Backyard", "5:30 PM - 8:00 PM PT", "Notion HQ, San Francisco", "Jasmine Sun, Theo Bleier, and Notion", "A field report on the social and political constraints around AI infrastructure offers a useful product-and-policy counterpoint to pure technical talks.", "129 visible attendees and direct Notion hosting should bring thoughtful operators, policy-minded builders, and infrastructure leaders.", "Registration is open with approval. The room is policy-heavy and less useful for hands-on engineering conversations.", "https://luma.com/00ewrebj", "8.7/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 11",
      verdict: "Three strong technical rooms",
      note: "Data systems, humanoid robotics, and on-device AI provide three distinct builder communities.",
      events: [
        card("San Francisco Data Engineering Meetup with ClickHouse", "5:30 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "ClickHouse Events", "Observability and agent learning on ClickHouse connect data infrastructure directly to production AI systems.", "574 visible attendees plus ClickHouse and Mastra speakers create exceptional platform-engineering and applied-AI density.", "Event is full; join the waitlist. The scale will make targeted speaker and demo-team conversations more useful than general mingling.", "https://luma.com/clickh-z578", "9.3/10", "Consider"),
        card("Robot Launch Party - Robot & Sake", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Robotics researchers and builders from Stanford, UC Berkeley, and industry", "A live humanoid demo and research panel make this a concrete embodied-AI room rather than a generic hardware social.", "100 visible attendees and an approval gate should produce a manageable mix of researchers, roboticists, and applied engineers.", "Registration is open with approval; entry is first come, first served and physical ID is required. The sake theme makes it partly social.", "https://luma.com/5spumz2h", "8.8/10", "Sign up now"),
        card("AiOS Meetup - San Francisco Edition", "6:00 PM - 8:30 PM PT", "Convex, 444 De Haro St", "AiOS community with Convex and MiniMax", "On-device AI, Swift-powered robotics, and local video generation offer a practical platform-specific builder night.", "54 visible attendees plus Convex and MiniMax should support real demos and small-group technical conversations.", "Registration is open with approval. The Apple-platform focus is narrower than the ClickHouse room.", "https://luma.com/cboi9km9", "8.3/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, August 12",
      verdict: "Three exceptional options",
      note: "WorkOS, Heavybit, and Artificial Analysis make this one of the strongest nights in the full window.",
      events: [
        card("WorkOS Agent Night", "5:00 PM - 10:00 PM PT", "The Regency Ballroom, 1300 Van Ness Ave", "WorkOS and Michael Grinich", "Direct WorkOS hosting, live demos, and production-agent discussion are almost perfectly matched to enterprise AI and developer-tools interests.", "1,624 visible attendees should create unmatched density across AI builders, FDEs, technical PMs, and platform teams.", "Registration is open with approval. The enormous room will be noisy, so arrive with a targeted conversation list.", "https://luma.com/agent-night", "9.9/10", "Sign up now"),
        card("Software Factories Show & Tell", "5:30 PM - 7:30 PM PT", "Heavybit, 523 Octavia St", "Heavybit and HumanLayer", "Off-the-record demos about automating the software lifecycle, agent memory, and internal developer workflows are unusually substantive.", "Heavybit, HumanLayer, a no-pitch rule, and a five-minute show-and-tell format imply exceptional devtools quality despite hidden attendance.", "Event is full; join the waitlist. It is shorter and more selective than Agent Night.", "https://luma.com/software-factories", "9.5/10", "Consider"),
        card("Artificial Analysis: Inference, Measured", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "Artificial Analysis and The AI Collective", "Benchmark-driven discussion of inference latency, cost, quality, and provider selection maps directly to production AI platform decisions.", "548 visible attendees and the Artificial Analysis team should attract infrastructure engineers, model operators, and technical product leaders.", "Registration is open with approval. Speakers are still unannounced and the room will be large.", "https://luma.com/0ukamlad", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 13",
      verdict: "Three exceptional options",
      note: "Enterprise MCP, production agents, and agent observability make this a deeply practical engineering night.",
      events: [
        card("Enterprise MCP Lightning Talks", "5:30 PM - 8:30 PM PT", "Workato AI Hub, San Francisco", "Workato with the Agentic AI Foundation", "Real-world enterprise MCP demos and governance-focused orchestration are directly aligned with shipping agents inside large organizations.", "49 visible attendees, Equinix and Arcade.dev speakers, and Workato's focused hub imply a compact enterprise-builder room.", "Registration is open with approval. Attendance is modest, but the listing is new and the host quality compensates.", "https://luma.com/w3ckeuj7", "9.4/10", "Sign up now"),
        card("You.com AI Forum @ Databricks", "5:00 PM - 8:00 PM PT", "Databricks, San Francisco", "You.com, Databricks, Meta, and 1Password", "Production-agent reliability, evals, post-training, search, and trust span the exact product and infrastructure problems this planner favors.", "122 visible attendees plus senior technical leaders from You.com, Meta, Databricks, and 1Password create exceptional company density.", "Registration is open with approval. Founders Bay adds some founder energy, but the agenda is strongly technical.", "https://luma.com/bd59bmyj", "9.3/10", "Sign up now"),
        card("San Francisco Apache DataFusion Meetup", "5:30 PM - 8:30 PM PT", "Private SoMa address, San Francisco", "Apache DataFusion community with LangChain, Datadog, and InfluxData", "DataFusion, Rust data systems, and LangChain's database for agent observability make this a strong infrastructure-adjacent room.", "119 visible attendees and named engineers from LangChain and Datadog should produce excellent data-platform and agent-observability conversations.", "Registration is open. It is data infrastructure first and requires real-name registration plus ID.", "https://luma.com/gk3s2vib", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 14",
      verdict: "Not recommended",
      note: "No SF in-person event survived the 5:00 PM start, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
      events: [],
    },
    {
      date: "Saturday, August 15",
      verdict: "One credible best-available option",
      note: "A formal lecture offers substance and a real audience, though it is philosophical rather than a builder room.",
      events: [
        card("The Problem Of Humanity", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "The Students with Wolf Tivy", "A serious lecture on posthumanity and the moral frame around AI offers more intellectual depth than the day's founder and beginner events.", "36 visible attendees and a formal discussion format should produce a small, engaged room rather than a generic mixer.", "Tickets are $30. The politics may be polarizing, and the event is not focused on building or deploying AI systems.", "https://luma.com/wbqgpxm8", "6.7/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 16",
      verdict: "Not recommended",
      note: "No SF in-person event survived the 3:00 PM start, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
      events: [],
    },
    {
      date: "Monday, August 17",
      verdict: "Three strong builder options",
      note: "WorkOS and Workato anchor two hands-on rooms, with a technical hardware talk as a quieter alternative.",
      events: [
        card("Moonlight with Gemini - 3 Hour Hack", "5:30 PM - 8:30 PM PT", "WorkOS, 660 Market St", "Build Club, Gemini, and WorkOS", "A selective three-hour build lab at WorkOS offers direct contact with researchers and engineers shipping agents, devtools, and research prototypes.", "Attendance is hidden, but the WorkOS venue, application review, and explicit technical audience are strong quality signals.", "Registration is open with approval. Build Club can skew younger and more founder-heavy than the venue's usual crowd.", "https://luma.com/buildclub-ua0n", "9.3/10", "Sign up now"),
        card("Move it Forward: Workato × AI Valley", "5:00 PM - 8:00 PM PT", "Workato, San Francisco", "Workato, AI Valley, and Base44", "A structured build session with Workato experts should surface real enterprise automation and agent-integration work.", "Only four attendees are visible, but this is a new listing with direct Workato hosting, approval, and a concrete work-session format.", "Registration is open with approval. The community may be broad, and a virtual intro the night before is optional.", "https://luma.com/aivalley-tdlu", "8.8/10", "Sign up now"),
        card("Neuromorphic Computing: The Brain's Lessons for Reducing AI Energy Consumption", "5:00 PM - 7:00 PM PT", "9Zero Climate Innovation Hub, 350 California St", "9Zero and Guthrie Gintzler", "A researcher with real Intel Loihi deployment experience offers rare technical depth on energy-efficient AI hardware.", "Attendance is hidden, but 9Zero's members-only setting and the named Virginia Tech speaker are credible expert-room signals.", "Registration is open with approval. The talk is hardware and climate focused rather than agent or product oriented.", "https://luma.com/vazlk2kw", "8.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 18",
      verdict: "Three exceptional options",
      note: "Production evals, AI compute, and agent harnesses make this the strongest infrastructure night in the window.",
      events: [
        card("The AI Dev Stack: Beyond Code", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Antimetal, Fireworks, Braintrust, and Browserbase", "Evals as training data, production-agent debugging, browser infrastructure, and operational signal are unusually well matched to applied AI work.", "Four strong infrastructure companies and solutions-engineering speakers should concentrate AI platform builders and technical operators.", "Registration is open with approval. Attendance is hidden and the program is lightning-talk based.", "https://luma.com/ai-dev-stack", "9.7/10", "Sign up now"),
        card("SkyPilot AI Infra Meetup with VAST Data", "5:30 PM - 8:30 PM PT", "DG717, 717 Market St", "SkyPilot, VAST Data, NVIDIA, SGLang, and Anyscale", "RL infrastructure, agent sandboxes, storage, training, and inference make this a highly technical production-compute room.", "139 visible attendees and speakers from SkyPilot, NVIDIA, VAST, and SGLang imply exceptional systems and research-engineering density.", "Registration is open with approval. It is infrastructure-heavy and will reward technical fluency.", "https://luma.com/hgom4lk2", "9.5/10", "Sign up now"),
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
        card("Agent Memory Hack Night | Mastra x Elasticsearch", "5:00 PM - 9:00 PM PT", "Elastic, 33 New Montgomery St", "Mastra and Elastic", "A four-hour build night centered on agent memory, recency, retrieval, and continuity offers direct hands-on experience with a core agent problem.", "54 visible attendees and recognized framework and search hosts should produce a practical mix of developers, data practitioners, and product builders.", "Registration is open. All skill levels are welcomed, so depth will vary, but the build format is substantive.", "https://luma.com/mastra-hack", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 20",
      verdict: "Three exceptional options",
      note: "Baseten, open-model engineering, and a research paper club create a rare mix of strategy and technical depth.",
      events: [
        card("Agents are changing the web with Parag Agrawal", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Baseten and Parallel Web Systems", "A technical deep dive on agent-native web search with Parallel's founder and Baseten's model-training lead is a standout frontier infrastructure conversation.", "214 visible attendees and direct Baseten hosting should attract model engineers, product leaders, and teams building demanding production agents.", "Registration is open with approval. The interview format leaves less hands-on time than a workshop.", "https://luma.com/sy0mt1m4", "9.7/10", "Sign up now"),
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
