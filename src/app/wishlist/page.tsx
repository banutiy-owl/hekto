"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromWishlist } from "../features/wishlistSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

const WishlistPage = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      <Header />
      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <img
              src="cart-empty.png"
              alt="Empty Wishlist"
              className="wishlist-empty-image"
            />
            <h3 className="heading heading--3">Your wishlist is empty</h3>
            <Link href={`/products`}>
              <button className="wishlist-empty-button">Start Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="wishlist-content">
            <div className="wishlist-items">
              {wishlistItems.map((item: Product) => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <div className="wishlist-item">
                    <div className="wishlist-item-image">
                      <img src={`/${item.img}`} alt={item.name} />
                    </div>

                    <div className="wishlist-item-info">
                      <h2 className="heading heading-sub--3">{item.name}</h2>
                      <p className="wishlist-item-rating">
                        {[...Array(5)].map((_, index) => {
                          const isFilled = index < item.rating;
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
                      <div className="wishlist-prices">
                        <p className="label wishlist-item-price wishlist-prices-new">
                          ${item.price}
                        </p>
                        {item.oldPrice && (
                          <p className="label wishlist-item-old-price wishlist-prices-old">
                            ${item.oldPrice}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="paragraph wishlist-item-description">
                      {item.description}
                    </p>

                    <div className="wishlist-item-actions">
                      <button
                        className="wishlist-item-remove"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFromWishlist(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
