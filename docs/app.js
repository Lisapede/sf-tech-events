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
  checkedAt: "August 18, 2026",
  updatedAt: "August 18, 2026",
  windowLabel: "August 18, 2026 → September 1, 2026",
  featured: [
    {
      title: "Agents are changing the web with Parag Agrawal",
      date: "Thu, Aug 20",
      recommendation: "Sign up now",
      summary: "Baseten and Parallel pair a serious technical speaker with a focused discussion on agent-native search and production infrastructure.",
      link: "https://luma.com/sy0mt1m4",
    },
    {
      title: "Train Custom Models with Fireworks & LangChain",
      date: "Tue, Aug 25",
      recommendation: "Sign up now",
      summary: "A hands-on evals, fine-tuning, and deployment workshop for teams shipping production LLM and agent systems.",
      link: "https://luma.com/phzy304n",
    },
    {
      title: "From the Frontlines: Technical Talks with FDE Leaders",
      date: "Thu, Aug 27",
      recommendation: "Sign up now",
      summary: "Factory, Reducto, and Exa bring forward-deployed and solutions engineers together for concrete deployment talks and peer exchange.",
      link: "https://luma.com/factoryai-7w55",
    },
  ],
  days: [
    {
      date: "Tuesday, August 18",
      verdict: "Consider",
      note: "A sold-out two-day physical-AI conference is still in progress and is the only substantive option remaining in today's late scan.",
      events: [
        card("Actuate 26", "8:00 AM Aug 18 - 7:00 PM Aug 19 PT", "Fort Mason Center, 2 Marina Blvd", "Foxglove", "A two-day developer conference on autonomy, robotics, and physical AI offers unusually deep access to engineers building real-world systems.", "The program features technical leaders from Aurora, Wayve, Dyna Robotics, Zipline, Sunday, and other major robotics teams.", "Sold out. The conference began well before the weekday timing preference, but it remains active through Wednesday evening.", "https://luma.com/ujlou22c", "8.7/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, August 19",
      verdict: "Three exceptional options",
      note: "Inference economics, AI-for-science, and agent memory cover research and production equally well.",
      events: [
        card("Frontier Research Club: The Cost of Intelligence", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "The Frontier Syndicate and Pebblebed", "A curated paper dinner on inference cost, KV-cache quantization, memory bandwidth, and self-improving GPU kernels is precisely on profile.", "The approval gate, technical pre-reads, and stated frontier-lab, Stanford, Berkeley, and production audience are strong hidden-attendance signals.", "Registration is open with approval. Papers are circulated in advance and the format favors rigorous discussion.", "https://luma.com/kse8fa7y", "9.6/10", "Sign up now"),
        card("AI & The Wet Lab", "5:30 PM - 7:00 PM PT", "Private address, San Francisco", "South Park Commons and Tetherline", "A serious discussion of experimental bottlenecks, reproducibility, and model-to-lab execution brings frontier AI into real scientific work.", "South Park Commons plus speakers from Biohub, Ginkgo Automation, Xaira, and Anthropic are exceptional room-quality signals.", "Event full; join the waitlist. Doors close at the start time and the topic is biotech-specific.", "https://luma.com/aiandthewetlab_spc", "9.4/10", "Sign up now"),
        card("Agent Memory Hack Night | Mastra x Elasticsearch", "5:00 PM - 9:00 PM PT", "Elastic, 33 New Montgomery St", "Mastra and Elastic", "A four-hour build night centered on agent memory, recency, retrieval, and continuity offers direct hands-on work on a core agent problem.", "264 visible attendees and recognized framework and search hosts should produce a practical mix of developers and product builders.", "Registration is open. First-time agent builders are welcome, so depth will vary, but most of the evening is reserved for building.", "https://luma.com/mastra-hack", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 20",
      verdict: "Three exceptional options",
      note: "Baseten, open-model engineering, and a research paper club create a rare mix of strategy and technical depth.",
      events: [
        card("Agents are changing the web with Parag Agrawal", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Baseten and Parallel Web Systems", "A technical deep dive on agent-native web search with Parallel's founder and Baseten's model-training lead is a standout frontier-infrastructure conversation.", "297 visible attendees and direct Baseten hosting should attract model engineers, product leaders, and teams building demanding production agents.", "Registration is open with approval. The interview format leaves less hands-on time than a workshop.", "https://luma.com/sy0mt1m4", "9.7/10", "Sign up now"),
        card("Open Models, Production Agents", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "OpenHands, Ollama, NVIDIA, and FriendliAI", "Open versus closed coding models, cost, latency, governance, and running autonomous agents in production are directly on target.", "Named leaders from OpenHands, Ollama, NVIDIA, and FriendliAI should create a high-quality engineering-leadership room.", "Registration is open with approval. It is aimed at strategy and platform leaders rather than a hands-on build.", "https://luma.com/o9tv62y5", "9.4/10", "Sign up now"),
        card("AI Research Paper Club #002: The Future of Diffusion Models", "5:30 PM - 8:00 PM PT", "Bright Data loft, San Francisco", "TensorWave, DeCart, and Compute Exchange", "A small research discussion on training cost, inference latency, and the future of diffusion architecture should reward technical depth.", "Attendance is hidden, but an approval gate and explicit PhD, research, and applied-ML audience are strong signals.", "Registration is open with approval. The event copy lists 6:00-8:30 PM while Luma shows 5:30-8:00 PM, so confirm timing after approval.", "https://luma.com/AI002", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 21",
      verdict: "One strong physical-AI room and a creative-tech alternative",
      note: "A direct Trossen and NVIDIA industry night leads; computational theater offers a smaller culture-and-technology counterpoint.",
      events: [
        card("Trossen × NVIDIA — Industry Night at Mission Robotics", "6:00 PM - 9:00 PM PT", "Mission Robotics, 3001 19th St", "Trossen Robotics and NVIDIA", "Live Jetson-powered physical-AI hardware and direct access to robotics engineers make this a substantive industry room.", "Attendance is hidden, but direct company hosting, named NVIDIA participation, and a working hardware showroom are strong quality signals.", "Registration is open. The room is specialized toward robotics and embodied AI.", "https://luma.com/trossen-nvidia-partner-night", "9.0/10", "Sign up now"),
        card("A Night of Computational Theater", "6:30 PM - 8:00 PM PT", "tiat, 151 Powell St", "tiat and Halim Madi", "A live exploration of language, computers, desktop performance, and theater offers an inventive counterpoint to standard AI networking.", "Attendance is hidden, but tiat's established art-and-technology community and curated performance constraint are credible creative-tech signals.", "Pay what you can; suggested price is $20. This is artistic and AI-adjacent rather than an enterprise-builder room.", "https://luma.com/computertheater", "7.1/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 22",
      verdict: "Two exceptional all-day builder rooms",
      note: "Both options are substantive schedule exceptions that start well before the weekend preference; Mistral is open with approval and Zero Downtime is waitlist-only.",
      events: [
        card("Mistral Vibe Hackathon", "8:30 AM - 8:00 PM PT", "Private address, San Francisco", "Mistral AI", "A full-day, team-based build gives selected participants direct experience shipping on Mistral's model stack.", "197 visible attendees, rolling application review, and direct Mistral hosting indicate a serious builder room.", "Registration is open with approval. The all-day schedule begins far before the weekend preference; meals are provided.", "https://luma.com/mistral-summer-vibe-hackathon-sf", "8.5/10", "Consider"),
        card("Zero Downtime Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, San Francisco", "WeMakeDevs, Bright Data, Port, SigNoz, and Anthropic judges", "A full-day build around resilient agent pipelines, self-healing web data, observability, and production lifecycle tools is technically substantive.", "425 visible attendees and engineering judges from Anthropic create unusually strong builder and infrastructure signals.", "Event full; join the waitlist. It starts far before the weekend preference and is included as an all-day schedule exception.", "https://luma.com/zero-downtime", "8.4/10", "Consider"),
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
      verdict: "Three exceptional infrastructure options",
      note: "vLLM and NVIDIA lead, with a waitlisted agent-stack room and a robotics-vision alternative.",
      events: [
        card("vLLM x NVIDIA Dynamo Meetup", "6:00 PM - 9:00 PM PT", "Convene 100 Stockton", "vLLM and NVIDIA Dynamo", "Inference optimization, distributed serving, and production deployment make this an unusually concentrated AI-systems night.", "603 visible attendees and direct vLLM and NVIDIA participation should attract excellent inference engineers and researchers.", "Registration is open with approval. The room will be large and infrastructure-heavy.", "https://luma.com/r8o604o0", "9.7/10", "Sign up now"),
        card("AI Infrastructure Night", "5:30 PM - 7:00 PM PT", "Basis Set office, San Francisco", "Alien and Basis Set", "Open local agent stacks, cryptographic data controls, and verifiable agent-written code cover concrete production constraints.", "117 visible attendees plus speakers from Basis Set, Alien, and Boundary suggest a focused developer-infrastructure room.", "Event full; join the waitlist. The program is compact and spans several infrastructure themes.", "https://luma.com/wol2ix7z", "9.2/10", "Sign up now"),
        card("Trossen Robotics × Stereolabs Partner Night", "6:00 PM - 9:00 PM PT", "3001 19th St", "Trossen Robotics and Stereolabs", "A showroom night with AI-powered stereo vision and spatial perception offers direct contact with physical-AI hardware and solutions engineers.", "Attendance is hidden, but direct company hosting, live hardware, and a named engineering and solutions team are credible signals.", "Registration is open. Photography and filming are planned; this is specialized robotics rather than general agent infrastructure.", "https://luma.com/trossen-stereolabs-partner-night", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, August 25",
      verdict: "Three exceptional AI engineering options",
      note: "A hands-on evals workshop leads, with a Baseten compute salon and a production-AI engineering meetup as strong alternatives.",
      events: [
        card("Train Custom Models with Fireworks & LangChain", "5:00 PM - 8:30 PM PT", "Private address, San Francisco", "Fireworks and LangChain", "A hands-on workshop connects evals, LangSmith observability, custom judge models, fine-tuning, and deployment into one production feedback loop.", "Direct Fireworks and LangChain hosting, an approval gate, and an explicit AI/ML engineer audience are excellent hidden-attendance signals.", "Registration is open with approval. Bring a laptop and expect a working session before the rooftop happy hour.", "https://luma.com/phzy304n", "9.8/10", "Sign up now"),
        card("Corey Quinn × Philip Kiely at Natoma Cabana", "5:00 PM - 8:00 PM PT", "Natoma Cabana, 90 Natoma St", "Baseten, Corey Quinn, and Philip Kiely", "An unstructured compute and inference salon with two sharp infrastructure voices should support unusually candid technical conversation.", "Direct Baseten hosting, limited capacity, and the author of Inference Engineering are strong room-quality signals despite hidden attendance.", "Registration is open with approval. It is a casual happy hour without formal talks.", "https://luma.com/gexguvs5", "9.1/10", "Sign up now"),
        card("{AI} in Production with Inngest, Nebius Token Factory, & Flox", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Inngest, Nebius Token Factory, and Flox", "Real lessons learned from teams shipping agents past the demo stage make this a practical production-engineering meetup.", "65 visible attendees, an approval gate, and explicit developer-first positioning signal a focused room rather than sponsor pitches.", "Registration is open with approval. The agenda is lightning-talk based and welcomes full-stack developers as well as ML engineers.", "https://luma.com/inngest-77ls", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, August 26",
      verdict: "Three strong technical rooms",
      note: "DSPy optimization, durable context, and agent sandboxes make this another excellent production-AI night.",
      events: [
        card("Bay Area DSPy Meetup", "5:30 PM - 9:00 PM PT", "Private address, San Francisco", "Drew Breunig, Giovanni Acosta, and Laude", "DSPy, GEPA, rubric evolution, parallel proposals, and optimization-as-observability make this a high-density applied-research session.", "103 visible attendees and speakers from Notre Dame, MIT, CMU, Berkeley, and Prime Intellect indicate excellent technical depth.", "Event full; join the waitlist. Talks are brief and the back half is optimized for discussion.", "https://luma.com/61qrnbs7", "9.3/10", "Sign up now"),
        card("Durable AI: Agent Context is Everything", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal, Chalk, Entire, Neo4j, and PromptQL", "Reliable context, durable execution, retrieval, and agent state map directly to shipping long-running production systems.", "120 visible attendees and a concrete multi-company speaker list are strong platform-engineering signals.", "Registration is open with approval. The lightning-talk format covers several distinct context layers.", "https://luma.com/durable-ai-august", "9.2/10", "Sign up now"),
        card("Daytona AI Builders - SF", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Daytona and Descope", "Forkable sandboxes, agent identity, transcript retrieval, review agents, and long-horizon context are unusually practical production topics.", "304 visible attendees plus credible developer-infrastructure hosts indicate a dense technical room.", "Registration is open with approval. Expect a larger lightning-talk meetup rather than an intimate discussion.", "https://luma.com/ai-builders-sf-aug", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 27",
      verdict: "Three exceptional options",
      note: "An Anthropic-stack demo night leads, with an invite-only practitioner room and a nearly perfect FDE gathering as focused alternatives.",
      events: [
        card("Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square", "Anthropic, Postman, Supabase, and Vercel", "Multiplayer, proactive engineering agents and live production-app demos across a top developer-tool stack make this the clearest builder room of the night.", "500 visible attendees and named speakers from Anthropic, Postman, Vercel, and Supabase should create exceptional applied-AI density.", "Event full; join the waitlist. The room will be large, so target demo teams and platform engineers.", "https://luma.com/august-SF-supabase-vercel-postman", "9.8/10", "Sign up now"),
        card("Coffeehouse by Ode with Anthropic", "5:30 PM - 7:30 PM PT", "Salesforce Tower, 58th Floor", "Ode with Anthropic", "An engineer-to-engineer practitioner room about real applied-gen-AI solutions and debugging is almost perfectly matched to the taste profile.", "Invite-only capacity, a no-recruiter rule, direct Anthropic affiliation, and the Salesforce Tower setting are exceptional hidden-attendance signals.", "Registration is open with approval. The full demo lineup is still being announced and no guests are allowed.", "https://luma.com/coffeehouse-sf-aug-26", "9.6/10", "Sign up now"),
        card("From the Frontlines: Technical Talks with FDE Leaders", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Factory, Reducto, and Exa", "Technical talks on enterprise deployment, customer-facing engineering, and evals as the FDE product spec are exactly matched to the profile.", "Direct hosting by three respected AI infrastructure companies and an audience of FDEs, solutions engineers, and deployment leaders are exceptional hidden-attendance signals.", "Registration is open with approval. The program includes technical talks, a deployment-leader panel, and focused peer networking.", "https://luma.com/factoryai-7w55", "9.7/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 28",
      verdict: "Not recommended - best available",
      note: "A technically excellent open-source summit runs into the evening, but its 3:00 PM start misses the weekday timing rule.",
      events: [
        card("Open Source AI Summit SF", "3:00 PM - 8:00 PM PT", "Private address, San Francisco", "BuildPlanet and NEAR AI", "A half-day technical program on open-source AI features leaders behind PyTorch, Fireworks, the Transformer paper, OpenAI, and NEAR AI.", "141 visible attendees and confirmed speakers Matt White, Illia Polosukhin, Dima Dzhulgakov, and Lukasz Kaiser make the room unusually strong.", "Registration is open with approval. It begins two hours before the weekday floor; this is shown only as the best available option.", "https://luma.com/buildp-c5h9", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, August 29",
      verdict: "One strong all-day builder option",
      note: "A substantive agent-harness hackathon earns a weekend exception despite its morning start.",
      events: [
        card("Agent Harness Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, San Francisco", "WeMakeDevs, Bright Data, Qodo, and OpenAI", "A full day building agents with MCP connections, sandboxes, approvals, subagents, and durable sessions is directly aligned with production-agent work.", "359 visible attendees, serious infrastructure partners, and a live-demo requirement point to a real builder room rather than a generic hackathon mixer.", "Registration is open. The all-day schedule starts far earlier than the usual weekend preference; OpenAI is providing attendee credits.", "https://luma.com/agent-harness", "8.8/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 30",
      verdict: "Open night",
      note: "No SF in-person event survived the weekend timing, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
      events: [],
    },
    {
      date: "Monday, August 31",
      verdict: "One strong physical-AI working session",
      note: "Mission Robotics hosts the only room that clears the attendance, timing, and substance filters on an otherwise generic networking night.",
      events: [
        card("Degrees of Freedom: Bring Your Own Robot", "6:00 PM - 9:00 PM PT", "Mission Robotics, San Francisco", "Rally SF and Mission Robotics", "A working night for embodied-AI builders offers real bench time, mixed-discipline debugging, and end-of-night demos rather than passive networking.", "44 visible attendees, a recurring format, and a dedicated robotics workshop create a credible hands-on room.", "Registration is open. Bring a robot or a concrete sim, policy, perception, or hardware problem; the listing copy mistakenly calls Monday a Tuesday.", "https://luma.com/278ujx64", "8.5/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 1",
      verdict: "One credible new cloud-engineering option",
      note: "The official AWS San Francisco user-group relaunch is newly listed and still building its speaker lineup.",
      events: [
        card("AWS SF User Group September Meetup", "5:30 PM - 8:00 PM PT", "AWS Builder Loft, 525 Market St", "AWS San Francisco User Group", "An official relaunch at the AWS Builder Loft should surface cloud engineers and platform builders before the group settles into a recurring cadence.", "The listing is new with 3 visible attendees; direct AWS venue support and an official user-group calendar justify the new-listing exception.", "Registration is open. Lightning-talk details are still to come, and the broad all-level welcome means technical depth is not yet proven.", "https://luma.com/a4mkx2y3", "6.7/10", "Consider"),
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
