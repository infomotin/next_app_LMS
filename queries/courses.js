import {Course} from "@/model/course-model";
import {Category} from "@/model/category-model";
import {User} from "@/model/users-model";
import {Testimonial} from "@/model/testimonial-model";
import {Module} from "@/model/modules-model";
export async function getCourses() {
    try {
        const courses = await Course.find({})
        .populate({
            path: "category",
            model: Category
        })
        .populate({
            path: "instructor",
            model: User
        })
        .populate({
            path: "testimonials",
            model: Testimonial
        })
        .populate({
            path: "modules",
            model: Module
        });
        return courses;
    } catch (error) {
        console.log(error);
        
    }
}