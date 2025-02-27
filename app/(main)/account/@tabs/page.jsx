import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import PersonalDetails from "../component/personal-details";
import ContractInfo from "../component/contract-info";
import ChangePassword from "../component/change-password";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/queries/users";

async function Profile() {
	const userSession = await auth();
	//if user not login in 
	if (!userSession?.user) {
		redirect("/login");
	  }
	const loginUserInfo = await getUserByEmail(userSession?.user?.email);
	// console.log(loginUserInfo);
	// const fullName = 
	return (
		<>
			<PersonalDetails userInfo={loginUserInfo} />
			<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<ContractInfo />
					{/*end col*/}
					<ChangePassword />
					{/*end col*/}
				</div>
				{/*end row*/}
			</div>
		</>
	);
}

export default Profile;
