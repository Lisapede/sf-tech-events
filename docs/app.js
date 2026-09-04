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
  checkedAt: "September 4, 2026",
  updatedAt: "September 4, 2026",
  windowLabel: "September 4, 2026 → September 18, 2026",
  featured: [
    {
      title: "CoreWeave Hacks: Agent Loops Hackathon",
      date: "Sat, Sep 12",
      recommendation: "Sign up now",
      summary: "A two-day, production-minded build uses CoreWeave, Weights & Biases, and expert judging to create agents that improve their own loops.",
      link: "https://luma.com/coreweavehacks",
    },
    {
      title: "AI Journal Club ft. Google + NVIDIA",
      date: "Thu, Sep 17",
      recommendation: "Sign up now",
      summary: "Google DeepMind and NVIDIA researchers lead a rigorous evening on reasoning search, reinforcement learning, post-training, and kernel determinism.",
      link: "https://luma.com/0460rgnq",
    },
    {
      title: "Baseten × NVIDIA Dynamo × SGLang",
      date: "Thu, Sep 10",
      recommendation: "Sign up now",
      summary: "A 210-person technical program goes deep on reinforcement-learning post-training, inference infrastructure, Dynamo, and SGLang.",
      link: "https://luma.com/BaseDynSGL",
    },
  ],
  days: [
    {
      date: "Friday, September 4",
      verdict: "One credible health-tech operator room",
      note: "The only viable evening option clears the attendance floor, but its casual format keeps it in Consider territory.",
      events: [
        card("San Francisco Health Tech Happy Hour with HTN & Vinta", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Health Tech Nerds and Vinta Software", "A focused healthcare gathering avoids pitch decks and should support useful operator conversation on the opportunities and constraints shaping health tech.", "121 visible attendees and backing from the 30,000-member Health Tech Nerds community clear the normal room-size floor.", "Event full; join the waitlist. This is a casual networking room with no technical program.", "https://luma.com/nh2t70zk", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 5",
      verdict: "One exceptional spatial-AI build",
      note: "The all-day schedule earns a weekend exception through technical depth, partner quality, and a finished-demo requirement.",
      events: [
        card("Spatial Intelligence + Generative 3D Hackathon", "10:00 AM - 8:00 PM PT", "Private address, Fort Mason", "World Labs, Tripo, mint.gg, Convex, and Founders Inc.", "Teams build interactive worlds, physical-AI simulations, or creative 3D systems with large world models, generated assets, agents, and real-time backends.", "Direct participation from World Labs, Tripo, mint.gg, and Convex plus a demo-and-judging requirement indicate a serious technical build.", "Event full; join the waitlist. Optional partner sessions begin before the 10:00 AM build start.", "https://luma.com/b101ml40", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 6",
      verdict: "One exceptional recursive-agent build",
      note: "A ten-hour co-scientist hack earns a weekend schedule exception through unusually deep technical work and a strong recurring community.",
      events: [
        card("Recursive Self Improvement Hack #3: Co-Scientist", "10:00 AM - 8:00 PM PT", "Private address, SoMa", "RSI House, Sundai, and AutoLab", "Participants build research agents that generate hypotheses, run experiments, critique results, and improve their own workflows before evening demos.", "Attendance is hidden, but the recurring series has produced 135-plus projects and draws builders from MIT, Harvard, Stanford, DeepMind, and Meta.", "Registration is open with approval. Presentations begin at 8:00 PM; the all-day format is a substantive weekend exception.", "https://luma.com/40ivcqxg", "9.1/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, September 7",
      verdict: "A marginal but substantive paper discussion",
      note: "This is the best in-scope option after both primary calendars; it misses the normal attendee floor but avoids generic holiday-week networking.",
      events: [
        card("90/30 Club: Full-Stack Evaluation for 3D-DRAM LLM Accelerators", "7:00 PM - 10:00 PM PT", "Mox, 1680 Mission St", "90/30 Club", "A quiet-reading block and structured discussion unpack the ATLAS paper's performance-evaluation stack for 3D-DRAM-based LLM accelerators.", "The weekly machine-learning paper club has a serious format and a highly technical selection, but only 19 attendees are visible.", "Registration is open. The established listing falls below the 30-attendee rule, so this is shown only as the best available option.", "https://luma.com/3ja84rpj", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Tuesday, September 8",
      verdict: "Three excellent engineering rooms",
      note: "A no-slides infrastructure demo night leads, followed by a structured-data foundation-model panel and a hands-on AI metering workshop.",
      events: [
        card("Dev Tools & Infra Demo Night at Hogpatch", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "1984, PostHog, Heavybit, and Essence Venture Capital", "Ten live demos span agent context, cloud infrastructure, security harnesses, observability, reusable skills, inference routing, and durable sandboxes.", "Direct PostHog and Heavybit involvement, an explicit engineer audience, and the no-slides format are excellent hidden-attendance signals.", "Registration is open with approval. Demos begin at 6:30 PM.", "https://luma.com/6wyras70", "9.5/10", "Sign up now"),
        card("Beyond XGBoost: Foundation Models for Structured Data", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "House of AI and Synthefy", "A practitioner panel examines where tabular foundation models outperform classical methods, how teams evaluate them, and what production adoption actually requires.", "Attendance is hidden, but named speakers from Google, Synthefy, Cisco, and Walmart plus an approval gate indicate a strong applied-ML room.", "Registration is open with approval.", "https://luma.com/houseof-9uok", "9.2/10", "Sign up now"),
        card("AI Credits & Metering Workshop", "5:45 PM - 8:00 PM PT", "Private address, Financial District", "Schematic", "A working session for PMs and engineers covers credit models, top-ups, enforcement, migrations, and implementation of usage-based AI billing.", "48 visible attendees, a bring-your-laptop format, and a promised working pricing model make this a focused small room.", "Registration is open; two spots remain. The topic is product infrastructure rather than model engineering, but it is unusually practical.", "https://luma.com/29otrk4k", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 9",
      verdict: "Three exceptional applied-AI rooms",
      note: "Production-agent failure modes lead, followed by rigorous embodied-AI research and an agentic-PM demo roundtable.",
      events: [
        card("Software Factories Meet Production", "6:00 PM - 8:00 PM PT", "Datadog, 50 Fremont St", "Datadog, Cleric, and the Agentic AI Foundation", "Practitioner talks dissect software-factory orchestration, verification, security, performance testing, and the failure modes that changed the final designs.", "46 visible attendees, Datadog hosting, named Humanlayer and Tensorlake founders, and an explicit agent-builder gate create an unusually strong room.", "Registration is open with approval. Talks begin at 6:40 PM and stay compact to preserve detailed Q&A.", "https://luma.com/87no10np", "9.6/10", "Sign up now"),
        card("Bay Area Frontier Research Club #22 — Robotics & Embodied AI", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Frontier Research Club and Mission Robotics", "A curated research forum reserves most of the evening for critique of robotics papers, methods, evaluation, failure modes, and real-hardware deployment.", "The approval gate, advance paper materials, Mission Robotics venue, and explicit researcher and research-engineer audience are exceptional hidden-room signals.", "Registration is open with approval. Talk titles are still TBA, but presenter submissions are screened for rigor.", "https://luma.com/7wv4khq9", "9.5/10", "Sign up now"),
        card("Agentic PM Kickoff with PostHog, Linear, Supabase & Dreambase", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "PostHog, Linear, Supabase, and Dreambase", "Four product teams demo agents automating PM work from bug triage to spec writing, then open the room for a practical roundtable.", "Direct hosting by an unusually strong product-tool stack, limited capacity, and a no-slides rule are excellent PM and builder signals.", "Registration is open with approval. This takes place the night before Lenny's Summit.", "https://luma.com/posthog-tpmz", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 10",
      verdict: "Three exceptional model, database, and robotics rooms",
      note: "RL post-training infrastructure narrowly leads a deep sharded-Postgres meetup and the waitlisted flagship hardware room.",
      events: [
        card("Baseten × NVIDIA Dynamo × SGLang: RL Post-Training", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Baseten, NVIDIA Dynamo, and SGLang", "A technical evening examines the systems behind reinforcement-learning post-training, from inference orchestration and throughput to Dynamo and SGLang.", "210 visible attendees, an approval gate, and direct participation from three core infrastructure teams make this an exceptional model-systems room.", "Registration is open with approval.", "https://luma.com/BaseDynSGL", "9.7/10", "Sign up now"),
        card("SF Database Meetup: Neki Edition", "5:30 PM - 9:00 PM PT", "PlanetScale, 108 Natoma St", "PlanetScale and Neki", "Five technical talks go deep on sharded Postgres, database architecture, distributed execution, operational tradeoffs, and lessons from production.", "100 visible attendees, PlanetScale hosting, and a dense multi-talk program provide excellent infrastructure signals.", "Registration is open with approval.", "https://luma.com/tym2h9zq", "9.6/10", "Sign up now"),
        card("137th SF Hardware Meetup: Physical AI Robotics", "6:30 PM - 9:30 PM PT", "Private address, Mission District", "SF Hardware Meetup and Mission Robotics", "A talk-and-demo program pairs physical-AI founders and Zoox hardware leadership with a community open mic for working prototypes.", "277 visible attendees, the 137th edition of a 10,500-member hardware community, Mission Robotics hosting, and named robotics operators are exceptional signals.", "Event full; join the waitlist.", "https://luma.com/84lattht", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 11",
      verdict: "A systems lecture plus a civic build",
      note: "Gray Area's agent-society double lecture is the clear first choice; an overnight civic buildathon is the credible alternative.",
      events: [
        card("Agentworld × Superdark Factory", "6:30 PM - 9:00 PM PT", "Gray Area Grand Theater, 2665 Mission St", "Gray Area, Antikythera, and Disintegrator", "A seated double lecture examines hybrid human-AI societies and software production when fully automated agent systems move people outside the loop.", "203 visible attendees, Gray Area hosting, Antikythera research, MIT Press ties, and named talks from Benjamin Bratton and Marek Poliks make this a high-signal intellectual room.", "$10 tickets are available. The program is seated and focused on research and systems thinking.", "https://luma.com/fawtwq0b", "9.1/10", "Sign up now"),
        card("Building for SF", "6:00 PM Fri - 5:00 PM Sat PT", "Yes SF HQ, 220 Montgomery St", "Abundant and Yes SF", "Builders, designers, and policy practitioners form teams around practical civic projects, work through Saturday, and present functioning demos.", "Attendance is hidden, but the concrete build requirement, central venue, and two-day schedule distinguish it from generic civic networking.", "Registration is open. Friday runs 6:00-8:00 PM; the build resumes Saturday at 10:00 AM.", "https://luma.com/abundant-3yz7", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 12",
      verdict: "Three exceptional all-day AI hackathons",
      note: "Agent loops and open-model evaluation lead; a large agentic-coding build is the strongest open-attendance alternative.",
      events: [
        card("CoreWeave Hacks: Agent Loops Hackathon", "9:00 AM Sat - 5:00 PM Sun PT", "CoreWeave, 400 Alabama St", "Weights & Biases, CoreWeave, and AGI House", "A two-day build focuses on agents that reason, act, catch mistakes, trace and evaluate their own iterations, and improve over repeated loops.", "The event caps at 200 and combines CoreWeave infrastructure, W&B lineage, expert judging, production-readiness prizes, and more than $20,000 in awards.", "Registration is open with approval. This is a substantive weekend exception and runs through Sunday afternoon.", "https://luma.com/coreweavehacks", "9.8/10", "Sign up now"),
        card("Open Model Hack — Gradient × Google DeepMind", "9:30 AM - 7:30 PM PT", "Private address, Northern Waterfront", "tokens&, Gradient, Google DeepMind, Lambda, Nango, and Respan", "AI engineers and researchers compare current open models on real problems spanning inference, fine-tuning, serving, evaluation, and production tradeoffs.", "Attendance is hidden, but the application gate, Google DeepMind Gemma participation, technical partner stack, and live-demo requirement are exceptional signals.", "Registration is open with approval. Teams are capped at four.", "https://luma.com/openmodelhack", "9.6/10", "Sign up now"),
        card("Qoder AI Hackathon", "9:00 AM - 9:00 PM PT", "Private address, Rincon Hill", "B.E.L.L.E Community and Qoder", "A full-day agentic-engineering build asks teams to plan, implement, test, and ship a working product with autonomous coding workflows.", "155 visible attendees, a twelve-hour build, live demos, and $4,500 in cash prizes provide strong room and execution signals.", "Registration is open with approval; volunteer and donation-priced tickets remain. The early start earns a substantive weekend exception.", "https://luma.com/l74b4u7b", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 13",
      verdict: "One substantive multimodal-AI build",
      note: "The only SF option clearing the filters combines professional instruction, hands-on production, and a same-day film showcase.",
      events: [
        card("AI Filmmaking Masterclass + Hackathon", "9:00 AM - 7:00 PM PT", "Private address, Financial District", "The Multimodal Society, Roan Weigert, and Bond AI", "A practical masterclass on direction, consistency, editing, sound, and delivery leads into a four-hour build and big-screen short-film showcase.", "184 visible attendees, application-based admission, frontier-lab partners, tool credits, and a finished-film requirement are strong signals.", "Standard $49 tickets remain available. The all-day schedule is a substantive weekend exception.", "https://luma.com/pw54q8np", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, September 14",
      verdict: "One exceptional builder demo night",
      note: "WorkOS's recurring no-slides, no-pitches format is the clear best room on a Dreamforce-heavy Monday.",
      events: [
        card("Demo Night @ WorkOS (September)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS and Michael Grinich", "Builders show live side projects, internal tools, open-source work, and startups, with feedback and discussion replacing decks or company pitches.", "399 visible attendees, a recurring builder audience, and a strict live-demo format make this an exceptional broad technical room.", "Registration is open; one spot remains. No slides and no pitches.", "https://luma.com/demo-night-sept2026", "9.7/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 15",
      verdict: "Three strong agent-engineering rooms",
      note: "A massive practitioner showcase leads, followed by a durable-agent architecture deep dive and a new voice-plus-robotics program.",
      events: [
        card("All Things Agent Setups", "5:30 PM - 8:30 PM PT", "Sentry, 45 Fremont St", "Sentry and All Things AI", "Practitioners compare the stacks, tools, observability, and workflow choices behind agents that operate reliably in production.", "347 visible attendees, Sentry hosting, and an explicit production-agent focus create a strong builder room.", "Registration is open.", "https://luma.com/allthings-kj2x", "9.5/10", "Sign up now"),
        card("Building Durable Agents: MongoDB × Temporal", "5:30 PM - 8:30 PM PT", "Avotoasty, 101 California St", "MongoDB and Temporal", "An end-to-end reference architecture covers state, retries, orchestration, observability, and failure recovery for long-running AI agents.", "Attendance is hidden, but the unusually concrete technical scope and direct MongoDB and Temporal involvement are excellent signals.", "Registration is open with approval.", "https://luma.com/hu0e1aks", "9.4/10", "Sign up now"),
        card("Audio Layer 3.0: Voice × Robotics", "6:00 PM - 9:00 PM PT", "Tavus, 35 Stillman St", "Tavus, ai-coustics, LiveKit, Gradium, and Lightberry", "Live demos and a technical panel explore low-latency speech, expressive voice, embodied interfaces, and the audio layer for robotics.", "Only 20 attendees are visible, but the listing is new and the named voice-infrastructure and robotics partners justify the exception.", "Registration is open with approval.", "https://luma.com/uxmg18ib", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 16",
      verdict: "Three strong production-engineering rooms",
      note: "Hands-on customer-experience demos lead, with forward-looking inference planning and a well-established Rust graphics meetup.",
      events: [
        card("Customer Experience & AI Demo Night", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Plain and Persona", "Support engineers and forward-deployed teams show live systems for AI-assisted customer operations, with practical implementation discussion after each demo.", "Attendance is hidden, but direct Plain and Persona participation, an approval gate, and a technical support-engineering audience are strong signals.", "Registration is open with approval.", "https://luma.com/cxdemonight", "9.3/10", "Sign up now"),
        card("The Next AI Stack: Planning Models and Infrastructure", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Enrich, Baseten, and Cotality", "A technical program examines how teams should plan inference capacity, architecture, and serving strategy as models and NVIDIA's Vera Rubin platform evolve.", "36 visible attendees and named infrastructure practitioners from Baseten and Cotality create a focused room above the normal floor.", "Registration is open with approval.", "https://luma.com/enrich-15lm", "9.1/10", "Sign up now"),
        card("Bay Area Rust Graphics Meetup", "6:00 PM - 8:30 PM PT", "Atuin office, San Francisco", "Bay Area Rust and Zed", "Three talks cover graphics engineering in Rust, with space for technical questions and discussion among systems practitioners.", "90 visible attendees, Zed organizer involvement, and a focused three-talk agenda make this a credible non-AI technical alternative.", "Registration is open with approval.", "https://luma.com/9oiujuyw", "8.5/10", "Consider"),
      ],
    },
    {
      date: "Thursday, September 17",
      verdict: "Three exceptional AI research and implementation rooms",
      note: "A Google-and-NVIDIA journal club leads a spotlight-paper reading group and a practical internal-AI show-and-tell.",
      events: [
        card("AI Journal Club ft. Google + NVIDIA", "5:30 PM - 8:00 PM PT", "Workato, private SF address", "AI Journal Club and Workato", "Google DeepMind and NVIDIA researchers present work on reasoning search, reinforcement learning, post-training, and nondeterministic kernels, followed by technical discussion.", "Attendance is hidden, but two named frontier-lab research teams, an approval gate, and a paper-driven format make this an exceptional room.", "Registration is open with approval.", "https://luma.com/0460rgnq", "9.8/10", "Sign up now"),
        card("Persona ML Reading Group: Federico Bianchi", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Persona Machine Learning", "Federico Bianchi leads a close discussion of TTT-Discover, combining reinforcement learning and search to discover test-time training strategies.", "Attendance is hidden, but the ICML 2026 Spotlight paper, named research lead, and approval-gated reading-group format are exceptional signals.", "Registration is open with approval.", "https://luma.com/personabianchi", "9.6/10", "Sign up now"),
        card("AI-Pilling Your Company: Builder Show & Tell", "5:00 PM - 8:00 PM PT", "Private address, South Beach", "Decagon, Accel, and Andreessen Horowitz", "Operators from Decagon, Ramp, Cursor, and Cognition show the internal AI workflows their own teams use, with implementation details rather than sales decks.", "41 visible attendees, a curated operator audience, and named builder teams create a strong practical room despite investor co-hosts.", "Registration is open with approval. The 5:00 PM start meets the weekday floor.", "https://luma.com/tewv4rbz", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 18",
      verdict: "One strong voice-AI healthcare room",
      note: "The SF finalist has live demos and named ML and clinical operators; the larger frontier-research panel was excluded because its venue is in Berkeley.",
      events: [
        card("The AI Future of Healthcare: Voice Edition", "6:00 PM - 9:30 PM PT", "Entrepreneurs First, 501 Folsom St", "Noah Labs and Entrepreneurs First", "Live demos and a fireside examine voice biomarkers, early disease detection, clinical evidence, regulatory clearance, and the path from ML research to deployment.", "The event targets 50-plus healthcare-AI operators and investors and names technical founders from Noah Labs and Amplifier Health.", "Registration is open with approval. The event page header confirms Friday, September 18 despite a stale weekday label in the body copy.", "https://luma.com/65hodpiq", "8.9/10", "Sign up now"),
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
