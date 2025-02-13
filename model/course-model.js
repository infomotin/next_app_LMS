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
    modules: {
        type: Schema.ObjectId,ref:"Module",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    category: {type: Schema.ObjectId, ref: "Category",},
    instructor: {
        type: Schema.ObjectId, ref: "User",
        required: true
    },
    testimonials: [{
        type: Schema.ObjectId, ref: "Testimonial",
        required: true
    }],
    quizSet: {
        type: Schema.ObjectId,
        required: true
    },
    learning: {
        type: [String],
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    updatedOn: {
        type: Date,
        required: true
    },
    _v: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);