const Graphic = ({ position }: { position: "top" | "bottom" }) => {
    if (position === "bottom") {
        return (
            <div className="graphic absolute justify-between -bottom-12 left-0 w-full flex items-center">
                <div className="bg-gray-950 rounded-br-3xl w-[15%] h-[4em]"></div>
                <div className="bg-slate-100 rounded-tl-3xl rounded-tr-3xl h-[6em] flex-1 flex flex-col items-center relative">
                    <div className="pins flex justify-between px-10 absolute top-0 w-full self-center lg:max-w-[1300px]">
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="line h-9 bg-slate-400 w-[0.5px]"></span>
                            <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-950 rounded-bl-3xl w-[15%] h-[4em]"></div>
            </div>
        );
    }
    return (
        <div className="graphic absolute justify-between -top-12 left-0 w-full flex items-center">
            <div className="bg-gray-950 rounded-tr-3xl w-[15%] h-[4em]"></div>
            <div className="bg-slate-100 rounded-bl-3xl rounded-br-3xl h-[6em] flex-1 flex flex-col items-center relative">
                <div className="pins flex justify-between px-10 absolute bottom-0 w-full self-center lg:max-w-[1300px]">
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="circle border border-slate-400 rounded-full w-[6px] h-[6px]"></span>
                        <span className="line h-9 bg-slate-400 mt-2 w-[0.5px]"></span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-950 rounded-tl-3xl w-[15%] h-[4em]"></div>
        </div>
    );
};

export default Graphic;
