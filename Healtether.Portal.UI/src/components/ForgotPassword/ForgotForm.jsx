import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GenerateNewPassword } from "../../api/user/loginApi";
import { ForgotPassSchema } from "../../Schema/authSignUp";

export default function ForgotFrom() {
  const phoneNumber = useSelector((state) => state.number.phoneNumber);
  const navigate = useNavigate()
   const inputRef = useRef(null);
  const [hide, setHide] = useState(false);
  const [chide , setChide] = useState(false);
const [phone , setphone ] = useState(phoneNumber.phone)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      
    }
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          phone:phone,
        }}
        validationSchema={ForgotPassSchema}
        onSubmit={(values) => {
            console.log(values)
          GenerateNewPassword(values).then((res)=>{
             if(res.data.success===true){
            console.log(res.data)
               toast.success('successfully completed')
               navigate('/login')
             }
          }).catch((err) => console.log(err))
        console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-14">
           
              <div className="md:w-[400px] w-[300px]   bg-slate-50 drop-shadow-lg border-zinc-50 h-12 rounded-md hover:drop-shadow-xl flex">
                <label htmlFor="password"></label>
                <Field
                  className="outline-none w-[420px] bg-slate-50  "
                  placeholder="Password"
                  name="password"
                  style={{ paddingLeft: "20px" }}
                  type={`${hide ? "title" : "password"}`}
                />
                <h1 className="text-2xl mt-3 mr-4 text-gray-500 " onClick={() => setHide(!hide)}>
                  {hide ? <FaEyeSlash /> : <FaEye />}
                </h1>
              </div>
              {errors.password && touched.password ? (
                  <div className="text-red-500 font-sans text-sm ">
                    {errors.password}
                  </div>
                ) : null}
                {/* cpassword */}
                  <div className="md:w-[400px] w-[300px] mt-3 bg-slate-50 drop-shadow-lg border-zinc-50 h-12 rounded-md hover:drop-shadow-xl flex">
                <label htmlFor="cpassword"></label>
                <Field
                  className="outline-none w-[420px] bg-slate-50  "
                  placeholder="confirm password"
                  name="cpassword"
                  style={{ paddingLeft: "20px" }}
                  type={`${chide ? "title" : "password"}`}
                />
                <h1 className="text-2xl mt-3 mr-4 text-gray-500 " onClick={() => setChide(!chide)}>
                  {chide ? <FaEyeSlash /> : <FaEye />}
                </h1>
              </div>
              {errors.cpassword && touched.cpassword ? (
                  <div className="text-red-500 font-sans text-sm ">
                    {errors.cpassword}
                  </div>
                ) : null}

              <button
                type="submit"
                className="md:w-[400px] w-[300px] mt-5 bg-blue-600 h-12 rounded-md text-white font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300 "
              >
                Change
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
