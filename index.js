import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import MongoDBConnection from './connections/MongoDBConnection.js';
import bookingRoutes from './routes/bookingRoutes.js';
import serviceRoute from './routes/servicesRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
MongoDBConnection()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/service' , serviceRoute)
app.use('/api/booking' , bookingRoutes)
app.use('/api/user' , userRoute)






/* == server == */

app.listen(port,()=>{
    console.log(`server is Running ${port}`);
})