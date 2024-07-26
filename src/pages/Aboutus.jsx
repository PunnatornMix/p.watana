import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import HeaderBanner from "../components/Banner/HeaderBanner";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import ApplicationLists from "../components/ApplicationLists/ApplicationLists";
import NewsCard from "../components/NewsCard/NewsCard";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import ButtonGradient from "../components/Button/ButtonGradient";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

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

        <div className=" pt-32">
          <HeaderBanner src="/images/Banner/HomeBanner.png" />
        </div>
        <Footer />
      </Fragment>
    </div>
  );
};
export default AboutUs;
