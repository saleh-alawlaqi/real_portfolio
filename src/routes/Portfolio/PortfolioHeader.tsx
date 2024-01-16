import Tag from "../../components/Tag";

const PortfolioHeader = () => {
    return (
        <div className="header flex flex-col space-y-5">
            <div className="path_wrap flex items-center space-x-2">
                <span className="text-gray-400">Home</span>
                <span className="arrow w-5 h-5 bg-center bg-contain bg-arrow_right"></span>
                <span className="text-gray-600">Portfolio</span>
            </div>

            <div className="title space-y-4">
                <h2 className="text-[30px] text-gray-700 font-gt lg:text-[50px]">
                    Browse All Of My Projects
                </h2>
            </div>

            <div className="search_box_and_types flex flex-col space-y-4 lg:space-y-0 lg:space-x-6 lg:flex-row lg:items-center lg:justify-between">
                <input
                    type="text"
                    placeholder="Search For Projects"
                    className="outline-none p-3 bg-24 pl-10 bg-search bg-left bg-gray-100 w-full border border-gray-200 rounded-md lg:w-[30em]"
                />
                <div className="types flex flex-wrap gap-3 lg:flex-1">
                    <Tag label="All" />
                    <Tag label="Templates" />
                    <Tag label="Mockups" />
                    <Tag label="Courses" />
                    <Tag label="Fonts" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PortfolioHeader;
