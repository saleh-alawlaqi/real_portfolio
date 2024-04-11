interface TypeBoxProps {
    fontFamily: string;
    fontSize: string;
    index: number;
}

const TypeBox = ({ fontFamily, fontSize, index }: TypeBoxProps) => {
    const typeNumber = index + 1;
    return (
        <div className="type-box items-center flex gap-10 justify-between w-full">
            <span
                className="font-inter max-w-[50%]"
                style={{
                    fontSize,
                }}
            >
                {typeNumber <= 6 ? `Heading ${typeNumber}` : `Body ${typeNumber - 6}`}
            </span>
            <hr className="flex-1 border-dashed border-slate-700" />
            <div className="type-info flex gap-6">
                <p className="text-slate-700">{fontFamily}</p>
                <p className="text-slate-700">{fontSize}</p>
            </div>
        </div>
    );
};
export default TypeBox;
