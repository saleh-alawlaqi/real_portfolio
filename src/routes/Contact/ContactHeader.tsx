const ContactHeader = () => {
    return (
        <div className="header flex flex-col space-y-5">
            <div className="path_wrap flex items-center space-x-2">
                <span className="text-gray-400">Home</span>
                <span className="arrow w-5 h-5 bg-center bg-contain bg-arrow_right"></span>
                <span className="text-gray-600">Contact me</span>
            </div>

            <div className="title space-y-4">
                <h2 className="text-[30px] font-gt lg:text-[40px] max-w-[10em]">
                    Need Any help? I'm here to help you.
                </h2>
            </div>
            <hr />
        </div>
    );
};

export default ContactHeader;
