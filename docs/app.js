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
  checkedAt: "October 19, 2026",
  updatedAt: "October 19, 2026",
  windowLabel: "October 19, 2026 → November 2, 2026",
  featured: [
    {
      title: "Open Weight Debate Night",
      date: "Mon, Oct 19",
      recommendation: "Sign up now",
      summary: "GitHub hosts a structured debate on frontier open weights with leaders from Berkeley, Stanford, and Black Forest Labs.",
      link: "https://luma.com/592fcwx2",
    },
    {
      title: "Training Agents IRL",
      date: "Thu, Oct 22",
      recommendation: "Sign up now",
      summary: "GitHub and Hugging Face bring six technical talks and a panel on multi-step reinforcement learning for agents.",
      link: "https://luma.com/awautg3p",
    },
    {
      title: "Night Hack by Founders, Inc.",
      date: "Fri, Oct 30",
      recommendation: "Sign up now",
      summary: "A five-hour build, exhibition, and judging night backed by Anthropic, Firecrawl, Bolt, Convex, and TinyFish.",
      link: "https://luma.com/nighthack",
    },
  ],
  days: [
    {
      date: "Monday, October 19",
      verdict: "Two unusually strong open-source infrastructure rooms",
      note: "The structured open-weight debate leads; PlanetScale's database meetup is a deep technical alternative with a similarly substantial room.",
      events: [
        card("Open Weight Debate Night", "5:30 PM - 8:30 PM PT", "GitHub, private SF address", "Open Source AI Week and GitHub", "Ion Stoica, Percy Liang, Ben Brooks, and other leaders debate frontier-weight risk, investment returns, and whether closed models will retain a capability edge through 2030.", "507 visible attendees, three structured debates, GitHub hosting, and named Berkeley, Stanford, and Black Forest Labs leaders make this the strongest policy-and-engineering room of the night.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/592fcwx2", "9.5/10", "Sign up now"),
        card("The SF Database Meetup", "5:30 PM - 9:00 PM PT", "PlanetScale, 108 Natoma St", "PlanetScale", "Talks from PlanetScale, Archil, and Modal go deep on database architecture, infrastructure, and production systems.", "386 visible attendees and three technical infrastructure talks at a respected database company create a high-density engineering room.", "Registration is open with approval.", "https://luma.com/ip56zybg", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, October 20",
      verdict: "Two excellent agent-builder rooms, both capacity-constrained",
      note: "OpenClaw's open-source agent demos lead, while the Agentic Stack panel is a strong production-platform alternative with an active waitlist.",
      events: [
        card("OpenClaw & Friends Meetup", "6:00 PM - 9:00 PM PT", "Private address, San Francisco", "OpenClaw Foundation", "Open-source agent builders present short talks and project demos focused on AI systems people can own, understand, control, and extend.", "354 visible attendees plus participation from NVIDIA and Microsoft make this a substantial open-agent practitioner room.", "Registration is closed. Keep the page bookmarked in case capacity reopens.", "https://luma.com/oah05xax", "9.2/10", "Sign up now"),
        card("Founders Panel: The Agentic Stack", "6:30 PM - 9:00 PM PT", "Private address, San Francisco", "Laravel, PlanetScale, and WorkOS", "The CEOs behind Laravel, PlanetScale, and WorkOS discuss the application, data, and identity layers required to ship agentic software.", "A waitlisted approval-gated room with three experienced infrastructure founders creates a focused platform-engineering conversation rather than a generic founder panel.", "Event full; join the waitlist. The exact address is disclosed to approved attendees.", "https://luma.com/laravel-43ty", "8.7/10", "Sign up now"),
      ],
    },
    {
      date: "Wednesday, October 21",
      verdict: "A deep agent-security demo night plus two strong builder alternatives",
      note: "Vanta's seven-demo runtime-security room leads after reopening approval requests; Durable AI and the open-source devtools roundtables are strong alternatives.",
      events: [
        card("AARM Intercept: Agentic Runtime Security Demos", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "Vanta, Keycard, and Insecure Agents", "Security leaders examine intent-based authorization for autonomous agents before seven live demos from Vanta, Keycard, Formal, Ultra, Runlayer, MintMCP, and Browserbase.", "279 visible attendees, a named identity-and-security panel, and seven concrete demos make this an unusually strong agent-security room.", "Registration has reopened with approval; the exact address is disclosed to approved attendees.", "https://luma.com/vanta-zg62", "9.4/10", "Sign up now"),
        card("Durable AI — October Edition", "5:30 PM - 8:00 PM PT", "500 Sansome St", "Temporal, Kernel, and Oodle", "Practitioners examine durable execution, cloud browsers, and production infrastructure for long-running AI agents.", "183 visible attendees, named technical hosts, and a compact talks-and-demos format create a credible production-agent room.", "Registration is open with approval.", "https://luma.com/durable-ai-october", "8.7/10", "Sign up now"),
        card("Lessons from Open Source DevTools Founders", "6:00 PM - 9:00 PM PT", "Hogpatch, 2360 3rd St", "PostHog and 1984 VC", "Small roundtables cover open source as developer GTM, securing open AI systems, and finding meaningful product-market-fit signals beyond stars and downloads.", "179 visible attendees and named builders from PostHog, Cline, Unikraft, and Strix support a strong discussion-driven room.", "Registration is open with approval; space is limited.", "https://luma.com/bfgu761e", "8.5/10", "Sign up now"),
      ],
    },
    {
      date: "Thursday, October 22",
      verdict: "Three high-signal rooms across agent training, infrastructure, and craft",
      note: "GitHub and Hugging Face's reinforcement-learning program leads; Open Infra Night and the Linear–Granola product craft session are worthy alternatives.",
      events: [
        card("Training Agents IRL", "6:00 PM - 9:00 PM PT", "GitHub, 88 Colin P Kelly Jr St", "GitHub and Hugging Face", "Six short talks and a panel examine multi-step reinforcement learning for agents, including reward design, rollouts, benchmarks, and the gap between training gains and real-world behavior.", "Named speakers from Hugging Face, Microsoft, Mercor, Reflection, RadixArk, and Benchflow plus GitHub hosting create a research-heavy practitioner room.", "Registration is open with approval.", "https://luma.com/awautg3p", "9.4/10", "Sign up now"),
        card("Open Infra Night for Agent Builders", "5:00 PM - 8:30 PM PT", "Private address, San Francisco", "Infron, Strukto AI, and XTrace", "Lightning talks and a panel cover virtual terminals and filesystems for agents, sandboxed runtimes, agent tools, and moving PyTorch models into TensorRT inference.", "173 visible attendees, a named NVIDIA TensorRT technical lead, and open-source Mirage maintainers create a tightly scoped infrastructure room.", "Registration is open with approval; the exact address is disclosed after approval.", "https://luma.com/jsu2t3ad", "8.8/10", "Sign up now"),
        card("Craft at Speed: Building with AI", "6:00 PM - 8:30 PM PT", "Private address, San Francisco", "Granola, Linear, and Figma", "Teams from Granola, Linear, and Figma share how they preserve product judgment and quality while AI accelerates prototyping and implementation.", "Attendance is hidden, but the named product teams, demos, and Q&A support a strong product-engineering room.", "Event full; join the waitlist. The exact address is disclosed to approved attendees.", "https://luma.com/granola-sf-linear", "8.1/10", "Consider"),
      ],
    },
    {
      date: "Friday, October 23",
      verdict: "One concentrated open-source AI awards and demos room",
      note: "The Open Source AI Awards are the clear Friday pick; the other visible options skew toward growth, generic launches, or daytime-only hackathons.",
      events: [
        card("Open Source AI Awards 2026", "5:00 PM - 9:00 PM PT", "Private address, San Francisco", "Open Source AI Week", "Awards and short talks recognize work across open models, training, agents, and developer tools, with speakers and projects from Unsloth, Claude Mem, Arcee, and Hugging Face communities.", "315 visible attendees, an approval gate, and a room centered on active open-source builders make this a strong close to Open Source AI Week.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/7ebvz0oq", "8.8/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, October 24",
      verdict: "A marginal AI-culture option after a thin technical day",
      note: "The substantive build events all start in the morning, outside the weekend timing rule. This staged AI-ethics jury experience is the only evening option that remains in scope.",
      events: [
        card("The Jury Experience: Death by AI", "6:00 PM PT", "Brava Theater Center, 2781 24th St", "Fever and Brava Theater Center", "A live courtroom performance asks the audience to weigh responsibility and intent in a death involving an AI-driven vehicle.", "The evening format and concrete AI-accountability premise keep it in scope, but this is participatory theater rather than a builder or research room.", "Resale tickets remain available, currently at a steep premium. Choose this only if the ethics theme appeals; it is not a technical event.", "https://nightout.com/events/v/the-jury-experience-death-by-ai-brava-theater-center-san-francisco-2026-10-24/tickets", "6.1/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, October 25",
      verdict: "A large developer-community close, but earlier and broader than preferred",
      note: "This is the official Open Source AI Week closing gathering and has real developer density, but it starts one hour before the weekend floor and is an unstructured park meetup.",
      events: [
        card("SF AI→SI Code and Coffee", "2:00 PM - 5:00 PM PT", "Salesforce Park, central grassy area", "San Francisco AI Code and Coffee", "Developers can bring a project, trade implementation help, or join informal conversations at the final Open Source AI Week community gathering.", "510 visible attendees and the official week-closing role should produce a real developer room despite the loose format.", "Registration is open. The start is one hour earlier than the preferred weekend floor, and the event has no talks or curated program; treat it strictly as best available.", "https://luma.com/9x4o3v5l", "6.2/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Monday, October 26",
      verdict: "One excellent technical discussion on agent proliferation",
      note: "The first official exe.dev meetup is full, but the specific speakers and question make the waitlist worthwhile.",
      events: [
        card("Are We Running Too Many Agents?", "6:00 PM - 9:00 PM PT", "Sentry, 45 Fremont St", "exe.dev", "Josh Bleecher Snyder, Josh Wills, and former Sourcegraph founder Beyang Liu test whether parallel-agent software factories are actually better than smaller, more legible systems.", "245 visible attendees, a deliberately technical talks-and-open-Q&A format, and speakers from exe.dev, DatologyAI, and Amp make this a strong systems room.", "Event full; join the waitlist.", "https://luma.com/0qr6bxcw", "9.0/10", "Sign up now"),
      ],
    },
    {
      date: "Tuesday, October 27",
      verdict: "Two production-focused rooms for agents and developer infrastructure",
      note: "Rootly's reliability panel leads; AI Valley's incident-themed devtools program offers a more playful but still technical alternative.",
      events: [
        card("Running Production with Agents", "5:30 PM - 8:30 PM PT", "Private address, San Francisco", "Rootly AI with NVIDIA, Replit, and WorkOS", "A practitioner panel examines reliability, evaluation, observability, and incident response once autonomous agents meet production systems.", "94 visible attendees and named leaders from Rootly, NVIDIA, Replit, and WorkOS create a compact, senior production-agent room.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/r8sy88tq", "8.9/10", "Sign up now"),
        card("Who Killed the Build?", "5:00 PM - 8:00 PM PT", "Private address, San Francisco", "AI Valley", "A devtools murder-mystery format uses live demos and failure stories to examine why production builds break across environments, inference, and agent workflows.", "Attendance is hidden, but named participation from Flox, Runpod, ResolveAI, and FriendliAI plus an approval gate support the new-listing exception.", "Registration is open with approval; the exact address is disclosed to approved attendees.", "https://luma.com/aivalley-lqjv", "7.8/10", "Consider"),
      ],
    },
    {
      date: "Wednesday, October 28",
      verdict: "A hands-on physical-AI workshop plus an ambitious AI-art opening",
      note: "Voxel51 and Nebius offer the more technical room; Gray Area and Modal provide a strong evening alternative at the intersection of compute, art, and AI.",
      events: [
        card("San Francisco Physical AI Workshop and Meetup", "5:30 PM - 8:30 PM PT", "Antler, 144 Townsend St", "Voxel51 and Nebius Developer Community", "A hands-on FiftyOne workshop covers robotics and sensor dataset curation and vision-model evaluation, followed by physical-AI lightning talks.", "The required laptop, concrete workshop scope, and established computer-vision hosts compensate for hidden attendance.", "Registration is open. A company, university, or government email is required for the hands-on workshop environment.", "https://luma.com/san-francisco-physical-ai-workshop-and-meetup-oct", "8.6/10", "Sign up now"),
        card("Scaling Intelligence — Opening Night", "7:00 PM - 10:00 PM PT", "Gray Area / Grand Theater, 2665 Mission St", "Gray Area and Modal", "Eleven commissioned projects explore how artists and culture makers use large-scale computing and AI to interpret new technical realities.", "485 visible attendees, Modal compute support, a respected arts-and-technology venue, and newly commissioned work make this much stronger than a generic AI-art social.", "Registration is open. This is an exhibition opening rather than a technical talk program.", "https://luma.com/5j93bc4c", "7.7/10", "Consider"),
      ],
    },
    {
      date: "Thursday, October 29",
      verdict: "A strong AI-security briefing plus a large Codex community room",
      note: "Cloudflare's Zero Trust session is the sharper technical pick; the Codex meetup has scale and demos but a much broader audience.",
      events: [
        card("Zero Trust for AI: Securing Models, Data, and Autonomous Agents", "5:00 PM - 7:00 PM PT", "Cloudflare, 101 Townsend St", "Women in Cybersecurity — Silicon Valley", "Cloudflare and Locktivity speakers apply Zero Trust principles to prompt injection, model poisoning, data exfiltration, datasets, and autonomous agents.", "129 visible attendees, a first-party Cloudflare venue, and a specific AI-security agenda create a credible practitioner room.", "Registration is open.", "https://luma.com/nydm47zd", "8.6/10", "Sign up now"),
        card("Codex Community Meetup — San Francisco #11", "5:00 PM - 8:00 PM PT", "Sports Basement, San Francisco", "TatianaSF and the Codex community", "An interactive panel, short demos, and community presentations cover real-world coding-agent workflows and how teams are building with Codex.", "380 visible attendees and confirmed participation from a Codex team guest give the room weight, though the audience and program are intentionally broad.", "Standard registration is open. Choose this for community breadth, not a deeply technical agenda.", "https://luma.com/codex-11", "7.2/10", "Consider"),
      ],
    },
    {
      date: "Friday, October 30",
      verdict: "A standout late-week build, demo, and judging night",
      note: "Night Hack is the clear choice: serious builder density, a five-hour build window, live exhibition, and strong developer-tool partners.",
      events: [
        card("Night Hack by Founders, Inc.", "4:00 PM - 11:00 PM PT; build starts 5:00 PM", "Founders, Inc., 2 Marina Blvd", "Founders, Inc. with Anthropic, Firecrawl, Bolt, Convex, and TinyFish", "Builders form teams, ship for five hours, then exhibit projects for live judging in an open-ended technical hack night.", "The prior edition drew 1,000 signups and 120-plus projects; $10,000 in Anthropic credits and a serious developer-tool partner set should produce a strong room.", "Registration is open with approval. Builders arrive from 4:15 PM; the substantive build block runs 5:00-10:00 PM.", "https://luma.com/nighthack", "9.3/10", "Sign up now"),
      ],
    },
    {
      date: "Saturday, October 31",
      verdict: "A thoughtful AI-and-compute exhibition, but not a builder room",
      note: "Gray Area's five-day Modal-backed exhibition is the only substantive Saturday option that extends into the evening. Arrive after 3:00 PM to stay within the weekend timing preference.",
      events: [
        card("Scaling Intelligence — Modal x Gray Area Commissions", "1:00 PM - 8:00 PM PT; go after 3:00 PM", "Gray Area, 2665 Mission St", "Gray Area and Modal", "Eleven commissioned artworks use large-scale compute and AI to explore neural networks, satellite perspectives, microbial systems, forests, and other forms of intelligence.", "The exhibition is backed by Modal cloud compute, curated by a respected arts-and-technology institution, and remains open until 8:00 PM, but it is self-guided rather than a networking or talk program.", "Free admission; reserve ahead or drop in. Treat this as a best-available culture-and-technology outing, not a high-signal practitioner room.", "https://grayarea.org/exhibitions/scaling-intelligence-modal-commissions/", "6.3/10", "Not recommended - best available"),
      ],
    },
    {
      date: "Sunday, November 1",
      verdict: "A major research conference offers a strong evening AI program",
      note: "The INFORMS evening block is the clear Sunday option: an AI/XR co-scientist keynote flows directly into the welcome reception and research posters.",
      events: [
        card("INFORMS Annual Meeting — Sunday Evening Program", "5:45 PM - 9:00 PM PT", "Moscone Center South, 747 Howard St", "INFORMS", "Princeton's Mengdi Wang presents LabOS, an AI-XR co-scientist combining multimodal agents, smart glasses, robotics, and live human collaboration, followed by the welcome reception and poster sessions.", "A major operations-research and analytics conference, a named frontier AI-and-robotics keynote, and a 7:00 PM research poster session create a substantive technical room despite hidden attendance.", "A paid INFORMS conference badge is required. The keynote runs 5:45-6:35 PM, the welcome reception 6:30-8:30 PM, and the awards ceremony until 9:00 PM.", "https://meetings.informs.org/wordpress/annual/what-to-expect/", "8.2/10", "Sign up now"),
      ],
    },
    {
      date: "Monday, November 2",
      verdict: "A strong enterprise optimization and applied-AI keynote",
      note: "Microsoft's INFORMS keynote is the best after-work room; the beginner ClawCamp workshop and founder dinner fail the hard filters.",
      events: [
        card("Microsoft Cloud Supply Chain: Hyperscale Optimization", "5:45 PM - 8:45 PM PT", "Moscone Center South and Marriott Marquis", "INFORMS and Microsoft", "Microsoft's Konstantina Mellou shows how the Intelligent Fulfillment Service combines machine learning, mathematical optimization, generative AI, and LLM-powered scenario exploration for global cloud logistics.", "A named Microsoft technical leader, an award-winning production system with billion-dollar-scale impact, and the INFORMS practitioner audience make this a credible applied-AI room.", "A paid INFORMS conference badge is required. The keynote runs 5:45-6:35 PM, followed by community meetings and receptions through 8:45 PM.", "https://meetings.informs.org/wordpress/annual/plenaries-keynotes/", "8.0/10", "Sign up now"),
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
