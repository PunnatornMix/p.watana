import React, { useEffect, useState } from "react";
import { CirclePhone, LineIcon, Mail } from "../icons/icons";

function MenuNavbar({ children }) {
  // const lang = localStorage.getItem("i18nextLng");
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className=" w-full text-blue h-32 bg-[white] fixed top-0 z-50">
      <div className="container mx-auto flex justify-between h-full items-center">
        <a href="/">
          <img src="/images/Logo/watana.png" className="w-[70px]"></img>
        </a>
        <div className="md:grid md:grid-cols-4 hidden  items-center">
          <a href="/aboutus" className="menuHover ">
            {lang === "th" ? "เกี่ยวกับบริษัท" : "ABOUT US"}
          </a>
          <a href="#" className="menuHover">
            {lang === "th" ? "รายการสินค้า" : "PRODUCT LIST"}
          </a>
          {lang === "th" ? "" : ""}
          <a href="#" className="menuHover">
            {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
          </a>
          <a href="#" className="menuHover">
            {lang === "th" ? "ติดต่อบริษัท" : "CONTACT US"}
          </a>
        </div>
        <div className="md:flex hidden items-center">
          <div className="flex gap-3 items-center">
            <CirclePhone className="fill-blue w-[35px] hover:fill-red cursor-pointer" />
            <div>084 111 0053</div>
            <Mail className="fill-blue w-[35px] border-[2.5px] border-blue hover:border-red hover:fill-red rounded-full p-1 cursor-pointer" />
            <div>
              <LineIcon
                className={`w-[35px] border-[2.5px] border-blue hover:border-red rounded-full  p-1 cursor-pointer`}
              />
            </div>
            <div className="border-[2.5px] h-[35px] flex border-blue  rounded-md p-1 cursor-pointer">
              {children}
            </div>

            {/* <UnitedStates className="w-[35px]  border-[2.5px] border-[#100F9C] rounded-md p-1" /> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-[url('/images/tri.png')]  h-[120px] w-full bannerImages  top-[115px] "></div> */}
      <img
        src="/images/tri.png"
        className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  top-[115px] "
      ></img>
    </div>
  );
}

export default MenuNavbar;
