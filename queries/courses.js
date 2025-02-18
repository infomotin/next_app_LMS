import {Course} from "@/model/course-model";
import {Category} from "@/model/category-model";
import {User} from "@/model/users-model";
import {Testimonial} from "@/model/testimonial-model";
import {Module} from "@/model/modules-model";
import {replaceMongoIdInArray,replaceMongoIdInObject} from "@/lib/convertData";
export async function getCourses() {
    try {
        const courses = await Course.find({}).select(["title", "subtitle", "thumbnail","modules","instructor","category","price"])
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
        }).lean();
        return replaceMongoIdInArray(courses);
    } catch (error) {
        console.log(error);
        
    } 
}

export async function getCoursesDetails(id) {
    console.log('inside getCoursesDetails:',id);
    try {
        const course = await Course.findById(id).select(["title", "subtitle", "thumbnail","modules","instructor","category","price"])
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
            model: Testimonial,
            populate: {
                path: "user",
                model: User
            }
        })
        .populate({
            path: "modules",
            model: Module
        }).lean();
        return replaceMongoIdInObject(course);
    } catch (error) {
        console.log(error); 
    } 
}