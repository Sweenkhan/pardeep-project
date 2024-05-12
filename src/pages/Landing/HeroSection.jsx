import HeroRight from '../../assets/images/social_media_marketing_hero_section.svg';
import insta from '../../assets/images/insta-icon.png';
import ads from '../../assets/images/google_ads.png';
import dev from '../../assets/images/dev-icon01.png';
import brand from '../../assets/images/brand.png';
import { TypeAnimation } from 'react-type-animation';
import { MdNavigateNext } from "react-icons/md";


const HeroSection = () => {
    return (
        <div className='hero-section border-b-[2px]  ' >          
            <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  lg:flex md:flex-none '>
                <div className='grid lg:grid-cols-2 lg:justify-center gap-16 items-center py-12'>
                <div >
                  <div className='space-y-3'>
                    <h1 className='md:text-5xl text-3xl font-bold  font-sans '>Expand Your Business<br /> 
                    {" "}
                        <TypeAnimation
                            sequence={[
                                `Social Media Marketing`,
                                1500,
                                `Google Ads`,
                                1500,
                                `Website Design`,
                                1500 ,
                                `Branding`,
                                1500 ,
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{  display: 'inline-block' }}
                            className='text-[#FF541E] font-sans '
                        />
                    </h1>
                    {/* <p className='text-[16px] font-normal'>Embark on a journey of amplified brand presence and ROI with our agency's dynamic and meticulously crafted campaigns. Our seasoned social media maestros in Ahmedabad infuse your vision with strategic prowess, ensuring every move resonates with your audience and maximizes returns. From conception to execution, we orchestrate campaigns that not only meet but exceed your expectations, propelling your brand to new heights of success.</p> */}
                    </div>
                      <div className='flex  md:gap-4 gap-2 mt-5'>
                          <div className='md:py-4 px-1 py-2  border border-[#00000041]  text-center rounded-lg shadow-lg md:w-28 md:h-[100px]  w-[70px] justify-center items-center flex  h-[70px] '>
                            <div className='space-y-2'>
                            <img className='md:w-8 w-4 mx-auto' src={insta} alt="" />
                             <h5 className='font-semibold font-mono text-[8px] md:text-sm leading-none'>Social Media Marketing</h5>
                            </div>
                            
                          </div>
                          <div className='md:py-4 px-1 py-2  border border-[#00000041]  text-center rounded-lg shadow-lg md:w-28 md:h-[100px]   w-[70px] justify-center items-center flex  h-[70px] '>
                            <div className='space-y-2'>
                            <img className='md:w-8 w-4 mx-auto' src={ads} alt="" />
                             <h4 className='font-semibold font-mono text-[8px] md:text-sm leading-none'>Google Ads</h4>
                            </div>
                            
                          </div>

                          <div className='md:py-4 px-1 py-2  border border-[#00000041]  text-center rounded-lg shadow-lg md:w-28 md:h-[100px]   w-[70px] justify-center items-center flex  h-[70px] '>
                            <div className='space-y-2'>
                            <img className='md:w-8 w-4 mx-auto' src={dev} alt="" />
                             <h4 className='font-semibold  text-[8px] md:text-sm leading-none'>Website Design</h4>
                            </div>
                            
                          </div>
                          <div className='md:py-4 px-1 py-2  border border-[#00000041]  text-center rounded-lg shadow-lg md:w-28 md:h-[100px]   w-[70px] justify-center items-center flex  h-[70px] '>
                            <div className='space-y-2'>
                            <img className='md:w-8 w-4 mx-auto' src={brand} alt="" />
                             <h4 className='font-semibold text-[8px] md:text-sm leading-none'>Branding</h4>
                            </div>

                          </div>

                      </div>
                    <button className='px-6 py-2 rounded-full btn-shine  lg:text-lg bg-[#FF541E] text-sm mt-6 text-white font-semibold flex  items-center gap-1'>  Get started <MdNavigateNext className='text-2xl button-icon ' /> </button>
                </div>
                <div className=''>
                    <img className='w-50' src={HeroRight} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
