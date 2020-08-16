$("#submitButton").click(function (e) {
    userObject = {};
    if ($(".ui.form").form("is valid")) {
        e.preventDefault();
        if ($(".ui.form").form("is valid")) {
            const arr = $("form").serializeArray();
            arr.forEach((input) => {
                if (input.name != "confirmPassword") {
                    userObject[input.name] = input.value;
                }
            });
        }
        fetch(`http://localhost:${location.port}/api/user`, {
            method: "post",
            body: JSON.stringify(userObject),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
