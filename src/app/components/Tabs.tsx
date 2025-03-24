import React from "react";

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="product-details-tabs">
      <div
        className={`product-details-tab-button heading heading-sub ${
          activeTab === "description" ? "active" : ""
        }`}
        onClick={() => onTabClick("description")}
      >
        Description
      </div>
      <div
        className={`product-details-tab-button heading heading-sub ${
          activeTab === "additional-info" ? "active" : ""
        }`}
        onClick={() => onTabClick("additional-info")}
      >
        Additional Info
      </div>
      <div
        className={`product-details-tab-button heading heading-sub ${
          activeTab === "reviews" ? "active" : ""
        }`}
        onClick={() => onTabClick("reviews")}
      >
        Reviews
      </div>
      <div
        className={`product-details-tab-button heading heading-sub ${
          activeTab === "video" ? "active" : ""
        }`}
        onClick={() => onTabClick("video")}
      >
        Video
      </div>
    </div>
  );
};

export default Tabs;
