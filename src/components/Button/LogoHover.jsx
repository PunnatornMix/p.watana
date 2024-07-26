import React, { useState } from "react";

function LogoHover({ src, hoverSrc }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <img
      src={isHover ? hoverSrc : src}
      className="w-[35px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default LogoHover;
