import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

interface MainImageProps {
    image: File | string;
    onRemoveImage: () => void;
}

const MainImage = ({ image, onRemoveImage }: MainImageProps) => {
    const [preview, setPreview] = useState<string>("");

    useEffect(() => {
        const handleFileChange = () => {
            if (image && typeof image !== "string") {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(image);
            } else {
                setPreview("");
            }
        };
        handleFileChange();
    }, [image]);

    return (
        <div className="flex relative">
            {image && (
                <Button
                    isIconOnly
                    variant="solid"
                    size="sm"
                    onClick={onRemoveImage}
                    color="danger"
                    className="close absolute right-2 top-2"
                />
            )}
            <img src={preview} className={`w-full h-40 rounded-lg object-cover bg-slate-400`} />;
        </div>
    );
};
export default MainImage;
