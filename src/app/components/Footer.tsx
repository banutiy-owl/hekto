"use client";
import React, { useState } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-column-logo">
          <img src="/icons/logo.svg" alt="Logo" className="logo" />
          <div className="search-container">
            <input type="text" placeholder="Enter Email Address" />
            <button className="search-btn">Sign Up</button>
          </div>
          <div className="paragraph">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </div>
        </div>

        <div className="footer-top-column footer-top-column-categories">
          <h3 className="heading heading-sub--2">Catagories</h3>
          <p className="paragraph">Laptops & Computers</p>
          <p className="paragraph">Cameras & Photography</p>
          <p className="paragraph">Smart Phones & Tablets</p>
          <p className="paragraph">Video Games & Consoles</p>
          <p className="paragraph">Waterproof Headphones</p>
        </div>

        <div className="footer-top-column footer-top-column-customer">
          <h3 className="heading heading-sub--2">Customer Care</h3>
          <p className="paragraph">My Account</p>
          <p className="paragraph">Discount</p>
          <p className="paragraph">Returns</p>
          <p className="paragraph">Orders History</p>
          <p className="paragraph">Order Tracking</p>
        </div>

        <div className="footer-top-column footer-top-column-pages">
          <h3 className="heading heading-sub--2">Pages</h3>
          <p className="paragraph">Blog</p>
          <p className="paragraph">Browse the Shop</p>
          <p className="paragraph">Category</p>
          <p className="paragraph">Pre-Built Pages</p>
          <p className="paragraph">Visual Composer Elements</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="paragraph paragraph--small">
          ©Webecy - All Rights Reserved
        </p>
        <div className="footer-bottom-social-icons">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#101750" />
            <path
              d="M13.3333 13.1001H15.2381L16 10.1667H13.3333V8.70008C13.3333 7.94475 13.3333 7.23341 14.8571 7.23341H16V4.76941C15.7516 4.73788 14.8137 4.66675 13.8232 4.66675C11.7547 4.66675 10.2857 5.88188 10.2857 8.11341V10.1667H8V13.1001H10.2857V19.3334H13.3333V13.1001Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#101750" />
            <path
              d="M19.3337 7.42188C18.7835 7.66636 18.2014 7.82744 17.6057 7.9C18.2317 7.52512 18.7025 6.92956 18.9297 6.22501C18.3379 6.57894 17.6914 6.82728 17.0181 6.95938C16.7346 6.65548 16.3936 6.41372 16.0159 6.2488C15.6382 6.08388 15.2316 5.99923 14.8209 6.00001C13.158 6.00001 11.8124 7.35625 11.8124 9.02813C11.8112 9.26068 11.8373 9.49254 11.89 9.71876C10.6976 9.66159 9.53006 9.3505 8.46198 8.8054C7.3939 8.26029 6.44883 7.49318 5.68724 6.55313C5.42005 7.01379 5.27875 7.5394 5.2781 8.07501C5.2781 9.125 5.81374 10.0531 6.62255 10.5969C6.14335 10.5852 5.67398 10.4555 5.25427 10.2188V10.2563C5.25427 11.725 6.29316 12.9469 7.66816 13.225C7.40959 13.2955 7.14314 13.3312 6.87555 13.3313C6.68567 13.3316 6.49622 13.3128 6.30996 13.275C6.69221 14.4781 7.80474 15.3531 9.1226 15.3781C8.05174 16.2221 6.73701 16.6784 5.38505 16.675C5.14507 16.6747 4.90531 16.66 4.66699 16.6312C6.04235 17.5294 7.64109 18.0045 9.27293 18C14.8145 18 17.8419 13.3843 17.8419 9.38125C17.8419 9.25001 17.8385 9.11875 17.8324 8.99063C18.4201 8.56315 18.9284 8.03192 19.3337 7.42188Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#101750" />
            <path
              d="M15.0558 5.88886C15.8655 5.89128 16.6413 6.214 17.2138 6.78655C17.7864 7.3591 18.1092 8.13495 18.1116 8.94464V15.0556C18.1092 15.8653 17.7864 16.6411 17.2138 17.2137C16.6413 17.7862 15.8655 18.1089 15.0558 18.1113H8.94488C8.13519 18.1089 7.35934 17.7862 6.78679 17.2137C6.21425 16.6411 5.89153 15.8653 5.88911 15.0556V8.94464C5.89153 8.13495 6.21425 7.3591 6.78679 6.78655C7.35934 6.214 8.13519 5.89128 8.94488 5.88886H15.0558ZM15.0558 4.66675H8.94488C6.59199 4.66675 4.66699 6.59175 4.66699 8.94464V15.0556C4.66699 17.4084 6.59199 19.3334 8.94488 19.3334H15.0558C17.4087 19.3334 19.3337 17.4084 19.3337 15.0556V8.94464C19.3337 6.59175 17.4087 4.66675 15.0558 4.66675Z"
              fill="white"
            />
            <path
              d="M15.9721 8.94489C15.7908 8.94489 15.6136 8.89112 15.4628 8.7904C15.3122 8.68967 15.1947 8.54651 15.1253 8.37901C15.0559 8.21151 15.0377 8.0272 15.0731 7.84938C15.1085 7.67156 15.1958 7.50823 15.324 7.38003C15.4522 7.25184 15.6155 7.16453 15.7933 7.12916C15.9712 7.09379 16.1555 7.11194 16.3229 7.18133C16.4904 7.2507 16.6336 7.36819 16.7344 7.51894C16.8351 7.66968 16.8888 7.84691 16.8888 8.02822C16.8891 8.14866 16.8656 8.26798 16.8195 8.37931C16.7736 8.49064 16.7061 8.5918 16.6209 8.67697C16.5358 8.76214 16.4346 8.82966 16.3232 8.87563C16.2119 8.92161 16.0926 8.94514 15.9721 8.94489ZM12 9.55578C12.4835 9.55578 12.9562 9.69915 13.3582 9.96776C13.7601 10.2364 14.0735 10.6182 14.2585 11.0648C14.4436 11.5115 14.4919 12.0031 14.3976 12.4772C14.3033 12.9515 14.0705 13.387 13.7286 13.7289C13.3867 14.0708 12.9512 14.3036 12.4769 14.3979C12.0027 14.4923 11.5112 14.4438 11.0645 14.2589C10.6179 14.0738 10.2361 13.7605 9.96746 13.3585C9.69885 12.9564 9.55548 12.4838 9.55548 12.0003C9.55617 11.3522 9.81395 10.7308 10.2722 10.2725C10.7305 9.81424 11.3519 9.55647 12 9.55578ZM12 8.33366C11.2748 8.33366 10.5659 8.54871 9.96294 8.95161C9.35996 9.35451 8.89 9.92716 8.61247 10.5972C8.33495 11.2672 8.26234 12.0044 8.40382 12.7157C8.5453 13.427 8.89452 14.0803 9.40731 14.593C9.9201 15.1058 10.5734 15.4551 11.2847 15.5966C11.996 15.738 12.7332 15.6654 13.4032 15.3879C14.0732 15.1104 14.6459 14.6404 15.0488 14.0375C15.4517 13.4345 15.6667 12.7256 15.6667 12.0003C15.6667 11.0279 15.2804 10.0952 14.5928 9.4076C13.9051 8.71997 12.9725 8.33366 12 8.33366Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
