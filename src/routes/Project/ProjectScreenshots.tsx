import { useProjectContext } from "./ProjectContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import Screenshot from "./Screenshot";

const ProjectScreenshots = () => {
    const { project } = useProjectContext();
    const { gradient, screenshots } = project;
    return (
        <div
            className={`image ${gradient} flex items-stretch justify-center relative w-full h-[20em] rounded-xl lg:w-full lg:h-[30em]  bg-no-repeat bg-cover bg-center`}
        >
            <Swiper
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
            </Swiper>
        </div>
    );
};

export default ProjectScreenshots;
