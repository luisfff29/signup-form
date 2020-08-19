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
    res.render("index", { users: usersArray });
});

app.post("/api/user", (req, res) => {
    var userCreated = false;
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].username === req.body.username) {
            console.error("Error, username already exists");
            userCreated = true;
            res.status(409).send({
                message: `The username "${req.body.username}" already exists. Please use a different username`,
                status: 409,
            });
        }
    }

    if (!userCreated) {
        req.body.id = Date.now();
        usersArray.push(req.body);
        console.log(usersArray);
        //unique ID
        res.status(201).send({
            message: `Thank you for your registration, ${req.body.username}!`,
            status: 201,
            user: req.body,
        });
    }
});

app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}/`);
});
