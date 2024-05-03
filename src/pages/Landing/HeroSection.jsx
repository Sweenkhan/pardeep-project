import HeroRight from '../../assets/images/social_media_marketing_hero_section.svg';
import insta from '../../assets/images/insta-icon.png';
import ads from '../../assets/images/google_ads.png';
import dev from '../../assets/images/dev-icon01.png';
import brand from '../../assets/images/brand.png';


import { TypeAnimation } from 'react-type-animation';
import { MdNavigateNext } from "react-icons/md";


const HeroSection = () => {
    return (
        <div className='hero-section border-b-[2px] ' >          
            <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  lg:flex md:flex-none '>
                <div className='grid lg:grid-cols-2 justify-center gap-16 items-center py-14'>
                <div className=''>
                    <h1 className='text-6xl font-bold  font-sans '>Expand Your Business<br /> 
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
                            style={{ fontSize: '40px', display: 'inline-block' }}
                            className='text-[#FF541E] font-sans '
                        />
                    </h1>
                      <div className='flex justify-center items-center gap-3 mt-4'>
                          <div className='py-4 px-2 border border-[#00000041]  text-center rounded-lg shadow-lg w-36 h-[110px] space-y-2'>
                             <img className='w-10 mx-auto' src={insta} alt="" />
                             <h5 className='font-semibold font-mono text-sm leading-none'>Social Media Marketing</h5>
                          </div>
                          <div className='py-4 px-2 border border-[#00000041]  text-center rounded-lg shadow-lg w-36 h-[110px] space-y-2'>
                             <img className='w-10 mx-auto' src={ads} alt="" />
                             <h4 className='font-semibold font-mono text-sm leading-none'>Google Ads</h4>
                          </div>
                          <div className='py-4 px-2 border border-[#00000041]  text-center rounded-lg shadow-lg w-36  h-[110px] space-y-2'>
                             <img className='w-10 mx-auto' src={dev} alt="" />
                             <h4 className='font-semibold  text-sm leading-none'>Website Design</h4>
                          </div>
                          <div className='py-4 px-2 border border-[#00000041]  text-center rounded-lg shadow-lg w-36 h-[110px] space-y-2'>
                             <img className='w-10 mx-auto' src={brand} alt="" />
                             <h4 className='font-semibold text-sm leading-none'>Branding</h4>
                          </div>
                      </div>
                    <button className='px-6 py-2 rounded-full btn-shine  text-lg bg-[#FF541E] mt-5 text-white font-semibold flex  items-center gap-1'>  Get started <MdNavigateNext className='text-2xl button-icon ' /> </button>
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
