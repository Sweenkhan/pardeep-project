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
              <h1 className='md:text-5xl text-3xl font-bold  font-sans '>Best Social Media Marketing Agency In Ahmedabad 
              </h1>
              <p className='text-[16px] font-normal'>Embark on a journey of amplified brand presence and ROI with our agency's dynamic and meticulously crafted campaigns. Our seasoned social media maestros in Ahmedabad infuse your vision with strategic prowess, ensuring every move resonates with your audience and maximizes returns. From conception to execution, we orchestrate campaigns that not only meet but exceed your expectations, propelling your brand to new heights of success.</p>
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
