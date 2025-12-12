import express from "express";
import { User } from "./user.model.js";

const router = express.Router();

router.post('/', async(req, res)=>{
    const {name, password, avatar} = req.body;

    const result = await User.create({
        name,
        password,
        avatar
    });

    console.log(result);
    res.status(201).send({'id': result._id});
})


export default router;