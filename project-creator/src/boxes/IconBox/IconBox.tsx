import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface IconBoxProps {
    path: File | string;
    index: number;
    onRemove: (index: number) => void;
}
const IconBox = ({ path, index, onRemove }: IconBoxProps) => {
    const [preview, setPreview] = useState<string>("");
    useEffect(() => {
        const handleFileChange = () => {
            if (typeof path !== "string") {
                if (path) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreview(reader.result as string);
                    };
                    reader.readAsDataURL(path);
                } else {
                    setPreview("");
                }
            }
        };
        handleFileChange();
    }, [path]);

    return (
        <div className="flex flex-col border shadow-medium rounded-lg border-slate-200 p-5 items-center">
            <div
                style={{
                    backgroundImage: `url("${preview}")`,
                }}
                className="icon-box rounded-md  bg-slate-100 bg-center  center relative flex items-center justify-center bg-18 bg-no-repeat w-16 h-16"
            ></div>

            {/* <Input
                labelPlacement="outside"
                onChange={onEditPath}
                value={path}
                className="text-center mt-5 w-40"
            /> */}
            <Button
                onClick={() => onRemove(index)}
                variant="solid"
                className="mt-5 w-full"
                color="danger"
            >
                Remove
            </Button>
        </div>
    );
};

export default IconBox;
