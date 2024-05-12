import Header from "../../components/partials/header";
import Footer from "../../components/partials/footer";
import HeroSection from "./HeroSection";
import LockTokens from "./LockTokens";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import TypesOfLocks from "./TypesOfLocks";
import Benefits from "./Benefits";
import Haveproject from "./Haveproject";
import Form from "../../components/partials/Form";
import About from "./About";

const index = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <About/>
            <TypesOfLocks />
            <Benefits />
            <Haveproject/>
            <LockTokens />
            {/* <FAQs /> */}
            <Testimonials />
            <Form/>
            <Footer />
        </>
    )
}

export default index
