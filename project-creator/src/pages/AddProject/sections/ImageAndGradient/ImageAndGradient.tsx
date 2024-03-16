import { Button, Select, SelectItem } from "@nextui-org/react";
import MainImage from "../../../../boxes/MainImage";
import { useProjectForm } from "../../../AddProject/ProjectForm";
import { gradients } from "../../../../src/types";
import { useRef } from "react";

const ImageAndGradient = () => {
    const { project, setProject, previewMainImage, handleMainImageChange, error } =
        useProjectForm();
    const fileRef = useRef<HTMLInputElement>(null);

    const onClickFile = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
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
                    onChange={handleMainImageChange}
                />
                <div className="flex flex-col">
                    <span className="text-sm">Main image</span>
                    <Button onClick={onClickFile} className="w-full mt-2">
                        Upload main image
                    </Button>
                </div>
                <MainImage image={previewMainImage} />
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <Select
                    placeholder="Select gradients"
                    name="gradient"
                    value={project.gradient}
                    label="Gradient"
                    id="gradient"
                    classNames={
                        error === "gradient" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    labelPlacement="outside"
                    onChange={(e) =>
                        setProject((prev) => ({
                            ...prev,
                            gradient: e.target.value as gradients,
                        }))
                    }
                >
                    <SelectItem key="gradient-1" value="gradient-1">
                        gradient-1
                    </SelectItem>
                    <SelectItem key="gradient-2" value="gradient-2">
                        gradient-2
                    </SelectItem>
                    <SelectItem key="gradient-3" value="gradient-3">
                        gradient-3
                    </SelectItem>
                    <SelectItem key="gradient-4" value="gradient-4">
                        gradient-4
                    </SelectItem>
                    <SelectItem key="gradient-5" value="gradient-5">
                        gradient-5
                    </SelectItem>
                    <SelectItem key="gradient-6" value="gradient-6">
                        gradient-6
                    </SelectItem>
                    <SelectItem key="gradient-7" value="gradient-7">
                        gradient-7
                    </SelectItem>
                    <SelectItem key="gradient-8" value="gradient-8">
                        gradient-8
                    </SelectItem>
                    <SelectItem key="gradient-9" value="gradient-9">
                        gradient-9
                    </SelectItem>
                    <SelectItem key="gradient-10" value="gradient-10">
                        gradient-10
                    </SelectItem>
                    <SelectItem key="gradient-11" value="gradient-11">
                        gradient-11
                    </SelectItem>
                    <SelectItem key="gradient-12" value="gradient-12">
                        gradient-12
                    </SelectItem>
                    <SelectItem key="gradient-13" value="gradient-13">
                        gradient-13
                    </SelectItem>
                </Select>
                <div className={`w-full h-40 rounded-lg ${project.gradient} bg-slate-400`}></div>
            </div>
        </div>
    );
};

export default ImageAndGradient;
