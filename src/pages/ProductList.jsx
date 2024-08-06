import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import ProductNav from "../components/ProductNav/ProductNav";

const ProductList = () => {
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

        {/*------ Product List ------*/}
        {/*------ PC ------*/}
        <section
          className=" xl:block hidden bg-[url('/images/product/bgtriT.png')] bg-no-repeat bg-auto "
          style={{
            backgroundPosition: "right -70% bottom -65% ",
            backgroundSize: "59%",
          }}
        >
          <img
            id="content"
            src="/images/tri.png"
            className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  mt-32 "
          ></img>
          <div className="container mx-auto py-16 2xl:w-[53.5%] w-[70%] h-100 ">
            {/* <img
            src="/images/home/Group2133.png"
            className="absolute right-[-915px] top-[-30px] -z-10 "
          /> */}
            <div className="flex flex-col mx-auto gap-1 ">
              {lang === "th" ? "" : ""}
              <h1 className="uppercase text-center text-blue">
                {lang === "th" ? "รายการสินค้า" : "Product List"}
              </h1>

              <ThreeDots />
            </div>
            <div className=" bg-[url('/images/home/Group2149.png')]  backgroundImg  h-[358px] w-full flex flex-col justify-end">
              <label className="input input-primary rounded-full flex items-center gap-2 mx-[79px]">
                <input
                  type="text"
                  className="input grow border-none"
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
                className="h-[90px] mt-[50px] mb-[30px] px-[79px] "
              />
            </div>
          </div>
        </section>

        {/*------ Mobile ------*/}

        <section
          className="xl:hidden block "
          style={{
            backgroundPosition: "right -72% bottom 100% ",
            backgroundSize: "60%",
          }}
        >
          <img
            id="content"
            src="/images/tri.png"
            className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  mt-32 "
          ></img>
          <div className="container mx-auto py-16 2xl:w-[53.5%] w-[70%] h-100 flex flex-col gap-10">
            <div className="flex flex-col mx-auto gap-1 ">
              <h1 className="uppercase text-center text-red">Product search</h1>

              <h1 className="text-blue text-center">ค้นหาสินค้า</h1>
              <ThreeDots />
            </div>
            <label className="input input-primary rounded-full flex items-center gap-2">
              <input
                type="text"
                className="input grow border-none"
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
            <div className="bg-[url('/images/home/product/abcBg.png')] h-[clamp(174px,20vw,300px)] bg-no-repeat bg-center flex justify-center items-center">
              <img
                src="/images/home/product/abc.png"
                className="h-[clamp(90px,12vw,130px)] "
              />
            </div>
            <div className="bg-[url('/images/home/product/กขคBg.png')] h-[clamp(174px,20vw,300px)] bg-no-repeat bg-center flex justify-center items-center">
              <img
                src="/images/home/product/กขค.png"
                className="h-[clamp(90px,12vw,130px)] "
              />
            </div>
          </div>
        </section>

        {/*------- tribgGrey ------*/}
        <div className="relative">
          <img
            src="/images/home/tribgGrey.png"
            className="w-full absolute -top-[clamp(70px,5vw,85px)]"
          />
        </div>

        <section className="container mx-auto text-center grid lg:grid-cols-3 grid-cols-2 my-20">
          <ProductNav>
            <h3 className="text-red ">ก</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>
          <ProductNav>
            <h3 className="text-red">ข</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>
          <ProductNav>
            <h3 className="text-red">ค</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>

          <ProductNav>
            <h3 className="text-red">ง</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>

          <ProductNav>
            <h3 className="text-red">ด</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>
          <ProductNav>
            <h3 className="text-red">ต</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>

          <ProductNav>
            <h3 className="text-red">ท</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>

          <ProductNav>
            <h3 className="text-red">น</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>

          <ProductNav>
            <h3 className="text-red">บ</h3>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
            <p className="text-blue">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};
export default ProductList;
