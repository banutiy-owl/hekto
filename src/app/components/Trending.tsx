"use client";
import React from "react";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number | null;
  description: string;
  rating: number;
  code: string;
  brand: string;
  discount: string;
  category: string;
}

interface TrendingProps {
  pageItems: Product[];
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
                src={item.img}
                alt={item.name}
              />
              <div className="trending-content">
                <div className="trending-content-text">
                  <p className="label label--bold trending-content-title">
                    {item.name}
                  </p>
                  
                  <div className="trending-content-prices">
                  <p className="label trending-content-price">
                    {item.price}
                  </p>

                  <p className="label label--small trending-content-sale">
                    {item.oldPrice}
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
