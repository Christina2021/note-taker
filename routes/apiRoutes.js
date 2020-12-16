let store = require("../db/store");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(store.savedNotes);
    });

    
    app.post("/api/notes", function(req,res) {
        req.body.id = (store.savedNotes.length + 1).toString();
        store.savedNotes.push(req.body);
        store.updateJsonFile(store.savedNotes);
        res.json(store.savedNotes);
    })


    app.delete("/api/notes/:id", function(req, res) {
        var chosen = req.params.id;
      
        for (var i = 0; i < store.savedNotes.length; i++) {
            
          if (chosen === store.savedNotes[i].id) {
            store.savedNotes = store.savedNotes.filter(({ id }) => id !== req.params.id);
            store.updateJsonFile(store.savedNotes);
            res.json(store.savedNotes);
          }
        }
      
        return res.json(false);
    });
};