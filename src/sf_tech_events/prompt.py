from .profile import TasteProfile


def _format_bullets(items: list[str]) -> str:
    return "\n".join(f"- {item}" for item in items)


def build_scan_prompt(profile: TasteProfile) -> str:
    return f"""Scan for new high-signal in-person evening AI events in {profile.city} occurring from today through the next {profile.time_window_days} days only.

Return 1-3 recommendations for each calendar day in that window. Default to 2-3 ranked options on stronger days and at least one credible option on other days. Across the inclusive 15-day window, leave no more than {profile.maximum_empty_days} calendar days without an event card.

Optimize for this taste profile:
- The user wants rooms with a high probability of meeting employees from {_comma_join(profile.preferred_companies)}.
- Prioritize conversations with {_comma_join(profile.preferred_roles)}.
- Favor topics like {_comma_join(profile.preferred_topics)}.
- Strongly favor venues and settings such as {_comma_join(profile.preferred_venues)}.
- Add positive weight for communities and event styles such as {_comma_join(profile.preferred_communities)}.
- Preferred event formats: {_comma_join(profile.preferred_formats)}.

Hard filters:
{_format_bullets(profile.hard_filters)}

Attendance threshold:
- {profile.attendance_rule}

Deprioritize:
{_format_bullets(profile.deprioritized_patterns)}

Avoid:
{_format_bullets(profile.hard_avoid_patterns)}

Recommendation policy:
- {profile.recommendation_policy}
- Use {profile.minimum_consider_score:.1f}/10 as the floor for a credible Consider pick. An event does not need to score 8+ to be useful enough to show.
- Apply three tiers: Sign up now for strong rooms, Consider for credible rooms that clear the {profile.minimum_consider_score:.1f}/10 floor, and Not recommended - best available for marginal but still in-scope calendar options.
- A Not recommended - best available event must still be displayed with its event card and direct link; do not replace it with an empty-day message.
- Reserve a truly empty day for cases where no San Francisco, in-person, time-eligible event survives the hard filters. Never use a hard-avoid event merely to satisfy coverage.
- When multiple events clear the bar on the same day, prefer showing the best 2-3 ranked options instead of collapsing the output to a single winner.
- For each calendar day, explicitly check https://luma.com/ai first.
- Then explicitly check https://luma.com/tech for that same day.
- Treat those two Luma pages as the default source of truth for daily recommendations.
- Keep scanning those Luma pages until you have checked the full target date's evening listings; do not stop after the first screen or first block of results if the early entries are mostly daytime, sold out, or weak-fit.
- If promising events for the target date appear lower on the page, still evaluate them before marking the day as weak.
- Only if those two pages still do not yield a viable recommendation for a given day should you run a fallback search across other Luma city listings, strong organizer calendars, or official event pages.
- Before publishing, run a coverage audit. If more than {profile.maximum_empty_days} dates are empty, the scan is incomplete: revisit every empty date on both Luma calendars, inspect lower-page listings and individual event pages, then use the fallback sources for those dates.
- Do not publish an all-empty or mostly empty planner when the Luma calendars contain eligible events. If the coverage target still cannot be met, list the search evidence for each remaining empty date instead of silently treating it as a successful scan.
- Waitlist-only or sold-out status is not a reason to omit a high-signal event; show it with the correct status and urgency so the user can decide whether to join the waitlist.
- Prefer direct Luma links when available, but use the strongest direct official event link if the registration page lives elsewhere.

For each event include:
- Event name
- Exact date and time in Pacific time
- Venue
- Host or organizer
- Direct event link
- Why it is high signal for this user specifically
- Why employees from frontier AI companies might attend
- Expected crowd
- Risks or downsides
- Registration status if known, otherwise unknown
- Recommendation score out of 10
- Final recommendation: Sign up now / Consider / Skip / Not worth attending
"""


def _comma_join(items: list[str]) -> str:
    if not items:
        return ""
    if len(items) == 1:
        return items[0]
    return ", ".join(items[:-1]) + f", and {items[-1]}"
