import {Course} from "@/model/course-model";
import {Category} from "@/model/category-model";

export async function getCourses() {
    try {
        const courses = await Course.find({}).populate({
            path: "category",
            model: Category
        });
        return courses;
    } catch (error) {
        console.log(error);
        
    }
}