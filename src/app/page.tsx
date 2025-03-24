"use client";
import "../styles/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel";
import CarouselFourCards from "./components/CarouselFourCards";
import CategoryTabs from "./components/CategoryTabs";
import Unique from "./components/Unique";
import Trending from "./components/Trending";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import Newsletter from "./components/Newsletter";
import LatestBlog from "./components/LatestBlog";
import { useEffect, useState } from "react";


export default function Home() {
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

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const itemsHero = [
    {
      imageSmall: "lamp.png",
      imageMain: "main-image.png",
      title: "New Trendy Collection Headphones",
      subtitle: "Best Headphones For Your Life....",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscin in phasellus non in justo.",
    },
    {
      imageSmall: "lamp.png",
      imageMain: "main-image.png",
      title: "New Trendy Collection Headphones",
      subtitle: "Best Headphones For Your Life....",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscin in phasellus non in justo.",
    },
    {
      imageSmall: "lamp.png",
      imageMain: "main-image.png",
      title: "New Trendy Collection Headphones",
      subtitle: "Best Headphones For Your Life....",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscin in phasellus non in justo.",
    },
  ];

  const itemsDiscount = [
    {
      title: "Headphones Compact",
      discount: "20% Discount Of All Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
      benefits: [
        "Material expose like metals",
        "Clear lines and geometric figures",
        "Simple neutral colours",
        "Material expose like metals",
      ],
    },
    {
      title: "Laptop Ultra",
      discount: "15% Discount Of All Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
      benefits: [
        "Slim and lightweight design",
        "High-resolution display",
        "Fast performance",
        "Excellent battery life",
      ],
    },
    {
      title: "Other Gadgets",
      discount: "10% Discount Of All Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
      benefits: [
        "Various styles and designs",
        "Affordable price range",
        "Wide range of options",
        "High quality materials used",
      ],
    },
  ];

  const blogs = [
    {
      id: 1,
      img: "blog-image-1.jpg",
      name: "Top essential Trends in 2023",
    },
    {
      id: 2,
      img: "blog-image-2.jpg",
      name: "Top esssential Trends in 2021",
    },
    {
      id: 3,
      img: "blog-image-3.jpg",
      name: "Top esssential Trends in 2021",
    },
  ];

  return (
   
    <div>
      <Header />
      <main>
        <Carousel items={itemsHero} />
        <div className="featured">
          <h2 className="heading heading--2 featured-title">
            Featured Products
          </h2>
          <CarouselFourCards
            items={products}
            numPages={Math.ceil(products.length / 4)}
          />
        </div>
        <div className="latest">
          <h2 className="heading heading--2 latest-title">Latest Products</h2>
          <CategoryTabs
            categoryContent={{
              new: products.slice(0, 6),
              best: products.slice(6, 12),
              featured: products.slice(12, 18),
              special: products.slice(18, 24),
            }}
          />
          ;
        </div>
        <Unique />
        <Trending pageItems={products} />
        <Discount items={itemsDiscount} />
        <TopCategories
          categories={products}
          numPages={Math.ceil(products.length / 4)}
        />
        <Newsletter />
        <LatestBlog pageItems={blogs} />
      </main>
      <Footer />
    </div>
 
  );
}
