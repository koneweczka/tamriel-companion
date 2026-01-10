const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'sources', 'antiquities.json');
const antiquities = require(dataFilePath);

function sortByDropAreaAndItem(a, b) {
    if (a.drop_area === b.drop_area) {
      return a.item.localeCompare(b.item);
    } else {
      return a.drop_area.localeCompare(b.drop_area);
    }
  }

  // Create alphabetic list based on drop_area
const alphabeticList = antiquities.sort(sortByDropAreaAndItem);
// Convert JSON data to string
const jsonString = JSON.stringify(alphabeticList, null, 2);

// Write JSON data to a new file
fs.writeFile('alphabetic_data.json', jsonString, (err) => {
  if (err) throw err;
  console.log('Updated data has been saved to updated_data.json');
});