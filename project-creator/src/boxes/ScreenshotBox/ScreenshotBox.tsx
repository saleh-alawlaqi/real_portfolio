import { Button } from "@nextui-org/react";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase-config";

interface ScreenshotBoxProps {
    index: number;
    screenshot: File | string;
    onRemove: (index: number, name: string) => void;
}

const ScreenshotBox = ({ index, screenshot, onRemove }: ScreenshotBoxProps) => {
    const [preview, setPreview] = useState<string>("");
    useEffect(() => {
        const handleFileChange = async () => {
            if (screenshot && typeof screenshot !== "string") {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(screenshot);
            } else if (screenshot && typeof screenshot === "string") {
                const mainImage = ref(storage, `gs://portfolio-9601d.appspot.com/${screenshot}`);
                const url = await getDownloadURL(mainImage);
                setPreview(url);
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
                onClick={() =>
                    onRemove(index, screenshot instanceof File ? screenshot.name : screenshot)
                }
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
