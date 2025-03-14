import "../styles/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

import Carousel from "./components/Carousel";
import CarouselFourCards from "./components/CarouselFourCards";
import CategoryTabs from "./components/CategoryTabs";
import Unique from "./components/Unique";
import Trending from "./components/Trending";
import Discount from "./components/Discount"
import TopCategories from "./components/TopCategories";
import Newsletter from "./components/Newsletter";
import LatestBlog from "./components/LatestBlog";

export default function Home() {
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

  const itemsFeatured = [
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Headphones",
      image: "card-images-2.jpg",
      code: "Code - Y523201",
      price: "$90.00",
    },
    {
      title: "Laptop",
      image: "card-images-3.jpg",
      code: "Code - Y523201",
      price: "$400.00",
    },

    {
      title: "Black watches",
      image: "card4.jpg",
      code: "Code - Y523201",
      price: "$35.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Headphones",
      image: "card-images-2.jpg",
      code: "Code - Y523201",
      price: "$90.00",
    },
    {
      title: "Laptop",
      image: "card-images-3.jpg",
      code: "Code - Y523201",
      price: "$400.00",
    },

    {
      title: "Black watches",
      image: "card4.jpg",
      code: "Code - Y523201",
      price: "$35.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      title: "Watches",
      image: "card-images-1.jpg",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  const categoryContent = {
    new: [
      {
        id: 1,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 2,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 3,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
      {
        id: 4,
        image: "card-images-8.jpg",
        title: "Present box",
        price: "$12.00",
        sale: "$29.00",
      },
      {
        id: 5,
        image: "card-images-9.jpg",
        title: "Watches",
        price: "$67.00",
        sale: "$76.00",
      },
      {
        id: 6,
        image: "card-images-10.jpg",
        title: "Ring",
        price: "$56.00",
        sale: "$65.00",
      },
    ],
    best: [
      {
        id: 1,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 2,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 3,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
      {
        id: 4,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 5,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 6,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
    ],
    featured: [
      {
        id: 1,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 2,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
      {
        id: 3,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 4,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 5,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
      {
        id: 6,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
    ],
    special: [
      {
        id: 1,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 2,
        image: "card-images-5.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 3,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
      {
        id: 4,
        image: "card-images-6.jpg",
        title: "Shoes",
        price: "$57.00",
        sale: "$75.00",
      },
      {
        id: 5,
        image: "card-images-7.jpg",
        title: "Perfume",
        price: "$19.00",
        sale: "$29.00",
      },
      {
        id: 6,
        image: "card-images-5.jpg",
        title: "Game console",
        price: "$76.00",
        sale: "$89.00",
      },
    ],
  };

  const pageItems=[
    {
      id: 1,
      image: "card4.jpg",
      title: "Game console",
      price: "$76.00",
      sale: "$89.00",
    },
    {
      id: 2,
      image: "card-images-3.jpg",
      title: "Shoes",
      price: "$57.00",
      sale: "$75.00",
    },
    {
      id: 3,
      image: "card-images-2.jpg",
      title: "Game console",
      price: "$76.00",
      sale: "$89.00",
    },
    {
      id: 4,
      image: "card-images-1.jpg",
      title: "Shoes",
      price: "$57.00",
      sale: "$75.00",
    }
  ]

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
            items={itemsFeatured}
            numPages={Math.ceil(itemsFeatured.length / 4)}
          />
        </div>
        <div className="latest">
          <h2 className="heading heading--2 latest-title">Latest Products</h2>
          <CategoryTabs categoryContent={categoryContent} />;
        </div>
        <Unique/>
        <Trending pageItems={pageItems}/>
        <Discount items={itemsDiscount}/>
        <TopCategories categories={itemsFeatured} numPages={Math.ceil(itemsFeatured.length / 4)}/>
        <Newsletter/>
        <LatestBlog pageItems={pageItems}/>
      </main>
      <Footer/>
    </div>
  );
}
