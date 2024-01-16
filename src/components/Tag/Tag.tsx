interface TagProps {
    label: string;
}
const Tag = (props: TagProps) => {
    return (
        <span className="p-2 px-3 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
            {props.label}
        </span>
    );
};

export default Tag;
