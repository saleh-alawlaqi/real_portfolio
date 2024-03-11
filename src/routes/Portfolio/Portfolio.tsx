import CTA from "../../components/CTA";
import PageHeader from "../../components/PageHeader";
import PortfolioTabs from "./PortfolioTabs";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { usePortfolioContext } from "./PortfolioContext";
import { projectTabsList } from "../../types";
import { AnimatePresence } from "framer-motion";

const Portfolio = () => {
    const { projects, activeTab } = usePortfolioContext();
    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex mt-12 flex-col lg:max-w-[1300px] w-[90%] ">
                <div className="flex flex-col">
                    <PageHeader path="Portfolio">Browse All Of My Projects</PageHeader>
                    <div className="search_box_and_types mt-5 flex flex-col space-y-4 lg:space-y-0 lg:space-x-10 lg:flex-row lg:items-center lg:justify-between">
                        <input
                            type="text"
                            placeholder="Search For Projects"
                            className="outline-none p-3 rounded-full hover:bg-white focus:bg-white font-semibold focus:placeholder:text-sky-500 focus:border-sky-500 background-search pl-12 bg-gray-50 w-full border-2 border-gray-200 lg:w-[35em]"
                        />
                        <PortfolioTabs />
                    </div>
                    <div className="projects mt-10 projects_grid">
                        {activeTab === 0 ? (
                            <>
                                {projects.map((project, i) => (
                                    <AnimatePresence>
                                        <ProjectBox index={i} key={project.id} {...project} />
                                    </AnimatePresence>
                                ))}
                            </>
                        ) : (
                            <>
                                {projects
                                    .filter((p) => p.type === projectTabsList[activeTab].type)
                                    .map((project, i) => (
                                        <AnimatePresence>
                                            <ProjectBox index={i} key={project.id} {...project} />
                                        </AnimatePresence>
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Portfolio;
