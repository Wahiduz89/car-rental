import bookingModel from '../models/bookingModel.js';
import carModel from '../models/carModel.js';



// Create a new booking
const createBooking = async (req, res) => {
    try {
        const { userId, carId, startDate, endDate } = req.body;

        // Validate input
        if (!carId || !userId || !startDate || !endDate) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Check if car is available

        const car = await carModel.findById(carId);

        if (!car) {
            return res.json({ success: false, message: 'Car not found' });
        }

        // Check if car is already booked for the given dates
        const existingBooking = await bookingModel.findOne({
            car: carId,
            $or: [
                { startDate: { $lte: endDate }, endDate: { $gte: startDate } }
            ]
        });

        if (existingBooking) {

            return res.json({ success: false, message: "Car is not available for the selected dates" });

        }

        // Create new booking
        const newBooking = new bookingModel({
            user: userId,
            car: carId,
            startDate,
            endDate
        });

        await newBooking.save();
        res.json({ success: true, booking: newBooking });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};




const getAllBookings = async (req, res) => {

    try {
        const bookings = await bookingModel.find().populate("car").populate("user", "-password");

        res.json({ success: !!bookings.length, data: bookings, message: bookings.length ? null : "No bookings found" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



// Update a booking
const updateBooking = async (req, res) => {
    try {
        const { startDate, endDate, carId } = req.body;
       
        // Validate input
        if (!startDate || !endDate || !carId) {
            return res.json({ success: false, message: "Start date, end date, and car ID are required" });
        }

        const booking = await bookingModel.findById(req.params.id);

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }


        // Check if the new date range conflicts with other bookings
        const existingBooking = await bookingModel.findOne({
            _id: { $ne: booking._id },
            car: carId,
            $or: [
                { startDate: { $lte: new Date(endDate) }, endDate: { $gte: new Date(startDate) } }
            ],
        });

        if (existingBooking) {
            return res.json({ success: false, message: "Car is not available for the selected dates" });
        }

        const updatedBooking = await bookingModel.findByIdAndUpdate(
            booking._id,
            { startDate: new Date(startDate), endDate: new Date(endDate), car: carId },
            { new: true }
        ).populate('car').populate('user', '-password');

        if (!updatedBooking) {
            return res.json({ success: false, message: "booking not found" });
        }

        res.json({ success: true, booking: updatedBooking });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Get a specific booking by ID
const getBookingById = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id).populate('car').populate('user', '-password');

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        res.json({ success: true, data: booking });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Delete booking
const deleteBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id);

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        await bookingModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Booking deleted successfully" });

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

             // Check if booking is already confirmed
             if (booking.status === 'confirmed') {
                return res.json({ success: false, message: "Booking is already confirmed" });
            }
        booking.status = 'confirmed';
        await booking.save();
        res.json({ success: true, booking, message: "Booking confirmed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking , approveBooking}











