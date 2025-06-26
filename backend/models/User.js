import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
    
});

export const User = mongoose.model("User", userScheme);


