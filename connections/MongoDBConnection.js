import mongoose from 'mongoose';
const MongoDbConnection = async ()=>{
     try {
         mongoose.connect(process.env.MONGODB_URL)
         console.log("mongodb connection success..");
     } catch (error) {
         console.log("mongoDB Connection Failed !");
     }
}

export default MongoDbConnection