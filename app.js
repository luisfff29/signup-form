const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/api/user", (req, res) => {
    console.log(JSON.parse(req.body));
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}/`);
});
