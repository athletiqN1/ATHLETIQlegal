/* Paddle settings for checkout.html — the ONLY file that changes when
   moving from sandbox to live. This is a static GitHub Pages site with no
   build step, so there are no env vars to read; everything here is safe to
   publish (a client-side token is designed to be public — never put an
   API key or webhook secret in this file).

   Going live: set environment to "production", swap clientToken for a
   live_ token, and swap every priceId for the matching live pri_ id.

   Keys are AppRole.name values from the Flutter app (lib/models/
   app_role.dart) — the app opens checkout.html?role=<key>, so these must
   stay in sync with that enum. "team" maps to the sandbox product still
   named "Club". */
window.ATHLETIQ_PADDLE = {
  environment: "sandbox",
  clientToken: "test_b8d6b9c616445d59a7f70a9ad15",
  prices: {
    scout: { priceId: "pri_01m1rzmqjya52vzzzebgkq71gb", label: "Scout", amount: "$14.99 / month" },
    agent: { priceId: "pri_01m1rzmqz6ba5x5hp6r2c6fym2", label: "Agent", amount: "$19.99 / month" },
    observer: { priceId: "pri_01m1rzmrp3qzynzvad98kytkc5", label: "Observer", amount: "$6.99 / month" },
    parent: { priceId: "pri_01m1rzms2ksz7kvdw2n1nh3f78", label: "Parent", amount: "$6.99 / month" },
    team: { priceId: "pri_01m1rzmserjmv9jwrdfzxqnzvg", label: "Team (Club)", amount: "$14.99 / month" },
    advertiser: { priceId: "pri_01m1rzyn9ktrjs5zndtz7hhepn", label: "Advertiser", amount: "$19.99 / month" },
  },
};
