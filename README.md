# sf-tech-events

Small Python package for storing a high-signal SF AI events taste profile and
generating a repeatable scan prompt from it.

## What this includes

- A structured taste profile optimized for frontier-AI networking in San
  Francisco.
- A prompt builder for recurring scans over the next two weeks.
- A sample profile based on Lisa's stated preferences and attendance history.
- A polished static website in `docs/` for presenting the taste profile and
  event-selection logic.

## Quick start

```bash
python3 -m unittest
python3 -c "from sf_tech_events import LISA_PROFILE, build_scan_prompt; print(build_scan_prompt(LISA_PROFILE))"
```

To preview the static site locally, open `docs/index.html` in a browser.

## Profile summary

The default profile favors:

- OpenAI, Anthropic, WorkOS, and peer frontier-AI companies
- PMs, FDEs, solutions engineers, technical PMs, applied AI builders, research
  engineers, and technical operators
- SF-only, in-person, after-work events
- Curated, high-trust rooms over broad startup networking
- WorkOS-hosted or WorkOS-adjacent events
- Technical topics like agents, evals, memory, AI infra, devtools, enterprise
  AI, and research engineering

The default profile avoids:

- Founder-fundraising rooms
- Startup-centric networking
- Crypto, defense, recruiting, or sales events
- Beginner AI events
- Events with fewer than 30 visible attendees unless clearly brand new
