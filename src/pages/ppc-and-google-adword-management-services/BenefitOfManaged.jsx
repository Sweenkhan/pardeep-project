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

import ppc from "../../assets/images/ppc-benefit-img.png"

const TypesOfLocks = () => {
    return (
        <>
            <section className="bg-[#fff] py-16">
                <div className="className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  '">

                    <div className="grid lg:grid-cols-2  gap-6 mt-10 item-center">
                        <div className="text-start space-y-2">
                            <h2 className="md:text-4xl text-3xl font-bold text-start text-[#000] font-sans">Benefit Of Managed ppc <span className="text-[#F97225]">Adversting Services</span> </h2>
                            <ul>
                            <li className="text-base"> <span className=" font-semibold">Targeted advertising:</span>  PPC allows you to precisely target specific audiences.</li>
                        <li className="text-base"> <span className=" font-semibold">Immediate results:</span>  PPC campaigns can provide immediate results.</li>
                    <li className="text-base"> <span className="font-semibold">Cost-effectiveness:</span>  You only pay when someone clicks your ad, and you can set a maximum budget.</li>
                    <li className="text-base"> <span className="font-semibold">Flexibility:</span>  You can easily test different ads.</li>
                    <li className="text-base"> <span className=" font-semibold">Brand awareness:</span>  PPC ads can increase brand awareness by up to 80%.</li>
                    <li className="text-base"> <span className="font-semibold">Competitor insights:</span>  PPC can help you gain insights into your competitors.</li>
                    <li className="text-base"> <span className=" font-semibold">Reach:</span>  PPC can help you reach a wider audience through a variety of targeting methods.</li>
                    <li className="text-base"> <span className=" font-semibold">Budget friendly:</span>  There are no budget restrictions when it comes to Google PPC. You choose how much to pay for a click and how much money to spend for an ad. Overall, Google PPC is a great way to quickly and easily reach your target audience, increase brand awareness, and drive traffic to your webs </li>
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                             <img className="w-full" src={ppc} alt="" />
                        </div>
                    </div>
            
                </div>
            </section>

        </>
    )
}

export default TypesOfLocks
