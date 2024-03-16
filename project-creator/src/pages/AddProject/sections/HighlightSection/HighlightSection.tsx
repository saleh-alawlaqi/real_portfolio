import { Button } from "@nextui-org/react";
import HighlightBox from "../../../../boxes/HighlightBox/HighlightBox";
import { useProjectForm } from "../../ProjectForm";

const HighlightSection = () => {
    const { setProject, project, error } = useProjectForm();
    const addHighlight = () => {
        setProject((prev) => ({
            ...prev,
            highlights: [...prev.highlights!, "New Highlight Section"],
        }));
    };
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
                    onClick={addHighlight}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add highlight
                </Button>
            </div>
            {project.highlights.length > 0 && (
                <div className="flex flex-wrap gap-5">
                    {project.highlights
                        ?.slice()
                        .reverse()
                        .map((highlight, index) => (
                            <HighlightBox
                                title={highlight}
                                key={index}
                                index={project.highlights.length - 1 - index} // Adjust index for descending order
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default HighlightSection;
