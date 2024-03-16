import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from "../../../../src/types";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import ProjectBox from "../ProjectBox";

const Home = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const addedProjects: IProject[] = [];
                await Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        let project = { id: doc.id, ...doc.data() } as IProject;
                        const image = ref(
                            storage,
                            `gs://portfolio-9601d.appspot.com/${project.id}/main_image.png`
                        );
                        const url = await getDownloadURL(image).then((url) => url);
                        project = { ...project, mainImage: url };

                        addedProjects.push(project);
                    })
                );
                setProjects(addedProjects);
            } catch (e) {
                setLoading(false);
                console.error("Error getting documents: ", e);
            }
        };
        getAllProjects();
    }, []);
    return (
        <div className="bg-white p-10 rounded-xl gap-10 mt-10 w-[62rem] flex flex-col ">
            <div className="header flex justify-between">
                <h1 className="text-2xl">Home page</h1>
                <Button as={Link} to="/add-project" variant="solid" color="primary">
                    Add project
                </Button>
            </div>
            <div className="flex flex-col">
                {projects.map((project) => (
                    <ProjectBox key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
