import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  // arrows: true, // เปิดปุ่ม prev/next
};

function HeaderBanner({ src }) {
  return (
    // <div
    //   className={`bannerImages w-100 h-[700px] z-0`}
    //   style={{ backgroundImage: `url(${src})` }}
    // ></div>

    // <Slider>
    //   <div
    //     className={`bannerImages w-100 h-[700px] z-0`}
    //     style={{ backgroundImage: `url(${src})` }}
    //   ></div>
    // </Slider>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[700PX]">
      <Slider {...settings}>
        <img src="/images/Banner/home/Banner01.png" alt="Image 1" />
        <img src="/images/Banner/home/Banner02.png" alt="Image 1" />
        <img src="/images/Banner/home/Banner03.png" alt="Image 1" />
      </Slider>
    </div>
  );
}

export default HeaderBanner;
