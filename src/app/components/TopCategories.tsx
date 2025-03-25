"use client";

import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

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

interface TopCategoriesProps {
  categories: Product[];
  numPages: number;
}

const TopCategories: React.FC<TopCategoriesProps> = ({
  categories,
  numPages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const itemsPerPage = 4;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    touchMove: true,
    draggable: true,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
  };

  const pages = Array.from({ length: numPages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return categories.slice(start, end);
  });

  const handlePaginationClick = (pageIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(pageIndex);
    }
  };

  return (
    <div className="top-categories">
    <div className="top-categories-container">
      <h2 className="heading heading--2">Top Categories</h2>
      <Slider ref={sliderRef} {...settings}>
        {pages.map((pageItems, pageIndex) => (
          <div key={pageIndex} className="top-categories-page">
            <div className="top-categories-row">
              {pageItems.map((category, index) => (
                <div key={index} className="top-categories-card">
                  <div className="top-categories-overlay">
                    <Link href="/products">
                    <button className="top-categories-overlay-button-details">
                      View Category
                    </button>
                    </Link>
                  </div>
                  <div className="underlay"></div>
                  <div className="top-categories-card-content">
                    
                    <img
                      className="top-categories-image"
                      src={category.img}
                      alt={category.name}
                    />

                      <div className="top-categories-card-content-text">
                        <p className="heading heading-sub--4 top-categories-content-title">
                          {category.name}
                        </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>

      <div className="top-categories-pagination">
        {Array.from({ length: numPages }, (_, index) => (
          <div
            key={index}
            className={`pagination-line ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => handlePaginationClick(index)}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopCategories;
