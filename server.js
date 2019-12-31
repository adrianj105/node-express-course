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


app.listen(port, () => {
    console.log("Server is running");
})