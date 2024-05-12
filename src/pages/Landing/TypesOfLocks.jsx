// import LockImg1 from "../../assets/images/locks1.png";
// import LockImg2 from "../../assets/images/locks2.png";
// import LockImg3 from "../../assets/images/locks3.png";
// import LockImg4 from "../../assets/images/locks4.png";
// import LockImg5 from "../../assets/images/locks5.png";
// import LockImg6 from "../../assets/images/locks6.png";
import { MdAddLink } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

// import icon from "../../assets/images/test-icon.png"

const TypesOfLocks = () => {
    return (

        <>
            <div className="section-bg">
            </div>
            <div className="service-item ">
                <div className='text-center   '>
                    <h2 className="md:text-4xl text-3xl font-bold text-center text-[#fff] font-sans">Our Services</h2>
                    <p className="text-white md:text-base text-md font-sans ">Make your marketing more efficient</p>
                </div>
                <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mt-6 md:p-12 p-6  bg-white '>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        <div className="bg-[#23CB75] drop-shadow-lg  p-6 rounded-xl">
                            <a href="/social-media-marketing">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " >
                                <MdAddLink />
                                </span>
                            <h2 className="text-xl text-white font-bold mt-2">Social Media Marketing</h2>
                            <p className="text-base font-normal text-white">Create a simple list of all your products and get a link that routes customer’s orders to whatsapp.</p>
                            </a>
                        </div>
                        <div className="bg-[#A7B3F3] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Google Ads</h2>
                            <p className="text-white">Get a free bank account, collect payment in multiple ways & create professional invoices</p>
                        </div>
                        <div className="bg-[#FF5C36] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Website Design</h2>
                            <p className="text-white">Get multiple channels to deliver your items at discounted prices.</p>
                        </div>
                        <div className="bg-[#FFD166] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdAddLink /></span>
                            <h2 className="text-xl text-white font-bold mt-2">Search Engine Optimization</h2>
                            <p className="text-base font-normal text-white">Create a simple list of all your products and get a link that routes customer’s orders to whatsapp.</p>
                        </div>
                        <div className="bg-[#A3D764] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Branding</h2>
                            <p className="text-white">Get a free bank account, collect payment in multiple ways & create professional invoices</p>
                        </div>
                        <div className="bg-[#6C2CD9] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Video/Reel Marketing</h2>
                            <p className="text-white">Get multiple channels to deliver your items at discounted prices.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                       <a  target="_blank" className="Ser-button mt-10 " href="https://api.whatsapp.com/send?phone=918238114603">
                        <div>
                            <p class="one">HIRE EXPERTS<MdNavigateNext className="Ser-icon" /></p>
                            <p class="two">HIRE EXPERTS<MdNavigateNext className="Ser-icon"  /></p>
                        </div>
                        </a>
                       </div>
                </div>
            </div>


        </>
    )
}

export default TypesOfLocks
