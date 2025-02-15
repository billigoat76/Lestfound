"use client";
import Image from "next/image"
import logo from "@/public/logo.png"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import UserTypeForm from "./UserTypeForm";
type userSelectionType = "company" | "jobseeker" | null;
const OnBoardingForm = () => {
    const[step,setStep] = useState(1);
    const[userType,setUserType] = useState<userSelectionType>(null);
    function handleUserTypeSelection(type : userSelectionType){
        setUserType(type);
        setStep(2);     
    }
    function renderStep(step : number){
        switch(step){
            case 1 : 
            return <UserTypeForm/>


            case 2 :
            return userType==="company"?  <p>User is company</p> : "user is jobseeker";

            default:
                return null;
        }
    }
  return (
    <>
        <div className="flex items-center gap-4 mb-10">
            <Image src={logo} alt="logo" width={40} height={40}/>
            <h1 className="text-4xl font-bold">Lest<span className="text-primary">Found</span></h1>
        </div>
        <Card className="max-w-lg w-full ">
            <CardContent className="p-6">
                    {renderStep(step)}
            </CardContent>
        </Card>
    </>
  )
}

export default OnBoardingForm