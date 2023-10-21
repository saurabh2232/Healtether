import React, { useState,useRef } from "react";
import img from "../../../../assets/patient-profile.png";
import {Form,redirect} from 'react-router-dom'
import { PatientSubmitApi } from "../../../api/patient/patient";

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

export async function patientAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await PatientSubmitApi( updates);
    return redirect(`/managepatient`);
}


const AddPatient = () => {

  const [imgSrc,setImgSrc]=useState(img);
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    mobile: "",
  });

  const [personalDetails, setPersonalDetails] = useState({
    birthday: "",
    age: "",
    gender: "Male",
    height: "",
    weight: "",
  });

  const [contactDetails, setContactDetails] = useState({
    mobile: "",
    whatsapp: "",
    email: "",
    address: "",
  });

  const [medicalRecords, setMedicalRecords] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const [documentDetails, setDocumentDetails] = useState({
    documentType: "",
    documentNumber: "",
    otherDocuments: [],
  });

  const [bankDetails, setBankDetails] = useState({
    upiId: "",
    bankName: "",
    account: "",
    ifsc: "",
    accountName: "",
  });

  const [procedureRecords, setProcedureRecords] = useState([]);
  const [appointmentsHistory, setAppointmentsHistory] = useState([]);
  const [wrongValuePopupShow,setWrongValuePopupShow]=useState(false);


  function handleChange(e,setState) {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  function handleChangeFiles(e,setState) {
    const { name, files } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: Object.values(files)
    }));
  };

  function recordsUpload(e,setRecords){
    let docnames=[]
    for(var i=0;i<e.target.files.length;i++){
        docnames[i]=e.target.files[i]
    }
    setRecords(docnames)
}

  const ageRef=useRef("");
  const imageRef=useRef("");
  const docUploadRef=useRef("");
  const medicalRecordsRef=useRef("");
  const procedureRecordsRef=useRef("");
  
  function profilePhotoClicked(){
      imageRef.current.click()
  }
  function profilePhotoUpdate(e){
      setImgSrc(URL.createObjectURL(e.target.files[0]))
  }
  function updateAge(e){
    handleChange(e,setPersonalDetails);
    ageRef.current.value=new Date().getFullYear()-new Date(personalDetails.birthday).getFullYear(); 
    ageRef.current.setAttribute("disabled",'');
    const { name, value } = ageRef.current;
    setPersonalDetails(prevState => ({
        ...prevState,
        [name]: value
    }));
  }
  function submitCheck(e){

      console.log(basicDetails.name)
      console.log(basicDetails.mobile)
      console.log(personalDetails.birthday)
      console.log(personalDetails.age)
      console.log(personalDetails.gender)
      console.log(personalDetails.height)
      console.log(personalDetails.weight)
      console.log(contactDetails.mobile)
      console.log(contactDetails.whatsapp)
      console.log(contactDetails.email)
      console.log(contactDetails.address)
      console.log(medicalRecords)
      console.log(documentDetails.documentType)
      console.log(documentDetails.documentNumber)
      console.log(documentDetails.otherDocuments)
      console.log(bankDetails.upiId)
      console.log(bankDetails.bankName)
      console.log(bankDetails.account)
      console.log(bankDetails.ifsc)
      console.log(bankDetails.accountName)
      console.log(procedureRecords)

    if(!personalDetails.birthday ||!personalDetails.age ||!personalDetails.gender ||!personalDetails.height || !personalDetails.weight || !(contactDetails.mobile.length==10) || !(contactDetails.whatsapp.length==10)|| !contactDetails.address){
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
            <img className="h-[72px] w-[72px] rounded-[50%] object-cover" src={imgSrc} alt="Set Image" onClick={profilePhotoClicked} />
            <input className="hidden" type="file" ref={imageRef} onChange={profilePhotoUpdate}/>
        </div>
        <div className="flex flex-col justify-between pl-8 w-[65%]">
            <input className="rounded-md h-14 text-2xl mb-2" name="name" type="text" onChange={(e)=>handleChange(e,setBasicDetails)} placeholder="Name" />
            <input className="rounded-md h-8 mb-2" name="mobile" type="number" onChange={(e)=>handleChange(e,setBasicDetails)} placeholder="Phone no." />
            <div className="flex">
                <button className="text-xs w-fit bg-teal-500 shadow-md text-white rounded-md py-1 px-2 mt-2 mr-2" onClick={e=>submitCheck(e)}>Save Changes</button>
                <button className="text-xs w-fit bg-[#DFDFDF] shadow-md text-white rounded-md py-1 px-2 mt-2" disabled>Start Consultation</button>
            </div>        
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
                    <input id="birthday" name="birthday" type="date" onChange={(e)=>updateAge(e)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="age" className="font-semibold text-base  text-[#009394]">Age <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="age" name="age" ref={ageRef} type="number" onChange={(e)=>handleChange(e,setPersonalDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                </div>
            </div>

            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="gender" className="font-semibold text-base  text-[#009394]">Gender <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <select id="gender" name="gender" onChange={(e)=>handleChange(e,setPersonalDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="height" className="font-semibold text-base  text-[#009394]">Height <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="height" name="height" type="number" onChange={(e)=>handleChange(e,setPersonalDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                </div>
            </div>

            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="weight" className="font-semibold text-base  text-[#009394]">Weight <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="weight" name="weight" type="number" onChange={(e)=>handleChange(e,setPersonalDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
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
                    <input id="mobile" name="mobile" type="tel" pattern="[0-9]{10}" onChange={(e)=>handleChange(e,setContactDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" />
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="whatsapp" className="font-semibold text-base  text-[#009394]">Whatsapp <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="whatsapp" name="whatsapp" type="tel" pattern="[0-9]{10}" onChange={(e)=>handleChange(e,setContactDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="email" className="font-semibold text-base  text-[#009394]">Email</label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="email" name="email" type="email" onChange={(e)=>handleChange(e,setContactDetails)} className="rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" placeholder="xyz@gmail.com"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="address" className="font-semibold text-base  text-[#009394]">Address <span className="text-red-600"> *</span></label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <textarea id="address" name="address" onChange={(e)=>handleChange(e,setContactDetails)} required className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full" rows="5"></textarea>
                </div>
            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

            {/* Medical Records  */}
            <div className="text-base font-semibold tracking-wider flex flex-col">MEDICAL RECORDS
                <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
            </div>
            <div className="w-3/4 justify-start flex flex-col mt-2">
                <button type="button" className="bg-gray-800 text-white mt-2 flex justify-between items-center p-2 rounded-md"onClick={()=>medicalRecordsRef.current.click()}>Browse to upload documents <i className="icon-[bytesize--upload] text-2xl "></i> </button>
                <input id="otherDocument" type="file" onChange={(e)=>recordsUpload(e,setMedicalRecords)} className="hidden" multiple ref={medicalRecordsRef} />
                {medicalRecords==[]?<p className="text-gray-500 pt-2">No entries found.</p>:medicalRecords.map((e,index)=>{
                    return(
                        <div className="flex justify-between pt-2 items-center border-b-2">
                            <p className="text-gray-500">{(index+1)+". "+e.name}</p>
                            <i className="icon-[mdi--file-find] text-md "></i>
                        </div>
                    )
                })}
            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>
            
            {/* Payment History  */}
            <div className="text-base font-semibold tracking-wider flex flex-col">PAYMENT HISTORY
                <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm pt-5">No entities found</p>

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
                    <select id="documentType" name="documentType" onChange={(e)=>handleChange(e,setDocumentDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
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
                    <input id="documentNumber" name="documentNumber" type="number"  onChange={(e)=>handleChange(e,setDocumentDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-col mt-2">
                <div className="pt-2 flex flex-row">
                    <label htmlFor="otherDocuments" className="font-semibold text-base  text-[#009394]">Other Documents :</label>
                </div>
                <div className="w-3/4 justify-start flex flex-col">
                    <button type="button" className="bg-gray-800 text-white mt-2 flex justify-between items-center p-2 rounded-md" onClick={()=>docUploadRef.current.click()}>Browse to upload documents <i className="icon-[bytesize--upload] text-2xl "></i> </button>
                    <input id="otherDocuments" name="otherDocuments" type="file" onChange={(e)=>handleChangeFiles(e,setDocumentDetails)} className="hidden" multiple ref={docUploadRef} />
                    {documentDetails.otherDocuments==[]?<p className="text-gray-500 pt-2">No entries found.</p>:documentDetails.otherDocuments.map((e,index)=>{
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

            <div className="text-base font-semibold tracking-wider"> BANK DETAILS
              <div className="w-20 h-1 bg-[#009394]"></div>
            </div>

            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="upiId" className="font-semibold text-base text-[#009394]">UPI ID</label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="upiId" name="upiId" type="number" onChange={(e)=>handleChange(e,setBankDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="bankName" className="font-semibold text-base  text-[#009394]">Bank</label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <select id="bankName" name="bankName" onChange={(e)=>handleChange(e,setBankDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
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
                    <input id="account" name="account" type="number"  onChange={(e)=>handleChange(e,setBankDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="ifsc" className="font-semibold text-base  text-[#009394]">IFSC code</label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="ifsc" name="ifsc" type="text" onChange={(e)=>handleChange(e,setBankDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="w-1/4 pt-2">
                    <label htmlFor="accountName" className="font-semibold text-base  text-[#009394]">Account Holder</label>
                </div>
                <div className="w-3/4 justify-start flex">
                    <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                    <input id="accountName" name="accountName" type="text" onChange={(e)=>handleChange(e,setBankDetails)} className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                </div>
            </div>
            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

            {/* Procedure Records  */}
            <div className="text-base font-semibold tracking-wider flex flex-col">PROCEDURE RECORDS
                <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
            </div>
            <div className="w-3/4 justify-start flex flex-col mt-2">
                <button type="button" className="bg-gray-800 text-white mt-2 flex justify-between items-center p-2 rounded-md"onClick={()=>procedureRecordsRef.current.click()}>Browse to upload documents <i className="icon-[bytesize--upload] text-2xl "></i> </button>
                <input id="otherDocument" type="file" onChange={(e)=>recordsUpload(e,setProcedureRecords)} className="hidden" multiple ref={procedureRecordsRef} />
                {procedureRecords==false?<p className="text-gray-500 pt-2">No entries found.</p>:procedureRecords.map((e,index)=>{
                    return(
                        <div className="flex justify-between pt-2 items-center border-b-2">
                            <p className="text-gray-500">{(index+1)+". "+e.name}</p>
                            <i className="icon-[mdi--file-find] text-md "></i>
                        </div>
                    )
                })}
            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

            {/* APPOINTMENT HISTORY  */}
            <div className="text-base font-semibold tracking-wider flex flex-col text-black">APPOINTMENT HISTORY
              <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] mb-2 "></div>
              <table className="leading-[30px]">
                  <thead className="text-left text-[#6D6D6D] text-sm leading-9">
                      <tr>
                          <th>No.</th>
                          <th>Date</th>
                          <th>Day</th>
                          <th>Attending Dr.</th>
                          <th>Consultation</th>
                      </tr>
                  </thead>
                  <tbody className="text-[#009394] text-md">
                      <tr>
                          <td>1</td>
                          <td>01/07/23</td>
                          <td>Sat.</td>
                          <td>Dr. Ajit Bhalla</td>
                          <td>High_fev...<i className="icon-[mdi--file-find] text-md text-black "></i></td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>
            
    </div>
</Form>
</>

)
};


export default AddPatient