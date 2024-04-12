import { Input, Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../../ListBoxWrapper";

interface TypeAndNameProps {
    name: string;
    error: string;
    type?: ("software" | "frontend" | "noCode" | "uiDesign")[];
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeType: (keys: any) => void;
}

const TypeAndName = ({ name, error, onChangeName, onChangeType, type }: TypeAndNameProps) => {
    const projectNameWords = name.split(" ").length;
    return (
        <>
            <div className="flex gap-5 type-and-name items-start">
                <ListboxWrapper label="Project Types">
                    <Listbox
                        aria-label="Multiple selection example"
                        variant="flat"
                        disableAnimation
                        disallowEmptySelection
                        selectionMode="multiple"
                        id="project_types"
                        classNames={
                            error === "project_types"
                                ? { base: "border-2 border-red-500" }
                                : { base: "" }
                        }
                        selectedKeys={type}
                        onSelectionChange={onChangeType}
                    >
                        <ListboxItem key="uiDesign">UI Design</ListboxItem>
                        <ListboxItem key="software">Software</ListboxItem>
                        <ListboxItem key="noCode">No code</ListboxItem>
                        <ListboxItem key="frontend">Frontend</ListboxItem>
                    </Listbox>
                </ListboxWrapper>
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
        </>
    );
};

export default TypeAndName;
