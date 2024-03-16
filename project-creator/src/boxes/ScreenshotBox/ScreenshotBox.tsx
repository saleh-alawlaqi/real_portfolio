import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useProjectForm } from "../../pages/AddProject/ProjectForm";

interface ScreenshotBoxProps {
    index: number;
    screenshot: File | string;
    onRemove: (index: number) => void;
}

const ScreenshotBox = ({ index, screenshot, onRemove }: ScreenshotBoxProps) => {
    const [preview, setPreview] = useState<string>("");
    useEffect(() => {
        const handleFileChange = () => {
            if (screenshot && typeof screenshot !== "string") {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(screenshot);
            } else {
                setPreview("");
            }
        };
        handleFileChange();
    }, [screenshot]);

    return (
        <div className="flex flex-col border shadow-medium rounded-lg border-slate-200 p-4 gap-4">
            <img
                className="w-60 object-cover border border-slate-500 h-48 rounded-md"
                key={index}
                src={preview}
            />
            <Button
                size="sm"
                onClick={() => onRemove(index)}
                className="w-full"
                variant="solid"
                color="danger"
            >
                Remove
            </Button>
        </div>
    );
};
export default ScreenshotBox;
