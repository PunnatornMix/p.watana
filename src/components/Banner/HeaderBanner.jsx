import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
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
    // <div className=" h-30 sm:h-[320px] md:h-[clamp(320px,35vw,430px)] lg:h-[clamp(430px,35vw,550px)] xl:h-[550p] 2xl:h-[700px]">
    //   <div className="bg-[url('/images/Banner/bgBanner.png')] h-full ">
    //     <Slider {...settings}>
    //       {" "}
    //       <img src="/images/Banner/home/Banner1.png" />
    //       <img src="/images/Banner/home/Banner2.png" />
    //       <img src="/images/Banner/home/Banner3.png" />
    //     </Slider>
    //   </div>
    // </div>
    // <div className="relative h-30 sm:h-[320px] md:h-[clamp(320px,35vw,430px)] lg:h-[clamp(430px,35vw,550px)] xl:h-[550px] 2xl:h-[750px]">
    <div className="relative h-[clamp(400px,40vw,750px)]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/Banner/bgBanner1.png')]   bg-cover bg-center z-20"></div>

      {/* Slider Component */}
      <div className="relative z-10 h-[clamp(400px,40vw,750px)]">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}

export default HeaderBanner;
