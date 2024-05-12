import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


const Form = () => {

    return (
        <section className='bg-[#E1F1FF] py-14'>
            <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 '>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                    <div>
                        <div className='space-y-4'>
                            <h2 className='text-4xl font-bold text-[#0E1F51] text-start'>We are always here to <br /> help you</h2>
                            <p>Uniquely productize backend systems for ethical "outside the box" thinking. Monotonectally restore synergistic mindshare through alignments.</p>
                        </div>
                        <div className='mt-4'>
                            <div className='space-y-4'>
                         <a target='_blank' href="mailto:digitalsakshipreek@gmail.com"
                                    className='flex items-center gap-3  '>
                                    <span className='bg-blue-600 rounded-sm flex items-center justify-center w-10 h-10'>
                                        <MdMailOutline className='text-[28px] text-white ' />
                                    </span>
                                    <div>
                                        <p className='text-blue-600 font-bold text-base'>Send Email</p>
                                        digitalsakshipreek@gmail.com
                                    </div>

                                </a>
                                <a target='_blank' href="https://maps.app.goo.gl/BJW6gh6C6XjSAkdb8"
                                    className='flex items-center gap-3  '>
                                    <span className='bg-blue-600 rounded-sm flex items-center justify-center w-10 h-10'>
                                        <MdLocationOn className='text-[28px] text-white ' />
                                    </span>
                                    <div>
                                        <p className='text-blue-600 font-bold text-base'>Visit Us</p>
                                        14 Kaveri Villa Isanpur, Ahmedabad, India, 382443
                                    </div>

                                </a>
                            </div>


                        </div>

                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-[#0E1F51] text-start'>Get In Touch</h2>
                        <form action="" className='mt-6'>
                            <div className='space-y-4 '>
                                <div className='flex gap-6 '>
                                    <input placeholder='Enter Name' className='w-full p-2 outline-none' type="text" />
                                    <input placeholder='Enter Mobile Number' className='w-full p-2 outline-none' type="text" />
                                </div>
                                <input placeholder='Enter Email' className='w-full p-2 outline-none' type="text" />
                                <textarea placeholder='Massage' className='w-full h-24 outline-none p-2' name="" id="" cols="30" rows="10"></textarea>
                                <button className='bg-blue-600 text-white px-6 w-full rounded-base py-2 text-lg font-semibold'>Submit</button>
                            </div>

                        </form>


                    </div>


                </div>
            </div>
        </section>
    )
}
export default Form
