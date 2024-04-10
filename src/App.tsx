import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import ScrollToTop from "./components/ScrollToTop";
import { ProjectProvider } from "./routes/Project/ProjectContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { IProject } from "./types";
import Menu from "./components/Menu";
import { storage } from "./firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/loading.json";
import Footer from "./components/Footer";
import PortfolioProvider from "./routes/Portfolio/PortfolioContext";
import Portfolio from "./routes/Portfolio";

interface IAppContext {
    projects: IProject[];
}
const AppContext = createContext<IAppContext>({} as IAppContext);
export const useAppContext = () => useContext<IAppContext>(AppContext);

function App() {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const addedProjects: IProject[] = [];
                querySnapshot.forEach(async (doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    let project = { id: doc.id, ...doc.data() } as IProject;
                    const image = ref(
                        storage,
                        `gs://portfolio-9601d.appspot.com/${project.mainImage}`
                    );

                    const iconsFolder = ref(
                        storage,
                        `gs://portfolio-9601d.appspot.com/${doc.id}/icons`
                    );
                    const res = await listAll(iconsFolder);
                    const icons: string[] = [];
                    await Promise.all(
                        res.items.map(async (icon) => {
                            const url = await getDownloadURL(icon);
                            icons.push(url);
                        })
                    );

                    project = { ...project, icons };
                    const url = await getDownloadURL(image);
                    project = { ...project, mainImage: url };
                    if (project.bigCover) {
                        const bigCover = ref(
                            storage,
                            `gs://portfolio-9601d.appspot.com/${project.bigCover}`
                        );
                        const url = await getDownloadURL(bigCover);
                        project = { ...project, bigCover: url };
                    }

                    addedProjects.push(project);
                });
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                setProjects(addedProjects);
            } catch (e) {
                setLoading(false);
                console.error("Error getting documents: ", e);
            }
        };
        getAllProjects();
    }, []);

    return (
        <AppContext.Provider value={{ projects }}>
            {loading ? (
                <div className="fixed w-screen h-screen flex flex-col items-center justify-center">
                    <Lottie
                        animationData={loadingAnimation}
                        style={{ height: 290, width: 400 }}
                        loop={true}
                    />
                    <span className="text-[32px] font-gt mt-5">Loading...</span>
                </div>
            ) : (
                <div className="flex flex-col items-center self-stretch">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/portfolio"
                            element={
                                <ScrollToTop>
                                    <PortfolioProvider>
                                        <Portfolio />
                                    </PortfolioProvider>
                                </ScrollToTop>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <ScrollToTop>
                                    <About />
                                </ScrollToTop>
                            }
                        />
                        <Route
                            path="/project/:projectId"
                            element={
                                <ScrollToTop>
                                    <ProjectProvider>
                                        <Project />
                                    </ProjectProvider>
                                </ScrollToTop>
                            }
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Menu />
                    <Footer />
                </div>
            )}
        </AppContext.Provider>
    );
}

export default App;
