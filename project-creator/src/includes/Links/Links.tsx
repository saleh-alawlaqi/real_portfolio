import { Input } from "@nextui-org/react";
interface LinksProps {
    error: string;
    github?: string;
    figmaLink?: string;
    adobexdLink?: string;
    websiteLink?: string;
    sketchLink?: string;
    demo?: string;
    onChangeGithub: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDemo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeFigmaLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeAdobexdLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeWebsiteLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSketchLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Links = ({
    figmaLink,
    adobexdLink,
    websiteLink,
    sketchLink,
    error,
    github,
    onChangeGithub,
    onChangeFigmaLink,
    onChangeAdobexdLink,
    onChangeWebsiteLink,
    onChangeSketchLink,
}: LinksProps) => {
    return (
        <>
            <div className="flex gap-5 github-and-demo">
                <Input
                    labelPlacement="outside"
                    label="Github"
                    disableAnimation
                    id="github"
                    placeholder="Github"
                    value={github}
                    classNames={
                        error === "github" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    name="github"
                    onChange={onChangeGithub}
                />
                <Input
                    labelPlacement="outside"
                    label="Figma link"
                    disableAnimation
                    value={figmaLink}
                    id="figmaLink"
                    classNames={
                        error === "figmaLink" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    placeholder="Figma link"
                    name="figmaLink"
                    onChange={onChangeFigmaLink}
                />
            </div>
            <div className="flex gap-5 github-and-demo">
                <Input
                    labelPlacement="outside"
                    label="Adobe XD link"
                    disableAnimation
                    id="adobexdLink"
                    placeholder="Adobe XD link"
                    value={adobexdLink}
                    classNames={
                        error === "adobexdLink" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    name="adobexdLink"
                    onChange={onChangeAdobexdLink}
                />
                <Input
                    labelPlacement="outside"
                    label="Website link"
                    disableAnimation
                    value={websiteLink}
                    id="websiteLink"
                    classNames={
                        error === "websiteLink" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    placeholder="Website link"
                    name="websiteLink"
                    onChange={onChangeWebsiteLink}
                />
            </div>
            <div className="flex gap-5 github-and-demo">
                <Input
                    labelPlacement="outside"
                    label="Sketch link"
                    disableAnimation
                    id="adobexdLink"
                    placeholder="Sketch link"
                    value={sketchLink}
                    classNames={
                        error === "sketchLink" ? { base: "border-2 border-red-500" } : { base: "" }
                    }
                    name="sketchLink"
                    onChange={onChangeSketchLink}
                />
            </div>
        </>
    );
};

export default Links;
