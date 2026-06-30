const scan = {
  "checkedAt": "June 30, 2026",
  "updatedAt": "June 30, 2026",
  "windowLabel": "June 30, 2026 → July 14, 2026",
  "featured": [
    {
      "title": "AI Engineer World's Fair 2026",
      "date": "In progress through Thu, Jul 2",
      "recommendation": "Consider",
      "summary": "The only verified San Francisco event still active in the current two-week window from the Luma-first source pass, and still the highest-density AI builder room if you can flex into daytime hours.",
      "link": "https://www.ai.engineer"
    }
  ],
  "days": [
    {
      "date": "Tuesday, June 30",
      "verdict": "High-signal daytime exception",
      "note": "The ongoing conference still beats the weak standalone evening slate if your goal is concentrated AI-builder density.",
      "events": [
        {
          "title": "AI Engineer World's Fair 2026",
          "time": "Ongoing conference day; official dates June 29-July 2, 2026",
          "venue": "Moscone Center, 747 Howard St, San Francisco",
          "host": "AI Engineer",
          "why": "The strongest density play remains the hallway track and side conversations around the main conference.",
          "signal": "The June 30 Luma-first pass did not surface any additional San Francisco rooms in-range, which leaves this ongoing conference as the clearest concentration of AI engineers, agent builders, and devtools operators in the city.",
          "notes": "Daytime timing is the main compromise. Worth it only if you are comfortable bending the after-work rule for crowd quality.",
          "link": "https://www.ai.engineer",
          "score": "8.8/10",
          "recommendation": "Consider"
        }
      ]
    },
    {
      "date": "Wednesday, July 1",
      "verdict": "High-signal daytime exception",
      "note": "Midweek conference density is still the strongest verified play, even though it is not a clean after-work fit.",
      "events": [
        {
          "title": "AI Engineer World's Fair 2026",
          "time": "Ongoing conference day; official dates June 29-July 2, 2026",
          "venue": "Moscone Center, 747 Howard St, San Francisco",
          "host": "AI Engineer",
          "why": "Still the best concentration of AI product, infra, and engineering conversations I could verify from the Luma-first pass.",
          "signal": "The conference brand and Moscone footprint make this a much denser room than the weaker visible standalone evening options.",
          "notes": "Use this only if you can treat the after-hours networking around the conference as the real return. The scheduled program itself is daytime.",
          "link": "https://www.ai.engineer",
          "score": "8.7/10",
          "recommendation": "Consider"
        }
      ]
    },
    {
      "date": "Thursday, July 2",
      "verdict": "High-signal daytime exception",
      "note": "Last official day of the World's Fair. Still worth a look if you want one final high-density builder room before the holiday lull.",
      "events": [
        {
          "title": "AI Engineer World's Fair 2026",
          "time": "Ongoing conference day; official dates June 29-July 2, 2026",
          "venue": "Moscone Center, 747 Howard St, San Francisco",
          "host": "AI Engineer",
          "why": "The closing-day crowd is still likely to outperform the weaker visible evening-only alternatives in the window.",
          "signal": "This remains the cleanest verified concentration of applied AI practitioners, agent builders, and toolmakers in town.",
          "notes": "Same tradeoff as the earlier days: strong density, weak fit on timing.",
          "link": "https://www.ai.engineer",
          "score": "8.6/10",
          "recommendation": "Consider"
        }
      ]
    },
    {
      "date": "Friday, July 3",
      "verdict": "Not recommended",
      "note": "Holiday-week drift and the fallback pass did not surface a credible SF evening AI room that beats an open night.",
      "events": []
    },
    {
      "date": "Saturday, July 4",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Sunday, July 5",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Monday, July 6",
      "verdict": "Not recommended",
      "note": "The Luma-first pass and fallback search still do not show a convincing SF evening AI room for tonight.",
      "events": []
    },
    {
      "date": "Tuesday, July 7",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Wednesday, July 8",
      "verdict": "Not recommended",
      "note": "The visible July 8 AI-adjacent listings are outside San Francisco or below your attendance floor.",
      "events": []
    },
    {
      "date": "Thursday, July 9",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Friday, July 10",
      "verdict": "Not recommended",
      "note": "The fallback pass still did not uncover a strong SF evening AI room that clears your bar for attendee quality.",
      "events": []
    },
    {
      "date": "Saturday, July 11",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Sunday, July 12",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Monday, July 13",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    },
    {
      "date": "Tuesday, July 14",
      "verdict": "Not recommended",
      "note": "No strong SF evening AI recommendation surfaced for tonight.",
      "events": []
    }
  ],
  "profile": {
    "description": "Our recommended events target high-signal, after-work gatherings across AI topics, prioritizing rooms with applied AI builders and technical PMs over generic networking. We favor curated venues and substantive topics like agents, evals, and AI infrastructure, while filtering out founder-heavy and novice-oriented events.",
    "sourceHeading": "Event Calendars",
    "sources": [
      {
        "label": "Discover tech events",
        "link": "https://luma.com/tech",
        "image": "./tech-square.png"
      },
      {
        "label": "Discover AI events",
        "link": "https://luma.com/ai",
        "image": "./ai-square.png"
      }
    ]
  }
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
