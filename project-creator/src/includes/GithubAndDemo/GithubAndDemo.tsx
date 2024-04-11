import { Input } from "@nextui-org/react";
interface GithubAndDemoProps {
    error: string;
    github: string;
    demo: string;
    onChangeGithub: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDemo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const GithubAndDemo = ({
    demo,
    error,
    github,
    onChangeDemo,
    onChangeGithub,
}: GithubAndDemoProps) => {
    return (
        <div className="flex gap-5 github-and-demo">
            <Input
                labelPlacement="outside"
                label="Github"
                disableAnimation
                id="github"
                placeholder="Github"
                value={github}
                classNames={error === "github" ? { base: "border-2 border-red-500" } : { base: "" }}
                name="github"
                onChange={onChangeGithub}
            />
            <Input
                labelPlacement="outside"
                label="Demo"
                disableAnimation
                value={demo}
                id="demo"
                classNames={error === "demo" ? { base: "border-2 border-red-500" } : { base: "" }}
                placeholder="Demo"
                name="demo"
                onChange={onChangeDemo}
            />
        </div>
    );
};

export default GithubAndDemo;
