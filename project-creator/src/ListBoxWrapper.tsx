import React from "react";
export const ListboxWrapper = ({ children, label }: any) => (
    <div className="flex flex-col flex-1 gap-2">
        <span className="text-md">{label}</span>
        <div className="w-full border-small h-60  overflow-y-scroll px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            {children}
        </div>
    </div>
);
