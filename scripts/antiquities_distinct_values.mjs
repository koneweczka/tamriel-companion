const fs = require("fs");
const path = require("path");

// This script gets all unique values for rarity and difficulty from antiquities.json

const inputPath =
  process.argv[2] ?? path.join(__dirname, "..", "sources", "antiquities.json");

if (!fs.existsSync(inputPath)) {
  console.error(`[ERROR] File not found: ${inputPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf8");
const antiquities = JSON.parse(raw);

if (!Array.isArray(antiquities)) {
  console.error("[ERROR] Expected antiquities JSON to be an array.");
  process.exit(1);
}

const uniqueRarities = new Set();
const uniqueDifficulties = new Set();

antiquities.forEach((antiquity) => {
  // Add rarity and difficulty values to sets
  if (antiquity?.rarity) uniqueRarities.add(antiquity.rarity);
  if (antiquity?.difficulty) uniqueDifficulties.add(antiquity.difficulty);
});

// Convert sets to sorted arrays for readable output
const rarityArray = Array.from(uniqueRarities).sort();
const difficultyArray = Array.from(uniqueDifficulties).sort();

console.log("Unique Rarities:", rarityArray);
console.log("Unique Difficulties:", difficultyArray);
