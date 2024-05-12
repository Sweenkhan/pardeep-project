import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../../assets/images/testimonial1.png";

export default function SimpleSlider() {
    const slider = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <section className="bg-[#F8F9FE]" >
        <div  className="space-y-8 py-8 lg:py-20 mx-auto 2xl:w-7/12 xl:w-5/6 w-11/12 " >
          <div> <h2 className="py-4 text-3xl font-bold text-[#0E1F51] text-center">Client Testimonials</h2></div>
          <div >
          <Slider {...slider} >
        
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className="testiText">
                <p className="text-base ">Digital Sakshi's meticulous attention to detail and tailored strategies have positioned our brand for success in the digital landscape. Their commitment to understanding our business goals and delivering targeted solutions has been instrumental in driving our advertising campaigns forward. </p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Khushi Pareek (Clinical Application)</h3>
                <span className="text-base font-normal text-[#e73979]">India Ahemdabad</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className="testiText">
                <p className="text-base ">Working with Sakshi for our website development was an absolute pleasure. Their team demonstrated exceptional expertise, creativity, and attention to detail, resulting in a website that surpassed our expectations. From concept to execution, the process was seamless, and the end result truly reflects the essence of our brand. Highly recommend their services for anyone looking for top-notch web development.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Nikita Gupta  (Web App Development)</h3>
                <span className="text-base font-normal text-[#e73979]">India Rajasthan</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className="testiText">
                <p className="text-base ">Choosing Sakshi for our social media marketing needs has been a game-changer for Sakshi. Their tailored strategies and engaging content have propelled our brand's online presence to new heights. Exceptional service, prompt communication, and tangible results. Highly recommend their expertise to anyone looking to elevate their social media game</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Bhawna Singh (Catlog application )</h3>
                <span className="text-base font-normal text-[#e73979]">India Jaipur</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className="testiText">
                <p className="text-base ">Working with sakshi was a game-changer for our business. Their branding expertise and creativity breathed new life into our identity. Professionalism, timely delivery, and exceptional results – highly recommended..</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Matteo (Web Application)</h3>
                <span className="text-base font-normal text-[#e73979]">India Bangalore</span>
              </div>
            </div>
           
            
         
          </Slider>
  
          </div>
       
        </div>
      </section>

    );
}