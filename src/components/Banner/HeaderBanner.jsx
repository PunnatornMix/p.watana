import React from "react";

function HeaderBanner({ src }) {
  return (
    <div className={`bg-[url("${src}")] bannerImages w-100 h-[700px]`}></div>
  );
}

export default HeaderBanner;
