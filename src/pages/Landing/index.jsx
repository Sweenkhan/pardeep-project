import Header from "../../components/partials/header";
import Footer from "../../components/partials/footer";
import HeroSection from "./HeroSection";
import LockTokens from "./LockTokens";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import TypesOfLocks from "./TypesOfLocks";
import Benefits from "./Benefits";
import Haveproject from "./Haveproject";

const index = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <LockTokens />
            <TypesOfLocks />
            <Benefits />
            <Haveproject/>
            {/* <FAQs /> */}
            <Testimonials />
            <Footer />
        </>
    )
}

export default index
