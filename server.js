const express = require("express");

const app = express();

let PORT = process.env.PORT || 3000;

//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Added for styles
app.use(express.static("public"));


//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});