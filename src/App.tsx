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
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function App() {
    return (
        <div className="flex mx-0 flex-col overflow-visible">
            {/* <div className="lines px-20 -z-10 flex fixed top-0 h-screen w-screen">
                <div className="columns justify-between fixed flex w-full h-full">
                    {[...Array(5)].map((_) => (
                        <span className="w-[0.5px] bg-gray-200"></span>
                    ))}
                </div>
                <div className="rows justify-between fixed flex flex-col w-full h-full">
                    {[...Array(5)].map((_) => (
                        <span className="w-full h-[0.5px] bg-gray-200"></span>
                    ))}
                </div>
            </div> */}
            <div className="flex flex-col items-center self-stretch">
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
                <Footer />
            </div>
        </div>
    );
}

export default App;
