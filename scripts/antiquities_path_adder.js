const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'sources', 'antiquities.json');
const antiquities = require(dataFilePath);

// Function to add "image_path" property to each object
const addImagePathToAntiquities = (antiquitiesArray) => {
  return antiquitiesArray.map((antiquity) => {
    return {
      ...antiquity,
      image_path: '',
    };
  });
};

// Add "image_path" to each object
const updatedAntiquities = addImagePathToAntiquities(antiquities);

// Write the updated array to a new file
fs.writeFile('updatedAntiquities.json', JSON.stringify(updatedAntiquities, null, 2), (err) => {
  if (err) throw err;
  console.log('The file has been saved with the updated objects!');
});
