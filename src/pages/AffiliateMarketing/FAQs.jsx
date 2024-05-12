import Accordions from "../../components/ui/Accordion/Accordion"

const FAQs = () => {
    const data = [
        {
            title: "What is affiliate marketing?",
            content: "Affiliate marketing is a way to make money by sending users to an advertiser's website through a website, social media, or email.",
        },
        {
            title: "How does affiliate marketing work?",
            content: "Affiliate marketers distribute content to their audience, who can then click on tracking links to be sent to the advertiser's website."
        },
        {
            title: "What are the main components of a successful affiliate marketing program?",
            content: "A successful program has quality products, good commissions, and clear communication and support."
        },
        {
            title: "What are the three main components of a successful affiliate marketing program?",
            content: "A successful affiliate marketing program has three main components:",
            list: [" 1.	Quality products", "2. Enticing commissions", "3. Clear communication and support"]
        },
        {
            title: "What are some affiliate networks?",
            content: "Some affiliate networks include:",
            list: [" 1.Amazon", "2. Enticing commissions", "3. Clear communication and support"]
        }
    ];
    return (
        <div className='bg-[#E1F1FF] py-14'>
            <div className="faqs bg-[#6DC3F4]  w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
                    <div>
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-[#fff] font-sans pb-8">Affiliate Marketing FAQ'S</h2>
                        <Accordions data={data} />
                    </div>
                
            </div>
        </div>
    )
}

export default FAQs
