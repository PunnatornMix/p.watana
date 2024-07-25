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

const Home = () => {
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

        <div className="relative">
          <div className="bg-[url('/images/triBanner.png')] h-[120px] w-full bannerImages absolute top-[-25px] z-50 "></div>
          <HeaderBanner src="/images/Banner/HomeBanner.png" />
        </div>
        {/* Product search  */}
        <section
          className="bg-[url('/images/home/Group2133.png')] bg-no-repeat  bg-auto z-100"
          style={{
            backgroundPosition: "right -72% bottom 100% ",
            backgroundSize: "60%",
          }}
        >
          <div className="container mx-auto py-16 w-[53.5%] h-100 ">
            {/* <img
            src="/images/home/Group2133.png"
            className="absolute right-[-915px] top-[-30px] -z-10 "
          /> */}
            <div className="flex flex-col mx-auto gap-5 ">
              <h1 className="uppercase text-center text-red">Product search</h1>
              <h1 className="text-blue text-center">ค้นหาสินค้า</h1>
              <ThreeDots />
            </div>
            <div
              className="bg-[url('/images/home/Group2149.png')]  bg-no-repeat bg-center bg-auto  h-[358px] w-full flex flex-col justify-end"
              style={{ backgroundSize: "100%" }}
            >
              <label className="input input-primary rounded-full flex items-center gap-2 mx-[79px]">
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
          </div>
        </section>

        {/* who we are */}
        <section className="flex h-[608px]">
          <div className="bg-[url('/images/home/Group2349.png')] w-full bannerImages"></div>
          <div className="bg-[url('/images/home/Path3647.png')] w-full bannerImages flex flex-col gap-5 items-center justify-center text-center">
            <h1 className="text-white">WHO WE ARE </h1>
            <h1 className="text-white">เราคือใคร</h1>
            <ThreeDots />

            <p className="text-white w-[56%] font-light">
              {" "}
              {lang == "th" ? (
                <>
                  บริษัท ปิ่นวัฒนาการค้า จำกัด คือ ผู้นำเข้า-ส่งออก
                  และจัดจำหน่ายเคมีภัณฑ์อุตสาหกรรมจากทั่วโลก ตั้งแต่ปี พ.ศ. 2518
                  <br />
                  มีชื่อเสียงยาวนาน เคมีภัณฑ์คุณภาพ ราคายุติธรรม บริการประทับใจ
                </>
              ) : (
                <>
                  P. Watana Trading Co., Ltd. is an Importer, Exporter and
                  Distributor of industrial chemicals around the world since
                  1975.
                  <br />
                  Long Reputation, Quality Chemicals, Fair Price, Impressive
                  Service.
                </>
              )}
            </p>
            <ButtonGradient>อ่านต่อ</ButtonGradient>
          </div>
        </section>
        <img src="/images/home/bg-tri.png" className="bg-red" />
        {/* Application */}
        <section className="container mx-auto ">
          <div className="text-center flex flex-col gap-4 py-16">
            <h1 className="text-red">Application</h1>
            <h1 className="text-blue">การใช้งาน</h1>
            <ThreeDots />
          </div>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-2">
            <ApplicationLists
              src="/images/applications/Cleaning/Component36.png"
              hoverSrc="/images/applications/Cleaning/Hover/Component36hover.png"
            />
            <ApplicationLists
              src="/images/applications/Cosmetics/Component37.png"
              hoverSrc="/images/applications/Cosmetics/Hover/Component37hover.png"
            />
            <ApplicationLists
              src="/images/applications/Electronics/Component38.png"
              hoverSrc="/images/applications/Electronics/Hover/Component38hover.png"
            />
            <ApplicationLists
              src="/images/applications/Food/Component39.png"
              hoverSrc="/images/applications/Food/Hover/Component39hover.png"
            />
            <ApplicationLists
              src="/images/applications/Agriculture/Component40.png"
              hoverSrc="/images/applications/Agriculture/Hover/Component40hover.png"
            />
            <ApplicationLists
              src="/images/applications/Construction/Component41.png"
              hoverSrc="/images/applications/Construction/Hover/Component41hover.png"
            />
            <ApplicationLists
              src="/images/applications/Water/Component42.png"
              hoverSrc="/images/applications/Water/Hover/Component42hover.png"
            />
            <ApplicationLists
              src="/images/applications/Coating/Component43.png"
              hoverSrc="/images/applications/Coating/Hover/Component43Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Automobile/Component44.png"
              hoverSrc="/images/applications/Automobile/Hover/Component44Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Ceramic/Component45.png"
              hoverSrc="/images/applications/Ceramic/Hover/Component45Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Rubber/Component46.png"
              hoverSrc="/images/applications/Rubber/Hover/Component46Hover.png"
            />

            <ApplicationLists
              src="/images/applications/Textiles/Component47.png"
              hoverSrc="/images/applications/Textiles/Hover/Component47Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Printing/Component48.png"
              hoverSrc="/images/applications/Printing/Hover/Component48Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Steel/Component49.png"
              hoverSrc="/images/applications/Steel/Hover/Component49Hover.png"
            />
            <ApplicationLists
              src="/images/applications/Other/Component50.png"
              hoverSrc="/images/applications/Other/Hover/Component50Hover.png"
            />
          </div>
        </section>
        <img
          src="/images/home/bg-tri.png"
          className="bg-[url('images/color/lightBlue.png')] bg-white bg-top bg-no-repeat"
          // className="bg-[url('images/color/red.png')] bg-white bg-top bg-no-repeat"
          style={{
            backgroundSize: "100% 50%",
          }}
        />

        {/* NEWS & ACTIVITIES */}
        <section className=" bg-white pb-32">
          <div className="container mx-auto flex flex-col">
            <div className=" text-center  mx-auto flex flex-col gap-4 -translate-y-[60%] ">
              <h1 className="text-red">NEWS & ACTIVITIES</h1>
              <h1 className="text-blue">ข่าวสารและกิจกรรม</h1>
              <ThreeDots />
            </div>
            <NewsCarousel></NewsCarousel>
            <button className="btn bg-[red] text-white hover:tracking-widest hover:bg-[red] hover:drop-shadow-red border-none rounded-full w-48 my-20 self-center">
              ดูทั้งหมด
            </button>
          </div>
        </section>

        {/* Location */}
        <section className=" text-center mb-16">
          <div className="container mx-auto">
            <h1 className="text-red">Location</h1>
            <h1 className="text-blue">ที่ตั้งบริษัท</h1>
            <ThreeDots />
            <div className="flex justify-center pt-20">
              <div className="flex  gap-[45px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1330096947077!2d100.33539487514713!3d13.710392986677208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295ef8e6a287f%3A0x72b73ac00ddcfde!2z4Lib4Li04LmI4LiZ4Lin4Lix4LiS4LiZ4Liy4LiB4Liy4Lij4LiE4LmJ4Liy!5e0!3m2!1sth!2sth!4v1721890601350!5m2!1sth!2sth"
                  width="679"
                  height="491"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex flex-col items-center gap-4 self-center">
                  <h3 className="w-[322px] text-center">
                    บริษัท ปิ่นวัฒนาการค้า จำกัด <br /> ผู้นำเข้า-ส่งออก
                    ผู้จัดจำหน่ายเคมีภัณฑ์ ตั้งแต่ปี พ.ศ. 2518
                  </h3>
                  <div className="flex items-center gap-4">
                    <img src="/images/Logo/joinus.png" className="w-[40px]" />
                    <h3 className="font-bold">ร่วมงานกับเรา</h3>
                  </div>
                  <ButtonGradient>คลิกเลย</ButtonGradient>
                </div>
              </div>
              <img
                src="/images/home/Rectangle1302_0.png"
                className="w-[370px]"
              />
            </div>
          </div>
          <Footer></Footer>
        </section>
      </Fragment>
    </div>
  );
};
export default Home;
