//Requiring express to be used
const express = require("express");
const app = express();

let PORT = process.env.PORT || 3000;

//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Added for styles in public
app.use(express.static("public"));

//Routes for server to respond with
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listening for server
app.listen(PORT, () => {
    console.log("Server started on port" + PORT);
});