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
  checkedAt: "October 29, 2026",
  updatedAt: "October 29, 2026",
  windowLabel: "October 29, 2026 → November 12, 2026",
  featured: [
    {
      title: "Night Hack by Founders, Inc.",
      date: "Fri, Oct 30",
      recommendation: "Sign up now",
      summary: "A five-hour build, live exhibition, and judging night backed by Anthropic and a strong developer-tool stack.",
      link: "https://luma.com/nighthack",
    },
    {
      title: "The Pragmatic Engineer Unplugged",
      date: "Wed, Nov 4",
      recommendation: "Sign up now",
      summary: "Gergely Orosz hosts Bryan Cantrill and Diogo Almeida for a candid live conversation on AI and engineering craft.",
      link: "https://luma.com/pragmatic-engineer-unplugged",
    },
    {
      title: "VapiCon 2026",
      date: "Wed–Thu, Nov 11–12",
      recommendation: "Sign up now",
      summary: "A 1,200-plus-person voice-AI summit with OpenAI, Vercel, LangChain, Deepgram, WorkOS, Coval, and more.",
      link: "https://vapi.ai/vapicon-2026",
    },
  ],
  days: [
    {
      date: "Thursday, October 29",
      verdict: "Three focused rooms across AI security, machine design, and creative inference",
      note: "Cloudflare's two-panel security program leads. Designers & Machines offers a much smaller demos-only room, while Modal and Gray Area remain worth the waitlist for creative-infrastructure depth.",
      events: [
        card("Zero Trust for AI: Securing Models, Data, and Autonomous Agents", "5:00 PM - 7:30 PM PT", "Cloudflare, 101 Townsend St", "Women in Cybersecurity — Silicon Valley", "Cloudflare, Locktivity, Sysdig, and Splunk speakers apply Zero Trust principles to AI governance, runtime security, attack-surface management, and autonomous agents.", "197 visible attendees, a first-party Cloudflare venue, and two detailed practitioner panels make this the strongest room tonight.", "Three spots remained at check time.", "https://luma.com/nydm47zd", "8.7/10", "Sign up now"),
        card("Designers & Machines October 2026", "6:30 PM - 9:30 PM PT", "Private address, San Francisco", "Designers & Machines", "Five designers give five-minute, slides-free demos of current experiments at the intersection of design and machine intelligence, followed by dinner and discussion.", "65 visible attendees, a 50-designer target room, more than 500 monthly requests, and project-based approval create a compact, selective audience.", "Five spots remained at check time; registration requires approval.", "https://luma.com/u0l7j6iz", "8.0/10", "Sign up now"),
        card("Inference as Instrument", "7:00 PM - 9:00 PM PT", "Gray Area / Grand Theater, 2665 Mission St", "Modal and Gray Area", "Runway, Modal, and working artists examine how inference-powered systems are becoming creative instruments across art, music, film, and design, followed by exhibition access.", "Named technical and creative practitioners, Modal's infrastructure perspective, and Gray Area's commissioned program make this more substantive than a generic AI-art panel.", "Event full; join the waitlist.", "https://luma.com/modal-48ev", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Friday, October 30",
      verdict: "A standout late-week build, demo, and judging night",
      note: "Night Hack is the clear choice: a real five-hour build window, live demos instead of decks, and unusually strong developer-tool support.",
      events: [
        card("Night Hack by Founders, Inc.", "4:15 PM - 11:00 PM PT; build starts 5:00 PM", "Private address, San Francisco", "Founders, Inc. with Anthropic, Firecrawl, Bolt, and Convex", "Builders form teams, ship for five hours, then exhibit working projects for live judging and finalist demos.", "104 visible attendees, $10,000 in Anthropic prize credits, per-builder API credits, and the prior edition's 120-plus projects signal serious builder density.", "Registration is open with approval. Arrive at 4:15 PM; the substantive build block runs 5:00-10:00 PM.", "https://luma.com/nighthack", "9.2/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, October 31",
      verdict: "A thoughtful AI-and-compute exhibition, but not a builder room",
      note: "Gray Area's Modal-backed exhibition is the only substantive Saturday option that remains open into the evening. Arrive after 3:00 PM to stay within the weekend preference.",
      events: [
        card("Scaling Intelligence — Modal x Gray Area Commissions", "1:00 PM - 8:00 PM PT; go after 3:00 PM", "Gray Area, 2665 Mission St", "Gray Area and Modal", "Eleven newly commissioned artworks use large-scale compute and AI to explore neural networks, satellite perspectives, microbial systems, forests, and other forms of intelligence.", "Modal compute support and Gray Area's two-decade arts-and-technology track record make this credible, but the experience is self-guided rather than a practitioner room.", "Free admission; reserve ahead or drop in. Best available, not a networking or talk event.", "https://grayarea.org/exhibitions/scaling-intelligence-modal-commissions/", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 1",
      verdict: "A major research conference offers a strong evening AI program",
      note: "The INFORMS evening block pairs a frontier AI/XR co-scientist keynote with the welcome reception, research posters, and awards.",
      events: [
        card("INFORMS Annual Meeting — Sunday Evening Program", "5:45 PM - 9:00 PM PT", "Moscone Center South, 747 Howard St", "INFORMS", "Princeton's Mengdi Wang presents LabOS, an AI-XR co-scientist combining multimodal agents, smart glasses, robotics, and human collaboration, before the research reception and poster program.", "A major operations-research conference, a named frontier researcher, and an evening of posters and technical peers create a genuinely substantive Sunday room.", "A paid INFORMS badge is required. The keynote runs 5:45-6:35 PM, the reception 6:30-8:30 PM, and awards through 9:00 PM.", "https://meetings.informs.org/wordpress/annual/what-to-expect/", "8.3/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, November 2",
      verdict: "A hands-on health-AI build night plus production optimization at INFORMS",
      note: "The health-and-human-performance hack night is the more active room; Microsoft's cloud-supply-chain keynote is the stronger enterprise case study.",
      events: [
        card("The AI Will See You Now: Health and Human Performance Hack Night", "6:30 PM - 10:00 PM PT", "Private address, San Francisco", "Origin Speech Therapy and San Francisco Tech Events", "Engineers, clinicians, athletes, and caregivers build working prototypes for clinical support, therapy, injury recovery, wearables, cognition, and brain health, then demo for judging.", "A concrete one-night build requirement, domain experts in the room, and a 9:30 PM demo block make this more than a health-tech mixer.", "Registration is open with approval; the exact venue is disclosed to approved attendees.", "https://luma.com/ti8gow87", "8.2/10", "Sign up now"),
        card("Microsoft Cloud Supply Chain: Hyperscale Optimization", "5:45 PM - 8:15 PM PT", "Moscone Center South and Marriott Marquis", "INFORMS and Microsoft", "Microsoft's Intelligent Fulfillment Service combines machine learning, mathematical optimization, generative AI, and an LLM-powered scenario assistant for global cloud logistics.", "The award-winning production system cuts planning cycles from days to minutes and delivers tens to hundreds of millions of dollars in annual savings.", "A paid INFORMS badge is required. The keynote runs 5:45-6:35 PM, followed by community meetings and receptions.", "https://meetings.informs.org/wordpress/annual/plenaries-keynotes/", "8.0/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, November 3",
      verdict: "An unusually strong night for building, decision models, and production voice AI",
      note: "Mistral and Elastic lead with a real build-and-demo format. Liquid AI's decision-model showcase and Coval's production fireside are excellent focused alternatives.",
      events: [
        card("Make SF Better: A Hack Night with Mistral AI", "5:00 PM - 8:00 PM PT", "Elastic, 33 New Montgomery St", "Mistral AI and Elastic", "Builders use Mistral models, Elasticsearch, and San Francisco open data to prototype tools for transit, local businesses, public spaces, community needs, and city services.", "198 visible attendees, on-site mentors, a two-hour build block, and end-of-night demos create the strongest hands-on room of the evening.", "Registration is open.", "https://luma.com/mistral-elastic", "9.0/10", "Sign up now"),
        card("Decision Models SF — Demo Night", "5:30 PM - 9:00 PM PT", "Private address, San Francisco", "Liquid AI", "Maxime Labonne explains purpose-built decision models for routing, agent actions, moderation, evaluation, and multimodal inspection before a full hour of builder demos.", "105 visible attendees, a named post-training expert, a tightly scoped technical talk, and a real showcase make this a high-signal model-systems room.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/ejl2hloq", "8.7/10", "Sign up now"),
        card("Building Voice AI That Holds Up in Production", "5:30 PM - 8:00 PM PT", "Cloudflare, 101 Townsend St", "Coval and Cloudflare Developer", "Coval founder Brooke Hopkins and Cloudflare voice-AI PM Korinne Alpers examine latency, state, regression testing, monitoring, and human-review handoffs for production voice agents.", "34 visible attendees clear the room-size floor; Coval's evaluation work, Cloudflare's Agents SDK experience, and Brooke's former Waymo evaluation role add serious practitioner signal.", "Registration is open with approval.", "https://luma.com/iq4hna2x", "8.5/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, November 4",
      verdict: "A superb engineering night across craft, databases, and self-improving products",
      note: "The Pragmatic Engineer leads on speaker quality; PlanetScale has the deepest technical agenda, and the Codex room is the most product-oriented.",
      events: [
        card("The Pragmatic Engineer Unplugged", "5:00 PM - 7:30 PM PT", "SFJAZZ, 201 Franklin St", "The Pragmatic Engineer and WorkOS", "Gergely Orosz hosts Oxide CTO Bryan Cantrill and Jev creator Diogo Almeida for a candid live conversation on how software is built and how AI is changing engineering craft.", "The speaker trio, WorkOS host, and SFJAZZ setting make this one of the window's strongest engineering rooms.", "Registration is free with approval; space is limited.", "https://luma.com/pragmatic-engineer-unplugged", "9.2/10", "Sign up now"),
        card("Postgres Day SF Meetup", "5:30 PM - 9:00 PM PT", "PlanetScale, 108 Natoma St", "PlanetScale and Bruce Momjian", "Talks cover eBPF tracing for PostgreSQL performance, free-space maps, and a closing reflection from Postgres co-founder Bruce Momjian on the database's future.", "189 visible attendees, two core PlanetScale engineers, Bruce Momjian, and a ninety-minute technical talk block create a high-signal database room.", "Registration is open with approval.", "https://luma.com/haxfnzo1", "8.9/10", "Sign up now"),
        card("Self-Improving Products with Codex", "5:30 PM - 8:30 PM PT", "Amplitude, 201 3rd St", "Amplitude Community and Peter Yang", "Peter Yang and the Amplitude team demo Codex-driven product workflows and AI-assisted customer understanding, followed by audience Q&A.", "99 visible attendees and live demos at a first-party product venue make this credible, though the room is broader and less technical than the top two.", "Registration is open with approval.", "https://luma.com/7a9oq3cy", "8.3/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, November 5",
      verdict: "Three strong rooms across agent evals, accelerated systems, and hardware",
      note: "Baseten, Braintrust, and Greylock lead with production evals. NVIDIA's CUDA-Rust program is a very close technical second; the established hardware meetup is the broader waitlist option.",
      events: [
        card("Braintrust on How Agents Are Changing Evals", "6:00 PM - 8:00 PM PT", "Baseten, 560 Davis St, Suite 250", "Baseten, Braintrust, and Greylock", "Braintrust CEO Ankur Goyal and Greylock partner Corinne Riley examine the shift from standalone evals to agent observability, agent-ready data infrastructure, and evidence-based model decisions.", "354 visible attendees, senior AI-infrastructure hosts, and a tightly scoped fireside with audience Q&A make this a high-signal technical-leadership room.", "Event full; join the waitlist.", "https://luma.com/baseten-g3n4", "9.0/10", "Sign up now"),
        card("NVIDIA x Lawrence Harvey — CUDA Rust", "5:30 PM - 8:30 PM PT", "House of AI, 40 Boardman Pl", "Lawrence Harvey and NVIDIA", "Four technical talks cover Rust's growing role in accelerated computing, with speakers from OpenAI, Zed Industries, AWS Hydro, and NVIDIA.", "107 visible attendees, a capped room, and a full two-hour speaker block led by NVIDIA senior research scientist Melih Elibol make this a strong systems event.", "Registration is open; talks begin at 6:00 PM.", "https://luma.com/iqe7wng1", "8.9/10", "Sign up now"),
        card("139th SF Hardware Meetup: Manufacturing and Design", "6:30 PM - 9:30 PM PT", "Private address, San Francisco", "SF Hardware Meetup and Vizcom", "Guest talks and Q&A on manufacturing and design lead into a community open mic for prototype demos and two-minute technical show-and-tells.", "Speakers remain TBA, but the 10,500-member recurring community, 139-event track record, and Vizcom's AI industrial-design venue support a credible room.", "Event full; join the waitlist. The exact address is disclosed to registered attendees.", "https://luma.com/2u9iuenk", "7.5/10", "Consider"),
      ],
    },
    {
      date: "Friday, November 6",
      verdict: "A substantive developer workshop day, but much earlier than preferred",
      note: "BoxWorks is the only strong technical option that survives the content filters. Its Friday program ends at lunch, so this is visible as best available rather than promoted as an after-work pick.",
      events: [
        card("BoxWorks Dev Summit — Friday Workshops", "9:00 AM - 1:00 PM PT", "San Francisco Marriott Marquis, 780 Mission St", "Box Devs with OpenAI, AWS, Docker, Meta, NVIDIA, and others", "Hands-on workshops and technical deep dives cover building with Box and leading AI tooling, including developer sessions on agents, MCP, and multi-agent applications.", "440 visible attendees on the two-day Luma listing and a serious partner roster signal a strong conference room; the Friday-only timing is the decisive drawback.", "Applications for limited developer passes are open. This is a daytime commitment with no Friday evening program advertised.", "https://luma.com/box-dev-summit-2026", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, November 7",
      verdict: "A credible agent build day with an evening-only path",
      note: "The full build begins at noon, but a separate free ticket starts at 4:30 PM for demos, keynotes, dinner, and technical conversation, bringing the event inside the weekend timing rule.",
      events: [
        card("Grok Bot Build Day SF: Real-World Agents", "12:00 PM - 7:00 PM PT; evening ticket starts 4:30 PM", "Hippo Campus, 1050 Sansome St", "SpaceXSI San Francisco", "Builders put Grok Bot to work on real workflows, software, sensors, or on-device systems, then share experiments before an agents-and-robotics dinner.", "The event is capped around 100, provides build credits and prizes, and offers a separate 4:30 PM demos-and-keynotes ticket for people who cannot commit to the daytime build.", "Registration is free with approval. Choose the 4:30-7:00 PM ticket to stay within the weekend preference.", "https://luma.com/ba9sivsv", "7.7/10", "Consider"),
      ],
    },
    {
      date: "Sunday, November 8",
      verdict: "Open night",
      note: "Both primary calendars, the fully expanded SF city feed, and focused fallbacks produced no event that survives the filters: the remaining options are virtual, non-SF, founder-networking, closed, or outside the timing and substance floors.",
      events: [],
    },
    {
      date: "Monday, November 9",
      verdict: "A first-party frontier-model talk followed by a live build challenge",
      note: "OpenRouter and Meta Superintelligence Labs offer the day's one clear high-signal room, pairing model context with an hour of actual building and live demos.",
      events: [
        card("Build Day: OpenRouter x Meta", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "OpenRouter and Meta Superintelligence Labs", "Meta's Saurabh Baji explains the Muse model family and why Meta is investing in frontier models before attendees use OpenRouter credits in a sixty-minute build challenge.", "First-party model experts, a limited room, hands-on credits, and volunteer demos make this much stronger than a model-launch social.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/openro-lu9g", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, November 10",
      verdict: "Agentic-AI demos at GitHub lead a strong infrastructure alternative",
      note: "Microsoft Foundry Live cleanly fits the after-work window. Terna's grid-and-data-center forum starts early, but its best panels run through 6:10 PM and are unusually specific.",
      events: [
        card("Foundry Live: Agentic AI Demo Night", "5:00 PM - 8:00 PM PT", "GitHub, 88 Colin P Kelly Jr St", "Microsoft Foundry Live", "Bay Area startups give live agentic-AI demos and technical deep dives, followed by discussion and networking.", "74 visible attendees, a first-party GitHub venue, and Microsoft's recurring demo-night format create a credible room despite the still-unpublished startup lineup.", "Registration is open with approval.", "https://luma.com/vy6q8htj", "8.4/10", "Sign up now"),
        card("Terna Innovation Zone Forum: Power for AI and Data Centers", "4:00 PM - 8:00 PM PT", "Mind the Bridge, 450 Townsend St", "Terna and Mind the Bridge", "AWS, Google, EDF, EPRI, GridCare, Emerald AI, and FLUIX AI speakers examine how grids can connect new AI and data-center loads and move GridTech from research into deployment.", "The program has named infrastructure operators and two concrete panels on the connection race and production GridTech, but doors and opening remarks begin an hour earlier than preferred.", "Registration is open with approval. Best content runs 4:45-6:10 PM, followed by a showcase and aperitivo.", "https://luma.com/svtaeqxu", "7.0/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, November 11",
      verdict: "A major voice-AI summit plus a deep software-engineering conference",
      note: "VapiCon is the stronger room by a wide margin. SF Ruby is technically excellent but daytime-only, expensive, and AI-light on its second day.",
      events: [
        card("VapiCon 2026 — Day 1", "Full day; happy hour closes the program", "Festival Pavilion, Fort Mason, 2 Marina Blvd", "Vapi", "The frontier voice-AI summit brings product keynotes, technical builder and leader tracks, breakouts, demos, workshops, and a closing happy hour.", "The organizers advertise 1,200-plus attendees, 50-plus speakers, and leaders from OpenAI, Vercel, LangChain, Deepgram, WorkOS, Coval, Twilio, Cartesia, Daily, and Arize.", "Tickets are available through the official site and Luma approval flow. No evening-only admission or exact daily hours are published.", "https://luma.com/vapi-9sdp", "8.8/10", "Sign up now"),
        card("San Francisco Ruby Conference — Day 2", "9:00 AM - 4:30 PM PT", "SFJAZZ, 201 Franklin St", "SF Ruby and Evil Martians", "A full day of technical talks covers Rails queues and concurrency, Kubernetes platforms, open-source search at scale, reactive views, background processing, and satellite command and control.", "Speakers come from 37signals, Shopify, Gusto, Persona, Typesense, and OpenC3, and the format alternates talks with focused engineering conversation groups.", "Paid conference ticket required. The program is daytime-only and explicitly AI-light, so it is visible as best available rather than an after-work recommendation.", "https://luma.com/sfrubyconf2026", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Thursday, November 12",
      verdict: "VapiCon's second day leads; SF Ruby offers a smaller evening community close",
      note: "The voice-AI summit remains the strongest technical room. SF Ruby Wrapped is the after-work alternative, though its program is social rather than talk-driven.",
      events: [
        card("VapiCon 2026 — Day 2", "Full day; happy hour closes the program", "Festival Pavilion, Fort Mason, 2 Marina Blvd", "Vapi", "Day two continues the frontier voice-AI summit with keynotes, technical and product breakouts, workshops, demos, a fireside chat, and a closing happy hour.", "The 1,200-plus-person summit concentrates voice-AI infrastructure and production leaders, including OpenAI's realtime team, Vercel, LangChain, Deepgram, WorkOS, Coval, Twilio, and Cartesia.", "Tickets include both days, meals, and happy hour. No evening-only admission or exact daily hours are published.", "https://vapi.ai/vapicon-2026", "8.8/10", "Sign up now"),
        card("SF Ruby 2026 Wrapped with MUX", "6:00 PM - 9:00 PM PT", "Mux HQ, Financial District", "SF Ruby and Mux", "SF Ruby closes its three-day conference with an evening gathering for local Ruby and Rails engineers at Mux.", "45 visible attendees and an established engineering community create a credible small room, but the listing promises conversation rather than talks or demos.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/sfruby2026-wrapped", "7.2/10", "Consider"),
      ],
    },
  ],
  profile: {
    description: "Our recommended events target high-signal, after-work gatherings across AI topics, prioritizing rooms with applied AI builders and technical PMs over generic networking. We favor curated venues and substantive topics like agents, evals, and AI infrastructure, while filtering out founder-heavy and novice-oriented events.",
    sourceHeading: "Event Calendars",
    sources: [
      {
        label: "Discover AI events",
        link: "https://luma.com/ai",
        image: "./ai-square.png",
      },
      {
        label: "Discover tech events",
        link: "https://luma.com/tech",
        image: "./tech-square.png",
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
