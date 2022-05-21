import express from 'express'
import User from '../models/userSchema.js'
const userRoute = express.Router()

userRoute.put('/:email' , async(req , res)=>{
    try {
       const email = req.params.email
       const user = req.body
       const filter = {email : email}
       const options = {upsert : true}  
       const updateDoc = {
           $set : user
       }
       const result = await User.updateOne(filter , updateDoc , options)
       res.send(result)
    } catch (error) {
        res.send(error)
    }
})

export default userRoute