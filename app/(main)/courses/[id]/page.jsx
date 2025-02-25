import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCoursesDetails } from "@/queries/courses";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";

/**
 * A page that displays a single course.
 * 
 * @param {Object} params - An object containing the id of the course to display.
 * 
 * @returns {JSX.Element} A JSX element containing the course details, testimonials, and related courses.
 */
const SingleCoursePage = async ({ params:{id}}) => {
    const course = await getCoursesDetails(id);
    return (
        <>
            <CourseDetailsIntro  
                title={course?.title}
                subtitle={course?.subtitle}
                thumbnail={course?.thumbnail}
                price={course}

            />
            <CourseDetails course={course} />
            {
                course?.testimonials && (
                    <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />
                )
            }
             
            <RelatedCourses />
        </>
    );
};
export default SingleCoursePage;
 