import React from "react";
import { CirclePhone, LineIcon, Mail, UnitedStates } from "../icons/icons";

function MenuNavbar() {
  return (
    <div className="container mx-auto flex h-16 flex  justify-between">
      <div className="bg-blue-400 w-20"></div>
      <div className="flex gap-16 items-center">
        <p>เกี่ยวกับบริษัท</p>
        <p>รายการสินค้า</p>
        <p>ข่าวสารและกิจกรรม</p>
        <p>ติดต่อบริษัท</p>
      </div>
      <div className="flex items-center">
        <div className="flex gap-3 items-center">
          <CirclePhone className="fill-[#100F9C] w-[50px]" />
          <div>084 111 0053</div>
          <Mail className="fill-[#100F9C] w-[50px] border-[2.5px] border-[#100F9C] rounded-full p-2" />
          <LineIcon className="w-[50px] border-[2.5px] border-[#100F9C] rounded-full  p-2" />
          <UnitedStates className="w-[40px]  border-[2.5px] border-[#100F9C] rounded-md p-1" />
        </div>
      </div>
    </div>
  );
}

export default MenuNavbar;
