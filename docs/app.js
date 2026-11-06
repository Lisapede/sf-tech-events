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
  checkedAt: "November 5, 2026",
  updatedAt: "November 5, 2026",
  windowLabel: "November 5, 2026 → November 19, 2026",
  featured: [
    {
      title: "Braintrust on How Agents Are Changing Evals",
      date: "Thu, Nov 5",
      recommendation: "Sign up now",
      summary: "Braintrust CEO Ankur Goyal and Greylock partner Corinne Riley go deep on agent observability, eval data, and model decisions.",
      link: "https://luma.com/baseten-g3n4",
    },
    {
      title: "SGLang Summit 2026",
      date: "Thu–Fri, Nov 12–13",
      recommendation: "Sign up now",
      summary: "Two days of frontier AI infrastructure with OpenAI, Thinking Machines, Perplexity, Intel, NVIDIA, Google, AWS, and Meta.",
      link: "https://luma.com/sglang-summit",
    },
    {
      title: "On-Device Agents with Liquid AI x AI Socratic",
      date: "Wed, Nov 18",
      recommendation: "Sign up now",
      summary: "Five technical talks trace local agents from efficient models through NPUs, quantization, deployment, and real-device benchmarks.",
      link: "https://luma.com/on-device-agents",
    },
  ],
  days: [
    {
      date: "Thursday, November 5",
      verdict: "Three strong rooms across agent evals, accelerated systems, and hardware",
      note: "Baseten, Braintrust, and Greylock lead with production evals. NVIDIA's CUDA-Rust program is a very close technical second; the established hardware meetup is the broader waitlist option.",
      events: [
        card("Braintrust on How Agents Are Changing Evals", "6:00 PM - 8:00 PM PT", "Baseten, 560 Davis St, Suite 250", "Baseten, Braintrust, and Greylock", "Braintrust CEO Ankur Goyal and Greylock partner Corinne Riley examine the shift from standalone evals to agent observability, agent-ready data infrastructure, and evidence-based model decisions.", "332 visible attendees, senior AI-infrastructure hosts, and a tightly scoped fireside with audience Q&A make this a high-signal technical-leadership room.", "Event full; join the waitlist.", "https://luma.com/baseten-g3n4", "9.0/10", "Sign up now"),
        card("NVIDIA x Lawrence Harvey — CUDA Rust", "5:30 PM - 8:30 PM PT", "House of AI, 40 Boardman Pl", "Lawrence Harvey and NVIDIA", "Four technical talks cover Rust's growing role in accelerated computing, with speakers from OpenAI, Zed Industries, AWS Hydro, and NVIDIA.", "179 visible attendees, a capped room, and a full two-hour speaker block led by NVIDIA senior research scientist Melih Elibol make this a strong systems event.", "Registration is open; talks begin at 6:00 PM.", "https://luma.com/iqe7wng1", "8.9/10", "Sign up now"),
        card("139th SF Hardware Meetup: Manufacturing and Design", "6:30 PM - 9:30 PM PT", "Private address, San Francisco", "SF Hardware Meetup and Vizcom", "Vizcom's Jared Teiger and Ouster hardware VP Fred Landavazo lead talks and Q&A on manufacturing and design before a community open mic for prototype demos.", "The 10,500-member recurring community, 139-event track record, named hardware leadership, and Vizcom's AI industrial-design venue support a credible room.", "Event full; join the waitlist. The exact address is disclosed to registered attendees.", "https://luma.com/2u9iuenk", "7.7/10", "Consider"),
      ],
    },
    {
      date: "Friday, November 6",
      verdict: "A substantive developer workshop day, but much earlier than preferred",
      note: "BoxWorks is the only strong technical option that survives the content filters. Its Friday program ends at lunch, so this is visible as best available rather than promoted as an after-work pick.",
      events: [
        card("BoxWorks Dev Summit — Friday Workshops", "9:00 AM - 1:00 PM PT", "San Francisco Marriott Marquis, 780 Mission St", "Box Devs with OpenAI, AWS, Docker, Meta, NVIDIA, and others", "Hands-on workshops and technical deep dives cover building with Box and leading AI tooling, including developer sessions on agents, MCP, and multi-agent applications.", "515 visible attendees on the two-day Luma listing and a serious partner roster signal a strong conference room; the Friday-only timing is the decisive drawback.", "Registration is closed. This is a daytime commitment with no Friday evening program advertised.", "https://luma.com/box-dev-summit-2026", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, November 7",
      verdict: "An evening-accessible agent build leads a deeper all-day Anthropic-backed hack",
      note: "Grok's separate 4:30 PM ticket fits the weekend window. Ship Happens is more technically demanding but starts at 10:00 AM, so it remains visible as best available rather than a recommendation.",
      events: [
        card("Grok Bot Build Day SF: Real-World Agents", "12:00 PM - 7:00 PM PT; evening ticket starts 4:30 PM", "Hippo Campus, 1050 Sansome St", "SpaceXSI San Francisco", "Builders put Grok Bot to work on real workflows, software, sensors, or on-device systems, then share experiments before an agents-and-robotics dinner.", "81 visible attendees, build credits and prizes, and a separate 4:30 PM demos-and-keynotes ticket create a credible builder room without requiring the full daytime commitment.", "Registration is free with approval. Choose the 4:30-7:00 PM ticket to stay within the weekend preference.", "https://luma.com/ba9sivsv", "7.7/10", "Consider"),
        card("Ship Happens: A Seldon Hackathon", "10:00 AM - 8:00 PM PT", "Private address, SoMa", "Seldon with Anthropic", "Teams replace a paid software product in one day, then hand the product to Seldon's QA agent and a Seldon operator for live workflow testing before demos and prizes.", "Anthropic support, up to $5,000 in prizes, mandatory Wren test results, and a working-product requirement create strong builder signal; the 10:00 AM start is the decisive drawback.", "Registration is free with approval. This is an all-day commitment outside the preferred weekend window.", "https://luma.com/seldon-4b3d", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 8",
      verdict: "A sold-out clinical-AI conference is the only substantive option",
      note: "The UCSF-backed program is credible and specific, but it is daytime-only and every public ticket tier shows zero availability, so it remains visible as best available rather than a recommendation.",
      events: [
        card("CH/UCSF/FCMS Healthcare Conference — Sunday Program", "Daytime program; exact hours not published", "Mission Bay Conference Center, 1675 Owens St", "CH/UCSF/FCMS Healthcare Conference", "Sunday sessions cover AI transforming clinical care, AI applications in brain health, medical ethics, stroke detection, cancer epidemiology, and liver health.", "The 23rd annual conference carries UCSF CME accreditation and named speakers from Stanford, UCSF, UCLA, Verily, and other medical institutions.", "All public Sunday and full-conference ticket tiers show zero availability. This is a daytime commitment with no evening-only program advertised.", "https://luma.com/9ln4wcgd", "6.4/10", "Not recommended - best available"),
      ],
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
      verdict: "A real agent-runtime hack leads strong demo and infrastructure alternatives",
      note: "Archil offers the most hands-on room, with four hours of building and judged submissions. Microsoft Foundry Live is the cleaner demo format; Terna is the unusually specific grid-and-data-center alternative.",
      events: [
        card("Agents Need Solid Ground: An Archil Hackathon", "5:30 PM - 10:30 PM PT", "Private address, SoMa", "Archil and Casco", "Agent builders use Archil's file systems, sandboxes, and databases to ship a working project in four hours, with on-site infrastructure help and three judged prize categories.", "115 visible attendees, a concrete build deadline, a $50,000 prize pool, and awards for creativity, infrastructure use, and technical execution make this a serious evening sprint rather than a social.", "Event full; join the waitlist. The exact Casco office address is disclosed to registered attendees; project submission is at 10:00 PM and prizes follow at 10:30 PM.", "https://luma.com/t9hsthtk", "8.8/10", "Sign up now"),
        card("Foundry Live: Agentic AI Demo Night", "5:00 PM - 8:00 PM PT", "GitHub, 88 Colin P Kelly Jr St", "Microsoft Foundry Live", "Bay Area startups give live agentic-AI demos and technical deep dives, followed by discussion and networking.", "144 visible attendees, a first-party GitHub venue, and Microsoft's recurring demo-night format create a credible room despite the still-unpublished startup lineup.", "Registration is open with approval.", "https://luma.com/vy6q8htj", "8.4/10", "Sign up now"),
        card("Terna Innovation Zone Forum: Power for AI and Data Centers", "4:00 PM - 8:00 PM PT", "Mind the Bridge, 450 Townsend St", "Terna and Mind the Bridge", "AWS, Google, EDF, EPRI, GridCare, Emerald AI, and FLUIX AI speakers examine how grids can connect new AI and data-center loads and move GridTech from research into deployment.", "The program has named infrastructure operators and two concrete panels on the connection race and production GridTech, but doors and opening remarks begin an hour earlier than preferred.", "Registration is open with approval. Best content runs 4:45-6:10 PM, followed by a showcase and aperitivo.", "https://luma.com/svtaeqxu", "7.0/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, November 11",
      verdict: "A major voice-AI summit plus a deep software-engineering conference",
      note: "VapiCon is the stronger room by a wide margin. SF Ruby is technically excellent but daytime-only, expensive, and AI-light on its second day.",
      events: [
        card("VapiCon 2026 — Day 1", "Full day; happy hour closes the program", "Festival Pavilion, Fort Mason, 2 Marina Blvd", "Vapi", "The frontier voice-AI summit brings product keynotes, technical builder and leader tracks, breakouts, demos, workshops, and a closing happy hour.", "The organizers advertise 1,200-plus attendees, 50-plus speakers, and leaders from OpenAI, Vercel, LangChain, Deepgram, WorkOS, Coval, Twilio, Cartesia, Daily, and Arize.", "Tickets are available through the official site and Luma approval flow. No evening-only admission or exact daily hours are published.", "https://luma.com/vapi-9sdp", "8.8/10", "Sign up now"),
        card("San Francisco Ruby Conference — Day 2", "9:00 AM - 4:30 PM PT", "SFJAZZ, 201 Franklin St", "SF Ruby and Evil Martians", "A full day of technical talks covers Rails queues and concurrency, Kubernetes platforms, open-source search at scale, reactive views, background processing, and satellite command and control.", "Speakers come from 37signals, Shopify, Gusto, Persona, Typesense, and OpenC3, and the format alternates talks with focused engineering conversation groups.", "All public ticket types currently show zero availability. The program is daytime-only and explicitly AI-light, so it is visible as best available rather than an after-work recommendation.", "https://luma.com/sfrubyconf2026", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Thursday, November 12",
      verdict: "Two major AI summits lead a focused post-training meetup",
      note: "SGLang has the deepest frontier-infrastructure roster; VapiCon is the stronger voice-AI room. Anyscale, SkyRL, Mercor, and Harbor offer the most technical after-work option.",
      events: [
        card("SGLang Summit 2026 — Day 1", "10:00 AM - 4:00 PM PT", "Fort Mason Center, 2 Marina Blvd", "LMSYS and SGLang", "Main-stage sessions cover the SGLang roadmap, open models, recursive self-improvement, and AI hardware, alongside technical breakouts, hands-on labs, an expo, and an open demo stage.", "The 2,000-plus-person summit brings OpenAI's Lilian Weng, Thinking Machines CTO Soumith Chintala, Intel CEO Lip-Bu Tan, and senior leaders from NVIDIA, Google, AWS, Meta, and the open-model ecosystem.", "Full passes are sold out; paid expo passes remain available and include breakouts, hands-on labs, meals, and the expo floor. This is a daytime commitment.", "https://luma.com/sglang-summit", "9.1/10", "Sign up now"),
        card("VapiCon 2026 — Day 2", "Full day; happy hour closes the program", "Festival Pavilion, Fort Mason, 2 Marina Blvd", "Vapi", "Day two continues the frontier voice-AI summit with keynotes, technical and product breakouts, workshops, demos, a fireside chat, and a closing happy hour.", "The 1,200-plus-person summit concentrates voice-AI infrastructure and production leaders, including OpenAI's realtime team, Vercel, LangChain, Deepgram, WorkOS, Coval, Twilio, and Cartesia.", "Tickets include both days, meals, and happy hour. No evening-only admission or exact daily hours are published.", "https://vapi.ai/vapicon-2026", "8.8/10", "Sign up now"),
        card("RL & Data Meetup: SkyRL x Mercor x Harbor", "5:30 PM - 8:30 PM PT", "Private address, SoMa", "Anyscale, SkyRL, Mercor, and Harbor", "Practitioners share how Mercor runs reinforcement learning at scale with SkyRL, how Harbor standardizes agent-task evaluation, and how Berkeley's SkyRL work supports large-scale post-training.", "169 visible attendees, the Ray and Terminal-Bench ecosystems, and a three-talk program on evals, rollouts, sandboxes, training, and inference create a concentrated technical room.", "Event full; join the waitlist. The exact address is disclosed to registered attendees.", "https://luma.com/rl-data", "8.6/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, November 13",
      verdict: "A superb evening hack plus a frontier-infrastructure summit and an enterprise agent panel",
      note: "Liquid AI and Qualcomm lead with a real on-device build-and-test format. SGLang offers the deepest daytime room; BAND is the lighter after-work option for engineering leaders.",
      events: [
        card("On-Device AI Hackathon: Cleared for Takeoff", "5:00 PM - 9:00 PM PT", "Private address, San Francisco", "Liquid AI and Qualcomm", "Teams build with Liquid Foundation Models and Qualcomm hardware, then the hosts switch off Wi-Fi and judge whether every project actually runs on-device.", "215 visible attendees, a technical workshop, two-hour build block, real hardware constraints, and an end-of-night showcase make this the strongest after-work room of the day.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/0nsdnkoa", "9.1/10", "Sign up now"),
        card("SGLang Summit 2026 — Day 2", "9:30 AM - 5:00 PM PT", "Fort Mason Center, 2 Marina Blvd", "LMSYS and SGLang", "Day two focuses on AI agents, emerging research labs, AI applications, and physical intelligence, with technical breakouts, workshops, lightning talks, and an ending keynote.", "Aravind Srinivas, Igor Babuschkin, Eric Zelikman, Liam Fedus, and a broad frontier-infrastructure roster make this one of the window's strongest technical rooms.", "Full passes are sold out; paid expo passes remain available but omit main-stage talks. This is a daytime commitment.", "https://www.sglang.io/summit", "8.8/10", "Sign up now"),
        card("AI Software Factories in the Enterprise", "5:30 PM - 8:00 PM PT", "AWS Builder Loft, 525 Market St", "HackerSquad, BAND, and AWS Builder Loft", "A focused panel examines multi-agent coding architecture, shared context, evaluation, code review, governance, access control, and how enterprises should measure coordinated-agent workflows.", "The topic is unusually specific and the AWS venue is credible, but the panelists are still unannounced and the listing hides attendance.", "Registration is free with approval. The final speaker lineup and required AWS venue-registration link are still pending.", "https://luma.com/band-buildathon-happy-hour-nov13", "7.1/10", "Consider"),
      ],
    },
    {
      date: "Saturday, November 14",
      verdict: "A superb weekend for evals, post-training, and physical AI",
      note: "Vals leads on technical specificity and has an evening speaker and show-and-tell block. X Square offers rarer hands-on access to real robot kits, but its 10:00 AM start is outside the preferred weekend window.",
      events: [
        card("Vals AI Hackathon: Benchmaxxing — Day 1", "12:00 PM Saturday - 3:00 PM Sunday PT; dinner speakers at 7:00 PM", "Private address, the Mission", "Vals AI", "Teams either post-train a small model against three live Vals benchmarks or build a new eval for a task that frontier models still fail, using Vals' open-source Valkyrie harness.", "A 150-person cap, technical-experience preference, sponsor compute, live scoring, private test sets, prizes, and a 10:00 PM show-and-tell make this an unusually focused evals room.", "Registration is free with approval. This is a 24-hour commitment starting before the preferred weekend window; approved applicants only, with no door entry.", "https://www.vals.ai/hackathon", "6.4/10", "Not recommended - best available"),
        card("Physical AI Hackathon with X Square Robot — Day 1", "10:00 AM Saturday - 6:00 PM Sunday PT", "Private address, San Francisco", "X Square Robot and Osama F Rama", "Teams build industrial, home-service, commercial, or agricultural applications on a shared robot platform, with a dedicated kit for every team and direct support from X Square's robotics engineers.", "Eight real robot kits, $9,000 in cash prizes, a $200 stipend per qualified participant, and deployed embodied-AI hardware create strong builder signal.", "Registration is free with approval and closes November 10. This is a full-weekend commitment that starts well before the preferred 3:00 PM window.", "https://luma.com/21palhfw", "6.2/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 15",
      verdict: "Physical-AI awards lead a strong afternoon of hackathon demos",
      note: "X Square's awards and after-party cleanly fit the Sunday timing preference. Vals offers the deeper evals room, but its public finale starts at 2:00 PM and participation requires the full weekend.",
      events: [
        card("Physical AI Hackathon with X Square Robot — Awards", "4:00 PM - 6:00 PM PT; hacking ends 3:00 PM", "Private address, San Francisco", "X Square Robot and Osama F Rama", "Teams finish real-robot applications across industrial assembly, home services, commercial, and agricultural tasks before the awards and after-party.", "Eight dedicated robot kits, $9,000 in cash prizes, funded participation, and two days of hands-on embodied-AI work make the finale a high-signal robotics room.", "Registration is free with approval and closes November 10. Approval is for the full hackathon, not a standalone awards ticket.", "https://luma.com/21palhfw#schedule", "8.3/10", "Consider"),
        card("Vals AI Hackathon: Benchmaxxing — Demos and Judging", "2:00 PM - 3:00 PM PT; full event starts Saturday at noon", "Private address, the Mission", "Vals AI", "Teams submit post-trained models or new frontier-model evals, then demo results against live leaderboards and Vals' Valkyrie evaluation harness before prizes are announced.", "The 150-person technical room, private benchmarks, sponsor compute, and two tightly defined tracks support serious post-training and evals signal.", "Registration is free with approval for the full 24-hour hackathon. There is no standalone Sunday admission or door entry.", "https://luma.com/6suc4p8e", "6.4/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, November 16",
      verdict: "Live builder demos plus two exceptional infrastructure rooms",
      note: "WorkOS is the clean after-work choice with a no-slides, no-pitches format. Bright Data adds a concrete browser-agent program; Datadog's INFER/CON is the deepest room but requires a full weekday commitment.",
      events: [
        card("Demo Night @ WorkOS (November)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St", "WorkOS Events", "Engineers demo side projects, internal tools, open-source work, and startups live, with no slides and no company pitches allowed.", "305 visible attendees, a proven recurring format, and WorkOS's strong developer-infrastructure community make this a focused builder room rather than a generic showcase.", "Registration is open. Demo slots are still being assembled, so the final project lineup is not yet published.", "https://luma.com/demo-night-nov2026", "8.8/10", "Sign up now"),
        card("INFER/CON 2026", "8:00 AM - 6:00 PM PT", "Private address, San Francisco", "Datadog", "A one-day program examines inference performance, latency, throughput, KV cache and memory, distributed systems, evaluation, security, observability, and cost in production AI.", "The lineup includes Anthropic platform head Katelyn Lesse, Together AI chief scientist Tri Dao, Fireworks CTO Dima Dzhulgakov, Datadog CTO Alexis Lê-Quôc, and infrastructure leaders from Cerebras, NVIDIA, Google DeepMind, Prime Intellect, Modal, Baseten, and SGLang.", "Free with application and host approval. This is a full-day weekday commitment; the exact address is disclosed to approved attendees.", "https://infercon.ai/", "8.7/10", "Sign up now"),
        card("Agentic Web #02 — The Browser as an Agent Runtime", "5:30 PM - 8:30 PM PT", "Bright Data Web Data Loft, 625 2nd St", "Bright Data and HackerSquad", "Short live demos and a practitioner panel examine browser state, session handling, page understanding, task-success evaluation, failure recovery, and human handoffs for agents operating on the web.", "The topic is sharply technical, the program is concrete, and the hosts target agent developers and browser-infrastructure teams; the still-unannounced demo and panel lineup keeps it below the top two.", "Registration is free with approval.", "https://luma.com/agentic-web-browser-runtime-nov16-2026", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, November 17",
      verdict: "Three strong after-work rooms across AI infrastructure, agents, and data systems",
      note: "Alien's infrastructure night leads on named production talks and room signal. Convex and Daytona offer the most agent-focused demos; ClickHouse is the strongest traditional data-engineering alternative.",
      events: [
        card("AI Infrastructure Night", "5:00 PM - 8:00 PM PT", "Private address, San Francisco", "Alien, BytePort, ClickHouse, and Bond AI", "Four production-focused talks cover AI infrastructure, agentic systems, middle-mile shipping architecture, cryptographic customer-controlled data access, and ClickHouse engineering.", "155 visible attendees, named technical speakers, and a compact talk block from operators building real infrastructure create a high-signal room.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/1ihtxydc", "8.8/10", "Sign up now"),
        card("AI Builders Night with Convex and Daytona", "5:30 PM - 8:30 PM PT", "Convex, 444 De Haro St, Suite 218", "Convex and Daytona", "Builders demo agents and full applications, then Convex and Daytona show how agent code runs inside secure sandboxes through the new Daytona Convex Sandbox component.", "Two first-party developer-infrastructure hosts, live shipped work, and a concrete secure-agent-runtime integration make this more than a generic community night.", "Registration is free with approval. Speakers are still to be announced; talks begin around 6:15 PM.", "https://luma.com/convex-llhe", "8.4/10", "Sign up now"),
        card("San Francisco Data Engineering Meetup with ClickHouse", "5:00 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave, 4th Floor", "ClickHouse Events", "Three user presentations from Bruin, Briostack, and Orion Sleep examine how practitioners use ClickHouse and modern data systems, followed by extended technical Q&A.", "The recurring ClickHouse community, named working engineers, a ninety-minute presentation block, and a concrete data-infrastructure audience support a credible room even though attendance is hidden.", "Registration is open. Doors open at 5:00 PM and talks begin at 5:45 PM.", "https://luma.com/clickh-z0ty", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, November 18",
      verdict: "A superb on-device agent program plus a high-level software-factory summit",
      note: "Liquid AI and AI Socratic lead with five technical talks and a curated engineering room. PortCon is the deeper full-day leadership commitment, with production SDLC and agent-orchestration sessions.",
      events: [
        card("On-Device Agents with Liquid AI x AI Socratic", "6:00 PM - 9:30 PM PT", "Private address, San Francisco", "Liquid AI and AI Socratic", "Five technical talks trace local agents from efficient architectures through NPUs, quantization, deployed apps, and benchmarks for quality, latency, memory, and power.", "Liquid AI, ZETIC, MacPaw, Qualcomm, and Cactus Compute speakers plus an invitation-reviewed engineer and researcher audience create an unusually focused room.", "Registration is open with approval. The exact Liquid AI address is disclosed to approved attendees.", "https://luma.com/on-device-agents", "9.1/10", "Sign up now"),
        card("PortCon 2026 — AI Software Factory Summit", "Full-day conference", "SHACK15, Ferry Building", "Port", "Keynotes and breakouts examine production AI software factories, multi-agent orchestration, context engineering, governance, security, developer productivity, and engineering intelligence.", "A curated 200-person senior engineering room and speakers from GitHub, NVIDIA, Expedia, Google Cloud, 1Password, and production platform teams create strong practitioner and leadership signal.", "One-day conference passes are available for $150. This is a full weekday commitment rather than an after-work event.", "https://luma.com/Portcon.port.io", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Thursday, November 19",
      verdict: "One of the window's strongest nights for production agents and AI infrastructure",
      note: "The multi-track agent-stack program leads on breadth. Neo4j and AWS offer the most structured technical agenda; Anyscale is the focused waitlist option for physical-AI infrastructure.",
      events: [
        card("Agentic + AI Night: AI Agents Across the App Stack", "4:00 PM - 9:30 PM PT; keynote starts 5:30 PM", "Terra Gallery, 511 Harrison St", "Agentic + AI Observability", "A keynote and six breakout sessions cover agent-built full-stack apps, backend and data architecture, production failure modes, reviewability, testing, guardrails, and observability.", "Named participation from Databricks, Neon, Vercel, OpenAI, Nimble, and WorkOS plus a pitch-free, practitioner-focused format make this a top-tier agent-engineering room.", "Registration is open with approval. Arrive for the 5:30 PM keynote to stay within the weekday timing preference.", "https://luma.com/Agentic_AI_Night-11-19", "9.2/10", "Sign up now"),
        card("Graphs for Engineering, Part 2", "4:30 PM - 8:30 PM PT; talks start 5:30 PM", "AWS Builder Loft, 525 Market St", "Neo4j and AWS Builder Loft", "Four technical sessions cover context graphs, AWS AgentCore and Tavily, deterministic enforcement for agent actions, and ontologies for rules agents cannot forget, followed by two group discussions.", "205 visible attendees, a first-party AWS venue, named Neo4j, AWS, Arcade, and Reticular Semantics speakers, and a tightly structured program create a strong engineering room.", "Registration is open. A valid physical government ID is required for AWS check-in.", "https://luma.com/js68jbj1", "8.9/10", "Sign up now"),
        card("AI Infra for Physical AI: Mind Robotics x Anyscale", "6:00 PM - 8:00 PM PT", "Anyscale, 600 Harrison St", "Anyscale and Mind Robotics", "Technical talks examine the data, distributed training, simulation, inference, and reinforcement-learning infrastructure needed for foundation models in robotics and the physical world.", "101 visible attendees, the team behind Ray, and named speakers from Mind Robotics and Anyscale create a credible ML-and-robotics engineering room.", "Event full; join the waitlist.", "https://luma.com/anyscale-gbln", "8.4/10", "Sign up now"),
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
