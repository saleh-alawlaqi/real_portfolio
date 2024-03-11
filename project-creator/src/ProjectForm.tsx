import { Button, Textarea, Checkbox } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";
import { db, storageRef, uploadFile } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { IProject } from "../../src/types"; // Assume these are defined in types.ts
import TypeAndName from "./sections/TypeAndName";
import GithubAndDemo from "./sections/GithubAndDemo";
import ImageAndGradient from "./sections/ImageAndGradient";
import ToolsAndSmallDesc from "./sections/ToolsAndSmallDesc";
import ColorSection from "./sections/ColorSection";
import TypeSection from "./sections/TypeSection";
import IconSection from "./sections/IconSection";
import HighlightSection from "./sections/HighlightSection";
import ScreenshotSection from "./sections/ScreenshotSection";
import { uploadBytes } from "firebase/storage";

interface ProjectFormProps {
    project: IProject;
    setProject: React.Dispatch<React.SetStateAction<IProject>>;
    screenshots: File[];
    setScreenshots: React.Dispatch<React.SetStateAction<File[]>>;
    setPreviewMainImage: React.Dispatch<React.SetStateAction<File | null>>;
    previewMainImage: File | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleMainImageChange: (e: any) => void;
    icons: { title: string; path: File }[];
    setIcons: React.Dispatch<React.SetStateAction<{ title: string; path: File }[]>>;
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

    const [previewMainImage, setPreviewMainImage] = useState<File | null>(null);
    const [screenshots, setScreenshots] = useState<File[]>([]);
    const [icons, setIcons] = useState<{ title: string; path: File }[]>([]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // 'file' comes from the Blob or File API
            const docRef = await addDoc(collection(db, "projects"), project);
            await uploadFile("main_image", docRef.id, previewMainImage as File);
            await Promise.all(
                screenshots.map(
                    async (screenshot, index) =>
                        await uploadFile(`screenshot_${index}`, docRef.id, screenshot)
                )
            );

            // Reset form or give feedback to user
        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
            }}
        >
            <form
                className="bg-white p-10 rounded-xl gap-10 mt-10 w-[62rem] flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col info gap-5">
                    <div className="colors-heading flex justify-between">
                        <span className="text-2xl">Add a new project</span>
                    </div>

                    <TypeAndName />
                    <GithubAndDemo />
                    <ImageAndGradient />
                    <ToolsAndSmallDesc />
                    <Textarea
                        labelPlacement="outside"
                        label="Big Description"
                        placeholder="Big Description"
                        name="bigDescription"
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
