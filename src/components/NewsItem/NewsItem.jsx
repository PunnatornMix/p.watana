import React from "react";
import ThreeDots from "../ThreeDots/ThreeDots";
import { FaceBookIcon } from "../icons/icons";

function NewsItem({ date, title, src, content }) {
  const lang = localStorage.getItem("i18nextLng");

  return <></>;

  // <section className="mt-20 pb-24">
  //   <img
  //     id="content"
  //     src="/images/tri.png"
  //     className="lg:h-[clamp(65px,6.3vw,120px)] md:h-[clamp(50px,6.3vw,65px)] sm:h-[clamp(40px,6.3vw,50px)] h-[clamp(25px,6.3vw,40px)] bannerImages  mt-32"
  //   ></img>

  //   <div className="container mx-auto">
  //     <div className="flex flex-col mx-auto gap-1 py-20" id="list">
  //       <h1 className="uppercase text-center text-blue">
  //         {lang === "th" ? "ข่าวสารและกิจกรรม" : "NEWS & ACTIVITIES"}
  //       </h1>

  //       <ThreeDots />
  //     </div>

  //     <h5 className="">{date}</h5>

  //     <div
  //       className="fb-share-button"
  //       data-href="http://localhost:5173/news-item"
  //       data-layout=""
  //       data-size=""
  //     >
  //       <a
  //         target="_blank"
  //         href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A5173%2Fnews-item&amp;src=sdkpreparse"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         <FaceBookIcon className={"ml-auto cursor-pointer"} />
  //       </a>
  //     </div>

  //     <img src={src} className="mx-auto mb-14 w-44" />

  //     <div>
  //       <h3 className="text-center font-semibold mb-6">{title}</h3>
  //       <p>{lang === "th" ? <p>{content}</p> : ""}</p>
  //     </div>
  //   </div>
  // </section>
}

export default NewsItem;
