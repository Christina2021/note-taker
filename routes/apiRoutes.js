const storedNotes = require("../db/store");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(storedNotes);
      });

    app.post("/api/notes", function(req,res) {
        storedNotes.push(req.body);
    })
};