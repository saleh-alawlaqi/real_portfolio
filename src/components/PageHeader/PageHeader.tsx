interface PageHeaderProps {
    path: string;
    children?: React.ReactNode;
}
const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className="page-header flex flex-col space-y-5">
            <div className="path_wrap flex items-center space-x-2">
                <span className="text-gray-400">Home</span>
                <span className="arrow w-5 h-5 bg-center bg-contain bg-arrow_right"></span>
                <span className="text-gray-600">{props.path}</span>
            </div>
            <div className="title space-y-4">
                <h2 className="text-[30px] text-gray-700 font-gt lg:text-[50px]">
                    {props.children}
                </h2>
            </div>
        </div>
    );
};

export default PageHeader;
