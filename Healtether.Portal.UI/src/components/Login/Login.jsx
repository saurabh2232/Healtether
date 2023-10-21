import React  from "react";
import leftimg from "../../assets/new1-f04eeefd.jpg";
import logo from "../../assets/newlogo-bce991c9.png";
import LoginForm from "../AuthForm/LoginForm";
import { NavLink,Navigate } from 'react-router-dom'
export default function Login() {
  const token = localStorage.getItem("user");
  return token ? (
    <Navigate to={'/'}/>
  ) : (
    <>
      <div className="bg-slate-50 w-full  h-screen flex md:flex-row flex-col">
        <div className="md:w-[600px] md:h-screen  bg-white md:rounded-tr-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-1/2 md:py-5 py-7 " src={logo} alt="img" />
            <img className="w-3/4" src={leftimg} alt="img" />
          </div>
        </div>
        <div className="md:w-[800px] mt-4 md:mt-0">
          <div className="md:ml-[150px] ml-6">
            <h1 className="md:text-5xl text-4xl font-bold  text-purple-950 md:mt-[230px]  font-sans">
              Sign In
            </h1>
            <h1 className="font-sans mt-2 text-lg  text-purple-900/70">
              Login with your Phone number or Email
            </h1>
          </div>
             <LoginForm/>
             <div className="mt-5 md:ml-[150px] ml-4">
           
             <NavLink to={'/forgotPass'}>
              <h1 className="text-blue-600 font-sans text-md cursor-pointer">Forgot Password? </h1>
             </NavLink>
              <h1 className="text-black font-sans text-md ">Don’t have an account? 
              <NavLink to={'/signup'}>
              <span className="text-teal-600 cursor-pointer">&nbsp;Sign up</span>
              </NavLink>
              
                </h1>
             </div>
        </div>
      </div>
    </>
  );
}
