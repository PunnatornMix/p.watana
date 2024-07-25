import React from "react";
("use client");
import { Carousel } from "flowbite-react";
import NewsCard from "../NewsCard/NewsCard";

const NewsList = [
  <NewsCard
    src={"/images/newsList/Rectangle1297_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518
          เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่....
          การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก
          ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ
          ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด
          พร้อมทั้งบริการ ที่มีประสิทธิภาพ
          เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า
          ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง
          ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,
  <NewsCard
    src={"/images/newsList/Group2868_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงาน"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,
  <NewsCard
    src={"/images/newsList/Group2404_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,
  <NewsCard
    src={"/images/newsList/Group2404_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,
  <NewsCard
    src={"/images/newsList/Group2404_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,
  <NewsCard
    src={"/images/newsList/Group2404_0.png"}
    date="กันยายน 20, 2023"
    title={"กิจกรรมบริษัทกับพนักงานร่วมกันเพื่อสร้างสัมพันธ์โครงการ"}
    content={`บริษัท ปิ่นวัฒนาการค้า จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2518 เริ่มจากการดำเนินธุรกิจในการจำหน่ายสินค้าเคมีทั่วไป พัฒนาสู่.... การเป็น.การนำเข้าสินค้าเคมีภัณฑ์จากต่างประเทศทั่วโลก ให้แก่หน่วยงานและบริษัทชั้นนำในประเทศไทย บริษัทฯ ได้มุ่งเน้นในส่วนของการจำหน่ายสินค้าที่หลากหลายและมีคุณภาพที่ดีที่สุด พร้อมทั้งบริการ ที่มีประสิทธิภาพ เพื่อเข้าถึงความต้องการที่แท้จริงและความพอใจ สูงสุดของลูกค้า ตลอดจนสร้างมาตรฐานให้กับองค์กรโดยการพัฒนาบุคลากรอย่างต่อเนื่อง ทำให้บริษัทฯ ประสบความสำเร็จและก้าวหน้าอย่างถาวร`}
  />,

  // <NewsCard />,
];

function NewsCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[525px] ">
      <Carousel slide={false} className="bg-red">
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
    </div>
  );
}

export default NewsCarousel;
