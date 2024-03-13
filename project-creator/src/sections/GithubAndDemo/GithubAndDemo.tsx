import { Input } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";

const GithubAndDemo = () => {
    const { handleChange, error } = useProjectForm();
    return (
        <div className="flex gap-5 github-and-demo">
            <Input
                labelPlacement="outside"
                label="Github"
                id="github"
                placeholder="Github"
                classNames={error === "github" ? { base: "border-2 border-red-500" } : { base: "" }}
                name="github"
                onChange={handleChange}
            />
            <Input
                labelPlacement="outside"
                label="Demo"
                id="demo"
                classNames={error === "demo" ? { base: "border-2 border-red-500" } : { base: "" }}
                placeholder="Demo"
                name="demo"
                onChange={handleChange}
            />
        </div>
    );
};

export default GithubAndDemo;
