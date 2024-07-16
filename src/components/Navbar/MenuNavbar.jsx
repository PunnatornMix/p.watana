import React from "react";
import {
  CirclePhone,
  LineIcon,
  Mail,
  ThailandIcon,
  TriangleIcon,
  UnitedStates,
} from "../icons/icons";

function MenuNavbar() {
  return (
    <div className="container mx-auto flex h-16 mt-10 justify-between">
      <div className="bg-blue-400 w-20"></div>
      <div className="flex gap-16 items-center">
        <p>เกี่ยวกับบริษัท</p>
        <p>รายการสินค้า</p>
        <p>ข่าวสารและกิจกรรม</p>
        <p>ติดต่อบริษัท</p>
      </div>
      <div className="flex items-center">
        <div className="flex gap-3 items-center">
          <CirclePhone className="fill-[#100F9C] w-[35px]" />
          <div>084 111 0053</div>
          <Mail className="fill-[#100F9C] w-[35px] border-[2.5px] border-[#100F9C] rounded-full p-1" />
          <LineIcon className="w-[35px] border-[2.5px] border-[#100F9C] rounded-full  p-1" />
          <div className="border-[2.5px] h-[35px] flex border-[#100F9C] rounded-md p-1">
            <ThailandIcon className="w-[35px]  " />
            <TriangleIcon className="w-[20px]" />
          </div>

          {/* <UnitedStates className="w-[35px]  border-[2.5px] border-[#100F9C] rounded-md p-1" /> */}
        </div>
      </div>
    </div>
  );
}

export default MenuNavbar;
