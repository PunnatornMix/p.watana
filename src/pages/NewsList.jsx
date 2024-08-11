import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import {
  FaceBookIcon,
  ThailandIcon,
  UnitedStates,
} from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";

const NewsList = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const lang = localStorage.getItem("i18nextLng");

  function scrollToElement(id) {
    let offset = 150; // ระยะ offset ที่ต้องการ
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - offset; // คำนวณระยะ offset ที่ต้องการเลื่อน
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // เลื่อนโดยการ animate ให้เรียบร้อย
    });
  }

  const newsItems = [
    {
      date: "11 สิงหาคม 2567",
      title:
        lang === "th" ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์" : "",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      src: "/images/news/NewsItem01.png",
    },
    {
      date: "12 สิงหาคม 2567",
      title:
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์2"
          : "",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      src: "/images/newsList/A0103586_0.png",
    },
    {
      date: "13 สิงหาคม 2567",
      title:
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์3"
          : "",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      src: "/images/newsList/Group2404_0.png",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    scrollToElement("list");
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length
    );
    scrollToElement("list");
  };

  const currentNewsItem = newsItems[currentIndex];

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
                className="border-0px"
                onChange={handleLanguageChange}
              >
                <MenuItem value={"th"} className="flex">
                  <ThailandIcon className="w-[25px]" />
                  <p>TH</p>
                </MenuItem>
                <MenuItem value={"en"}>
                  <UnitedStates className="w-[25px]" />
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
            className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages mt-32"
          />

          <div className="container mx-auto ">
            <div className="flex flex-col mx-auto gap-1 py-20" id="list">
              <h1 className="uppercase text-center text-blue">
                {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
              </h1>
              <ThreeDots />
            </div>

            <h5 className="text-gray-500 font-light ">
              {currentNewsItem.date}
            </h5>

            {/*----- ปุ่มแชร์ -----*/}
            <div
              className="fb-share-button"
              data-href="http://localhost:5173/news-item"
              data-layout=""
              data-size=""
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A5173%2Fnews-item&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <FaceBookIcon className="ml-auto cursor-pointer" />
              </a>
            </div>
            {/*----- ปุ่มแชร์ -----*/}

            <img
              src={currentNewsItem.src}
              className="mx-auto mb-14 min-h-[500px]"
            />

            <div>
              <h3 className="text-center font-semibold mb-6">
                {currentNewsItem.title}
              </h3>
              <p>{currentNewsItem.content}</p>
            </div>

            <div className="flex w-full justify-between mt-10">
              <button
                className="btn btn-outline border-blue text-blue hover:text-white hover:tracking-widest hover:bg-blue rounded-full w-[150px]"
                onClick={handlePrevious}
              >
                &#60;&#60; ก่อนหน้า
              </button>
              <button
                className="btn bg-blue text-white hover:tracking-widest hover:bg-blue rounded-full w-[150px]"
                onClick={handleNext}
              >
                หน้าถัดไป &gt; &gt;
              </button>
            </div>
          </div>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};

export default NewsList;
