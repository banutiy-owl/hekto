"use client";
import React from "react";

interface Item {
  title: string;
  image: string;
  price: string;
  sale: string;
}

interface TrendingProps {
  pageItems: Item[];
}

const Trending: React.FC<TrendingProps> = ({ pageItems }) => {
  return (
    <div className="trending">
        <h2 className="heading heading--2">Trending Products</h2>
      <div className="trending-row">
        {pageItems.slice(0, 4).map((item, index) => (
          <div key={index} className="trending-card">
        
            <div className="trending-card-content">
              <img
                className="trending-image"
                src={item.image}
                alt={item.title}
              />
              <div className="trending-content">
                <div className="trending-content-text">
                  <p className="label label--bold trending-content-title">
                    {item.title}
                  </p>
                  
                  <div className="trending-content-prices">
                  <p className="label trending-content-price">
                    {item.price}
                  </p>

                  <p className="label label--small trending-content-sale">
                    {item.sale}
                  </p>

                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
