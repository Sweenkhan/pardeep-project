import { useState } from 'react';
import Hero from "./HeroSection"
import About from "./About"
import Testimonials from "./Testimonials"
import Service from "./Service"   
import Haveproject from "./Haveproject" 
import Form from "./Form" 


const CustomToken = () => {
    const [select, setSelect] = useState('Hold Tokens');
    return (
    <>
     <Hero/>
     <About/>
     <Service/>
     <Haveproject/>
     <Testimonials/>
     <Form/>
    </>
    )
}

export default CustomToken
