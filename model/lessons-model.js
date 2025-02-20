import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    published: {
        type: Boolean,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    video_url: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    access: {
        type: String,
        required: true
    }
    
}, { timestamps: true });
export const Lesson = mongoose.models.Lesson ?? mongoose.model("Lesson", lessonSchema);