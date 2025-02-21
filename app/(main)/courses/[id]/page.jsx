import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCoursesDetails } from "@/queries/courses";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";

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
 