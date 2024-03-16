import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db, storage } from "../../firebase-config";
import { IProject } from "../../../../src/types";
import { Button } from "@nextui-org/react";
import { getDownloadURL, ref } from "firebase/storage";
import TypeAndName from "../../includes/TypeAndName";

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
    const [newicons, setNewIcons] = useState<File[]>([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [newMainImage, setNewMainImage] = useState<File | null>(null);

    useEffect(() => {
        if (!projectId) return;

        const getProject = async () => {
            const docRef = doc(db, "projects", projectId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let project = { id: docSnap.id, ...docSnap.data() } as IProject;
                const image = ref(
                    storage,
                    `gs://portfolio-9601d.appspot.com/${project.id}/main_image.png`
                );
                const url = await getDownloadURL(image);
                project = { ...project, mainImage: url };
                setProject(project);
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        };
        getProject();
    }, [projectId]);
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

    return (
        <div className="bg-white p-10 rounded-xl gap-10 mt-10 w-[62rem] flex flex-col">
            <div className="flex flex-col info gap-5">
                <div className="colors-heading flex justify-between">
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
            </div>
        </div>
    );
};

export default Project;
