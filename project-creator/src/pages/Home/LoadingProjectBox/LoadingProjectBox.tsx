import { Skeleton } from "@nextui-org/react";

const LoadingProjectBox = () => {
    return (
        <div className="flex justify-between rounded-md items-center bg-slate-50 p-5 w-full">
            <Skeleton className="w-40 rounded-md h-28"></Skeleton>
            <div className="flex w-[14rem] ml-5 gap-4 flex-col">
                <Skeleton className="h-4 rounded-full w-28"></Skeleton>
                <Skeleton className="h-4 rounded-full w-16"></Skeleton>
            </div>
            <Skeleton className="rounded-full ml-auto">View demo</Skeleton>
            <Skeleton className="rounded-full ml-5">View demo</Skeleton>
        </div>
    );
};

export default LoadingProjectBox;
