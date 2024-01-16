import { Tab, Tabs } from "@nextui-org/react";
import { GalleryIcon } from "./GalleryIcon";
import { MusicIcon } from "./MusicIcon";
import { VideoIcon } from "./VideoIcon";
import CodeIcon from "./CodeIcon";

const PortfolioTabs = () => {
    const tabs = [
        { name: "All" },
        { name: "Coded Websites" },
        { name: "UI Design" },
        { name: "No-Code Websites" },
        { name: "Softwares" },
    ];
    return (
        <div className="flex flex-1 flex-col">
            <Tabs
                aria-label="Options"
                classNames={{ tabList: "flex-1 bg-white", tab: "h-10" }}
                color="primary"
                radius="full"
                variant="bordered"
                size="md"
                onSelectionChange={(key) => {
                    alert(key);
                }}
            >
                {tabs.map((tab, key) => (
                    <Tab
                        key={key}
                        className="flex-1"
                        title={
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">{tab.name}</span>
                            </div>
                        }
                    />
                ))}
            </Tabs>
        </div>
    );
};

export default PortfolioTabs;
