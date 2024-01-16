import { Tab, Tabs } from "@nextui-org/react";
import { usePortfolioContext } from "./PortfolioContext";
import { projectTabsList } from "../../types";

const PortfolioTabs = () => {
    const { setActiveTab } = usePortfolioContext();
    return (
        <div className="flex flex-1 flex-col">
            <Tabs
                aria-label="Options"
                classNames={{ tabList: "flex-1 bg-white", tab: "h-10" }}
                color="primary"
                radius="full"
                variant="bordered"
                size="md"
                onSelectionChange={(key) => setActiveTab(parseInt(key.toString()))}
            >
                {projectTabsList.map((tab, key) => (
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
