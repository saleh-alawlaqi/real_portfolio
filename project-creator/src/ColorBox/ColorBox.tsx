import { Button, Input } from "@nextui-org/react";
import { useProjectForm } from "../ProjectForm";
import { BlockPicker } from "react-color";
import { useState } from "react";

interface ColorBoxProp {
    color: string;
    shade: string;
    index: number;
    sectionIndex: number;
}
const ColorBox = ({ index, sectionIndex, color, shade }: ColorBoxProp) => {
    const { project, setProject } = useProjectForm();
    const [showPicker, setShowPicker] = useState(false);
    const onTogglePicker = () => setShowPicker((prev) => !prev);
    const onRemove = () => {
        setProject((prev) => {
            return {
                ...prev,
                colors: prev.colors.map((color, i) => {
                    if (i === sectionIndex) {
                        return {
                            ...color,
                            shades: color.shades.filter((_, j) => j !== index),
                        };
                    }
                    return color;
                }),
            };
        });
    };
    const onEditShade = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                colors: prev.colors.map((color, i) => {
                    if (i === sectionIndex) {
                        return {
                            ...color,
                            shades: color.shades.map((shade, j) => {
                                if (j === index) {
                                    return { ...shade, shade: e.target.value };
                                }
                                return shade;
                            }),
                        };
                    }
                    return color;
                }),
            };
        });
    };
    const onEditColor = (editedColor: string) => {
        setProject((prev) => {
            return {
                ...prev,
                colors: prev.colors.map((color, i) => {
                    if (i === sectionIndex) {
                        return {
                            ...color,
                            shades: color.shades.map((shade, j) => {
                                if (j === index) {
                                    return { ...shade, color: editedColor };
                                }
                                return shade;
                            }),
                        };
                    }
                    return color;
                }),
            };
        });
    };
    return (
        <div className="color-box gap-3 flex flex-col items-center">
            <div
                className="color_box  rounded-2xl w-16 h-16 relative flex items-center justify-center"
                style={{ background: color }}
            >
                <button className="white" onClick={onTogglePicker}>
                    Change
                </button>
                {showPicker && (
                    <div
                        className="flex flex-col bottom-[110%] !absolute"
                        onClick={(e) => e.preventDefault()}
                    >
                        <BlockPicker
                            color={color}
                            onChange={(color) => onEditColor(color.hex)}
                            triangle="hide"
                            className=""
                        />
                    </div>
                )}
            </div>
            <Input
                value={shade}
                onChange={onEditShade}
                size="sm"
                labelPlacement="outside"
                className="w-16"
                placeholder="Shade"
                name="shade"
            />
            <Button onClick={onRemove} variant="solid" color="danger">
                Remove
            </Button>
        </div>
    );
};

export default ColorBox;