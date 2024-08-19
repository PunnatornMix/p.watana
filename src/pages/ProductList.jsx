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

  function scrollToElement(id) {
    let offset = 240; // ระยะ offset ที่ต้องการ
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - offset; // คำนวณระยะ offset ที่ต้องการเลื่อน
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // เลื่อนโดยการ animate ให้เรียบร้อย
    });
  }

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
          className=" lg:block hidden bg-[url('/images/product/bgtriT.png')] bg-no-repeat bg-auto "
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
            <div className=" bg-[url('/images/home/Group2149.png')] backgroundImg h-[358px] w-full justify-end">
              <div className="rounded-full ddd gap-2 pt-[100px] w-full">
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
              {/*--- Eng ---*/}
              <div className="grid grid-cols-2  text-blue font-[700] w-5/6 mx-auto gap-32 py-14">
                <div className="grid grid-cols-11 gap-2 navCharacter">
                  <p onClick={() => scrollToElement("A")}>A</p>
                  <p onClick={() => scrollToElement("B")}>B</p>
                  <p onClick={() => scrollToElement("C")}>C</p>
                  <p onClick={() => scrollToElement("D")}>D</p>
                  <p onClick={() => scrollToElement("E")}>E</p>
                  <p onClick={() => scrollToElement("F")}>F</p>
                  <p onClick={() => scrollToElement("G")}>G</p>
                  <p onClick={() => scrollToElement("H")}>H</p>
                  <p onClick={() => scrollToElement("I")}>I</p>
                  <p onClick={() => scrollToElement("J")}>J</p>
                  <p onClick={() => scrollToElement("K")}>K</p>
                  <p onClick={() => scrollToElement("L")}>L</p>
                  <p onClick={() => scrollToElement("M")}>M</p>
                  <p onClick={() => scrollToElement("N")}>N</p>
                  <p onClick={() => scrollToElement("O")}>O</p>
                  <p onClick={() => scrollToElement("P")}>P</p>
                  <p onClick={() => scrollToElement("Q")}>Q</p>
                  <p onClick={() => scrollToElement("R")}>R</p>
                  <p onClick={() => scrollToElement("S")}>S</p>
                  <p onClick={() => scrollToElement("T")}>T</p>
                  <p onClick={() => scrollToElement("U")}>U</p>
                  <p onClick={() => scrollToElement("V")}>V</p>
                  <p onClick={() => scrollToElement("W")}>W</p>
                  <p onClick={() => scrollToElement("X")}>X</p>
                  <p onClick={() => scrollToElement("Y")}>Y</p>
                  <p onClick={() => scrollToElement("Z")}>Z</p>
                </div>
                {/*--- TH ---*/}

                <div className="grid grid-cols-11 gap-2 navCharacter">
                  <p onClick={() => scrollToElement("ก")}>ก</p>
                  <p onClick={() => scrollToElement("ข")}>ข</p>
                  <p onClick={() => scrollToElement("ค")}>ค</p>
                  <p onClick={() => scrollToElement("ง")}>ง</p>
                  <p onClick={() => scrollToElement("จ")}>จ</p>
                  <p onClick={() => scrollToElement("ช")}>ช</p>
                  <p onClick={() => scrollToElement("ซ")}>ซ</p>
                  <p onClick={() => scrollToElement("ด")}>ด</p>
                  <p onClick={() => scrollToElement("ต")}>ต</p>
                  <p onClick={() => scrollToElement("ท")}>ท</p>
                  <p onClick={() => scrollToElement("น")}>น</p>
                  <p onClick={() => scrollToElement("บ")}>บ</p>
                  <p onClick={() => scrollToElement("ป")}>ป</p>
                  <p onClick={() => scrollToElement("ผ")}>ผ</p>
                  <p onClick={() => scrollToElement("ฝ")}>ฝ</p>
                  <p onClick={() => scrollToElement("พ")}>พ</p>
                  <p onClick={() => scrollToElement("ฟ")}>ฟ</p>
                  <p onClick={() => scrollToElement("ม")}>ม</p>
                  <p onClick={() => scrollToElement("ย")}>ย</p>
                  <p onClick={() => scrollToElement("ร")}>ร</p>
                  <p onClick={() => scrollToElement("ล")}>ล</p>
                  <p onClick={() => scrollToElement("ว")}>ว</p>
                  <p onClick={() => scrollToElement("ส")}>ส</p>
                  <p onClick={() => scrollToElement("ห")}>ห</p>
                  <p onClick={() => scrollToElement("อ")}>อ</p>
                  <p onClick={() => scrollToElement("ฮ")}>ฮ</p>
                </div>
              </div>

              {/* 
              <img
                src="/images/home/Component31– 2.png"
                className="h-[90px] mt-[50px] mb-[30px] px-[79px] "
              /> */}
            </div>
          </div>
        </section>

        {/*------ Mobile ------*/}

        <section
          className="lg:hidden block "
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
              <div className="grid grid-cols-11 gap-2 navCharacter w-[80vw]">
                <p onClick={() => scrollToElement("A")}>A</p>
                <p onClick={() => scrollToElement("B")}>B</p>
                <p onClick={() => scrollToElement("C")}>C</p>
                <p onClick={() => scrollToElement("D")}>D</p>
                <p onClick={() => scrollToElement("E")}>E</p>
                <p onClick={() => scrollToElement("F")}>F</p>
                <p onClick={() => scrollToElement("G")}>G</p>
                <p onClick={() => scrollToElement("H")}>H</p>
                <p onClick={() => scrollToElement("I")}>I</p>
                <p onClick={() => scrollToElement("J")}>J</p>
                <p onClick={() => scrollToElement("K")}>K</p>
                <p onClick={() => scrollToElement("L")}>L</p>
                <p onClick={() => scrollToElement("M")}>M</p>
                <p onClick={() => scrollToElement("N")}>N</p>
                <p onClick={() => scrollToElement("O")}>O</p>
                <p onClick={() => scrollToElement("P")}>P</p>
                <p onClick={() => scrollToElement("Q")}>Q</p>
                <p onClick={() => scrollToElement("R")}>R</p>
                <p onClick={() => scrollToElement("S")}>S</p>
                <p onClick={() => scrollToElement("T")}>T</p>
                <p onClick={() => scrollToElement("U")}>U</p>
                <p onClick={() => scrollToElement("V")}>V</p>
                <p onClick={() => scrollToElement("W")}>W</p>
                <p onClick={() => scrollToElement("X")}>X</p>
                <p onClick={() => scrollToElement("Y")}>Y</p>
                <p onClick={() => scrollToElement("Z")}>Z</p>
              </div>
              {/* <img
                src="/images/home/product/abc.png"
                className="h-[clamp(90px,12vw,130px)] "
              /> */}
            </div>
            <div className="bg-[url('/images/home/product/กขคBg.png')] h-[clamp(174px,20vw,300px)] bg-no-repeat bg-center flex justify-center items-center">
              {/*--- TH ---*/}

              <div className="grid grid-cols-11 gap-2 navCharacter w-[80vw]">
                <p onClick={() => scrollToElement("ก")}>ก</p>
                <p onClick={() => scrollToElement("ข")}>ข</p>
                <p onClick={() => scrollToElement("ค")}>ค</p>
                <p onClick={() => scrollToElement("ง")}>ง</p>
                <p onClick={() => scrollToElement("จ")}>จ</p>
                <p onClick={() => scrollToElement("ช")}>ช</p>
                <p onClick={() => scrollToElement("ซ")}>ซ</p>
                <p onClick={() => scrollToElement("ด")}>ด</p>
                <p onClick={() => scrollToElement("ต")}>ต</p>
                <p onClick={() => scrollToElement("ท")}>ท</p>
                <p onClick={() => scrollToElement("น")}>น</p>
                <p onClick={() => scrollToElement("บ")}>บ</p>
                <p onClick={() => scrollToElement("ป")}>ป</p>
                <p onClick={() => scrollToElement("ผ")}>ผ</p>
                <p onClick={() => scrollToElement("ฝ")}>ฝ</p>
                <p onClick={() => scrollToElement("พ")}>พ</p>
                <p onClick={() => scrollToElement("ฟ")}>ฟ</p>
                <p onClick={() => scrollToElement("ม")}>ม</p>
                <p onClick={() => scrollToElement("ย")}>ย</p>
                <p onClick={() => scrollToElement("ร")}>ร</p>
                <p onClick={() => scrollToElement("ล")}>ล</p>
                <p onClick={() => scrollToElement("ว")}>ว</p>
                <p onClick={() => scrollToElement("ส")}>ส</p>
                <p onClick={() => scrollToElement("ห")}>ห</p>
                <p onClick={() => scrollToElement("อ")}>อ</p>
                <p onClick={() => scrollToElement("ฮ")}>ฮ</p>
              </div>
              {/* <img
                src="/images/home/product/กขค.png"
                className="h-[clamp(90px,12vw,130px)] "
              /> */}
            </div>
          </div>
        </section>

        {/*------- tribgGrey ------*/}
        <div className="relative">
          <img
            src="/images/home/tribgGrey.png"
            className="w-full absolute lg:pt-2 pt-11 -top-[clamp(70px,5vw,85px)]"
          />
        </div>
        <div className="bg-white">
          <section className="md:container   mx-auto text-center grid lg:grid-cols-3 grid-cols-2 py-20">
            {lang === "th" ? "" : ""}
            <ProductNav
              id={lang === "th" ? "ก" : "A"}
              character={lang === "th" ? "ก" : "A"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ข" : "B"}
              character={lang === "th" ? "ข" : "B"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ค" : "C"}
              character={lang === "th" ? "ค" : "C"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ง" : "D"}
              character={lang === "th" ? "ง" : "D"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "จ" : "E"}
              character={lang === "th" ? "จ" : "E"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ช" : "F"}
              character={lang === "th" ? "ช" : "F"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ซ" : "G"}
              character={lang === "th" ? "ซ" : "G"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ด" : "H"}
              character={lang === "th" ? "ด" : "H"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ต" : "I"}
              character={lang === "th" ? "ต" : "I"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ท" : "J"}
              character={lang === "th" ? "ท" : "J"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "น" : "K"}
              character={lang === "th" ? "น" : "K"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "บ" : "L"}
              character={lang === "th" ? "บ" : "L"}
            >
              <p className="">- แบเรียมฟลูออไรด์ </p>
            </ProductNav>
            <ProductNav
              id={lang === "th" ? "ป" : "M"}
              character={lang === "th" ? "ป" : "M"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ผ" : "N"}
              character={lang === "th" ? "ผ" : "N"}
            >
              <p className="">- ผงโซเดียมฟลูออไรด์ </p>
              <p className="">- ผงแคลเซียมฟลูออไรด์ </p>
              <p className="">- ผงแมกนีเซียมฟลูออไรด์ </p>
              <p className="">- ผงอะลูมิเนียมไฮดรอกไซด์ </p>
              <p className="">- ผงอลูมินา </p>
            </ProductNav>
            <ProductNav
              id={lang === "th" ? "ฝ" : "O"}
              character={lang === "th" ? "ฝ" : "O"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "พ" : "P"}
              character={lang === "th" ? "พ" : "P"}
            >
              <p className="">- โพแทสเซียม </p>
              <p className="">- โพแทสเซียมอะลูมิเนียมฟลูออไรด์ </p>
              <p className="">- โพแทสเซียมฟลูออโรเรต </p>
            </ProductNav>
            <ProductNav
              id={lang === "th" ? "ฟ" : "Q"}
              character={lang === "th" ? "ฟ" : "Q"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ม" : "R"}
              character={lang === "th" ? "ม" : "R"}
            >
              <p className="">- เม็ดสีเหล็กออกไซด์ </p>
            </ProductNav>
            <ProductNav
              id={lang === "th" ? "ย" : "S"}
              character={lang === "th" ? "ย" : "S"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ร" : "T"}
              character={lang === "th" ? "ร" : "T"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ล" : "U"}
              character={lang === "th" ? "ล" : "U"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ว" : "V"}
              character={lang === "th" ? "ว" : "V"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ส" : "W"}
              character={lang === "th" ? "ส" : "W"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "ห" : "X"}
              character={lang === "th" ? "ห" : "X"}
            ></ProductNav>
            <ProductNav
              id={lang === "th" ? "อ" : "Y"}
              character={lang === "th" ? "อ" : "Y"}
            >
              <p className="">- อลูมิเนียมฟลูออไรด์</p>
            </ProductNav>
            <ProductNav
              id={lang === "th" ? "ฮ" : "Z"}
              character={lang === "th" ? "ฮ" : "Z"}
            ></ProductNav>
          </section>
        </div>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};

export default ProductList;
