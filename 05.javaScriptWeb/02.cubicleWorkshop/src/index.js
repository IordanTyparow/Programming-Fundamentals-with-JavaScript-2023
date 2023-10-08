const express = require("express");
let cookieParser = require("cookie-parser");
let { auth } = require("./middlewares/authMiddleware");

let router = require("./routes");

const app = express();

app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);

require("./config/handlebarsConfig")(app);
require("./config/mongooseConfig")();

app.use(router);

app.listen(5000, () => console.log("Server listening on port 5000..."));
