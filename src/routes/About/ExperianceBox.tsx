import React from "react";

const ExperianceBox = () => {
    return (
        <div className="experience_box flex flex-col">
            <div className="header flex flex-col">
                <span className="company_logo w-16 h-16 bg-slate-700 rounded-lg"></span>
                <div className="name_and_job_title mt-5 flex flex-col">
                    <span className="text-[24px] font-bold">Instagram</span>
                    <span className="text-slate-600 mt-2">Design Lead (2021 - Now)</span>
                </div>
            </div>
            <div className="description_and_work_done mt-8 flex flex-col">
                <p>
                    As a UX/UI Designer at Instagram, I had the privilege of working on a platform
                    with millions of users, contributing to its visual appeal and user experience.
                    Key responsibilities included:
                </p>
                <p className="mt-5">
                    <ul className="flex flex-col gap-3">
                        <li>
                            Collaborating closely with product managers and engineers to translate
                            business goals into compelling design solutions.
                        </li>
                        <li>
                            Conducting user interviews and usability studies to gain insights into
                            user behavior and preferences.
                        </li>
                        <li>
                            Iteratively designing and prototyping features to enhance user
                            interactions and streamline the user journey.
                        </li>
                        <li>
                            Contributing to the development and maintenance of Instagram's design
                            system, ensuring consistency and scalability.
                        </li>
                        <li>
                            Advocating for user-centric design principles and championing a culture
                            of continuous improvement.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default ExperianceBox;
