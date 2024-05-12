import { useState } from 'react';
import Hero from "./HeroSection"
import About from "./About"
import Testimonials from "./Testimonials"
import Service from "./Service"   
import Haveproject from "./Haveproject" 
import Form from '../../components/partials/Form'; 
import CampaignManagement from "./CampaignManagement" 
import BenefitOfManaged  from "./BenefitOfManaged" 

const CustomToken = () => {
    const [select, setSelect] = useState('Hold Tokens');
    return (
    <>
     <Hero/>
     <About/>
     <Service/>
     <CampaignManagement/>
     <BenefitOfManaged/>
     <Haveproject/>
     <Testimonials/>
     <Form/>
    </>
    )
}

export default CustomToken
