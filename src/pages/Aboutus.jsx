import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import HeaderBanner from "../components/Banner/HeaderBanner";
import Footer from "../components/Footer/Footer";
import {
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
  AboutIcon4,
  AboutIcon5,
  AboutIcon6,
  ThailandIcon,
  UnitedStates,
} from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import ApplicationLists from "../components/ApplicationLists/ApplicationLists";
import NewsCard from "../components/NewsCard/NewsCard";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import ButtonGradient from "../components/Button/ButtonGradient";
import MissionCard from "../components/MissionCard/MissionCard";
import { Carousel } from "flowbite-react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalBanner from "../components/ModalBanner/ModalBanner";

const settings = {
  // dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  speed: 3000,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  pauseOnHover: false,

  // arrows: true, // เปิดปุ่ม prev/next
};
const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const lang = localStorage.getItem("i18nextLng");

  return (
    <div id="home">
      <Fragment>
        <SEO
          title="About-us"
          description="A description of the page"
          name="Watana"
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

        {/* <div className=" pt-32">
          <img src="/images/Banner/aboutus/MaskGroup.png" alt="Image 1" />
        </div> */}

        <div className=" pt-32">
          <div className="relative h-[clamp(400px,40vw,750px)]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/Banner/bgBanner1.png')]   bg-cover bg-center z-20"></div>

            {/* Slider Component */}
            <div className="relative z-10 h-[clamp(400px,40vw,750px)]">
              <div className="relative w-full h-full">
                <div
                  // src="/images/aboutus/Banner_about_1.jpg"
                  className=" w-full sm:bg-[url('/images/aboutus/Banner_about_1.jpg')] bg-[url('/images/Banner/aboutus/Banner_about_1Mb.jpg')] sm:bg-cover bg-100%   h-[clamp(400px,40vw,750px)] object-cover Banner"
                >
                  <ModalBanner>
                    นำเข้า-ส่งออก และจัดจำหน่าย <br />{" "}
                    เคมีภัณฑ์อุตสาหกรรมจากทั่วโลก <br />
                    ตั้งแต่ปี พ.ศ. 2518
                  </ModalBanner>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* เกี่ยวกับบริษัท */}
        <section className="container mx-auto grid lg:grid-cols-2 grid-cols-1   mt-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 items-end">
              <img
                src="/images/aboutus/about01.png"
                className="aboutUsImg mt-12"
              />
              <img src="/images/aboutus/about03.png" className="aboutUsImg" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/aboutus/about02.png" className="aboutUsImg" />
              <img src="/images/aboutus/about04.png" className="aboutUsImg" />
            </div>
          </div>
          <div className=" w-[80%] mx-auto flex flex-col gap-16 items-center   pl-0 lg:mt-0 mt-16 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-blue">
                {lang === "th" ? "เกี่ยวกับบริษัท" : "OUR HISTORY"}
              </h1>
              <ThreeDots />
            </div>
            <p className="text-blue">
              {lang === "th"
                ? ` บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2518
              โดยคุณสุรมิตร สัฒฐิติวัฒนกูล
              ซึ่งมองเห็นการเติบโตทางเศรษฐกิจและการพัฒนาอุตสาหกรรมภายในประเทศไทยอย่างต่อเนื่อง
              จึงเริ่มต้นธุรกิจด้วยการจัดจำหน่าย สารส้ม น้ำกรดต่างๆ
              และเคมีภัณฑ์พื้นฐานเพื่อป้อนเข้าสู่ภาคอุตสาหกรรมต่างๆ
              และได้เริ่มนำเข้า-ส่งออก
              รวมทั้งเป็นตัวแทนจัดจำหน่ายเคมีภัณฑ์จากผู้ผลิตชั้นนำจากทั่วโลก
              เช่น Akzo Nobel (Nouryon), PQ Corporation, Roquette, Solvay, Dead
              Sea Works, Nippon Soda, Onoda, Shimonoseki Mitsui, Stella, Unids,
              Fujian Tianfu, Shandong Longgang Silicon Technology, Shandong
              Fuyang Bio-Tech, Sichuan Youren, Techcera and etc.`
                : `P. Watana Trading Co., Ltd. was founded in 1975 by Mr.Suramitr Santhitiwatanakul who envisioned continuous economic growth and industrial development in Thailand by starting the business with distributing alum, various acid and basic chemicals. We started importing and exporting chemicals from leading manufacturers around the world such as Akzo Nobel (Nouryon), PQ Corporation, Roquette, Solvay, Dead Sea Works, Nippon Soda, Onoda, Shimonoseki Mitsui, Stella, Unids, Fujian Tianfu, Shandong Longgang Silicon Technology, Shandong Fuyang Bio-Tech, Sichuan Yaouren, Techcera and etc.`}
            </p>
            <p className="text-blue">
              {lang === "th"
                ? ` บริษัทฯ ได้พัฒนาคุณภาพการบริหารและจัดการด้วยระบบมาตรฐานสากล ISO
              9001:2015 รับรองโดย SGS พร้อมทั้งนำเสนอเคมีภัณฑ์ที่มีคุณภาพ
              จากแหล่งผลิตที่น่าเชื่อถือ ในราคาสมเหตุสมผล
              รวมทั้งการบริการที่เอาใส่ใจจากทีมงานที่มีความรู้และประสบการณ์
              เพื่อสร้างความพึงพอใจสูงสุดให้กับลูกค้า คู่ค้า และสังคม `
                : `P. Watana Trading Co., Ltd. was founded in 1975 by Mr.Suramitr Santhitiwatanakul who envisioned continuous economic growth and industrial development in Thailand by starting the business with distributing alum, various acid and basic chemicals. We started importing and exporting chemicals from leading manufacturers around the world such as Akzo Nobel (Nouryon), PQ Corporation, Roquette, Solvay, Dead Sea Works, Nippon Soda, Onoda, Shimonoseki Mitsui, Stella, Unids, Fujian Tianfu, Shandong Longgang Silicon Technology, Shandong Fuyang Bio-Tech, Sichuan Yaouren, Techcera and etc.`}
            </p>
          </div>
        </section>

        {/* รู้จักปิ่นวัฒนา */}
        <section className="container mx-auto flex flex-col items-center gap-6 mt-16">
          <h1 className="text-blue">
            {lang === "th" ? "รู้จักปิ่นวัฒนา" : "MORE ABOUT PINWATANA"}
          </h1>
          <ThreeDots />
          <video
            className="h-[536px] w-[953px] my-16"
            src="/images/LANY.mp4"
            loop
            autoPlay
            muted
          />
        </section>
        <div className="relative">
          <img
            src="/images/home/tribgGrey.png"
            className="w-full absolute -top-[clamp(70px,5vw,85px)]"
          />
        </div>

        {/* พันธกิจ */}
        <section className="bg-white">
          <div className="container mx-auto">
            <div className="w-[83%] mx-auto flex flex-col items-center gap-2 bg-white text-black lg:py-20 py-0 pt-6">
              <h1 className="text-blue">
                {lang === "th" ? "พันธกิจ" : "MISSION"}
              </h1>
              <ThreeDots />
              <div className="lg:grid 2xl:grid-cols-3 lg:grid-cols-2 gap-[110px] mt-10 hidden">
                <MissionCard
                  title={lang === "th" ? "ดำเนินธุรกิจ" : "Operating Business"}
                  content={
                    lang === "th" ? (
                      <>
                        {" "}
                        ด้วยความซื่อสัตย์ มีจริยธรรม <br /> ใส่ใจสังคม
                        และสิ่งแวดล้อม
                      </>
                    ) : (
                      <>
                        With honesty and ethics <br /> Care of society and
                        environment{" "}
                      </>
                    )
                  }
                  icon="1"
                ></MissionCard>
                <MissionCard
                  icon="2"
                  title={
                    lang === "th"
                      ? "จัดหาสินค้าชนิดใหม่"
                      : "Sourcing new products"
                  }
                  content={
                    lang === "th" ? (
                      <>
                        เพื่อครอบคลุมความต้องการ <br /> ที่หลากหลาย
                      </>
                    ) : (
                      <>
                        to cover and serve <br /> various inquiries
                      </>
                    )
                  }
                >
                  <AboutIcon2 />
                </MissionCard>
                <MissionCard
                  icon="3"
                  title={
                    lang === "th"
                      ? "จำหน่ายสินค้าคุณภาพ"
                      : "Providing quality product"
                  }
                  content={
                    lang === "th" ? (
                      <>ได้มาตรฐาน จากผู้ผลิตที่ดีระดับโลก ในราคาที่เหมาะสม</>
                    ) : (
                      <>
                        Meet standard, Reliable World Manufacturer at reasonable
                        price
                      </>
                    )
                  }
                ></MissionCard>
                <MissionCard
                  icon="4"
                  title={
                    lang === "th" ? (
                      "พัฒนาองค์กร/บุคลากร"
                    ) : (
                      <>
                        Developing <br /> Organization/Human
                      </>
                    )
                  }
                  content={
                    lang === "th" ? (
                      <>
                        มีคุณภาพ มีคุณธรรม <br /> ปรับปรุงอย่างต่อเนื่อง
                      </>
                    ) : (
                      <>
                        High quality, High morality <br /> Improve Continuously
                      </>
                    )
                  }
                ></MissionCard>
                <MissionCard
                  icon="5"
                  title={
                    lang === "th" ? (
                      "การสร้างความพึงพอใจ"
                    ) : (
                      <>
                        Creating Customer <br /> Satisfaction
                      </>
                    )
                  }
                  content={
                    lang === "th" ? (
                      <>ส่งสินค้าถูกต้อง ครบถ้วน ตรงเวลาด้วยทีมงานมืออาชีพ</>
                    ) : (
                      <>
                        Correct & Complete Product <br /> Delivery on time by
                        professional team
                      </>
                    )
                  }
                ></MissionCard>
                <MissionCard
                  icon="6"
                  title={
                    lang === "th" ? (
                      "ส่งเสริมสังคม และสิ่งแวดล้อม"
                    ) : (
                      <>
                        Promoting society <br /> and environment
                      </>
                    )
                  }
                  content={
                    lang === "th" ? (
                      <>ช่วยเหลือชุมชน/สังคม เป็นมิตรกับสิ่งแวดล้อม</>
                    ) : (
                      <>
                        Support the community/society <br /> And Eco-friendly
                      </>
                    )
                  }
                ></MissionCard>
              </div>
              <div className="grid grid-cols-2 lg:hidden mt-16 justify-center w-fit mx-auto ">
                <img
                  src="/images/aboutus/Icon/Group3334.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,250px)]  object-contain appBorder "
                />
                <img
                  src="/images/aboutus/Icon/Group3335.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,250px)]  object-contain appBorder"
                />
                <img
                  src="/images/aboutus/Icon/Group3336.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,250px)]  object-contain appBorder"
                />
                <img
                  src="/images/aboutus/Icon/Group3337.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,250px)]  object-contain appBorder"
                />
                <img
                  src="/images/aboutus/Icon/Group3338.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,250px)]    border-r border-blue"
                />
                <img
                  src="/images/aboutus/Icon/Group3339.png"
                  className="mx-auto p-4 w-[clamp(200px,35vw,220px)]  object-contain appBorder"
                />
              </div>
            </div>
          </div>
        </section>

        {/* วิสัยทัศน์ */}

        <section className="container mx-auto items-center text-blue gap-12 py-12">
          <div className="text-center w-[83%] flex flex-col gap-1 mx-auto ">
            <h1>{lang === "th" ? "วิสัยทัศน์" : "VISION"}</h1>
            <ThreeDots />
          </div>

          <p className="text-blue text-center w-[83%] mx-auto mt-12 font-light">
            {lang === "th"
              ? `ด้วยประสบการณ์ในการดำเนินธุรกิจมากว่า 50 ปี บริษัทฯ
              ได้เล็งเห็นความสำคัญในการพัฒนารูปแบบของธุรกิจ
              ให้สอดคล้องกับแนวโน้มสภาพความต้องการของตลาด
              โดยมุ่งเน้นสินค้าที่มีคุณภาพ, บริการที่มีประสิทธิภาพ,
              การพัฒนาบุคลากร และระบบการจัดการที่มีมาตรฐาน`
              : `With the experience more than 50 years of operating the business, P. Watana Trading Co., Ltd. aims to develop the business pattern and the market needs’ trend in the same direction by emphasizing on providing the superior product, serving the professional service, developing the organization and executing a standardized management.`}
          </p>
        </section>

        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel loop={true}>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="/images/aboutus/about01.png" />
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="/images/aboutus/about02.png" />
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="/images/aboutus/about03.png" />
            </div>
          </Carousel>
        </div> */}
        <div className="h-96">
          <Slider {...settings}>
            <img
              src="/images/aboutus/about06.png"
              className="h-80"
              alt="Image 6"
            />
            <img
              src="/images/aboutus/about07.png"
              className="h-80"
              alt="Image 7"
            />
            <img
              src="/images/aboutus/about08.png"
              className="h-80"
              alt="Image 8"
            />
            <img
              src="/images/aboutus/about09.png"
              className="h-80"
              alt="Image 9"
            />
            <img
              src="/images/aboutus/about10.png"
              className="h-80"
              alt="Image 10"
            />
            <img
              src="/images/aboutus/about11.png"
              className="h-80"
              alt="Image 11"
            />
            <img
              src="/images/aboutus/about12.png"
              className="h-80"
              alt="Image 12"
            />
            <img
              src="/images/aboutus/about05.png"
              className="h-80"
              alt="Image 5"
            />
          </Slider>
        </div>

        <section className="container w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 pb-8 text-blue">
          <div>
            <h3>
              {lang === "th" ? "สินค้าที่มีคุณภาพ" : "The Superior Product"}
            </h3>

            <p className="text-height font-light pt-3">
              {lang === "th"
                ? "บริษัทฯ จำหน่ายสินค้าที่หลากหลาย โดยคัดสรรแต่สินค้าที่มีคุณภาพที่ดีที่สุดเพื่อตอบสนองความต้องการ และให้เกิดประโยชน์สูงสุดให้แก่ลูกค้า โดยคำนึงถึงการจัดเก็บสินค้าอย่างถูกวิธี และเลือกใช้เครื่องมืออุปกรณ์ที่มีประสิทธิภาพ พร้อมระบบการบำรุงรักษาที่ได้มาตรฐาน"
                : "P.Watana Trading Co., Ltd. procures the variety of innovative products with the best quality for serving the consumer’s expectation. With a well-managed inventory of product utilization by using the most efficient instruments in company with standard maintenance, quality of products are at its finest."}
            </p>
          </div>
          <div>
            <h3>
              {lang === "th"
                ? "ระบบการจัดการที่มาตรฐาน"
                : "Standardized Management"}
            </h3>

            <p className=" font-light pt-3">
              {lang === "th"
                ? "บริษัทฯ มีความมุ่งมั่นในการบริหารและพัฒนาคุณภาพทั่วทั้งองค์กร เพื่อเพิ่มประสิทธิภาพ และประสิทธิผลตามมาตรฐาน ทั้งนี้เพื่อเป็นการสร้างความมั่นใจในคุณภาพและการบริหารงาน พร้อมทั้งเป็นการตอบสนองความต้องการให้แก่ลูกค้า"
                : "Engrossing to be in an operation and developing as a whole is to be effective and efficient. To guarantee with confidence, PWT is committed to quality management with consumers’ expectations."}
            </p>
          </div>
          <div>
            <h3>
              {lang === "th"
                ? "การพัฒนาบุคลากร"
                : "Human Resource and Organization Management"}
            </h3>

            <p className=" font-light pt-3">
              {lang === "th"
                ? "บริษัทฯ คัดสรรบุคลากรที่มีคุณภาพ โดยมีการฝึกอบรม และให้ความรู้แก่พนักงานในองค์กร อย่างต่อเนื่อง พร้อมที่จะนำไปพัฒนาการทำงานได้อย่างมีระบบ และสามารถเข้าใจรูปแบบในการบริหารงาน เพื่อเข้าถึงความต้องการของตลาดได้อย่างแท้จริง ซึ่งสามารถทำให้บริษัทฯ ประสบความสำเร็จ"
                : "Emphasis on developing a continuous human resource, training and acknowledge a systematic management, standardization, and understanding the entire process in order to serve our consumers’ expectations. That is the mission to be in the successful business."}
            </p>
          </div>
          <div>
            <h3>
              {lang === "th"
                ? "บริการที่มีประสิทธิภาพ"
                : "Our Professional Service"}
            </h3>

            <p className=" font-light pt-3">
              {lang === "th"
                ? "บริษัทฯ มุ่งเน้นถึงการให้บริการที่มีประสิทธิภาพ เป็นสิ่งที่สำคัญในการดำเนินธุรกิจ ทั้งในด้านบริการจัดส่งสินค้า บริการหลังการขาย บริการการให้ข้อมูล และคำแนะนำเกี่ยวกับสินค้า"
                : "The most important thing for doing business is to provide the professional service with on-time delivery, after sale service, and inquiry service. We strive to build long-lasting relationships with each and every one of our consumers."}
            </p>
          </div>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};
export default AboutUs;
