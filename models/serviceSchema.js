import mongoose from 'mongoose'

const serviceSchema =  mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    slots : {
        type : Array 
    }
})


const Service = mongoose.model("Service",serviceSchema)

export default Service