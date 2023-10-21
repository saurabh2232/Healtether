import React from "react";
import {TERipple} from "tw-elements-react"
import { OverviewGrid } from "../../Shared/OverviewGrid";

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

    appointmentType.forEach((item,i) => {
        var substringHtml = (
            <TERipple rippleColor="light" key={i}>
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

           <OverviewGrid/>
        </div>
    )
};