import {Course} from "@/model/course-model";

export async function getCourses() {
    try {
        const courses = await Course.find({});
        return courses;
    } catch (error) {
        console.log(error);
        
    }
}