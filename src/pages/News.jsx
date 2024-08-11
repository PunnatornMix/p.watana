import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import PaginatedItems from "../components/Pagination/PaginatedItems";

const News = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const lang = localStorage.getItem("i18nextLng");

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
            <FormControl fullWidth variant="standard">
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
        <section className="mt-20 pb-24">
          <img
            id="content"
            src="/images/tri.png"
            className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  mt-32 "
          ></img>
          <div className="container mx-auto">
            <div className="flex flex-col mx-auto gap-1 py-20" id="list">
              {lang === "th" ? "" : ""}
              <h1 className="uppercase text-center text-blue">
                {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
              </h1>

              <ThreeDots />
            </div>
            <PaginatedItems itemsPerPage={9} className={"tracking-widest"} />
            {/* <div className="grid grid-cols-3 ">
              {NewsList.map((news, index) => news)}
            </div> */}
            {/* {NewsList.reduce((acc, current, index) => {
              if (index % 3 === 0) acc.push([]);
              acc[acc.length - 1].push(current);
              return acc;
            }, []).map((group, idx) => (
              <div key={idx} className="flex justify-around">
                {group}
              </div>
            ))} */}
          </div>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};
export default News;
