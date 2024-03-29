import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db, deleteFile, storage, uploadFile } from "../../firebase-config";
import { IProject, gradients, tools } from "../../../../src/types";
import { Button, Textarea } from "@nextui-org/react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import TypeAndName from "../../includes/TypeAndName";
import GithubAndDemo from "../../includes/GithubAndDemo";
import ImageAndGradient from "../../includes/ImageAndGradient";
import ToolsAndSmallDesc from "../../includes/ToolsAndSmallDesc";
import ColorSection from "../../includes/ColorSection";
import TypeSection from "../../includes/TypeSection";
import IconSection from "../../includes/IconSection";
import HighlightSection from "../../includes/HighlightSection";
import ScreenshotSection from "../AddProject/sections/ScreenshotSection";

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState<IProject>({
        name: "",
        mainImage: "",
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
        screenshots: [],
    });
    const [newScreenshots, setNewScreenshots] = useState<File[]>([]);
    const [removedScreenshots, setRemovedScreenshots] = useState<string[]>([]);
    const [newIcons, setNewIcons] = useState<File[]>([]);
    const [removedIcons, setRemovedIcons] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [newMainImage, setNewMainImage] = useState<File | string>("");

    useEffect(() => {
        if (!projectId) return;

        const getProject = async () => {
            const docRef = doc(db, "projects", projectId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let project = { id: docSnap.id, ...docSnap.data() } as IProject;
                const screenshotsRef = ref(storage, `${projectId}/screenshots`);

                const screenshotsList = await listAll(screenshotsRef);
                const screenshots = await Promise.all(
                    screenshotsList.items.map(async (itemRef) => {
                        return `${projectId}/screenshots/${itemRef.name}`;
                    })
                );
                project = { ...project, screenshots };

                const iconsRef = ref(storage, `${projectId}/icons`);

                const iconsItems = await listAll(iconsRef);
                const icons = await Promise.all(
                    iconsItems.items.map(async (itemRef) => {
                        return `${projectId}/icons/${itemRef.name}`;
                    })
                );
                project = { ...project, icons };
                setProject(project);
            } else {
                console.log("No such document!");
            }
        };
        getProject();
    }, [projectId]);
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
        }, 2500);
        return () => clearInterval(interval);
    }, [error]);
    useEffect(() => {
        if (!success) return;
        const interval = setInterval(() => {
            setSuccess(false);
        }, 2500);
        return () => clearInterval(interval);
    }, [success]);
    if (!project)
        return (
            <div className="bg-white p-10 rounded-xl gap-10 mt-10 w-[62rem] flex flex-col">
                Loading...
            </div>
        );
    const onDeleteProject = () => {};

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
            setNewMainImage(file);
        }
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
        setNewIcons((prev) => [...prev, ...files]);
    };
    const onRemoveIcon = (index: number, name: string) => {
        setRemovedIcons((prev) => [...prev, name]);
        setProject((prev) => {
            return {
                ...prev,
                icons: (prev.icons as string[]).filter((icon) => icon !== name),
            };
        });
        setNewIcons((prev) => prev.filter((_, i) => i !== index));
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
    const onRemoveScreenshot = (index: number, name: string) => {
        setRemovedScreenshots((prev) => [...prev, name]);
        setProject((prev) => {
            return {
                ...prev,
                screenshots: (prev.screenshots as string[]).filter(
                    (screenshot) => screenshot !== name
                ),
            };
        });
        setNewScreenshots((prev) => prev.filter((_, i) => i !== index));
    };
    const onAddScreenshot = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files) return;
        setNewScreenshots((prev) => [...prev, ...files]);
    };
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
        if (!newMainImage && !project.mainImage) {
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
        // if (!icons.length) {
        //     setError("icon_section");
        //     return;
        // }
        if (!project.highlights.length) {
            setError("highlight_section");
            return;
        }

        // if (!newScreenshots.length) {
        //     setError("screenshot_section");
        //     return;
        // }

        try {
            // 'file' comes from the Blob or File API
            if (newScreenshots.length) {
                await Promise.all(
                    newScreenshots.map(
                        async (screenshot) =>
                            await uploadFile(
                                `screenshot_${Math.random() * 1000}`,
                                projectId + "/screenshots",
                                screenshot
                            )
                    )
                );
            }
            if (newIcons.length) {
                await Promise.all(
                    newIcons.map(
                        async (icon) =>
                            await uploadFile(
                                `icon_${Math.random() * 1000}`,
                                projectId + "/icons",
                                icon
                            )
                    )
                );
            }
            if (removedScreenshots.length) {
                await Promise.all(
                    removedScreenshots.map(async (screenshot) => {
                        await deleteFile(screenshot, projectId as string);
                    })
                );
            }
            if (removedIcons.length) {
                await Promise.all(
                    removedIcons.map(async (icon) => {
                        await deleteFile(icon, projectId as string);
                    })
                );
            }
            if (newMainImage) {
                await deleteFile(project.mainImage as string, projectId as string);
                await uploadFile("main_image", projectId as string, newMainImage as File);
                await updateDoc(doc(db, "projects", projectId as string), {
                    ...project,
                    mainImage:
                        projectId + `/main_image.` + (newMainImage as File).name.split(".").pop(),
                });
            } else {
                await updateDoc(doc(db, "projects", projectId as string), {
                    ...project,
                });
            }
            // await Promise.all(
            //     screenshots.map(
            //         async (screenshot, index) =>
            //             await uploadFile(
            //                 `screenshot_${index}`,
            //                 docRef.id + "/screenshots",
            //                 screenshot
            //             )
            //     )
            // );

            // await Promise.all(
            //     icons.map(async (icon, index) => {
            //         return await uploadFile(`icon_${index}`, docRef.id + "/icons", icon);
            //     })
            // );

            // setProject({
            //     name: "",
            //     bigDescription: "",
            //     gradient: "gradient-1",
            //     type: "software",
            //     demo: "",
            //     github: "",
            //     smallDescription: "",
            //     ready: false,
            //     colors: [],
            //     types: [],
            //     icons: [],
            //     highlights: [],
            //     screenshots: [],
            //     tools: [],
            // });
            setSuccess(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (
        <div
            className={`rounded-xl gap-10 mt-10 mb-10 w-[62rem] p-1 ${project.gradient} flex flex-col`}
        >
            <form
                onSubmit={handleSubmit}
                className={`flex flex-col bg-white info p-10 rounded-lg gap-5`}
            >
                <div className="flex justify-between">
                    <span className="text-2xl">{project.name}</span>
                    <div className="flex gap-5">
                        <Button as={Link} to="/" variant="solid" color="primary">
                            Go home
                        </Button>
                        <Button color="danger" onClick={onDeleteProject}>
                            Delete project
                        </Button>
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
                            type: e.target.value as "software" | "frontend" | "noCode" | "uiDesign",
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
                    mainImage={newMainImage || (project.mainImage as string)}
                    onChangeGradient={(e) =>
                        setProject((prev) => ({
                            ...prev,
                            gradient: e.target.value as gradients,
                        }))
                    }
                    gradient={project.gradient}
                    onRemoveImage={() => setNewMainImage("")}
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
                    icons={[...newIcons, ...(project.icons as any)]}
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
                    screenshots={[...newScreenshots, ...(project.screenshots as any)]}
                    onRemove={onRemoveScreenshot}
                />
                <Button
                    className="rounded-full mt-10 font-medium"
                    variant="solid"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            {success && (
                <div className="fixed bottom-10 left-10 bg-emerald-500 bg-opacity-90 text-white w-auto self-end font-semibold p-5 rounded-lg px-6">
                    Successfully updated the project
                </div>
            )}
        </div>
    );
};

export default Project;
