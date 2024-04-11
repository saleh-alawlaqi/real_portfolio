import { Button } from "@nextui-org/react";
import HighlightBox from "../../boxes/HighlightBox/HighlightBox";

interface HighlightSectionProps {
    error: string;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onRemove: (index: number) => void;
    onAddHighlight: () => void;
    highlights: string[];
}
const HighlightSection = ({
    error,
    onAddHighlight,
    onChangeTitle,
    highlights,
    onRemove,
}: HighlightSectionProps) => {
    return (
        <div
            id="highlight_section"
            className={`flex flex-col highlights gap-5 ${
                error === "highlight_section" ? "border-2 border-red-500" : ""
            }`}
        >
            <div className="icons-heading flex justify-between">
                <span className="text-2xl">Highlights</span>
                <Button
                    onClick={onAddHighlight}
                    className="rounded-full font-medium"
                    disableAnimation
                    variant="solid"
                    color="primary"
                >
                    Add highlight
                </Button>
            </div>
            {highlights.length > 0 && (
                <div className="flex flex-wrap gap-5">
                    {highlights
                        ?.slice()
                        .reverse()
                        .map((highlight, index) => (
                            <HighlightBox
                                title={highlight}
                                onChangeTitle={onChangeTitle}
                                onRemove={onRemove}
                                key={index}
                                index={highlights.length - 1 - index} // Adjust index for descending order
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default HighlightSection;
