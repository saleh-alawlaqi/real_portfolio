import { IBigProjectBox } from "../../types";
import ToolBox from "../ToolBox";

interface BigProjectBoxProps extends IBigProjectBox {}
const BigProjectBox = (props: BigProjectBoxProps) => {
    return (
        <div className="flex flex-col bg-white p-5 w-full border-2 border-slate-300 rounded-xl lg:p-7">
            <div className="project_info flex items-center gap-5 justify-between w-full">
                <div className="flex flex-col flex-1">
                    <h3 className="title text-[22px] capitalize lg:text-[34px] font-inter_bold font-light text-gray-700 mt-3">
                        {props.name}
                    </h3>
                    <p className="description capitalize font-normal text-medium lg:text-[18px] text-gray-600">
                        {props.type} project
                    </p>
                </div>
                <button className="w-10 h-10 rounded-full border border-slate-400 bg-arrow_right_1 bg-center bg-no-repeat bg-32 lg:bg-48 hover:rotate-45 transition-all lg:w-14 lg:h-14"></button>
            </div>
            <div className="tools mt-5 grid">
                {props.tools.map((tool) => (
                    <ToolBox tool={tool} />
                ))}
            </div>
            <div className="project_image w-full h-[180px] lg:h-[270px] mt-7 rounded-xl bg-image bg-cover bg-no-repeat bg-center"></div>
        </div>
    );
};

export default BigProjectBox;
