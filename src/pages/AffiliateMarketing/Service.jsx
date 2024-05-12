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
            <section className="bg-[#232F3E] py-16">
                <div className="className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  '">
                    <div className="text-center space-y-2">
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-[#fff] font-sans">Build a Company Network That Attracts Customers Effortlessly</h2>
                        <p className=" md:text-base text-md font-sans text-white ">Partnering with the right affiliates can boost revenue and propel your business forward. With our ShareASale/Awin management expertise, we'll optimize affiliate marketing campaigns to maximize performance and drive sales growth. Let's elevate your business together!</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
                        <div className="bg-[#23CB75] drop-shadow-lg  p-6 rounded-xl">
                            <a href="/social-media-marketing">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " >
                                <MdAddLink />
                                </span>
                            <h2 className="text-xl text-white font-bold mt-2">	ShareASale/Awin Management</h2>
                            <p className="text-base font-normal text-white">We enhance affiliate marketing performance to boost sales and grow your business across all channels.</p>
                            </a>
                        </div>
                        <div className="bg-[#A7B3F3] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">	Webgains Management</h2>
                            <p className="text-white">Our professionals manage and track all your Webgains campaigns, delivering abundant results.</p>
                        </div>
                        <div className="bg-[#FF5C36] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Wayfair Management</h2>
                            <p className="text-white">We balance sales goals with marketing strategies to boost your Wayfair sales.</p>
                        </div>
                        <div className="bg-[#FFD166] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdAddLink /></span>
                            <h2 className="text-xl text-white font-bold mt-2">	Partner Sourcing & Management</h2>
                            <p className="text-base font-normal text-white">We ensure productive affiliate partnerships, driving increased sales and revenue.</p>
                        </div>
                        <div className="bg-[#A3D764] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Campaign Management</h2>
                            <p className="text-white">We provide structured reports and analyze data for actionable results in your affiliate marketing platforms.</p>
                        </div>
                        <div className="bg-[#6C2CD9] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Reporting</h2>
                            <p className="text-white">We deliver structured reports and analyze data for actionable insights in your affiliate marketing platforms.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a target="_blank" className="Ser-button mt-10 " href="https://api.whatsapp.com/send?phone=918238114603">
                            <div>
                                <p class="one">HIRE EXPERTS<MdNavigateNext className="Ser-icon" /></p>
                                <p class="two">HIRE EXPERTS<MdNavigateNext className="Ser-icon" /></p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TypesOfLocks
