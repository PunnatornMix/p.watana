// import React, { useState } from "react";

// function ApplicationLists({ src, hoverSrc }) {
//   const [isHover, setIsHover] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHover(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHover(false);
//   };

//   return (
//     <img
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`cursor-pointer h-[345px] transitionImg ${
//         isHover ? "hovered" : ""
//       }`}
//       src={isHover ? hoverSrc : src}
//     />
//   );
// }

// export default ApplicationLists;
import React, { useState } from "react";

function ApplicationLists({ src, hoverSrc }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="relative h-[345px] w-[315px] cursor-pointer  mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
          isHover ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        alt="Normal"
      />
      <img
        className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
        src={hoverSrc}
        alt="Hover"
      />
    </div>
  );
}

export default ApplicationLists;
