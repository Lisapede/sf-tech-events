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
  checkedAt: "November 22, 2026 at 7:38 PM PT",
  updatedAt: "November 22, 2026",
  windowLabel: "November 22, 2026 → December 6, 2026",
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
      title: "How to Train LLMs to Beat Frontier Models",
      date: "Tue, Dec 1",
      recommendation: "Sign up now",
      summary: "Phonely turns messy production calls into a fine-tuned model, then evaluates it against a frontier baseline at AWS.",
      link: "https://luma.com/skwlv4im",
    },
  ],
  days: [
    {
      date: "Sunday, November 22",
      verdict: "A substantive recursive-agent hack is the only surviving option",
      note: "Sundai and Autolab are highly technical, but the event was in its final hour when this scan completed. X Square's awards had already ended and was removed rather than presented as an actionable option.",
      events: [
        card("Recursive Self Improvement Hack: Autonomous Agent Businesses", "10:00 AM - 8:00 PM PT; presentations at 6:00 PM", "Private address, San Francisco", "Recursive Self Improvement, Sundai, and Autolab", "Teams build tools that let projects operate and improve autonomously, spanning agent-run experiments, product iteration, distribution, and other measurable loops.", "Sundai has run more than 135 consecutive Sunday hacks, and organizers cite participants from MIT CSAIL, Harvard, DeepMind, and Meta Reality Labs; Autolab contributes concrete autoresearch infrastructure.", "Registration is free with approval, but only the final hour remained when checked. Joining now is impractical; this stays visible as today's best surviving in-scope room.", "https://luma.com/ktv3iwd9", "6.0/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 23",
      verdict: "Embodied-AI builders lead two strong practitioner rooms",
      note: "Mission Robotics is the hands-on pick for people bringing real hardware, simulation, or policy work, though it is now waitlist-only. Temporal's production-agent meetup is the infrastructure alternative and had one spot remaining when checked.",
      events: [
        card("Degrees of Freedom: Embodied AI Builders Night", "6:00 PM - 9:00 PM PT", "Mission Robotics, private address", "Mission Robotics", "Builders bring grippers, simulations, policies, or laptop-based robotics projects, state what they want working, and spend two hours debugging with peers before a closing show-and-tell.", "251 visible attendees, a first-party robotics workspace, and a bring-your-own-build format create a rare hands-on physical-AI room.", "Event full; join the waitlist. The exact address is disclosed after acceptance, and a laptop-only project is welcome.", "https://luma.com/mission-u38j", "8.7/10", "Sign up now"),
        card("Durable AI Meetup (November Edition)", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal Community, Bond AI, and RocketRide", "Temporal demos its agent harness alongside production-infrastructure talks on agent reliability, workflow durability, failure recovery, and learning from repeated mistakes.", "299 visible attendees, a first-party Temporal organizer, and a sharply defined platform and AI-engineering audience create strong room signal.", "One spot remained when checked; registration requires approval. The exact address is disclosed to accepted attendees.", "https://luma.com/durable-ai-november", "8.3/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, November 24",
      verdict: "Scientific agents, AI safety, and a creative build make a strong night",
      note: "Pebblebed's capped research room leads with autonomous experiments and robotic labs. The RSI discussion offers technical AI-control and interpretability breakouts, while the Non-Slop Hackathon is the hands-on creative alternative.",
      events: [
        card("ML Suds & Science: Who's Running the Lab?", "7:00 PM - 9:30 PM PT", "Private address, San Francisco", "Pebblebed Events", "Lightning talks examine agents running quantum experiments, digital twins, self-driving chemistry and materials labs, aerospace automation, AI for physics, and model safety once a system controls experiments.", "A curated and capped room, research-specific program, named technical domains, and a long-running ML Suds format create exceptional scientific-AI signal despite hidden attendance.", "Registration is open with approval. The exact address is disclosed to accepted attendees; drinks and snacks are provided.", "https://luma.com/fhjigudr", "8.5/10", "Sign up now"),
        card("SF Non-Slop Hackathon | Pangram x Kino x Capy x Paper", "5:00 PM - 10:00 PM PT", "Private address, SoMa", "Pangram, Kino, Capy, and Paper", "Builders use AI detection, video editing, software-engineering, and design tools to create a game, film, image, physical object, or other artifact with value beyond a single prompt, then defend their choices.", "Four first-party AI-product hosts, named technical and creative judges, $4,000 in cash prizes, substantial tool credits, and a five-hour build block make this a credible hands-on room.", "Registration is open with approval. Attendance is hidden on this new listing, and the exact address is disclosed to approved attendees.", "https://luma.com/32d8mqid", "7.8/10", "Consider"),
        card("Recursive Self-Improvement: AI Control and Interpretability", "6:30 PM - 8:30 PM PT", "Mox, San Francisco", "AI Safety SF and Recursive Self Improvement", "Technical breakouts examine AI-control and interpretability problems, while a guided group helps attendees work through the required METR reading and core concepts.", "216 visible attendees, required technical reading, and explicit control and interpretability tracks create a substantive safety room rather than a generic introduction.", "Registration is open. Read the linked METR material beforehand; one breakout is designed for people newer to the topic.", "https://luma.com/aisafety-4phl", "7.6/10", "Consider"),
      ],
    },
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
      note: "Saturday Robotics offers a technically focused world-model discussion, but the 2:00 PM start is earlier than the preferred weekend window, only 16 attendees are visible, and the keynote is still unannounced.",
      events: [
        card("Robotics & World Models Reading Club 41", "2:00 PM - 5:00 PM PT; keynote starts 2:30 PM", "San Francisco", "Saturday Robotics and Junfan Zhu", "A keynote, Q&A, and open paper roundtable focus on robotic world models, world-action models, embodied intelligence, and the technical details of current research.", "The recurring group cites past researchers from Boston Dynamics, Google DeepMind, NVIDIA, Stanford, Berkeley, Physical Intelligence, and Tesla, but this edition currently shows only 16 attendees.", "Registration is open and free for researchers, founders, and technical attendees. The 2:00 PM start is an hour earlier than the preferred weekend window, and the keynote speaker is not yet announced.", "https://luma.com/vnw94wbh", "6.0/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 29",
      verdict: "An applied-science agent hack is the best available room",
      note: "AGI House SF and MIT-linked Sundai builders offer substantive agent, eval, and scientific-computing tracks, but the 10:00 AM start requires a full-day commitment.",
      events: [
        card("SF × MIT Hack Day: Peptides", "10:00 AM - 8:00 PM PT; demos start 6:30 PM", "Private address, San Francisco", "Ascension at AGI House SF, Sundai, RSI House, Autolab, and Superradiant", "Teams build peptide-design agents, evidence engines that grade human data, or scientific evals that test whether predicted binders and stability scores hold up.", "A recurring 130-plus-hack Sundai community, AGI House SF, Autolab's autoresearch infrastructure, and concrete scientific-agent tracks create credible technical signal despite hidden attendance.", "Registration is free with approval and spots are limited. The Luma header ends at 8:00 PM while the agenda says 7:30 PM; this is a full-day commitment beginning five hours before the preferred weekend window.", "https://luma.com/sfxmit-peptides-staged", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 30",
      verdict: "A compact creative-AI showcase is the clear after-work option",
      note: "CapCut, ElevenLabs, and the Chroma Awards bring a capped room of AI filmmakers and creative technologists together for a concrete product demo, screening, and Q&A.",
      events: [
        card("CapCut x ElevenLabs - Chroma Awards - San Francisco Creator Meetup", "6:00 PM - 9:00 PM PT; programming starts 7:00 PM", "Private address, San Francisco", "Chroma Awards, CapCut, and ElevenLabs", "A one-hour program pairs a Chroma Awards overview with a CapCut generative-media demo, a screening, and Q&A for AI filmmakers, animators, musicians, game creators, and creative technologists.", "94 visible attendees, two first-party generative-media companies, and a defined demo-and-screening block provide credible room signal.", "Event full; join the waitlist. The exact venue is announced to accepted guests closer to the date, and the event is 21+ for alcohol service.", "https://luma.com/ajgzw3uj", "7.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, December 1",
      verdict: "Model training and interactive voice demos make this a strong AI night",
      note: "Phonely leads with a concrete training-and-evals walkthrough at AWS. Deepgram offers the more interactive alternative: live voice agents, robots, accessibility tools, and an open demo mic.",
      events: [
        card("How to Train LLMs to Beat Frontier Models", "6:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St", "Phonely AI and AWS Builder Loft", "Phonely engineers show how they scrub real phone conversations, fine-tune a small model on AWS GPUs, and build evals that compare the base model, the fine-tuned model, and a stronger frontier model.", "121 visible attendees, named Phonely engineering and research speakers, an intermediate technical audience, and the first-party AWS venue create a strong practitioner room.", "Registration is open. Both the Luma RSVP and separate AWS Builder Center registration are required, along with a physical government-issued photo ID.", "https://luma.com/skwlv4im", "8.5/10", "Sign up now"),
        card("Open Mic: Demo Night with Deepgram", "6:00 PM - 9:00 PM PT; demos start 6:30 PM", "Deepgram SF Collab Hub, 505 Howard St", "Deepgram Events and Bond AI", "Builders demo real-time AI avatars, voice games, phone-based authoring tools, accessibility products, robots, gadgets, and voice agents before an open mic where anyone can show a working Deepgram build.", "102 visible attendees, a first-party Deepgram venue and host, hands-on access to demos, and a concrete open-mic format create strong applied voice-AI signal.", "Registration is open. Builders can request a five-minute in-person or remote demo slot; food and drinks are provided.", "https://luma.com/rknv0ow1", "8.2/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, December 2",
      verdict: "MCP and production AI infrastructure lead a packed technical night",
      note: "FastMCP brings first-party framework engineers together with LangChain and Microsoft at GitHub HQ. AI Infrastructure Night offers four concrete production talks, while SF Hardware Meetup brings deployed recycling robotics and industrial monitoring.",
      events: [
        card("FastMCP Meetup", "6:00 PM - 9:00 PM PT", "GitHub HQ, 88 Colin P Kelly Jr St", "Prefect / FastMCP", "FastMCP creator Jeremiah Lowin and engineers from FastMCP, LangChain, and Microsoft cover skills over MCP, async background tasks, authentication, Postgres, and multimodal MCP apps.", "57 visible attendees, first-party framework maintainers, adjacent platform experts, and GitHub's headquarters create a concentrated protocol-engineering room.", "Registration is open and free. This is a newly listed event, so the current attendance is already a strong signal.", "https://luma.com/fastmcp-meetup-dec26", "8.8/10", "Sign up now"),
        card("AI Infrastructure Night", "5:00 PM - 7:30 PM PT; talks start 6:00 PM", "Private address, Financial District", "Alien, Constal, Chalk AI, and Datastrato", "Four technical talks cover multi-provider sandbox routing and failover, infrastructure built for autonomous coding agents, operating software in customer clouds, and governing agent access to enterprise data.", "211 visible attendees, named infrastructure builders, a dense hour of technical talks, and concrete production failure modes create a high-signal practitioner room.", "Registration is open with approval. The exact address is disclosed to accepted attendees.", "https://luma.com/z4b3wb9d", "8.6/10", "Sign up now"),
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
        card("ITCHATHON: Solve Actual Problems in Waste", "10:00 AM - 6:00 PM PT; demos start 5:00 PM", "European Startup Embassy, 461 Bryant St", "ITCH, Bond AI, and Build Club", "Teams build solutions for waste-management problems sourced from SmartWaste founder Sara Eve Fuentes, then submit at 4:30 PM and demo at 5:00 PM.", "54 visible attendees, a concrete industry problem, Apify data tooling, and a demo-based one-day build format provide credible applied-AI signal.", "Registration is open. The full-day start is five hours before the preferred weekend window, and there is no separate demo-only ticket.", "https://luma.com/p2cjmz2s", "6.3/10", "Not recommended - best available"),
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
