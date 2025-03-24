"use client";
import { FC, useState, useEffect } from "react";

interface FilterOption {
  id: string;
  label: string;
}


interface FiltersState {
  brands?: string[];
  discounts?: string[];
  categories?: string[];
  priceRange?: string;
  rating?: number | null;
}

const Filters: FC<{ onFilterChange: (filters: any) => void }> = ({
  onFilterChange,
}) => {
  const brands = ["Casio", "Apple", "Sony", "Nike", "Vke", "Glossiness"];
  const discounts = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
  const categories = [
    "Watches",
    "Headphones",
    "Laptop",
    "Game Console",
    "Clothe",
    "Jewellery",
    "Perfume",
  ];
  const prices = [
    "$0 - $150",
    "$150 - $350",
    "$350 - $500",
    "$550 - $800",
    "$800+",
  ];
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("");

  const [tempFilters, setTempFilters] = useState<FiltersState>({});

  useEffect(() => {
    onFilterChange(tempFilters);
  }, [tempFilters, onFilterChange]);



  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => {
      const updatedBrands = prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand];
      setTempFilters((prevFilters) => ({
        ...prevFilters,
        brands: updatedBrands,
      }));
      return updatedBrands;
    });
  };
  const handleDiscountChange = (discount: string) => {
    setSelectedDiscounts((prev) => {
      const updatedDiscounts = prev.includes(discount)
        ? prev.filter((item) => item !== discount)
        : [...prev, discount];
      setTempFilters((prevFilters) => ({
        ...prevFilters,
        discounts: updatedDiscounts,
      }));
      return updatedDiscounts;
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const updatedCategories = prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category];
      setTempFilters((prevFilters) => ({
        ...prevFilters,
        categories: updatedCategories,
      }));
      return updatedCategories;
    });
  };

  const handlePriceChange = (price: string) => {
    const newPriceRange = priceRange === price ? "" : price;
    setPriceRange(newPriceRange);
    setTempFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newPriceRange,
    }));
  };

  const handleRatingChange = (rating: number) => {
    const newRating = selectedRating === rating ? null : rating;
    setSelectedRating(newRating);
    setTempFilters((prevFilters) => ({
      ...prevFilters,
      rating: newRating,
    }));
  };

 

  return (
    <div className="filters">
      <div className="filter-section">
        <h3 className="heading heading-sub--2">Product Brand</h3>
        <hr />
        {brands.map((brand) => (
          <label className="filter-label filter-label-brand" key={brand}>
            <input
              className="checkbox checkbox-brand"
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <span className="checkmark checkmark-brand"></span>
            {brand}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3 className="heading heading-sub--2">Discount Offer</h3>
        <hr />
        {discounts.map((discount) => (
          <label className="filter-label filter-label-discount" key={discount}>
            <input
              className="checkbox checkbox-discount"
              type="checkbox"
              checked={selectedDiscounts.includes(discount)}
              onChange={() => {
                handleDiscountChange(discount);
              }}
            />
             <span className="checkmark checkmark-discount"></span>
            {discount}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3 className="heading heading-sub--2">Rating</h3>
        <hr />
        {[5, 4, 3, 2, 1].map((rating) => (
  <label className="filter-label filter-label-rating" key={rating}>
    <input
      className="checkbox checkbox-rating"
      type="checkbox"
      checked={selectedRating === rating}
      onChange={() => handleRatingChange(rating)}
    />
    <span className="checkmark checkmark-rating"></span>
    {[...Array(5)].map((_, index) => {
      const isFilled = index < rating;
      const starClass = isFilled ? 'star star-filled' : 'star star-empty';
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
  </label>
))}

      </div>

      <div className="filter-section">
        <h3 className="heading heading-sub--2">Categories</h3>
        <hr />
        {categories.map((category) => (
          <label className="filter-label filter-label-category" key={category}>
            <input
              className="checkbox checkbox-category"
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
             <span className="checkmark checkmark-category"></span>
            {category}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3 className="heading heading-sub--2">Price</h3>
        <hr />
        {prices.map((price) => (
          <label className="filter-label filter-label-price" key={price}>
            <input
              className="checkbox checkbox-price"
              type="checkbox"
              checked={priceRange === price}
              onChange={() => handlePriceChange(price)}
            />
             <span className="checkmark checkmark-price"></span>
            {price}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
