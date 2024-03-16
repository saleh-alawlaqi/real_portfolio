import { Button, Textarea } from "@nextui-org/react";
import { createContext, useContext, useEffect, useState } from "react";
import { db, uploadFile } from "../../firebase-config";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { IProject, gradients, tools } from "../../../../src/types"; // Assume these are defined in types.ts
import TypeAndName from "../../includes/TypeAndName";
import GithubAndDemo from "../../includes/GithubAndDemo";
import ImageAndGradient from "../../includes/ImageAndGradient";
import ToolsAndSmallDesc from "../../includes/ToolsAndSmallDesc";
import ColorSection from "../../includes/ColorSection";
import TypeSection from "../../includes/TypeSection";
import IconSection from "../../includes/IconSection";
import HighlightSection from "../../includes/HighlightSection";
import ScreenshotSection from "./sections/ScreenshotSection";
import { Link } from "react-router-dom";

interface ProjectFormProps {
    project: IProject;
    setProject: React.Dispatch<React.SetStateAction<IProject>>;
    screenshots: File[];
    setScreenshots: React.Dispatch<React.SetStateAction<File[]>>;
    setPreviewMainImage: React.Dispatch<React.SetStateAction<File | string>>;
    previewMainImage: File | string;
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

    const [previewMainImage, setPreviewMainImage] = useState<File | string>("");
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
            await updateDoc(docRef, {
                mainImage:
                    docRef.id + `/main_image.` + (previewMainImage as File).name.split(".").pop(),
            });
            await Promise.all(
                screenshots.map(
                    async (screenshot) =>
                        await uploadFile(
                            `screenshot_${Math.random() * 1000}`,
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
    const handleTools = (keys: any) => {
        const myArray = Array.from(keys) as tools[];

        setProject((prev) => ({ ...prev, tools: myArray }));
    };
    const onAddColorSection = (colors: any) => {
        if (colors) {
            setProject((prev) => ({
                ...prev,
                colors: [...prev.colors!, colors],
            }));
        }
    };
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setProject({
            ...project,
            colors: project.colors?.map((color, i) => {
                if (i === index) {
                    return { ...color, title: e.target.value };
                }
                return color;
            }),
        });
    };
    const onRemoveColorPalette = (index: number) => {
        setProject({
            ...project,
            colors: project.colors?.filter((_, i) => i !== index),
        });
    };
    const onAddColor = (_: any, index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                colors: prev.colors.map((color, i) => {
                    if (i === index) {
                        return {
                            ...color,
                            shades: [...color.shades, { color: "#000000", shade: i + 1 + "00" }],
                        };
                    }
                    return color;
                }),
            };
        });
    };
    const onAddTypeSection = () => {
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
    const onChangeFontSize = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, fontSize: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeFontTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, title: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeFontFamily = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, fontFamily: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };

    const onRemoveType = (index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types.filter((_, i) => i !== index),
            };
        });
    };
    const onAddIcon = (e: any) => {
        const { files } = e.target;
        if (!files) return;
        setIcons((prev) => [...prev, ...files]);
    };
    const onRemoveIcon = (index: number) => {
        setIcons((prev) => prev.filter((_, i) => i !== index));
    };
    const addHighlight = () => {
        setProject((prev) => ({
            ...prev,
            highlights: [...prev.highlights!, "New Highlight Section"],
        }));
    };
    const onChangeHighlightTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                highlights: prev.highlights.map((highlight, i) => {
                    if (i === index) {
                        return e.target.value;
                    }
                    return highlight;
                }),
            };
        });
    };
    const onRemoveHighlight = (index: number) => {
        setProject((prev) => {
            return {
                ...prev,
                highlights: prev.highlights.filter((_, i) => i !== index),
            };
        });
    };
    const onRemoveScreenshot = (index: number) => {
        setScreenshots((prev) => prev.filter((_, i) => i !== index));
    };
    const onAddScreenshot = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files) return;
        setScreenshots((prev) => [...prev, ...files]);
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
                    <GithubAndDemo
                        demo={project.demo}
                        github={project.github}
                        error={error}
                        onChangeDemo={handleChange}
                        onChangeGithub={handleChange}
                    />
                    <ImageAndGradient
                        error={error}
                        mainImage={previewMainImage}
                        onChangeGradient={(e) =>
                            setProject((prev) => ({
                                ...prev,
                                gradient: e.target.value as gradients,
                            }))
                        }
                        gradient={project.gradient}
                        onRemoveImage={() => setPreviewMainImage("")}
                        onChangeMainImage={handleMainImageChange}
                    />
                    <ToolsAndSmallDesc
                        error={error}
                        onChangeSmallDescription={handleChange}
                        onChangeTools={handleTools}
                        smallDescription={project.smallDescription}
                        tools={project.tools}
                    />
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
                <ColorSection
                    colors={project.colors}
                    onAddColorSection={onAddColorSection}
                    error={error}
                    onAddColor={onAddColor}
                    onChangeColorTitle={onChangeTitle}
                    onRemoveColorPalette={onRemoveColorPalette}
                />
                <hr />
                <TypeSection
                    onChangeFontFamily={onChangeFontFamily}
                    onChangeFontSize={onChangeFontSize}
                    onChangeTitle={onChangeFontTitle}
                    onRemoveType={onRemoveType}
                    error={error}
                    onAddType={onAddTypeSection}
                    types={project.types}
                />
                <hr />
                <IconSection
                    error={error}
                    icons={icons}
                    onAddIcon={onAddIcon}
                    onRemoveIcon={onRemoveIcon}
                />
                <hr />
                <HighlightSection
                    error={error}
                    onAddHighlight={addHighlight}
                    highlights={project.highlights}
                    onChangeTitle={onChangeHighlightTitle}
                    onRemove={onRemoveHighlight}
                />
                <hr />
                <ScreenshotSection
                    error={error}
                    onAddScreenshot={onAddScreenshot}
                    screenshots={screenshots}
                    onRemove={onRemoveScreenshot}
                />

                {success && (
                    <div className="fixed bottom-10 left-10 bg-emerald-500 bg-opacity-90 text-white w-auto self-end font-semibold p-5 rounded-lg px-6">
                        Successfully created the project
                    </div>
                )}
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
