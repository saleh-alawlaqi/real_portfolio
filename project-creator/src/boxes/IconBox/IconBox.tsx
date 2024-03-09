import { Button, Input } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";

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
        <div className="flex flex-col border shadow-medium rounded-lg border-slate-200 p-5 items-center">
            <div
                style={{
                    backgroundImage: `url("${path}")`,
                }}
                className="icon-box rounded-md  bg-slate-100 bg-center  center relative flex items-center justify-center bg-18 bg-no-repeat w-16 h-16"
            ></div>

            <Input
                value={title}
                onChange={onEditTitle}
                labelPlacement="outside"
                className="text-center mt-5 w-40"
            />
            <Input
                labelPlacement="outside"
                onChange={onEditPath}
                value={path}
                className="text-center mt-5 w-40"
            />
            <Button onClick={onRemove} variant="solid" className="mt-5 w-full" color="danger">
                Remove
            </Button>
        </div>
    );
};

export default IconBox;
