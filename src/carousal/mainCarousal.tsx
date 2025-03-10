import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/womenCollection.jpg",
    text: "Discover Elegance with Our Women's Collection",
    subtext: "Shop the latest trends in women's fashion.",
  },
  {
    image: "/menCollection.jpg",
    text: "Elevate Your Style with Men's Collection",
    subtext: "Explore premium menswear for every occasion.",
  },
  {
    image: "/homeDecor.jpg",
    text: "Transform Your Space with Home Decor",
    subtext: "Find the perfect pieces to refresh your home.",
  },
  {
    images: ["/menStyle.jpg", "/menStyle2.jpg"],
    text: "Transform Your Style with Us",
    subtext: "Discover versatile styles for men.",
  },
  {
    images: ["/womenStyle.jpg", "/womenStyle2.png"],
    text: "Transform Your Style with Us",
    subtext: "Explore chic and modern women's fashion.",
  },
];

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      className="relative w-full h-[700px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on hover out
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
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
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              {/* Main text with outline and shadow */}
              <p className="text-2xl md:text-4xl font-bold p-6 text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%),_-1px_-1px_0_rgb(0_0_0_/_40%)]">
                {slide.text}
              </p>
              {/* Subtext with outline and shadow */}
              <p className="text-lg md:text-xl text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%),_-1px_-1px_0_rgb(0_0_0_/_40%)]">
                {slide.subtext}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default MainCarousel;
