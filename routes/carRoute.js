import express from 'express';
import { getAllCars, getCarById, createCar, updateCar, deleteCar } from '../controllers/carController.js';

import authUser from '../middleware/authUser.js';

const carRouter = express.Router();





// Car Routes
carRouter.get("/cars", authUser, getAllCars);          // Get all cars
carRouter.get("/cars/:id", authUser, getCarById);      // Get a single car by ID

carRouter.post("/cars", authUser, createCar);         // Create a new car

carRouter.put("/cars/:id", authUser, updateCar);      // Update a car by ID
carRouter.delete("/cars/:id", authUser, deleteCar);   // Delete a car by ID



export default carRouter;
