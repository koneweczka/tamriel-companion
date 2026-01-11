const fs = require("fs");
const path = require("path");

// This script sorts antiquities alphabetically

const inputPath =
  process.argv[2] ?? path.join(__dirname, "..", "sources", "antiquities.json");

const outputPath =
  process.argv[3] ?? path.join(process.cwd(), "antiquities.sorted.json");

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

function sortByDropAreaAndItem(a, b) {
  const dropA = (a?.drop_area ?? "").toString();
  const dropB = (b?.drop_area ?? "").toString();

  if (dropA === dropB) {
    const itemA = (a?.item ?? "").toString();
    const itemB = (b?.item ?? "").toString();
    return itemA.localeCompare(itemB);
  }

  return dropA.localeCompare(dropB);
}

// Create alphabetic list based on drop_area
const sorted = [...antiquities].sort(sortByDropAreaAndItem);

// Convert JSON data to string & write data to a new file
fs.writeFileSync(outputPath, JSON.stringify(sorted, null, 2), "utf8");

console.log("Antiquities sorted by drop_area");
