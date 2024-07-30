import React, { Children, useState } from "react";
import {
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
  AboutIcon4,
  AboutIcon5,
  AboutIcon6,
} from "../icons/icons";

function MissionCard({ icon, title, content }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" mt-10 flex flex-col gap-3 items-center text-center hover:missionH"
    >
      {icon == 1 ? <AboutIcon1 isHover={isHover} /> : ""}
      {icon == 2 ? <AboutIcon2 isHover={isHover} /> : ""}
      {icon == 3 ? <AboutIcon3 isHover={isHover} /> : ""}
      {icon == 4 ? <AboutIcon4 isHover={isHover} /> : ""}
      {icon == 5 ? <AboutIcon5 isHover={isHover} /> : ""}
      {icon == 6 ? <AboutIcon6 isHover={isHover} /> : ""}

      <h3 className="text-blue ">{title}</h3>
      <p className="text-center ">{content}</p>
    </div>
  );
}

export default MissionCard;
