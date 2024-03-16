import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useProjectForm } from "../../pages/AddProject/ProjectForm";

interface IconBoxProps {
    path: File;
    index: number;
}
const IconBox = ({ path, index }: IconBoxProps) => {
    const [preview, setPreview] = useState<string>("");
    const { setIcons } = useProjectForm();
    useEffect(() => {
        const handleFileChange = () => {
            if (path) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(path);
            } else {
                setPreview("");
            }
        };
        handleFileChange();
    }, [path]);

    const onEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIcons((prev) => {
            return prev.map((icon, i) => {
                if (i === index) {
                    return { ...icon, title: e.target.value };
                }
                return icon;
            });
        });
    };

    const onRemove = () => {
        setIcons((prev) => prev.filter((_, i) => i !== index));
    };
    return (
        <div className="flex flex-col border shadow-medium rounded-lg border-slate-200 p-5 items-center">
            <div
                style={{
                    backgroundImage: `url("${preview}")`,
                }}
                className="icon-box rounded-md  bg-slate-100 bg-center  center relative flex items-center justify-center bg-18 bg-no-repeat w-16 h-16"
            ></div>

            <Input
                value={path.name}
                onChange={onEditTitle}
                labelPlacement="outside"
                className="text-center mt-5 w-40"
            />
            {/* <Input
                labelPlacement="outside"
                onChange={onEditPath}
                value={path}
                className="text-center mt-5 w-40"
            /> */}
            <Button onClick={onRemove} variant="solid" className="mt-5 w-full" color="danger">
                Remove
            </Button>
        </div>
    );
};

export default IconBox;
