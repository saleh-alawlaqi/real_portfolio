import { Input, Select, SelectItem } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";

const TypeAndName = () => {
    const { setProject, handleChange } = useProjectForm();
    return (
        <div className="flex gap-5 type-and-name">
            <Select
                placeholder="Select Type"
                name="type"
                label="Type"
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
            <Input
                labelPlacement="outside"
                label="Project Name"
                placeholder="Project Name"
                name="name"
                onChange={handleChange}
            />
        </div>
    );
};

export default TypeAndName;
