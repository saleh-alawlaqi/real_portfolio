import CTA from "../../components/CTA";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="flex flex-col items-center self-stretch">
            <Header />
            <div className="flex flex-col mt-12  w-full rounded-lg mx-8 lg:mx-12 lg:max-w-[1300px]">
                {/* <ContactHeader /> */}
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
