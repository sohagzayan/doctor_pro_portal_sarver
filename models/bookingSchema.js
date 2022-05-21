import mongoose from 'mongoose'

const bookingSchema =  mongoose.Schema({
      treatmentId: {
            type : String
      },
      treatment: {
        type : String
      },
      date: {
        type : String
      },
      slot : {
        type : String
      },
      patient : {
        type : String
      },
      patientName : {
        type : String
      },
      phone : {
        type : String
      }
})


const Booking = mongoose.model("Booking",bookingSchema)

export default Booking