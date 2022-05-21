import express from 'express'
import Booking from '../models/bookingSchema.js'
import Services from '../models/serviceSchema.js'
const serviceRoute = express.Router()



serviceRoute.post('/' , async (req , res)=>{
 
    try {
        const newService = await  Service(req.body)
        await newService.save()
        res.send(newService)
    } catch (error) {
        res.send({error : error.message})
    }

})


serviceRoute.get('/' , async (req , res)=>{
    const date = req.query.date 
    const services = await Services.find()
    const query = {date : date}
    const booking = await Booking.find(query)

    services.forEach(service => {
        const serviceBooking = booking.filter(b => b.treatment === service.name)
        const booked = serviceBooking.map((s => s.slot))
        const available = service.slots.filter(s => !booked.includes(s))
        service.slots = available
    })
    console.log(services);
    res.send(services)
})


export default serviceRoute

