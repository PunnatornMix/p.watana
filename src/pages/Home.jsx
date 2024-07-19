import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import HeaderBanner from "../components/Banner/HeaderBanner";
import Footer from "../components/Footer/Footer";
import {
  ThailandIcon,
  TriangleIcon,
  UnitedStates,
} from "../components/icons/icons";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// const qs = require("qs");

const Home = () => {
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    // let changeText = attrLang === "th" ? "en" : "th";
    // localStorage.setItem("i18nextLng", changeText);
    // setLang(changeText);
    i18n.changeLanguage(e.target.value);
  };

  // const handleLang = (event, attrLang) => {
  //   let changeText = attrLang === "th" ? "en" : "th";
  //   localStorage.setItem("i18nextLng", changeText);
  //   setLang(localStorage.getItem("i18nextLng"));
  //   i18n.changeLanguage(lang);
  // };

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang) {
      setLang(storedLang);
      i18n.changeLanguage(storedLang);
    } else {
      setLang("th");
    }
  }, [lang]);
  console.log("lang", lang);

  // useEffect(() => {
  //   // console.log(localStorage.getItem("itemsHref"));
  //   if (localStorage.getItem("watana_lang")) {
  //     setLang(localStorage.getItem("watana_lang"));
  //     i18n.changeLanguage(lang);
  //   } else {
  //     setLang("th");
  //   }
  // }, []);

  return (
    <div id="home">
      <Fragment>
        <SEO
          title="Home"
          description="A description of the page"
          name="Company name"
          type="articlec"
          keywords="HTML, CSS, JavaScript"
        />

        <MenuNavbar>
          <Box>
            <FormControl fullWidth className="border-0px">
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={localStorage.getItem("i18nextLng")}
                // label="Age"
                className="border-0px"
                onChange={handleLanguageChange}
              >
                <MenuItem value={"th"} className="flex">
                  <ThailandIcon className="w-[25px]" />
                  <p>TH</p>
                </MenuItem>
                <MenuItem value={"en"}>
                  <UnitedStates className="w-[25px]  " />
                  <p>EN</p>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavbar>
        <HeaderBanner src="/images/Banner/HomeBanner.png" />
        {/* Product search  */}
        <section className="container mx-auto py-16 w-[60%]">
          <div className="flex flex-col gap-5 ">
            <h1 className="uppercase text-center text-red">Product search</h1>
            <h1 className="text-blue text-center">ค้าหาสินค้า</h1>
            <div className="flex justify-center">
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
              <div className=" border-t-2 border-red w-1 my-auto"></div>
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
              <div className=" border-t-2 border-red w-1 my-auto"></div>
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
            </div>
          </div>
          <div className="bg-[url('/images/home/Group2149.png')] b h-[358px] w-100 flex flex-col justify-end">
            <label className="input input-primary rounded-full flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder={lang === "th" ? `ค้นหาสินค้า` : `PRODUCT SEARCH`}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#100F9C"
                stroke="#100F9C"
                className="h-5 w-5 opacity-70 "
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <img
              src="/images/home/Component31– 2.png"
              className="h-[90px] mt-[50px] mb-[30px] px-[79px]"
            />
          </div>
        </section>
        {/* who we are */}
        <section className="flex h-[608px]">
          <div className="bg-[url('/images/home/Group2349.png')] w-full bannerImages"></div>
          <div className="bg-[url('/images/home/Path3647.png')] w-full bannerImages"></div>
        </section>

        <Footer></Footer>
      </Fragment>
    </div>
  );
};
export default Home;
