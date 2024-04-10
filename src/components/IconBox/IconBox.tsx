interface IconBoxProps {
    path: string;
}
const IconBox = ({ path }: IconBoxProps) => {
    return (
        <div
            style={{
                backgroundImage: `url("${path}")`,
            }}
            className="icon-box rounded-md bg-slate-100 bg-center  center relative flex items-center justify-center bg-24 bg-no-repeat w-10 h-10"
        ></div>
    );
};

export default IconBox;
