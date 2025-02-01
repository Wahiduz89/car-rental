import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    type: { type: String, required: true },
    seats: { type: Number, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    available: { type: Boolean, default: true },
    images: [String]
});

const carModel = mongoose.models.car || mongoose.model("car", carSchema);
export default carModel;