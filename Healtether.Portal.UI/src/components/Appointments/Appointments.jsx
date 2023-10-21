import React from "react";
import {TERipple} from "tw-elements-react"

export default function Appointments() {
    const appointmentType = [
        'All',
        'Urgent',
        'Upcoming',
        'Follow-ups',
        'Cancelled',
        'Completed'
    ];
    const appointmentTypeHTML = [];

    appointmentType.forEach((item) => {
        var substringHtml = (
            <TERipple rippleColor="light">
                <button
                    type="button"
                    className="inline-block  border-b  border-l border-black px-3 pb-[6px] pt-2 text-sm font-medium  leading-normal text-black transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                    {item}
                </button>
            </TERipple>
        );

        appointmentTypeHTML.push(substringHtml);
    });

    return (
        <div>
            <div className="inline-flex py-3" role="group">
                {appointmentTypeHTML}
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b-8 border-white bg-purple-700 text-white">
                                    <tr>
                                        <th scope="col" className="px-2 py-2">className</th>
                                        <th scope="col" className="px-2 py-2">Heading</th>
                                        <th scope="col" className="px-2 py-2">Heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-8 border-white bg-purple-100 text-neutral-800">
                                        <td className="whitespace-nowrap px-2 py-3">
                                            Secondary
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-3">Cell</td>
                                        <td className="whitespace-nowrap px-2 py-3">Cell</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};