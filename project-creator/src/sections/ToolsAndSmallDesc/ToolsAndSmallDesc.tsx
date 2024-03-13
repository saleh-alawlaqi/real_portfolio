import { Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import { ListboxWrapper } from "../../ListBoxWrapper";
import { useProjectForm } from "../../ProjectForm";
import { tools } from "../../../../src/types";

const ToolsAndSmallDesc = () => {
    const { project, setProject, handleChange, error } = useProjectForm();
    const handleTools = (keys: any) => {
        const myArray = Array.from(keys) as tools[];

        setProject((prev) => ({ ...prev, tools: myArray }));
    };
    return (
        <div className="flex items-stretch gap-5">
            <ListboxWrapper label="Tools">
                <Listbox
                    aria-label="Multiple selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="multiple"
                    id="tools"
                    classNames={
                        error === "tools" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    selectedKeys={project.tools}
                    onSelectionChange={handleTools}
                >
                    <ListboxItem key="react">React</ListboxItem>
                    <ListboxItem key="vue">Vue</ListboxItem>
                    <ListboxItem key="angular">Angular</ListboxItem>
                    <ListboxItem key="svelte">Svelte</ListboxItem>
                    <ListboxItem key="tailwind">Tailwind</ListboxItem>
                    <ListboxItem key="sass">Sass</ListboxItem>
                    <ListboxItem key="nodejs">Nodejs</ListboxItem>
                    <ListboxItem key="mongodb">Mongodb</ListboxItem>
                    <ListboxItem key="redux">Redux</ListboxItem>
                    <ListboxItem key="firebase">Firebase</ListboxItem>
                    <ListboxItem key="typescript">Typescript</ListboxItem>
                    <ListboxItem key="socketio">Socketio</ListboxItem>
                    <ListboxItem key="framer">Framer</ListboxItem>
                    <ListboxItem key="csharp">Csharp</ListboxItem>
                    <ListboxItem key="python">Python</ListboxItem>
                    <ListboxItem key="java">Java</ListboxItem>
                    <ListboxItem key="figma">Figma</ListboxItem>
                    <ListboxItem key="cplus">Cplus</ListboxItem>
                    <ListboxItem key="c">C</ListboxItem>
                    <ListboxItem key="kotlin">Kotlin</ListboxItem>
                    <ListboxItem key="mysql">Mysql</ListboxItem>
                    <ListboxItem key="express">Express</ListboxItem>
                </Listbox>
            </ListboxWrapper>
            <Textarea
                labelPlacement="outside"
                label="Small Description"
                className="flex-1"
                placeholder="Small Description"
                id="small_description"
                name="smallDescription"
                value={project.smallDescription}
                classNames={{
                    input: "flex-1",
                    base:
                        error === "small_description" ? "border-2 border-red-500 flex-1" : "flex-1",
                    mainWrapper: "flex-1",
                    inputWrapper: "flex-1",
                }}
                onChange={handleChange}
            />
        </div>
    );
};

export default ToolsAndSmallDesc;
