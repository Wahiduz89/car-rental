import express from 'express';
import { getAllCars, getCarById, createCar, updateCar, deleteCar } from '../controllers/carController.js';
import { errorMiddleware } from '../middleware/errorMiddleware.js';
import { authUser } from '../middleware/authUser.js';
const carRouter = express.Router();

carRouter.use(authUser);


// Routes
carRouter.get("/getAllCars", getAllCars);

carRouter.get("/getCarById/:id", getCarById);

carRouter.post("/createCar", createCar);

carRouter.put("/updateCar/:id", updateCar);

carRouter.delete("/deleteCar/:id", deleteCar);


// Error handling
carRouter.use(errorMiddleware);


export default carRouter;
