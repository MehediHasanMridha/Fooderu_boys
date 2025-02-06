import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeImage from "./MarqueeImage";
const MarqueeSection = () => {
  return (
    <Marquee className="mt-[176px]">
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
      <MarqueeImage />
    </Marquee>
  );
};

export default MarqueeSection;
