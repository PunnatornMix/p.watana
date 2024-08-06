import React, { Fragment, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";
import NewsCard from "../components/NewsCard/NewsCard";
import PaginatedItems from "../components/Pagination/PaginatedItems";

const News = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const lang = localStorage.getItem("i18nextLng");

  const NewsList = [
    <NewsCard
      src={"/images/newsList/Rectangle1297_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์"
          : "Sleeping on long-haul flights: Here are the top tips."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518
        เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่....
        การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก
        ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ
        ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด
        พร้อมทั้งบริการ ที่มีประสิทธิภาพ
        เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า
        ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง
        ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We are off….`
      }
    />,

    <NewsCard
      src={"/images/newsList/Group2868_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงาน"
          : "Sleeping on long-haul flights."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,

    // <NewsCard />,
  ];
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
            <div className="flex flex-col mx-auto gap-1 py-20">
              {lang === "th" ? "" : ""}
              <h1 className="uppercase text-center text-blue">
                {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
              </h1>

              <ThreeDots />
            </div>
            <PaginatedItems itemsPerPage={4} />
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
