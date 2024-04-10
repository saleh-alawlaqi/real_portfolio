import { Button, Input, Select, SelectItem } from "@nextui-org/react";

interface TypeBoxProps {
    index: number;
    fontWeight: string;
    fontFamily: string;
    lineHeight: string;
    fontSize: string;
    title: string;
    onChangeFontSize: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onChangeFontFamily: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
    onRemove: (index: number) => void;
}

const TypeBox = ({
    index,
    fontWeight,
    fontFamily,
    lineHeight,
    fontSize,
    title,
    onChangeFontFamily,
    onChangeFontSize,
    onChangeTitle,
    onRemove,
}: TypeBoxProps) => {
    const fontSizes = [
        "200px",
        "196px",
        "192px",
        "188px",
        "184px",
        "180px",
        "176px",
        "172px",
        "168px",
        "164px",
        "160px",
        "156px",
        "152px",
        "148px",
        "144px",
        "140px",
        "136px",
        "132px",
        "128px",
        "124px",
        "120px",
        "116px",
        "112px",
        "108px",
        "104px",
        "100px",
        "96px",
        "92px",
        "88px",
        "84px",
        "80px",
        "76px",
        "72px",
        "68px",
        "64px",
        "60px",
        "56px",
        "52px",
        "48px",
        "44px",
        "42px",
        "40px",
        "36px",
        "34px",
        "32px",
        "28px",
        "24px",
        "20px",
        "16px",
        "14px",
        "12px",
        "8px",
    ];

    return (
        <div className="type-box border shadow-medium rounded-lg border-slate-200 p-5 items-center flex gap-6 justify-between w-full">
            <Input
                value={title}
                style={{ fontSize, fontFamily, fontWeight, lineHeight }}
                className="flex-1"
                onChange={(e) => onChangeTitle(e, index)}
                placeholder="Line Height"
                name="lineHeight"
            />
            <div className="type-info ml-auto items-center flex  gap-2">
                <select
                    value={fontSize}
                    onChange={(e) => onChangeFontSize(e, index)}
                    name="fontSize"
                    className="p-3 rounded-md bg-slate-200"
                >
                    {fontSizes.map((size) => (
                        <option key={`${size}`} value={`${size}`}>
                            {size}
                        </option>
                    ))}
                </select>
                <select
                    value={fontFamily}
                    onChange={(e) => onChangeFontFamily(e, index)}
                    name="fontFamily"
                    className="p-3 rounded-md bg-slate-200"
                >
                    <option key="Arial" value="Arial">
                        Arial
                    </option>
                    <option key="Roboto" value="Roboto">
                        Roboto
                    </option>
                    <option key="Open Sans" value="Open Sans">
                        Open Sans
                    </option>
                    <option key="Lato" value="Lato">
                        Lato
                    </option>
                    <option key="Montserrat" value="Montserrat">
                        Montserrat
                    </option>
                    <option key="GT bold" value="GT bold">
                        GT Bold
                    </option>
                    <option key="GT medium" value="GT medium">
                        GT Medium
                    </option>
                    <option key="GT light" value="GT light">
                        GT Light
                    </option>
                    <option key="Inter bold" value="Inter bold">
                        Inter bold
                    </option>
                    <option key="Inter medium" value="Inter medium">
                        Inter medium
                    </option>
                    <option key="Inter light" value="Inter light">
                        Inter light
                    </option>
                    <option key="Inter regular" value="Inter regular">
                        Inter regular
                    </option>
                    <option key="Inter semibold" value="Inter semibold">
                        Inter semibold
                    </option>
                    <option key="Inter extrabold" value="Inter extrabold">
                        Inter extrabold
                    </option>
                </select>

                <Button onClick={() => onRemove(index)} variant="solid" color="danger">
                    Remove
                </Button>
            </div>
        </div>
    );
};
export default TypeBox;
