import React from "react";

function HeaderBanner({ src }) {
  return (
    <div
      className={`bannerImages w-100 h-[700px] `}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}

export default HeaderBanner;
