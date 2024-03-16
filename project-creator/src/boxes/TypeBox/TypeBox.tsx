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
    return (
        <div className="type-box border shadow-medium rounded-lg border-slate-200 p-5 items-center flex gap-2 justify-between w-full">
            <Input
                value={title}
                style={{ fontSize, fontFamily, fontWeight, lineHeight }}
                className="w-[48%]"
                onChange={(e) => onChangeTitle(e, index)}
                placeholder="Line Height"
                name="lineHeight"
            />
            <div className="type-info items-center flex w-[48%] gap-2">
                <Select
                    value={fontSize}
                    onChange={(e) => onChangeFontSize(e, index)}
                    size="sm"
                    placeholder="Size"
                    name="fontSize"
                >
                    <SelectItem key="10px" value="10px">
                        10px
                    </SelectItem>
                    <SelectItem key="12px" value="12px">
                        12px
                    </SelectItem>
                    <SelectItem key="14px" value="14px">
                        14px
                    </SelectItem>
                    <SelectItem key="16px" value="16px">
                        16px
                    </SelectItem>
                    <SelectItem key="18px" value="18px">
                        18px
                    </SelectItem>
                    <SelectItem key="20px" value="20px">
                        20px
                    </SelectItem>
                    <SelectItem key="22px" value="22px">
                        22px
                    </SelectItem>
                    <SelectItem key="24px" value="24px">
                        24px
                    </SelectItem>
                    <SelectItem key="26px" value="26px">
                        26px
                    </SelectItem>
                    <SelectItem key="28px" value="28px">
                        28px
                    </SelectItem>
                    <SelectItem key="30px" value="30px">
                        30px
                    </SelectItem>
                    <SelectItem key="32px" value="32px">
                        32px
                    </SelectItem>
                    <SelectItem key="34px" value="34px">
                        34px
                    </SelectItem>
                    <SelectItem key="36px" value="36px">
                        36px
                    </SelectItem>
                    <SelectItem key="38px" value="38px">
                        38px
                    </SelectItem>
                    <SelectItem key="40px" value="40px">
                        40px
                    </SelectItem>
                </Select>
                <Select
                    value={fontFamily}
                    onChange={(e) => onChangeFontFamily(e, index)}
                    size="sm"
                    placeholder="Font family"
                    name="fontFamily"
                >
                    <SelectItem key="Arial" value="Arial">
                        Arial
                    </SelectItem>
                    <SelectItem key="Roboto" value="Roboto">
                        Roboto
                    </SelectItem>
                    <SelectItem key="Open Sans" value="Open Sans">
                        Open Sans
                    </SelectItem>
                    <SelectItem key="Lato" value="Lato">
                        Lato
                    </SelectItem>
                    <SelectItem key="Montserrat" value="Montserrat">
                        Montserrat
                    </SelectItem>
                    <SelectItem key="GT bold" value="GT bold">
                        GT Bold
                    </SelectItem>
                    <SelectItem key="GT medium" value="GT medium">
                        GT Medium
                    </SelectItem>
                    <SelectItem key="GT light" value="GT light">
                        GT Light
                    </SelectItem>
                    <SelectItem key="Inter bold" value="Inter bold">
                        Inter bold
                    </SelectItem>
                    <SelectItem key="Inter medium" value="Inter medium">
                        Inter medium
                    </SelectItem>
                    <SelectItem key="Inter light" value="Inter light">
                        Inter light
                    </SelectItem>
                    <SelectItem key="Inter regular" value="Inter regular">
                        Inter regular
                    </SelectItem>
                    <SelectItem key="Inter semibold" value="Inter semibold">
                        Inter semibold
                    </SelectItem>
                    <SelectItem key="Inter extrabold" value="Inter extrabold">
                        Inter extrabold
                    </SelectItem>
                </Select>

                <Button onClick={() => onRemove(index)} variant="solid" color="danger">
                    Remove
                </Button>
            </div>
        </div>
    );
};
export default TypeBox;
