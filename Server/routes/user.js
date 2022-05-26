import express from "express";
import {v4 as uuidv4} from "uuid";

const router = express.Router();

const users = [
    {
        "username": "Jaa5v",
        "password": "1234",
        "followers": [],
        "info": {
          "bio": " ",
          "profilePic": " ",
          "name": " Jacob Anderson"
        },
        "following": [],
        "posts": []
      },
      {
        "username": "CURK",
        "password": "1234",
        "followers": [],
        "info": {
          "bio": " ",
          "profilePic": " ",
          "name": "Curtis Hudson"
        },
        "following": [],
        "posts": []
      }
]



router.get('/', (req,res) =>{
    res.send(users)
    console.log(users)
})



router.post('/', (req, res)=>{
    const user = req.body
    console.log(req.body)
    const userId = uuidv4();

    const userWithId = {...user, id: userId}

    users.push(userWithId)
    res.send(`${userWithId}`)
})


router.get('/:id', (req, res) =>{
  const {id} = req.params

  const foundUser = users.find((user) => user.id == id)
  res.send(foundUser)
})

export default router;