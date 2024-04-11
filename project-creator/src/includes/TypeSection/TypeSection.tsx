import { Button } from "@nextui-org/react";
import TypeBox from "../../boxes/TypeBox";

interface TypeSectionProps {
    error: string;
    types: any[];
    onAddType: (type: any) => void;
    onChangeFontFamily: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
    onChangeFontSize: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onRemoveType: (index: number) => void;
}

const TypeSection = ({
    onAddType,
    types,
    error,
    onChangeFontFamily,
    onChangeFontSize,
    onChangeTitle,
    onRemoveType,
}: TypeSectionProps) => {
    const onAdd = () => {
        onAddType({
            title: "New Type Section",
            fontSize: "16px",
            lineHeight: "1.5",
            fontWeight: "400",
            fontFamily: "Arial",
        });
    };
    return (
        <div
            id="type_section"
            className={`flex flex-col types gap-5 ${
                error === "type_section" ? "border-2 border-red-500" : ""
            }`}
        >
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Typography</span>
                ** Order does not matter as it will be displayed from big to small
                <Button
                    onClick={onAdd}
                    className="rounded-full font-medium"
                    variant="solid"
                    disableAnimation
                    color="primary"
                >
                    Add type
                </Button>
            </div>
            {types.length > 0 &&
                types
                    ?.slice()
                    .reverse()
                    .map((type, index) => (
                        <TypeBox
                            index={types.length - 1 - index} // Adjust index for descending order
                            key={index}
                            onChangeFontFamily={onChangeFontFamily}
                            onChangeFontSize={onChangeFontSize}
                            onChangeTitle={onChangeTitle}
                            onRemove={onRemoveType}
                            {...type}
                        />
                    ))}
        </div>
    );
};

export default TypeSection;
