import React from "react";

function NewsCard({ date, content, title, src }) {
  return (
    <>
      <div className="w-[350px] h-[525px] cursor-pointer shadow-xl my-6">
        <div
          className={
            " bg-transparent w-full h-[45%] bg-no-repeat bg-center hoverImg"
          }
          style={{
            transition: "background-size 1s ease-in",
            backgroundSize: "100%",
            backgroundImage: `url(${src})`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundSize = "110%";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundSize = "100%";
          }}
        ></div>
        <div className="flex flex-col gap-3 p-10 h-[58%] text-black">
          <small>{date}</small>
          <h3 className=" font-medium">{title}</h3>
          <p className="font-light line-clamp-3">{content}</p>
          <p className="text-red  hover:tracking-widest font-medium cursor-pointer mt-auto ">
            อ่านต่อ {`>`}
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
