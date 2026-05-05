from dataclasses import dataclass, field


@dataclass(frozen=True)
class TasteProfile:
    name: str
    city: str
    time_window_days: int
    minimum_start_time: str
    preferred_companies: list[str] = field(default_factory=list)
    preferred_roles: list[str] = field(default_factory=list)
    preferred_topics: list[str] = field(default_factory=list)
    preferred_venues: list[str] = field(default_factory=list)
    preferred_communities: list[str] = field(default_factory=list)
    preferred_formats: list[str] = field(default_factory=list)
    deprioritized_patterns: list[str] = field(default_factory=list)
    hard_avoid_patterns: list[str] = field(default_factory=list)
    hard_filters: list[str] = field(default_factory=list)
    attendance_rule: str = ""
    recommendation_policy: str = ""


LISA_PROFILE = TasteProfile(
    name="Lisa Pederson",
    city="San Francisco",
    time_window_days=14,
    minimum_start_time="5:30 PM",
    preferred_companies=[
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
    preferred_roles=[
        "product managers",
        "forward deployed engineers",
        "solutions engineers",
        "technical PMs",
        "applied AI builders",
        "research engineers",
        "technical startup operators",
    ],
    preferred_topics=[
        "LLM applications",
        "agents",
        "evals",
        "memory",
        "context engineering",
        "AI infrastructure",
        "developer tools",
        "enterprise AI deployment",
        "product strategy in AI",
        "research engineering",
        "applied AI operations",
    ],
    preferred_venues=[
        "Shack15",
        "The Battery",
        "private member clubs",
        "curated salons",
        "high-trust venues",
    ],
    preferred_communities=[
        "WorkOS-hosted events",
        "WorkOS-adjacent devtools rooms",
        "SF AI Engineers",
        "Big Brain SF",
        "technical engineering communities",
        "company-heavy AI meetups",
    ],
    preferred_formats=[
        "in-person",
        "evening",
        "after-work",
        "curated networking",
        "technical talks with strong attendees",
    ],
    deprioritized_patterns=[
        "startup-catered events",
        "AGI House-style founder-heavy rooms",
        "broad startup networking",
        "large generic networking mixers",
        "vague AI branding without substance",
    ],
    hard_avoid_patterns=[
        "founder fundraising events",
        "crypto events",
        "defense industry events",
        "generic sales events",
        "recruiting mixers",
        "beginner AI events",
        "virtual events",
        "daytime events",
        "events outside San Francisco",
    ],
    hard_filters=[
        "San Francisco only",
        "in person only",
        "weekday events should ideally start at 5:30 PM or later",
        "only recommend events from today through the next two weeks",
    ],
    attendance_rule=(
        "Do not recommend an event with fewer than 30 visible attendees or "
        "RSVPs unless it is clearly a brand new listing that is still early "
        "in its sign-up cycle."
    ),
    recommendation_policy=(
        "Return a recommendation for each calendar day in the window, but "
        "explicitly say when no event is worth attending. Rank at most three "
        "events on the same day."
    ),
)
