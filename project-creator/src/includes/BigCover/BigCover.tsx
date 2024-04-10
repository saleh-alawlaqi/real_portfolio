import { Button } from "@nextui-org/react";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../firebase-config";

interface BigCoverProps {
    error: string;
    bigCover: string | File;
    onChangeBigCover: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveBigCover: () => void;
}
const BigCover = ({ error, bigCover, onChangeBigCover, onRemoveBigCover }: BigCoverProps) => {
    const fileRef = useRef<HTMLInputElement>(null);

    const onClickFile = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    const [preview, setPreview] = useState<string>("");

    useEffect(() => {
        const handleFileChange = async () => {
            if (bigCover && typeof bigCover !== "string") {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(bigCover);
            } else if (bigCover && typeof bigCover === "string") {
                const mainImage = ref(storage, `gs://portfolio-9601d.appspot.com/${bigCover}`);
                const url = await getDownloadURL(mainImage);
                setPreview(url);
            } else {
                setPreview("");
            }
        };
        handleFileChange();
    }, [bigCover]);
    return (
        <div
            className={`flex flex-1 flex-col gap-5 relative ${
                error === "big_cover" ? "border-2 border-red-500" : ""
            }`}
        >
            <input
                name="bigCover"
                hidden
                type="file"
                ref={fileRef}
                id="big_cover"
                className="flex-1"
                onChange={onChangeBigCover}
            />
            <div className="flex justify-between items-center">
                <span className="text-xl">Big cover</span>
                <Button onClick={onClickFile} className="mt-2">
                    Upload big cover
                </Button>
            </div>
            <div
                style={{ backgroundImage: `url("${preview}")` }}
                className="flex w-full bg-top bg-cover bg-slate-200 h-96 relative"
            >
                {bigCover && (
                    <Button
                        isIconOnly
                        variant="solid"
                        size="sm"
                        onClick={() => onRemoveBigCover()}
                        color="danger"
                        className="close absolute right-2 top-2"
                    />
                )}
            </div>
        </div>
    );
};

export default BigCover;
