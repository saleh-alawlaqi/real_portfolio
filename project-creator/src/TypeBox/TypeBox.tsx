import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useProjectForm } from "../ProjectForm";

interface TypeBoxProps {
    index: number;
    fontWeight: string;
    fontFamily: string;
    lineHeight: string;
    fontSize: string;
    title: string;
}

const TypeBox = ({ index, fontWeight, fontFamily, lineHeight, fontSize, title }: TypeBoxProps) => {
    const { setProject } = useProjectForm();
    const onChangeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, fontSize: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, title: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeFontFamily = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, fontFamily: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeFontWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, fontWeight: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onChangeLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types?.map((type, i) => {
                    if (i === index) {
                        return { ...type, lineHeight: e.target.value };
                    }
                    return type;
                }),
            };
        });
    };
    const onRemove = () => {
        setProject((prev) => {
            return {
                ...prev,
                types: prev.types.filter((_, i) => i !== index),
            };
        });
    };
    return (
        <div className="type-box items-center flex gap-2 justify-between w-full">
            <Input
                value={title}
                style={{ fontSize, fontFamily, fontWeight, lineHeight }}
                className="w-[48%]"
                onChange={onChangeTitle}
                placeholder="Line Height"
                name="lineHeight"
            />
            <div className="type-info flex w-[48%] gap-2">
                <Select
                    value={fontSize}
                    onChange={onChangeFontSize}
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
                <Input
                    value={fontFamily}
                    onChange={onChangeFontFamily}
                    size="sm"
                    placeholder="Font family"
                    name="fontFamily"
                />
                <Button onClick={onRemove} variant="solid" color="danger">
                    Remove
                </Button>
            </div>
        </div>
    );
};
export default TypeBox;
