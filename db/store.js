const jsonfile = require('jsonfile');
const file = './db/db.json';

let savedNotes = [];

//Reads the db.json file and updates the savedNotes array
jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err);
    for (let i = 0; i < obj.length; i++) {
        savedNotes[i] = { "id": obj[i].id, "title": obj[i].title ,"text": obj[i].text };
    }
});

//Function that re-writes the db.json file if it needs to be updated for a POST or DELETE request
function updateJsonFile(savedNotes) {
   jsonfile.writeFile(file, savedNotes, err => {
    if (err) throw err;  
    }); 
};


//Exporting to apiRoutes.js to utilize stored notes in db.json file
module.exports = { 
    savedNotes: savedNotes,
    updateJsonFile: updateJsonFile
};
