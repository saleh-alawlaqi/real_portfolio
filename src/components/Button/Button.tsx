const Button = (props: { value: string; style?: string }) => {
    if (props.style === "line") {
        return (
            <button className="py-3 px-8 font-medium font-inter bg-transparent border-2 border-white-500 text-white rounded-full">
                {props.value}
            </button>
        );
    }
    if (props.style === "white") {
        return (
            <button className="py-3 px-8 font-medium font-inter bg-white border border-white-500 text-sky-500 rounded-full">
                {props.value}
            </button>
        );
    }
    return (
        <button className="py-3 px-8 font-medium font-inter bg-sky-500 text-white rounded-full">
            {props.value}
        </button>
    );
};

export default Button;
