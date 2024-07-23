import React, { useState } from "react";

function ApplicationLists({ src, hoverSrc }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const HoverApplication = (src, hoverSrc, isHover = false) => {
    let a = src;
    if (isHover === true) {
      a = hoverSrc;
    }
    // isHover ? (a = hoverSrc) : (a = src);
    return a;
  };

  return (
    <img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
      src={HoverApplication(src, hoverSrc, isHover)}
    />
  );
}

export default ApplicationLists;
