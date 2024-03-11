import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioProvider from "./routes/Portfolio/PortfolioContext";
import { ProjectProvider } from "./routes/Project/ProjectContext";
import Header from "./components/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { IProject } from "./types";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    addedProjects.push({ id: doc.id, ...doc.data() } as IProject);
                });
                setLoading(false);
                setProjects(addedProjects);
            } catch (e) {
                setLoading(false);
                console.error("Error getting documents: ", e);
            }
        };
        getAllProjects();
        return () => {};
    }, []);

    return (
        <AppContext.Provider value={{ projects }}>
            {loading ? (
                <div className="fixed w-screen h-screen flex items-center justify-center">
                    Loading...
                </div>
            ) : (
                <div className="flex flex-col items-center  self-stretch">
                    <Header />
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
                </div>
            )}
        </AppContext.Provider>
    );
}

export default App;
