import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo/Seo";
import MenuNavbar from "../components/Navbar/MenuNavbar";
import Footer from "../components/Footer/Footer";
import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ThreeDots from "../components/ThreeDots/ThreeDots";

const ProductItem = () => {
  const { t, i18n } = useTranslation();
  // const [hover, setHover] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const lang = localStorage.getItem("i18nextLng");

  return (
    <div id="Product Item">
      <Fragment>
        <SEO
          title="ContactUs"
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

        <section
          className=" bg-[url('/images/product/bgtriT.png')] bg-no-repeat bg-auto "
          style={{
            backgroundPosition: "right -70% top -15vw ",
            backgroundSize: "59%",
          }}
        >
          <img
            id="content"
            src="/images/tri.png"
            className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  mt-32 "
          ></img>
          <div className="container mx-auto pb-24">
            <div className="flex flex-col gap-1 py-20" id="list">
              {lang === "th" ? "" : ""}
              <h1 className="text-center uppercase text-blue">
                {lang === "th" ? "รายการสินค้า" : "Product List"}
              </h1>

              <ThreeDots />
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-[clamp(50px,10vw,70px)] justify-center">
              <img
                src="/images/product/mock.png"
                className=" w-[clamp(400px,40vw,800px)]  m-auto"
              />
              {lang === "th" ? "" : ""}

              <div className="text-blue flex flex-col gap-3 md:w-[80%] w-[95%] mx-auto">
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "ชื่อผลิตภัณฑ์ :" : ""}
                  </h3>
                  <p>
                    {lang === "th"
                      ? "XXXXXXXXXXXXX XXXXXX"
                      : "XXXXXXXXXXXXX XXXXXX"}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? " ชื่อเรียกอื่นๆ :" : ""}
                  </h3>
                  <p>ALUMINIUM TRIFLUORIDE</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? " สูตรเคมี :" : ""}
                  </h3>
                  <p>ALF3</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "ลักษณะทางกายภาพ :" : ""}
                  </h3>
                  <p>{lang === "th" ? "ผลึกหรือผงสีขาว ดูดความชื้น" : " "}</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "ประเภทอุตสาหกรรม :" : ""}
                  </h3>
                  <p>
                    {lang === "th"
                      ? "Rubber & Sponge ยางและฟองน้ำ Electronics & Electroplating อิเล็กทรอนิคและชุบโลหะ"
                      : " "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "บรรจุภัณฑ์ :" : ""}
                  </h3>
                  <p>{lang === "th" ? "25 Kg" : " "}</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "แหล่งผลิต :" : ""}
                  </h3>
                  <p>{lang === "th" ? "จีน" : " "}</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {lang === "th" ? "รายละเอียดอื่นๆ :" : ""}
                  </h3>
                  <p>{lang === "th" ? "XXXXXXXX" : "XXXXXXXX"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer className={"bg-lightBlue"} />
      </Fragment>
    </div>
  );
};
export default ProductItem;
