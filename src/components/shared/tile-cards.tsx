import Image from "next/image";
import React from "react";

export default function TileCards({
  image,
  title,
  detail,
  read,
  type,
  className,
}: ITileCards) {
  return (
    <div className="">
      {type === "news" ? (
        <div className={className}>
          <Image src={image} width={"1000"} height={"1000"} alt={"image"} />
          <p className="text-[12px] font-bold my-[10px] ">Latest News</p>
          <p className="font-bold">{title}</p>
          <p className="text-[14px] mt-[10px] ">{detail}</p>
          <p className="mt-[20px]">• {read} min read</p>
        </div>
      ) : (
        <div className="">
          <div
            className={`${className} flex flex-col md:flex-row gap-5 items-center `}
          >
            <div className="">
              <Image src={image} width={"300"} height={"300"} alt={"image"} />
            </div>
            <div className="">
              <p className="font-bold">{title}</p>
              <p className="text-[14px] mt-[10px] ">{detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
