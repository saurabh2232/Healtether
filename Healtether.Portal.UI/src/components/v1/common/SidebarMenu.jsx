import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function  SidebarMenu() {
return (
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
                src="../src/assets/newlogo-bce991c9.png"
                className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-18"
                alt="main_logo"/> {/* <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Soft UI Dashboard</span> */}
        </a>
    </div>

    <nav>
    <div 
            className="block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-purple-100"
            >
          <Link to={'/dashboard'}> <FontAwesomeIcon icon="fa-solid fa-house" className='mr-2'/>Home</Link> 
        </div >
        <div 
            className="block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-purple-100"
            >
          <Link to={'/appointment'}> <FontAwesomeIcon icon="fa-solid fa-house" className='mr-2'/>app</Link> 
        </div >
        <Link to={'/dashboard'}
            className="block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200  hover:bg-purple-100"
            >
            <FontAwesomeIcon icon="fa-solid fa-house" className='mr-2'/>Home
        </Link >
        <Link to={'/appointment'}
            className="block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200 hover:bg-purple-100"
            >
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" className='mr-2'/>
            Appointments
        </Link>
        <Link to={'/chats'}
            className="block text-black-500 py-2.5 px-5 my-4 rounded transition duration-200 hover:bg-purple-100"
            >
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" className='mr-2'/>Whatsapp Chat
        </Link>
        <a
            className="block text-gray-500 py-2.5 px-5 my-4 rounded transition duration-200 hover:bg-purple-100 "
            href="#">
            <i className="fas fa-store mr-2"></i>Comercios
        </a>
        <a
            className="block text-gray-500 py-2.5 px-5 my-4 rounded transition duration-200 hover:bg-purple-100"
            href="#">
            <i className="fas fa-exchange-alt mr-2"></i>Transacciones
        </a>
    </nav>

    <a
        className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
        href="#">
        <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
    </a>

    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

    <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Sample @2023</p>

</div>

)

}