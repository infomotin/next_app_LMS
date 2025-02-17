import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCoursesDetails } from "@/queries/courses";

const SingleCoursePage = async ({ params:{id}}) => {
    // console.log(id);
    const course = await getCoursesDetails(id);
    console.log(course);
    return (
        <>
            <CourseDetailsIntro 
                title={course?.title}
                subtitle={course?.subtitle}
                thumbnail={course?.thumbnail}
            />
            <CourseDetails />
            <Testimonials />
            <RelatedCourses />
        </>
    );
};
export default SingleCoursePage;
 