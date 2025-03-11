import "../styles/css/style.css";
import Header from "./components/Header";

import Carousel from "./components/Carousel";

export default function Home() {
  const items = [
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

  return (
    <div>
      <Header />
      <main>
        <Carousel items={items} />
      </main>
    </div>
  );
}
