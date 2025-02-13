
import TestText from "@/components/ui/TestText";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  // console.log(courses[0]?.instructor?.socialMedia);
  // console.log(courses[1]?.modules?.lessonIds);
  return (
    
      <TestText />
    
  );
}
