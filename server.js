const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8000;

app.use(bodyParser.json());

const mockUserData=[
    {name: "Mark"},
    {name: "Jill"}
]

app.get("/users", (req, res) => {
    res.json({
        success: true,
        message: "successfuly got users. Nice!",
        users: mockUserData
    })
})

// colons are used as variables that be viewed in the params
app.get('/users/:id', (req,res) => {
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "password and username match",
            token: "encrypted token goes here"
        })
    } else {
        res.json({
            success: false,
            message: "password and username do not match"
        })
    }
})



app.listen(port, () => {
    console.log("Server is running");
})