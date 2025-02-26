import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Course } from "@/model/course-model";
import { Enrollment } from "@/model/enrollment-model"; 

export async function getEnrollmentsForCourse(courseId){
    const enrollments = await Enrollment.find({course: courseId}).lean();
    return replaceMongoIdInArray(enrollments);
}

export async function enrollmentsForCourse(courseId,userId,paymentMethod){
    const newEnrollment ={
        course:courseId,
        student:userId,
        method:paymentMethod,
        enrollment_date:Date.now(),
        status:'not-started',

    }

    try {
        const respons = await Enrollment.create(newEnrollment);
        return respons;
    } catch (error) {
        throw new Error(error);
    }
}