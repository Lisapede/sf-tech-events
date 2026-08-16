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
  checkedAt: "August 16, 2026",
  updatedAt: "August 16, 2026",
  windowLabel: "August 16, 2026 → August 30, 2026",
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
      title: "Demo Night SF: Ship AI Apps",
      date: "Thu, Aug 27",
      recommendation: "Sign up now",
      summary: "Anthropic, Postman, Supabase, and Vercel put production-agent talks and live application demos in one large builder room.",
      link: "https://luma.com/august-SF-supabase-vercel-postman",
    },
  ],
  days: [
    {
      date: "Sunday, August 16",
      verdict: "Not recommended - best available",
      note: "A very large developer meetup is the only substantive SF option, but it starts one hour before the weekend preference.",
      events: [
        card("SF AI Code And Coffee", "2:00 PM - 5:00 PM PT", "Salesforce Park, 425 Mission St", "SF AI Code And Coffee and WeAreDevelopers", "A self-organized project and networking session can still surface working developers and applied-AI builders on an otherwise empty Sunday.", "615 visible attendees and a recurring 40-city developer community create real scale.", "Registration is open. It starts before the 3:00 PM weekend preference and explicitly welcomes all skill levels, so room depth will vary.", "https://luma.com/4vokfjup", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, August 17",
      verdict: "Three strong builder options",
      note: "WorkOS and Workato anchor two hands-on rooms, with a technical hardware talk as a quieter alternative.",
      events: [
        card("Moonlighting with Gemini + Exa", "5:30 PM - 8:30 PM PT", "WorkOS, 660 Market St", "Build Club, Gemini, Exa, and WorkOS", "A selective build lab at WorkOS offers direct contact with researchers and engineers shipping agents, devtools, and research prototypes.", "352 visible attendees plus the WorkOS venue and invite-only positioning are exceptional builder-room signals.", "Waitlist only. Build Club can skew younger and more founder-heavy than the venue's usual crowd.", "https://luma.com/buildclub-ua0n", "9.3/10", "Sign up now"),
        card("Move it Forward: Workato × AI Valley", "5:00 PM - 8:00 PM PT", "Private address, San Francisco", "Workato, AI Valley, and Base44", "A structured build session with Workato experts should surface real enterprise automation and agent-integration work.", "117 visible attendees, direct Workato hosting, approval, and a concrete work-session format are strong quality signals.", "Registration is open with approval. The community may be broad, and a virtual intro the night before is optional.", "https://luma.com/aivalley-tdlu", "9.0/10", "Sign up now"),
        card("Neuromorphic Computing: The Brain's Lessons for Reducing AI Energy Consumption", "5:00 PM - 7:00 PM PT", "9Zero Climate Innovation Hub, 350 California St", "9Zero and Guthrie Gintzler", "A researcher with real Intel Loihi deployment experience offers rare technical depth on energy-efficient AI hardware.", "Attendance is hidden, but 9Zero's members-only setting and the named Virginia Tech speaker are credible expert-room signals.", "Registration is open with approval. The talk is hardware and climate focused rather than agent or product oriented.", "https://luma.com/vazlk2kw", "8.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 18",
      verdict: "Three exceptional options",
      note: "Production evals, AI compute, and reinforcement learning make this the strongest infrastructure night in the window.",
      events: [
        card("The AI Dev Stack: Beyond Code", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Antimetal, Fireworks, Braintrust, and Browserbase", "Evals as training data, production-agent debugging, browser infrastructure, and operational signal are unusually well matched to applied AI work.", "Four strong infrastructure companies and solutions-engineering speakers should concentrate AI platform builders and technical operators.", "Registration is open with approval. Attendance is hidden and the program is lightning-talk based.", "https://luma.com/ai-dev-stack", "9.7/10", "Sign up now"),
        card("SkyPilot AI Infra Meetup with VAST Data", "5:30 PM - 8:30 PM PT", "DG717, 717 Market St", "SkyPilot, VAST Data, NVIDIA, and Together AI", "RL infrastructure, agent sandboxes, storage, training, and inference make this a highly technical production-compute room.", "314 visible attendees and speakers from SkyPilot, NVIDIA, VAST, and Together AI imply exceptional systems and research-engineering density.", "Registration is open with approval. It is infrastructure-heavy and will reward technical fluency.", "https://luma.com/hgom4lk2", "9.5/10", "Sign up now"),
        card("SkyRL Meetup", "6:00 PM - 7:30 PM PT", "Private address, San Francisco", "Anyscale and UC Berkeley Sky Lab contributors", "Agentic reinforcement learning, post-training, and long-horizon knowledge-work agents make this a concentrated research-engineering room.", "160 visible attendees plus speakers from AMD, Datadog, Berkeley, and Anyscale indicate excellent technical density.", "Waitlist only. The program is compact and assumes comfort with RL systems.", "https://luma.com/y4ahouh6", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, August 19",
      verdict: "Three exceptional options",
      note: "Inference economics, AI-for-science, and agent memory cover research and production equally well.",
      events: [
        card("Frontier Research Club: The Cost of Intelligence", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "The Frontier Syndicate and Pebblebed", "A curated paper dinner on inference cost, kernels, memory bandwidth, quantization, and self-improving agent stacks is precisely on profile.", "The approval gate, technical pre-reads, and stated frontier-lab, Stanford, Berkeley, and production audience are strong hidden-attendance signals.", "Registration is open with approval. The second speaker is still to be announced.", "https://luma.com/kse8fa7y", "9.6/10", "Sign up now"),
        card("AI & The Wet Lab", "5:30 PM - 7:00 PM PT", "Private address, San Francisco", "South Park Commons and Tetherline", "A serious discussion of experimental bottlenecks, reproducibility, and model-to-lab execution brings frontier AI into real scientific work.", "South Park Commons plus speakers from Biohub, Ginkgo Automation, and Xaira are exceptional room-quality signals despite hidden attendance.", "Registration is approval-gated and doors close at the start time. The topic is biotech-specific.", "https://luma.com/aiandthewetlab_spc", "9.4/10", "Sign up now"),
        card("Agent Memory Hack Night | Mastra x Elasticsearch", "5:00 PM - 9:00 PM PT", "Elastic, 33 New Montgomery St", "Mastra and Elastic", "A four-hour build night centered on agent memory, recency, retrieval, and continuity offers direct hands-on experience with a core agent problem.", "181 visible attendees and recognized framework and search hosts should produce a practical mix of developers, data practitioners, and product builders.", "Registration is open. First-time agent builders are welcomed, so depth will vary, but the build format is substantive.", "https://luma.com/mastra-hack", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 20",
      verdict: "Three exceptional options",
      note: "Baseten, open-model engineering, and a research paper club create a rare mix of strategy and technical depth.",
      events: [
        card("Agents are changing the web with Parag Agrawal", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Baseten and Parallel Web Systems", "A technical deep dive on agent-native web search with Parallel's founder and Baseten's model-training lead is a standout frontier infrastructure conversation.", "240 visible attendees and direct Baseten hosting should attract model engineers, product leaders, and teams building demanding production agents.", "Registration is open with approval. The interview format leaves less hands-on time than a workshop.", "https://luma.com/sy0mt1m4", "9.7/10", "Sign up now"),
        card("Open Models, Production Agents", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "OpenHands, Ollama, and FriendliAI", "Open versus closed coding models, cost, latency, governance, and running autonomous agents in production are directly on target.", "Named leaders from OpenHands, Ollama, and FriendliAI should create a high-quality CTO, platform, and AI-engineering room.", "Registration is open with approval. It is explicitly director-and-above and includes host marketing consent.", "https://luma.com/o9tv62y5", "9.4/10", "Sign up now"),
        card("AI Research Paper Club #002: The Future of Diffusion Models", "5:30 PM - 8:00 PM PT", "Bright Data loft, San Francisco", "TensorWave, DeCart, Leverage, and Compute Exchange", "A small research discussion on training cost, inference latency, and the future of diffusion architecture should reward technical depth.", "Attendance is hidden, but an approval gate and explicit PhD, research, and applied-ML audience are strong signals.", "Registration is open with approval. The event copy lists 6:00–8:30 PM while Luma shows 5:30–8:00 PM, so confirm timing after approval.", "https://luma.com/AI002", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 21",
      verdict: "One credible creative-technology option",
      note: "The primary calendars produced only low-attendance founder rooms; this recurring computational-theater gathering is the best substantive fallback.",
      events: [
        card("A Night of Computational Theater", "6:30 PM - 8:00 PM PT", "tiat, 151 Powell St", "tiat and Halim Madi", "A live exploration of language, computers, and performance offers an inventive product-and-culture counterpoint to standard AI networking.", "Attendance is hidden, but tiat's repeat art-and-technology community and open-mic structure favor substantive creative-technology exchange.", "Suggested donation is $20. This is AI-adjacent and artistic rather than a room for enterprise builders.", "https://luma.com/computertheater", "7.1/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 22",
      verdict: "Two credible but schedule-divergent options",
      note: "Mistral's all-day hackathon is the sharper builder room; an AI-safety media program offers an evening alternative.",
      events: [
        card("Mistral Vibe Hackathon", "8:30 AM - 8:00 PM PT", "Private address, San Francisco", "Mistral AI", "A full-day, team-based build gives selected participants direct experience shipping on Mistral's model stack.", "201 visible attendees, rolling application review, and direct Mistral hosting indicate a serious builder room.", "Registration is open with approval. The all-day schedule begins well before the weekend preference; meals are provided.", "https://luma.com/mistral-summer-vibe-hackathon-sf", "8.5/10", "Consider"),
        card("Create for Good", "5:30 PM - 10:00 PM PT", "Palace of Fine Arts Theatre, 3301 Lyon St", "Create for Good and AI in Context", "Film premieres and discussion about keeping powerful AI safe provide a substantive public-interest AI program.", "287 visible attendees and a formal Palace of Fine Arts program should bring policy, media, nonprofit, and some technical AI-safety participants.", "Tickets are $30 and include dinner. The creator-economy and philanthropy framing is less aligned with engineering and product networking.", "https://luma.com/ghnew59o", "7.3/10", "Consider"),
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
      note: "vLLM and NVIDIA lead the strongest newly listed night, with a waitlisted agent-stack room and a robotics alternative.",
      events: [
        card("vLLM x NVIDIA Dynamo Meetup", "6:00 PM - 9:00 PM PT", "Convene 100 Stockton", "vLLM and NVIDIA Dynamo", "Inference optimization, distributed serving, and production deployment make this an unusually concentrated AI-systems night.", "404 visible attendees and direct vLLM and NVIDIA participation should attract excellent inference engineers and researchers.", "Registration is open with approval. The room will be large and infrastructure-heavy.", "https://luma.com/r8o604o0", "9.7/10", "Sign up now"),
        card("AI Infrastructure Night", "5:30 PM - 7:00 PM PT", "Private address, San Francisco", "Alien and Basis Set", "Open local agent stacks, cryptographic data controls, and verifiable agent-written code cover concrete production constraints.", "102 visible attendees plus speakers from Basis Set, Alien, and Boundary suggest a focused developer-infrastructure room.", "Waitlist only. The program is short and spans several infrastructure themes.", "https://luma.com/wol2ix7z", "9.2/10", "Sign up now"),
        card("Trossen Robotics × Stereolabs Partner Night", "6:00 PM - 9:00 PM PT", "3001 19th St", "Trossen Robotics and Stereolabs", "A showroom night with AI-powered stereo vision and spatial perception offers direct contact with physical-AI hardware and solutions engineers.", "Attendance is hidden, but direct company hosting, live hardware, and a named engineering and solutions team are credible signals.", "Registration is open. Photography and filming are planned; this is specialized robotics rather than general agent infrastructure.", "https://luma.com/trossen-stereolabs-partner-night", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, August 25",
      verdict: "Three exceptional AI engineering options",
      note: "A hands-on evals workshop leads, with a Baseten compute salon and an engineer debate night as strong alternatives.",
      events: [
        card("Train Custom Models with Fireworks & LangChain", "5:00 PM - 8:30 PM PT", "Private address, San Francisco", "Fireworks and LangChain", "A hands-on workshop connects evals, LangSmith observability, custom judge models, fine-tuning, and deployment into one production feedback loop.", "Direct Fireworks and LangChain hosting, an approval gate, and an explicit AI/ML engineer audience are excellent hidden-attendance signals.", "Registration is open with approval. Bring a laptop and expect a working session before the rooftop happy hour.", "https://luma.com/phzy304n", "9.8/10", "Sign up now"),
        card("Corey Quinn × Philip Kiely at Natoma Cabana", "5:00 PM - 8:00 PM PT", "Natoma Cabana, 90 Natoma St", "Baseten, Corey Quinn, and Philip Kiely", "An unstructured compute and inference salon with two sharp infrastructure voices should support unusually candid technical conversation.", "Direct Baseten hosting, limited capacity, and the author of Inference Engineering are strong room-quality signals despite hidden attendance.", "Registration is open with approval. It is a casual happy hour without formal talks.", "https://luma.com/gexguvs5", "9.1/10", "Sign up now"),
        card("Hard Negatives: Engineers Debate Night", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Qdrant and Neo4j", "Live debates on contentious AI engineering choices should produce sharper peer exchange than a conventional panel.", "96 visible attendees and direct Qdrant and Neo4j hosting point to a solid vector, graph, and retrieval engineering crowd.", "Registration is open with approval. The games-and-prizes format is playful, and attendance is 21+.", "https://luma.com/sf-meetup-aug26", "8.6/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, August 26",
      verdict: "Three strong technical rooms",
      note: "DSPy optimization, durable context, and agent sandboxes make this another excellent production-AI night.",
      events: [
        card("Bay Area DSPy Meetup", "5:30 PM - 9:00 PM PT", "Private address, San Francisco", "Drew Breunig, Giovanni Acosta, and Laude", "DSPy, GEPA, rubric evolution, parallel proposals, and optimization-as-observability make this a high-density applied-research session.", "89 visible attendees and speakers from Notre Dame, MIT, CMU, Berkeley, and Prime Intellect indicate excellent technical depth.", "Registration is open with approval. Talks are brief and the back half is optimized for discussion.", "https://luma.com/61qrnbs7", "9.3/10", "Sign up now"),
        card("Durable AI: Agent Context is Everything", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal, Chalk, Entire, Neo4j, and PromptQL", "Reliable context, durable execution, retrieval, and agent state map directly to shipping long-running production systems.", "70 visible attendees and a concrete multi-company speaker list are strong platform-engineering signals.", "Registration is open with approval. The lightning-talk format covers several distinct context layers.", "https://luma.com/durable-ai-august", "9.2/10", "Sign up now"),
        card("Daytona AI Builders - SF", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Daytona and Descope", "Forkable sandboxes, agent identity, transcript retrieval, review agents, and long-horizon context are unusually practical production topics.", "258 visible attendees plus credible developer-infrastructure hosts indicate a dense technical room.", "Registration is open with approval. Expect a larger lightning-talk meetup rather than an intimate discussion.", "https://luma.com/ai-builders-sf-aug", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 27",
      verdict: "Three exceptional options",
      note: "An Anthropic-stack demo night leads, with an invite-only practitioner room and OpenRouter strategy as focused alternatives.",
      events: [
        card("Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square", "Anthropic, Postman, Supabase, and Vercel", "Context-aware engineering agents and live production-app demos across a top developer-tool stack make this the clearest builder room of the night.", "428 visible attendees and named speakers from Anthropic, Postman, Vercel, and Supabase should create exceptional applied-AI density.", "Registration is open. The room will be large, so target demo teams and platform engineers.", "https://luma.com/august-SF-supabase-vercel-postman", "9.8/10", "Sign up now"),
        card("Coffeehouse by Ode with Anthropic", "5:30 PM - 7:30 PM PT", "Salesforce Tower, 58th Floor", "Ode with Anthropic", "An engineer-to-engineer practitioner room about real applied-gen-AI solutions and debugging is almost perfectly matched to the taste profile.", "Invite-only capacity, a no-recruiter rule, direct Anthropic affiliation, and the Salesforce Tower setting are exceptional hidden-attendance signals.", "Registration is open with approval. The full demo lineup is still being announced and no guests are allowed.", "https://luma.com/coffeehouse-sf-aug-26", "9.6/10", "Sign up now"),
        card("Who Will Own the Intelligence Layer?", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "OpenRouter and Prime Intellect", "A focused discussion should get beyond model rankings into routing, open-model training, market structure, and who controls the application-to-model layer.", "Direct OpenRouter hosting, Prime Intellect's CEO, and the intimate venue positioning are strong hidden-attendance signals.", "Registration is open with approval. Expect a strategy-heavy fireside rather than hands-on building.", "https://luma.com/openro-3qtx", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 28",
      verdict: "Not recommended - best available",
      note: "A technically excellent open-source summit runs into the evening, but its 3:00 PM start misses the weekday timing rule.",
      events: [
        card("Open Source AI Summit SF", "3:00 PM - 8:00 PM PT", "Private address, San Francisco", "BuildPlanet and NEAR AI", "A half-day technical program on open-source AI features leaders behind PyTorch, the Transformer paper, OpenAI, and NEAR AI.", "48 visible attendees and confirmed speakers Matt White, Illia Polosukhin, and Lukasz Kaiser make the room materially stronger than its size suggests.", "Registration is open with approval. It begins two hours before the weekday floor; this is shown only as the best available option.", "https://luma.com/buildp-c5h9", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, August 29",
      verdict: "One strong all-day builder option",
      note: "A substantive agent-harness hackathon earns a weekend exception despite its morning start.",
      events: [
        card("Agent Harness Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, San Francisco", "WeMakeDevs, Bright Data, TrueFoundry, Qodo, and OpenAI", "A full day building agents with MCP connections, sandboxes, approvals, subagents, and durable sessions is directly aligned with production-agent work.", "278 visible attendees, serious infrastructure partners, and a live-demo requirement point to a real builder room rather than a generic hackathon mixer.", "Registration is open. The all-day schedule starts far earlier than the usual weekend preference; OpenAI is providing attendee credits.", "https://luma.com/agent-harness", "8.8/10", "Consider"),
      ],
    },
    {
      date: "Sunday, August 30",
      verdict: "Open night",
      note: "No SF in-person event survived the weekend timing, attendance, and hard-topic filters after both Luma calendars and fallback sources.",
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
