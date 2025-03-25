"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../styles/css/style.css";
import Link from "next/link";

interface Item {
  imageSmall: string;
  imageMain: string;
  title: string;
  subtitle: string;
  description: string;
}

interface CarouselProps {
  items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    touchMove: true,
    draggable: true,
    customPaging: () => <div className="custom-dot"></div>,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className={`carousel-card carousel-card-${index}`}>
              <div className="carousel-card-content">
                <img
                  className="hero-image-small"
                  src={item.imageSmall}
                  alt={item.title}
                />
                <div className="hero-content">
                  <div className="hero-content-text">
                    <p className="paragraph paragraph--bold hero-subtitle">
                      {item.subtitle}
                    </p>
                    <h1 className="heading heading--1">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  <Link href="/products"><button className="shop-now-button">Shop Now</button></Link>
                </div>
                <img src={item.imageMain} alt="" className="hero-image-main" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
