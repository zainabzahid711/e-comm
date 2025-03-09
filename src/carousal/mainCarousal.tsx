import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "/womenCollection.jpg",
    text: "Discover Elegance with Our Womens Collection",
  },
  {
    image: "/menCollection.jpg",
    text: "Elevate Your Style with Mens Collection",
  },
  {
    image: "/homeDecor.jpg",
    text: "Transform Your Space with Home Decor",
  },
  {
    images: ["/menStyle.jpg", "/menStyle2.jpg"],
    text: "Transform Your Style with Us",
  },
  {
    images: ["/womenStyle.jpg", "/womenStyle2.png"],
    text: "Transform Your Style with Us",
  },
];

const MainCarousal = () => {
  return (
    <Carousel
      // autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      className="w-full h-[700px]"
    >
      {slides.map((slide, index) => (
        <div className="bg-dark-gray-gradient opacity-80 p-0 w-full">
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full h-full"
          >
            {slide.images ? (
              <div className="flex w-full h-full">
                {slide.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={slide.text}
                    className="w-1/2 h-[700px] object-cover"
                  />
                ))}
              </div>
            ) : (
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-[700px] object-cover"
              />
            )}
            <p className="text-4xl font-bold p-6 text-center absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="hollow-text">{slide.text}</span>
              <span className="text-xl text-gray-300 font-light">
                | Filler Words
              </span>
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousal;
