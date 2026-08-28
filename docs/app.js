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
  checkedAt: "August 28, 2026",
  updatedAt: "August 28, 2026",
  windowLabel: "August 28, 2026 → September 11, 2026",
  featured: [
    {
      title: "Voice Research Club: Models, Evals & Real-Time Interaction",
      date: "Thu, Sep 3",
      recommendation: "Sign up now",
      summary: "A research-first launch pairs an NVIDIA full-duplex speech talk with extended technical discussion and no sales presentations.",
      link: "https://luma.com/nbaa4d7r",
    },
    {
      title: "Software Factories Meet Production",
      date: "Wed, Sep 9",
      recommendation: "Sign up now",
      summary: "Datadog, Cleric, and AAIF host compact practitioner talks on orchestration, verification, security, and agent failure modes.",
      link: "https://luma.com/87no10np",
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
      date: "Friday, August 28",
      verdict: "Three credible evening builder rooms",
      note: "The structured design and Grok sessions are waitlist-only; a focused agent-builder coffee remains open with approval.",
      events: [
        card("Design Hackathon: The Vibe Coding Night for Designers", "5:30 PM - 8:30 PM PT", "Private address, SoMa", "IxDF San Francisco, Tin Computer, and Cepien AI", "A ServiceNow AI design strategist pairs a practical product talk with a live, ten-builder vibe-coding challenge.", "56 visible attendees, a structured demo format, and an explicit mix of designers, PMs, engineers, and researchers make this a credible small room.", "Event full; join the waitlist. Only selected builders compete, but the talk and live builds are open to attendees.", "https://luma.com/lbfyvfe4", "8.4/10", "Consider"),
        card("Grok Bot Build Night", "6:30 PM - 10:30 PM PT", "Private address, Mission District", "Alif, Imran, and Khizer Husain", "A four-hour evening block is reserved for learning, experimenting, and shipping automations with Grok rather than watching generic startup pitches.", "The room is capped at 40, approval-gated, and explicitly organized around hands-on building, though the speaker and project detail remains thin.", "Event full; join the waitlist. The listing agenda says doors open at 6:00 PM and building runs until 9:15 PM.", "https://luma.com/alif-b5rf", "8.0/10", "Consider"),
        card("Agent Builder Happy Hour", "5:30 PM - 7:30 PM PT", "Corgi Cafe, 2146 3rd St", "OpenComputer and Corgi", "A tightly scoped coffee for people building internal, background, browser, and stranger agent systems centers conversation on what is breaking in practice.", "71 visible attendees, direct OpenComputer hosting, and an explicit builder-only topic make the unstructured format more credible than a generic happy hour.", "Registration is open with approval. There are no talks or demos; expect technical peer conversation over coffee.", "https://luma.com/nxqxrgcw", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 29",
      verdict: "Three substantive builder sessions",
      note: "The two full-day hackathons are now waitlist-only or closed; the evening voice-agent build remains the best live registration path.",
      events: [
        card("Agent Harness Hackathon", "9:00 AM - 6:00 PM PT", "Bright Data, 625 2nd St", "WeMakeDevs, Bright Data, Qodo, TrueFoundry, and OpenAI", "Teams build agents with MCP connections, sandboxed execution, human approvals, subagents, durable sessions, and live final demos.", "533 visible attendees, serious infrastructure partners, and an open-source repo requirement point to a real builder room.", "Event full; join the waitlist. The all-day schedule is a substantive weekend exception; OpenAI provides attendee credits.", "https://luma.com/agent-harness", "9.1/10", "Consider"),
        card("Codex Community Hackathon — San Francisco", "10:00 AM - 10:00 PM PT", "Hogpatch, 2360 3rd St", "Tenor, Runloop, and PostHog", "An intensive day of Codex demos, mentoring, product development, testing, and final presentations is designed around shipping real projects.", "192 visible attendees, PostHog's builder space, technical support, and a twelve-hour build window make this a credible hands-on room.", "Registration is closed with no waitlist shown. The morning start is a substantive weekend exception.", "https://luma.com/qbp3ck7t", "8.9/10", "Consider"),
        card("Guava Voice AI Hackathon: Build Night SF", "5:30 PM - 9:30 PM PT", "House of AI, 40 Boardman Pl", "Guava and AICamp", "A one-evening build requires attendees to ship and demo a working voice agent, with direct engineering office hours.", "120 visible attendees, a concrete technical audience, hands-on onboarding, and a live-demo requirement distinguish it from a generic mixer.", "Registration is open. Bring a laptop and an idea; the winning teams share up to $3,000 in cash prizes.", "https://luma.com/678a9u02", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Sunday, August 30",
      verdict: "One exceptional all-day hack, one closed summit",
      note: "The recurring RSI harness build earns a substantive weekend schedule exception; the WorkOS-hosted evening alternative remains closed.",
      events: [
        card("Recursive Self Improvement Hack: Harnesses", "10:00 AM - 8:00 PM PT", "Private address, China Basin", "RSI House, Sundai Club, Autolab, and European Startup Embassy", "A full-day build targets self-improving agent harnesses, autoresearch loops, and the evaluator bottleneck, ending with working presentations rather than pitches.", "Attendance is hidden, but the recurring 135-plus-hack Sundai lineage, named MIT, Harvard, DeepMind, and Meta researchers, and explicit ship requirement are exceptional room signals.", "Registration is open with approval. The all-day schedule is a substantive weekend exception; teams form at 10:15 AM and present at 8:00 PM.", "https://luma.com/7cacs0ez", "9.0/10", "Consider"),
        card("SF Socratic Agentic AI Summit", "6:00 PM - 9:00 PM PT", "WorkOS, 660 Market St", "AI Socratic and WorkOS", "Socratic discussion of models, papers, ethics, and engineering challenges is followed by three short technical presentations.", "Attendance is hidden, but selective admission, WorkOS hosting, recurring technical material, and an explicit engineer and researcher audience are strong signals.", "Registration is closed with no waitlist shown. Keep the direct link in case the host reopens inventory.", "https://luma.com/sf-socratic-2.0", "8.6/10", "Consider"),
      ],
    },
    {
      date: "Monday, August 31",
      verdict: "One strong physical-AI working session",
      note: "Mission Robotics hosts the only room that clears the timing, attendance, and substance filters.",
      events: [
        card("Degrees of Freedom: Bring Your Own Robot", "6:00 PM - 9:00 PM PT", "Private address, Mission District", "Rally SF and Mission Robotics", "A working night for embodied-AI builders offers real bench time, mixed-discipline debugging, and end-of-night demos rather than passive networking.", "69 visible attendees, a recurring format, and a dedicated robotics workshop create a credible hands-on room.", "Registration is open. Bring a robot or a concrete sim, policy, perception, or hardware problem; the copy mistakenly calls Monday a Tuesday.", "https://luma.com/278ujx64", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, September 1",
      verdict: "Three exceptional technical rooms",
      note: "Sim-to-real research leads, with a production-evals panel and a devtools launch as excellent alternatives.",
      events: [
        card("The Reality Gap: A Sim-to-Real Seminar", "6:00 PM - 9:00 PM PT", "Mission Robotics, 3001 19th St", "Rally SF, Mission Robotics, and Protege", "The first of a five-session working seminar tackles perception, contact, data collection, locomotion, world models, and the points where simulated policies fail on hardware.", "The room is capped at 40 with a committed core group, direct researcher targeting, recorded talks, and private working discussion afterward.", "Event full; join the waitlist. Include what you are working on in the application; dinner is provided.", "https://luma.com/rallysf-uqiv", "9.6/10", "Sign up now"),
        card("Forward Deployed: Evals — Beyond the Vibe Check", "6:00 PM - 8:30 PM PT", "Private address, North Beach", "Forward Deployed and Founders Cafe", "A practitioner panel covers production eval datasets, online guardrails, LLM judges, trajectory grading, build-versus-buy, and organizational ownership.", "Speakers from LangChain, Langfuse, Galileo, CoreWeave, and Mercor create an unusually concentrated evals room despite hidden attendance.", "Registration is open with approval and capacity is limited.", "https://luma.com/85oi0k2n", "9.5/10", "Sign up now"),
        card("Wasmer: Beyond Containers", "6:30 PM - 9:30 PM PT", "760 Market St", "Wasmer, Ayush Ojha, and Syrus Akbary", "New Wasmer launches, live demos, and deep technical Q&A focus on secure software execution across local, browser, application, and cloud environments.", "225 visible attendees, the Wasmer founder on stage, and an intentionally limited engineering audience make this an excellent devtools room.", "Registration is open. The direct page now confirms the later 6:30-9:30 PM window.", "https://luma.com/3ns1f786", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 2",
      verdict: "Two strong infrastructure and physical-AI rooms",
      note: "A deep BYOC architecture session leads, with a focused positioning and robotics fireside as the alternative.",
      events: [
        card("Whose Cloud Is It Anyway? BYOC in the Age of AI", "6:00 PM - 9:00 PM PT", "221 11th St", "Open Source Analytics Community, Altinity, and Nirvana Labs", "A three-talk program goes deep on BYOC control planes, VPC access, sovereignty, IOPS economics, shared responsibility, and failure modes.", "56 visible attendees, named practitioners, an unusually detailed agenda, and two hours of talks create a serious infrastructure room.", "Registration is open. Food and drinks are included.", "https://luma.com/ruft92qf", "9.2/10", "Sign up now"),
        card("Fireside Chat: Navigating Physical AI", "5:00 PM - 7:00 PM PT", "Silicon Valley Bank, 222 2nd St", "Point One Navigation, Vouch, and Silicon Valley Bank", "Point One's founder will unpack the positioning layer behind robots, drones, and autonomous vehicles, plus the realities of long R&D cycles.", "Attendance is hidden, but an approval gate, SVB's deep-tech community, and a named physical-AI founder are strong quality signals.", "Registration is open with approval. Some founder and capital discussion remains, but the core fireside is technically substantive.", "https://luma.com/NavigatingPhysicalAI", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 3",
      verdict: "Three excellent production and research rooms",
      note: "A research-first voice launch leads, with production data infrastructure and a hands-on agent build as strong alternatives.",
      events: [
        card("Voice Research Club Launch: Models, Evals & Real-Time Interaction", "5:30 PM - 8:30 PM PT", "Private address, Central Waterfront", "Frontier Research Club and Voice Arena", "A paper-driven launch pairs an NVIDIA full-duplex speech presentation with extended discussion of role control, voice conditioning, latency, naturalness, and missing evaluation benchmarks.", "Attendance is hidden, but a named NVIDIA ADLR researcher, explicit no-sales rule, approval gate, and recurring research-club format create exceptional room-quality evidence.", "Registration is open with approval. Light dinner precedes two concise technical talks and ninety minutes of research discussion.", "https://luma.com/nbaa4d7r", "9.6/10", "Sign up now"),
        card("Scaling the Data Lake for the AI Era", "5:30 PM - 7:30 PM PT", "SHACK15, 1 Ferry Building", "TRM Labs, StarRocks, PhoenixAI, and SHACK15", "A practitioner-led session on petabyte-scale AI data, query optimization, and real-time analytics maps directly to production platform work.", "Attendance is hidden, but repeat-event turnout, the SHACK15 venue, and named TRM and PhoenixAI engineers indicate a serious infrastructure audience.", "Registration is open with approval. Luma says 5:30 PM while the copy says 5:00 PM, so confirm the start time.", "https://luma.com/trmlabs-3kox", "9.4/10", "Sign up now"),
        card("Grok Bot Build Night for Women", "5:00 PM - 9:00 PM PT", "a16z, 180 Townsend St", "Cursor Community and a16z", "A four-hour coworking and demo night offers hands-on time with Grok Bot plus direct access to a SpaceXAI technical guest.", "Attendance is hidden, but direct Cursor Community and a16z hosting, an approval gate, credits, and a named SpaceXAI MTS demo are strong signals.", "Registration is open with approval. The low-pressure coworking format is less structured than a workshop.", "https://luma.com/a16zgrokbotbuildnight", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 4",
      verdict: "One credible health-tech community room",
      note: "The attendee count now clears the floor, but the program remains a casual operator happy hour.",
      events: [
        card("San Francisco Health Tech Happy Hour with HTN & Vinta", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Health Tech Nerds and Vinta Software", "A focused healthcare gathering avoids pitch decks and should support useful operator conversation on the opportunities and constraints shaping health tech.", "102 visible attendees and backing from the 30,000-member Health Tech Nerds community clear the normal room-size floor.", "Registration is open with approval. This is a casual networking room with no technical program, so it remains a lower-confidence Consider.", "https://luma.com/nh2t70zk", "6.8/10", "Consider"),
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
        card("AI Credits & Metering Workshop", "5:45 PM - 8:00 PM PT", "Private address, Financial District", "Schematic", "A working session for PMs and engineers covers credit models, top-ups, enforcement, migrations, and implementation of usage-based AI billing.", "33 visible attendees, a bring-your-laptop format, and a promised working pricing model make this a focused small room.", "Registration is open. The topic is product infrastructure rather than model engineering, but it is unusually practical.", "https://luma.com/29otrk4k", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, September 9",
      verdict: "Three exceptional applied-AI rooms",
      note: "Production-agent failure modes lead, followed by rigorous embodied-AI research and an agentic-PM demo roundtable.",
      events: [
        card("Software Factories Meet Production", "6:00 PM - 8:00 PM PT", "Datadog, 50 Fremont St", "Datadog, Cleric, and the Agentic AI Foundation", "Three compact practitioner talks dissect software-factory orchestration, performance testing, verification, security, and the failure modes that changed the final designs.", "Datadog hosting, named Humanlayer and Tensorlake founders, an explicit agent-builder gate, and war-story format create an unusually exact profile match.", "Registration is open with approval. Talks begin at 6:40 PM and stay deliberately short to preserve detailed Q&A.", "https://luma.com/87no10np", "9.7/10", "Sign up now"),
        card("Bay Area Frontier Research Club #22 — Robotics & Embodied AI", "5:30 PM - 8:30 PM PT", "Private address, Mission District", "Frontier Research Club and Mission Robotics", "A curated research forum reserves most of the evening for critique of robotics papers, methods, evaluation, failure modes, and real-hardware deployment.", "The approval gate, advance paper materials, Mission Robotics venue, and explicit researcher and research-engineer audience are exceptional hidden-room signals.", "Registration is open with approval. The talk titles are still TBA, but presenter submissions are screened for rigor.", "https://luma.com/7wv4khq9", "9.5/10", "Sign up now"),
        card("Agentic PM Kickoff with PostHog, Linear, Supabase & Dreambase", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "PostHog, Linear, Supabase, and Dreambase", "Four product teams will demo agents automating PM work from bug triage to spec writing, then open the room for a practical roundtable.", "Direct hosting by an unusually strong product-tool stack, limited capacity, and a no-slides rule are excellent PM and builder signals.", "Registration is open with approval. This takes place the night before Lenny's Summit.", "https://luma.com/posthog-tpmz", "9.4/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, September 10",
      verdict: "Three distinct physical-AI, PM, and design rooms",
      note: "The marquee hardware room is waitlist-only; the curated AI-PM dinner and Amplitude's senior-design program remain open with approval.",
      events: [
        card("137th SF Hardware Meetup: Physical AI Robotics", "6:30 PM - 9:30 PM PT", "Private address, Mission District", "SF Hardware Meetup and Mission Robotics", "A talk-and-demo program pairs physical-AI founders and Zoox hardware leadership with a community open mic for working prototypes.", "246 visible attendees, the 137th edition of a 10,500-member hardware community, Mission Robotics hosting, and New Theory AI sponsorship are exceptional signals.", "Event full; join the waitlist. The program includes two featured talks, prototype demos, and a long technical mingle.", "https://luma.com/84lattht", "9.4/10", "Sign up now"),
        card("Designing with AI: Panel hosted by Amplitude", "5:30 PM - 8:30 PM PT", "Private address, Yerba Buena", "Amplitude", "Quick-fire live demos and a design-leader panel examine how senior teams are changing workflows, shipping their own designs, and bringing AI into daily product work.", "A 100-person cap, approval gate, and speakers from SpaceXAI, Slack, Ramp, and Eve provide strong hidden-attendance and practitioner signals.", "Registration is open with approval. The room is curated for senior designers; demos begin at 6:00 PM.", "https://luma.com/hc9mndo1", "9.0/10", "Sign up now"),
        card("humans in the loop", "6:30 PM - 8:30 PM PT", "Private address, San Francisco", "Hardik Mittal, Denise Teng, Manoj Soundararajan, and JPMorgan Innovation Economy", "A capped dinner is designed specifically for AI product managers and forward-deployed engineers at top-tier companies.", "Capacity is 30, admission is approval-gated, and the hosts include a Decagon agent PM plus a former Meta PM now at Gradient; the exact peer mix fits the taste profile unusually well.", "Registration is open with approval. This is a curated peer dinner rather than a structured technical program.", "https://luma.com/islaag11", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, September 11",
      verdict: "One exceptional agent-systems lecture",
      note: "Gray Area hosts the only evening room that clears the technical, attendance, timing, and topic filters.",
      events: [
        card("Agentworld x Superdark Factory", "6:30 PM - 9:00 PM PT", "Gray Area Grand Theater, 2665 Mission St", "Gray Area, Antikythera, and Disintegrator", "A seated double lecture examines hybrid human-AI societies and software production when fully automated agent systems move people outside the loop.", "120 visible attendees, Gray Area hosting, Antikythera research, MIT Press ties, and named talks from Benjamin Bratton and LaunchDarkly AI head Marek Poliks make this a high-signal intellectual room.", "$10 tickets are available. The all-ages program is seated and focused on research and systems thinking rather than networking.", "https://luma.com/fawtwq0b", "9.0/10", "Sign up now"),
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
