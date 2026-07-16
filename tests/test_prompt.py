import unittest

from sf_tech_events import LISA_PROFILE, build_scan_prompt


class PromptTests(unittest.TestCase):
    def test_prompt_includes_key_preferences(self) -> None:
        prompt = build_scan_prompt(LISA_PROFILE)

        self.assertIn("WorkOS", prompt)
        self.assertIn("OpenAI", prompt)
        self.assertIn("Anthropic", prompt)
        self.assertIn("fewer than 30 visible attendees", prompt)
        self.assertIn("today through the next 14 days", prompt)
        self.assertIn("first screen or first block of results", prompt)
        self.assertIn("leave no more than 2 calendar days", prompt)
        self.assertIn("6.5/10 as the floor", prompt)
        self.assertIn("Not recommended - best available", prompt)
        self.assertIn("coverage audit", prompt)
        self.assertIn("scan is incomplete", prompt)
        self.assertIn("Waitlist-only or sold-out", prompt)


if __name__ == "__main__":
    unittest.main()
