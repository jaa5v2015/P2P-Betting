import express from "express";
import {v4 as uuidv4} from "uuid";

const router = express.Router();

const posts = [
    {
        text: "Fuck the colts and they mama bitch",
        sender: "Jacob Anderson",
        username: "Jaa5v",
        type: "Bet",
        id: "c7c747f7-690e-4b11-a113-8c3f000112fe"
    }
]



router.get('/', (req,res) =>{
    res.send(posts)
    console.log(posts)
})

router.post('/', (req, res)=>{
    const post = req.body
    const postId = uuidv4();

    const postWithId = {...post, id: postId}

    posts.push(postWithId)
    console.log(postWithId)
    res.send(`${postWithId}`)
})

router.get('/:id', (req, res) =>{
    const {id} = req.params

    const foundPost = posts.find((post) => post.id == id)
    res.send(foundPost)
})

export default router;