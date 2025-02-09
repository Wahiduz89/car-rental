import express from 'express';
import { registerUser, loginUser, getProfile, updateUserProfile, deleteUserProfile } from '../controllers/userController.js';
import authUser from '../middleware/authUser.js';


const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/getProfile", authUser, getProfile);

userRouter.put("/updateProfile", authUser, updateUserProfile);

userRouter.delete("/deleteProfile", authUser, deleteUserProfile);



export default userRouter;