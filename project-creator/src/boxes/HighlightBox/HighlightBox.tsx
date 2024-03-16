import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useProjectForm } from "../../pages/AddProject/ProjectForm";

interface HighlightBoxProps {
    title: string;
    index: number;
}
const HighlightBox = ({ index, title }: HighlightBoxProps) => {
    const { setProject } = useProjectForm();
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                highlights: prev.highlights.map((highlight, i) => {
                    if (i === index) {
                        return e.target.value;
                    }
                    return highlight;
                }),
            };
        });
    };
    const onRemove = () => {
        setProject((prev) => {
            return {
                ...prev,
                highlights: prev.highlights.filter((_, i) => i !== index),
            };
        });
    };
    return (
        <div className="flex w-full border shadow-medium rounded-lg border-slate-200 p-5 justify-between gap-5">
            <Input
                value={title}
                labelPlacement="outside"
                className="flex-1"
                onChange={onChangeTitle}
            />
            <Button variant="solid" color="danger" onClick={onRemove}>
                Remove
            </Button>
        </div>
    );
};

export default HighlightBox;
