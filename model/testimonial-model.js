import mongoose, { Schema } from "mongoose";
const testiMonialschema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    courseId: {
        type: Schema.ObjectId,ref:"Course",
        required: true
    },
    user:{  type: Schema.ObjectId, ref: "User" },


}, { timestamps: true });
export const Testimonial = mongoose.models.Testimonial ?? mongoose.model("Testimonial", testiMonialschema);