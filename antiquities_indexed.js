const fs = require('fs');

const antiquities = [];

function addIds(data) {
  return data.map((item, index) => ({ ...item, id: index + 1 }));
}

// Add IDs to each item
const jsonDataWithIds = addIds(antiquities);

// Convert JSON data to string
const jsonString = JSON.stringify(jsonDataWithIds, null, 2);

// Write JSON data to a new file
fs.writeFile('updated_data.json', jsonString, (err) => {
  if (err) throw err;
  console.log('Updated data has been saved to updated_data.json');
});
