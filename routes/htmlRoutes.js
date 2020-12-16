//Need path package to set pathway to the correct file
const path = require('path');

//HTML file routes
module.exports = function(app) {
    //Home page route
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //Notes page route
    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};