import { Tab, Tabs } from "@nextui-org/react";
import Header from "../../components/Header";
import Highlights from "./Highlights";
import CTA from "../../components/CTA";
import SimilarProjects from "./SimilarProjects";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProject } from "../../types";
import { projects } from "../../content/projects";
import Overview from "./Overview";
import Screenshots from "./Screenshots";

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState<IProject | null>(null);
    const [activeTab, setActiveTab] = useState<"overview" | "screenshots" | "changelog">(
        "overview"
    );
    useEffect(() => {
        if (!projectId) return;
        const getProject = () => {
            setProject(projects.find((project) => project.id === projectId) as IProject);
        };
        getProject();
    }, [projectId]);

    if (!project) return <></>;
    const {
        name,
        highlights,
        bigDescription,
        demo,
        github,
        gradient,
        id,
        mainImage,
        screenshots,
        smallDescription,
        tools,
        type,
    } = project;
    return (
        <div className="flex flex-col overflow-visible items-center self-stretch">
            <Header />
            <div className="mt-12 overflow-visible flex flex-col mx-8 lg:mx-12 w-[90%] lg:max-w-[1300px]">
                <div className="top_header block overflow-visible  lg:justify-between rounded-lg items-start">
                    <div className="name_and_description flex flex-col">
                        <h2 className="text-[38px] font-bold font-gt text-slate-700">{name}</h2>
                        <p className="mt-1 text-slate-600 lg:w-[60%]">{smallDescription}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-8 lg:space-x-10 overflow-visible lg:items-start">
                        <div className="images_and_project_description flex flex-col lg:w-[62%]">
                            <span className="w-full h-[20em] rounded-xl lg:w-full lg:h-[30em] bg-image bg-no-repeat bg-cover bg-center"></span>
                            <div className="project_description mt-8 flex flex-col">
                                <h2 className="font-bold font-gt text-[32px]">Overview:</h2>
                                <div
                                    className="mt-3"
                                    dangerouslySetInnerHTML={{ __html: bigDescription }}
                                ></div>
                            </div>
                        </div>
                        <Highlights highlights={highlights} />
                    </div>
                </div>
                <hr className="my-10 border border-slate-200" />
                <SimilarProjects />
            </div>
            <CTA />
        </div>
    );
};

export default Project;
{
    /* <div className="project_description mt-8 flex flex-col">
                                    <h2 className="text-[30px] font-bold font-gt">
                                        Comprehensive Project Overview
                                    </h2>
                                    <p className="mt-2 text-slate-600">
                                        Welcome to our ambitious project, where we are dedicated to
                                        reshaping the future of technological innovation. Our goal
                                        is to create solutions that are not only efficient and
                                        effective but also sustainable and forward-thinking. This
                                        project stands at the intersection of advanced technology
                                        and practical application, aiming to set new standards in
                                        the industry.
                                    </p>

                                    <h3 className="text-[24px] font-bold font-gt mt-4">
                                        Key Features and Innovations
                                    </h3>
                                    <ul className="list-disc list-inside mt-1 text-slate-600">
                                        <li>State-of-the-art Algorithmic Approaches</li>
                                        <li>Intuitive and User-Friendly Interface Design</li>
                                        <li>Scalable Architecture for Growing Demands</li>
                                        <li>Seamless Integration with Existing Technologies</li>
                                        <li>Focus on Eco-Friendly and Sustainable Practices</li>
                                    </ul>

                                    <h3 className="text-[24px] font-bold font-gt mt-4">
                                        Core Benefits
                                    </h3>
                                    <ul className="list-disc list-inside mt-1 text-slate-600">
                                        <li>Enhanced Operational Efficiency</li>
                                        <li>Unmatched Accuracy and Precision in Performance</li>
                                        <li>Exceptional User Experience and Accessibility</li>
                                        <li>Reduced Environmental Impact</li>
                                        <li>Long-Term Cost Savings and ROI</li>
                                    </ul>

                                    <h3 className="text-[24px] font-bold font-gt mt-4">
                                        Target Audience and Market Potential
                                    </h3>
                                    <p className="mt-1 text-slate-600">
                                        Our project is designed to cater to a wide range of
                                        industries, including but not limited to, technology,
                                        finance, healthcare, and education. The versatility and
                                        adaptability of our solutions make them ideal for various
                                        market segments, offering tremendous potential for growth
                                        and expansion.
                                    </p>

                                    <h3 className="text-[24px] font-bold font-gt mt-4">
                                        Future Roadmap and Development Plans
                                    </h3>
                                    <p className="mt-1 text-slate-600">
                                        Looking ahead, we are committed to continuous innovation and
                                        development. Our roadmap includes advanced research, regular
                                        updates, and new feature rollouts, ensuring that our project
                                        remains at the cutting edge of technology. We are also
                                        focused on building a community around our project,
                                        encouraging collaboration, feedback, and shared growth.
                                    </p>

                                    <h3 className="text-[24px] font-bold font-gt mt-4">
                                        Invitation for Collaboration and Support
                                    </h3>
                                    <p className="mt-1 text-slate-600">
                                        We warmly invite industry experts, investors, and
                                        enthusiasts to join us in this exciting journey. Your
                                        support and collaboration are crucial in helping us bring
                                        this vision to life. Together, we can create something truly
                                        remarkable and make a lasting impact in the world of
                                        technology.
                                    </p>
                                </div> */
}
