import React from "react";

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <div className="product-details-tab-content">
      <div
        className={`product-details-tab-panel ${
          activeTab === "description" ? "active" : ""
        }`}
      >
        <div className="product-details-tab-block-1">
          <h3 className="heading heading-sub--2">Varius tempor.</h3>
          <p className="varius-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
            tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
            ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
            ultricies diam. Integer feugiat odio ut dictum viverra. Donec
            vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut
            sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas
            quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam
            in est purus
          </p>
        </div>

        <div className="product-details-tab-block-2">
          <h3 className="heading heading-sub--2">More details</h3>
          <div className="more-details">
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
              libero consectetur.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
              porttitor libero consectetur. Pellentesque diam dolor, tincidunt
              nec ante.{" "}
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
              facilisis tortor.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
              Phasellus quis sodales augue. Donec nec ultricies diam.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Phasellus quis sodales augue. Integer feugiat odio ut dictum
              viverra.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
              libero consectetur.
            </div>
          </div>
        </div>
      </div>

      <div
        className={`product-details-tab-panel ${
          activeTab === "additional-info" ? "active" : ""
        }`}
      >
        <div className="product-details-tab-block-1">
          <h3 className="heading heading-sub--2">Product Specifications</h3>
          <p className="varius-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
            malesuada lectus. Ut malesuada mauris nec turpis euismod, id dictum
            felis tristique. Nam posuere metus id risus tincidunt, eget
            condimentum mauris facilisis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam
            volutpat libero et mi feugiat, vel congue velit ultricies. Morbi
            euismod erat ut magna cursus, et pellentesque magna tincidunt.
            Curabitur malesuada tincidunt mauris, nec dapibus erat scelerisque
            ut. Phasellus efficitur urna in nunc tristique placerat. Etiam nec
            dui nec leo laoreet aliquet.
          </p>
        </div>

        <div className="product-details-tab-block-2">
          <h3 className="heading heading-sub--2">Key Features</h3>
          <div className="more-details">
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Nulla facilisi. Curabitur sollicitudin ligula vitae efficitur
              scelerisque.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Vivamus tempus tortor at neque malesuada, non gravida nisi
              ullamcorper.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cras sed orci sit amet leo interdum fermentum ut eget arcu.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Integer suscipit urna ac orci ultricies sollicitudin.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sed auctor leo at velit consequat, ac faucibus neque tempor.
            </div>
            <div className="more-detail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Aenean gravida metus eu eros suscipit, id euismod nisi porttitor.
            </div>
          </div>
        </div>
      </div>
      <div
        className={`product-details-tab-panel ${
          activeTab === "reviews" ? "active" : ""
        }`}
      >

<div className="product-details-tab-block-1">
        <h3 className="heading heading-sub--2">Customer Reviews</h3>
        <p className="varius-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          facilisis risus ac felis sollicitudin, et tincidunt sapien hendrerit.
          Suspendisse potenti. Praesent venenatis, lorem ac ullamcorper feugiat,
          orci neque sollicitudin elit, nec egestas libero ligula sit amet arcu.
          Aenean pharetra eros a enim vulputate, ac dapibus erat hendrerit. Ut
          porttitor volutpat turpis, eget interdum purus sollicitudin eget.
        </p>
        </div>

        <div className="product-details-tab-block-2">

        <h3 className="heading heading-sub--2">
          What Our Customers Are Saying
        </h3>
        <div className="more-details">
          <div className="more-detail">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5L5.5 12L14 3.5"
                stroke="#101750"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis sodales augue. Aliquam eget magna libero."
          </div>
          <div className="more-detail">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5L5.5 12L14 3.5"
                stroke="#101750"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nullam et lorem non eros vestibulum."
          </div>
          <div className="more-detail">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5L5.5 12L14 3.5"
                stroke="#101750"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            "Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
            Phasellus quis sodales augue."
          </div>
          <div className="more-detail">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5L5.5 12L14 3.5"
                stroke="#101750"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            "Sed auctor leo at velit consequat, ac faucibus neque tempor."
          </div>
        </div>
      </div>
      </div>

      <div
        className={`product-details-tab-panel ${
          activeTab === "video" ? "active" : ""
        }`}
      >
        <h3 className="heading heading-sub--2">Product Video</h3>
        <p className="varius-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          tristique ligula. Cras ac risus nec nunc euismod tempus. Aliquam erat
          volutpat. Donec ultricies, metus et tempor convallis, urna elit
          euismod nisl, vel feugiat orci ante sit amet felis. In vulputate purus
          at est vehicula, at pretium elit maximus. Fusce auctor tincidunt
          massa, nec aliquam leo tristique ut. Nam hendrerit, felis at tincidunt
          luctus, purus turpis malesuada ipsum, at condimentum nunc purus vel
          risus.
        </p>

        <h3 className="heading heading-sub--2">Watch the Video</h3>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
