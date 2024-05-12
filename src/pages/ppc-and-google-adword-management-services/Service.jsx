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
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-[#fff] font-sans">PPC SERVICES  INCLUDES </h2>
                        <p className=" md:text-base text-md font-sans text-white ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis odit tempora eius fugiat laborum dolore quaerat. Accusantium ab, tempora architecto modi et enim cupiditate dolorum veniam, possimus quasi assumenda quaerat?</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-[#23CB75] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " >
                                <MdAddLink />
                                {/* <img src={icon} alt="" /> */}
                            </span>
                            <h2 className="text-xl text-white font-bold mt-2">Generates High Quality Leads</h2>
                            <p className="text-base font-normal text-white">Transforming clicks into high-quality leads, we're your gateway to success. With precision targeting and compelling ad strategies, we drive engagement that resonates, delivering leads that elevate your business to new heights. </p>
                        </div>
                        <div className="bg-[#A7B3F3] drop-shadow-lg  p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Turn Clicks In To Measurable  Result</h2>
                            <p className="text-white">Turn clicks into tangible triumphs with our result-driven approach. From the first click to the final outcome, we meticulously craft strategies that yield measurable results, ensuring every interaction translates into meaningful progress for your business</p>
                        </div>
                        <div className="bg-[#FF5C36] drop-shadow-lg p-6 rounded-xl">
                            <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                            <h2 className="text-xl text-white font-bold mt-4">Increases  Traffic, Sales,Lead, ROI</h2>
                            <p className="text-white">Accelerate your success journey with our powerhouse strategy. We're not just boosting traffic, sales, leads, and ROI; we're amplifying possibilities. Our dynamic approach ensures every click translates into exponential growth, propelling your business to unprecedented heights of success.</p>
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
