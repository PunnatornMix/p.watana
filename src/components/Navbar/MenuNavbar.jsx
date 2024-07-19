import React, { useEffect, useState } from "react";
import {
  CirclePhone,
  LineIcon,
  Mail,
  ThailandIcon,
  TriangleIcon,
  UnitedStates,
} from "../icons/icons";
import { useTranslation } from "react-i18next";

function MenuNavbar({ children }) {
  const lang = localStorage.getItem("i18nextLng");

  // const [lang, setLang] = useState();
  // const { t, i18n } = useTranslation();
  // const lang = localStorage.getItem("ncl_lang");

  // useEffect(() => {
  //   // console.log(localStorage.getItem("itemsHref"));
  //   if (localStorage.getItem("watana_lang")) {
  //     setLang(localStorage.getItem("watana_lang"));
  //     i18n.changeLanguage(lang);
  //   } else {
  //     setLang("th");
  //   }
  // }, [lang]);

  // const handleLang = (event, attrLang) => {
  //   let changeText = attrLang === "th" ? "en" : "th";
  //   localStorage.setItem("watana_lang", changeText);
  //   setLang(localStorage.getItem("watana_lang"));
  //   i18n.changeLanguage(lang);
  // };

  return (
    <>
      <div className="container mx-auto flex h-16 my-10 justify-between">
        <div className="bg-green-400 w-20 h-16"></div>
        <div className="md:flex hidden gap-16 items-center ">
          <p>{lang === "th" ? "เกี่ยวกับบริษัท" : "about us"}</p>
          <p>รายการสินค้า</p>
          <p>ข่าวสารและกิจกรรม</p>
          <p>ติดต่อบริษัท</p>
        </div>
        <div className="md:flex hidden items-center">
          <div className="flex gap-3 items-center">
            <CirclePhone className="fill-[#100F9C] w-[35px]" />
            <div>084 111 0053</div>
            <Mail className="fill-[#100F9C] w-[35px] border-[2.5px] border-[#100F9C] rounded-full p-1" />
            <LineIcon className="w-[35px] border-[2.5px] border-[#100F9C] rounded-full  p-1" />
            <div className="border-[2.5px] h-[35px] flex border-[#100F9C] rounded-md p-1">
              {children}
            </div>

            {/* <UnitedStates className="w-[35px]  border-[2.5px] border-[#100F9C] rounded-md p-1" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuNavbar;
