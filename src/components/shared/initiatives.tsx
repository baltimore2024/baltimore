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
      <div
        className={`${
          order === "swapped" ? "md:flex-row-reverse" : "md:flex-row"
        } max-w-6xl mx-auto flex flex-col gap-20 items-center justify-center px-4 py-12`}
      >
        <div className="">
          <p className="text-[#6951DC]">{serial}</p>
          <h1 className=" text-3xl font-[900]">{mainTitle}</h1>
          <p className="mt-[10px] text-[#6B7280] ">{mainDescription}</p>
        </div>
        <div className="grid gap-8 grid-cols-2 ">
          {subInfo.map((info, k) => (
            <div key={k} className=" last:col-span-2">
              <div className="">{info.icon}</div>
              <h1 className="font-bold mt-2 ">{info.title}</h1>
              <p className="mt-[10px] text-[#6B7280]">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
