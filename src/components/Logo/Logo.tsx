import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle() {
    const text = "Animated Text"; // This would normally be passed into this component as a prop!

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    return (
        <h2 aria-label={text} role="heading">
            {text.split("").map((character, index) => (
                <motion.span
                    ref={ref}
                    aria-hidden="true"
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: index * 0.05,
                    }}
                >
                    {character}
                </motion.span>
            ))}
        </h2>
    );
}
