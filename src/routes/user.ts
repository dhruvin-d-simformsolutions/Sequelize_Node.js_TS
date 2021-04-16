import { User } from "../Models/user";
import express from "express";
import cors from 'cors';
const router = express.Router()

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// router.post('/createUser', async (req, res) => {
//     const { firstName, lastName } = req.body;
//     console.log(req.body);
//     try {
//         User.sync({ logging: console.log })
//             .then(() => {
//                 User.create({
//                     firstName,
//                     lastName
//                 })
//             })
//             .then((user) => {
//                 res.status(200).send(user)
//                 console.log(user);
                
//             })
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

router.post('/createUser',async (req,res,next)=>{
    const { firstName, lastName } = req.body;
    try {
        await User.sync({logging : console.log})
        await User.create({firstName,lastName})
        res.status(200).send(req.headers)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/abc',(req,res)=>{
    res.status(200).send(req.headers)
})
export {router}