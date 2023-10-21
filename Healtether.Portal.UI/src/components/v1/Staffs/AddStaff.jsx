import React from "react";
import { useState , useRef} from "react";
import defaultUploadImg from "../../../../assets/upload_image.jpg"
import { Form, redirect } from "react-router-dom";
import { StaffSubmitApi } from "../../../api/staff/staff";

const WrongValuesPopup=({componentShow,setComponentShow})=>{
    return(
        componentShow?
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Please fill the red boxes correctly
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setComponentShow(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>:null
    )
}

export async function staffAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await StaffSubmitApi( updates);
    return redirect(`/managestaffs`);
  }

export default function AddStaff() {
    const [imgSrc,setImgSrc]=useState(defaultUploadImg);

    // binding of all fields 
    const [nameValue,setNameValue]=useState();
    const [specializationValue,setSpecializationValue]=useState();
    const [roleValue,setRoleValue]=useState();
    const [birthdayValue,setBirthdayValue]=useState();
    const [ageValue,setAgeValue]=useState();
    const [genderValue,setGenderValue]=useState("Male");
    const [upiIdValue,setUpiIdValue]=useState();
    const [bankNameValue,setBankNameValue]=useState();
    const [accountValue,setAccountValue]=useState();
    const [ifscValue,setIfscValue]=useState();
    const [accountNameValue,setAccountNameValue]=useState();
    const [documentTypeValue,setDocumentTypeValue]=useState();
    const [documentNumberValue,setDocumentNumberValue]=useState();
    const [otherDocumentValue,setOtherDocumentValue]=useState();
    const [mobileValue,setMobileValue]=useState();
    const [whatsappValue,setWhatsappValue]=useState();
    const [emailValue,setEmailValue]=useState();
    const [addressValue,setAddressValue]=useState();
    const [wrongValuePopupShow,setWrongValuePopupShow]=useState(false);
    const ageRef=useRef("");
    
    const [docUploadName,setDocUploadName]=useState([]);
    const imageRef=useRef("");
    const docUploadRef=useRef("");
    function profilePhotoClicked(){
        imageRef.current.click()
    }
    function profilePhotoUpdate(e){
        setImgSrc(URL.createObjectURL(e.target.files[0]))
    }
    function uploadDocumentClicked(){
        docUploadRef.current.click()
    }
    function docUploadUpdate(e){
        setOtherDocumentValue(e.target.files)
        let docnames=[]
        for(var i=0;i<e.target.files.length;i++){
            docnames[i]=e.target.files[i]
        }
        setDocUploadName(docnames)
    }
    function submitCheck(e){
        console.log(birthdayValue)
        console.log(ageValue)
        console.log(genderValue)
        console.log(upiIdValue)
        console.log(bankNameValue)
        console.log(accountValue)
        console.log(ifscValue)
        console.log(accountNameValue)
        console.log(documentTypeValue)
        console.log(documentNumberValue)
        console.log(otherDocumentValue)
        console.log(mobileValue)
        console.log(whatsappValue)
        console.log(emailValue)
        console.log(addressValue)

        if(!birthdayValue || !ageValue || !genderValue || !mobileValue || !whatsappValue || !addressValue){
            setWrongValuePopupShow(true)
        }
        
    }
        return (
            <>
            <WrongValuesPopup componentShow={wrongValuePopupShow} setComponentShow={setWrongValuePopupShow} />
            <Form className="md:flex flex-wrap font-['arimo'] mt-5 lg:divide-x" method="post">
            <div className="lg:w-1/2 sm:w-full lg:px-5">
            <div className="flex flex-row">
                <div>
                    <img className="h-[180px] w-[180px] rounded-[50%] object-cover" src={imgSrc} alt="Set Image" onClick={profilePhotoClicked} />
                    <input className="hidden" name="profilepic" type="file" ref={imageRef} onChange={profilePhotoUpdate}/>
                </div>
                <div className="flex flex-col justify-between pl-8 w-[70%]">
                    <p className="bg-gray-300 p-1 w-fit text-xs rounded-md px-2 mb-2">Admin</p>
                   <div><input className="rounded-lg h-16 text-3xl w-[100%]" name="name" type="text" onChange={(e)=>{setNameValue(e.target.value)}} placeholder="Name" /></div> 
                   <div className="mt-1"><input className="rounded-lg h-8 w-[100%]" name="specialization" type="text" onChange={(e)=>{setSpecializationValue(e.target.value)}} placeholder="Specialization" /></div> 
                   <div className="mt-1"> <input className="rounded-lg h-8 w-[100%]" name="role" type="text" onChange={(e)=>{setRoleValue(e.target.value)}} placeholder="Role"/></div> 
                    <button className="text-xs w-fit bg-teal-500 text-white rounded-md py-1 px-2 mt-2" type="submit">Save</button>
                </div>
            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

            <div className="text-base font-semibold tracking-wider">PERSONAL DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="birthday" className="font-semibold text-base  text-[#009394]">Birthday <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="birthday" name="birthday" type="date" onChange={(e)=>{setBirthdayValue(e.target.value);ageRef.current.value=new Date().getFullYear()-new Date(birthdayValue).getFullYear(); ageRef.current.setAttribute("disabled",'');setAgeValue(ageRef.current.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="age" className="font-semibold text-base  text-[#009394]">Age <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="age" name="age" ref={ageRef} type="number" onChange={(e)=>{console.log("Age changed");setAgeValue(e.target.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="gender" className="font-semibold text-base  text-[#009394]">Gender <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select id="gender" name="gender" onChange={(e)=>{setGenderValue(e.target.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>

                    {/* <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="weight" className="font-semibold text-base  text-[#009394]">Weight</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="weight" type="number" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="height" className="font-semibold text-base  text-[#009394]">Height</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="height" type="number" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div> */}

                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

                    <div className="text-base font-semibold tracking-wider"> BANK DETAILS
                      <div className="w-20 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="upiId" className="font-semibold text-base text-[#009394]">UPI ID</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="upiId" name="upiId" type="number" onChange={(e)=>{setUpiIdValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="bankName" className="font-semibold text-base  text-[#009394]">Bank</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select id="bankName" name="bankName" onChange={(e)=>{setBankNameValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
                                <option value=""></option>
                                <option value="Axis Bank">Axis Bank</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                                <option value="State Bank Of India">State Bank Of India</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="account" className="font-semibold text-base  text-[#009394]">Acc No.</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="account" name="account" type="number"  onChange={(e)=>{setAccountValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="ifsc" className="font-semibold text-base  text-[#009394]">IFSC code</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="ifsc" name="ifsc" type="text" onChange={(e)=>{setIfscValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="accountName" className="font-semibold text-base  text-[#009394]">Account Holder</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="accountName" name="accountName" type="text" onChange={(e)=>{setAccountNameValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

            </div>

            <div className="lg:w-1/2 sm:w-full lg:px-5  ">
            <div className="text-base font-semibold tracking-wider"> DOCUMENTS
            <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="documentType" className="font-semibold text-base  text-[#009394]">ID type</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select id="documentType" name="documentType" onChange={(e)=>{setDocumentTypeValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
                                <option>Select Id</option>
                                <option>Select Id</option>
                                <option>Select Id</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="documentNumber" className="font-semibold text-base  text-[#009394]">ID no.</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="documentNumber" name="documentNumber" type="number"  onChange={(e)=>{setDocumentNumberValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="pt-2 flex flex-row">
                            <label htmlFor="otherDocument" className="font-semibold text-base  text-[#009394]">Other Documents :</label>
                        </div>
                        <div className="w-3/4 justify-start flex flex-col">
                            <button type="button" className="bg-gray-800 text-white mt-2 flex justify-between items-center p-2 rounded-md"onClick={uploadDocumentClicked}>Browse to upload documents <i className="icon-[bytesize--upload] text-2xl "></i> </button>
                            <input id="otherDocument" name="documents" type="file" onChange={docUploadUpdate} className="hidden" multiple ref={docUploadRef} />
                            {docUploadName==false?<p className="text-gray-500 pt-2">No entries found.</p>:docUploadName.map((e,index)=>{
                                return(
                                    <div className="flex justify-between pt-2 items-center border-b-2">
                                        <p className="text-gray-500">{(index+1)+". "+e.name}</p>
                                        <i className="icon-[mdi--file-find] text-md "></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    

                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>


                    <div className="text-base font-semibold tracking-wider">CONTACT DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="mobile" className="font-semibold text-base  text-[#009394]">Mobile <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="mobile" name="mobile" type="tel" pattern="[0-9]{10}" onChange={(e)=>{setMobileValue(e.target.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" />
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="whatsapp" className="font-semibold text-base  text-[#009394]">Whatsapp <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="whatsapp" name="whatsapp" type="tel" pattern="[0-9]{10}" onChange={(e)=>{setWhatsappValue(e.target.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="email" className="font-semibold text-base  text-[#009394]">Email</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input id="email" name="email" type="email" onChange={(e)=>{setEmailValue(e.target.value)}} className="rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" placeholder="xyz@gmail.com"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label htmlFor="address" className="font-semibold text-base  text-[#009394]">Address <span className="text-red-600"> *</span></label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <textarea id="address" name="address" onChange={(e)=>{setAddressValue(e.target.value)}} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full" rows="5"></textarea>
                        </div>
                    </div>

                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

                    <div className="text-base font-semibold tracking-wider flex flex-col">PAYMENT HISTORY
                        <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm pt-5">No entities found</p>
                    </div>
                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>


            </div>
        </Form>
        </>

    )
};