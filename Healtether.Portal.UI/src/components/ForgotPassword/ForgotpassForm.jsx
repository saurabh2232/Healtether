import React, { useRef, useEffect } from "react";
import Brand from "../../assets/healtehter3.png";
import leftimg from "../../assets/loginAsset.png";
import otpimg from "../../assets/otp.png";
import ForgotForm from "./ForgotForm";
export default function ForgotPassForm() {
  
  return (
    <>
      <div className="bg-white h-screen w-full">
        
        <div className="flex justify-center items-center py-5">
          <img className="w-[150px] " src={Brand} alt="logo_png" />
        </div>
        
        <div className="flex justify-center items-center -mt-4">
          <div className="bg-slate-100 md:h-[500px] md:w-2/3 h-[850px] w-[350px] flex md:flex-row flex-col  rounded-xl shadow-black/20 shadow-xl">
            <div className=" md:w-[500px]">
              <img
                className="md:w-[400px] md:ml-7 ml-3 mt-12"
                src={leftimg}
                alt="img-png"
              />
            </div>
            <div className="md:w-[500px] -mt-4 ml-4">
              <h1 className="font-sans text-2xl text-purple-800 font-bold  py-6  ">
              Change or reset your password
              </h1>
             
                 <ForgotForm/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
