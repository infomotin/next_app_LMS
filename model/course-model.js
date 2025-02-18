import mongoose, { Schema } from "mongoose";
import { Module } from "./modules-model";

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    modules:[{  type: Schema.ObjectId, ref: "Module" }],
    price: {
        type: Number,
        default: 0,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
        required: true
    },
    category: {type: Schema.ObjectId, ref: "Category",},
    instructor:{ type: Schema.ObjectId, ref: "User" },
    testimonials:[{  type: Schema.ObjectId, ref: "Testimonial" }],
    quizSet: {
        type: Schema.ObjectId,
        required: true
    },
    learning:{
        type: [String]
    },  
    createdOn:{
        required: true,
        default: Date.now(),
        type: Date
    },    
    modifiedOn:{
        required: true,
        default: Date.now(),
        type: Date
    },
    _v: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);