import React from "react";

export default function Stories({ title, name, detail }: IStories) {
  return (
    <div className="border p-7 border-[#000]">
      <h1 className=" font-bold text-[25px] ">{title}</h1>
      <p>{name}</p>
      <p className="mt-[30px]" >{detail}</p>
    </div>
  );
}
