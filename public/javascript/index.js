$("#submitButton").click(function (e) {
    if ($(".ui.form").form("is valid")) {
        e.preventDefault();
        userObject = {};
        const arr = $("form").serializeArray();
        arr.forEach((input) => {
            if (input.name != "confirmPassword") {
                userObject[input.name] = input.value;
            }
        });
        console.log(userObject);
        console.log(location.port);

        fetch(`http://localhost:${location.port}/api/user/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Message:", data.message);
            });
    }
});

$(".ui.form").form({
    fields: {
        email: {
            rules: [{ type: "email", prompt: "Please enter a valid email" }],
        },
        username: {
            rules: [{ type: "empty", prompt: "Please enter a username" }],
        },
        password: {
            rules: [
                { type: "empty", prompt: "Please enter a password" },
                {
                    type: "minLength[4]",
                    prompt:
                        "Your password must be at least {ruleValue} characters",
                },
            ],
        },
        confirmPassword: {
            rules: [
                { type: "match[password]", prompt: "Passwords do not match" },
            ],
        },
    },
});
