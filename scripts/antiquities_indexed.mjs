const fs = require("fs");
const path = require("path");

// This script adds id to antiquities. I'm not sure I'm using this right now or do it for later.

const inputPath =
  process.argv[2] ?? path.join(__dirname, "..", "sources", "antiquities.json");

const outputPath =
  process.argv[3] ?? path.join(process.cwd(), "antiquities.with-ids.json");

if (!fs.existsSync(inputPath)) {
  console.error(`[ERROR] Input file not found: ${inputPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf8");
const antiquities = JSON.parse(raw);

if (!Array.isArray(antiquities)) {
  console.error("[ERROR] Expected input JSON to be an array.");
  process.exit(1);
}

// Add IDs to each item
const withIds = antiquities.map((item, index) => ({
  ...item,
  // only add id if missing
  id: item?.id ?? index + 1,
}));

// Convert JSON data to string & write JSON data to a new file
fs.writeFileSync(outputPath, JSON.stringify(withIds, null, 2), "utf8");

console.log("Added numeric id where missing (index + 1)");
