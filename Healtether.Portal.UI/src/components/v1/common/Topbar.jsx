import React from 'react'
import {TEInput} from "tw-elements-react";
export default function Topbar() {
    const inputText = {
        notchLeadingDefault:"border-black",
        notchMiddleDefault:"border-black",
        notchTrailingDefault:"border-black",
        notchLeading:"pointer-events-none border border-black transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.55rem]",
        notchTrailing:"pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.55rem]"
    };
    return (
        <div className='pr-8 pl-8'>
            <div className="pt-4 pb-4 flex items-center justify-between">
               
                <div className="flex  flex-row grow justify-start w-3/4">
                    {/* <div className="flex items-center">
            <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2"/>
            <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
        </div> */}
                  
                        <div className="md:hidden  mr-3 mt-2 basis-1/6">
                            <button id="menuBtn" type='button' title='menu'>

                                <i
                                    className="icon-[streamline--interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger]  text-xl "></i>
                            </button>

                        </div>
                        <div className="basis-4/6">
                            <div className='grow'>
                            <TEInput type="text" id="Search" label="Search Patient" prefix={<i
                                    className="icon-[streamline--interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger]  text-xl "></i>}  size="base" theme={inputText}></TEInput>
                            </div>
                        </div>
                </div>
              
                <div className="flex space-x-5 w-1/4 justify-end">
                    <button id='info' name='info' type='button'>
                        <span className="icon-[material-symbols--help-outline]  text-xl"></span>
                    </button>

                    <button id='notification' name='notification' type='button'>
                        <span className="icon-[gridicons--bell] text-xl"></span>
                    </button>
                    <button id='profileimage' name='profileimage'>
                        <span className='flex'>
                            <img
                                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                className="max-h-8 max-w-full rounded-full"
                                alt=""/>
                            <span className='ml-2 mt-1'>Arun..</span>
                        </span>
                    </button>
                </div>
            </div>
            <hr className="h-px block bg-gray-300"></hr>
        </div>
    )
}
