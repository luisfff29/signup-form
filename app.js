const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;
const usersArray = [];

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/api/user", (req, res) => {
    req.body.message = "Good job";
    console.log(req.body);
    res.status(201).send({ message: "Good job!" });
});

app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}/`);
});
