import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db, deleteFile, storage, uploadFile } from "../../firebase-config";
import { IProject, gradients, tools } from "../../../../src/types";
import { Button, Checkbox, Textarea } from "@nextui-org/react";
import { deleteObject, listAll, ref } from "firebase/storage";
import TypeAndName from "../../includes/TypeAndName";
import Links from "../../includes/Links";
import ImageAndGradient from "../../includes/ImageAndGradient";
import ToolsAndSmallDesc from "../../includes/ToolsAndSmallDesc";
import ColorSection from "../../includes/ColorSection";
import TypeSection from "../../includes/TypeSection";
import IconSection from "../../includes/IconSection";
import HighlightSection from "../../includes/HighlightSection";
import BigCover from "../../includes/BigCover";
import DeleteProject from "./DeleteProject";

const Project = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState<IProject>({
        name: "",
        mainImage: "",
        bigDescription: "",
        gradient: "gradient-1",
        demo: "",
        github: "",
        smallDescription: "",
        ready: false,
        colors: [],
        types: [],
        icons: [],
        highlights: [],
        type: [],
        tools: [],
        adobexdLink: "",
        figmaLink: "",
        sketchLink: "",
        websiteLink: "",
        screenshots: [],
    });
    const [newIcons, setNewIcons] = useState<File[]>([]);
    const [removedIcons, setRemovedIcons] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [newMainImage, setNewMainImage] = useState<File | string>("");
    const [newBigCover, setNewBigCover] = useState<File | string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!projectId) return;

        const getProject = async () => {
            const docRef = doc(db, "projects", projectId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let project = { id: docSnap.id, ...docSnap.data() } as IProject;

                const iconsRef = ref(storage, `${projectId}/icons`);

                const iconsItems = await listAll(iconsRef);
                const icons = await Promise.all(
                    iconsItems.items.map(async (itemRef) => {
                        return `${projectId}/icons/${itemRef.name}`;
                    })
                );
                project = { ...project, icons };
                setProject(project);
                setLoading(false);
            } else {
                setLoading(false);
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
    const onDeleteProject = async () => {
        if (!projectId) return;
        const docRef = doc(db, "projects", projectId);
        await deleteDoc(docRef);
        const folderRef = ref(storage, projectId);

        const fileList = await listAll(folderRef);
        const deletePromises = fileList.items.map((itemRef) => deleteObject(itemRef));
        await Promise.all(deletePromises);
        navigate("/");
    };

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
    const handleBigCoverChange = (e: any) => {
        const { files } = e.target;
        const file = files[0];

        if (file) {
            setNewBigCover(file);
        }
    };
    const handleTools = (keys: any) => {
        const myArray = Array.from(keys) as tools[];

        setProject((prev) => ({ ...prev, tools: myArray }));
    };
    const handleProjectTypes = (keys: any) => {
        const myArray = Array.from(keys) as any[];

        setProject((prev) => ({ ...prev, type: myArray }));
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
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!project.name) {
            setError("project_name");
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
        if (!project.highlights.length) {
            setError("highlight_section");
            return;
        }
        try {
            // 'file' comes from the Blob or File API

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

            if (removedIcons.length) {
                await Promise.all(
                    removedIcons.map(async (icon) => {
                        await deleteFile(icon, projectId as string);
                    })
                );
            }
            if (newBigCover) {
                if (project.bigCover) {
                    await deleteFile(project.bigCover as string, projectId as string);
                }
                await uploadFile("big_cover", projectId as string, newBigCover as File);
                console.log(
                    `(newBigCover as File).name.split(".").pop()`,
                    (newBigCover as File).name.split(".").pop()
                );

                await updateDoc(doc(db, "projects", projectId as string), {
                    ...project,
                    bigCover:
                        projectId + `/big_cover.` + (newBigCover as File).name.split(".").pop(),
                });
            } else if (newMainImage) {
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
            setSuccess(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    if (loading) {
        return <div>loading...</div>;
    } else {
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
                            <DeleteProject onConfirm={onDeleteProject} />
                        </div>
                    </div>
                    <TypeAndName
                        name={project.name}
                        type={project.type}
                        error={error}
                        onChangeType={handleProjectTypes}
                        onChangeName={(e) => handleChangeWithWordCount(e, 5)}
                    />
                    <Links
                        demo={project.demo}
                        github={project.github}
                        adobexdLink={project.adobexdLink}
                        figmaLink={project.figmaLink}
                        websiteLink={project.websiteLink}
                        sketchLink={project.sketchLink}
                        error={error}
                        onChangeDemo={handleChange}
                        onChangeGithub={handleChange}
                        onChangeSketchLink={handleChange}
                        onChangeAdobexdLink={handleChange}
                        onChangeFigmaLink={handleChange}
                        onChangeWebsiteLink={handleChange}
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
                        maxRows={50}
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

                    <BigCover
                        error={error}
                        bigCover={newBigCover || (project.bigCover as string)}
                        onChangeBigCover={handleBigCoverChange}
                        onRemoveBigCover={() => setNewBigCover("")}
                    />
                    <div className="flex justify-between">
                        <Checkbox
                            isSelected={project.ready}
                            checked={project.ready}
                            onChange={(e) =>
                                setProject((prev) => ({ ...prev, ready: e.target.checked }))
                            }
                        >
                            Project is ready to launch!
                        </Checkbox>
                        <Button
                            className="rounded-full mt-10 font-medium"
                            variant="solid"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                {success && (
                    <div className="fixed bottom-10 left-10 bg-emerald-500 bg-opacity-90 text-white w-auto self-end font-semibold p-5 rounded-lg px-6">
                        Successfully updated the project
                    </div>
                )}
            </div>
        );
    }
};

export default Project;
