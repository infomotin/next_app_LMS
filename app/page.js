
import TestText from "@/components/ui/TestText";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  return (
    
      <TestText />
    
  );
}
