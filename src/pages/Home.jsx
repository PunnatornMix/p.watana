import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import HeaderBanner from "../components/Banner/HeaderBanner";
import Footer from "../components/Footer/Footer";

// const qs = require("qs");

const Home = () => {
  const [lang, setLang] = useState();
  const { t, i18n } = useTranslation();
  // const { pages, loading, getPage } = useGetPage();
  // const { GetDatas, getStrAPI } = useStrAPI();

  // console.log("GetDatas", GetDatas);

  // ## SLIDE ##
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
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

        <MenuNavbar></MenuNavbar>
        {/* Product search  */}
        <HeaderBanner />
        <section className="container mx-auto py-16">
          <div className="flex flex-col gap-5 ">
            <h1 className="uppercase text-center text-red">Product search </h1>
            <h1 className="text-blue text-center">ค้าหาสินค้า</h1>
            <div className="flex justify-center">
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
              <div className=" border-t-2 border-red w-1 my-auto"></div>
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
              <div className=" border-t-2 border-red w-1 my-auto"></div>
              <div className="bg-red h-[9px] w-[9px] rounded-full"></div>
            </div>
          </div>
          <input type="text" className="w-10" />
        </section>

        <Footer></Footer>
      </Fragment>
    </div>
  );
};
export default Home;
