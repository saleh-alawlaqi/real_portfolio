interface ContactBoxProps {
    title: string;
    value: string;
}
const ContactBox = (props: ContactBoxProps) => {
    return (
        <div className="email_box flex items-center ">
            <span className="email_icon bg-slate-200 w-12 h-12 rounded-lg"></span>
            <div className="email_info flex flex-col ml-5">
                <h4 className="text-[18px] font-semibold">{props.title}</h4>
                <p className="text-gray-400 text-[16px] font-gt">{props.value}</p>
            </div>
        </div>
    );
};

export default ContactBox;
