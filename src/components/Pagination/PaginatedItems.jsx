import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import NewsCard from "../NewsCard/NewsCard";

// Example items, to simulate fetching from another resources.
// const items = ["mix", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const lang = localStorage.getItem("i18nextLng");

const items = [
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
];

function scrollToElement(id) {
  let offset = 150; // ระยะ offset ที่ต้องการ
  const element = document.getElementById(id);
  const offsetTop = element.offsetTop - offset; // คำนวณระยะ offset ที่ต้องการเลื่อน
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth", // เลื่อนโดยการ animate ให้เรียบร้อย
  });
}

function Items({ currentItems }) {
  return (
    <>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:w-full lg:w-5/6 w-full mx-auto pb-12">
        {currentItems && currentItems.map((item) => <div>{item}</div>)}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage, className }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    scrollToElement("list");
  };

  return (
    <>
      <Items currentItems={currentItems} className={className} />
      <ReactPaginate
        nextLabel="next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link "
        previousClassName="page-item previous hover:tracking-widest"
        previousLinkClassName="page-link "
        nextClassName="page-item next hover:tracking-widest"
        nextLinkClassName="page-link "
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
