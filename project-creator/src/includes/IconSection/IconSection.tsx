import { Button } from "@nextui-org/react";
import { useProjectForm } from "../../pages/AddProject/ProjectForm";
import IconBox from "../../boxes/IconBox";
import { useRef } from "react";

interface IconSectionProps {
    error: string;
    onAddIcon: (e: any) => void;
    icons: (string | File)[];
    onRemoveIcon: (index: number) => void;
}
const IconSection = ({ error, onAddIcon, icons, onRemoveIcon }: IconSectionProps) => {
    const iconRef = useRef<HTMLInputElement>(null);

    const handleIconButton = () => {
        if (iconRef.current) {
            iconRef.current.click();
        }
    };

    return (
        <div
            id="icon_section"
            className={`flex flex-col types gap-5 ${
                error === "icon_section" ? "border-2 border-red-500" : ""
            }`}
        >
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Icons</span>
                <input
                    onChange={onAddIcon}
                    type="file"
                    multiple
                    ref={iconRef}
                    hidden
                    accept=".svg"
                />
                <Button
                    onClick={handleIconButton}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add icon
                </Button>
            </div>
            {icons.length > 0 && (
                <div className="flex flex-wrap gap-5">
                    {icons
                        ?.slice()
                        .reverse()
                        .map((icon, index) => (
                            <IconBox
                                onRemove={onRemoveIcon}
                                index={icons.length - 1 - index}
                                key={index}
                                path={icon}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default IconSection;
