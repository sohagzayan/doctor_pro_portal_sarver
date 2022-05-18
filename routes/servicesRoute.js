import express from 'express'
import Service from '../models/serviceSchema.js'
const serviceRoute = express.Router()


serviceRoute.get('/' , async (req , res)=>{
 
    try {
        const allService = await Service.find()
        res.send(allService)
    } catch (error) {
        res.send({error : error.message})
    }

})

serviceRoute.post('/' , async (req , res)=>{
 
    try {
        const newService = await  Service(req.body)
        await newService.save()
        res.send(newService)
    } catch (error) {
        res.send({error : error.message})
    }

})



export default serviceRoute

