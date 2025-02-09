
import carModel from '../models/carModel.js';



// Get all cars
const getAllCars = async (req, res) => {
    try {

        const cars = await carModel.find();
        res.json({ success: true, data: cars });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
};


// Get car by ID
const getCarById = async (req, res) => {
    try {

        const { carId } = req.params;
        const car = await carModel.findById(carId);

        if (!car) {
            return res.json({ success: false, message: "Car not found" });
        }

        res.json({ success: true, data: car });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Create new car
const createCar = async (req, res) => {

    try {

        const { make, model, year, pricePerDay, transmission, fuelType, available } = req.body;

        if (!make || !model || !year || !pricePerDay || !transmission || !fuelType || available === undefined) {
            return res.json({ success: false, message: "All fields are required" });
        }

        if (isNaN(year) || year < 1886 || year > new Date().getFullYear()) {
            return res.json({ success: false, message: "Invalid year" });

        }

        //validate price
        if (isNaN(pricePerDay) || pricePerDay < 0) {
            return res.json({ success: false, message: "Invalid price" });
        }

        const car = new carModel({
            make,
            model,
            year,
            pricePerDay,
            transmission,
            fuelType,
            available
        });

        const newCar = await car.save();
        res.json({ success: true, data: newCar });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Update car
const updateCar = async (req, res) => {
    try {

        const { id } = req.params;
      
 // Check if the car exists
 const car = await carModel.findById(id);

        if (!car)                        
        return res.json({ success: false, message: 'Car not found' });



        const updates = {
            make: req.body.make || car.make,
            model: req.body.model || car.model,
            year: req.body.year || car.year,
            pricePerDay: req.body.pricePerDay || car.pricePerDay,
            transmission: req.body.transmission || car.transmission,
            fuelType: req.body.fuelType || car.fuelType,
            available: req.body.available !== undefined ? req.body.available : car.available
        };

       // Validate year if it's being updated
        if (updates.year && (isNaN(updates.year) || updates.year < 1886 || updates.year > new Date().getFullYear())) {
            return res.json({ success: false, message: "Invalid year" });
        }

        // Validate price if it's being updated
        if (updates.pricePerDay && (isNaN(updates.pricePerDay) || updates.pricePerDay < 0)) {
            return res.json({ success: false, message: "Invalid price" });
        }


        const updatedCar = await carModel.findByIdAndUpdate(id, updates, { new: true });
        res.json({ success: true, updatedCar });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// New: Car Listing API with filters and pagination
const carListing = async (req, res) => {
    try {
        // Extract filters from query parameters
        let { available, make, model, minPrice, maxPrice, page, limit } = req.query;

        const filter = {};

        if (available !== undefined) {
            filter.available = available === 'true' || available === true;
        }
        if (make) {
            filter.make = make;
        }
        if (model) {
            filter.model = model;
        }
        if (minPrice !== undefined || maxPrice !== undefined) {
            filter.pricePerDay = {};
            if (minPrice !== undefined) {
                filter.pricePerDay.$gte = Number(minPrice);
            }
            if (maxPrice !== undefined) {
                filter.pricePerDay.$lte = Number(maxPrice);
            }
        }

        // Set up pagination defaults
        page = Number(page) || 1;
        limit = Number(limit) || 10;
        const skip = (page - 1) * limit;

        // Get total count and paginated data
        const total = await carModel.countDocuments(filter);
        const cars = await carModel.find(filter).skip(skip).limit(limit);

        res.json({ success: true, total, page, limit, data: cars });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Delete car
const deleteCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndDelete(req.params.id);
      
        if (!car) {
            return res.json({ success: false, message: 'Car not found' });
        }
      
        res.json({ success: true, message: 'Car deleted successfully' });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { getAllCars, getCarById, createCar, updateCar, deleteCar, carListing };