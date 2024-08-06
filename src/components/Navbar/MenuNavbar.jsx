import React, { useEffect, useState } from "react";
import {
  CirclePhone,
  LineIcon,
  Mail,
  ThailandIcon,
  ThreeDotIcon,
  UnitedStates,
} from "../icons/icons";
("use client");

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const targetPosition = 5; // ตำแหน่งที่คุณต้องการให้แสดง bg

  const contentElement = document.getElementById("content");

  if (scrollPosition >= targetPosition) {
    contentElement.classList.remove("hidden");
  } else {
    contentElement.classList.add("hidden");
  }
});

function MenuNavbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    setLang(newLang);
  };

  const handleClose = () => setIsOpen(false);
  // const lang = localStorage.getItem("i18nextLng");
  const lang = localStorage.getItem("i18nextLng");

  // const [active, setActive] = useState();
  console.log("pathname", window.location.pathname);
  const path = window.location.pathname;

  const about = path === "/about-us" ? true : false;
  const product = path === "/product-list" ? true : false;
  const news = path === "/news-activity" ? true : false;
  const contact = path === "/contact-us" ? true : false;

  function selectMenu(active) {
    let classes = "";
    if (active) {
      classes += "menuActive";
    }
    return classes;
  }

  return (
    <>
      <div className=" w-full text-blue h-32 bg-[white] fixed top-0 z-40">
        <div className="container mx-auto flex justify-between h-full items-center px-6">
          <a href="/">
            <img src="/images/Logo/watana.png" className={`w-[70px] `}></img>
          </a>
          <div className="xl:grid xl:grid-cols-4 hidden  items-center">
            <a href="/about-us" className={`menuHover ${selectMenu(about)}`}>
              {lang === "th" ? "เกี่ยวกับบริษัท" : "ABOUT US"}
            </a>
            <a
              href="/product-list"
              className={`menuHover ${selectMenu(product)}`}
            >
              {lang === "th" ? "รายการสินค้า" : "PRODUCT LIST"}
            </a>
            {lang === "th" ? "" : ""}
            <a
              href="/news-activity"
              className={`menuHover ${selectMenu(news)}`}
            >
              {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
            </a>
            <a
              href="/contact-us"
              className={`menuHover ${selectMenu(contact)}`}
            >
              {lang === "th" ? "ติดต่อบริษัท" : "CONTACT US"}
            </a>
          </div>
          <div className="xl:flex hidden items-center">
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
                <div className="form">{children}</div>
              </div>

              {/* <UnitedStates className="w-[35px]  border-[2.5px] border-[#100F9C] rounded-md p-1" /> */}
            </div>
          </div>
          <div
            className="flex items-center justify-center xl:hidden "
            onClick={() => setIsOpen(true)}
          >
            {/* <Button className="h-10">Show navigation</Button> */}
            <ThreeDotIcon />
          </div>
        </div>
        {/* <div className="bg-[url('/images/tri.png')]  h-[120px] w-full bannerImages  top-[115px] "></div> */}

        {/*----- triTop ------*/}
        <img
          id="content"
          src="/images/tri.png"
          className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  top-[115px] hidden"
        ></img>
      </div>

      {/********** Moblie SideBar ************/}

      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="duration-700 ease-in-out h-full"
      >
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example "
            className="[&>div]:bg-transparent [&>div]:p-0 z-50 "
          >
            <div className="h-[35px] flex justify-end rounded-md p-1 cursor-pointer">
              <div className="a  w-[80px] ml-auto ">{children}</div>
              <div className="mx-4 border-l-2"></div>
              <div onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#100F9C"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between py-2 mt-12">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <div className=" mx-auto flex flex-col text-blue gap-4 h-full items-center">
                      <a
                        href="/about-us"
                        className={`menuHover ${selectMenu(about)}`}
                      >
                        {lang === "th" ? "เกี่ยวกับบริษัท" : "ABOUT US"}
                      </a>
                      <a
                        href="/product-list"
                        className={`menuHover ${selectMenu(product)}`}
                      >
                        {lang === "th" ? "รายการสินค้า" : "PRODUCT LIST"}
                      </a>
                      {lang === "th" ? "" : ""}
                      <a
                        href="/news-activity"
                        className={`menuHover ${selectMenu(news)}`}
                      >
                        {lang === "th"
                          ? "ข่าวสารและกิจกรรม"
                          : "NEWS & ACTIVITIES"}
                      </a>
                      <a
                        href="/contact-us"
                        className={`menuHover ${selectMenu(contact)}`}
                      >
                        {lang === "th" ? "ติดต่อบริษัท" : "CONTACT US"}
                      </a>

                      <div className="w-full mt-6 mb-2 bluegra h-[2px] " />

                      <div className="md:flex  hidden items-center">
                        <div className="flex flex-col gap-3 items-center">
                          <div className="flex gap-2 items-center">
                            <CirclePhone className="fill-blue w-[35px] hover:fill-red cursor-pointer" />
                            <div>084 111 0053</div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Mail className="fill-blue w-[35px] border-[2.5px] border-blue hover:border-red hover:fill-red rounded-full p-1 cursor-pointer" />
                            <div>
                              <LineIcon
                                className={`w-[35px] border-[2.5px] border-blue hover:border-red rounded-full  p-1 cursor-pointer`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default MenuNavbar;
