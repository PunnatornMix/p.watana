import React, { useEffect, useState } from "react";
import { CirclePhone, LineIcon, Mail } from "../icons/icons";

function MenuNavbar({ children }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className=" w-full text-blue h-32 bg-[white] fixed top-0 z-50">
      <div className="container mx-auto flex justify-between h-full items-center">
        <img src="/images/Logo/Group7_0.png" className="w-[70px]"></img>
        <div className="md:flex hidden gap-16 items-center">
          <p>{lang === "th" ? "เกี่ยวกับบริษัท" : "ABOUT US"}</p>
          <p>{lang === "th" ? "รายการสินค้า" : "PRODUCT LIST"}</p>
          {lang === "th" ? "" : ""}
          <p>{lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}</p>
          <p>{lang === "th" ? "ติดต่อบริษัท" : "CONTACT US"}</p>
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
      <div className="bg-[url('/images/tri.png')]  h-[120px] w-full bannerImages  top-[115px] "></div>
    </div>
  );
}

export default MenuNavbar;
