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
  checkedAt: "November 20, 2026 at 2:04 AM PT",
  updatedAt: "November 20, 2026",
  windowLabel: "November 20, 2026 → December 4, 2026",
  featured: [
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
    {
      title: "GTM Engineering Demo Night: December Edition",
      date: "Fri, Dec 4",
      recommendation: "Sign up now",
      summary: "AI Tinkerers puts live code, workflows, traces, evals, and learning loops on screen in a slide-free, no-pitch builder room.",
      link: "https://sf.aitinkerers.org/p/gtm-engineering-demo-night-december-edition",
    },
  ],
  days: [
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
        card("Durable AI Meetup (November Edition)", "5:30 PM - 8:00 PM PT", "Private address, San Francisco", "Temporal Community, Bond AI, and RocketRide", "Temporal demos its agent harness and RocketRide presents production infrastructure, with discussion aimed at keeping agents reliable through traffic, failures, repeated mistakes, and unsafe tool access.", "204 visible attendees, a first-party Temporal organizer, and a sharply defined platform and AI-engineering audience create credible room signal.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/durable-ai-november", "8.3/10", "Sign up now"),
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
        card("Far from Home? There's a Place for You at Our Table", "5:00 PM - 10:00 PM PT", "Assembly SF, 270 14th St", "Assembly SF and Mission Dolores Manor", "A seated Thanksgiving dinner brings together researchers, makers, designers, tech professionals, artists, and founders in Assembly SF's emerging robotics and physical-technology community.", "Assembly SF's focus on physical AI, robotics, wearables, and maker culture provides some room signal, but the program itself is intentionally social and broad.", "Sold out. This is not a technical event and is listed only as the day's marginal best available option.", "https://luma.com/utkabko4", "6.1/10", "Not recommended - best available"),
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
        card("CapCut x ElevenLabs - Chroma Awards - San Francisco Creator Meetup", "6:00 PM - 9:00 PM PT; programming starts 7:00 PM", "Private address, San Francisco", "Chroma Awards, CapCut, and ElevenLabs", "A one-hour program pairs a Chroma Awards overview with a CapCut generative-media demo, a screening, and Q&A for AI filmmakers, animators, musicians, game creators, and creative technologists.", "72 visible attendees, two first-party generative-media companies, and a defined demo-and-screening block provide credible room signal.", "Event full; join the waitlist. The exact venue is announced to accepted guests closer to the date, and the event is 21+ for alcohol service.", "https://luma.com/ajgzw3uj", "7.4/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, December 1",
      verdict: "A focused small-model training and evaluation deep dive leads the night",
      note: "Phonely and AWS offer the clear pick: a concrete walk-through from messy production phone data to fine-tuning, frontier-model comparison, failure analysis, and the next training iteration.",
      events: [
        card("How to Train LLMs to Beat Frontier Models", "6:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St", "Phonely AI and AWS Builder Loft", "Phonely engineers show how they scrub real phone conversations, fine-tune a small model on AWS GPUs, and build evals that compare the base model, the fine-tuned model, and a stronger frontier model.", "87 visible attendees, named Phonely engineering and research speakers, an intermediate technical audience, and the first-party AWS venue create a strong practitioner room.", "Registration is open. Both the Luma RSVP and separate AWS Builder Center registration are required, along with a physical government-issued photo ID.", "https://luma.com/skwlv4im", "8.4/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, December 2",
      verdict: "Applied robotics and open-source agent workflows make this a strong tech night",
      note: "SF Hardware Meetup leads with deployed recycling robotics and industrial monitoring. Omarchy at Cloudflare is the hands-on open-source alternative for Linux workflows, plugins, hardware, and agents.",
      events: [
        card("Hardware Fireside Chat @ Flux", "6:30 PM - 9:30 PM PT; talks start 7:00 PM", "Private address, San Francisco", "SF Hardware Meetup and Flux", "Three operator sessions cover Glacier's AI-powered recycling robots and vision systems at Recology, industrial equipment monitoring from EquipSight, and the infrastructure behind improving city water, waste, and energy systems.", "200 visible attendees, deployed physical-AI systems, named operators from Glacier, Recology, and EquipSight, and the 10,500-member SF Hardware Meetup create a high-signal room.", "Event full; join the waitlist. The exact address is disclosed to accepted guests, and RSVPs may be shared with recurring sponsors under the host's stated policy.", "https://luma.com/lx81wh0i", "8.4/10", "Sign up now"),
        card("Omarchy SF", "5:00 PM - 8:00 PM PT", "Cloudflare, 101 Townsend St", "Steve Derico and the Omarchy SF community", "A tech talk and community demos cover Omarchy, Linux, open source, themes, plugins, workflows, agents, hardware, and hacks, with attendees encouraged to bring laptops and show working builds.", "The Cloudflare venue, demo-first format, and concrete open-source agent and developer-workflow focus provide credible room quality despite hidden attendance.", "Registration is open and free. This is a community-run event rather than an official Omarchy or Omacom Foundation program.", "https://luma.com/ejid15jm", "7.6/10", "Consider"),
      ],
    },
    {
      date: "Thursday, December 3",
      verdict: "A screened, demo-first agent-infrastructure room is the clear pick",
      note: "AI Tinkerers brings production-agent builders together for live code, short technical demos, and open hacking across runtimes, state, evals, permissions, and reliability.",
      events: [
        card("AI Tinkerers San Francisco: Agent Infrastructure Night", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "AI Tinkerers San Francisco and Omnara", "Six to eight short live demos and an open-hacking block cover sandboxes, runtimes, orchestration, memory, MCP integrations, evals, observability, auth, permissions, and production SLOs.", "A reviewed 40-person room, 22 current applications, no-sales-pitch rule, code-first demo format, and AI Tinkerers' 8,700-person SF technical community create exceptional room quality.", "Registration is open with organizer approval. The exact address is shared with accepted attendees; applicants should describe what they are building and one infrastructure problem they face.", "https://sf.aitinkerers.org/p/ai-tinkerers-san-francisco-agent-infrastructure-night", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, December 4",
      verdict: "A technical AI Tinkerers room leads two after-work demo options",
      note: "The GTM Engineering track is explicitly implementation-first and pitch-free. AWS Builder Loft offers a broader product-demo alternative with a structured 75-minute showcase block.",
      events: [
        card("GTM Engineering Demo Night: December Edition", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "AI Tinkerers San Francisco with Attio", "Builders demo AI systems that learn from outcomes across research, onboarding, growth, and revenue workflows, opening code, prompts, data models, traces, evals, approvals, and rollback paths.", "39 current applications, organizer screening for hands-on authorship, live five-minute slide-free demos, and an explicit no-vendor-pitches rule make this a technical room despite the GTM domain.", "Registration is open with organizer approval. The exact address is shared with accepted attendees, and applicants should describe what they have built or tested.", "https://sf.aitinkerers.org/p/gtm-engineering-demo-night-december-edition", "8.4/10", "Sign up now"),
        card("AI Demo Night", "5:00 PM - 8:30 PM PT; demos start 5:45 PM", "AWS Builder Loft, 525 Market St", "Devnovate and AWS Builder Loft", "A 75-minute live showcase presents new AI products and builder projects, followed by community discussions and open demos.", "The first-party AWS venue, concrete demo agenda, approval gate, and new-listing exception provide credible room signal despite hidden attendance and a broader founder-and-investor audience.", "Registration is open with approval. Attendance is hidden on this new listing; the event begins at the earliest acceptable weekday time.", "https://luma.com/dwl3gurk", "7.1/10", "Consider"),
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
