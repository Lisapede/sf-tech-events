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
  checkedAt: "November 18, 2026 at 3:38 AM PT",
  updatedAt: "November 18, 2026",
  windowLabel: "November 18, 2026 → December 2, 2026",
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
      title: "How to Train LLMs to Beat Frontier Models",
      date: "Tue, Dec 1",
      recommendation: "Sign up now",
      summary: "Phonely turns messy production calls into a fine-tuned model, then evaluates it against a frontier baseline at AWS.",
      link: "https://luma.com/skwlv4im",
    },
  ],
  days: [
    {
      date: "Wednesday, November 18",
      verdict: "Two exceptional rooms spanning local agents and research tooling",
      note: "Liquid AI and AI Socratic lead with a capped, five-speaker technical program. Snorkel AI's Paper2Agent reading group is the research-first alternative.",
      events: [
        card("On-Device Agents with Liquid AI x AI Socratic", "6:00 PM - 9:30 PM PT", "Private address, San Francisco", "Liquid AI and AI Socratic", "Technical talks trace local agents from efficient architectures through NPUs, runtimes, deployed apps, and benchmarks for quality, latency, memory, and power.", "91 visible attendees in a deliberately capped room, with speakers from Liquid AI, Cactus Compute, Qualcomm, Xybrid, and ZETIC.", "Registration is open with approval and every request is reviewed. The exact Liquid AI address is disclosed to approved attendees.", "https://luma.com/on-device-agents", "9.1/10", "Sign up now"),
        card("Reading Group: Reimagining Research Papers as Interactive AI Agents", "4:30 PM - 7:00 PM PT; talk starts 5:00 PM", "Private address, SoMa", "Snorkel AI", "Stanford HAI postdoc Jiacheng Miao presents Paper2Agent, an open-source pipeline that turns papers and codebases into validated MCP agents that execute methods and collaborate across studies.", "The work is published in Nature, converted 74 of 100 computational-biology papers, and outperformed a general-purpose coding agent; Snorkel's recurring research community adds room quality despite hidden attendance.", "Registration is free with approval. Doors open before the weekday preference, but the technical talk begins at 5:00 PM.", "https://luma.com/d7u92w1l", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, November 19",
      verdict: "One of the window's strongest nights for production agents and AI infrastructure",
      note: "The multi-track agent-stack program leads on breadth. Ode and Anthropic offer the most concentrated production-agent room; Neo4j and AWS provide the strongest structured engineering agenda.",
      events: [
        card("Agentic + AI Night: AI Agents Across the App Stack", "4:00 PM - 9:30 PM PT; keynote starts 5:30 PM", "Terra Gallery, 511 Harrison St", "Agentic + AI Observability", "A keynote and six breakout sessions cover agent-built apps, backend and data architecture, production failure modes, reviewability, testing, guardrails, and observability.", "Named participation from Databricks, Neon, Vercel, OpenAI, Nimble, and WorkOS plus a pitch-free practitioner format make this a top-tier agent-engineering room.", "Registration is open with approval. Arrive for the 5:30 PM keynote to stay within the weekday timing preference.", "https://luma.com/Agentic_AI_Night-11-19", "9.2/10", "Sign up now"),
        card("Coffeehouse by Ode with Anthropic", "5:30 PM - 7:30 PM PT", "SHACK15, Ferry Building", "Ode with Anthropic", "Engineers show how Vercel's internal superagent is built, how stronger models change agent design, and what it takes to deploy agents inside large organizations, followed by a technical Anthropic/Ode panel.", "Named Ode and Vercel engineers, Anthropic participation, an invite-only room, and a recruiter-free practitioner format make this unusually well matched to the taste profile.", "Event full; join the waitlist. Capacity is hard-capped, there are no plus-ones, and doors close at 6:00 PM.", "https://luma.com/ode-coffeehouse", "8.9/10", "Sign up now"),
        card("Graphs for Engineering, Part 2", "4:30 PM - 8:00 PM PT; talks start 5:30 PM", "AWS Builder Loft, 525 Market St", "Neo4j and AWS Builder Loft", "Four technical sessions cover context graphs, AWS AgentCore and Tavily, deterministic enforcement for agent actions, and ontologies for rules agents cannot forget, followed by group discussions.", "240 visible attendees, a first-party AWS venue, and named Neo4j, AWS, Arcade, and Reticular Semantics speakers create a strong engineering room.", "Registration is open. The Luma header ends at 8:00 PM while the agenda lists discussions through 8:15 PM; a physical government-issued ID and separate AWS Builder registration are required.", "https://luma.com/js68jbj1", "8.9/10", "Sign up now"),
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
        card("Durable AI Meetup (November Edition)", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal Community, Bond AI, and RocketRide", "Temporal demos its agent harness and RocketRide presents production infrastructure, with discussion aimed at keeping agents reliable through traffic, failures, repeated mistakes, and unsafe tool access.", "201 visible attendees, a first-party Temporal organizer, and a sharply defined platform and AI-engineering audience create credible room signal.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/durable-ai-november", "8.3/10", "Sign up now"),
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
        card("Far from Home? There's a Place for You at Our Table", "5:00 PM - 10:00 PM PT", "Assembly SF, 270 14th St", "Assembly SF and Mission Dolores Manor", "A seated Thanksgiving dinner brings together researchers, makers, designers, tech professionals, artists, and founders in Assembly SF's emerging robotics and physical-technology community.", "Assembly SF's focus on physical AI, robotics, wearables, and maker culture provides some room signal, but the program itself is intentionally social and broad.", "Paid, approval-required tickets remain; one early-bird spot is shown. This is not a technical event and is listed only as best available.", "https://luma.com/utkabko4", "6.1/10", "Not recommended - best available"),
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
    {
      date: "Monday, November 30",
      verdict: "A compact creative-AI showcase is the clear after-work option",
      note: "CapCut, ElevenLabs, and the Chroma Awards bring a capped room of AI filmmakers and creative technologists together for a concrete product demo, screening, and Q&A.",
      events: [
        card("CapCut x ElevenLabs - Chroma Awards - San Francisco Creator Meetup", "6:00 PM - 9:00 PM PT; programming starts 7:00 PM", "Private address, San Francisco", "Chroma Awards, CapCut, and ElevenLabs", "A one-hour program pairs a Chroma Awards overview with a CapCut generative-media demo, a screening, and Q&A for AI filmmakers, animators, musicians, game creators, and creative technologists.", "39 visible attendees against a 50-person cap, two first-party generative-media companies, and a defined demo-and-screening block provide credible room signal.", "Registration is open with approval. The exact venue is announced to accepted guests closer to the date, and the event is 21+ for alcohol service.", "https://luma.com/ajgzw3uj", "7.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, December 1",
      verdict: "A focused small-model training and evaluation deep dive leads the night",
      note: "Phonely and AWS offer the clear pick: a concrete walk-through from messy production phone data to fine-tuning, frontier-model comparison, failure analysis, and the next training iteration.",
      events: [
        card("How to Train LLMs to Beat Frontier Models", "6:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St", "Phonely AI and AWS Builder Loft", "Phonely engineers show how they scrub real phone conversations, fine-tune a small model on AWS GPUs, and build evals that compare the base model, the fine-tuned model, and a stronger frontier model.", "36 visible attendees on a new listing, named Phonely engineering and research speakers, an intermediate technical audience, and the first-party AWS venue create a strong practitioner room.", "Registration is open. Both the Luma RSVP and separate AWS Builder Center registration are required, along with a physical government-issued photo ID.", "https://luma.com/skwlv4im", "8.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, December 2",
      verdict: "Applied robotics and open-source agent workflows make this a strong tech night",
      note: "SF Hardware Meetup leads with deployed recycling robotics and industrial monitoring. Omarchy at Cloudflare is the hands-on open-source alternative for Linux workflows, plugins, hardware, and agents.",
      events: [
        card("Hardware Fireside Chat @ Flux", "6:30 PM - 9:30 PM PT; talks start 7:00 PM", "Private address, San Francisco", "SF Hardware Meetup and Flux", "Three operator sessions cover Glacier's AI-powered recycling robots and vision systems at Recology, industrial equipment monitoring from EquipSight, and the infrastructure behind improving city water, waste, and energy systems.", "177 visible attendees, deployed physical-AI systems, named operators from Glacier, Recology, and EquipSight, and the 10,500-member SF Hardware Meetup create a high-signal room.", "Registration is open. The exact address is disclosed to registered guests; RSVPs may be shared with recurring sponsors under the host's stated policy.", "https://luma.com/lx81wh0i", "8.4/10", "Sign up now"),
        card("Omarchy SF", "5:00 PM - 8:00 PM PT", "Cloudflare, 101 Townsend St", "Steve Derico and the Omarchy SF community", "A tech talk and community demos cover Omarchy, Linux, open source, themes, plugins, workflows, agents, hardware, and hacks, with attendees encouraged to bring laptops and show working builds.", "The Cloudflare venue, demo-first format, and concrete open-source agent and developer-workflow focus provide credible room quality despite hidden attendance.", "Registration is open and free. This is a community-run event rather than an official Omarchy or Omacom Foundation program.", "https://luma.com/ejid15jm", "7.6/10", "Consider"),
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
