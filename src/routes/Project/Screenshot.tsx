import React from "react";
interface ScreenshotProps {
    image: string;
}

const Screenshot = (props: ScreenshotProps) => {
    const [visibility, setVisibility] = React.useState(false);

    const onShow = () => setVisibility(true);
    const onHide = () => setVisibility(false);
    // const image = import(`../../assets/projects/${props.image}`);
    return (
        <div
            onMouseEnter={onShow}
            onMouseLeave={onHide}
            style={{
                backgroundImage: `url("")`,
            }}
            className="bg-desktop bg-cover bg-top w-full rounded-xl cursor-pointer"
        >
            {visibility && (
                <div className="view_screenshot flex flex-col justify-center items-center w-full rounded-xl h-full bg-black bg-opacity-50">
                    <span className="eye w-[5em] h-[5em]"></span>
                    <span className="text-white text-[24px] font-gt">View Image</span>
                </div>
            )}
        </div>
    );
};

export default Screenshot;
