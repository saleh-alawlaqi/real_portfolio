import { Button, Textarea, Checkbox } from "@nextui-org/react";
import { createContext, useContext, useEffect, useState } from "react";
import { db, uploadFile } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { IProject } from "../../../../src/types"; // Assume these are defined in types.ts
import TypeAndName from "../../includes/TypeAndName";
import GithubAndDemo from "./sections/GithubAndDemo";
import ImageAndGradient from "./sections/ImageAndGradient";
import ToolsAndSmallDesc from "./sections/ToolsAndSmallDesc";
import ColorSection from "./sections/ColorSection";
import TypeSection from "./sections/TypeSection";
import IconSection from "./sections/IconSection";
import HighlightSection from "./sections/HighlightSection";
import ScreenshotSection from "./sections/ScreenshotSection";
import { Link } from "react-router-dom";

interface ProjectFormProps {
    project: IProject;
    setProject: React.Dispatch<React.SetStateAction<IProject>>;
    screenshots: File[];
    setScreenshots: React.Dispatch<React.SetStateAction<File[]>>;
    setPreviewMainImage: React.Dispatch<React.SetStateAction<File | null>>;
    previewMainImage: File | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleMainImageChange: (e: any) => void;
    icons: File[];
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    setIcons: React.Dispatch<React.SetStateAction<File[]>>;
    handleChangeWithWordCount: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        limit: number
    ) => void;
}
const ProjectFormContext = createContext<ProjectFormProps>({} as ProjectFormProps);

export const useProjectForm = () => useContext(ProjectFormContext);

