import BigProjectBox from "../../../components/BigProjectBox";
import { useAppContext } from "../../../App";
import Button from "../../../components/Button";

const FeaturedProjects = () => {
    const { projects } = useAppContext();

    return (
        <div className="bg-white w-full p-8 lg:p-12 lg:py-32 relative flex flex-col items-center overflow-hidden">
            <div className="flex flex-col w-full lg:max-w-[1100px] items-start space-y-10">
                <div className="projects big-projects-grid flex-col w-full">
                    {projects.slice(0, 3).map((project) => (
                        <BigProjectBox {...project} />
                    ))}
                </div>
                <Button className="w-full" variant="dark">
                    View all projects
                </Button>
            </div>
        </div>
    );
};

export default FeaturedProjects;
