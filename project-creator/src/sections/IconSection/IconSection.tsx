import { Button } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";
import IconBox from "../../boxes/IconBox";

const IconSection = () => {
    const { setProject, project } = useProjectForm();
    const addIcon = () => {
        setProject((prev) => ({
            ...prev,
            icons: [
                ...prev.icons!,
                {
                    title: "New Icon Section",
                    path: "path",
                },
            ],
        }));
    };
    return (
        <div className="flex flex-col icons gap-5">
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Icons</span>
                <Button
                    onClick={addIcon}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add icon
                </Button>
            </div>
            {project.icons.length > 0 && (
                <div className="flex flex-wrap gap-5">
                    {project.icons
                        ?.slice()
                        .reverse()
                        .map((icon, index) => (
                            <IconBox
                                index={project.icons.length - 1 - index}
                                key={index}
                                {...icon}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default IconSection;
