import CTA from "../../components/CTA";
import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="flex flex-col mt-12 lg:max-w-[1300px] w-[90%]">
            <div className="flex flex-col w-full rounded-lg">
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
