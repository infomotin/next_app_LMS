import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    },
    __v: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    socialMedia: {
        type:Object,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    },
    designation: {
        type: String,
        required: false
    },
   
    }, { timestamps: true });

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);