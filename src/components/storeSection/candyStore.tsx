import React from "react";

// Define the props interface
interface CandyStoreProps {
  mainText: string;
  text: string;
  subtext: string;
}

const CandyStore: React.FC<CandyStoreProps> = ({ mainText, text, subtext }) => {
  return (
    <div
      className="mt-16 relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fashion.jpeg')" }}
    >
      {/* Overlay to darken the background image for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Centered text container */}
      <div className="p-36 flex flex-col justify-center items-start gap-3 absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        {/* Main text with outline and shadow */}
        <p className="text-2xl md:text-4xl font-bold text-white font-serif tracking-wide text-center mx-auto [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%),_-1px_-1px_0_rgb(0_0_0_/_40%)]">
          {mainText}
        </p>
        <p className="text-2xl md:text-4xl font-bold text-white text-center mx-auto [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%),_-1px_-1px_0_rgb(0_0_0_/_40%)]">
          {text}
        </p>
        {/* Subtext with outline and shadow */}
        <p className="text-lg md:text-xl font-serif tracking-wide text-white text-center mx-auto [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%),_-1px_-1px_0_rgb(0_0_0_/_40%)]">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default CandyStore;
