import CTA from "../../components/CTA";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PortfolioTabs from "./PortfolioTabs";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { projects } from "../../content/projects";
import { useState } from "react";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col items-center self-stretch">
            <Header />
            <div className="mt-12 rounded-lg mx-8 lg:mx-12 lg:max-w-[1300px] w-[90%]  ">
                {/* <PortfolioHeader /> */}
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
                    {projects.map((project) => (
                        <ProjectBox {...project} />
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Portfolio;
