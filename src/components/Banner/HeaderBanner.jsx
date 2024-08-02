import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  infinite: true,
  autoplaySpeed: 5000,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

function HeaderBanner({ children }) {
  return (
    <div className=" h-30 sm:h-[320px] md:h-[clamp(320px,35vw,430px)] lg:h-[clamp(430px,35vw,550px)] xl:h-[550p] 2xl:h-[700px]">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default HeaderBanner;
