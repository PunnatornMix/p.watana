import React from "react";

function ModalBanner({ children }) {
  return (
    <>
      <div className="absolute w-[clamp(340px,40vw,650px)] h-[clamp(170px,15vw,250px)] bg-white opacity-35 rounded-2xl" />
      <div className="relative  text-center ">
        <h1 className="text-blue text-center leading-[clamp(2.5rem,3vw,4rem)] font-extrabold ">
          {children}
        </h1>
      </div>
    </>
  );
}

export default ModalBanner;
