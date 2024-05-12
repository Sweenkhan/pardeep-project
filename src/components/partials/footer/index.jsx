// import LogoImg from "../../../assets/images/shop-smartly.png";
import LogoImg from "../../../assets/images/footer-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer_sec ">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 ">
                <footer className='grid md:grid-cols-4 grid-cols-1 gap-6 items-start py-[50px]'>
                    <div className='md:col-span-2 logo_section'>
                        <div>
                            <img width={220} src={LogoImg} alt="logo" />
                        </div>
                        <p className="mt-3">Empower your brand with our comprehensive suite of digital solutions. From social media marketing to Google Ads, branding, and web development, we've got you covered. Let's elevate your online presence together.</p>
                        <div className="flex social_links gap-4 mt-2">
                            <a target="_blank" href="https://www.instagram.com/digitalsakshipareek/">
                            <FaInstagram className="text-[#fff] text-2xl" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/sakshi-pareek-a0794828b/">
                            <FaLinkedin className="text-[#fff] text-2xl" />
                            </a>
                            <a href="#">
                            <FaSquareXTwitter className="text-[#fff] text-2xl" />
                            </a>

                            <a target="_blank" href="https://www.facebook.com/profile.php?id=61551627975131&sk=about">
                            <FaFacebook className="text-[#fff] text-2xl" />
                            </a>
                           
                        </div>
                    </div>
                    <div className="flex flex-col footer_links">
                        <h4>Services</h4>
                        <Link to='/social-media-marketing'>Social Media Marketing</Link>
                        <Link to='/'>Google Ads</Link>
                        <Link to='/'>Web Development</Link>
                        <Link to='/'>Branding</Link>
                        <Link to='/'>Logo Design</Link>
                    </div>
                    <div className="flex flex-col footer_terms">
                        <h4>Legal</h4>
                        <Link to='/'>Terms and Conditions</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>
                </footer>
            </div>

            <div className="bg-black p-5">
                 <p className="text-center text-gray-400 text-sm">Copyright © 2024 digitalsakshi.com All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
