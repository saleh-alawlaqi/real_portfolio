import { Button, Input } from "@nextui-org/react";
import React from "react";

interface HighlightBoxProps {
    title: string;
    index: number;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onRemove: (index: number) => void;
}
const HighlightBox = ({ index, title, onChangeTitle, onRemove }: HighlightBoxProps) => {
    return (
        <div className="flex w-full border shadow-medium rounded-lg border-slate-200 p-5 justify-between gap-5">
            <Input
                value={title}
                labelPlacement="outside"
                className="flex-1"
                onChange={(e) => onChangeTitle(e, index)}
            />
            <Button variant="solid" color="danger" onClick={() => onRemove(index)}>
                Remove
            </Button>
        </div>
    );
};

export default HighlightBox;
