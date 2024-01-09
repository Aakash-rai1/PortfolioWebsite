"use client";
import React from "react";
import ReactFinalMarquee from "react-final-marquee";

const TextSection = () => {
//   const marqueeStyle = {
//     fontFamily: "'Dela Gothic One', sans-serif", // Applying the imported font
//   };

  return (
    <div className="h-40">
      {/* <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
        </style>
      </head> */}
      <ReactFinalMarquee className="grid grid-col-12 text-white text-8xl">
        Aakash Chamling Rai - Graphic Designer . UI/UX Designer . Frontend Developer
      </ReactFinalMarquee>
    </div>
  );
};

export default TextSection;
