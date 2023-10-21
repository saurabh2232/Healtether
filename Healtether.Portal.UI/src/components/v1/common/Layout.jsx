import React, {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import Topbar from './Topbar'
import Breadcrumb from './Breadcrumbs/Breadcrumb';
// https://tailwindcomponents.com/component/dashboard-administrador-2
export default function Layout() {
    // const navigate = useNavigate() const location = useLocation()
    const menuHtml = [];
    const menu = [
        {
            title: "Home",
            icon: "icon-[system-uicons--home] text-[28px] bg-[#484d63]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "dashboard"
        }, {
            title: "Appointments",
            icon: "icon-[solar--calendar-bold] text-[26px] bg-[#484d63]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "appointment"
        }, {
            title: "WhatsApp Chat",
            icon: "icon-[ic--twotone-whatsapp] text-[26px] bg-[#484d63]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "chats"
        },
        {
            title: "Patients Record",
            icon: "icon-[ooui--user-contributions-ltr] text-[21px] bg-[#046472]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "managepatient"
        },
        {
            title: "Manage Staff",
            icon: "icon-[medical-icon--i-care-staff-area] text-[26px]  bg-[#046472]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "managestaffs"
        },
        {
            title: "Payments",
            icon: "icon-[streamline--money-wallet-money-payment-finance-wallet] text-[26px]  bg-[#046472]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "viewstaff"
        },
        {
            title: "Analytics",
            icon: "icon-[ion--trending-up-outline] text-[26px] bg-[#046472]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "analytics"
        },
        {
            title: "Logout",
            icon: "icon-[ant-design--logout-outlined] text-[26px] bg-[#484d63]",
            cssclass: "block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-" +
                    "purple-100 font-normal",
            route: "chats"
        }
    ];
    menu.forEach((item,i) => {
        menuHtml.push(
            <Link to={item.route} className={item.cssclass} key={i}>
                <div className='flex' ><span className={item.icon}></span><span className='text-[15px] ml-3 mt-1'>{item.title}</span></div>
            </Link >

        );
    });
    useEffect(() => {
        window.onpopstate = e => {
            if (location
                ?.state === "payment") {
                //navigate('/')
            }
        };
    });

    console.log("layout");

    return (

        <div className="flex flex-col h-screen">

            <div className="flex-1 flex flex-wrap">
                <div
                    className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden drop-shadow-lg "
                    id="sideNav">

                    <div className="h-19.5">
                        <i
                            className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
                            sidenav-close=""
                            aria-hidden="true"></i>
                        <a className="block px-4 py-1 m-0 text-sm whitespace-nowrap text-slate-700">
                            <img
                                src="../../../assets/newlogo-bce991c9.png"
                                className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-18"
                                alt="main_logo"/> {/* <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Soft UI Dashboard</span> */}
                        </a>
                    </div>

                    <nav>
                        {menuHtml}
                    </nav>

                    <div className="bg-gradient-to-r from-teal-300 to-teal-500 h-px mt-auto"></div>
                    <p className="px-5 mt-1 text-left text-xs text-cyan-500">Copyright: Healtether.com@2023</p>

                </div>
                <div className="flex-1  w-full md:w-1/2">
                    <Topbar/>

                    <div
                        className="scroll-smooth hover:scroll-auto pr-8 pl-8"
                        style={{
                        maxHeight: 'calc(100%-2%)'
                    }}>
                        <Breadcrumb/>
                        <div id="detail">
                            <Outlet/>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
