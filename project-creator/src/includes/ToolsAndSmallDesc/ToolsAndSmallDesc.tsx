import { Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import { ListboxWrapper } from "../../ListBoxWrapper";
import { tools } from "../../../../src/types";

interface ToolsAndSmallDescProps {
    error: string;
    tools: tools[];
    smallDescription: string;
    onChangeTools: (keys: any) => void;
    onChangeSmallDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToolsAndSmallDesc = ({
    error,
    onChangeSmallDescription,
    onChangeTools,
    smallDescription,
    tools,
}: ToolsAndSmallDescProps) => {
    return (
        <div className="flex items-stretch gap-5">
            <ListboxWrapper label="Tools">
                <Listbox
                    aria-label="Multiple selection example"
                    variant="flat"
                    disableAnimation
                    disallowEmptySelection
                    selectionMode="multiple"
                    id="tools"
                    classNames={
                        error === "tools" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    selectedKeys={tools}
                    onSelectionChange={onChangeTools}
                >
                    <ListboxItem key="react">React</ListboxItem>
                    <ListboxItem key="vue">Vue</ListboxItem>
                    <ListboxItem key="angular">Angular</ListboxItem>
                    <ListboxItem key="svelte">Svelte</ListboxItem>
                    <ListboxItem key="apple">Apple</ListboxItem>
                    <ListboxItem key="android">Android</ListboxItem>
                    <ListboxItem key="windows">Windows</ListboxItem>
                    <ListboxItem key="linux">Linux</ListboxItem>
                    <ListboxItem key="sketch">Sketch</ListboxItem>
                    <ListboxItem key="adobexd">Adobexd</ListboxItem>
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
                disableAnimation
                className="flex-1"
                placeholder="Small Description"
                id="small_description"
                name="smallDescription"
                value={smallDescription}
                classNames={{
                    input: "flex-1",
                    base:
                        error === "small_description" ? "border-2 border-red-500 flex-1" : "flex-1",
                    mainWrapper: "flex-1",
                    inputWrapper: "flex-1",
                }}
                onChange={onChangeSmallDescription}
            />
        </div>
    );
};

export default ToolsAndSmallDesc;
