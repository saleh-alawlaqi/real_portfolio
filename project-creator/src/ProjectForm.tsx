import {
    Button,
    Input,
    Textarea,
    Select,
    SelectItem,
    Listbox,
    ListboxItem,
    Checkbox,
} from "@nextui-org/react";
import { createContext, useContext, useRef, useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { IProject, gradients, tools } from "../../src/types"; // Assume these are defined in types.ts
import { ListboxWrapper } from "./ListBoxWrapper";
import ColorBox from "./ColorBox";
import ColorSection from "./ColorSection";
import TypeBox from "./TypeBox";
import IconBox from "./IconBox";
import HighlightBox from "./HighlightBox/HighlightBox";
import ScreenshotBox from "./ScreenshotBox";
import MainImage from "./MainImage";

const ProjectFormContext = createContext<{
    project: IProject;
    setProject: React.Dispatch<React.SetStateAction<IProject>>;
    setScreenshots: React.Dispatch<React.SetStateAction<File[]>>;
    setPreviewMainImage: React.Dispatch<React.SetStateAction<File | null>>;
    previewMainImage: File | null;
}>(
    {} as {
        project: IProject;
        setProject: React.Dispatch<React.SetStateAction<IProject>>;
        setScreenshots: React.Dispatch<React.SetStateAction<File[]>>;
        setPreviewMainImage: React.Dispatch<React.SetStateAction<File | null>>;
        previewMainImage: File | null;
    }
);
export const useProjectForm = () => useContext(ProjectFormContext);
const ProjectForm = () => {
    const [project, setProject] = useState<IProject>({
        name: "",
        bigDescription: "",
        gradient: "gradient-1",
        mainImage: "",
        type: "software",
        demo: "",
        github: "",
        smallDescription: "",
        ready: false,
        colors: [],
        types: [],
        icons: [],
        highlights: [],
        screenshots: [],
        tools: [],
        id: "",
    });
    const [previewMainImage, setPreviewMainImage] = useState<File | null>(null);
    const [screenshots, setScreenshots] = useState<File[]>([]);
    const screenshotsRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProject((prev) => ({ ...prev, [name]: value }));
    };
    const handleMainImageChange = (e: any) => {
        const { files } = e.target;
        const file = files[0];

        if (file) {
            setPreviewMainImage(file);
        }
    };
    const handleTools = (keys: any) => {
        const myArray = Array.from(keys) as tools[];
        console.log("myArray", myArray);

        setProject((prev) => ({ ...prev, tools: myArray }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("project", project);

        try {
            const docRef = await addDoc(collection(db, "projects"), project);
            console.log("Document written with ID: ", docRef.id);
            // Reset form or give feedback to user
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const addColorSection = () => {
        setProject((prev) => ({
            ...prev,
            colors: [
                ...prev.colors!,
                {
                    title: "New Color Section",
                    shades: [
                        { color: "#000000", shade: "100" },
                        { color: "#000000", shade: "200" },
                        { color: "#000000", shade: "300" },
                    ],
                },
            ],
        }));
    };
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
    const addHighlight = () => {
        setProject((prev) => ({
            ...prev,
            highlights: [...prev.highlights!, "New Highlight Section"],
        }));
    };
    const addScreenshot = (e: any) => {
        const { files } = e.target;
        if (!files) return;
        setScreenshots((prev) => [...prev, ...files]);
    };
    const handleScreenshotButton = () => {
        if (screenshotsRef.current) {
            screenshotsRef.current.click();
        }
    };
    return (
        <ProjectFormContext.Provider
            value={{ project, setProject, setScreenshots, setPreviewMainImage, previewMainImage }}
        >
            <form
                className="bg-white p-5 rounded-xl gap-10 mt-10 w-[50rem] flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col info gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Colors</span>
                    </div>
                    <div className="flex gap-5 type-and-name">
                        <Select
                            placeholder="Select Type"
                            name="type"
                            label="Type"
                            labelPlacement="outside"
                            onChange={(e) =>
                                setProject((prev) => ({
                                    ...prev,
                                    type: e.target.value as
                                        | "software"
                                        | "frontend"
                                        | "noCode"
                                        | "uiDesign",
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
                    <div className="flex gap-5 github-and-demo">
                        <Input
                            labelPlacement="outside"
                            label="Github"
                            placeholder="Github"
                            name="github"
                            onChange={handleChange}
                        />
                        <Input
                            labelPlacement="outside"
                            label="Demo"
                            placeholder="Demo"
                            name="demo"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-5 image-and-gradient">
                        <div className="flex flex-1 flex-col gap-5">
                            <input
                                placeholder="Main Image"
                                name="mainImage"
                                type="file"
                                className="flex-1"
                                onChange={handleMainImageChange}
                            />

                            <MainImage image={previewMainImage} />
                        </div>
                        <div className="flex flex-1 flex-col gap-5">
                            <Select
                                placeholder="Select gradients"
                                name="gradient"
                                value={project.gradient}
                                label="Gradient"
                                labelPlacement="outside"
                                onChange={(e) =>
                                    setProject((prev) => ({
                                        ...prev,
                                        gradient: e.target.value as gradients,
                                    }))
                                }
                            >
                                <SelectItem key="gradient-1" value="gradient-1">
                                    gradient-1
                                </SelectItem>
                                <SelectItem key="gradient-2" value="gradient-2">
                                    gradient-2
                                </SelectItem>
                                <SelectItem key="gradient-3" value="gradient-3">
                                    gradient-3
                                </SelectItem>
                                <SelectItem key="gradient-4" value="gradient-4">
                                    gradient-4
                                </SelectItem>
                                <SelectItem key="gradient-5" value="gradient-5">
                                    gradient-5
                                </SelectItem>
                                <SelectItem key="gradient-6" value="gradient-6">
                                    gradient-6
                                </SelectItem>
                                <SelectItem key="gradient-7" value="gradient-7">
                                    gradient-7
                                </SelectItem>
                                <SelectItem key="gradient-8" value="gradient-8">
                                    gradient-8
                                </SelectItem>
                                <SelectItem key="gradient-9" value="gradient-9">
                                    gradient-9
                                </SelectItem>
                                <SelectItem key="gradient-10" value="gradient-10">
                                    gradient-10
                                </SelectItem>
                                <SelectItem key="gradient-11" value="gradient-11">
                                    gradient-11
                                </SelectItem>
                                <SelectItem key="gradient-12" value="gradient-12">
                                    gradient-12
                                </SelectItem>
                                <SelectItem key="gradient-13" value="gradient-13">
                                    gradient-13
                                </SelectItem>
                            </Select>
                            <div
                                className={`w-full h-40 rounded-lg ${project.gradient} bg-slate-400`}
                            ></div>
                        </div>
                    </div>
                    <div className="flex items-stretch gap-5">
                        <ListboxWrapper label="Tools">
                            <Listbox
                                aria-label="Multiple selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="multiple"
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
                            label="Big Description"
                            className="flex-1"
                            placeholder="Big Description"
                            name="bigDescription"
                            onChange={handleChange}
                        />
                    </div>
                    <Textarea
                        labelPlacement="outside"
                        label="Small Description"
                        placeholder="Small Description"
                        name="smallDescription"
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <div className="flex flex-col colors gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Colors</span>
                        <Button onClick={addColorSection} variant="solid" color="primary">
                            Add color section
                        </Button>
                    </div>
                    {project.colors
                        ?.slice()
                        .reverse()
                        .map((color, index) => (
                            <ColorSection
                                key={index}
                                index={project.colors.length - 1 - index} // Adjust index for descending order
                                title={color.title}
                                shades={color.shades}
                            ></ColorSection>
                        ))}
                </div>{" "}
                <div className="flex flex-col types gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Typography</span>
                        <Button onClick={addType} variant="solid" color="primary">
                            Add type
                        </Button>
                    </div>
                    {project.types
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
                <div className="flex flex-col icons gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Icons</span>
                        <Button onClick={addIcon} variant="solid" color="primary">
                            Add icon
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {project.icons
                            ?.slice()
                            .reverse()
                            .map((icon, index) => (
                                <IconBox
                                    index={project.icons.length - 1 - index} // Adjust index for descending order
                                    key={index}
                                    {...icon}
                                />
                            ))}
                    </div>
                </div>
                <div className="flex flex-col icons gap-5">
                    <div className="icons-heading flex justify-between">
                        <span className="text-2xl">Highlights</span>
                        <Button onClick={addHighlight} variant="solid" color="primary">
                            Add highlight
                        </Button>
                    </div>
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
                </div>
                <div className="flex flex-col icons gap-5">
                    <div className="icons-heading flex justify-between">
                        <span className="text-2xl">Screenshots</span>
                        <input
                            onChange={addScreenshot}
                            type="file"
                            multiple
                            ref={screenshotsRef}
                            hidden
                        />
                        <Button onClick={handleScreenshotButton} variant="solid" color="primary">
                            Add screenshot
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {screenshots
                            ?.slice()
                            .reverse()
                            .map((screenshot, index) => (
                                <ScreenshotBox
                                    index={screenshots.length - 1 - index}
                                    key={index}
                                    screenshot={screenshot}
                                />
                            ))}
                    </div>
                </div>
                <Checkbox
                    checked={project.ready}
                    onChange={(e) => setProject((prev) => ({ ...prev, ready: e.target.checked }))}
                >
                    Ready
                </Checkbox>
                {/* <Listbox
                aria-label="Multiple selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
            >
                <ListboxItem key="text">Text</ListboxItem>
                <ListboxItem key="number">Number</ListboxItem>
                <ListboxItem key="date">Date</ListboxItem>
                <ListboxItem key="single_date">Single Date</ListboxItem>
                <ListboxItem key="iteration">Iteration</ListboxItem>
            </Listbox> */}
                {/* Repeat for other fields */}
                <Button variant="solid" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </ProjectFormContext.Provider>
    );
};

export default ProjectForm;
