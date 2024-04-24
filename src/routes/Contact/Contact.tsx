import CTA from "../../components/CTA";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden relative w-full">
            <Header />
            <div className="flex flex-col mt-12 w-[90%] lg:max-w-[1300px]  relative gap-8 lg:gap-10">
                <PageHeader path="Contact Me">
                    Need Any help? <br /> I'm here to help you.
                </PageHeader>

                <div className="flex flex-col lg:space-x-20 lg:flex-row space-y-5 mt-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Contact;
