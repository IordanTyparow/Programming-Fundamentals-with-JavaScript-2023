let express = require("express");
let fs = require("fs/promises");

let app = express();

app.use("/", express.static("content"));

app.get("/", async (req, res) => {
  let homePage = await fs.readFile("./views/home/index.html", {
    encoding: "utf-8",
  });

  res.send(homePage);
});

app.get("/cats/add-cat", async (req, res) => {
  let addCat = await fs.readFile("./views/addCat.html", { encoding: "utf-8" });

  res.send(addCat);
});

app.listen(5000, () => console.log("Server listening on port 5000..."));
