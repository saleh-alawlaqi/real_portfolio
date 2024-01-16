import ContactBox from "./ContactBox";

const ContactInfo = () => {
    return (
        <div className="contact_box flex flex-col flex-1">
            <div className="heading_and_description flex flex-col">
                <h3 className="text-[20px] font-gt font-bold lg:text-[30px] text-slate-600">
                    Get In Touch!
                </h3>
                <p className="text-gray-500 text-[14px] lg:text-[16px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                </p>
            </div>
            <div className="contact_info_wrap contact_box_grid mt-8">
                <ContactBox title="Email" value="alexsouske18@gmail.com" />
                <ContactBox title="Email" value="alexsouske18@gmail.com" />
                <ContactBox title="Email" value="alexsouske18@gmail.com" />
                <ContactBox title="Email" value="alexsouske18@gmail.com" />
            </div>
        </div>
    );
};

export default ContactInfo;
