import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import ProductNav from "../components/ProductNav/ProductNav";
import ReactSearchBox from "react-search-box";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const ProductList = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navigate = useNavigate();

  const dataList = [
    {
      key: "แบเรียมฟลูออไรด์",
      value: "แบเรียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงโซเดียมฟลูออไรด์",
      value: "ผงโซเดียมฟลูออไรด์",
      link: "/product-itemabout-us",
    },
    {
      key: "ผงแคลเซียมฟลูออไรด์",
      value: "ผงแคลเซียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงแมกนีเซียมฟลูออไรด์",
      value: "ผงแมกนีเซียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงอะลูมิเนียมไฮดรอกไซด์",
      value: "ผงอะลูมิเนียมไฮดรอกไซด์",
      link: "/product-item",
    },
    { key: "โพแทสเซียม", value: "โพแทสเซียม", link: "/product-item" },
    {
      key: "โพแทสเซียมอะลูมิเนียมฟลูออไรด์",
      value: "โพแทสเซียมอะลูมิเนียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "โพแทสเซียมฟลูออโรเรต",
      value: "โพแทสเซียมฟลูออโรเรต",
      link: "/product-item",
    },
    {
      key: "เม็ดสีเหล็กออกไซด์",
      value: "เม็ดสีเหล็กออกไซด์",
      link: "/product-item",
    },
    {
      key: "อลูมิเนียมฟลูออไรด์",
      value: "อลูมิเนียมฟลูออไรด์",
      link: "/product-item",
    },
  ];

  const handleSelect = (record) => {
    const selectedItem = dataList.find((item) => item.key == record.item.key);
    console.log("record", record);
    navigate(selectedItem.link); // นำทางไปยังลิงก์ที่เลือก
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

            {/* <div className=" bg-[url('/images/home/Group2149.png')]  backgroundImg  h-[358px] w-full flex flex-col justify-end"> */}
            <div className=" bg-[url('/images/home/Group2149.png')]  backgroundImg  h-[358px] w-full justify-end">
              <div className="  rounded-full ddd gap-2 pt-[100px] w-full">
                <div className="my-custom-search-box ">
                  <ReactSearchBox
                    placeholder="ค้นหาข้อความ..."
                    value=""
                    data={dataList}
                    onFocus={() => {
                      console.log("This function is called when is focussed");
                    }}
                    onSelect={handleSelect}
                  />
                </div>
                {/* <input
                  type="text"
                  className=" grow border-none"
                  placeholder={lang === "th" ? `ค้นหาสินค้า` : `PRODUCT SEARCH`}
                /> */}
                {/* <svg
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
                </svg> */}
              </div>
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

              <h1 className="text-blue  text-center">ค้นหาสินค้า</h1>
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

        <section className="container mx-auto text-center grid lg:grid-cols-3 grid-cols-2 py-20">
          {lang === "th" ? "" : ""}
          <ProductNav character={lang === "th" ? "ก" : "a"}></ProductNav>
          <ProductNav character={lang === "th" ? "ข" : "b"}></ProductNav>
          <ProductNav character={lang === "th" ? "ค" : "c"}></ProductNav>
          <ProductNav character={lang === "th" ? "ง" : "d"}></ProductNav>
          <ProductNav character={lang === "th" ? "จ" : "e"}></ProductNav>
          <ProductNav character={lang === "th" ? "ช" : "f"}></ProductNav>
          <ProductNav character={lang === "th" ? "ซ" : "g"}></ProductNav>
          <ProductNav character={lang === "th" ? "ด" : "h"}></ProductNav>
          <ProductNav character={lang === "th" ? "ต" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ท" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "น" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "บ" : "i"}>
            <p className="">- แบเรียมฟลูออไรด์ </p>
          </ProductNav>
          <ProductNav character={lang === "th" ? "ป" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ผ" : "i"}>
            <p className="">- ผงโซเดียมฟลูออไรด์ </p>
            <p className="">- ผงแคลเซียมฟลูออไรด์ </p>
            <p className="">- ผงแมกนีเซียมฟลูออไรด์ </p>
            <p className="">- ผงอะลูมิเนียมไฮดรอกไซด์ </p>
            <p className="">- ผงอลูมินา </p>
          </ProductNav>
          <ProductNav character={lang === "th" ? "ฝ" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "พ" : "i"}>
            <p className="">- โพแทสเซียม </p>
            <p className="">- โพแทสเซียมอะลูมิเนียมฟลูออไรด์ </p>
            <p className="">- โพแทสเซียมฟลูออโรเรต </p>
          </ProductNav>
          <ProductNav character={lang === "th" ? "ฟ" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ม" : "i"}>
            <p className="">- เม็ดสีเหล็กออกไซด์ </p>
          </ProductNav>
          <ProductNav character={lang === "th" ? "ย" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ร" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ล" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ส" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "ห" : "i"}></ProductNav>
          <ProductNav character={lang === "th" ? "อ" : "i"}>
            <p className="">- อลูมิเนียมฟลูออไรด์</p>
          </ProductNav>
          <ProductNav character={lang === "th" ? "ฮ" : "i"}></ProductNav>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};

export default ProductList;
