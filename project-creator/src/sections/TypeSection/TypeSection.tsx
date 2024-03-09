import { Button } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";
import TypeBox from "../../boxes/TypeBox";

const TypeSection = () => {
    const { setProject, project } = useProjectForm();
    const addType = () => {
        setProject((prev) => ({
            ...prev,
            types: [
                ...prev.types!,
                {
                    title: "New Type Section",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    fontWeight: "400",
                    fontFamily: "Arial",
                },
            ],
        }));
    };
    return (
        <div className="flex flex-col types gap-5">
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Typography</span>
                <Button
                    onClick={addType}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add type
                </Button>
            </div>
            {project.type.length > 0 &&
                project.types
                    ?.slice()
                    .reverse()
                    .map((type, index) => (
                        <TypeBox
                            index={project.types.length - 1 - index} // Adjust index for descending order
                            key={index}
                            {...type}
                        />
                    ))}
        </div>
    );
};

export default TypeSection;
