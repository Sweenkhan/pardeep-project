import Slider from "react-slick";
import Carousel1 from "../../assets/images/Physical-Items.png";
import Carousel2 from "../../assets/images/Gadgets.png";
import Carousel3 from "../../assets/images/clothing.png";
import Carousel4 from "../../assets/images/Traditional-Indian-Clothing.png";
import Carousel5 from "../../assets/images/Fashion-Items.png";
import Carousel6 from "../../assets/images/beauty.png";
import Carousel7 from "../../assets/images/food.png";

import clint1 from "../../assets/images/ppj.png";



import { Icon } from '@iconify/react';

// const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "none", justifyContent: "center", alignItems: "center", background: "#E95DDA", width: '45px', height: "45px", borderRadius: "50%" }}
//             onClick={onClick}
//         >
//             <Icon icon="ooui:next-ltr" color='#fff' width='18px' />
//         </div>
//     );
// }
// const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "none", justifyContent: "center", alignItems: "center", background: "#E95DDA", width: '45px', height: "45px", borderRadius: "50%" }}
//             onClick={onClick}
//         >
//             <Icon icon="ooui:next-rtl" color='#fff' width='18px' />
//         </div>
//     );
// }



const LockTokens = () => {
    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false,
    //           }
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false,
    //           }
    //         }
    //       ]
    // };
    return (
        <div className='bg-white '>
            <div className='py-14 '>
                <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 '>
                <h1 className=' md:text-4xl text-3xl  font-bold text-center text-[#000] font-sans '>"Few of our Clients"</h1>
                    {/* <Slider {...settings}>
                        <div>
                         <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel1} alt="" />
                         <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>
                          <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel2} alt="" />
                          <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>
                          <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel3} alt="" />
                          <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>  
                         <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel4} alt="" />
                         <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>
                          <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel5} alt="" />
                          <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>
                          <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel6} alt="" />
                          <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>
                        <div>
                           <img className="w-36 mx-auto rounded-full shadow-lg flex items-center bg-[#EF940F] slide-image" src={Carousel7} alt="" />
                           <h2 className="text-center mt-1 font-semibold" >Product</h2>
                        </div>

                    </Slider> */}
                    
                    <div className="grid grid-cols-5  py-10">
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       <div className="Clients-logo">
                         <img src={clint1} alt="" />
                       </div>
                       
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LockTokens
