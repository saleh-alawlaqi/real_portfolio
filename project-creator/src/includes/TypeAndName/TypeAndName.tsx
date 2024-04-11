import { Input, Select, SelectItem } from "@nextui-org/react";

interface TypeAndNameProps {
    type: "software" | "frontend" | "noCode" | "uiDesign";
    name: string;
    error: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TypeAndName = ({ name, error, onChangeName, onChangeType, type }: TypeAndNameProps) => {
    const projectNameWords = name.split(" ").length;
    return (
        <div className="flex gap-5 type-and-name items-start">
            <Select
                placeholder="Select Type"
                disableAnimation
                name="type"
                value={"software"}
                selectedKeys={[type]}
                className="flex-1"
                label="Type"
                classNames={error === "type" ? { base: "border-2 border-red-500" } : { base: "" }}
                id="type"
                labelPlacement="outside"
                onChange={onChangeType}
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
                    disableAnimation
                    id="project_name"
                    placeholder="Project Name"
                    value={name}
                    name="name"
                    classNames={
                        error === "project_name"
                            ? { base: "border-2 border-red-500" }
                            : { base: "" }
                    }
                    onChange={onChangeName}
                />
                <span className="mt-2">Max words: {projectNameWords}/5</span>
            </div>
        </div>
    );
};

export default TypeAndName;
