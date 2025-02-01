import express from 'express';
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking, approveBooking } from '../controllers/bookingController.js';
import authUser from '../middleware/authUser.js'; 
import { errorHandler } from '../middleware/errorHandler.js';


const bookingRouter = express.Router();

// Booking Routes

bookingRouter.post("/bookings", authUser, createBooking);

//get all bookings

bookingRouter.get("/bookings", authUser, getAllBookings);

//get booking by id

bookingRouter.get("/bookings/:id", authUser, getBookingById);
//update booking

bookingRouter.put("/bookings/:id", authUser, updateBooking);

//delete booking

bookingRouter.delete("/bookings/:id", authUser, deleteBooking);

//approve booking

bookingRouter.put("/bookings/:id/approve", authUser, approveBooking);



// Error handling
bookingRouter.use(errorHandler);

export default bookingRouter;