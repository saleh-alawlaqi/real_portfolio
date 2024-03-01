import Colors from "./Colors";
import Icons from "./Icons";
import Typography from "./Typography";

const DesignSystem = () => {
    return (
        <div className="flex flex-col design-system gap-9">
            <Colors />
            <Typography />
            <Icons />
        </div>
    );
};

export default DesignSystem;
