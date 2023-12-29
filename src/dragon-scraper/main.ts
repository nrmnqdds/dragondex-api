/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios");
const { parse } = require("node-html-parser");
const fs = require("fs");

async function DragonScraper() {
  const res = await axios.get("https://dragoncity.fandom.com/wiki/Dragons/All");

  const root = parse(res.data);
  const articles = root.querySelectorAll(".bm_dragon_name");
  const dragons = [];
  for (const article of articles) {
    const imgElement = article.querySelector(".bm_dragon_square a img");
    const dragonImageUrl =
      imgElement?.getAttribute("data-src") || imgElement?.getAttribute("src");
    const dragonName = article.querySelector("span")?.text;
    if (dragonImageUrl && dragonName) {
      dragons.push({ dragonImageUrl, dragonName });
    }
  }

  return dragons;
}

DragonScraper()
  .then((dragons) =>
    fs.writeFileSync(
      "src/dragon-scraper/dragons.json",
      JSON.stringify(dragons),
    ),
  )
  .catch((err) => console.error(err));
