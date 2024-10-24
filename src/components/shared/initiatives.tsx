import React from "react";

export default function Initiatives({
  serial,
  order,
  mainDescription,
  mainTitle,
  subInfo,
}: IInitiativeCards) {
  return (
    <div className="border-t-[3px] border-b-[3px] w-full border-t-[#6951DC] border-b-[#6951DC] ">
      <div className="max-w-6xl mx-auto flex gap-20 items-center justify-center py-12">
        <div className="">
          <p className="text-[#6951DC]">{serial}</p>
          <h1 className=" text-3xl font-[900]">{mainTitle}</h1>
          {mainDescription}
        </div>
        <div className="grid gap-8 grid-cols-2 ">
          {subInfo.map((info, k) => (
            <div key={k} className="">
              {info.icon}
              {info.title}
              {info.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
