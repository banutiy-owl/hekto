"use client";
import React, { useState } from "react";

interface Item {
  title: string;
  discount: string;
  description: string;
  benefits: string[];
}

interface DiscountProps {
  items: Item[];
}

const Discount: React.FC<DiscountProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>("headphones");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const activeItem = items.find((item) =>
    item.title.toLowerCase().includes(activeTab)
  );

  return (
    <div className="discount">
      <h2 className="heading heading--2">Discount Item</h2>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "headphones" ? "active" : ""}`}
          onClick={() => handleTabChange("headphones")}
        >
          Headphones
        </button>
        <button
          className={`tab ${activeTab === "laptop" ? "active" : ""}`}
          onClick={() => handleTabChange("laptop")}
        >
          Laptop
        </button>
        <button
          className={`tab ${activeTab === "other" ? "active" : ""}`}
          onClick={() => handleTabChange("other")}
        >
          Other
        </button>
      </div>

      {activeItem && (
        <div className="discount-items">
          <div className="discount-item">
            <div className="discount-item-content">
              <h3 className="heading heading--3">{activeItem.discount}</h3>
              <h3 className="heading heading-sub--2 discount-title">{activeItem.title}</h3>
              <p className="paragraph paragraph--large">
                {activeItem.description}
              </p>
              <div className="discount-grid">
                {activeItem.benefits.map((benefit, index) => (
                  <div className="discount-grid-item" key={index}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8.5L5.5 12L14 3.5"
                        stroke="#101750"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="paragraph">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="discount-shop-now">
                <p className="">Shop now</p>
              </button>
            </div>
            <img src="discount-image.png" alt="" className="discount-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Discount;
