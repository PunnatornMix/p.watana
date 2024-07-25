import React from "react";
import { CirclePhone } from "../icons/icons";

function Footer() {
  return (
    <div className="relative">
      <div className="bg-[url('/images/home/footer.png')] absolute w-full bg-center bg-no-repeat -translate-y-[33%] ">
        <div className="container mx-auto flex   text-white h-[362px]">
          <div className="flex flex-col gap-4 h-[80%] mt-auto justify-center">
            <h3>บริษัท ปิ่นวัฒนาการค้า จำกัด</h3>
            <p>
              154 ซอยเพชรเกษม 114 แขวงหนองค้างพลู <br /> เขตหนองแขม กรุงเทพฯ
              10160
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <p>สอบถามข้อมูลทั่วไป</p>
                <div className="flex gap-4">
                  <CirclePhone className="fill-[#100F9C] w-[35px]" />
                  <h3 className="font-bold">084 111 0053</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-red h-16 w-16"></div>
                <div className="bg-blue h-16 w-16"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px] bg-grey text-white  flex items-center justify-center ">
          <p className="text-center">
            © สงวนลิขสิทธิ์ พ.ศ. 2567 บริษัท ปิ่นวัฒนาการค้า จำกัด |
            <span className="text-[#BEBBBB]"> by Belong-To</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
