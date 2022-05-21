import express from "express";
import Booking from "../models/bookingSchema.js";

const bookingRoutes = express.Router();




bookingRoutes.post("/", async (req, res) => {
  try {
   
    const booking = req.body;
    const query = {
      treatment: booking.treatment,
      date: booking.date,
      patient: booking.patient,
    };
    const exits = await Booking.findOne(query);
    if (exits) {
      return res.send({ success: false, booking: exits });
    }
    const newBooking = await Booking(booking);
    await newBooking.save();
    res.status(200).json({ success: true, newBooking });
  } catch (error) {
    res.send({ error: error.message });
  }
});




bookingRoutes.get("/", async (req, res) => {
  const patient = req.query.patient
  const query  = {patient : patient}
  try {
    const allDataPerUser = await Booking.find(query)
     res.send(allDataPerUser)
   } catch (error) {
     res.send(error)
   }
});

export default bookingRoutes;
