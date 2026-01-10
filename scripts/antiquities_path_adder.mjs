const fs = require("fs");
const path = require("path");

// This script adds props "image_path" set to empty string to the new added antiquities. I manually then add images and set this path to correct one.
const inputPath =
  process.argv[2] ?? path.join(__dirname, "..", "sources", "antiquities.json");

const outputPath =
  process.argv[3] ?? path.join(process.cwd(), "updatedAntiquities.json");

if (!fs.existsSync(inputPath)) {
  console.error(`[ERROR] Input file not found: ${inputPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf8");
const antiquities = JSON.parse(raw);

if (!Array.isArray(antiquities)) {
  console.error("[ERROR] Expected antiquities JSON to be an array.");
  process.exit(1);
}

// Function to add "image_path" property to each object
const addImagePathToAntiquities = (antiquitiesArray) => {
  return antiquitiesArray.map((antiquity) => ({
    ...antiquity,
    image_path: antiquity.image_path ?? "",
  }));
};

// Add "image_path" to each object
const updatedAntiquities = addImagePathToAntiquities(antiquities);

// Write the updated array to a new file
fs.writeFileSync(
  outputPath,
  JSON.stringify(updatedAntiquities, null, 2),
  "utf8"
);

console.log("Image_path field added where missing");
