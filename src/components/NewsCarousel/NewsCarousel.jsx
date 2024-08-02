import React from "react";
("use client");
import { Carousel } from "flowbite-react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCarousel() {
  const lang = localStorage.getItem("i18nextLng");

  const NewsList = [
    <NewsCard
      src={"/images/newsList/Rectangle1297_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์"
          : "Sleeping on long-haul flights: Here are the top tips."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518
          เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่....
          การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก
          ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ
          ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด
          พร้อมทั้งบริการ ที่มีประสิทธิภาพ
          เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า
          ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง
          ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We are off….`
      }
    />,

    <NewsCard
      src={"/images/newsList/Group2868_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงาน"
          : "Sleeping on long-haul flights."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,
    <NewsCard
      src={"/images/newsList/Group2404_0.png"}
      date={lang === "th" ? "กันยายน 20, 2023" : "September 20, 2023"}
      title={
        lang === "th"
          ? "กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"
          : "Sleeping on long-haul flights: Here are the top tips the sky."
      }
      content={
        lang === "th"
          ? `บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`
          : `For most of us, the prospect of a long-haul flight is exciting, mixed with a few nerves. We’re off….`
      }
    />,

    // <NewsCard />,
  ];

  return (
    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
    <div className="h-[600px]">
      <Carousel
        slide={false}
        indicators={false}
        className="2xl:block hidden news px-[clamp(5px,4vw,60px)]"
      >
        {NewsList.reduce((acc, current, index) => {
          if (index % 3 === 0) acc.push([]);
          acc[acc.length - 1].push(current);
          return acc;
        }, []).map((group, idx) => (
          <div key={idx} className="flex justify-around">
            {group}
          </div>
        ))}
      </Carousel>
      <Carousel
        slide={false}
        indicators={false}
        className=" 2xl:hidden lg:block hidden  news px-20"
      >
        {NewsList.reduce((acc, current, index) => {
          if (index % 2 === 0) acc.push([]);
          acc[acc.length - 1].push(current);
          return acc;
        }, []).map((group, idx) => (
          <div key={idx} className="flex justify-around">
            {group}
          </div>
        ))}
      </Carousel>
      <Carousel
        slide={false}
        indicators={false}
        className=" lg:hidden news px-20"
      >
        {NewsList.reduce((acc, current, index) => {
          if (index % 1 === 0) acc.push([]);
          acc[acc.length - 1].push(current);
          return acc;
        }, []).map((group, idx) => (
          <div key={idx} className="flex justify-around">
            {group}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default NewsCarousel;
