import { IBigProjectBox } from "../../types";
import ToolBox from "../ToolBox";

interface BigProjectBoxProps extends IBigProjectBox {}
const BigProjectBox = (props: BigProjectBoxProps) => {
    return (
        <div className="flex flex-col bg-white p-5 w-full border-2 border-slate-300 rounded-xl">
            <div className="project_info flex items-center gap-5 justify-between w-full lg:items-start lg:px-10 lg:pb-10">
                <div className="flex flex-col flex-1">
                    <h3 className="title text-[22px] capitalize lg:text-[34px] font-inter_bold font-light text-gray-700 mt-3">
                        {props.name}
                    </h3>
                    <p className="description capitalize font-normal text-medium lg:text-[18px] text-gray-600">
                        {props.type} project
                    </p>
                </div>
                <button className="w-10 h-10 rounded-full border border-slate-400 bg-arrow_right_1 bg-center bg-no-repeat bg-32 hover:rotate-45 transition-all"></button>
            </div>
            <div className="tools mt-5 grid">
                {props.tools.map((tool) => (
                    <ToolBox tool={tool} />
                ))}
            </div>
            <div className="project_image w-full h-[180px] mt-7 rounded-xl bg-image bg-cover bg-no-repeat bg-center"></div>
        </div>
    );
};

export default BigProjectBox;
