"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { changePassword } from '@/app/actions/account';
import { toast } from 'sonner';


const ChangePassword = ({ userInfo }) => {

	const [passwordState, setPasswordState] = useState({
		"oldPassword": " ",
		"newPassword": " ",

	});
	const handleChange = (event) => {
		const key = event.target.name;
		const value = event.target.value;
		setPasswordState({
			...passwordState, [key]: value
		});
	}
	// console.log(infoState);
	const handleUpdatePassword = async (event)=>{
		event.preventDefault();
		try {
			await changePassword(userInfo?.email,passwordState?.oldPassword,passwordState?.newPassword);
			toast.success("User Password updated successfully");
		} catch (error) {
			toast.error(`Error:${error.message}`);
		}
	}


	return (
		<div>
			<h5 className="text-lg font-semibold mb-4">
				Change password :
			</h5>
			<form onSubmit={handleUpdatePassword}>
				<div className="grid grid-cols-1 gap-5">
					<div>
						<Label className="mb-2 block">Old password :</Label>
						<Input
							type="password"
							id="oldPassword"
							name="oldPassword"
							onChange={handleChange}
							placeholder="Old password"
							required=""
						/>
					</div>
					<div>
						<Label className="mb-2 block">New password :</Label>
						<Input
							type="password"
							placeholder="New password"
							id="newPassword"
							name="newPassword"
							onChange={handleChange}
							required=""
						/>
					</div>
					<div>
						<Label className="mb-2 block">
							Re-type New password :
						</Label>
						<Input
							type="password"
							placeholder="Re-type New password"
							required=""
						/>
					</div>
				</div>
				{/*end grid*/}
				<Button className="mt-5" type="submit">
					Save password
				</Button>
			</form>
		</div>
	);
};

export default ChangePassword;