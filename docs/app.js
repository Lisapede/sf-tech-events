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
  checkedAt: "August 27, 2026",
  updatedAt: "August 27, 2026",
  windowLabel: "August 27, 2026 → September 10, 2026",
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
      date: "Thursday, August 27",
      verdict: "Three exceptional practitioner rooms",
      note: "The marquee demo night is waitlist-only; a hands-on Vercel build and the FDE technical talks remain open with approval.",
      events: [
        card("Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave", "Anthropic, Postman, Supabase, and Vercel", "Concrete demos cover proactive multiplayer agents, context graphs, secure tool connections, and a live production backend build.", "500 visible attendees and named technical speakers from four top developer platforms should create exceptional applied-AI density.", "Event full; join the waitlist. Doors open at 5:15 PM and the room will be large.", "https://luma.com/august-SF-supabase-vercel-postman", "9.8/10", "Sign up now"),
        card("eve eves | Agent Build Night | SF", "5:30 PM - 9:00 PM PT", "The Melody of San Francisco, 906 Broadway", "Vercel Events with Supabase", "A guided workshop turns eve into a working agent, followed by open build time, demos, and direct product-feedback conversations.", "413 visible attendees, direct Vercel hosting, Supabase integration, and a hands-on workshop led by an eve engineer make this a rare open path into a serious builder room.", "Registration is open with approval. The workshop begins at 6:30 PM; bring a laptop and stay for the extended build block.", "https://luma.com/eveSF", "9.7/10", "Sign up now"),
        card("From the Frontlines: Technical Talks with FDE Leaders", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Factory, Reducto, and Exa", "Technical talks on enterprise deployment, customer-facing engineering, and evals as the FDE product spec are exactly matched to the profile.", "Direct hosting by three respected AI infrastructure companies and an audience of FDEs, solutions engineers, and deployment leaders are excellent signals.", "Registration is open with approval. The agenda includes three talks, a deployment-leader fireside, and focused peer networking.", "https://luma.com/factoryai-7w55", "9.6/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, August 28",
      verdict: "Three credible evening builder rooms",
      note: "The two larger rooms are waitlist-only; a capped Grok build night remains open with approval.",
      events: [
        card("Design Hackathon: The Vibe Coding Night for Designers", "5:30 PM - 8:30 PM PT", "Private address, SoMa", "IxDF San Francisco, Tin Computer, and Cepien AI", "A ServiceNow AI design strategist pairs a practical product talk with a live, ten-builder vibe-coding challenge.", "60 visible attendees, a structured demo format, and an explicit mix of designers, PMs, engineers, and researchers make this a credible small room.", "Event full; join the waitlist. Only selected builders compete, but the talk and live builds are open to attendees.", "https://luma.com/lbfyvfe4", "8.4/10", "Consider"),
        card("Grok Bot Build Night", "6:30 PM - 10:30 PM PT", "Private address, Mission District", "Alif, Imran, and Khizer Husain", "A four-hour evening block is reserved for learning, experimenting, and shipping automations with Grok rather than watching generic startup pitches.", "The room is capped at 40, approval-gated, and explicitly organized around hands-on building, though the speaker and project detail remains thin.", "Registration is open with approval. Only accepted RSVPs can attend; the listing agenda says doors open at 6:00 PM and building runs until 9:15 PM.", "https://luma.com/alif-b5rf", "8.0/10", "Consider"),
        card("Tech Makers Goes West — Robotics and Beyond", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Tech Makers and Pebblebed VC", "Robotics, drones, and emerging-technology demos offer a tangible alternative to generic startup pitch nights.", "96 visible attendees and a technically serious Pebblebed team with deep OpenAI, FAIR, and Stripe AI roots support the room-quality inference.", "Event full; join the waitlist. The format includes pitches and investor conversation, so expect more startup energy than a pure engineering meetup.", "https://luma.com/3x24sk2k", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 29",
      verdict: "Three substantive builder sessions",
      note: "Two full-day hackathons earn schedule exceptions; the evening voice-agent build is the best timing fit.",
      events: [
        card("Agent Harness Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, 625 2nd St", "WeMakeDevs, Bright Data, Qodo, TrueFoundry, and OpenAI", "Teams build agents with MCP connections, sandboxed execution, human approvals, subagents, durable sessions, and live final demos.", "540 visible attendees, serious infrastructure partners, and an open-source repo requirement point to a real builder room.", "Event full; join the waitlist. The all-day schedule is a substantive weekend exception; OpenAI provides attendee credits.", "https://luma.com/agent-harness", "9.1/10", "Consider"),
        card("Codex Community Hackathon — San Francisco", "10:00 AM - 10:00 PM PT", "Hogpatch, 2360 3rd St", "Tenor, Runloop, and PostHog", "An intensive day of Codex demos, mentoring, product development, testing, and final presentations is designed around shipping real projects.", "95 visible attendees, PostHog's builder space, technical support, and a twelve-hour build window make this a credible hands-on room.", "Registration is open with approval. The morning start is a substantive weekend exception.", "https://luma.com/qbp3ck7t", "8.9/10", "Consider"),
        card("Guava Voice AI Hackathon: Build Night SF", "5:30 PM - 9:30 PM PT", "House of AI, 40 Boardman Pl", "Guava and AICamp", "A one-evening build requires attendees to ship and demo a working voice agent, with direct engineering office hours.", "96 visible attendees, a concrete technical audience, hands-on onboarding, and a live-demo requirement distinguish it from a generic mixer.", "Registration is open. Bring a laptop and an idea; the winning teams share up to $3,000 in cash prizes.", "https://luma.com/678a9u02", "8.7/10", "Sign up now"),
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
        card("Degrees of Freedom: Bring Your Own Robot", "6:00 PM - 9:00 PM PT", "Private address, Mission District", "Rally SF and Mission Robotics", "A working night for embodied-AI builders offers real bench time, mixed-discipline debugging, and end-of-night demos rather than passive networking.", "74 visible attendees, a recurring format, and a dedicated robotics workshop create a credible hands-on room.", "Registration is open. Bring a robot or a concrete sim, policy, perception, or hardware problem; the copy mistakenly calls Monday a Tuesday.", "https://luma.com/278ujx64", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 1",
      verdict: "Three exceptional technical rooms",
      note: "Sim-to-real research leads, with a production-evals panel and a devtools launch as excellent alternatives.",
      events: [
        card("The Reality Gap: A Sim-to-Real Seminar", "6:00 PM - 9:00 PM PT", "Mission Robotics, 3001 19th St", "Rally SF, Mission Robotics, and Protege", "The first of a five-session working seminar tackles perception, contact, data collection, locomotion, world models, and the points where simulated policies fail on hardware.", "The room is capped at 40 with a committed core group, direct researcher targeting, recorded talks, and private working discussion afterward.", "Registration is open with approval and five spots remain. Include what you are working on in the application; dinner is provided.", "https://luma.com/rallysf-uqiv", "9.6/10", "Sign up now"),
        card("Forward Deployed: Evals — Beyond the Vibe Check", "6:00 PM - 8:30 PM PT", "Private address, North Beach", "Forward Deployed and Founders Cafe", "A practitioner panel covers production eval datasets, online guardrails, LLM judges, trajectory grading, build-versus-buy, and organizational ownership.", "Speakers from LangChain, Langfuse, Galileo, CoreWeave, and Mercor create an unusually concentrated evals room despite hidden attendance.", "Registration is open with approval and capacity is limited.", "https://luma.com/85oi0k2n", "9.5/10", "Sign up now"),
        card("Wasmer: Beyond Containers", "5:30 PM - 8:30 PM PT", "595 Pacific Ave", "Wasmer, Ayush Ojha, and Syrus Akbary", "New Wasmer launches, live demos, and deep technical Q&A focus on secure software execution across local, browser, application, and cloud environments.", "128 visible attendees, the Wasmer founder on stage, and an intentionally limited engineering audience make this an excellent devtools room.", "Registration is open. Luma shows 5:30-8:30 PM while the event copy says 6:00-8:00 PM, so confirm timing.", "https://luma.com/3ns1f786", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 2",
      verdict: "Two strong infrastructure and physical-AI rooms",
      note: "A deep BYOC architecture session leads, with a focused positioning and robotics fireside as the alternative.",
      events: [
        card("Whose Cloud Is It Anyway? BYOC in the Age of AI", "6:00 PM - 9:00 PM PT", "221 11th St", "Open Source Analytics Community, Altinity, and Nirvana Labs", "A three-talk program goes deep on BYOC control planes, VPC access, sovereignty, IOPS economics, shared responsibility, and failure modes.", "51 visible attendees, named practitioners, an unusually detailed agenda, and two hours of talks create a serious infrastructure room.", "Registration is open. Food and drinks are included.", "https://luma.com/ruft92qf", "9.2/10", "Sign up now"),
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
        card("AI Philosophy Nights: Metaphors for AI", "6:30 PM - 9:30 PM PT", "Private address, Civic Center", "SuperHuman Society, Imbue, and Science Corporation", "A fireside with New Yorker cartoonist Amy Kurzweil leads into structured small-group discussion about how metaphors shape our understanding of machine intelligence.", "152 visible attendees, a recurring salon format, and sponsors Imbue and Science Corporation make this a credible intellectual room.", "Registration is open with approval. This is culture-and-technology discussion rather than a production-engineering session.", "https://luma.com/553nq69x", "8.2/10", "Consider"),
      ],
    },
    {
      date: "Friday, September 4",
      verdict: "One credible health-tech community room",
      note: "The attendee count now clears the floor, but the program remains a casual operator happy hour.",
      events: [
        card("San Francisco Health Tech Happy Hour with HTN & Vinta", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Health Tech Nerds and Vinta Software", "A focused healthcare gathering avoids pitch decks and should support useful operator conversation on the opportunities and constraints shaping health tech.", "76 visible attendees and backing from the 30,000-member Health Tech Nerds community clear the normal room-size floor.", "Registration is open with approval. This is a casual networking room with no technical program, so it remains a lower-confidence Consider.", "https://luma.com/nh2t70zk", "6.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, September 5",
      verdict: "One exceptional all-day spatial-AI build",
      note: "The program starts early but earns a weekend exception through technical depth and a full day of hands-on work.",
      events: [
        card("Spatial Intelligence + Generative 3D Hackathon", "10:00 AM - 8:00 PM PT", "Private address, Fort Mason", "World Labs, Tripo, mint.gg, Convex, and Founders Inc.", "Teams build interactive worlds, physical-AI simulations, or creative 3D systems with large world models, generated assets, agents, and real-time backends.", "Direct participation from World Labs, Tripo, mint.gg, and Convex plus a demo-and-judging requirement indicate a serious technical build.", "Registration is open with approval. Optional check-in and partner deep dives begin at 8:30 AM before hacking starts at 10:00 AM; this is a substantive schedule exception.", "https://luma.com/b101ml40", "9.0/10", "Consider"),
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
        card("AI Credits & Metering Workshop", "5:45 PM - 8:00 PM PT", "Private address, Financial District", "Schematic", "A working session for PMs and engineers covers credit models, top-ups, enforcement, migrations, and implementation of usage-based AI billing.", "36 visible attendees, a bring-your-laptop format, and a promised working pricing model make this a focused small room.", "Registration is open. The topic is product infrastructure rather than model engineering, but it is unusually practical.", "https://luma.com/29otrk4k", "8.7/10", "Sign up now"),
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
    {
      date: "Thursday, September 10",
      verdict: "Three distinct physical-AI, PM, and infrastructure rooms",
      note: "The marquee hardware room is waitlist-only; the curated AI-PM dinner and a newly listed infrastructure program remain open with approval.",
      events: [
        card("137th SF Hardware Meetup: Physical AI Robotics", "6:30 PM - 9:30 PM PT", "Private address, Mission District", "SF Hardware Meetup and Mission Robotics", "A talk-and-demo program pairs physical-AI founders and Zoox hardware leadership with a community open mic for working prototypes.", "250 visible attendees, the 137th edition of a 10,500-member hardware community, Mission Robotics hosting, and New Theory AI sponsorship are exceptional signals.", "Event full; join the waitlist. The program includes two featured talks, prototype demos, and a long technical mingle.", "https://luma.com/84lattht", "9.4/10", "Sign up now"),
        card("humans in the loop", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Hardik Mittal, Denise Teng, Manoj Soundararajan, and JPMorgan Innovation Economy", "A capped dinner is designed specifically for AI product managers and forward-deployed engineers at top-tier companies.", "Capacity is 30, admission is approval-gated, and the hosts include a Decagon agent PM plus a former Meta PM now at Gradient; the exact peer mix fits the taste profile unusually well.", "Registration is open with approval. This is a curated peer dinner rather than a structured technical program.", "https://luma.com/islaag11", "8.7/10", "Sign up now"),
        card("AI Infrastructure Night", "5:30 PM - 8:00 PM PT", "Private address, SoMa", "Alien, AgentMail, and Turso", "Three concrete talks cover agent email identity, rewriting SQLite for distributed workloads, and private database access inside customer VPCs.", "Only eight attendees are visible, but the listing is new and the named AgentMail, Turso, and Alien founders provide unusually strong technical evidence for a small room.", "Registration is open with approval. Treat the new-listing exception cautiously until the room grows.", "https://luma.com/ra1q3wlf", "8.2/10", "Consider"),
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
