import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCoursesDetails } from "@/queries/courses";
import { getUserByEmail } from "@/queries/users";
import { stripe } from "@/lib/stripe";
import {sendEmailNodemailer,sendEmail} from "@/lib/email";

const Success = async ({ searchParams: { session_id, courseId } }) => {
  console.log(session_id, courseId);
  if (!session_id) {
    throw new Error("Session Id not found")
  }

  //get user session 

  const userSession = await auth();

  //check if user email and exists is session exists go back to login page 

  if (!userSession?.user?.email) {
    redirect("/login");
  }
  //now get selected course data with this coursesId by using courses query 
  const course = await getCoursesDetails(courseId);
  //get login user information 
  const loginUserInfo = await getUserByEmail(userSession.user.email);
  //get  transstion data for stripe with session_id
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],

  });
  // console.log(checkoutSession["payment_intent"]);
  const paymentIntent = checkoutSession?.payment_intent;
  const paymentsStatus = paymentIntent?.status;

  //custom info 
  const customInfo = `${loginUserInfo?.first_Name} ${loginUserInfo?.last_Name}`;
  const customEmail = loginUserInfo?.email;
  const productInfo = course?.title;

  // console.log(customInfo, customEmail, productInfo);

  if (paymentsStatus == "succeeded") {
    //update enrolled course table data 


    //send email to user and admin and instatructor about the new enrollment
    await sendEmailNodemailer(customEmail, "New Enrollment", `Hello ${customInfo} You Successful enrolled ${productInfo} Course.`);
    await sendEmail(customEmail,"New Enrollment", `Hello ${customInfo} You Successful enrolled ${productInfo} Course.`);


  }else {
    redirect("/enroll-success");
  }



  // if(!session_id || !courseId) return <p>Something went wrong</p>

  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        <CircleCheck className="w-32 h-32 bg-green-500 rounded-full p-0 text-white" />
        {
          paymentsStatus == "succeeded" ? (
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Congratulations! <strong>{customInfo}</strong> You Successful enrolled {" " + productInfo + " "} Course.
            </h1>
            
          ) : (
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Oops! Something went wrong
            </h1>
          )
        }
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/courses">Browse Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="#">Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Success;
