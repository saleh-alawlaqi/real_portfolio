import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useProjectForm } from "../ProjectForm";

interface ScreenshotBoxProps {
    index: number;
    screenshot: File;
}

const ScreenshotBox = ({ index, screenshot }: ScreenshotBoxProps) => {
    const [preview, setPreview] = useState<string>("");
    const { setScreenshots } = useProjectForm();
    useEffect(() => {
        const handleFileChange = () => {
            if (screenshot) {
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

    const onRemove = () => {
        setScreenshots((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-4">
            <img
                className="w-16 object-cover border border-slate-500 h-16 rounded-md"
                key={index}
                src={preview}
            />
            <Button size="sm" onClick={onRemove} className="w-full" variant="solid" color="danger">
                Remove
            </Button>
        </div>
    );
};
export default ScreenshotBox;