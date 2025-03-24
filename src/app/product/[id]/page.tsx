"use client";

import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Tabs from "@/app/components/Tabs";
import TabContent from "@/app/components/TabContent";
import RelatedProducts from "@/app/components/RelatedProducts";

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

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
  
    const findProductById = async () => {
      const { id } = await params;
      const productId = parseInt(id, 10); 
      const product = products.find((product) => product.id === productId);
      setSelectedProduct(product || null);
    };

    if (products.length > 0) {
      findProductById();
    }
  }, [products, params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="product-details-body">
        <div className="product-details-top">
          <div className="product-details-images">
            <div className="product-details-images-small-group">
              <img src={`/${selectedProduct.img}`} alt="Main Product" />
              <img src={`/${selectedProduct.img}`} alt="Main Product" />
              <img src={`/${selectedProduct.img}`} alt="Main Product" />
            </div>
            <img
              src={`/${selectedProduct.img}`}
              alt="Main Product"
              className="product-details-images-big"
            />
          </div>
          <div className="product-details-info">
            <h3 className="heading heading--3">{selectedProduct.name}</h3>
            <p className="product-details-rating">
              {[...Array(5)].map((_, index) => {
                const isFilled = index < selectedProduct.rating;
                const starClass = isFilled
                  ? "star star-filled"
                  : "star star-empty";
                return (
                  <span key={index} className={starClass}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1591_5672)">
                        <path
                          d="M7.09749 1.89137C7.45972 1.13224 8.54028 1.13224 8.90251 1.89137L10.0704 4.33882C10.2162 4.64433 10.5066 4.85534 10.8422 4.89958L13.5308 5.25399C14.3647 5.36391 14.6986 6.39158 14.0885 6.97067L12.1218 8.83768C11.8763 9.07073 11.7653 9.41217 11.827 9.74502L12.3207 12.4115C12.4739 13.2386 11.5997 13.8737 10.8604 13.4725L8.47702 12.1789C8.1795 12.0174 7.8205 12.0174 7.52298 12.1789L5.13959 13.4725C4.40033 13.8737 3.52614 13.2386 3.67929 12.4115L4.17304 9.74502C4.23467 9.41217 4.12373 9.07073 3.87823 8.83768L1.91145 6.97067C1.30142 6.39158 1.63533 5.36391 2.46924 5.25399L5.15779 4.89958C5.4934 4.85534 5.78384 4.64433 5.92962 4.33882L7.09749 1.89137Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1591_5672">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                );
              })}
            </p>
            <div className="product-details-info-prices">
              <p className="product-details-info-price">
                ${selectedProduct.price}
              </p>
              <p className="product-details-info-price-old">
                ${selectedProduct.oldPrice}
              </p>
            </div>
            <p className="paragraph">{selectedProduct.description}</p>
            <div className="product-details-info-button">
              <button className="details-add-to-cart">Add To Cart</button>
              <div className="product-details-info-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7141 3.30182C12.9713 2.55413 11.9865 2.09955 10.9387 2.02074C9.89102 1.94192 8.84997 2.24411 8.00494 2.87236C7.11474 2.20608 6.00672 1.90396 4.90401 2.02683C3.80131 2.1497 2.78582 2.68844 2.06205 3.53456C1.33828 4.38068 0.959991 5.47133 1.00336 6.58688C1.04672 7.70243 1.50852 8.76001 2.29576 9.54665L7.50818 14.7917C7.57323 14.8577 7.65061 14.9101 7.73587 14.9459C7.82113 14.9816 7.91257 15 8.00494 15C8.0973 15 8.18875 14.9816 8.27401 14.9459C8.35927 14.9101 8.43665 14.8577 8.50169 14.7917L13.7141 9.54665C14.1218 9.13671 14.4452 8.64995 14.6658 8.11419C14.8864 7.57843 15 7.00418 15 6.42424C15 5.8443 14.8864 5.27004 14.6658 4.73428C14.4452 4.19852 14.1218 3.71177 13.7141 3.30182ZM12.7276 8.55396L8.00494 13.2992L3.28227 8.55396C2.8661 8.13343 2.5826 7.59861 2.46733 7.01657C2.35207 6.43454 2.41017 5.83121 2.63436 5.28228C2.85854 4.73335 3.23882 4.26325 3.72749 3.93097C4.21616 3.59868 4.79147 3.419 5.38123 3.41447C6.16912 3.41641 6.92404 3.73293 7.4802 4.29452C7.54524 4.3605 7.62262 4.41288 7.70788 4.44862C7.79314 4.48437 7.88459 4.50277 7.97695 4.50277C8.06931 4.50277 8.16076 4.48437 8.24602 4.44862C8.33128 4.41288 8.40866 4.3605 8.47371 4.29452C9.04625 3.79527 9.7859 3.53355 10.543 3.56233C11.3 3.59111 12.0179 3.90824 12.5514 4.44954C13.0849 4.99083 13.3941 5.71586 13.4164 6.47788C13.4387 7.23989 13.1725 7.98199 12.6716 8.55396H12.7276Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-bottom">
          <div className="product-details-description-tabs">
            <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
            <TabContent activeTab={activeTab} />
          </div>
          <div className="product-details-related">
            <h3 className="heading heading--3">Related Products</h3>
            <RelatedProducts items={products.slice(0, 4)}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
