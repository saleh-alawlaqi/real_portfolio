import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useProjectForm } from "../ProjectForm";

interface IconBoxProps {
    path: string;
    title: string;
    index: number;
}
const IconBox = ({ path, title, index }: IconBoxProps) => {
    const { setProject } = useProjectForm();
    const onEditPath = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                icons: prev.icons.map((icon, i) => {
                    if (i === index) {
                        return { ...icon, path: e.target.value };
                    }
                    return icon;
                }),
            };
        });
    };
    const onEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                icons: prev.icons.map((icon, i) => {
                    if (i === index) {
                        return { ...icon, title: e.target.value };
                    }
                    return icon;
                }),
            };
        });
    };
    const onRemove = () => {
        setProject((prev) => {
            return {
                ...prev,
                icons: prev.icons.filter((_, i) => i !== index),
            };
        });
    };
    return (
        <div className="flex flex-col items-center">
            <div
                style={{
                    backgroundImage: `url("${path}")`,
                }}
                className="icon-box rounded-md bg-slate-100 bg-center  center relative flex items-center justify-center bg-18 bg-no-repeat w-10 h-10"
            ></div>

            <Input value={title} onChange={onEditTitle} className="text-center mt-2 w-40" />
            <Input onChange={onEditPath} value={path} className="text-center mt-2 w-40" />
            <Button onClick={onRemove} variant="solid" color="danger">
                Remove
            </Button>
        </div>
    );
};

export default IconBox;
