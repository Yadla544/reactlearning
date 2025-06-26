import {User} from "../models/User.js";

export const createUser = async (req,res) =>{
    const {name, email} = req.body;

    try {
        if(!name || !email) {
            return res.status(400).json({message: "Name and email are required"});
        }
        const user = new User({name, email});
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: "Error creating user"});
    }
}