import { useProjectContext } from "./ProjectContext";
import { motion } from "framer-motion";
const ProjectScreenshots = () => {
    const { project } = useProjectContext();
    const { gradient } = project;
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`image ${gradient} flex items-stretch justify-center p-5 relative w-full h-[20em] rounded-xl lg:w-full lg:h-[30em]  bg-no-repeat bg-cover bg-center`}
        >
            <div
                style={{ backgroundImage: `url(${project.mainImage})` }}
                className="w-full h-full bg-top bg-cover bg-no-repeat rounded-xl"
            />
            {/* <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="coverflow"
                coverflowEffect={{
                    slideShadows: false,
                }}
                className="px-20 py-16 w-full h-full"
                pagination={{ clickable: true }}
            >
                {screenshots.map(() => (
                <SwiperSlide className="flex">
                    <Screenshot />
                </SwiperSlide>
                ))}
            </Swiper> */}
        </motion.div>
    );
};

export default ProjectScreenshots;
