import { useState } from "react";
import ProjectForm from "./ProjectForm";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <ProjectForm />
        </div>
    );
}

export default App;
