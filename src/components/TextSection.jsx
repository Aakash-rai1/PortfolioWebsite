"use client";
import { useState } from "react";
import React from "react";
import ReactFinalMarquee from "react-final-marquee";

const TextSection = ({hover}) => {

  const [isHovered, startRewind] = useState(hover);
  const marqueeStyle = {
    fontFamily: 'Anton, sans-serif', // Applying the Anton font
    color: '#b6b6b6',
  };

  return (
    <div className="h-40">
      <ReactFinalMarquee
        className="text-8xl"
        speed={80}
        space="50px"
        position="center"
        style={marqueeStyle} // Apply style to the marquee
        direction="leftToRight"
      >
        GRAPHIC DESIGNER . UI/UX DESIGNER . FRONTEND DEVELOPER
      </ReactFinalMarquee>
    </div>
  );
};

export default TextSection;
