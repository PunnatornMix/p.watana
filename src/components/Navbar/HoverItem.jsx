import React, { useState } from "react";
import { CirclePhone } from "../icons/icons";

function HoverItem({ content, children, hover, setHover }) {
  return (
    <div
      className=" cursor-pointer flex gap-2 items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}

      <div className={`${hover ? "text-red" : ""}`}>{content}</div>
    </div>
  );
}

export default HoverItem;
