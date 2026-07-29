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
  checkedAt: "July 28, 2026",
  updatedAt: "July 28, 2026",
  windowLabel: "July 29, 2026 → August 12, 2026",
  featured: [
    {
      title: "WorkOS Agent Night",
      date: "Wed, Aug 12",
      recommendation: "Sign up now",
      summary: "The strongest room in the window: direct WorkOS hosting, explicit agent focus, and exceptional density across AI builders, technical operators, and developer-tool teams.",
      link: "https://luma.com/agent-night",
    },
    {
      title: "Demo Night @ WorkOS (August)",
      date: "Wed, Aug 5",
      recommendation: "Sign up now",
      summary: "A repeat WorkOS demo room with the right mix of devtools, enterprise AI, product leaders, and builders showing real work.",
      link: "https://luma.com/demo-night-aug2026",
    },
    {
      title: "Built by Agents: How Leading YC Companies are Building AI in Production",
      date: "Tue, Aug 4",
      recommendation: "Sign up now",
      summary: "A production-first agent conversation led by E2B, with unusually direct relevance to sandboxes, infrastructure, and shipping reliable systems.",
      link: "https://luma.com/e2b-2281",
    },
  ],
  days: [
    {
      date: "Wednesday, July 29",
      verdict: "Three exceptional options",
      note: "Research depth, production-agent operations, and strong infrastructure communities make this a high-signal night.",
      events: [
        card("Bay Area Frontier Research Club #15 | Embodied AI", "5:30 PM - 8:30 PM PT", "Mission Robotics, San Francisco", "The Frontier Syndicate", "A dinner and paper discussion on embodied AI is exactly the thoughtful research-adjacent salon format you prefer.", "The approval gate, Mission Robotics venue, and paper-club structure imply a small, technically deep crowd.", "Registration is open with approval. It may be selective and research-heavy; personal registration status is unknown.", "https://luma.com/39h51wb0", "9.2/10", "Sign up now"),
        card("Telemetry-aware AI Agents for Slack, Linear, and GitHub", "5:30 PM - 8:00 PM PT", "Market Center, 575 Market St, San Francisco", "groundcover with incident.io", "Private-cloud telemetry and agents acting across real developer tools is a concrete enterprise AI operations problem.", "208 visible attendees and recognized infrastructure hosts suggest platform engineers, DevOps leaders, and applied-agent teams.", "Registration is open. It skews observability and platform engineering more than product strategy; personal status is unknown.", "https://luma.com/zkdv1uoq", "9.0/10", "Sign up now"),
        card("Agent (After) Hour: Building Production Agents with Mastra + MongoDB", "6:00 PM - 8:30 PM PT", "1525 Union St, San Francisco", "Mastra and MongoDB", "A production-agent conversation spanning application frameworks and data infrastructure should surface real deployment lessons.", "252 visible attendees and the Mastra–MongoDB pairing indicate strong applied-engineering and platform density.", "Waitlist-only. Join if production agent architecture is a priority; the room will be larger and louder than a salon.", "https://luma.com/mastra-vulp", "8.9/10", "Consider"),
      ],
    },
    {
      date: "Thursday, July 30",
      verdict: "Three exceptional options",
      note: "WorkOS, Postman, and Codex produce one of the strongest agent and developer-tool nights in the window.",
      events: [
        card("Builder Night", "5:30 PM - 8:30 PM PT", "WorkOS, 660 Market St, San Francisco", "WorkOS and Pieces", "The best venue and host pairing in your profile, with a builder format that should concentrate devtools and enterprise-AI operators.", "214 visible attendees, approval-based entry, and direct WorkOS hosting create exceptional company and role density.", "Registration is open with approval. Demand should be high; personal registration status is unknown.", "https://luma.com/715ul99e", "9.7/10", "Sign up now"),
        card("Agents & APIs SF Developer Meetup", "5:30 PM - 7:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave, San Francisco", "Postman Developer Events", "Agents and APIs at a curated venue should bring developer-platform engineers, technical PMs, and integration-focused builders.", "410 visible attendees and Postman's developer community create unusually strong engineering and product density.", "Registration is open. The crowd will be large, so target speakers and demo teams; personal status is unknown.", "https://luma.com/july-SF-Agents-APIs-meetup", "9.2/10", "Sign up now"),
        card("OpenAI Codex Community Meetup - San Francisco #8", "5:00 PM - 8:00 PM PT", "San Francisco venue shared after approval", "TatianaSF and Codex community organizers", "The explicit Codex focus gives this direct relevance to OpenAI tooling and the builders using it in real workflows.", "598 visible attendees and approval-based entry should produce a dense practical coding-agent crowd.", "Registration is open with approval. It is community-run rather than official OpenAI programming; personal status is unknown.", "https://luma.com/h5x0pzw9", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Friday, July 31",
      verdict: "Two credible options",
      note: "Black Forest Labs and Nous Research are the clear anchor; Treena is a smaller practical devtools alternative.",
      events: [
        card("Black Forest Labs x Nous Research", "6:00 PM - 9:00 PM PT", "San Francisco venue shared after approval", "Black Forest Labs and Nous Research", "Two frontier-model organizations in one room is a rare research and infrastructure signal for a Friday night.", "Attendance is hidden, but the hosts and approval gate point to research engineers, model builders, and serious technical operators.", "Registration is open with approval. Event details are intentionally sparse and access may be selective; personal status is unknown.", "https://luma.com/071qvqom", "9.3/10", "Sign up now"),
        card("Treena Launch Party: Your Dev Machine, Now on Your Phone", "6:30 PM - 9:30 PM PT", "San Francisco venue shared after approval", "Treena Labs", "A mobile interface to a full development environment is a concrete developer-tool launch with useful agentic workflow adjacency.", "Attendance is hidden, but the product focus and approval gate should attract engineers and devtools builders rather than generic networkers.", "Registration is open with approval. The new organizer makes crowd quality less predictable; personal status is unknown.", "https://luma.com/6uxhrmtl", "8.0/10", "Consider"),
      ],
    },
    {
      date: "Saturday, August 1",
      verdict: "Not recommended - best available",
      note: "A hands-on creative workshop is the only in-scope option that survives the weekend filters, but it is not a priority AI room.",
      events: [
        card("Workshop 2: Make It Real", "3:30 PM - 6:30 PM PT", "220 Montgomery St, San Francisco", "Build Beautifully", "The workshop format offers hands-on making and better conversation than a generic founder social.", "24 visible attendees create a small working group, though the organizer and AI signal are modest.", "Registration is open. Treat this as a low-stakes creative fallback, not a destination event.", "https://luma.com/iddxtbow", "6.6/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, August 2",
      verdict: "Not recommended",
      note: "No qualifying in-person SF AI or technical-builder event survived the primary calendars and fallback pass.",
      events: [],
    },
    {
      date: "Monday, August 3",
      verdict: "Three credible options",
      note: "A Gemini hack is the practical anchor, with thoughtful design and systems communities as smaller alternatives.",
      events: [
        card("Moonlight with Gemini - 3 Hour Hack", "6:00 PM - 9:00 PM PT", "660 Market St, San Francisco", "Build Club", "A short, hands-on Gemini hack creates repeated contact with people actively building rather than passively watching panels.", "The 660 Market venue, approval gate, and build format suggest a credible applied-AI crowd despite hidden attendance.", "Registration is open with approval. The Build Club audience may skew broader and younger than a WorkOS-hosted room.", "https://luma.com/buildclub-ua0n", "8.7/10", "Sign up now"),
        card("Between Reality and the Impossible | Speculative Everything Book Club", "7:00 PM - 8:00 PM PT", "TIAT, 151 Powell St, San Francisco", "TIAT", "A focused discussion on speculative design offers a thoughtful product and systems counterpoint to standard AI networking.", "Attendance is hidden, but the art-and-technology venue and discussion format favor substantive conversation.", "Registration is open. This is design-adjacent rather than directly frontier AI; personal status is unknown.", "https://luma.com/se8", "7.4/10", "Consider"),
        card("Bay Area Nix Meetup at Exa", "8:00 PM - 11:00 PM PT", "San Francisco venue shared by host", "Bay Area Nix/NixOS User Group", "Nix and reproducible systems should attract technically deep infrastructure engineers and developer-tool builders.", "18 visible attendees indicate a small specialist room with good odds of real systems conversations.", "Registration is open. It starts late and is not explicitly AI-focused, so prioritize the Gemini hack first.", "https://luma.com/orqobn0d", "7.3/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 4",
      verdict: "Three exceptional options",
      note: "Production agents, Baseten demos, and model routing create an unusually strong applied-infrastructure night.",
      events: [
        card("Built by Agents: How Leading YC Companies are Building AI in Production", "6:00 PM - 8:00 PM PT", "972 Mission St, San Francisco", "E2B", "Production architecture from companies shipping real agents is directly aligned with your infrastructure and applied-AI interests.", "E2B, an approval gate, and an operator-focused agenda should draw agent engineers, FDEs, and technical founders with real systems.", "Registration is open with approval. Some YC founder energy is likely, but the production topic is strong enough to compensate.", "https://luma.com/e2b-2281", "9.3/10", "Sign up now"),
        card("Built on Baseten | AI Demo Night", "6:00 PM - 8:00 PM PT", "San Francisco venue shared after approval", "Baseten", "A Baseten demo room should surface production inference, deployment, and applied-model teams showing concrete work.", "Attendance is hidden, but Baseten's repeat community and approval gate are reliable signals for strong engineering density.", "Registration is open with approval. Expect a larger demo format rather than an intimate salon; personal status is unknown.", "https://luma.com/b4y2veki", "9.1/10", "Sign up now"),
        card("The Model Question: Routing Models for Production Agents", "6:30 PM - 9:00 PM PT", "Notion, 685 Market St, San Francisco", "GMI Cloud and Notion for Startups", "Model routing for production agents is a concrete systems problem spanning cost, reliability, and product behavior.", "The Notion venue, infrastructure host, and approval gate should attract applied AI engineers and technical product leaders.", "Registration is open with approval. The startup-program framing may add founder energy; personal status is unknown.", "https://luma.com/gmicloud-384l", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, August 5",
      verdict: "Three exceptional options",
      note: "WorkOS anchors the night, with an unusually relevant FDE table and a focused voice-AI builder room.",
      events: [
        card("Demo Night @ WorkOS (August)", "5:30 PM - 8:00 PM PT", "WorkOS, 660 Market St, San Francisco", "WorkOS Events and Michael Grinich", "This is the highest-priority venue and host combination in your profile, with demos likely to attract devtools and enterprise-AI operators.", "243 visible attendees at WorkOS provide exceptional company density and strong odds of meeting technical PMs, FDEs, and solutions engineers.", "Registration is open. Demand may rise quickly; personal registration status is unknown.", "https://luma.com/demo-night-aug2026", "9.7/10", "Sign up now"),
        card("The FDE Table, Hosted by Plain", "5:30 PM - 8:30 PM PT", "San Francisco venue shared after approval", "Plain", "A room explicitly for forward-deployed engineers is almost perfectly aligned with the role and company conversations you want.", "Attendance is hidden, but Plain, the table format, and approval-based entry imply a compact group of enterprise-AI operators.", "Registration is open with approval. Access may be selective and the exact agenda is private; personal status is unknown.", "https://luma.com/n5pon3ke", "9.1/10", "Sign up now"),
        card("Cartesia: Building the Future of Voice AI", "6:30 PM - 8:30 PM PT", "San Francisco venue shared after approval", "Cartesia AI", "Cartesia's voice-model work should attract researchers, applied engineers, and product teams building real-time AI systems.", "Attendance is hidden, but the direct company host and approval gate are strong technical-quality signals.", "Registration is open with approval. This is voice-specific rather than broad agent infrastructure; personal status is unknown.", "https://luma.com/1vz3zp2t", "8.9/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, August 6",
      verdict: "Three strong options",
      note: "Agent infrastructure and hands-on enterprise building make this another practical, technically dense night.",
      events: [
        card("Agent Infra Night", "6:00 PM - 9:00 PM PT", "San Francisco venue shared after approval", "Agent Builders YC with Composio and HeyGen", "Agent infrastructure is directly on target, and the host mix spans tools, integrations, and production applications.", "36 visible attendees plus an approval gate suggest a focused room where technical conversations should be easy to start.", "Registration is open with approval. Some founder energy is likely, but the small format and topic keep it credible.", "https://luma.com/6uaouoxj", "9.0/10", "Sign up now"),
        card("ODSC AI x Snowflake: Build an AI Agent in Under 60 Minutes", "6:00 PM - 8:00 PM PT", "Market Center, 575 Market St, San Francisco", "ODSC AI and Snowflake", "A hands-on Snowflake agent build maps directly to enterprise deployment, data infrastructure, and technical operator work.", "The named Snowflake architecture lead, practitioner community, and workshop format point to a strong applied-AI room.", "Registration is open. Bring a laptop; this favors real building over unstructured mingling.", "https://luma.com/odscai-imyl", "8.9/10", "Sign up now"),
        card("Software Factory #1 — Multi-Agent Orchestration Round Table", "6:00 PM - 9:00 PM PT", "San Francisco venue shared by host", "Vibe House", "A round table on multi-agent orchestration should produce sharper architecture discussion than a standard panel.", "17 visible attendees make this a small technical room with good conversational density.", "Waitlist-only. The organizer signal is less proven, but the format and topic are strong.", "https://luma.com/software-factory", "8.7/10", "Consider"),
      ],
    },
    {
      date: "Friday, August 7",
      verdict: "Two best-available options",
      note: "The primary calendars are thinner tonight; Fifty Years is the stronger room and Agora is a marginal salon fallback.",
      events: [
        card("50Y Summer Party: Reflections", "5:00 PM - 9:30 PM PT", "San Francisco venue shared after approval", "Fifty Years", "Fifty Years' deep-tech portfolio and community should produce more scientific and technical density than a typical summer party.", "297 visible attendees and approval-based entry provide scale and a credible deep-tech company signal.", "Registration is open with approval. The party format will be noisy and more investor-heavy than your ideal room.", "https://luma.com/brxv4c7z", "8.2/10", "Consider"),
        card("Agora Series: Interdisciplinary Salons for the New Renaissance #2", "6:00 PM - 9:30 PM PT", "San Francisco venue shared by host", "Apollo Commons", "An interdisciplinary salon is directionally aligned with thoughtful, high-trust conversation across technology and culture.", "Only 5 visible attendees are showing, but the salon format offers more substance than the other Friday fallbacks.", "Registration is open. The attendance and AI signal are below your normal floor, so treat this as optional.", "https://luma.com/1x8zdbv6", "6.7/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Saturday, August 8",
      verdict: "Two marginal options",
      note: "Neither clears the normal weekday bar, but both are legitimate in-person technical-community fallbacks.",
      events: [
        card("Workshop 3: Automate Your Life", "3:30 PM - 6:30 PM PT", "220 Montgomery St, San Francisco", "Build Beautifully", "A hands-on automation workshop is at least adjacent to practical agent workflows and offers structured conversation.", "15 visible attendees suggest a small working group, though the technical depth is uncertain.", "Registration is open. This is a marginal best-available option rather than a priority event.", "https://luma.com/e1oyglqq", "6.7/10", "Not recommended - best available"),
        card("Japanese in Tech Picnic @ SF", "3:30 PM - 6:30 PM PT", "San Francisco venue shared after approval", "Y&Y Journey", "The focused tech-community picnic offers a social but still industry-relevant alternative on a weak Saturday.", "9 visible attendees and approval-based entry point to a very small group with uncertain company density.", "Registration is open with approval. Choose this only if the community angle is personally useful.", "https://luma.com/o9g1lrnm", "6.5/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, August 9",
      verdict: "One exceptional weekend option",
      note: "A daylong VoiceOS hack with OpenAI credits is substantive enough to override the usual evening preference.",
      events: [
        card("Hack with VoiceOS | $5k in OpenAI Credits", "10:00 AM - 8:00 PM PT", "Frontier Tower, 995 Market St, San Francisco", "VoiceOS community", "A real build day around voice agents, with OpenAI credits as a concrete incentive, should attract hands-on agent developers.", "Attendance is hidden, but the Frontier Tower venue, approval gate, and technical hack format are strong builder signals.", "Registration is open with approval. It is a long daytime commitment, but the substance justifies the weekend exception.", "https://luma.com/pxdhdo4a", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, August 10",
      verdict: "Two strong options",
      note: "AWS anchors a physical-AI infrastructure room, with a smaller researcher poker night as the social alternative.",
      events: [
        card("Frontier Signals #01: Infrastructure Behind Physical AI", "5:00 PM - 8:30 PM PT", "AWS Builder Loft, 525 Market St, San Francisco", "AWS Builder Loft, Bayforge, and .Agent Community", "Physical-AI infrastructure at AWS Builder Loft should bring systems engineers, robotics builders, and research-adjacent operators.", "216 visible attendees and a strong multi-host technical lineup create excellent company and engineering density.", "Registration is open. The room will be large, so target speakers and demo teams; personal status is unknown.", "https://luma.com/ckpqzfae", "9.3/10", "Sign up now"),
        card("Abstract x Grace Gong AI Researcher Poker Night", "6:30 PM - 10:00 PM PT", "San Francisco venue shared after approval", "Abstract and Grace Gong", "A researcher-specific poker night offers a conversational alternative to a large technical event.", "Attendance is hidden, but the approval gate and explicit researcher targeting suggest a selective peer room.", "Registration is open with approval. The social format makes technical depth less predictable; personal status is unknown.", "https://luma.com/5ljru4z2", "8.1/10", "Consider"),
      ],
    },
    {
      date: "Tuesday, August 11",
      verdict: "Three credible options",
      note: "ClickHouse provides the deepest engineering room, with robotics and product-leadership alternatives.",
      events: [
        card("San Francisco Data Engineering Meetup with ClickHouse", "5:30 PM - 8:30 PM PT", "CANOPY Jackson Square, 595 Pacific Ave, San Francisco", "ClickHouse Events", "A large ClickHouse engineering meetup should bring the data-platform and infrastructure talent adjacent to serious AI systems.", "382 visible attendees and a recognized infrastructure community provide exceptional technical density.", "Registration is open. It is data-engineering first rather than explicitly agent-focused; personal status is unknown.", "https://luma.com/clickh-z578", "9.1/10", "Sign up now"),
        card("Robots & Sake", "5:00 PM - 9:00 PM PT", "San Francisco venue shared after approval", "Matt Laker, Shuji Otake, and robotics community hosts", "A focused robotics social should create useful crossover between embodied AI, hardware, and applied engineering.", "43 visible attendees and approval-based entry suggest a manageable, technically relevant room.", "Registration is open with approval. It is more social than the ClickHouse meetup; personal status is unknown.", "https://luma.com/5spumz2h", "8.5/10", "Consider"),
        card("Move Fast, Mean It: An Evening for Product Leaders", "5:00 PM - 8:00 PM PT", "Mind the Product, 140 2nd St, San Francisco", "Mind the Product", "A product-leadership room offers direct PM and operator networking in a more focused format than generic startup events.", "12 visible attendees and an approval gate indicate a small, conversational group.", "Registration is open with approval. The AI signal is indirect, so prioritize ClickHouse for technical depth.", "https://luma.com/fi1qhcyq", "8.0/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, August 12",
      verdict: "Three exceptional options",
      note: "WorkOS Agent Night is the clear best bet, backed by strong software-factory and AI-engineering rooms.",
      events: [
        card("WorkOS Agent Night", "5:00 PM - 10:00 PM PT", "1300 Van Ness Ave, San Francisco", "WorkOS and Michael Grinich", "Direct WorkOS hosting and an explicit agent focus make this the strongest company, topic, and role match in the full window.", "1,192 visible attendees and approval-based entry create extraordinary density across AI builders, technical operators, and developer-tool companies.", "Registration is open with approval. The scale will be intense, so plan targeted conversations; personal status is unknown.", "https://luma.com/agent-night", "9.9/10", "Sign up now"),
        card("Software Factories Show & Tell", "5:30 PM - 7:30 PM PT", "Heavybit, 523 Octavia St, San Francisco", "Heavybit Events", "A show-and-tell on software factories should attract people working on coding agents, developer workflows, and production tooling.", "Attendance is hidden, but Heavybit, named technical hosts, and approval-based entry are excellent devtools-quality signals.", "Registration is open with approval. Capacity may be limited; personal status is unknown.", "https://luma.com/software-factories", "9.2/10", "Sign up now"),
        card("AI Engineers Tech Talk: August", "6:00 PM - 8:00 PM PT", "San Francisco venue shared after approval", "AI Engineers - SF", "A focused engineering talk is likely to surface applied-model, infrastructure, and production-AI practitioners.", "Attendance is hidden, but the repeat AI Engineers community and approval gate suggest credible technical density.", "Registration is open with approval. The agenda is not yet public, so topic fit may shift; personal status is unknown.", "https://luma.com/kzwpdbs5", "8.9/10", "Sign up now"),
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
