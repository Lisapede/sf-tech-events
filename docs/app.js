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
  checkedAt: "August 31, 2026",
  updatedAt: "August 31, 2026",
  windowLabel: "August 31, 2026 → September 14, 2026",
  featured: [
    {
      title: "Voice Research Club: Models, Evals & Real-Time Interaction",
      date: "Thu, Sep 3",
      recommendation: "Sign up now",
      summary: "A research-first launch pairs an NVIDIA full-duplex speech talk with extended technical discussion and no sales presentations.",
      link: "https://luma.com/nbaa4d7r",
    },
    {
      title: "CoreWeave Hacks: Agent Loops Hackathon",
      date: "Sat, Sep 12",
      recommendation: "Sign up now",
      summary: "A two-day, heavily resourced build uses the CoreWeave stack to create, trace, evaluate, and improve autonomous agent loops.",
      link: "https://luma.com/coreweavehacks",
    },
    {
      title: "Demo Night @ WorkOS (September)",
      date: "Mon, Sep 14",
      recommendation: "Sign up now",
      summary: "WorkOS brings 339 builders together for live demos only—no slides and no company pitches.",
      link: "https://luma.com/demo-night-sept2026",
    },
  ],
  days: [
    {
      date: "Monday, August 31",
      verdict: "Two excellent embodied-AI working rooms",
      note: "Choose hands-on robot bench time or a focused paper discussion on the missing interfaces behind generalist robotics.",
      events: [
        card("Degrees of Freedom: Bring Your Own Robot", "6:00 PM - 9:00 PM PT", "Private address, Mission District", "Rally SF and Mission Robotics", "A working night for embodied-AI builders offers real bench time, mixed-discipline debugging, and end-of-night demos rather than passive networking.", "98 visible attendees, a recurring format, and a dedicated robotics workshop create a credible hands-on room.", "Registration is open. Bring a robot or a concrete sim, policy, perception, or hardware problem; the copy mistakenly calls Monday a Tuesday.", "https://luma.com/278ujx64", "8.9/10", "Sign up now"),
        card("90/30 Club: Robots Need More than VLA and World Models", "7:00 PM - 10:00 PM PT", "Mox, 1680 Mission St", "90/30 Club", "A weekly ML paper club reads and debates a current position paper on data, embodiment, world-model, and reward interfaces for generalist robotics.", "93 visible attendees, a direct paper link, an hour of quiet reading, and a full hour of technical discussion make this an unusually substantive recurring room.", "Registration is open. Reading starts at 7:00 PM, discussion at 8:00 PM, and the final hour is social.", "https://luma.com/je0wu83j", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 1",
      verdict: "Three exceptional technical rooms",
      note: "Sim-to-real research leads, with a production-evals panel and a devtools launch as excellent alternatives.",
      events: [
        card("The Reality Gap: A Sim-to-Real Seminar", "6:00 PM - 9:00 PM PT", "Mission Robotics, 3001 19th St", "Rally SF, Mission Robotics, and Protege", "The first of a five-session working seminar tackles perception, contact, data collection, locomotion, world models, and the points where simulated policies fail on hardware.", "The room is capped at 40 with a committed core group, direct researcher targeting, recorded talks, and private working discussion afterward.", "Event full; join the waitlist. Include what you are working on in the application; dinner is provided.", "https://luma.com/rallysf-uqiv", "9.6/10", "Sign up now"),
        card("Forward Deployed: Evals — Beyond the Vibe Check", "6:00 PM - 8:30 PM PT", "Private address, North Beach", "Forward Deployed and Founders Cafe", "A practitioner panel covers production eval datasets, online guardrails, LLM judges, trajectory grading, build-versus-buy, and organizational ownership.", "Speakers from LangChain, Langfuse, Galileo, CoreWeave, and Mercor create an unusually concentrated evals room despite hidden attendance.", "Event full; join the waitlist.", "https://luma.com/85oi0k2n", "9.5/10", "Sign up now"),
        card("Wasmer: Beyond Containers", "6:30 PM - 9:30 PM PT", "760 Market St", "Wasmer, Ayush Ojha, and Syrus Akbary", "New Wasmer launches, live demos, and deep technical Q&A focus on secure software execution across local, browser, application, and cloud environments.", "407 visible attendees, the Wasmer founder on stage, and an intentionally technical engineering audience make this an excellent devtools room.", "Registration is open. The direct page confirms the later 6:30-9:30 PM window even though its body copy still shows an older time.", "https://luma.com/3ns1f786", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 2",
      verdict: "Two strong infrastructure and physical-AI rooms",
      note: "A deep BYOC architecture session leads, with a focused positioning and robotics fireside as the alternative.",
      events: [
        card("Whose Cloud Is It Anyway? BYOC in the Age of AI", "6:00 PM - 9:00 PM PT", "221 11th St", "Open Source Analytics Community, Altinity, and Nirvana Labs", "A three-talk program goes deep on BYOC control planes, VPC access, sovereignty, IOPS economics, shared responsibility, and failure modes.", "77 visible attendees, named practitioners, an unusually detailed agenda, and two hours of talks create a serious infrastructure room.", "Registration is open. Food and drinks are included.", "https://luma.com/ruft92qf", "9.2/10", "Sign up now"),
        card("Fireside Chat: Navigating Physical AI", "5:00 PM - 7:00 PM PT", "Silicon Valley Bank, 222 2nd St", "Point One Navigation, Vouch, and Silicon Valley Bank", "Point One's founder will unpack the positioning layer behind robots, drones, and autonomous vehicles, plus the realities of long R&D cycles.", "Attendance is hidden, but an approval gate, SVB's deep-tech community, and a named physical-AI founder are strong quality signals.", "Event full; join the waitlist. Some founder and capital discussion remains, but the core fireside is technically substantive.", "https://luma.com/NavigatingPhysicalAI", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 3",
      verdict: "Three excellent production and research rooms",
      note: "A research-first voice launch leads, with production data infrastructure and field-tested physical AI as strong alternatives.",
      events: [
        card("Voice Research Club Launch: Models, Evals & Real-Time Interaction", "5:30 PM - 8:30 PM PT", "Private address, Central Waterfront", "Frontier Research Club and Voice Arena", "A paper-driven launch pairs an NVIDIA full-duplex speech presentation with extended discussion of role control, voice conditioning, latency, naturalness, and missing evaluation benchmarks.", "Attendance is hidden, but a named NVIDIA ADLR researcher, explicit no-sales rule, approval gate, and recurring research-club format create exceptional room-quality evidence.", "Registration is open with approval. Light dinner precedes two concise technical talks and ninety minutes of research discussion.", "https://luma.com/nbaa4d7r", "9.6/10", "Sign up now"),
        card("Scaling the Data Lake for the AI Era", "5:30 PM - 7:30 PM PT", "SHACK15, 1 Ferry Building", "TRM Labs, StarRocks, PhoenixAI, and SHACK15", "A practitioner-led session on petabyte-scale AI data, query optimization, and real-time analytics maps directly to production platform work.", "Attendance is hidden, but repeat-event turnout, the SHACK15 venue, and named TRM and PhoenixAI engineers indicate a serious infrastructure audience.", "Registration is open with approval. The direct page consistently shows a 5:30 PM start.", "https://luma.com/trmlabs-3kox", "9.4/10", "Sign up now"),
        card("Deploying Physical AI in the Real World", "5:30 PM - 9:00 PM PT", "Private address, Mission District", "Savant VC and Instawork Robotics Lab", "Founding engineers from Skild AI, Dexterity, and Weave Robotics dissect field data, uptime, teleoperation, fleet learning, evals, and deployment failure modes.", "Attendance is hidden, but the four named deployment practitioners, approval gate, and unusually concrete field-operations agenda are exceptional room signals.", "Registration is open with approval. The talk and Q&A run from 6:30 PM to 7:25 PM, followed by a long technical mingle.", "https://luma.com/7b9joney", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 4",
      verdict: "One credible health-tech community room",
      note: "The attendee count now clears the floor, but the program remains a casual operator happy hour.",
      events: [
        card("San Francisco Health Tech Happy Hour with HTN & Vinta", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Health Tech Nerds and Vinta Software", "A focused healthcare gathering avoids pitch decks and should support useful operator conversation on the opportunities and constraints shaping health tech.", "111 visible attendees and backing from the 30,000-member Health Tech Nerds community clear the normal room-size floor.", "Registration is open with approval. This is a casual networking room with no technical program, so it remains a lower-confidence Consider.", "https://luma.com/nh2t70zk", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 5",
      verdict: "One exceptional all-day spatial-AI build",
      note: "The program starts early but earns a weekend exception through technical depth and a full day of hands-on work.",
      events: [
        card("Spatial Intelligence + Generative 3D Hackathon", "10:00 AM - 8:00 PM PT", "Private address, Fort Mason", "World Labs, Tripo, mint.gg, Convex, and Founders Inc.", "Teams build interactive worlds, physical-AI simulations, or creative 3D systems with large world models, generated assets, agents, and real-time backends.", "Direct participation from World Labs, Tripo, mint.gg, and Convex plus a demo-and-judging requirement indicate a serious technical build.", "Event full; join the waitlist. Optional check-in and partner deep dives begin at 8:30 AM before hacking starts at 10:00 AM; this is a substantive schedule exception.", "https://luma.com/b101ml40", "9.0/10", "Consider"),
      ],
    },
    {
      date: "Sunday, September 6",
      verdict: "Open night",
      note: "The primary calendars yielded only an early, hidden-attendance media-theory circle; the SF fallback's sole listing was a BART event in San Jose.",
      events: [],
    },
    {
      date: "Monday, September 7",
      verdict: "Open night",
      note: "The primary calendars offered only founder soccer and an early generic GTM session; the SF fallback calendar had no listing for the date.",
      events: [],
    },
    {
      date: "Tuesday, September 8",
      verdict: "Two excellent technical rooms",
      note: "A no-slides agent-infrastructure demo night leads, with a hands-on AI pricing and metering workshop for PMs and engineers.",
      events: [
        card("Dev Tools & Infra Demo Night at Hogpatch", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "1984, PostHog, Heavybit, and Essence Venture Capital", "Nine live demos span agent context, cloud infrastructure, security harnesses, observability, reusable skills, inference routing, and durable sandboxes.", "Direct PostHog and Heavybit involvement, an explicit engineer audience, and the no-slides format are excellent hidden-attendance signals.", "Registration is open with approval. Demos begin at 6:30 PM.", "https://luma.com/6wyras70", "9.5/10", "Sign up now"),
        card("AI Credits & Metering Workshop", "5:45 PM - 8:00 PM PT", "Private address, Financial District", "Schematic", "A working session for PMs and engineers covers credit models, top-ups, enforcement, migrations, and implementation of usage-based AI billing.", "41 visible attendees, a bring-your-laptop format, and a promised working pricing model make this a focused small room.", "Registration is open. The topic is product infrastructure rather than model engineering, but it is unusually practical.", "https://luma.com/29otrk4k", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 9",
      verdict: "Three exceptional applied-AI rooms",
      note: "Production-agent failure modes lead, followed by rigorous embodied-AI research and an agentic-PM demo roundtable.",
      events: [
        card("Software Factories Meet Production", "6:00 PM - 8:00 PM PT", "Datadog, 50 Fremont St", "Datadog, Cleric, and the Agentic AI Foundation", "Three compact practitioner talks dissect software-factory orchestration, performance testing, verification, security, and the failure modes that changed the final designs.", "Only five attendees are visible, but this is a newly listed room with Datadog hosting, named Humanlayer and Tensorlake founders, an explicit agent-builder gate, and an exact-profile war-story format.", "Registration is open with approval. Talks begin at 6:40 PM and stay deliberately short to preserve detailed Q&A.", "https://luma.com/87no10np", "9.5/10", "Sign up now"),
        card("Bay Area Frontier Research Club #22 — Robotics & Embodied AI", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Frontier Research Club and Mission Robotics", "A curated research forum reserves most of the evening for critique of robotics papers, methods, evaluation, failure modes, and real-hardware deployment.", "The approval gate, advance paper materials, Mission Robotics venue, and explicit researcher and research-engineer audience are exceptional hidden-room signals.", "Registration is open with approval. The talk titles are still TBA, but presenter submissions are screened for rigor.", "https://luma.com/7wv4khq9", "9.5/10", "Sign up now"),
        card("Agentic PM Kickoff with PostHog, Linear, Supabase & Dreambase", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "PostHog, Linear, Supabase, and Dreambase", "Four product teams will demo agents automating PM work from bug triage to spec writing, then open the room for a practical roundtable.", "Direct hosting by an unusually strong product-tool stack, limited capacity, and a no-slides rule are excellent PM and builder signals.", "Registration is open with approval. This takes place the night before Lenny's Summit.", "https://luma.com/posthog-tpmz", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 10",
      verdict: "Three distinct physical-AI, PM, and design rooms",
      note: "The marquee hardware room is waitlist-only; the curated AI-PM dinner and Amplitude's senior-design program remain open with approval.",
      events: [
        card("137th SF Hardware Meetup: Physical AI Robotics", "6:30 PM - 9:30 PM PT", "Private address, Mission District", "SF Hardware Meetup and Mission Robotics", "A talk-and-demo program pairs physical-AI founders and Zoox hardware leadership with a community open mic for working prototypes.", "251 visible attendees, the 137th edition of a 10,500-member hardware community, Mission Robotics hosting, and New Theory AI sponsorship are exceptional signals.", "Event full; join the waitlist. The program includes two featured talks, prototype demos, and a long technical mingle.", "https://luma.com/84lattht", "9.4/10", "Sign up now"),
        card("Designing with AI: Panel hosted by Amplitude", "5:30 PM - 8:30 PM PT", "Private address, Yerba Buena", "Amplitude", "Quick-fire live demos and a design-leader panel examine how senior teams are changing workflows, shipping their own designs, and bringing AI into daily product work.", "A 100-person cap, approval gate, and speakers from SpaceXAI, Slack, Ramp, and Eve provide strong hidden-attendance and practitioner signals.", "Registration is open with approval. The room is curated for senior designers; demos begin at 6:00 PM.", "https://luma.com/hc9mndo1", "9.0/10", "Sign up now"),
        card("humans in the loop", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Hardik Mittal, Denise Teng, Manoj Soundararajan, and JPMorgan Innovation Economy", "A capped dinner is designed specifically for AI product managers and forward-deployed engineers at top-tier companies.", "Capacity is 30, admission is approval-gated, and the hosts include a Decagon agent PM plus a former Meta PM now at Gradient; the exact peer mix fits the taste profile unusually well.", "Registration is open with approval. This is a curated peer dinner rather than a structured technical program.", "https://luma.com/islaag11", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 11",
      verdict: "One exceptional agent-systems lecture",
      note: "Gray Area hosts the only evening room that clears the technical, attendance, timing, and topic filters.",
      events: [
        card("Agentworld x Superdark Factory", "6:30 PM - 9:00 PM PT", "Gray Area Grand Theater, 2665 Mission St", "Gray Area, Antikythera, and Disintegrator", "A seated double lecture examines hybrid human-AI societies and software production when fully automated agent systems move people outside the loop.", "153 visible attendees, Gray Area hosting, Antikythera research, MIT Press ties, and named talks from Benjamin Bratton and LaunchDarkly AI head Marek Poliks make this a high-signal intellectual room.", "$10 tickets are available. The all-ages program is seated and focused on research and systems thinking rather than networking.", "https://luma.com/fawtwq0b", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, September 12",
      verdict: "Three exceptional all-day AI hackathons",
      note: "Agent loops and open-model evaluation lead; a 140-person agentic-coding build is the strongest open-attendance alternative.",
      events: [
        card("CoreWeave Hacks: Agent Loops Hackathon", "9:00 AM Sat - 5:00 PM Sun PT", "CoreWeave, 400 Alabama St", "Weights & Biases, CoreWeave, and AGI House", "A two-day build focuses on agents that reason, act, catch mistakes, trace and evaluate their own iterations, and improve over repeated loops.", "Attendance is hidden, but the approval gate, full CoreWeave agent stack, W&B Weave lineage, expert judging, and production-readiness prize create an exceptional builder room.", "Registration is open with approval. This is a substantive weekend exception and runs through Sunday afternoon; meals and workstations are provided.", "https://luma.com/coreweavehacks", "9.8/10", "Sign up now"),
        card("Open Model Hack — Gradient x Google DeepMind", "9:30 AM - 7:30 PM PT", "Private address, Northern Waterfront", "tokens&, Gradient, Google DeepMind, Lambda, Nango, and Respan", "AI engineers and researchers will compare current open models on real problems spanning inference, fine-tuning, serving, evaluation, and production tradeoffs.", "Attendance is hidden, but the application gate, Google DeepMind Gemma participation, oversubscribed organizer history, technical partner stack, and live demos are exceptional signals.", "Registration is open with approval. Teams are capped at four; the all-day schedule is a substantive weekend exception.", "https://luma.com/openmodelhack", "9.6/10", "Sign up now"),
        card("Qoder AI Hackathon", "9:00 AM - 9:00 PM PT", "Private address, Rincon Hill", "B.E.L.L.E Community and Qoder", "A full-day agentic-engineering build asks teams to plan, implement, test, and ship a working product with autonomous coding workflows.", "140 visible attendees, a twelve-hour build, live demos, and $4,500 in cash prizes provide strong room and execution signals.", "Registration is open with approval; six volunteer tickets remain and donation-priced tickets are available. The early start earns a substantive weekend exception.", "https://luma.com/l74b4u7b", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, September 13",
      verdict: "One substantive multimodal-AI build",
      note: "The only SF option clearing the hard filters combines professional instruction, hands-on production, and a same-day film showcase.",
      events: [
        card("AI Filmmaking Masterclass + Hackathon", "9:00 AM - 7:00 PM PT", "Private address, Financial District", "The Multimodal Society, Roan Weigert, and Bond AI", "A practical masterclass on direction, consistency, editing, sound, and delivery leads into a four-hour build and big-screen short-film showcase.", "Attendance is hidden, but application-based admission, a professional director with 1,600-plus videos, frontier-lab partners, tool credits, and a finished-film requirement are strong signals.", "Free early-bird sales have ended; standard $49 tickets remain available. The all-day schedule is a substantive weekend exception.", "https://luma.com/pw54q8np", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, September 14",
      verdict: "One exceptional builder demo night",
      note: "WorkOS's recurring no-slides, no-pitches format is the clear best room on a Dreamforce-heavy Monday.",
      events: [
        card("Demo Night @ WorkOS (September)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS and Michael Grinich", "Builders show live side projects, internal tools, open-source work, and startups, with feedback and discussion replacing decks or company pitches.", "339 visible attendees, direct WorkOS hosting, a recurring format, and strict live-demo rules make this an exceptional builder room.", "Registration is open. The demo lineup has not yet been announced.", "https://luma.com/demo-night-sept2026", "9.7/10", "Sign up now"),
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
