function newUser(username, info) {
    return `<div class="title">
        <i class="dropdown icon"></i>
        ${username}
    </div>
    <div class="content">
        <pre class="transition hidden">
    {
        "username": "${info.username}",
        "email": "${info.email}",
        "gender": ${
            info.gender !== "undefined"
                ? JSON.stringify(info.gender)
                : info.gender
        },
        "id": ${info.id}
    }
        </pre>
    </div>`;
}

$("#submitButton").click(function (e) {
    if ($(".ui.form").form("is valid")) {
        e.preventDefault();
        userObject = {};
        const arr = $("form").serializeArray();
        arr.forEach((input) => {
            if (input.name != "password" && input.name != "confirmPassword") {
                userObject[input.name] = input.value;
            }
        });

        fetch(`http://localhost:${location.port}/api/user/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                if (data.status === 201) {
                    $("#message").text(data.message).css({ color: "green" });
                    $("#message2").text(
                        `Great! Your ID number is ${data.user.id}`
                    );
                    $("#userList").append(
                        newUser(data.user.username, data.user)
                    );
                } else {
                    $("#message").text(data.message).css({ color: "red" });
                    $("#message2").text("");
                }
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

$(".ui.accordion").accordion();

$(".selection.dropdown").dropdown();
