import CTA from "../../components/CTA";
import PageHeader from "../../components/PageHeader";
import ExperianceBox from "./ExperianceBox";

const About = () => {
    return (
        <div className="mt-12 rounded-lg mx-8 lg:mx-12 w-[90%]  lg:max-w-[1300px]">
            <PageHeader path="About Me">UX Designer By Heart</PageHeader>
            <div className="about_info flex flex-col mt-5">
                <span className="w-[10em] h-[10em] rounded-full bg-profilePic bg-top bg-cover bg-no-repeat"></span>
                <div className="description flex flex-col mt-5">
                    <p>
                        <b>Hello! I'm Chris</b>, a passionate and seasoned UX designer with a keen
                        eye for creating meaningful and delightful user experiences. My journey in
                        the world of design has been a dynamic exploration of blending creativity
                        with functionality, always striving to bridge the gap between user needs and
                        innovative solutions.
                    </p>

                    <p className="mt-5">
                        <b>Design Philosophy</b>: I believe in the power of design to transform
                        digital experiences, making them not only visually appealing but also highly
                        functional and user-centric. My approach is rooted in empathy –
                        understanding the user's perspective, needs, and pain points to craft
                        solutions that seamlessly integrate into their lives.
                    </p>
                </div>
                <div className="social_media flex gap-5 mt-10">
                    <span className="cursor-pointer w-10 h-10 bg-slate-800 bg-no-repeat bg-center bg-24 rounded-md bg-dribbble"></span>
                    <span className="cursor-pointer w-10 h-10 bg-slate-800 bg-no-repeat bg-center bg-24 rounded-md bg-instagram"></span>
                    <span className="cursor-pointer w-10 h-10 bg-slate-800 bg-no-repeat bg-center bg-24 rounded-md bg-linkedin"></span>
                    <span className="cursor-pointer w-10 h-10 bg-slate-800 bg-no-repeat bg-center bg-24 rounded-md bg-twitter"></span>
                </div>
            </div>
            <hr className="mt-5" />
            <div className="experience gap-10 mt-16 flex flex-col">
                <h3 className="text-[28px] font-semibold">Previous Expereince</h3>
                <ExperianceBox />
                <hr />
                <ExperianceBox />
            </div>
            <CTA />
        </div>
    );
};

export default About;
