const profile = {
  hardFilters: [
    "San Francisco only",
    "In person only",
    "After work only, ideally 5:30 PM or later on weekdays",
    "Today through the next two weeks only",
  ],
  scoreRubric: [
    {
      label: "Frontier company density",
      value: "40%",
      width: "40%",
    },
    {
      label: "Venue quality and curation",
      value: "25%",
      width: "25%",
    },
    {
      label: "Topic depth",
      value: "20%",
      width: "20%",
    },
    {
      label: "Networking quality",
      value: "10%",
      width: "10%",
    },
    {
      label: "Timing and convenience",
      value: "5%",
      width: "5%",
    },
  ],
  companies: [
    "OpenAI",
    "Anthropic",
    "WorkOS",
    "LangChain",
    "Scale AI",
    "Perplexity",
    "Cursor",
    "Stripe",
    "Notion",
  ],
  prioritize: [
    "Technical AI meetups with strong company-heavy lineups",
    "Curated salons with serious operator or research-adjacent communities",
    "WorkOS-hosted and WorkOS-adjacent devtools rooms",
    "Events about agents, evals, memory, infrastructure, and enterprise AI",
    "High-trust venues like Shack15, The Battery, and equivalent private spaces",
  ],
  deprioritize: [
    "Startup-catered events, even when they are crowded or high-profile",
    "Founder-heavy AGI House-style energy and startup theater",
    "Broad startup networking with weak technical density",
    "Large generic AI mixers with vague descriptions",
    "Rooms that feel buzzy but not operator-rich",
  ],
  avoid: [
    "Founder fundraising events",
    "Crypto, defense, recruiting, and sales events",
    "Generic beginner AI events",
    "Virtual events",
    "Daytime events",
    "Anything outside San Francisco",
  ],
  roles: [
    {
      role: "Product managers",
      note: "AI product people who can translate model capability into adoption and internal leverage.",
    },
    {
      role: "Forward deployed engineers",
      note: "Hands-on technical operators working close to enterprise deployments and customer reality.",
    },
    {
      role: "Solutions engineers",
      note: "Bridge-builders between platform capability, adoption, and real buyer problems.",
    },
    {
      role: "Technical PMs",
      note: "People shaping AI systems where product judgment and engineering depth meet.",
    },
    {
      role: "Applied AI builders",
      note: "Serious builders shipping agents, evals, memory systems, and production workflows.",
    },
    {
      role: "Research engineers",
      note: "Research-adjacent technical talent with both depth and practical implementation range.",
    },
  ],
  attendanceRule:
    "Do not recommend an event with fewer than 30 visible attendees or RSVPs unless it is clearly a brand new listing that is still early in its sign-up cycle.",
  venues: [
    "Shack15",
    "The Battery",
    "Private member clubs",
    "Curated salons",
    "High-trust venues with selective guest lists",
  ],
  communities: [
    "WorkOS-hosted events",
    "WorkOS-adjacent developer-tooling communities",
    "SF AI Engineers",
    "Big Brain SF",
    "Company-dense AI engineering meetups",
    "Research-adjacent technical communities with repeat high-quality attendance",
  ],
  topics: [
    "LLM applications",
    "Agents",
    "Evals",
    "Memory",
    "Context engineering",
    "AI infrastructure",
    "Developer tools",
    "Enterprise AI deployment",
    "Product strategy in AI",
    "Research engineering",
    "Applied AI operations",
  ],
  recommendationPolicy:
    "Return a recommendation for each day in the scan window, but explicitly say when no event is worth attending. Rank no more than three events on the same day, and fewer when the signal is weak.",
  history: [
    {
      label: "AI Engineers",
      text: "You showed up for SF AI Engineers with company-heavy presenters like Databricks, Robinhood, and Suki.",
    },
    {
      label: "Curated Rooms",
      text: "You are willing to attend high-profile crossover events, but they should no longer earn bonus points just for startup buzz.",
    },
    {
      label: "Intellectual Salons",
      text: "Big Brain SF-style events suggest you value thoughtful, research-adjacent rooms when the attendee quality is real.",
    },
  ],
};

function renderList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderChips() {
  const target = document.getElementById("company-chips");
  target.innerHTML = profile.companies
    .map((company) => `<span class="chip">${company}</span>`)
    .join("");
}

function renderScoreGrid() {
  const target = document.getElementById("score-grid");
  target.innerHTML = profile.scoreRubric
    .map(
      (item) => `
        <div class="score-row">
          <header>
            <strong>${item.label}</strong>
            <span>${item.value}</span>
          </header>
          <div class="score-bar"><span style="width:${item.width}"></span></div>
        </div>
      `,
    )
    .join("");
}

function renderRoles() {
  const target = document.getElementById("roles-grid");
  target.innerHTML = profile.roles
    .map(
      (item) => `
        <article class="persona">
          <p class="persona-role">${item.role}</p>
          <p class="persona-note">${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderHistory() {
  const target = document.getElementById("history-grid");
  target.innerHTML = profile.history
    .map(
      (item) => `
        <article class="history-card">
          <span>${item.label}</span>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function render() {
  renderList("hero-filters", profile.hardFilters);
  renderList("prioritize-list", profile.prioritize);
  renderList("deprioritize-list", profile.deprioritize);
  renderList("avoid-list", profile.avoid);
  renderList("venues-list", profile.venues);
  renderList("communities-list", profile.communities);
  renderList("topics-list", profile.topics);
  renderChips();
  renderScoreGrid();
  renderRoles();
  renderHistory();

  document.getElementById("attendance-rule").textContent =
    profile.attendanceRule;
  document.getElementById("recommendation-policy").textContent =
    profile.recommendationPolicy;
}

render();
