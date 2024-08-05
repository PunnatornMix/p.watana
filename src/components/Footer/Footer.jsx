import React from "react";
import { CirclePhone } from "../icons/icons";
import LogoHover from "../Button/LogoHover";

function Footer({ className }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="relative">
      <div
        className={`md:block hidden bg-[url('/images/home/footer.png')] absolute w-full bg-center  bg-cover bg-no-repeat  ${className} `}
      >
        <div className="container mx-auto flex text-white min-h-[clamp(250px,25vw,362px)] ">
          <div className="h-[80%] w-[80%] mx-auto mt-auto flex lg-col pt-16 pb-10 items-center justify-between">
            <div className="flex flex-col gap-4 ">
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
              <div className="flex gap-10">
                <div className="flex flex-col gap-3">
                  <p>
                    {lang === "th"
                      ? "สอบถามข้อมูลทั่วไป"
                      : "For more inquiries"}
                  </p>
                  <div className="flex gap-4 ">
                    {/* <CirclePhone className="fill-[#100F9C] w-[35px]" /> */}
                    <LogoHover
                      src={"/images/Logo/phone.png"}
                      hoverSrc={"/images/Logo/phoneH.png"}
                    />

                    <h3 className="font-bold">084 111 0053</h3>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src="/images/Logo/Group258L.png" />
                </div>
              </div>
            </div>
            <div className="flex gap-40 items-center justify-center mt-6 ">
              <div className="flex flex-col gap-4 ">
                <p>{lang === "th" ? "เกี่ยวกับบริษัท" : "About Us"}</p>
                <p>{lang === "th" ? "รายการสินค้า" : "Product List"}</p>
                <p>
                  {lang === "th" ? "ข่าวสารและกิจกรรม" : "News & Activities"}
                </p>
                <p>{lang === "th" ? "ติดต่อบริษัท" : "Contact Us"}</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p>{lang === "th" ? "ช่องทางการติดต่อ" : "Contact methods"}</p>
                <div className="flex justify-between">
                  <LogoHover
                    src={"/images/Logo/mail.png"}
                    hoverSrc={"/images/Logo/mailH.png"}
                  />
                  <LogoHover
                    src={"/images/Logo/fb.png"}
                    hoverSrc={"/images/Logo/fbH.png"}
                  />
                  <LogoHover
                    src={"/images/Logo/youtube.png"}
                    hoverSrc={"/images/Logo/youtubeH.png"}
                  />
                </div>
                <img src="images/Logo/QR.png" className="w-[125px] mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50px] bg-grey text-white  flex items-center justify-center ">
          <p className="text-center">
            {lang === "th"
              ? `
            © สงวนลิขสิทธิ์ พ.ศ. 2567 บริษัท ปิ่นวัฒนาการค้า จำกัด |
              `
              : "Copyright © 2024 | P. WATANA TRADING CO., LTD. All rights reserved. | Designed by "}
            <span className="text-[#BEBBBB]"> Belong-To</span>
          </p>
        </div>
      </div>

      <div
        className={`md:hidden bg-[url('/images/home/footermb.png')] h-[815px] absolute w-full bg-center bg-no-repeat bg-cover ${className} `}
      >
        <div className="container mx-auto flex text-white h-full text-center">
          <div className="h-[80%] w-[80%] mx-auto my-auto flex-col  items-center justify-between">
            <div className="flex flex-col gap-4 ">
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
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 my-10">
                <p>{lang === "th" ? "เกี่ยวกับบริษัท" : "About Us"}</p>
                <p>{lang === "th" ? "รายการสินค้า" : "Product List"}</p>
                <p>
                  {lang === "th" ? "ข่าวสารและกิจกรรม" : "News & Activities"}
                </p>
                <p>{lang === "th" ? "ติดต่อบริษัท" : "Contact Us"}</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p>{lang === "th" ? "ช่องทางการติดต่อ" : "Contact methods"}</p>
                <div className="flex justify-between">
                  <LogoHover
                    src={"/images/Logo/mail.png"}
                    hoverSrc={"/images/Logo/mailH.png"}
                  />
                  <LogoHover
                    src={"/images/Logo/fb.png"}
                    hoverSrc={"/images/Logo/fbH.png"}
                  />
                  <LogoHover
                    src={"/images/Logo/youtube.png"}
                    hoverSrc={"/images/Logo/youtubeH.png"}
                  />
                </div>
                <img src="images/Logo/QR.png" className="w-[125px] mx-auto" />
              </div>
            </div>

            <div className="flex flex-col gap-6 py-8 items-center">
              <div className="flex flex-col gap-3">
                <p>
                  {lang === "th" ? "สอบถามข้อมูลทั่วไป" : "For more inquiries"}
                </p>
                <div className="flex gap-4">
                  <LogoHover
                    src={"/images/Logo/phone.png"}
                    hoverSrc={"/images/Logo/phoneH.png"}
                  />

                  <h3 className="font-bold">084 111 0053</h3>
                </div>
              </div>
              <div className="flex gap-3 h-[50px] w-[94px]">
                <img src="/images/Logo/Group258L.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50px] bg-grey text-white  flex items-center justify-center ">
          <p className="text-center text-[12px]">
            {lang === "th"
              ? `
            © สงวนลิขสิทธิ์ พ.ศ. 2567 บริษัท ปิ่นวัฒนาการค้า จำกัด |
              `
              : "Copyright © 2024 | P. WATANA TRADING CO., LTD. All rights reserved. | Designed by "}
            <span className="text-[#BEBBBB]"> Belong-To</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
