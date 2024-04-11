import { NavLink } from "react-router-dom";

interface ProjectSlideProps {
    projectImage?: string;
    id?: string;
    gradient?: string;
}

const ProjectSlide = ({ id, projectImage, gradient }: ProjectSlideProps) => {
    return (
        <div
            className={`project-slide-container opacity-50 ml-3 !-z-10 rounded-2xl w-[220px] ${gradient} p-[3px] h-[130px] lg:w-[320px] lg:h-[200px] hover:opacity-100 hover:!z-10`}
        >
            <NavLink
                to={`/project/${id}`}
                className="relative flex w-full h-full items-center justify-center"
            >
                <div
                    style={{ backgroundImage: `url(${projectImage})` }}
                    className="project-slide small-cover w-full h-full relative cursor-pointer rounded-2xl"
                ></div>
            </NavLink>
        </div>
    );
};
export default ProjectSlide;
