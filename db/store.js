const jsonfile = require('jsonfile');
const fs = require("fs");
const file = './db/db.json';

let savedNotes = [];

//Function for reading the db.json file and adding it to an array
jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err);
    // savedNotes = obj;
    // console.log(savedNotes);
    for (let i = 0; i < obj.length; i++) {
        savedNotes[i] = { "id": obj[i].id, "title": obj[i].title ,"text": obj[i].text };
    }
});

function updateJsonFile(savedNotes) {
   jsonfile.writeFile(file, savedNotes, err => { 
     
    if (err) throw err;  
       //console.log("Done writing"); // Success 
    }); 
};

module.exports = { 
    savedNotes: savedNotes,
    updateJsonFile: updateJsonFile
};
