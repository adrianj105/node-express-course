const express = require('express');
const app = express();
const port = process.env.port || 8000;


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

app.get('/users/:id', (req,res) => {
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})



app.listen(port, () => {
    console.log("Server is running");
})