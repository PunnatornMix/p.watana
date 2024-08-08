import React, { useState } from "react";
import { CirclePhone, LineIcon, Mail } from "../icons/icons";

function HoverItem({ content, children, icon }) {
  const [hover, setHover] = useState(false);
  function IconTheme(icon) {
    if (icon == "CirclePhone") {
      return (
        <CirclePhone
          className={`fill-blue  w-[35px] ${hover ? "fill-red" : ""} `}
        />
      );
    } else if (icon == "Mail") {
      return (
        <Mail
          className={`w-[35px]  ${
            hover ? "bg-red" : "bg-blue"
          }   p-[8px] rounded-full hover:bg-red`}
          fill={"#FFFFFF"}
        />
      );
    } else if (icon == "CircleMail") {
      return (
        <Mail
          className={`fill-blue border-[2.5px] border-blue ${
            hover ? "border-red" : "border-blue"
          }   rounded-full cursor-pointer w-[35px] p-1  `}
          fill={hover ? "#DC1E32" : "#100F9C"}
        />
      );
    } else if (icon == "Line") {
      return (
        <LineIcon
          className={`w-[35px]  ${
            hover ? "bg-red" : "bg-blue"
          }   p-[8px] rounded-full `}
          fill={"#FFFFFF"}
          filltext={`${hover ? "#DC1E32" : "#100F9C"}`}
        />
      );
    } else if (icon == "CircleLine") {
      return (
        <LineIcon
          className={`w-[35px] p-[4px] rounded-full border-[2.5px] ${
            hover ? "border-red" : "border-blue"
          } `}
          filltext={"#FFFFFF"}
          fill={`${hover ? "#DC1E32" : "#100F9C"}`}
        />
      );
    }
  }

  return (
    <div
      className={` cursor-pointer flex ${content ? "gap-2" : ""}  items-center`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {IconTheme(icon)}
      <div className={`${hover ? "text-red" : ""}`}>{content}</div>
    </div>
  );
}

export default HoverItem;
