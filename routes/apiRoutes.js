//Receive exported modules from store.js
let store = require("../db/store");

//Export to server.js
module.exports = function(app) {
    //For GET requests, will display current saved notes data
    app.get("/api/notes", function(req, res) {
        return res.json(store.savedNotes);
    });

    //for POST requests, will add the note to the savedNotes array, update the db.json file, and the current saved notes will be displayed
    app.post("/api/notes", function(req,res) {
        req.body.id = (store.savedNotes.length + 1).toString();
        store.savedNotes.push(req.body);
        store.updateJsonFile(store.savedNotes);
        return res.json(store.savedNotes);
    })

    //for DELETE requests, will remove the note being deleted based on the id of the note using the .filter method; the db.json will be updated, and the current notes will be displayed
    app.delete("/api/notes/:id", function(req, res) {
        var chosen = req.params.id;
      
        for (var i = 0; i < store.savedNotes.length; i++) {
            
          if (chosen === store.savedNotes[i].id) {
            store.savedNotes = store.savedNotes.filter(({ id }) => id !== req.params.id);
            store.updateJsonFile(store.savedNotes);
            return res.json(store.savedNotes);
          }
        }
      
        return res.json(false);
    });
};