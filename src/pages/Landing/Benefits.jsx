import React from 'react'
import Slider from "react-slick";
import brand from '../../assets/images/we-create.png';
import { MdNavigateNext } from "react-icons/md";
const Benefits = () => {
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     arrows: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        <section className='bg-[#E1F1FF] py-14'>
            <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 '>

                <div className='grid md:grid-cols-2 gap-8 items-center'>
                    <div>
                        <img className='imagesd flex justify-center' src={brand} alt="" />
                    </div>
                    <div >
                        <div className='space-y-3'>
                            <h2 className=' md:text-4xl text-3xl  font-bold  text-[#000] font-sans'>We Create a Steps to Build a Successful Digital Product</h2>
                            <p className='md:text-base text-sm'>Are you ready to take your business to new heights? Look no further! Our team specializes in crafting digital products that can propel your business to success.</p>
                        </div>
                        <button className='md:px-6 px-4 py-2 rounded-full btn-shine  md:text-lg text-base bg-[#FF541E] mt-6 text-white font-normal 1'>
                            <a className='flex  items-center gap-2' href="tel:8238114603"> Connect with Experts <MdNavigateNext className='text-2xl button-icon ' /> </a> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benefits
