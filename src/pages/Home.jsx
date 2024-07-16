import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";

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
  // ## SLIDE ##

  // Set default when reload page.
  // useEffect(() => {
  //   if (localStorage.getItem("watana_lang")) {
  //     setLang(localStorage.getItem("watana_lang"));
  //     i18n.changeLanguage(lang);
  //   } else {
  //     setLang("th");
  //   }

  //   if (lang !== undefined) {
  //     getPage("home", lang);
  //     // getStrAPI(
  //     //   "interviews",
  //     //   lang,
  //     //   "&populate=*&sort[0]=id:desc&pagination[pageSize]=4"
  //     // );
  //   }
  // }, [lang]);

  // const handleLang = (event, attrLang) => {
  //   let changeText = attrLang === "th" ? "en" : "th";
  //   localStorage.setItem("watana_lang", changeText);
  //   setLang(localStorage.getItem("watana_lang"));
  //   i18n.changeLanguage(lang);
  // };

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
        {/* <MenuNavbar>
            <div className="align-items-center icon-nav-custom">
              <img
                src="images/icon/icon-12.png"
                alt={"NCL Language " + lang}
                // height="30"
                className="narbar_link img-icon-nav"
                data-lang={lang}
                onClick={(event) =>
                  handleLang(
                    event.target,
                    event.target.attributes.getNamedItem("data-lang").value
                  )
                }
              />
              <span
                style={{ textTransform: "uppercase" }}
                className="pt-1 narbar_font"
                data-lang={lang}
                onClick={(event) =>
                  handleLang(
                    event.target,
                    event.target.attributes.getNamedItem("data-lang").value
                  )
                }
              >
                {lang}
              </span>
            </div>
          </MenuNavbar> */}
      </Fragment>
    </div>
  );
};
export default Home;
