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
import ModalBanner from "../components/ModalBanner/ModalBanner";
import useWindowSize from "../useWindowSize/useWindowSize";

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  const { width } = useWindowSize();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    console.log("storedLang", storedLang);
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    setLang(newLang);
  };

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
                className="border-0px "
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
          <HeaderBanner>
            <div className="relative w-full h-full">
              <div
                className=" sm:bg-[url('/images/Banner/home/Banner1.png')] sm:bg-cover bg-100%   bg-[url('/images/Banner/home/Banner1mb.png')]  Banner "
                // style={{ backgroundSize: "50%" }}

                // style={{ backgroundSize: "110%" }}
              >
                <ModalBanner>
                  Quality Chemical <br /> For Better Life <br /> (คัดสรรสิ่งดีๆ
                  เพื่อคุณ)
                </ModalBanner>
              </div>

              {/* <div className="bg-[url('/images/Banner/home/Banner1.png')] Banner">
                <div className="w-[650px]  bg-white opacity-50">
                  <h1 className="text-blue text-center py-10 ">
                    Quality Chemical <br /> For Better Life <br />{" "}
                    (คัดสรรสิ่งดีๆ เพื่อคุณ)
                  </h1>
                </div>
              </div> */}
            </div>
            <div className="relative w-full h-full">
              <div className="sm:bg-[url('/images/Banner/home/Banner002.png')] sm:bg-cover bg-100%   bg-[url('/images/Banner/home/Banner2Mb.png')] Banner">
                <ModalBanner>
                  {width <= 640 ? (
                    <>
                      Transforming Chemical, <br /> Enriching lives <br />{" "}
                      (การเปลี่ยนแปลง <br /> เพื่อคุณภาพชีวิตที่ดีขึ้น)
                    </>
                  ) : (
                    <>
                      Transforming Chemical, <br /> Enriching lives <br />{" "}
                      (การเปลี่ยนแปลงเพื่อคุณภาพชีวิตที่ดีขึ้น)
                    </>
                  )}
                </ModalBanner>
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className="sm:bg-[url('/images/Banner/home/Banner3.png')] sm:bg-cover bg-100%  bg-[url('/images/Banner/home/Banner3Mb.png')] Banner ">
                <ModalBanner>
                  {width <= 640 ? (
                    <>
                      {" "}
                      Elevate with Chemical <br /> (ยกระดับเคมีให้มี <br />{" "}
                      คุณภาพที่ดีกับทุกคน)
                    </>
                  ) : (
                    <>
                      {" "}
                      Elevate with Chemical <br />{" "}
                      (ยกระดับเคมีให้มีคุณภาพที่ดีกับทุกคน)
                    </>
                  )}
                </ModalBanner>
              </div>
            </div>
          </HeaderBanner>
        </div>

        {/* Product search  */}

        {/*------ PC ------*/}
        <section
          className="xl:block hidden bg-[url('/images/home/bg-01.png')] bg-no-repeat bg-auto z-10"
          style={{
            backgroundPosition: "right -72% bottom 100% ",
            backgroundSize: "60%",
          }}
        >
          <div className="container mx-auto py-16 2xl:w-[53.5%] w-[70%] h-100 ">
            {/* <img
            src="/images/home/Group2133.png"
            className="absolute right-[-915px] top-[-30px] -z-10 "
          /> */}
            <div className="flex flex-col mx-auto gap-1 ">
              <h1 className="uppercase text-center text-red">Product search</h1>

              <h1 className="text-blue text-center">ค้นหาสินค้า</h1>
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

        {/* who we are */}
        <section className=" lg-col flex min-h-[608px]">
          <div
            className="relative w-full "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/images/home/mobile/who1.png"
              className="h-full w-full lg:hidden "
            />

            <div
              className={`absolute lg:block hidden top-0 left-0 w-full h-full transition-opacity bannerImages duration-2000 ease-in-out bg-[url('/images/home/lWWA.png')] ${
                isHover ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute lg:block hidden top-0 left-0 w-full h-full transition-opacity bannerImages duration-2000 ease-in-out bg-[url('/images/home/lWWAH.png')] 
             ${isHover ? "opacity-100" : "opacity-0"}`}
            ></div>
          </div>

          <div className="bg-[url('/images/home/Path3647.png')] w-full bannerImages hidden lg:flex lg:flex-col gap-5 items-center justify-center text-center ">
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
            <ButtonGradient>
              {lang === "th" ? "อ่านต่อ" : "SEE MORE"}
            </ButtonGradient>
          </div>

          <div className="lg:hidden bg-[url('/images/home/Path3647.png')] w-[100vw] min-h-[508px] bg-no-repeat bg-top   flex flex-col items-center justify-center text-center -translate-y-[17%]">
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
            <ButtonGradient>
              {lang === "th" ? "อ่านต่อ" : "SEE MORE"}
            </ButtonGradient>
          </div>
        </section>
        <div className="relative">
          <img
            src="/images/home/tribgGrey.png"
            // className="w-full absolute -top-[85px]"
            className="w-full absolute -top-[clamp(70px,6vw,85px)]  bg-center hidden lg:block"
          />
          <img
            src="/images/home/tribgGrey.png"
            // className="w-full absolute -top-[85px]"
            className="w-full absolute -top-[clamp(105px,11vw,120px)] lg:hidden bg-center"
          />
        </div>
        {/* Application */}
        <section
          // className="container mx-auto "
          className="bg-[url('/images/home/bgright1.png'),url('/images/home/bgleft1.png')] bg-no-repeat bg-auto "
          style={{
            backgroundPosition: "right -35% bottom 100% , left -40% bottom 0% ",
            backgroundSize: "40% ,50%",
          }}
        >
          <div className="container mx-auto ">
            <div className="text-center flex flex-col gap-1 pt-20">
              <h1 className="text-red">APPLICATION</h1>
              <h1 className="text-blue">การใช้งาน</h1>
              <ThreeDots />
            </div>

            <div className="lg:grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 hidden ">
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

            <div className="grid grid-cols-2 lg:hidden mt-16 justify-center w-fit mx-auto ">
              <img
                src="/images/home/mobile/cleaning.png"
                className="mx-auto  appBorder "
              />
              <img
                src="/images/home/mobile/cosmetics.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/eletronics.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/food.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/agiculture.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/construction.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/automobile.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/ceramic.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/rubber.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/textiles.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/printing.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/steel.png"
                className="mx-auto  appBorder"
              />
              <img
                src="/images/home/mobile/other.png"
                className="mx-auto  appBorder"
              />
            </div>
          </div>
        </section>
        <img
          src="/images/home/bg-tri.png"
          className="bg-[url('images/color/lightBlue.png')] bg-white bg-top bg-no-repeat "
          style={{
            backgroundSize: "100% 50%",
          }}
        />

        {/* NEWS & ACTIVITIES */}
        <section className=" bg-white pb-12">
          <div
            className="bg-[url('/images/home/bgleft1.png')] bg-no-repeat bg-auto "
            style={{
              backgroundPosition: "left -30% bottom 0% ",
              backgroundSize: "40%",
            }}
          >
            <div className=" sm:container w-full mx-auto flex flex-col ">
              <div className=" text-center  mx-auto flex flex-col gap-1 -translate-y-[60%] md:mt-0 mt-10">
                <h1 className="text-red">NEWS & ACTIVITIES</h1>
                <h1 className="text-blue">ข่าวสารและกิจกรรม</h1>
                <ThreeDots />
              </div>
              <NewsCarousel></NewsCarousel>
              <button className="btn bg-[red] text-white hover:tracking-widest hover:bg-[red] hover:drop-shadow-red border-none rounded-full w-48 my-12 self-center">
                {lang === "th" ? "ดูทั้งหมด" : "SEE ALL"}
              </button>
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

        {/* Location */}
        <section>
          <div className="container mx-auto text-center pt-20 ">
            <div className="flex flex-col gap-1 ">
              <h1 className="text-red">LOCATION</h1>
              <h1 className="text-blue">ที่ตั้งบริษัท</h1>
              <ThreeDots />
            </div>
            <div className="flex justify-center lg:pt-20 2xl:pb-0 md:py-10 p-0 xl:gap-0 gap-12 ">
              <div className=" xl-col  flex gap-[45px] lg:gap-[25px] lg:h-[491px] min-h-[491px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1330096947077!2d100.33539487514713!3d13.710392986677208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295ef8e6a287f%3A0x72b73ac00ddcfde!2z4Lib4Li04LmI4LiZ4Lin4Lix4LiS4LiZ4Liy4LiB4Liy4Lij4LiE4LmJ4Liy!5e0!3m2!1sth!2sth!4v1721890601350!5m2!1sth!2sth"
                  className=" xl:w-[clamp(350px,35vw,679px)] lg:w-[300px] min-h-[240px] h-[400px] w-[100vw] mx-auto pt-6"
                  height="full"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex justify-center lg:gap-12 gap-0">
                  <div className="flex flex-col items-center gap-4 md:self-center ml-12">
                    {lang === "th" ? (
                      <>
                        <h3 className="md:w-[322px] w-[210px] text-center mt-4 md:mt-0 text-blue">
                          บริษัท ปิ่นวัฒนาการค้า จำกัด <br /> ผู้นำเข้า-ส่งออก
                          ผู้จัดจำหน่ายเคมีภัณฑ์ ตั้งแต่ปี พ.ศ. 2518
                        </h3>
                      </>
                    ) : (
                      <>
                        <h3 className="w-[322px] text-center text-blue ">
                          P. Watana Trading Co., Ltd.
                          <br />
                          Chemical Importer, Exporter and Distributor since 1975
                        </h3>
                      </>
                    )}

                    <div className="flex items-center gap-4">
                      <img src="/images/Logo/joinus.png" className="w-[40px]" />
                      <h3 className="font-bold text-blue">
                        {lang === "th" ? "ร่วมงานกับเรา" : "JOIN WITH US"}
                      </h3>
                    </div>
                    <ButtonGradient>
                      {lang === "th" ? "คลิกเลย" : "CLICK NOW"}
                    </ButtonGradient>
                  </div>
                  <img
                    src="/images/home/Rectangle1302_0.png"
                    className="w-[clamp(188px,30vw,300px)] lg:hidden block"
                  />
                </div>
              </div>
              <img
                src="/images/home/Rectangle1302_0.png"
                className="w-[clamp(300px,20vw,370px)] lg:block hidden"
              />
            </div>
          </div>
        </section>
        <Footer className="-translate-y-[clamp(0%,14vw,25%)] " />
        {/* <Footer className=" xl:-translate-y-[0%]  2xl:-translate-y-[33%] " /> */}
      </Fragment>
    </div>
  );
};
export default Home;
