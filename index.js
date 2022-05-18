import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from "express";
import MongoDBConnection from './connections/MongoDBConnection.js';
import serviceRoute from './routes/servicesRoute.js';
dotenv.config()
const app = express()
const port = process.env.PORT || 5000
MongoDBConnection()

app.use(bodyParser.json())
app.use('/api/service' , serviceRoute)






/* == server == */

app.listen(port,()=>{
    console.log(`server is Running ${port}`);
})