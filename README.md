# Full-stack Application in Express (Sign Up Form)

Sign up form with [Express.js](http://expressjs.com/), and [EJS](https://www.npmjs.com/package/ejs) package.
Server code and Client code written in the same project.

## Instructions

1. Fill the form and then click on Submit.
2. You will see a message under "Sign up Form" if the user you just submitted was succesfull or not.
3. In case it was successfull, it will display an ID number on the bottom and it will be aded to the list of 'Users' on the right side.
4. Otherwise, it will display a red message saying that the username you submitted was already created.
5. There are some rules to create an user such as:
    - Password must be at least 4 characters
    - Password and Confirm Password must be the same
    - Neither of the inputs can be empty

## Requirements

-   HTML file

    -   Add some fields for a user-creation

-   Client Code (`index.js`)

    -   Add event listener and an `event.preventDefault()` to prevent automated behavior
    -   Stringify into JSON all values of inputs
    -   POST fetch request sends the User object to the Server code
    -   When responses comeback display a message depending if it was successfull or not.

-   Server Code (`app.js`)
    -   Recieve POST request at `/api/user`
    -   Confirm if username of the User object received is not already taken in the users array (`usersArray`)
    -   If the username is not taken:
        -   Create random ID on the user object
        -   Set response status code to 201
        -   Send response containing the created user object
    -   If the username is taken:
        -   Set response status code to 409
        -   Send error message describing the problem

## Run

To start the project you can type on the terminal:

```bash
node app
```

or

```bash
npm start
```
