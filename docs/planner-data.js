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
  checkedAt: "November 15, 2026 at 7:01 PM PT",
  updatedAt: "November 15, 2026",
  windowLabel: "November 15, 2026 → November 29, 2026",
  featured: [
    {
      title: "Agentic + AI Night: AI Agents Across the App Stack",
      date: "Thu, Nov 19",
      recommendation: "Sign up now",
      summary: "Six production-agent sessions bring Databricks, Neon, Vercel, OpenAI, Nimble, and WorkOS into one pitch-free technical room.",
      link: "https://luma.com/Agentic_AI_Night-11-19",
    },
    {
      title: "On-Device Agents with Liquid AI x AI Socratic",
      date: "Wed, Nov 18",
      recommendation: "Sign up now",
      summary: "A capped technical room traces local agents from efficient models through NPUs, runtimes, deployment, and benchmarking.",
      link: "https://luma.com/on-device-agents",
    },
    {
      title: "Demo Night @ WorkOS (November)",
      date: "Mon, Nov 16",
      recommendation: "Sign up now",
      summary: "Four hundred builders are registered for WorkOS's no-slides, no-pitches live-demo format; the waitlist is still worth joining.",
      link: "https://luma.com/demo-night-nov2026",
    },
  ],
  days: [
    {
      date: "Sunday, November 15",
      verdict: "A serious evals finale, but only for full-weekend participants",
      note: "Vals AI is the day's only option that survives the content filters. The public-facing finale begins before the preferred weekend window, and there is no standalone Sunday admission.",
      events: [
        card("Vals AI Hackathon: Benchmaxxing — Demos and Judging", "2:00 PM - 3:00 PM PT; full event starts Saturday at noon", "Private address, the Mission", "Vals AI", "Teams submit post-trained models, frontier-model evals, or poker bots, then demo results against live leaderboards and Vals' Valkyrie evaluation harness before prizes are announced.", "The 254-person technical room, private benchmarks, sponsor compute, three defined tracks, and more than $60,000 in prizes support serious post-training and evals signal.", "Approval covers the full 24-hour hackathon. There is no standalone Sunday ticket or door entry, and the public finale starts an hour before the preferred weekend window.", "https://luma.com/6suc4p8e", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 16",
      verdict: "Live builder demos plus two exceptional infrastructure rooms",
      note: "WorkOS is the clean after-work choice, though it is now waitlist-only. Bright Data offers a focused browser-agent program; Datadog's INFER/CON is the deepest room but requires a full weekday commitment.",
      events: [
        card("Demo Night @ WorkOS (November)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS Events", "Engineers demo side projects, internal tools, open-source work, and startups live, with no slides and no company pitches allowed.", "400 visible attendees, a proven recurring format, and WorkOS's developer-infrastructure community make this a focused builder room rather than a generic showcase.", "Event full; join the waitlist. The final demo lineup is still unpublished.", "https://luma.com/demo-night-nov2026", "8.8/10", "Sign up now"),
        card("INFER/CON 2026", "8:00 AM - 6:00 PM PT", "Private address, San Francisco", "Datadog", "A 22-session program examines inference performance, latency, KV cache and memory, distributed systems, evaluation, security, observability, and production cost.", "The 350-person lineup includes Anthropic platform head Katelyn Lesse plus leaders from Fireworks, Cerebras, NVIDIA, Google DeepMind, CoreWeave, Prime Intellect, Modal, SGLang, and Datadog.", "Free with application and host approval. This is a full-day weekday commitment; the exact address is disclosed to approved attendees.", "https://infercon.ai/", "8.7/10", "Sign up now"),
        card("Agentic Web #02 — The Browser as an Agent Runtime", "5:30 PM - 8:30 PM PT", "Bright Data Web Data Loft, 625 2nd St", "Bright Data and HackerSquad", "Short live demos and a practitioner panel examine browser state, session handling, page understanding, task-success evaluation, failure recovery, and human handoffs for web agents.", "237 visible attendees and a sharply targeted agent-developer and browser-infrastructure audience support the room, though demo teams and panelists remain unannounced.", "Registration is free with approval. Programming starts at 6:00 PM.", "https://luma.com/agentic-web-browser-runtime-nov16-2026", "8.0/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, November 17",
      verdict: "A standout night for production voice AI and agent infrastructure",
      note: "OpenRouter and ElevenLabs lead despite the waitlist. Alien's compact operator talks are the strongest open request; Convex and Daytona add a practical secure-agent-runtime build night.",
      events: [
        card("In Production: OpenRouter x ElevenLabs", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "OpenRouter and ElevenLabs", "Founders and engineering teams demo shipped voice and audio products, then unpack model selection, infrastructure, performance, and production problems that benchmarks miss.", "Two first-party AI infrastructure companies, three named product teams, and live demos rather than slides make this one of the week's cleanest applied-AI gatherings.", "Event full; join the waitlist. The exact address is disclosed to approved attendees.", "https://luma.com/wvw8xwsi", "8.9/10", "Sign up now"),
        card("AI Infrastructure Night", "5:00 PM - 7:30 PM PT", "Private address, San Francisco", "Alien, BytePort, ClickHouse, and Bond AI", "Four compact operator talks cover voice-agent infrastructure, middle-mile data transport, software inside customer-controlled environments, and agentic analytics with ClickHouse.", "401 visible attendees, named technical speakers from Telnyx, BytePort, Alien, and ClickHouse, and a tightly scheduled talk block create a high-signal room.", "Event full; join the waitlist. The exact address is disclosed to approved attendees.", "https://luma.com/1ihtxydc", "8.8/10", "Sign up now"),
        card("AI Builders Night with Convex, Daytona, Photon & CopilotKit", "5:30 PM - 8:30 PM PT", "Convex, 444 De Haro St, Suite 218", "Convex, Daytona, Photon, and CopilotKit", "Builders demo agents and full applications, then Convex and Daytona show how agent code runs inside secure sandboxes through the Daytona Convex Sandbox component.", "Named speakers from four developer-tool companies and a concrete secure-agent-runtime integration make this more than a generic community night.", "Registration is free with approval; talks begin around 6:15 PM.", "https://luma.com/convex-llhe", "8.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, November 18",
      verdict: "Two exceptional rooms spanning local agents and research tooling",
      note: "Liquid AI and AI Socratic lead with a capped, five-speaker technical program. Snorkel AI's Paper2Agent reading group is the research-first alternative.",
      events: [
        card("On-Device Agents with Liquid AI x AI Socratic", "6:00 PM - 9:30 PM PT", "Private address, San Francisco", "Liquid AI and AI Socratic", "Technical talks trace local agents from efficient architectures through NPUs, runtimes, deployed apps, and benchmarks for quality, latency, memory, and power.", "84 visible attendees against a 90-person cap, 80 confirmed guests, and speakers from Liquid AI, Cactus Compute, Qualcomm, Xybrid, and ZETIC create a deliberately technical room.", "Registration is open with approval and every request is reviewed. The exact Liquid AI address is disclosed to approved attendees.", "https://luma.com/on-device-agents", "9.1/10", "Sign up now"),
        card("Reading Group: Reimagining Research Papers as Interactive AI Agents", "4:30 PM - 7:00 PM PT; talk starts 5:00 PM", "Private address, SoMa", "Snorkel AI", "Stanford HAI postdoc Jiacheng Miao presents Paper2Agent, an open-source pipeline that turns papers and codebases into validated MCP agents that execute methods and collaborate across studies.", "The work is published in Nature, converted 74 of 100 computational-biology papers, and outperformed a general-purpose coding agent; Snorkel's recurring research community adds room quality despite hidden attendance.", "Registration is free with approval. Doors open before the weekday preference, but the technical talk begins at 5:00 PM.", "https://luma.com/d7u92w1l", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, November 19",
      verdict: "One of the window's strongest nights for production agents and AI infrastructure",
      note: "The multi-track agent-stack program leads on breadth. Ode and Anthropic offer the most concentrated production-agent room; Neo4j and AWS provide the strongest structured engineering agenda.",
      events: [
        card("Agentic + AI Night: AI Agents Across the App Stack", "4:00 PM - 9:30 PM PT; keynote starts 5:30 PM", "Terra Gallery, 511 Harrison St", "Agentic + AI Observability", "A keynote and six breakout sessions cover agent-built apps, backend and data architecture, production failure modes, reviewability, testing, guardrails, and observability.", "Named participation from Databricks, Neon, Vercel, OpenAI, Nimble, and WorkOS plus a pitch-free practitioner format make this a top-tier agent-engineering room.", "Registration is open with approval. Arrive for the 5:30 PM keynote to stay within the weekday timing preference.", "https://luma.com/Agentic_AI_Night-11-19", "9.2/10", "Sign up now"),
        card("Coffeehouse by Ode with Anthropic", "5:30 PM - 7:30 PM PT", "SHACK15, Ferry Building", "Ode with Anthropic", "Engineers show how Vercel's internal superagent is built, how stronger models change agent design, and what it takes to deploy agents inside large organizations, followed by a technical Anthropic/Ode panel.", "Named Ode and Vercel engineers, Anthropic participation, an invite-only room, and a recruiter-free practitioner format make this unusually well matched to the taste profile.", "Registration is open with approval. Capacity is hard-capped, there are no plus-ones, and doors close at 6:00 PM.", "https://luma.com/ode-coffeehouse", "8.9/10", "Sign up now"),
        card("Graphs for Engineering, Part 2", "4:30 PM - 8:00 PM PT; talks start 5:30 PM", "AWS Builder Loft, 525 Market St", "Neo4j and AWS Builder Loft", "Four technical sessions cover context graphs, AWS AgentCore and Tavily, deterministic enforcement for agent actions, and ontologies for rules agents cannot forget, followed by group discussions.", "234 visible attendees, a first-party AWS venue, and named Neo4j, AWS, Arcade, and Reticular Semantics speakers create a strong engineering room.", "Registration is open. The Luma header ends at 8:00 PM while the agenda lists discussions through 8:15 PM; a physical government-issued ID and separate AWS Builder registration are required.", "https://luma.com/js68jbj1", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, November 20",
      verdict: "A serious personal-agent hackathon, but only as a full-day commitment",
      note: "tokens& and AWS Builder Loft offer the day's strongest in-scope room. Finalist demos begin at 5:00 PM, but approval covers the full 9:30 AM build day rather than an evening-only ticket.",
      events: [
        card("Personal Agents Hackathon", "9:30 AM - 7:30 PM PT; finalist demos start 5:00 PM", "Private address, San Francisco", "tokens& and AWS Builder Loft", "Teams build personal agents that go beyond chat demos, using sponsor compute and infrastructure before live finalist demos and judging.", "Judges from Meta, Cursor, Plato, Intuit, Superlinked, Arcee, Cognee, Persona, and SingleStore plus partners spanning memory, evals, models, and simulation create a credible technical room.", "Registration is free with approval. This is a full-day commitment, and there is no separate evening-demo ticket.", "https://luma.com/personalagenthack", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, November 21",
      verdict: "An open-infrastructure premiere plus a hands-on embodied-AI build",
      note: "Modal's documentary and technical Q&A cleanly fit the weekend preference. The X Square hack is rarer hands-on access to real robots, but it requires a full weekend beginning at 10:00 AM.",
      events: [
        card("Open Intelligence: A Documentary Premiere", "4:30 PM reception; 5:15 PM premiere and 5:45 PM Q&A", "Gray Area / Grand Theater, 2665 Mission St", "Modal", "A short documentary traces SGLang and vLLM and asks whether open inference can remain affordable and accessible, followed by a technical Q&A with Modal's Charles Frye.", "A first-party Modal host, two foundational open-source inference projects, and the Gray Area venue create a credible infrastructure room despite hidden attendance.", "Registration is open with approval. The program becomes a general mingle after the 5:45 PM Q&A.", "https://luma.com/modal-hklc", "7.7/10", "Consider"),
        card("Embodied AI Hackathon with X Square Robot — Day 1", "10:00 AM Saturday - 3:00 PM Sunday PT", "Private address, San Francisco", "X Square Robot, Ascension, and Osama F Rama", "Teams build industrial, home-service, commercial, or agricultural applications on a unified robot platform, with a dedicated kit for each team and support from X Square engineers.", "Eight real robot kits, $9,000 in cash prizes, a $200 stipend per qualified participant, and deployed embodied-AI hardware create strong builder signal.", "Registration is open with approval. This is a full-weekend commitment that starts five hours before the preferred weekend window.", "https://luma.com/21palhfw", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 22",
      verdict: "Physical-AI awards plus a substantive recursive-agent hack",
      note: "X Square's awards and after-party fit the Sunday timing preference, though approval covers the full hackathon. Sundai and Autolab are highly technical but require a 10-hour daytime commitment.",
      events: [
        card("Embodied AI Hackathon with X Square Robot — Awards", "4:00 PM - 6:00 PM PT; hacking ends 3:00 PM", "Private address, San Francisco", "X Square Robot, Ascension, and Osama F Rama", "Teams finish real-robot applications across industrial assembly, home services, commercial, and agricultural tasks before the awards ceremony.", "Eight dedicated robot kits, $9,000 in cash prizes, funded participation, and two days of hands-on embodied-AI work make the finale a high-signal robotics room.", "Approval is for the full hackathon, not a standalone awards ticket. The exact address is disclosed to approved attendees.", "https://luma.com/21palhfw#schedule", "8.3/10", "Consider"),
        card("Recursive Self Improvement Hack: Autonomous Agent Businesses", "10:00 AM - 8:00 PM PT; presentations at 6:00 PM", "Private address, San Francisco", "Recursive Self Improvement, Sundai, and Autolab", "Teams build tools that let projects operate and improve autonomously, spanning agent-run experiments, product iteration, distribution, and other measurable loops.", "Sundai has run more than 135 consecutive Sunday hacks, and organizers cite participants from MIT CSAIL, Harvard, DeepMind, and Meta Reality Labs; Autolab contributes concrete autoresearch infrastructure.", "Registration is free with approval. This is a 10-hour commitment beginning five hours before the preferred weekend window.", "https://luma.com/ktv3iwd9", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 23",
      verdict: "A focused production-agent meetup leads the night",
      note: "Temporal and RocketRide offer the day's clear pick: an after-work agent-harness demo plus a concrete discussion of reliability, permissions, failure recovery, and durable execution.",
      events: [
        card("Durable AI Meetup (November Edition)", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal Community, Bond AI, and RocketRide", "Temporal demos its agent harness and RocketRide presents production infrastructure, with discussion aimed at keeping agents reliable through traffic, failures, repeated mistakes, and unsafe tool access.", "148 visible attendees, a first-party Temporal organizer, and a sharply defined platform and AI-engineering audience create credible room signal.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/durable-ai-november", "8.3/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, November 24",
      verdict: "A substantive creative-AI build night leads Thanksgiving week",
      note: "Pangram, Kino, Capy, and Paper offer the clear in-scope option: five hours to build and explain an intentional AI-assisted artifact, with named judges and $4,000 in cash prizes.",
      events: [
        card("SF Non-Slop Hackathon | Pangram x Kino x Capy x Paper", "5:00 PM - 10:00 PM PT", "Private address, SoMa", "Pangram, Kino, Capy, and Paper", "Builders use AI detection, video editing, software-engineering, and design tools to create a game, film, image, physical object, or other artifact with value beyond a single prompt, then defend their choices.", "Four first-party AI-product hosts, named technical and creative judges, $4,000 in cash prizes, substantial tool credits, and a five-hour build block make this a credible hands-on room.", "Registration is open with approval. Attendance is hidden on this new listing, and the exact address is disclosed to approved attendees.", "https://luma.com/32d8mqid", "7.8/10", "Consider"),
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
        card("Far from Home? There's a Place for You at Our Table", "5:00 PM - 10:00 PM PT", "Assembly SF, 270 14th St", "Assembly SF and Mission Dolores Manor", "A seated Thanksgiving dinner brings together researchers, makers, designers, tech professionals, artists, and founders in Assembly SF's emerging robotics and physical-technology community.", "Assembly SF's focus on physical AI, robotics, wearables, and maker culture provides some room signal, but the program itself is intentionally social and broad.", "Paid, approval-required tickets remain; five early-bird spots are shown. This is not a technical event and is listed only as best available.", "https://luma.com/utkabko4", "6.1/10", "Not recommended - best available"),
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
      verdict: "A serious physical-AI hack, but only as a full-day commitment",
      note: "tokens& and Google DeepMind offer the day's only in-scope room. The content and judges are strong, but the 9:30 AM start is far outside the preferred weekend window.",
      events: [
        card("Physical AI Hack", "9:30 AM - 7:30 PM PT; finalist demos start 5:00 PM", "Private address, San Francisco", "tokens& with Google DeepMind partners", "Teams build perception, spatial intelligence, world-model, dexterity, autonomy, and human-machine-interaction systems with robotics and simulation tools before live demos and judging.", "Support from Google DeepMind plus judges from NVIDIA and Meta and a builders-only robotics, ML, hardware, and autonomous-systems audience create strong technical signal.", "Registration is free with approval. This is a full-day commitment beginning five and a half hours before the preferred weekend window.", "https://luma.com/physicalhack", "6.4/10", "Not recommended - best available"),
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