const ProjectForm = () => {
    const [project, setProject] = useState<IProject>({
        name: "",
        bigDescription: "",
        gradient: "gradient-1",
        type: "software",
        demo: "",
        github: "",
        smallDescription: "",
        ready: false,
        colors: [],
        types: [],
        icons: [],
        highlights: [],
        tools: [],
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const [previewMainImage, setPreviewMainImage] = useState<File | null>(null);
    const [screenshots, setScreenshots] = useState<File[]>([]);
    const [icons, setIcons] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProject((prev) => ({ ...prev, [name]: value }));
    };
    const handleChangeWithWordCount = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        limit: number
    ) => {
        const { name, value } = e.target;
        const words = value.trim().split(/\s+/); // Split by one or more spaces
        const wordCount = words.length;
        const lastCharacter = value[value.length - 1];

        if (wordCount < limit || (wordCount === limit && lastCharacter !== " ")) {
            setProject((prev) => ({ ...prev, [name]: value.trimStart() })); // Trim start to allow backspacing and prevent leading spaces
        } else if (wordCount === limit && lastCharacter === " ") {
            setProject((prev) => ({ ...prev, [name]: words.join(" ") })); // Join with a single space to clean up and prevent multiple spaces
        }
    };

    const handleMainImageChange = (e: any) => {
        const { files } = e.target;
        const file = files[0];

        if (file) {
            setPreviewMainImage(file);
        }
    };

    useEffect(() => {
        if (error === "") return;
        const errorElement = document.querySelector("#" + error);
        if (errorElement) {
            errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
            if (errorElement instanceof HTMLInputElement) {
                errorElement.focus();
            }
        }
        const interval = setInterval(() => {
            setError("");
        }, 5000);
        return () => clearInterval(interval);
    }, [error]);

    useEffect(() => {
        if (!success) return;
        const interval = setInterval(() => {
            setSuccess(false);
        }, 5000);
        return () => clearInterval(interval);
    }, [success]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!project.name) {
            setError("project_name");
            return;
        }
        if (!project.github) {
            setError("github");
            return;
        }
        if (!project.demo) {
            setError("demo");
            return;
        }
        if (!previewMainImage) {
            setError("main_image");
            return;
        }
        if (!project.tools.length) {
            setError("tools");
            return;
        }
        if (!project.smallDescription) {
            setError("small_description");
            return;
        }
        if (!project.bigDescription) {
            setError("big_description");
            return;
        }
        if (!project.colors.length) {
            setError("color_section");
            return;
        }
        if (!project.types.length) {
            setError("type_section");
            return;
        }
        if (!icons.length) {
            setError("icon_section");
            return;
        }
        if (!project.highlights.length) {
            setError("highlight_section");
            return;
        }

        if (!screenshots.length) {
            setError("screenshot_section");
            return;
        }

        try {
            // 'file' comes from the Blob or File API
            const docRef = await addDoc(collection(db, "projects"), project);
            await uploadFile("main_image", docRef.id, previewMainImage as File);
            await Promise.all(
                screenshots.map(
                    async (screenshot, index) =>
                        await uploadFile(
                            `screenshot_${index}`,
                            docRef.id + "/screenshots",
                            screenshot
                        )
                )
            );

            await Promise.all(
                icons.map(async (icon, index) => {
                    return await uploadFile(`icon_${index}`, docRef.id + "/icons", icon);
                })
            );

            setProject({
                name: "",
                bigDescription: "",
                gradient: "gradient-1",
                type: "software",
                demo: "",
                github: "",
                smallDescription: "",
                ready: false,
                colors: [],
                types: [],
                icons: [],
                highlights: [],
                tools: [],
            });
            setSuccess(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    useEffect(() => {
        const projectString = localStorage.getItem("project");
        if (projectString) {
            setProject(JSON.parse(projectString));
        }
    }, []);

    useEffect(() => {
        //Save in local storage
        const interval = setInterval(() => {
            localStorage.setItem("project", JSON.stringify(project));
        }, 2000);
        return () => clearInterval(interval);
    }, [project]);

    const onResetProject = () => {
        localStorage.removeItem("project");
        setProject({
            name: "",
            bigDescription: "",
            gradient: "gradient-1",
            type: "software",
            demo: "",
            github: "",
            smallDescription: "",
            ready: false,
            colors: [],
            types: [],
            icons: [],
            highlights: [],
            tools: [],
        });
        setScreenshots([]);
        setIcons([]);
    };

    return (
        <ProjectFormContext.Provider
            value={{
                project,
                setProject,
                setScreenshots,
                setPreviewMainImage,
                screenshots,
                previewMainImage,
                handleChange,
                handleMainImageChange,
                icons,
                setIcons,
                error,
                setError,
                handleChangeWithWordCount,
            }}
        >
            <form
                className="bg-white p-10 rounded-xl gap-10 mt-10 w-[62rem] flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col info gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Add a new project</span>
                        <div className="flex gap-5">
                            <Button as={Link} to="/" variant="solid" color="primary">
                                Go home
                            </Button>
                            <Button onClick={onResetProject}>Reset project</Button>
                        </div>
                    </div>

                    <TypeAndName
                        name={project.name}
                        type={project.type}
                        error={error}
                        onChangeName={(e) => handleChangeWithWordCount(e, 5)}
                        onChangeType={(e) =>
                            setProject((prev) => ({
                                ...prev,
                                type: e.target.value as
                                    | "software"
                                    | "frontend"
                                    | "noCode"
                                    | "uiDesign",
                            }))
                        }
                    />
                    <GithubAndDemo />
                    <ImageAndGradient />
                    <ToolsAndSmallDesc />
                    <Textarea
                        labelPlacement="outside"
                        classNames={
                            error === "big_description"
                                ? { base: "border-2 border-red-500" }
                                : { base: "" }
                        }
                        label="Big Description"
                        placeholder="Big Description"
                        name="bigDescription"
                        id="big_description"
                        value={project.bigDescription}
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <ColorSection />
                <hr />
                <TypeSection />
                <hr />
                <IconSection />
                <hr />
                <HighlightSection />
                <hr />
                <ScreenshotSection />
                <Checkbox
                    checked={project.ready}
                    onChange={(e) => setProject((prev) => ({ ...prev, ready: e.target.checked }))}
                >
                    Ready
                </Checkbox>
                {success && (
                    <div className="fixed bottom-10 left-10 bg-emerald-500 bg-opacity-90 text-white font-semibold p-5 rounded-lg px-6">
                        Successfully created the project
                    </div>
                )}
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
                <Button
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </ProjectFormContext.Provider>
    );
};

export default ProjectForm;
