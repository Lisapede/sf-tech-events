from .profile import TasteProfile


def _format_bullets(items: list[str]) -> str:
    return "\n".join(f"- {item}" for item in items)


def build_scan_prompt(profile: TasteProfile) -> str:
    return f"""Scan for new high-signal in-person evening AI events in {profile.city} occurring from today through the next {profile.time_window_days} days only.

Return a recommendation for each calendar day in that window, but explicitly say when no event is worth attending.

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
- Before marking a day as not worth attending, run a second-pass search across Luma city/AI/Tech listings and strong organizer calendars or official event pages to make sure the day is truly weak.
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
