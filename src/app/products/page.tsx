"use client";
import { FC, useState, useEffect, useCallback } from "react";

import "../../styles/css/style.css";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import ProductsListCard from "../components/ProductsListCard";
import { Provider } from "react-redux";
import { store } from "../store/store";

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

interface FiltersType {
  brands: string[];
  discounts: string[];
  categories: string[];
  priceRange: string;
  rating: number | null;
}

const Products: FC = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [filters, setFilters] = useState<FiltersType>({
    brands: [],
    discounts: [],
    categories: [],
    priceRange: "",
    rating: null,
  });

  const [perPage, setPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("Price: Low → High");
  const [view, setView] = useState<string>("list");
  const [perPageDropdownVisible, setPerPageDropdownVisible] =
    useState<boolean>(false);
  const [sortByDropdownVisible, setSortByDropdownVisible] =
    useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>([]);
  const totalPages = Math.ceil(products.length / perPage);

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

  const handlePageClick = (pageNumber: number): void => {
    setActivePage(pageNumber);
  };

  const handlePerPageDropdownToggle = () => {
    setPerPageDropdownVisible((prev) => !prev);
    setSortByDropdownVisible(false);
  };

  const handleSortByDropdownToggle = () => {
    setSortByDropdownVisible((prev) => !prev);
    setPerPageDropdownVisible(false);
  };

  const handlePerPageChange = (value: number) => {
    setPerPage(value);
    setActivePage(1);
  };

  const handleSortByChange = (value: string) => {
    setSortBy(value);
  };

  const handleViewChange = (viewType: string) => {
    setView(viewType);
  };

  const handleFilterChange = useCallback((newFilters: FiltersType) => {
    setFilters((prevFilters) => {
      if (JSON.stringify(prevFilters) !== JSON.stringify(newFilters)) {
        return { ...prevFilters, ...newFilters };
      }
      return prevFilters;
    });
  }, []);

  const calculatePriceRange = (price: number): string => {
    if (price < 150) return "$0 - $150";
    if (price < 350) return "$150 - $350";
    if (price < 500) return "$350 - $500";
    if (price < 800) return "$550 - $800";
    return "$800+";
  };

  const applyFilters = (products: Product[]) => {
    let filteredProducts = products;

    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    if (filters.discounts && filters.discounts.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.discounts.includes(product.discount)
      );
    }

    if (filters.categories && filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        const productPriceRange = calculatePriceRange(product.price);

        return productPriceRange === filters.priceRange;
      });
    }

    if (filters.rating !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating === filters.rating
      );
    }

    return filteredProducts;
  };

  const sortedProducts = (filteredProducts: Product[]) => {
    let sortedArray = [...filteredProducts];

    if (sortBy === "Price: Low → High") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High → Low") {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    return sortedArray;
  };

  const filteredProducts = applyFilters(products);
  const sortedFilteredProducts = sortedProducts(filteredProducts);
  const paginatedProducts = sortedFilteredProducts.slice(
    (activePage - 1) * perPage,
    activePage * perPage
  );

  return (
    <Provider store={store}>
      <div className="products">
        <Header />
        <div className="products-content">
          <h1 className="heading heading--1">Products</h1>
          <div className="products-head">
            <ul className="products-nav-links">
              <Link href="/">
                <div className="nav-link">Home</div>
              </Link>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
              </svg>
              <Link href="/products">
                <div className="nav-link nav-link-products">Products</div>
              </Link>
            </ul>

            <div className="products-switches">
              <div className="dropdown dropdown-per-page">
                <span>
                  Per Page{" "}
                  <span
                    onClick={() => handlePerPageDropdownToggle()}
                    className="dropdown-visible dropdown-visible-per-page"
                  >
                    <p className="paragraph paragraph--small paragraph-page">
                      {perPage}{" "}
                    </p>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99951 5L7.99967 10L12.9998 5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {perPageDropdownVisible && (
                      <div className="dropdown-content">
                        {[10, 15, 20].map((value) => (
                          <p
                            key={value}
                            onClick={() => handlePerPageChange(value)}
                            className={
                              perPage === value
                                ? "paragraph--small dropdown-option dropdown-option-page active"
                                : "paragraph--small dropdown-option dropdown-option-page"
                            }
                          >
                            {value}
                          </p>
                        ))}
                      </div>
                    )}
                  </span>
                </span>
              </div>

              <div className="dropdown dropdown-sort-by">
                <span>
                  Sort By:{" "}
                  <span
                    onClick={() => handleSortByDropdownToggle()}
                    className="dropdown-visible dropdown-visible-sort-by"
                  >
                    <p className="paragraph paragraph--small paragraph-sort">
                      {sortBy}
                    </p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99951 5L7.99967 10L12.9998 5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {sortByDropdownVisible && (
                      <div className="dropdown-content dropdown-content-sort-by">
                        {["Price: High → Low", "Price: Low → High"].map(
                          (value) => (
                            <p
                              key={value}
                              onClick={() => handleSortByChange(value)}
                              className={
                                sortBy === value
                                  ? "paragraph--small dropdown-option dropdown-option-sort active"
                                  : "paragraph--small dropdown-option dropdown-option-sort"
                              }
                            >
                              {value}
                            </p>
                          )
                        )}
                      </div>
                    )}
                  </span>
                </span>
              </div>

              <div className="view-option">
                View
                <div
                  className={`view-option-grid ${
                    view === "grid" ? "active" : ""
                  }`}
                  onClick={() => handleViewChange("grid")}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill={view === "grid" ? "#FB2E86" : "none"}
                    stroke={view === "grid" ? "#FB2E86" : "#101750"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="4"
                      height="4"
                      rx="1"
                      stroke={view === "grid" ? "#FB2E86" : "#101750"}
                    />
                    <rect
                      x="10"
                      y="2"
                      width="4"
                      height="4"
                      rx="1"
                      stroke={view === "grid" ? "#FB2E86" : "#101750"}
                    />
                    <rect
                      x="2"
                      y="10"
                      width="4"
                      height="4"
                      rx="1"
                      stroke={view === "grid" ? "#FB2E86" : "#101750"}
                    />
                    <rect
                      x="10"
                      y="10"
                      width="4"
                      height="4"
                      rx="1"
                      stroke={view === "grid" ? "#FB2E86" : "#101750"}
                    />
                  </svg>
                </div>
                <div
                  className={`view-option-list ${
                    view === "list" ? "active" : ""
                  }`}
                  onClick={() => handleViewChange("list")}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="12"
                      height="4"
                      rx="1"
                      stroke={view === "list" ? "#FB2E86" : "#101750"}
                    />
                    <rect
                      x="2"
                      y="10"
                      width="12"
                      height="4"
                      rx="1"
                      stroke={view === "list" ? "#FB2E86" : "#101750"}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="products-list-filters">
            {" "}
            <div className="products-filters-container">
              <Filters onFilterChange={handleFilterChange} />
            </div>
            <div className="products-list-container">
              {products.length === 0 || paginatedProducts.length === 0 ? (
                <p>No products found</p>
              ) : (
                <div
                  className={`product-cards ${
                    view === "list" ? "list-view" : "grid-view"
                  }`}
                >
                  {paginatedProducts.map((product) => (
                    <ProductsListCard
                      key={product.id}
                      {...product}
                      view={view}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="products-pagination">
            {[...Array(totalPages)].map((_, index) => (
              <div
                key={index + 1}
                className={`products-pagination-item ${
                  activePage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Products;
