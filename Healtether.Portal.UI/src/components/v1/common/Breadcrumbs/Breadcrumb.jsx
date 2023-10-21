import React, {useState} from 'react';
import {Link, useMatches} from 'react-router-dom';
import PropTypes from 'prop-types';
import ActionPropType from '../../../../Models/ActionPropType';
export default function Breadcrumb() {

    let matches = useMatches();
    let actionButton = [];
    let breadcrumbLink = [];
    let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle
        ?.crumb))
    // now map them into an array of elements, passing the loader data to each one
        .map((match,index) => {

        if (match.handle.crumb != null) {
            breadcrumbLink = [];
            actionButton = [];

            let actions = match.handle.crumb.actionButton;

            if (actions != null) 
                actionButton.push(
                <div key={"l1"+index}>
                    <Link
                        to={actions.route} 
                        className="bg-white border  inline-block rounded-lg px-2.5 py-2.5 leading-normal text-teal-500  xs:hidden lg:block ">
                        <span className='flex'>
                            <i className="icon-[fluent--add-16-filled] text-[1.5rem] mr-2"></i>
                            {actions.title}</span>
                    </Link>
                    <Link
                        to={actions.route} 
                        className="bg-white border  inline-block rounded-lg px-2.5 py-2.5 leading-normal text-teal-500 xs:block lg:hidden">
                            <i className="icon-[fluent--add-16-filled] text-[1.5rem] mr-2"></i>
                    </Link>
                    </div>
                );
            
            let breadcrumb = match.handle.crumb.breadcrumb;
            for (let index = 0; index < breadcrumb.length; index++) {
                const actions = breadcrumb[index];
                if (index != 0) {
                    breadcrumbLink.push(
                        <li key={'a' + index}>
                            <span
                                className="icon-[fe--arrow-right] text-[21px] mx-2 text-neutral-500 dark:text-neutral-400 text-black"></span>
                        </li>
                    );
                }
                if (index == (breadcrumb.length - 1)) {
                    breadcrumbLink.push(
                        <li key={'b' + index} className="text-neutral-500 dark:text-neutral-400">

                            {actions.title}
                        </li>
                    );
                } else {
                    breadcrumbLink.push(
                        <li key={'b' + index}>
                            <Link
                                to={actions.route}
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">

                                {actions.title}
                            </Link>
                        </li>
                    );
                }
            }
        }

    });
    return (
        <div>
            <div className='flex flex-nowrap'>
                <nav className="bg-grey-light w-1/2 rounded-md py-2 ">
                    <ol className="list-reset flex py-4">
                        {breadcrumbLink}
                    </ol>

                </nav>
                <div className='w-1/2 flex justify-end py-4'>
                    {actionButton}
                    <div className='mr-3'></div>
                    <Link
                        to={'scheduleappointment'}
                        className="bg-teal-500 inline-block rounded-lg px-2.5 py-2.5 leading-normal text-white xs:hidden lg:block">

                        <span className='flex'>
                            <i className="icon-[mdi--people-add] text-[1.5rem] mr-2"></i>
                            Schedule Appointment</span>
                    </Link>
                    <Link
                        to={'scheduleappointment'}
                        className="bg-teal-500 inline-block rounded-lg px-2.5 py-2.5 leading-normal text-white xs:block lg:hidden">
                        <span className='flex'>
                            <i className="icon-[mdi--people-add] text-[1.5rem] mr-2"></i>
                        </span>

                    </Link>
                </div>

            </div>
            <hr className="h-px block bg-gray-300"></hr>
        </div>
    );
}
