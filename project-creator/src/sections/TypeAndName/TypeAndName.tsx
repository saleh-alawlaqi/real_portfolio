import { Input, Select, SelectItem } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";

const TypeAndName = () => {
    const { setProject, handleChangeWithWordCount, error, project } = useProjectForm();

    const projectNameWords = project.name.split(" ").length;
    return (
        <div className="flex gap-5 type-and-name items-start">
            <Select
                placeholder="Select Type"
                name="type"
                value={"software"}
                selectedKeys={[project.type]}
                className="flex-1"
                label="Type"
                classNames={error === "type" ? { base: "border-2 border-red-500" } : { base: "" }}
                id="type"
                labelPlacement="outside"
                onChange={(e) =>
                    setProject((prev) => ({
                        ...prev,
                        type: e.target.value as "software" | "frontend" | "noCode" | "uiDesign",
                    }))
                }
            >
                <SelectItem key="software" value="software">
                    Software
                </SelectItem>
                <SelectItem key="frontend" value="frontend">
                    Frontend
                </SelectItem>
                <SelectItem key="noCode" value="noCode">
                    No Code
                </SelectItem>
                <SelectItem key="uiDesign" value="uiDesign">
                    UI Design
                </SelectItem>
            </Select>
            <div className="flex flex-col items-end flex-1">
                <Input
                    labelPlacement="outside"
                    label="Project Name"
                    id="project_name"
                    placeholder="Project Name"
                    value={project.name}
                    name="name"
                    classNames={
                        error === "project_name"
                            ? { base: "border-2 border-red-500" }
                            : { base: "" }
                    }
                    onChange={(e) => handleChangeWithWordCount(e, 5)}
                />
                <span className="mt-2">Max words: {projectNameWords}/5</span>
            </div>
        </div>
    );
};

export default TypeAndName;
