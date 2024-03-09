import { Input } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";

const GithubAndDemo = () => {
    const { handleChange } = useProjectForm();
    return (
        <div className="flex gap-5 github-and-demo">
            <Input
                labelPlacement="outside"
                label="Github"
                placeholder="Github"
                name="github"
                onChange={handleChange}
            />
            <Input
                labelPlacement="outside"
                label="Demo"
                placeholder="Demo"
                name="demo"
                onChange={handleChange}
            />
        </div>
    );
};

export default GithubAndDemo;
