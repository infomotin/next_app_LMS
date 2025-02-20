import mongoose, { Schema } from "mongoose";



const moduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    course: {
        type: Schema.ObjectId,ref:"Course",
        required: true
    },
    lessonIds: {
        type: Schema.ObjectId,ref:"Lesson",
        required: true
    },
    duration: {
        type: Number,
        required: true
    }

}, { timestamps: true });

    export const Module = mongoose.models.Module ?? mongoose.model("Module", moduleSchema);