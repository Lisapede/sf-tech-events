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
  checkedAt: "August 26, 2026",
  updatedAt: "August 26, 2026",
  windowLabel: "August 26, 2026 → September 9, 2026",
  featured: [
    {
      title: "Demo Night SF: Anthropic + Postman + Supabase + Vercel",
      date: "Thu, Aug 27",
      recommendation: "Sign up now",
      summary: "A waitlisted 500-person room features production-agent demos across an unusually strong developer-tool stack.",
      link: "https://luma.com/august-SF-supabase-vercel-postman",
    },
    {
      title: "The Reality Gap: A Sim-to-Real Seminar",
      date: "Tue, Sep 1",
      recommendation: "Sign up now",
      summary: "A capped working seminar for researchers moving policies, perception, and world models from simulation onto hardware.",
      link: "https://luma.com/rallysf-uqiv",
    },
    {
      title: "Dev Tools & Infra Demo Night at Hogpatch",
      date: "Tue, Sep 8",
      recommendation: "Sign up now",
      summary: "Nine live demos span agent context, security, observability, inference, sandboxes, and durable infrastructure.",
      link: "https://luma.com/6wyras70",
    },
  ],
  days: [
    {
      date: "Wednesday, August 26",
      verdict: "Three exceptional AI systems rooms",
      note: "A technical rooftop panel leads, with two high-signal waitlists for embedded agents and physical-AI manufacturing.",
      events: [
        card("AI Infra Kebab", "5:00 PM - 8:00 PM PT", "One Kearny Club, 23 Geary St", "Neon, Vercel Events, and Andre Landgraf", "A lightning panel with OpenAI, Databricks, and Vercel turns a rooftop social into a concentrated AI-infrastructure room.", "119 visible attendees, direct Neon and Vercel involvement, and speakers Max Stoiber, Nikita Shamgunov, and Malte Ubl are excellent signals.", "Registration is open with approval. The panel is brief, so arrive ready to target infrastructure builders during the social time.", "https://luma.com/kebab", "9.5/10", "Sign up now"),
        card("Slack Agents Night | WorkOS x CopilotKit", "5:30 PM - 8:30 PM PT", "WorkOS, 660 Market St", "CopilotKit, WorkOS, Mastra, and Cognition", "Live demos of Atlas, Kite, OpenTag, Mastra Channels, and Devin in Slack focus on agents embedded where teams already work.", "200 visible attendees, direct WorkOS hosting, and a builder-heavy demo format make this almost perfectly matched to the profile.", "Event full; join the waitlist. Demos begin at 6:00 PM, followed by networking at 7:00 PM.", "https://luma.com/copilo-x812", "9.4/10", "Sign up now"),
        card("AI, X-rays, and Manufacturing: Lumafield SF Open House", "5:00 PM - 7:30 PM PT", "Lumafield Headquarters, 665 3rd St", "Lumafield", "A live podcast, industrial CT demos, tactile robotics, and manufacturing automation make this a substantive physical-AI showcase.", "293 visible attendees, direct Lumafield hosting, named hard-tech founders, and working X-ray hardware provide unusually strong room signals.", "Event full; join the waitlist. Bring an object to scan if you get in and time permits.", "https://luma.com/uo8fmq5o", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 27",
      verdict: "Three exceptional practitioner rooms",
      note: "The two marquee rooms are waitlist-only; the FDE technical talks remain open with approval.",
      events: [
        card("Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "Anthropic, Postman, Supabase, and Vercel", "Concrete demos cover proactive multiplayer agents, context graphs, secure tool connections, and a live production backend build.", "500 visible attendees and named technical speakers from four top developer platforms should create exceptional applied-AI density.", "Event full; join the waitlist. Doors open at 5:15 PM and the room will be large.", "https://luma.com/august-SF-supabase-vercel-postman", "9.8/10", "Sign up now"),
        card("Coffeehouse by Ode with Anthropic", "5:30 PM - 7:30 PM PT", "Salesforce Tower, 58th Floor", "Ode with Anthropic", "An engineer-to-engineer practitioner room centers on applied-gen-AI demos, debugging failures, and hard implementation questions.", "The invite-only capacity, no-recruiter rule, Anthropic panel, Mechanical Orchard demo, and Ode project showcase are exceptional hidden-attendance signals.", "Event full; join the waitlist. Doors close at 6:00 PM and no guests are allowed.", "https://luma.com/coffeehouse-sf-aug-26", "9.7/10", "Sign up now"),
        card("From the Frontlines: Technical Talks with FDE Leaders", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Factory, Reducto, and Exa", "Technical talks on enterprise deployment, customer-facing engineering, and evals as the FDE product spec are exactly matched to the profile.", "Direct hosting by three respected AI infrastructure companies and an audience of FDEs, solutions engineers, and deployment leaders are excellent signals.", "Registration is open with approval. The agenda includes three talks, a deployment-leader fireside, and focused peer networking.", "https://luma.com/factoryai-7w55", "9.6/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 28",
      verdict: "Two strong evening rooms plus one early summit",
      note: "The after-work options clear the room-quality floor; the excellent open-source summit is shown with a timing penalty.",
      events: [
        card("Design Hackathon: The Vibe Coding Night for Designers", "5:30 PM - 8:30 PM PT", "Private address, SoMa", "IxDF San Francisco, Tin Computer, and Cepien AI", "A ServiceNow AI design strategist pairs a practical product talk with a live, ten-builder vibe-coding challenge.", "51 visible attendees, a structured demo format, and an explicit mix of designers, PMs, engineers, and researchers make this a credible small room.", "Registration is open. Only selected builders compete, but the talk and live builds are open to attendees.", "https://luma.com/lbfyvfe4", "8.4/10", "Consider"),
        card("Tech Makers Goes West — Robotics and Beyond", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Tech Makers and Pebblebed VC", "Robotics, drones, and emerging-technology demos offer a tangible alternative to generic startup pitch nights.", "71 visible attendees and a technically serious Pebblebed team with deep OpenAI, FAIR, and Stripe AI roots support the room-quality inference.", "Registration is open with approval. The format includes pitches and investor conversation, so expect more startup energy than a pure engineering meetup.", "https://luma.com/3x24sk2k", "7.8/10", "Consider"),
        card("Open Source AI Summit SF", "3:00 PM - 7:00 PM PT", "Private address, San Francisco", "BuildPlanet and NEAR AI", "A dense technical program covers model learning, personal AI, self-improving systems, open science, and AI research infrastructure.", "557 visible attendees and speakers behind PyTorch, Fireworks, NVIDIA Research, and the Transformer paper make the technical signal exceptional.", "The listing still accepts approval requests although the copy says full capacity. It starts two hours before the weekday floor, so it is shown only as best available.", "https://luma.com/buildp-c5h9", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, August 29",
      verdict: "Three substantive builder sessions",
      note: "Two full-day hackathons earn schedule exceptions; the evening voice-agent build is the best timing fit.",
      events: [
        card("Agent Harness Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, 625 2nd St", "WeMakeDevs, Bright Data, Qodo, TrueFoundry, and OpenAI", "Teams build agents with MCP connections, sandboxed execution, human approvals, subagents, durable sessions, and live final demos.", "541 visible attendees, serious infrastructure partners, and an open-source repo requirement point to a real builder room.", "Event full; join the waitlist. The all-day schedule is a substantive weekend exception; OpenAI provides attendee credits.", "https://luma.com/agent-harness", "9.1/10", "Consider"),
        card("Codex Community Hackathon — San Francisco", "10:00 AM - 10:00 PM PT", "Hogpatch, 2360 3rd St", "Tenor, Runloop, and PostHog", "An intensive day of Codex demos, mentoring, product development, testing, and final presentations is designed around shipping real projects.", "54 visible attendees, PostHog's builder space, technical support, and a twelve-hour build window make this a credible hands-on room.", "Registration is open with approval. The morning start is a substantive weekend exception.", "https://luma.com/qbp3ck7t", "8.9/10", "Consider"),
        card("Guava Voice AI Hackathon: Build Night SF", "5:30 PM - 9:30 PM PT", "House of AI, 40 Boardman Pl", "Guava and AICamp", "A one-evening build requires attendees to ship and demo a working voice agent, with direct engineering office hours.", "62 visible attendees, a concrete technical audience, hands-on onboarding, and a live-demo requirement distinguish it from a generic mixer.", "Registration is open. Bring a laptop and an idea; the winning teams share up to $3,000 in cash prizes.", "https://luma.com/678a9u02", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, August 30",
      verdict: "One high-signal room, registration closed",
      note: "A selectively curated WorkOS-hosted summit survives the fallback audit, but no registration path remains.",
      events: [
        card("SF Socratic Agentic AI Summit", "6:00 PM - 9:00 PM PT", "WorkOS, 660 Market St", "AI Socratic and WorkOS", "Socratic discussion of models, papers, ethics, and engineering challenges is followed by three short technical presentations.", "Attendance is hidden, but selective admission, WorkOS hosting, recurring technical material, and an explicit engineer and researcher audience are strong signals.", "Registration is closed with no waitlist shown. Keep the direct link in case the host reopens inventory.", "https://luma.com/sf-socratic-2.0", "8.6/10", "Consider"),
      ],
    },
    {
      date: "Monday, August 31",
      verdict: "One strong physical-AI working session",
      note: "Mission Robotics hosts the only room that clears the timing, attendance, and substance filters.",
      events: [
        card("Degrees of Freedom: Bring Your Own Robot", "6:00 PM - 9:00 PM PT", "Private address, Mission District", "Rally SF and Mission Robotics", "A working night for embodied-AI builders offers real bench time, mixed-discipline debugging, and end-of-night demos rather than passive networking.", "71 visible attendees, a recurring format, and a dedicated robotics workshop create a credible hands-on room.", "Registration is open. Bring a robot or a concrete sim, policy, perception, or hardware problem; the copy mistakenly calls Monday a Tuesday.", "https://luma.com/278ujx64", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 1",
      verdict: "Three exceptional technical rooms",
      note: "Sim-to-real research leads, with a production-evals panel and a devtools launch as excellent alternatives.",
      events: [
        card("The Reality Gap: A Sim-to-Real Seminar", "6:00 PM - 9:00 PM PT", "Mission Robotics, 3001 19th St", "Rally SF, Mission Robotics, and Protege", "The first of a five-session working seminar tackles perception, contact, data collection, locomotion, world models, and the points where simulated policies fail on hardware.", "The room is capped at 40 with a committed core group, direct researcher targeting, recorded talks, and private working discussion afterward.", "Registration is open with approval. Include what you are working on in the application; dinner is provided.", "https://luma.com/rallysf-uqiv", "9.6/10", "Sign up now"),
        card("Forward Deployed: Evals — Beyond the Vibe Check", "6:00 PM - 8:30 PM PT", "Private address, North Beach", "Forward Deployed and Founders Cafe", "A practitioner panel covers production eval datasets, online guardrails, LLM judges, trajectory grading, build-versus-buy, and organizational ownership.", "Speakers from LangChain, Langfuse, Galileo, CoreWeave, and Mercor create an unusually concentrated evals room despite hidden attendance.", "Registration is open with approval and capacity is limited.", "https://luma.com/85oi0k2n", "9.5/10", "Sign up now"),
        card("Wasmer: Beyond Containers", "5:30 PM - 8:30 PM PT", "595 Pacific Ave", "Wasmer, Ayush Ojha, and Syrus Akbary", "New Wasmer launches, live demos, and deep technical Q&A focus on secure software execution across local, browser, application, and cloud environments.", "105 visible attendees, the Wasmer founder on stage, and an intentionally limited engineering audience make this an excellent devtools room.", "Registration is open. Luma shows 5:30-8:30 PM while the event copy says 6:00-8:00 PM, so confirm timing.", "https://luma.com/3ns1f786", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 2",
      verdict: "Two strong infrastructure and physical-AI rooms",
      note: "A deep BYOC architecture session leads, with a focused positioning and robotics fireside as the alternative.",
      events: [
        card("Whose Cloud Is It Anyway? BYOC in the Age of AI", "6:00 PM - 9:00 PM PT", "221 11th St", "Open Source Analytics Community, Altinity, and Nirvana Labs", "A three-talk program goes deep on BYOC control planes, VPC access, sovereignty, IOPS economics, shared responsibility, and failure modes.", "49 visible attendees, named practitioners, an unusually detailed agenda, and two hours of talks create a serious infrastructure room.", "Registration is open. Food and drinks are included.", "https://luma.com/ruft92qf", "9.2/10", "Sign up now"),
        card("Fireside Chat: Navigating Physical AI", "5:00 PM - 7:00 PM PT", "Silicon Valley Bank, 222 2nd St", "Point One Navigation, Vouch, and Silicon Valley Bank", "Point One's founder will unpack the positioning layer behind robots, drones, and autonomous vehicles, plus the realities of long R&D cycles.", "Attendance is hidden, but an approval gate, SVB's deep-tech community, and a named physical-AI founder are strong quality signals.", "Registration is open with approval. Some founder and capital discussion remains, but the core fireside is technically substantive.", "https://luma.com/NavigatingPhysicalAI", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 3",
      verdict: "Three strong, distinct rooms",
      note: "Production data infrastructure leads, with a hands-on agent build night and a thoughtful AI philosophy salon.",
      events: [
        card("Scaling the Data Lake for the AI Era", "5:30 PM - 7:30 PM PT", "SHACK15, 1 Ferry Building", "TRM Labs, StarRocks, PhoenixAI, and SHACK15", "A practitioner-led session on petabyte-scale AI data, query optimization, and real-time analytics maps directly to production platform work.", "Attendance is hidden, but repeat-event turnout, the SHACK15 venue, and named TRM and PhoenixAI engineers indicate a serious infrastructure audience.", "Registration is open with approval. Luma says 5:30 PM while the copy says 5:00 PM, so confirm the start time.", "https://luma.com/trmlabs-3kox", "9.4/10", "Sign up now"),
        card("Grok Bot Build Night for Women", "5:00 PM - 9:00 PM PT", "a16z, 180 Townsend St", "Cursor Community and a16z", "A four-hour coworking and demo night offers hands-on time with Grok Bot plus direct access to a SpaceXAI technical guest.", "Attendance is hidden, but direct Cursor Community and a16z hosting, an approval gate, credits, and a named SpaceXAI MTS demo are strong signals.", "Registration is open with approval. The low-pressure coworking format is less structured than a workshop.", "https://luma.com/a16zgrokbotbuildnight", "8.8/10", "Sign up now"),
        card("AI Philosophy Nights: Metaphors for AI", "6:30 PM - 9:30 PM PT", "Private address, Civic Center", "SuperHuman Society, Imbue, and Science Corporation", "A fireside with New Yorker cartoonist Amy Kurzweil leads into structured small-group discussion about how metaphors shape our understanding of machine intelligence.", "130 visible attendees, a recurring salon format, and sponsors Imbue and Science Corporation make this a credible intellectual room.", "Registration is open with approval. This is culture-and-technology discussion rather than a production-engineering session.", "https://luma.com/553nq69x", "8.2/10", "Consider"),
      ],
    },
    {
      date: "Friday, September 4",
      verdict: "One credible health-tech community room",
      note: "The attendee count now clears the floor, but the program remains a casual operator happy hour.",
      events: [
        card("San Francisco Health Tech Happy Hour with HTN & Vinta", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Health Tech Nerds and Vinta Software", "A focused healthcare gathering avoids pitch decks and should support useful operator conversation on the opportunities and constraints shaping health tech.", "58 visible attendees and backing from the 30,000-member Health Tech Nerds community now clear the normal room-size floor.", "Registration is open with approval. This is a casual networking room with no technical program, so it remains a lower-confidence Consider.", "https://luma.com/nh2t70zk", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 5",
      verdict: "One exceptional all-day spatial-AI build",
      note: "The program starts early but earns a weekend exception through technical depth and a full day of hands-on work.",
      events: [
        card("Spatial Intelligence + Generative 3D Hackathon", "8:30 AM - 8:00 PM PT", "Private address, Fort Mason", "World Labs, Tripo, mint.gg, Convex, and Founders Inc.", "Teams build interactive worlds, physical-AI simulations, or creative 3D systems with large world models, generated assets, agents, and real-time backends.", "Direct participation from World Labs, Tripo, mint.gg, and Convex plus a demo-and-judging requirement indicate a serious technical build.", "Registration is open with approval. The listing headline says 10:00 AM, but check-in and partner deep dives begin at 8:30 AM; this is a substantive schedule exception.", "https://luma.com/b101ml40", "9.0/10", "Consider"),
      ],
    },
    {
      date: "Sunday, September 6",
      verdict: "Open night",
      note: "No SF in-person event survived the weekend timing, attendance, and hard-topic filters after both primary Luma calendars and fallback sources.",
      events: [],
    },
    {
      date: "Monday, September 7",
      verdict: "Open night",
      note: "The primary calendars offered only founder soccer and an early generic GTM session; fallback sources produced no eligible SF technical room.",
      events: [],
    },
    {
      date: "Tuesday, September 8",
      verdict: "Two excellent technical rooms",
      note: "A no-slides agent-infrastructure demo night leads, with a hands-on AI pricing and metering workshop for PMs and engineers.",
      events: [
        card("Dev Tools & Infra Demo Night at Hogpatch", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "1984, PostHog, Heavybit, and Essence Venture Capital", "Nine live demos span agent context, cloud infrastructure, security harnesses, observability, reusable skills, inference routing, and durable sandboxes.", "Direct PostHog and Heavybit involvement, an explicit engineer audience, and the no-slides format are excellent hidden-attendance signals.", "Registration is open with approval. Demos begin at 6:30 PM.", "https://luma.com/6wyras70", "9.5/10", "Sign up now"),
        card("AI Credits & Metering Workshop", "5:45 PM - 8:00 PM PT", "Private address, Financial District", "Schematic", "A working session for PMs and engineers covers credit models, top-ups, enforcement, migrations, and implementation of usage-based AI billing.", "34 visible attendees, a bring-your-laptop format, and a promised working pricing model make this a focused small room.", "Registration is open. The topic is product infrastructure rather than model engineering, but it is unusually practical.", "https://luma.com/29otrk4k", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 9",
      verdict: "Three exceptional applied-AI rooms",
      note: "Rigorous embodied-AI research leads, followed by an agentic-PM demo roundtable and a curated data-infrastructure happy hour.",
      events: [
        card("Bay Area Frontier Research Club #22 — Robotics & Embodied AI", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Frontier Research Club and Mission Robotics", "A curated research forum reserves most of the evening for critique of robotics papers, methods, evaluation, failure modes, and real-hardware deployment.", "The approval gate, advance paper materials, Mission Robotics venue, and explicit researcher and research-engineer audience are exceptional hidden-room signals.", "Registration is open with approval. The talk titles are still TBA, but presenter submissions are screened for rigor.", "https://luma.com/7wv4khq9", "9.5/10", "Sign up now"),
        card("Agentic PM Kickoff with PostHog, Linear, Supabase & Dreambase", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "PostHog, Linear, Supabase, and Dreambase", "Four product teams will demo agents automating PM work from bug triage to spec writing, then open the room for a practical roundtable.", "Direct hosting by an unusually strong product-tool stack, limited capacity, and a no-slides rule are excellent PM and builder signals.", "Registration is open with approval. This takes place the night before Lenny's Summit.", "https://luma.com/posthog-tpmz", "9.4/10", "Sign up now"),
        card("MotherDucking Data + AI Happy Hour", "5:30 PM - 8:00 PM PT", "Pie Punks, 145 2nd St", "MotherDuck", "A limited-capacity conversation focuses on AI data architecture, real-time queries, and products that power real-time data.", "Attendance is hidden, but direct MotherDuck hosting, invite-only positioning, and named customer context from David AI and Together AI are strong room signals.", "Registration is open with approval. This is a technical happy hour without formal talks.", "https://luma.com/duckdb-06i7", "8.8/10", "Sign up now"),
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
