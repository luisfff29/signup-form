const express = require("express");
const port = 3001;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}/`);
});
