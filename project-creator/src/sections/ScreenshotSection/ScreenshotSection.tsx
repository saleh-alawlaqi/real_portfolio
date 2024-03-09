import { Button } from "@nextui-org/react";
import ScreenshotBox from "../../boxes/ScreenshotBox";
import { useRef } from "react";
import { useProjectForm } from "../../ProjectForm";

const ScreenshotSection = () => {
    const { setScreenshots, screenshots } = useProjectForm();
    const screenshotsRef = useRef<HTMLInputElement>(null);

    const addScreenshot = (e: any) => {
        const { files } = e.target;
        if (!files) return;
        setScreenshots((prev) => [...prev, ...files]);
    };
    const handleScreenshotButton = () => {
        if (screenshotsRef.current) {
            screenshotsRef.current.click();
        }
    };
    return (
        <div className="flex flex-col screenshots gap-5">
            <div className="icons-heading flex justify-between">
                <span className="text-2xl">Screenshots</span>
                <input onChange={addScreenshot} type="file" multiple ref={screenshotsRef} hidden />
                <Button
                    onClick={handleScreenshotButton}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add screenshot
                </Button>
            </div>
            {screenshots.length > 0 && (
                <div className="flex flex-wrap gap-5">
                    {screenshots
                        ?.slice()
                        .reverse()
                        .map((screenshot, index) => (
                            <ScreenshotBox
                                index={screenshots.length - 1 - index}
                                key={index}
                                screenshot={screenshot}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default ScreenshotSection;
