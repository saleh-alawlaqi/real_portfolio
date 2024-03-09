import { useEffect, useState } from "react";
import { useProjectForm } from "../../ProjectForm";
import { Button } from "@nextui-org/react";

interface MainImageProps {
    image: File | null;
}

const MainImage = ({ image }: MainImageProps) => {
    const [preview, setPreview] = useState<string>("");
    const { setScreenshots, setPreviewMainImage, previewMainImage } = useProjectForm();

    useEffect(() => {
        const handleFileChange = () => {
            if (image) {
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

    const onRemove = () => {
        setPreviewMainImage(null);
    };
    return (
        <div className="flex relative">
            {previewMainImage && (
                <Button
                    isIconOnly
                    variant="solid"
                    size="sm"
                    color="danger"
                    className="close absolute right-2 top-2"
                />
            )}
            <img src={preview} className={`w-full h-40 rounded-lg object-cover bg-slate-400`} />;
        </div>
    );
};
export default MainImage;
