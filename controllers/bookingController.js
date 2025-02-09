
import bookingModel from '../models/bookingModel.js';
import carModel from '../models/carModel.js';

const createBooking = async (req, res) => {
    try {
        // Destructure required fields from the request body
        const { userId, carId, startDate, endDate } = req.body;

        // Validate input fields
        if (!carId || !userId || !startDate || !endDate) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Check if the car exists
        const car = await carModel.findById(carId);
        if (!car) {
            return res.json({ success: false, message: 'Car not found' });
        }

        // Convert input date strings to Date objects for accurate comparison
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check if the car is already booked for overlapping dates
        const existingBooking = await bookingModel.findOne({
            car: carId,
            $or: [
                { startDate: { $lte: end }, endDate: { $gte: start } }
            ]
        });

        if (existingBooking) {
            return res.json({ success: false, message: "Car is not available for the selected dates" });
        }

        // Create a new booking document with validated and formatted data
        const newBooking = new bookingModel({
            user: userId,
            car: carId,
            startDate: start,
            endDate: end
        });

        // Save the booking and send a success response
        await newBooking.save();
        return res.json({ success: true, booking: newBooking });
    } catch (error) {
        // Log the error and send an error response
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};


const getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find()
            .populate("car")
            .populate("user", "-password");

        res.json({
            success: !!bookings.length,
            data: bookings,
            message: bookings.length ? null : "No bookings found"
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const updateBooking = async (req, res) => {
    try {
        const { startDate, endDate, carId } = req.body;
       
        // Validate required input fields
        if (!startDate || !endDate || !carId) {
            return res.json({ success: false, message: "Start date, end date, and car ID are required" });
        }

        // Find the existing booking by ID
        const booking = await bookingModel.findById(req.params.id);
        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        // Check for conflicting bookings with the new date range (excluding current booking)
        const existingBooking = await bookingModel.findOne({
            _id: { $ne: booking._id },
            car: carId,
            $or: [
                { startDate: { $lt: new Date(endDate) }, endDate: { $gt: new Date(startDate) } }
            ],
        });

        if (existingBooking) {
            return res.json({ success: false, message: "Car is not available for the selected dates" });
        }

        // Update the booking with new dates and car ID, and populate the related fields
        const updatedBooking = await bookingModel.findByIdAndUpdate(
            booking._id,
            { startDate: new Date(startDate), endDate: new Date(endDate), car: carId },
            { new: true }
        ).populate('car').populate('user', '-password');

        if (!updatedBooking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        res.json({ success: true, booking: updatedBooking });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getBookingById = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id)
            .populate('car')
            .populate('user', '-password');

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        res.json({ success: true, data: booking });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const deleteBooking = async (req, res) => {
    try {
        // Find the booking to be deleted
        const booking = await bookingModel.findById(req.params.id);
        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        // Delete the booking and send a success response
        await bookingModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Booking deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id);
        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        // Prevent duplicate cancellations
        if (booking.status === "cancelled") {
            return res.json({ success: false, message: "Booking is already cancelled" });
        }

       
        if (!req.user || (req.user.role !== "admin" && booking.user.toString() !== req.user._id.toString())) {
            return res.json({ success: false, message: "Unauthorized to cancel this booking" });
        }

       
        booking.status = "cancelled";
        await booking.save();

        res.json({ success: true, message: "Booking cancelled successfully", booking });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const checkCarAvailability = async (req, res) => {
    try {
        const { carId, startDate, endDate } = req.body;
        
        // Validate input fields
        if (!carId || !startDate || !endDate) {
            return res.json({ success: false, message: "Car ID, start date, and end date are required" });
        }

        // Convert provided dates into Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check if the car exists in the system
        const car = await carModel.findById(carId);
        if (!car) {
            return res.json({ success: false, message: "Car not found" });
        }

        // Check if there is an existing booking for overlapping dates
        const existingBooking = await bookingModel.findOne({
            car: carId,
            $or: [
                { startDate: { $lte: end }, endDate: { $gte: start } }
            ]
        });

        if (existingBooking) {
            return res.json({ success: false, message: "Car is not available for the selected dates" });
        }

        res.json({ success: true, message: "Car is available for the selected dates" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const approveBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id);
        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        // Prevent duplicate confirmations
        if (booking.status === 'confirmed') {
            return res.json({ success: false, message: "Booking is already confirmed" });
        }
        
        // Update booking status and save the change
        booking.status = 'confirmed';
        await booking.save();
        res.json({ success: true, booking, message: "Booking confirmed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
    cancelBooking,
    approveBooking,
    checkCarAvailability
};
