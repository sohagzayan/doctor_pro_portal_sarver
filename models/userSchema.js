import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  email : {
      type : String ,

  },
  date : {
      type : Date ,
      default : Date.now
  }
})

const User = mongoose.model("User" , userSchema)

export default User