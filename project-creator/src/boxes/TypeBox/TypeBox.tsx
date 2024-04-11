import { Button, Input } from "@nextui-org/react";

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
        "2px",
        "4px",
        "6px",
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "22px",
        "24px",
        "26px",
        "28px",
        "30px",
        "32px",
        "34px",
        "36px",
        "38px",
        "40px",
        "42px",
        "44px",
        "46px",
        "48px",
        "50px",
        "52px",
        "54px",
        "56px",
        "58px",
        "60px",
        "62px",
        "64px",
        "66px",
        "68px",
        "70px",
        "72px",
        "74px",
        "76px",
        "78px",
        "80px",
        "82px",
        "84px",
        "86px",
        "88px",
        "90px",
        "92px",
        "94px",
        "96px",
        "98px",
        "100px",
        "102px",
        "104px",
        "106px",
        "108px",
        "110px",
        "112px",
        "114px",
        "116px",
        "118px",
        "120px",
        "122px",
        "124px",
        "126px",
        "128px",
        "130px",
        "132px",
        "134px",
        "136px",
        "138px",
        "140px",
        "142px",
        "144px",
        "146px",
        "148px",
        "150px",
        "152px",
        "154px",
        "156px",
        "158px",
        "160px",
        "162px",
        "164px",
        "166px",
        "168px",
        "170px",
        "172px",
        "174px",
        "176px",
        "178px",
        "180px",
        "182px",
        "184px",
        "186px",
        "188px",
        "190px",
        "192px",
        "194px",
        "196px",
        "198px",
        "200px",
        "202px",
        "204px",
        "206px",
        "208px",
        "210px",
        "212px",
        "214px",
        "216px",
        "218px",
        "220px",
        "222px",
        "224px",
        "226px",
        "228px",
        "230px",
        "232px",
        "234px",
        "236px",
        "238px",
        "240px",
        "242px",
        "244px",
        "246px",
        "248px",
        "250px",
    ];

    return (
        <div className="type-box border shadow-medium rounded-lg border-slate-200 p-5 items-center flex gap-6 justify-between w-full">
            <Input
                value={title}
                style={{ fontSize, fontFamily, fontWeight, lineHeight }}
                className="flex-1"
                onChange={(e) => onChangeTitle(e, index)}
                placeholder="Line Height"
                disableAnimation
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

                <Button
                    disableAnimation
                    onClick={() => onRemove(index)}
                    variant="solid"
                    color="danger"
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};
export default TypeBox;
