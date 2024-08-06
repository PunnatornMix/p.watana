import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import {
  CirclePhone,
  ThailandIcon,
  UnitedStates,
} from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";

const ContactUs = () => {
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
                {lang === "th" ? "ติดต่อเรา" : "contact us"}
              </h1>

              <ThreeDots />
            </div>
            <div className="flex gap-20 text-blue">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1330096947077!2d100.33539487514713!3d13.710392986677208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295ef8e6a287f%3A0x72b73ac00ddcfde!2z4Lib4Li04LmI4LiZ4Lin4Lix4LiS4LiZ4Liy4LiB4Liy4Lij4LiE4LmJ4Liy!5e0!3m2!1sth!2sth!4v1721890601350!5m2!1sth!2sth"
                className=" xl:w-[clamp(350px,35vw,679px)] lg:w-[300px] min-h-[240px] h-[400px] w-[100vw] mx-auto pt-6"
                height="full"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-col text-center gap-5">
                {lang === "th" ? "" : ""}
                <h3>
                  {lang === "th"
                    ? "บริษัท ปิ่นวัฒนาการค้า จำกัด"
                    : "P. WATANA TRADING CO., LTD."}
                </h3>
                <p>
                  {lang === "th" ? (
                    <>
                      154 ซอยเพชรเกษม 114 แขวงหนองค้างพลู <br /> เขตหนองแขม
                      กรุงเทพฯ 10160
                    </>
                  ) : (
                    <>
                      154 Soi Phetkasem 114, Nongkhangphlu, <br /> Nongkhaem,
                      Bangkok 10160 Thailand
                    </>
                  )}
                </p>
                <ThreeDots />
                <h3>{lang === "th" ? "สอบถามข้อมูลทั่วไป" : ""}</h3>
                <div className="flex gap-2 justify-center items-center">
                  <CirclePhone className="fill-blue w-[35px] hover:fill-red cursor-pointer" />
                  <p>084 111 0053</p>
                </div>
                <p>{lang === "th" ? "หรือ" : "or"}</p>
                <p>02 408 9393, 02 408 9394,</p>
                <p>02 408 9395, 02 408 9396,</p>
                <p>02 420 1044, 02 420 2306</p>
                <div className="flex items-center justify-center">
                  <h3>Fax :</h3>
                  <span>02 408 9397, 02 810 7563</span>
                </div>
                {lang === "th" ? "" : ""}
              </div>
            </div>
          </div>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};
export default ContactUs;
