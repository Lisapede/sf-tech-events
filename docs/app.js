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
  checkedAt: "September 11, 2026",
  updatedAt: "September 11, 2026",
  windowLabel: "September 11, 2026 → September 25, 2026",
  featured: [
    {
      title: "CoreWeave Hacks: Agent Loops Hackathon",
      date: "Sat, Sep 12",
      recommendation: "Sign up now",
      summary: "A two-day, production-minded build uses CoreWeave, Weights & Biases, and expert judging to create agents that improve their own loops.",
      link: "https://luma.com/coreweavehacks",
    },
    {
      title: "SF Systems: Research to Practice",
      date: "Thu, Sep 24",
      recommendation: "Sign up now",
      summary: "CMU and Berkeley researchers unpack AI-SQL inference systems and interactive multimodal programming, with production-minded technical depth.",
      link: "https://luma.com/mzkxb97z",
    },
    {
      title: "Agents & APIs SF Developer Meetup",
      date: "Thu, Sep 24",
      recommendation: "Sign up now",
      summary: "Canva, Postman, smol machines, and Astro present concrete agent infrastructure, MCP, cloud workload, and API patterns.",
      link: "https://luma.com/Sept-SF-Agents-APIS-meetup",
    },
  ],
  days: [
    {
      date: "Friday, September 11",
      verdict: "A systems lecture plus a civic build",
      note: "Gray Area's agent-society double lecture is the clear first choice; an overnight civic buildathon is the credible alternative.",
      events: [
        card("Agentworld × Superdark Factory", "6:30 PM - 9:00 PM PT", "Gray Area Grand Theater, 2665 Mission St", "Gray Area, Antikythera, and Disintegrator", "A seated double lecture examines hybrid human-AI societies and software production when fully automated agent systems move people outside the loop.", "318 visible attendees, Gray Area hosting, Antikythera research, MIT Press ties, and named talks from Benjamin Bratton and Marek Poliks make this a high-signal intellectual room.", "$10 tickets are available. The program is seated and focused on research and systems thinking.", "https://luma.com/fawtwq0b", "9.1/10", "Sign up now"),
        card("Building for SF", "6:00 PM Fri - 5:00 PM Sat PT", "Yes SF HQ, 220 Montgomery St", "Abundant and Yes SF", "Builders, designers, and policy practitioners form teams around practical civic projects, work through Saturday, and present functioning demos.", "Attendance is hidden, but the concrete build requirement, central venue, and two-day schedule distinguish it from generic civic networking.", "Registration is open. Friday runs 6:00-8:00 PM; the build resumes Saturday at 10:00 AM.", "https://luma.com/abundant-3yz7", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 12",
      verdict: "Three exceptional all-day AI hackathons",
      note: "Agent loops and open-model evaluation lead; a large agentic-coding build is the strongest open-attendance alternative.",
      events: [
        card("CoreWeave Hacks: Agent Loops Hackathon", "9:00 AM Sat - 5:00 PM Sun PT", "CoreWeave, 400 Alabama St", "Weights & Biases, CoreWeave, and AGI House", "A two-day build focuses on agents that reason, act, catch mistakes, trace and evaluate their own iterations, and improve over repeated loops.", "The event caps at 200 and combines CoreWeave infrastructure, W&B lineage, expert judging, production-readiness prizes, and more than $20,000 in awards.", "One approval-gated spot remains. This is a substantive weekend exception and runs through Sunday afternoon.", "https://luma.com/coreweavehacks", "9.8/10", "Sign up now"),
        card("Open Model Hack — Gradient × Google DeepMind", "9:30 AM - 7:30 PM PT", "Private address, Northern Waterfront", "tokens&, Gradient, Google DeepMind, Lambda, Nango, and Respan", "AI engineers and researchers compare current open models on real problems spanning inference, fine-tuning, serving, evaluation, and production tradeoffs.", "Attendance is hidden, but the application gate, Google DeepMind Gemma participation, technical partner stack, and live-demo requirement are exceptional signals.", "Event full; join the waitlist. Teams are capped at four.", "https://luma.com/openmodelhack", "9.6/10", "Sign up now"),
        card("Qoder AI Hackathon", "9:00 AM - 9:00 PM PT", "Private address, Rincon Hill", "B.E.L.L.E Community and Qoder", "A full-day agentic-engineering build asks teams to plan, implement, test, and ship a working product with autonomous coding workflows.", "202 visible attendees, a twelve-hour build, live demos, and $4,500 in cash prizes provide strong room and execution signals.", "Standard admission is sold out; six approval-gated volunteer tickets and donation-priced tickets remain. The early start earns a substantive weekend exception.", "https://luma.com/l74b4u7b", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 13",
      verdict: "One substantive multimodal-AI build",
      note: "The only SF option clearing the filters combines professional instruction, hands-on production, and a same-day film showcase.",
      events: [
        card("AI Filmmaking Masterclass + Hackathon", "9:00 AM - 7:00 PM PT", "Private address, Financial District", "The Multimodal Society, The AI Collective, and GMI Cloud", "A practical masterclass on direction, consistency, editing, sound, and delivery leads into a four-hour build and big-screen short-film showcase.", "198 visible attendees, application-based admission, frontier-model partners, tool credits, and a finished-film requirement are strong signals.", "Standard $99 tickets remain available. The all-day schedule is a substantive weekend exception.", "https://luma.com/pw54q8np", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, September 14",
      verdict: "One exceptional builder demo night",
      note: "WorkOS's recurring no-slides, no-pitches format is the clear best room on a Dreamforce-heavy Monday.",
      events: [
        card("Demo Night @ WorkOS (September)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS and Michael Grinich", "Builders show live side projects, internal tools, open-source work, and startups, with feedback and discussion replacing decks or company pitches.", "401 visible attendees, a recurring builder audience, and a strict live-demo format make this an exceptional broad technical room.", "Event full; join the waitlist. No slides and no pitches.", "https://luma.com/demo-night-sept2026", "9.7/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 15",
      verdict: "Three strong agent-engineering rooms",
      note: "A massive practitioner showcase leads, followed by a durable-agent architecture deep dive and a new voice-plus-robotics program.",
      events: [
        card("All Things Agent Setups", "5:30 PM - 8:30 PM PT", "Sentry, 45 Fremont St", "Sentry and All Things Web", "Practitioners compare the stacks, tools, observability, and workflow choices behind agents they actually use for coding, work, and software factories.", "510 visible attendees, Sentry hosting, and rapid practitioner lightning demos create a strong builder room.", "Registration is open.", "https://luma.com/allthings-kj2x", "9.5/10", "Sign up now"),
        card("Builder After Hours: Durable Agents with MongoDB, Temporal & Keycard.ai", "5:30 PM - 8:00 PM PT", "Avotoasty, 101 California St", "MongoDB, Temporal, and Keycard", "An end-to-end reference architecture covers durable ingestion, retries, orchestration, vector search, per-agent authorization, and failure recovery.", "Attendance is hidden, but the unusually concrete technical scope, named speakers, and open reference implementation are excellent signals.", "Registration is open with approval.", "https://luma.com/hu0e1aks", "9.4/10", "Sign up now"),
        card("Audio Layer 3.0: Voice × Robotics", "6:00 PM - 9:00 PM PT", "Tavus, 35 Stillman St", "Tavus, ai-coustics, LiveKit, Gradium, and Lightberry", "Live demos and a technical panel explore low-latency speech, expressive voice, embodied interfaces, and the audio layer for robotics.", "43 visible attendees and named voice-infrastructure and robotics partners create a focused room above the normal attendance floor.", "Registration is open with approval.", "https://luma.com/uxmg18ib", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 16",
      verdict: "Three strong production-engineering rooms",
      note: "Hands-on customer-experience demos lead, with forward-looking inference planning and a well-established Rust graphics meetup.",
      events: [
        card("Customer Experience & AI Demo Night", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Plain and Persona", "Support engineers and forward-deployed teams show live systems for AI-assisted customer operations, with practical implementation discussion after each demo.", "Attendance is hidden, but direct Plain and Persona participation, an approval gate, and a technical support-engineering audience are strong signals.", "Registration is open with approval.", "https://luma.com/cxdemonight", "9.3/10", "Sign up now"),
        card("The Next AI Stack: Planning Models and Infrastructure", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Enrich, Baseten, and Cotality", "A technical program examines how teams should plan inference capacity, architecture, and serving strategy as models and NVIDIA's Vera Rubin platform evolve.", "40 visible attendees and named infrastructure practitioners from Baseten and Cotality create a focused room above the normal floor.", "Registration is open with approval.", "https://luma.com/enrich-15lm", "9.1/10", "Sign up now"),
        card("Bay Area Rust Graphics Meetup", "6:00 PM - 8:30 PM PT", "Atuin office, San Francisco", "Bay Area Rust and Zed", "Three talks cover graphics engineering in Rust, with space for technical questions and discussion among systems practitioners.", "136 visible attendees, Zed organizer involvement, and a focused three-talk agenda make this a credible non-AI technical alternative.", "Registration is open with approval.", "https://luma.com/9oiujuyw", "8.5/10", "Consider"),
      ],
    },
    {
      date: "Thursday, September 17",
      verdict: "Three exceptional AI research and implementation rooms",
      note: "A Google-and-NVIDIA journal club leads a spotlight-paper reading group and a practical internal-AI show-and-tell.",
      events: [
        card("AI Journal Club ft. Google + NVIDIA", "5:30 PM - 8:00 PM PT", "Workato, private SF address", "AI Journal Club and Workato", "Google DeepMind and NVIDIA researchers present work on reasoning search, reinforcement learning, post-training, and nondeterministic kernels, followed by technical discussion.", "Attendance is hidden, but two named frontier-lab research teams, an approval gate, and a paper-driven format make this an exceptional room.", "Event full; join the waitlist.", "https://luma.com/0460rgnq", "9.8/10", "Sign up now"),
        card("Persona ML Reading Group: Federico Bianchi", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Persona Machine Learning", "Federico Bianchi leads a close discussion of TTT-Discover, combining reinforcement learning and search to discover test-time training strategies.", "Attendance is hidden, but the ICML 2026 Spotlight paper, named research lead, and approval-gated reading-group format are exceptional signals.", "Registration is open with approval.", "https://luma.com/personabianchi", "9.6/10", "Sign up now"),
        card("AI-Pilling Your Company: Builder Show & Tell", "5:00 PM - 8:00 PM PT", "Private address, South Beach", "Decagon, Accel, and Andreessen Horowitz", "Operators from Decagon, Ramp, Cursor, and Cognition show the internal AI workflows their own teams use, with implementation details rather than sales decks.", "64 visible attendees, a curated operator audience, and named builder teams create a strong practical room despite investor co-hosts.", "Registration is open with approval. The 5:00 PM start meets the weekday floor.", "https://luma.com/tewv4rbz", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 18",
      verdict: "One strong voice-AI healthcare room",
      note: "The SF finalist has live demos and named ML and clinical operators; the larger frontier-research panel was excluded because its venue is in Berkeley.",
      events: [
        card("The AI Future of Healthcare: Voice Edition", "6:00 PM - 9:30 PM PT", "Entrepreneurs First, 501 Folsom St", "Noah Labs and Entrepreneurs First", "Live demos and a fireside examine voice biomarkers, early disease detection, clinical evidence, regulatory clearance, and the path from ML research to deployment.", "The event targets 50-plus healthcare-AI operators and investors and names technical founders from Noah Labs and Amplifier Health.", "Registration is open with approval.", "https://luma.com/65hodpiq", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, September 19",
      verdict: "One unusually deep physical-AI reading room",
      note: "A newly listed AgiBot keynote and technical roundtable beat the day's broader, beginner-friendly hackathons despite starting an hour before the normal weekend floor.",
      events: [
        card("Robotics & World Models Reading Club 29: AgiBot × ManiFormer", "2:00 PM - 5:00 PM PT", "Private address, San Francisco", "Saturday Robotics", "An AgiBot keynote and long open-floor roundtable examine robotic world models, embodied intelligence, and the technical details behind next-generation physical AI.", "Only five attendees are visible, but the listing is new and the established series has previously drawn researchers from DeepMind, Boston Dynamics, NVIDIA, Stanford, Berkeley, and Physical Intelligence.", "Registration is open with approval. The unusually technical program earns a one-hour weekend timing exception; pre-readings are not yet posted.", "https://luma.com/sk70aihm", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 20",
      verdict: "Open night",
      note: "Both primary calendars and the SF fallback offered only an early all-level code-and-coffee, an early book club, and a founder-focused yacht party.",
      events: [],
    },
    {
      date: "Monday, September 21",
      verdict: "One exceptional global-AI conversation",
      note: "A closed-room program with the Greek prime minister and leaders from Sequoia, Runway, Reflection AI, and Resolve AI is the clear after-work choice.",
      events: [
        card("The Future of AI Elsewhere | Greeking Out in SF", "6:00 PM - 8:30 PM PT", "Shack15, private SF address", "Endeavor Greece and The Hellenic Initiative", "The Greek prime minister joins Sequoia partner Konstantine Buhler and the founders of Runway, Reflection AI, Resolve AI, and Arena for candid conversations on the direction of AI.", "106 visible attendees, an approval gate, TechCrunch moderation, and a named frontier-founder roster indicate an unusually strong, tightly curated room.", "Registration is open with approval. The event is explicitly closed and by invitation, so acceptance may be selective.", "https://luma.com/greekingoutSF", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 22",
      verdict: "Two excellent coding-agent and robotics rooms",
      note: "A hands-on Codex Voice demo night leads, followed closely by live robotics demos and a practitioner panel on embodied-AI deployment.",
      events: [
        card("Codex Community Meetup — Voice Workflows", "6:00 PM - 8:00 PM PT", "Private address, San Francisco", "Codex SF, WorkOS, and Parallel Web Systems", "Live demos show how builders use voice to launch and steer coding tasks, monitor agents, and coordinate multi-thread workflows without returning to the keyboard.", "149 visible attendees, an approval gate, and a community explicitly centered on serious coding-agent practice create a focused technical room.", "Registration is open with approval.", "https://luma.com/5cewfkx1", "9.4/10", "Sign up now"),
        card("Robotics Demos & Meet", "5:00 PM - 9:00 PM PT", "Bright Data, 625 2nd St", "Bright Data, HackerSquad, and Devang Adhyaru", "Live robotics demos and a practitioner panel cover robot learning, VLA models, manipulation, simulation, teleoperation, data, infrastructure, and real-world deployment.", "132 visible attendees, an approval gate, a live-demo format, and an explicit researcher and engineer audience make this a strong embodied-AI room.", "Registration is open with approval. The 5:00 PM start meets the weekday floor.", "https://luma.com/bright-hboi", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 23",
      verdict: "One selective technical AI room",
      note: "A thirteenth-edition, engineer-driven meetup with three technical deep dives is the only option that clears the substance bar; speakers remain unannounced.",
      events: [
        card("AI Nerd Meet Up", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "Fireworks and LlamaIndex", "A small invite-only group of technical founders and AI leaders shares three practical deep dives on cutting-edge AI systems and tools.", "Attendance is hidden, but the approval gate, thirteenth monthly edition, Fireworks stewardship, LlamaIndex hosting, and engineer-driven agenda are strong small-room signals.", "Registration is open with approval. Speakers are still TBD, so this stays below the top tier despite the strong host and format signals.", "https://luma.com/pgrz81t0", "8.3/10", "Consider"),
      ],
    },
    {
      date: "Thursday, September 24",
      verdict: "Three exceptional AI systems rooms",
      note: "CMU and Berkeley research-to-practice talks lead a large agent-and-API meetup and a small new-listing exception on active-active multi-cloud inference.",
      events: [
        card("SF Systems: Research to Practice, from Inference Engines to Multimodal Coding", "5:30 PM - 8:30 PM PT", "LatchBio, 185 Berry St, Suite 1800", "LatchBio", "CMU researcher Shreya Shankar presents Quail's domain-specific AI-SQL inference engine, then Berkeley researcher Parker Zeigler presents interactive multimodal programming systems and their compiler foundations.", "336 visible attendees, two named research talks, and unusually concrete topics spanning query planning, caching, host overhead, compilers, and human-computer interaction make this the window's strongest new room.", "Registration is open.", "https://luma.com/mzkxb97z", "9.7/10", "Sign up now"),
        card("Agents & APIs SF Developer Meetup", "5:30 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "Postman", "Canva, smol machines, and Astro practitioners present production patterns for MCP-powered apps, branchable cloud workloads, agent infrastructure, and API-first development.", "304 visible attendees, a developer-only focus, and multiple named implementation talks from credible product and infrastructure teams create an excellent applied room.", "Registration is open. Doors open at 5:15 PM.", "https://luma.com/Sept-SF-Agents-APIS-meetup", "9.4/10", "Sign up now"),
        card("Building Active-Active, Multi-Cloud Systems", "6:00 PM - 8:00 PM PT", "Baseten, 560 Davis St", "Baseten", "Baseten's head of infrastructure explains the architecture and tradeoffs behind resilient active-active, multi-cloud AI systems, including routing, consistency, failure recovery, and cost.", "Eight attendees are visible, below the normal floor, but this is a new listing with a named infrastructure leader, a production case study, and a highly specific systems agenda.", "Registration is open with approval. This qualifies under the new-listing exception.", "https://luma.com/rgj99uu9", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 25",
      verdict: "Open night",
      note: "Both primary calendars and the SF fallback offered only a broad longevity-and-human-experience summit, a baseball-suite social, and founder-networking events; none survived the substance and room-fit filters.",
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
