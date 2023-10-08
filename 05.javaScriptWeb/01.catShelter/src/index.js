let express = require("express");

let router = require("./routes");
let app = express();

require("./config/handlebarsConfig")(app);

app.use("/static", express.static("content"));
app.use(express.urlencoded({ extended: false }));
app.use(router);

require("./config/mongooseConfig")();

app.listen(5000, () => console.log("Server listening on port 5000..."));
