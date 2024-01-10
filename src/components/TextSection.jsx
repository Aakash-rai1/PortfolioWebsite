"use client";
import React from "react";
import ReactFinalMarquee from "react-final-marquee";

const TextSection = () => {
  const marqueeStyle = {
    fontFamily: 'Anton, sans-serif', // Applying the Anton font
    color: '#b6b6b6',
  };

  return (
    <div className="h-40">
      <ReactFinalMarquee
        className="grid grid-col-12  text-8xl"
        speed={80}
        space="50px"
        position="center"
        style={marqueeStyle} // Apply style to the marquee
      >
        GRAPHIC DESIGNER . UI/UX DESIGNER . FRONTEND DEVELOPER
      </ReactFinalMarquee>
    </div>
  );
};

export default TextSection;
