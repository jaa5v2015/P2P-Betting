import express from "express";
import bodyParser from "body-parser";
import users from "./routes/user.js";
import posts from "./routes/feed.js"; 

//Tutorial
//https://www.youtube.com/watch?v=l8WPWK9mS5M

const api = express()
const PORT = 5000

api.use(bodyParser.json())

api.use('/users', users)

api.use('/posts', posts)

//Create Routes
api.get('/', (req, res) =>{
    res.send("Homepage")
})


api.listen(PORT, () => console.log("API RUNNING"))