import { motion } from "framer-motion";

interface WritingEffectProps {
    text: string;
    delay?: number;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onMouseMove?: (event: any) => void;
    condition?: boolean;
    duration?: number;
}

const WritingEffect = ({
    text,
    delay = 0,
    className,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    condition = true,
    duration = 0.3,
}: WritingEffectProps) => {
    return (
        <>
            {text.split("").map((character, index) => (
                <motion.span
                    aria-hidden="true"
                    key={`rest-${index}`}
                    initial={{ opacity: 0 }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    className={className}
                    animate={condition ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration,
                        delay: (delay + index) * 0.015,
                    }}
                >
                    {character}
                </motion.span>
            ))}
        </>
    );
};

export default WritingEffect;
