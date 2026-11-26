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

window.plannerData = {
  checkedAt: "November 25, 2026 at 9:02 PM PT",
  updatedAt: "November 25, 2026",
  windowLabel: "November 25, 2026 → December 9, 2026",
  featured: [
    {
      title: "FastMCP Meetup",
      date: "Wed, Dec 2",
      recommendation: "Sign up now",
      summary: "FastMCP, LangChain, and Microsoft engineers cover MCP skills, background tasks, auth, Postgres, and multimodal apps at GitHub HQ.",
      link: "https://luma.com/fastmcp-meetup-dec26",
    },
    {
      title: "AI Tinkerers: Agent Infrastructure Night",
      date: "Thu, Dec 3",
      recommendation: "Sign up now",
      summary: "A screened 40-person room goes deep on agent runtimes, orchestration, state, evals, permissions, and production reliability.",
      link: "https://sf.aitinkerers.org/p/ai-tinkerers-san-francisco-agent-infrastructure-night",
    },
    {
      title: "Demo Night @ WorkOS (December)",
      date: "Mon, Dec 7",
      recommendation: "Sign up now",
      summary: "WorkOS keeps the room builder-first with live demos only, no slides, no company pitches, and 301 attendees already registered.",
      link: "https://luma.com/demo-night-dec2026",
    },
  ],
  days: [
    {
      date: "Wednesday, November 25",
      verdict: "Open night",
      note: "",
      events: [],
    },
    {
      date: "Thursday, November 26",
      verdict: "A broad maker-community Thanksgiving is the best available room",
      note: "Assembly SF is rooted in technology, robotics, wearables, and physical art, but this is a social holiday dinner rather than a technical program. It stays visible only as the day's marginal best available option.",
      events: [
        card("Far from Home? There's a Place for You at Our Table", "5:00 PM - 10:00 PM PT", "Assembly SF, San Francisco", "Assembly SF and Mission Dolores Manor", "A seated Thanksgiving dinner brings together researchers, makers, designers, tech professionals, artists, and founders in Assembly SF's emerging robotics and physical-technology community.", "Assembly SF's focus on physical AI, robotics, wearables, and maker culture provides some room signal, but the program itself is intentionally social and broad.", "Paid approval-based standard, plus-one, VIP, and last-minute tickets remain; the early-bird tier is sold out. This is not a technical event and is listed only as the day's marginal best available option.", "https://luma.com/utkabko4", "6.1/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Friday, November 27",
      verdict: "Open night",
      note: "",
      events: [],
    },
    {
      date: "Saturday, November 28",
      verdict: "A small robotics research circle is the day's best available room",
      note: "Saturday Robotics offers a technically focused cross-embodiment learning discussion, but the 2:00 PM start is earlier than the preferred weekend window and only 23 attendees are visible.",
      events: [
        card("Robotics & World Models Reading Club 40", "2:00 PM - 5:00 PM PT; keynote starts 2:30 PM", "San Francisco", "Saturday Robotics and Junfan Zhu", "Yaru Niu of Carnegie Mellon presents cross-embodiment learning, contact prediction, tactile representations, and how one manipulation skill can transfer across five robot bodies, followed by Q&A and an open paper roundtable.", "The recurring group cites past researchers from Boston Dynamics, Google DeepMind, NVIDIA, Stanford, Berkeley, Physical Intelligence, and Tesla, but this edition currently shows only 23 attendees.", "Registration is open and free for researchers, founders, and technical attendees. The 2:00 PM start is an hour earlier than the preferred weekend window.", "https://luma.com/vnw94wbh", "6.2/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 29",
      verdict: "A dense physical-AI research talk is the best available room",
      note: "Sundae Robotics is unusually technical and well attended, but its 2:00 PM start is an hour earlier than the preferred weekend window.",
      events: [
        card("Sundae Robotics 12: What Scale Does Not Fix", "2:00 PM PT", "Founders, Inc. SF Lab, 2 Marina Blvd", "Sundae Robotics", "Elijah Yi Herng Ong of Devol Robots presents Interaction World Models, Riemannian sensorimotor representations, compliance learned without force supervision, and a unified world-action architecture for contact-rich manipulation.", "133 visible attendees, production-hardware demonstrations, concrete LIBERO and RoboTwin results, and a deeply technical physical-AI agenda create strong room signal.", "Registration is free with approval. The 2:00 PM start is an hour earlier than the preferred weekend window, so this is listed as the day's best available option rather than a recommended evening pick.", "https://luma.com/gcvq12da", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 30",
      verdict: "A compact creative-AI showcase is the clear after-work option",
      note: "CapCut, ElevenLabs, and the Chroma Awards bring a capped room of AI filmmakers and creative technologists together for a concrete product demo, screening, and Q&A.",
      events: [
        card("CapCut x ElevenLabs - Chroma Awards - San Francisco Creator Meetup", "6:00 PM - 9:00 PM PT; programming starts 7:00 PM", "Private address, San Francisco", "Chroma Awards, CapCut, and ElevenLabs", "A one-hour program pairs a Chroma Awards overview with a CapCut generative-media demo, a screening, and Q&A for AI filmmakers, animators, musicians, game creators, and creative technologists.", "106 visible attendees, two first-party generative-media companies, and a defined demo-and-screening block provide credible room signal.", "Event full; join the waitlist. The exact venue is announced to accepted guests closer to the date, and the event is 21+ for alcohol service.", "https://luma.com/ajgzw3uj", "7.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, December 1",
      verdict: "Model training and interactive voice demos make this a strong AI night",
      note: "Phonely leads with a concrete training-and-evals walkthrough at AWS. Deepgram offers the more interactive alternative: live voice agents, robots, accessibility tools, and an open demo mic.",
      events: [
        card("How to Train LLMs to Beat Frontier Models", "6:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St", "Phonely AI and AWS Builder Loft", "Phonely engineers show how they scrub real phone conversations, fine-tune a small model on AWS GPUs, and build evals that compare the base model, the fine-tuned model, and a stronger frontier model.", "177 visible attendees, named Phonely engineering and research speakers, an intermediate technical audience, and the first-party AWS venue create a strong practitioner room.", "Registration is open. Both the Luma RSVP and separate AWS Builder Center registration are required, along with a physical government-issued photo ID.", "https://luma.com/skwlv4im", "8.5/10", "Sign up now"),
        card("Open Mic: Demo Night with Deepgram", "6:00 PM - 9:00 PM PT; demos start 6:30 PM", "Deepgram SF Collab Hub, 505 Howard St", "Deepgram Events and Bond AI", "Builders demo real-time AI avatars, voice games, phone-based authoring tools, accessibility products, robots, gadgets, and voice agents before an open mic where anyone can show a working Deepgram build.", "193 visible attendees, a first-party Deepgram venue and host, hands-on access to demos, and a concrete open-mic format create strong applied voice-AI signal.", "Registration is open. Builders can request a five-minute in-person or remote demo slot; food and drinks are provided.", "https://luma.com/rknv0ow1", "8.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, December 2",
      verdict: "MCP and production AI infrastructure lead a packed technical night",
      note: "FastMCP brings first-party framework engineers together with LangChain and Microsoft at GitHub HQ. AI Infrastructure Night offers four concrete production talks, while SF Hardware Meetup brings deployed recycling robotics and industrial monitoring.",
      events: [
        card("FastMCP Meetup", "6:00 PM - 9:00 PM PT", "GitHub HQ, 88 Colin P Kelly Jr St", "Prefect / FastMCP", "FastMCP creator Jeremiah Lowin and engineers from FastMCP, LangChain, and Microsoft cover skills over MCP, async background tasks, authentication, Postgres, and multimodal MCP apps.", "194 visible attendees, first-party framework maintainers, adjacent platform experts, and GitHub's headquarters create a concentrated protocol-engineering room.", "Registration is open and free. This is a newly listed event, so the current attendance is already a strong signal.", "https://luma.com/fastmcp-meetup-dec26", "8.8/10", "Sign up now"),
        card("AI Infrastructure Night", "5:00 PM - 7:30 PM PT; talks start 6:00 PM", "Private address, Financial District", "Alien, Constal, Chalk AI, and Datastrato", "Four technical talks cover multi-provider sandbox routing and failover, infrastructure built for autonomous coding agents, operating software in customer clouds, and governing agent access to enterprise data.", "441 visible attendees, named infrastructure builders, a dense hour of technical talks, and concrete production failure modes create a high-signal practitioner room.", "Registration is open with approval. The exact address is disclosed to accepted attendees.", "https://luma.com/z4b3wb9d", "8.6/10", "Sign up now"),
        card("Hardware Fireside Chat @ Flux", "6:30 PM - 9:30 PM PT; talks start 7:00 PM", "Private address, San Francisco", "SF Hardware Meetup and Flux", "Three operator sessions cover Glacier's AI-powered recycling robots and vision systems at Recology, industrial equipment monitoring from EquipSight, and the infrastructure behind improving city water, waste, and energy systems.", "200 visible attendees, deployed physical-AI systems, named operators from Glacier, Recology, and EquipSight, and the 10,500-member SF Hardware Meetup create a high-signal room.", "Event full; join the waitlist. The exact address is disclosed to accepted guests, and RSVPs may be shared with recurring sponsors under the host's stated policy.", "https://luma.com/lx81wh0i", "8.4/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, December 3",
      verdict: "Screened agent infrastructure leads three strong builder rooms",
      note: "AI Tinkerers is the clear technical pick across runtimes, state, evals, permissions, and reliability. PostHog and Greptile add a newly listed agentic code-review demo room; Antler and ElevenLabs offer a broader voice build session.",
      events: [
        card("AI Tinkerers San Francisco: Agent Infrastructure Night", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "AI Tinkerers San Francisco and Omnara", "Six to eight short live demos and an open-hacking block cover sandboxes, runtimes, orchestration, memory, MCP integrations, evals, observability, auth, permissions, and production SLOs.", "A reviewed 40-person room, 41 current applications, no-sales-pitch rule, code-first demo format, and AI Tinkerers' 8,700-person SF technical community create exceptional room quality.", "Registration is open with organizer approval. The exact address is shared with accepted attendees; applicants should describe what they are building and one infrastructure problem they face.", "https://sf.aitinkerers.org/p/ai-tinkerers-san-francisco-agent-infrastructure-night", "8.9/10", "Sign up now"),
        card("Agentic Code Review Demo Night", "5:00 PM - 8:00 PM PT", "Private address, Dogpatch", "PostHog and Greptile", "Builders demo agentic code-review, testing, and debugging loops, from catching bugs in agent-written pull requests to cheaper CI and production monitoring, followed by a host roundtable.", "A first-party PostHog and Greptile room, a full hour of live demos, and 24 attendees on a listing published this week satisfy the new-listing exception and create strong devtools signal.", "Registration is open and free. The exact address is disclosed after registration; demo submissions are encouraged but not required to attend.", "https://luma.com/posthog-review-demo-night", "8.1/10", "Sign up now"),
        card("Antler SF After Dark V2: Building with Voice", "5:30 PM - 10:00 PM PT; kickoff starts 6:30 PM", "Private address, China Basin", "Antler US and ElevenLabs", "Builders prototype voice agents with ElevenLabs engineers available for demos, debugging, office hours, feedback, and an extended hands-on build block.", "First-party ElevenLabs engineering support, a working-session format, and approval gating create credible builder signal despite the venture host and hidden attendance.", "Registration is open with approval. The exact address is disclosed to accepted attendees, and the room includes future founders as well as engineers and operators.", "https://luma.com/antlerus-fd0t", "7.7/10", "Consider"),
      ],
    },
    {
      date: "Friday, December 4",
      verdict: "A technical AI Tinkerers room leads two after-work demo options",
      note: "The GTM Engineering track is explicitly implementation-first and pitch-free. AWS Builder Loft offers a broader product-demo alternative with a structured 75-minute showcase block.",
      events: [
        card("GTM Engineering Demo Night: December Edition", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "AI Tinkerers San Francisco with Attio", "Builders demo AI systems that learn from outcomes across research, onboarding, growth, and revenue workflows, opening code, prompts, data models, traces, evals, approvals, and rollback paths.", "43 current applications, organizer screening for hands-on authorship, live five-minute slide-free demos, and an explicit no-vendor-pitches rule make this a technical room despite the GTM domain.", "Registration is open with organizer approval. The exact address is shared with accepted attendees, and applicants should describe what they have built or tested.", "https://sf.aitinkerers.org/p/gtm-engineering-demo-night-december-edition", "8.5/10", "Sign up now"),
        card("AI Demo Night", "5:00 PM - 8:30 PM PT; demos start 5:45 PM", "AWS Builder Loft, 525 Market St", "Devnovate and AWS Builder Loft", "A 75-minute live showcase presents new AI products and builder projects, followed by community discussions and open demos.", "The first-party AWS venue, concrete demo agenda, approval gate, and new-listing exception provide credible room signal despite hidden attendance and a broader founder-and-investor audience.", "Registration is open with approval. Attendance is hidden on this new listing; the event begins at the earliest acceptable weekday time.", "https://luma.com/dwl3gurk", "7.1/10", "Consider"),
      ],
    },
    {
      date: "Saturday, December 5",
      verdict: "Two substantive build days, but both demand an early full-day commitment",
      note: "Claude Community offers the stronger room and ends with ten voted demos at 7:00 PM. ITCHATHON is a smaller applied alternative focused on concrete waste-management problems; neither offers an evening-only ticket.",
      events: [
        card("Claude Community x Release Before Ready Build Day", "9:00 AM - 9:00 PM PT; finalist demos start 7:00 PM", "Finix, 760 Market St", "Claude Community Events, Release Before Ready, and 500 Global", "Builders use Claude Code, Claude Desktop, and the Agent SDK to ship a working project in one day; the room votes and the ten most popular projects demo on the main stage at 7:00 PM.", "Claude Community has run 45 events across 11 cities, Release Before Ready cites more than 1,700 builders, and the first-party Claude tooling focus creates strong room signal despite hidden attendance.", "Registration is free with approval. This is a 12-hour build day beginning six hours before the preferred weekend window, with no separate evening-demo ticket.", "https://luma.com/clauderbr", "6.4/10", "Not recommended - best available"),
        card("ITCHATHON: Solve Actual Problems in Waste", "10:00 AM - 6:00 PM PT; demos start 5:00 PM", "European Startup Embassy, 461 Bryant St", "ITCH, Bond AI, and Build Club", "Teams build solutions for waste-management problems sourced from SmartWaste founder Sara Eve Fuentes, then submit at 4:30 PM and demo at 5:00 PM.", "62 visible attendees, a concrete industry problem, Apify data tooling, and a demo-based one-day build format provide credible applied-AI signal.", "Registration is open. The full-day start is five hours before the preferred weekend window, and there is no separate demo-only ticket.", "https://luma.com/p2cjmz2s", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, December 6",
      verdict: "A science-community reception is the marginal best available room",
      note: "No SF AI or tech listing survived the hard filters after both primary Luma calendars and fallback sources were exhausted. Caltech's AGU reception is a credible science room at the right time, but it is social, narrowly targeted, and not an AI program.",
      events: [
        card("Caltech at AGU San Francisco", "5:00 PM - 7:00 PM PT", "SPiN San Francisco, 690 Folsom St", "Caltech Alumni Association", "Caltech alumni and the broader community gather ahead of AGU26 for a casual reception with welcome remarks from geochemist John Eiler, chair of Caltech's Division of Geological and Planetary Sciences.", "An official Caltech host, a named senior scientist, and the American Geophysical Union audience provide credible science and research signal.", "Free advance registration is required and closes December 1. This is a community reception, not an AI or technical program, and is listed only because no stronger in-scope SF option survived.", "https://www.alumni.caltech.edu/event/caltech-at-agu-san-francisco/", "6.1/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, December 7",
      verdict: "WorkOS live demos lead a credible robotics alternative",
      note: "WorkOS is the clear pick: a large builder room with live demos only and explicit bans on slides and company pitches. The Humanoids companion meetup adds deployed robot and powered-clothing demos for a more specialized audience.",
      events: [
        card("Demo Night @ WorkOS (December)", "5:30 PM PT", "WorkOS, 660 Market St", "WorkOS Events", "Builders show side projects, internal tools, open-source work, and startups through live demos, then get feedback from a room explicitly structured around shipping rather than pitching.", "301 visible attendees, a first-party WorkOS host and venue, and the live-demos-only, no-slides, no-company-pitches rules create an exceptional builder room.", "Registration is open. Demo submissions use a separate form linked from the event page.", "https://luma.com/demo-night-dec2026", "8.9/10", "Sign up now"),
        card("Bots, Bevs & Humanoids", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "Robots and Startups with Silicon Valley Robotics", "Short talks and live demos cover Quori, Reachy, wearable robots, human-motion prediction on real trails, and additional humanoid systems around the IEEE-RAS Humanoids conference.", "Silicon Valley Robotics, an established robotics community, a named powered-clothing scientist, and multiple hardware demos create credible room quality despite hidden attendance.", "Registration is open. The exact venue is disclosed after registration; the room includes industry networking but has a concrete technical demo block.", "https://luma.com/k2jvkz3f", "7.5/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, December 8",
      verdict: "Software factories, agent infrastructure, and durable demos make the strongest night in the window",
      note: "Qodo, NVIDIA, GitHub, OpenAI, and MCP practitioners lead with a technical software-factory panel and live stations. Daytona adds a compact agent-infrastructure program, while Temporal and WorkOS keep their room pitch-free and demo-first.",
      events: [
        card("Agentic AI in the Wild: Software Factory Engineering", "5:00 PM - 7:30 PM PT", "Bright Data, 625 2nd St", "Qodo Dev Community, Bright Data, NVIDIA, and Bond AI", "Engineering leaders examine long-running coding agents, code verification, security, observability, self-hosted inference, and measurement, followed by live demo stations from NVIDIA, Qodo, GitHub, OpenAI, Bright Data, and the MCP community.", "Named GitHub Next and MCP Apps leaders, participating OpenAI and NVIDIA teams, a senior-engineer audience, and an explicit no-sales-pitches rule create the window's strongest software-factory room.", "Registration is open with approval and limited capacity. The event is 21+; OpenAI and NVIDIA panelist names are still to be announced.", "https://luma.com/mobsaf60", "9.1/10", "Sign up now"),
        card("Daytona AI Builders - SF, December 2026", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Daytona with Brex", "Five focused talks cover forkable sandboxes for long-running agents, production-ready integrations and permissions, trace-to-eval workflows, episodic memory, and an additional Crusoe infrastructure session.", "304 visible attendees, first-party agent-runtime and observability speakers from Daytona, Nango, Langfuse, FalkorDB, and Crusoe, and a dense technical agenda create strong practitioner signal.", "Registration is open with approval. The exact address is disclosed to accepted attendees.", "https://luma.com/ai-builders-sf-dec", "8.8/10", "Sign up now"),
        card("Durable AI Demo Night w/ Temporal and Corgi", "6:00 PM PT", "Private address, San Francisco", "Temporal Community and Bond AI", "Rapid live demos from Proofwise, Terse, WorkOS, Promptend, and additional builders show current AI and developer-tool stacks without slides or polished product pitches.", "52 visible attendees, a first-party Temporal host, Amanda Martin from WorkOS, and a no-slides, no-product-pitches format create a compact high-signal demo room.", "Registration is open with approval. The exact address is hidden on Luma, with building-entry instructions provided on the event page.", "https://luma.com/durable-ai-demo-night", "8.5/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, December 9",
      verdict: "A closed but unusually technical robot-learning room is the best available option",
      note: "HackerSquad and Bright Data offer a focused physical-AI program on simulation, real-world data, and deployment feedback loops. Registration is closed, but the strong room remains visible with accurate status rather than being replaced by weaker founder or pitch events.",
      events: [
        card("Robot Learning #03: Simulation vs Reality & the Robot Data Engine", "5:00 PM - 8:30 PM PT; demos start 5:45 PM", "Bright Data Web Data Loft, 625 2nd St", "Bright Data and HackerSquad", "Short demos and a practitioner panel examine simulated, real-world, and demonstration data for VLAs and world models, transfer gaps, task-relevant evals, and feedback loops from deployment failures into training.", "A private Bright Data and HackerSquad room, a sharply technical physical-AI scope, and a researcher-and-ML-engineer audience provide credible signal despite hidden attendance and unnamed presenters.", "Registration is closed. The host page says the event is not currently accepting registrations; contact the host or subscribe for updates.", "https://luma.com/robot-learning-data-engine-dec9-2026", "7.6/10", "Consider"),
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
