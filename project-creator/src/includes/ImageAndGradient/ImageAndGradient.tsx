import { Button, Select, SelectItem } from "@nextui-org/react";
import MainImage from "../../boxes/MainImage";
import { gradients } from "../../../../src/types";
import { useRef } from "react";

interface ImageAndGradientProps {
    error: string;
    mainImage: string | File;
    gradient: gradients;
    onChangeMainImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeGradient: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onRemoveImage: () => void;
}

const ImageAndGradient = ({
    error,
    mainImage,
    onChangeGradient,
    onChangeMainImage,
    onRemoveImage,
    gradient,
}: ImageAndGradientProps) => {
    const fileRef = useRef<HTMLInputElement>(null);

    const onClickFile = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    const gradients = [
        "gradient-1",
        "gradient-2",
        "gradient-3",
        "gradient-4",
        "gradient-5",
        "gradient-6",
        "gradient-7",
        "gradient-8",
        "gradient-9",
        "gradient-10",
        "gradient-11",
        "gradient-12",
        "gradient-13",
    ];
    return (
        <div className="flex gap-5 image-and-gradient">
            <div
                className={`flex flex-1 flex-col gap-5 ${
                    error === "main_image" ? "border-2 border-red-500" : ""
                }`}
            >
                <input
                    placeholder="Main Image"
                    name="mainImage"
                    hidden
                    type="file"
                    ref={fileRef}
                    id="main_image"
                    className="flex-1"
                    onChange={onChangeMainImage}
                />
                <div className="flex flex-col">
                    <span className="text-sm">Main image</span>
                    <Button onClick={onClickFile} disableAnimation className="w-full mt-2">
                        Upload main image
                    </Button>
                </div>
                <MainImage onRemoveImage={onRemoveImage} image={mainImage} />
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <Select
                    placeholder="Select gradients"
                    name="gradient"
                    value={gradient}
                    label="Gradient"
                    disableAnimation
                    items={gradients.map((g) => ({ key: g, data: g }))}
                    selectedKeys={[gradient]}
                    id="gradient"
                    classNames={
                        error === "gradient" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    renderValue={(items) => {
                        return items.map((item) => (
                            <div key={item.key} className="flex items-center gap-3">
                                <div className={`${item.data?.data} w-5 h-5 rounded-full`}></div>
                                <span>{item.data?.data}</span>
                            </div>
                        ));
                    }}
                    labelPlacement="outside"
                    onChange={(e) => {
                        console.log(e.target.value);
                        onChangeGradient(e);
                    }}
                    selectionMode="single"
                >
                    {(gradient) => (
                        <SelectItem className="flex" key={gradient.key} textValue={gradient.data}>
                            <div className="flex items-center gap-3">
                                <div className={`${gradient.data} w-5 h-5 rounded-full`}></div>
                                <span>{gradient.data}</span>
                            </div>
                        </SelectItem>
                    )}
                </Select>
                <div className={`w-full h-64 rounded-lg ${gradient} bg-slate-400`}></div>
            </div>
        </div>
    );
};

export default ImageAndGradient;
