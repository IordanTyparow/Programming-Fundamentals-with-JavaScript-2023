const express = require("express");

let router = require("./routes");

const app = express();

app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: false }));

require("./config/handlebarsConfig")(app);
require("./config/mongooseConfig")();

app.use(router);

app.listen(5000, () => console.log("Server listening on port 5000..."));
