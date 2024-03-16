import { Route, Routes } from "react-router-dom";
import ProjectForm from "./pages/AddProject/ProjectForm";
import Home from "./pages/Home/Home";
import Project from "./pages/Project";

function App() {
    return (
        <div className="flex flex-col items-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-project" element={<ProjectForm />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Routes>
        </div>
    );
}

export default App;
