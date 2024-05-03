import React from 'react'
import LogoImg from "../../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { MdPhoneCallback } from "react-icons/md";


const Header = () => {
    return (
        <div className='bg-white shadow shadow-blue-900'>
            <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 '>
                <header className='flex justify-between items-center h-[102px]'>
                    <div className='logo_section'>
                        <Link to="/">
                            <img width={210} src={LogoImg} alt="logo" />
                        </Link>
                    </div>
                    <div className='main-navbar flex items-center gap-6'>
                        <div className='navbar_section col-span-1'>
                            {/* <nav>
                                <Link to="/step-one">About Us </Link>
                                <Link to="/token-claim">Why Catlog</Link>
                                 <Link className='stake_btn'>Products
                                </Link>
                                <Link to="/token-claim">Find Answers</Link>
                            </nav> */}
                        </div>
                        <div className='wallet_section col-span-1'>
                            <div className='flex gap-4'>
                                {/* <button className='text-white'>
                                     
                                </button> */}
                                <button className='bg-[#fff] flex items-center  px-6 py-2 rounded-full gap-2 text-lg font-semibold text-black border'>
                                <MdPhoneCallback  className='button-icon text-[#FF541E]' />
                               +91 8238114603
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
