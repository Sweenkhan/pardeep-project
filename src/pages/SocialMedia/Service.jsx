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
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-[#fff] font-sans">Social Media Marketing & Management Services Includes</h2>
                        <p className=" md:text-base text-md font-sans text-white ">We offer our clients wide social media marketing services, from profile development to brand promotion and from result to profit analysis. Among our useful services are: </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-[#23CB75] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " >
                                <MdAddLink />
                                {/* <img src={icon} alt="" /> */}
                            </span>
                            <h2 className="text-xl text-white font-bold mt-2">Profile  creation</h2>
                            <p className="text-base font-normal text-white">Regardless of the size of your company, social media optimization is essential. Make a strong social footprint by building a dynamic presence across a variety of social media sites, such as Facebook, LinkedIn, Twitter, and others. </p>
                        </div>
                        <div className="bg-[#A7B3F3] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Page creartion</h2>
                            <p className="text-white">Establish active pages for your business or organization on numerous social media platforms to raise awareness of it. Our social media marketing in Ahmedabad assists companies in producing leads that are of finest quality.</p>
                        </div>
                        <div className="bg-[#FF5C36] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">	Calender creation</h2>
                            <p className="text-white">For social media, we make content calendars to make sure we have scheduled and prepared content ahead of schedule.</p>
                        </div>
                        <div className="bg-[#FFD166] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdAddLink /></span>
                            <h2 className="text-xl text-white font-bold mt-2">Social media  post </h2>
                            <p className="text-base font-normal text-white">Proactively promote your blogs and posts on social media to increase traffic on a regular basis.</p>
                        </div>
                        <div className="bg-[#A3D764] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Paid campaign</h2>
                            <p className="text-white">Get quantifiable returns on investment by using targeted social media paid campaigns and adverts to promote your brand on social networks. </p>
                        </div>
                        <div className="bg-[#6C2CD9] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Creative design</h2>
                            <p className="text-white">We design your social media campaigns with an aesthetic and creative vision to generate engrossing and attractive designs.</p>
                        </div>
                        <div className="bg-[#23CB75] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " >
                                <MdAddLink />
                                {/* <img src={icon} alt="" /> */}
                            </span>
                            <h2 className="text-xl text-white font-bold mt-2">Call to action</h2>
                            <p className="text-base font-normal text-white">Use our committed services to optimize your social media campaigning for sales conversion and a rise in earnings as a result.</p>
                        </div>
                        <div className="bg-[#A7B3F3] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Engagement  measurement</h2>
                            <p className="text-white">Make sure you maximize your revenues by utilizing our social media marketing agency's engagement measurement services to gain insight into the preferences and behavior of your customers. </p>
                        </div>
                        <div className="bg-[#FF5C36] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Social media marketing consulting</h2>
                            <p className="text-white">Unlock your brand's potential with our full-scale SMM solutions. Trust in our strategic prowess to deliver measurable results. As Ahmedabad's premier digital agency, we specialize in tackling core business challenges. Dive into our budget-friendly social media packages for impactful outcomes</p>
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
