import React, {useState} from "react";

import {TEInput} from "tw-elements-react";
import DateSelect from "../../Shared/DateSelect";

import CustomSelect from "../../Shared/CustomSelect";
import TimeSelect from "../../Shared/TimeSelect";
import { KeyValuePair } from "../../../Models/KeyValuePair";

export default function ScheduleAppointment() {
   
    const inputPickerLgClass = {
        inputSizeLg: "px-1 py-[0.65rem] leading-10",
        labelSizeLg: "pt-[0.65rem] leading-10 peer-focus:-translate-y-[1.55rem]"
    };
    const inputTextLeadSize = {
        inputSizeLg: "px-3 py-[0.62rem] leading-10",
        labelSizeLg: "pt-[0.65rem] leading-10 peer-focus:-translate-y-[1.55rem]"
    };
    const [value,
        setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const genderOption = [
        new KeyValuePair('1', 'Male'),
        new KeyValuePair('2', 'Female'),
        new KeyValuePair('3', 'Transgender')
    ];

    return (
        <div className="py-6">
            <span className="text-italic text-sm">Personal Details of the patient</span>
            <div className="flex flex-wrap py-4" id="patientdetail">

                <div className="w-1/3 pr-2">
                    <TEInput key="1" type="tel" id="Mobile" label="Mobile" size="lg" theme={inputTextLeadSize}></TEInput>
                </div>
                <div className="w-1/3 pr-2">
                    <TEInput  key="2" type="text" id="Name" label="Name" size="lg" theme={inputTextLeadSize}></TEInput>
                </div>
                <div className="w-1/3 pr-2">
                    <CustomSelect key="3" 
                        placeholdertext="Select Gender"
                        options={genderOption}
                        customclass={inputTextLeadSize} containerid="#patientdetail"/>
                </div>

                <div className="w-1/3 mt-4 pr-2">
                    <DateSelect key="4"  placeholdertext="Select a BirthDate" selectclassname={inputPickerLgClass}/>

                </div>
                <div className="w-24 mt-4 pr-2">
                    <TEInput type="text" key="5"  id="Age" label="Age" size="lg" theme={inputTextLeadSize}></TEInput>
                </div>
                <div className="w-1/3 mt-4 pr-2 "></div>

            </div>
            <div className="pb-6">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="checkboxDefault"/>
                    <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="checkboxDefault">
                        Virtual Consultation
                    </label>
                </div>
            </div>
            <hr className="h-px block bg-gray-300"></hr>

            <div className="py-6">
                <span className="text-italic text-sm">Appoinment Details</span>
                <div className="flex flex-wrap py-4" id="appointmentdate">
                    <div className="w-1/3 pr-2">
                        <DateSelect key="6"  placeholdertext="Select Appoinment Date" selectclassname={inputPickerLgClass}/>
                    </div>
                    <div className="w-1/3 pr-2">
                        <TimeSelect key="7"  placeholdertext="Select Appoinment Time" selectclassname={inputPickerLgClass}/>
                    </div>
                    <div className="w-1/3 pr-2">
                        <CustomSelect key="8" 
                            placeholdertext="Attending Doctor"
                            options={genderOption}
                            customclass={inputTextLeadSize} containerid="#appointmentdate"/>
                    </div>
                    <div className="w-2/3 pr-2 pt-2">
                    <TEInput type="text" key="9"  id="Reason" label="Appointment Reason" size="lg" theme={inputTextLeadSize}></TEInput>
                    </div>
                </div>

                <div className='w-1/3  pt-2'> 
    <button type="button" className="bg-teal-500 inline-block rounded-lg px-2.5 py-2.5 text-md font-medium leading-normal text-white ">
   Schedule Appointment
        </button>
    </div>
            </div>
        </div>
    )
};