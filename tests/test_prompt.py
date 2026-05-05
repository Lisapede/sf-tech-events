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
        self.assertIn("no event is worth attending", prompt)


if __name__ == "__main__":
    unittest.main()
