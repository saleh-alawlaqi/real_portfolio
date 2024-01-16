import { Button, Link } from "@nextui-org/react";

interface HighlightsProps {
    highlights: string[];
}

const Highlights = (props: HighlightsProps) => {
    return (
        <div className="highlights_wrap block sticky z-10 top-6 self-start bg-white mt-8 lg:w-[38%] lg:mt-0 p-7 rounded-xl ">
            <div className="info flex flex-col">
                <h3 className="text-[18px] font-semibold text-slate-700">Highlights:</h3>
                <ul className="mt-5 space-y-2 text-slate-700 custom-list !ml-0">
                    {props.highlights.map((highlight) => (
                        <li>{highlight}</li>
                    ))}
                </ul>
            </div>
            <hr className="my-5 border border-gray-300" />
            <div className="buttons flex flex-col">
                <Button color="primary" className="rounded-full font-semibold font-inter">
                    Purchase Now
                </Button>
                <Button
                    color="secondary"
                    variant="ghost"
                    as={Link}
                    showAnchorIcon
                    className="mt-3 rounded-full font-semibold font-inter"
                >
                    View Demo
                </Button>
            </div>
        </div>
    );
};

export default Highlights;