const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'sources', 'antiquities.json');
const antiquities = require(dataFilePath);

const uniqueRarities = new Set();
const uniqueDifficulties = new Set();

antiquities.forEach((antiquity) => {
  // Add rarity and difficulty values to sets
  uniqueRarities.add(antiquity.rarity);
  uniqueDifficulties.add(antiquity.difficulty);
});

// Convert sets to arrays
// const rarityArray = Array.from(uniqueRarities);
// const difficultyArray = Array.from(uniqueDifficulties);

console.log('Unique Rarities:', uniqueRarities);
console.log('Unique Difficulties:', uniqueDifficulties);
