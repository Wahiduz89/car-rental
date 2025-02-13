import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";



// API to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        // checking for all data to register user
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' })

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to login user
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' })
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// API to get user profile data
const getProfile = async (req, res) => {

    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
};



// API to update user profile
const updateUserProfile = async (req, res) => {
    try {
        const { userId, ...updates } = req.body;
        
        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, message: 'Profile Updated' })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to delete user profile
const deleteUserProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        await userModel.findByIdAndDelete(userId);
        res.json({ success: true, message: 'User Deleted' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}



export { registerUser, loginUser, getProfile , updateUserProfile, deleteUserProfile };