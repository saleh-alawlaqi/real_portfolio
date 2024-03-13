import { Button, Link } from "@nextui-org/react";
import { useProjectContext } from "./ProjectContext";
import { motion } from "framer-motion";
interface HighlightsProps {
    highlights: string[];
}

const Highlights = (props: HighlightsProps) => {
    const {
        project: { demo, github },
    } = useProjectContext();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="highlights_wrap block sticky border border-slate-200 z-10 top-5 self-start bg-white mt-8 w-full lg:w-[40%] lg:mt-0 p-7 rounded-xl "
        >
            <div className="info flex flex-col">
                <h3 className="text-[32px] font-gt_light text-slate-700">Highlights</h3>
                <ul className="mt-5 space-y-2 text-slate-700 custom-list !ml-0">
                    {props.highlights.map((highlight) => (
                        <li>{highlight}</li>
                    ))}
                </ul>
            </div>
            <hr className="my-5 border border-gray-300" />
            <div className="buttons flex gap-3 lg:flex-col">
                <Button
                    color="primary"
                    variant="solid"
                    as={Link}
                    href={github}
                    target="_blank"
                    showAnchorIcon
                    className="rounded-full flex-1 lg:flex-none font-semibold font-inter"
                >
                    View In Github
                </Button>
                <Button
                    color="secondary"
                    variant="ghost"
                    as={Link}
                    target="_blank"
                    href={demo}
                    showAnchorIcon
                    className="rounded-full flex-1 lg:flex-none font-semibold font-inter"
                >
                    View Demo
                </Button>
            </div>
        </motion.div>
    );
};

export default Highlights;
