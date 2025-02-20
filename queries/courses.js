import {Course} from "@/model/course-model";
import {Category} from "@/model/category-model";
import {User} from "@/model/users-model";
import {Testimonial} from "@/model/testimonial-model";
import {Module} from "@/model/modules-model";
import {replaceMongoIdInArray,replaceMongoIdInObject} from "@/lib/convertData";
import { getEnrollmentsForCourse } from "./enrollments";
import { getTestimonialsForCourse } from "./testimonials";
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
        const course = await Course.findById(id)
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



export async function getCourseDetailsByInstructor(instructorId){
    const courses = await Course.find({instructor: instructorId}).lean();

    const enrollments = await Promise.all(courses.map(async (course) => {
        const enrollment = await getEnrollmentsForCourse(course._id.toString());
        return enrollment;
    }));
    const totalEnrollments = enrollments.reduce((item, currentValue) => {
        return item.length + currentValue.length;
    });
    const testimonials = await Promise.all(courses.map(async (course) => {
        const testimonial = await getTestimonialsForCourse(course._id.toString());
        return testimonial;
    }));

    const totalTestimonials = testimonials.flat();

    const avgRating =  (totalTestimonials.reduce((item, currentValue) => {
        return item + currentValue.rating;
    }, 0)) / totalTestimonials.length;

    
    return { 
        "courses":courses.length, 
        "enrollments":totalEnrollments, 
        "reviews":totalTestimonials.length, 
        "avgRating":avgRating.toPrecision(2) 
    }; 
}
 