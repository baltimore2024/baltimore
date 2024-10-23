"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ link, title }: INavLink) {
  const pathName = usePathname();

  return (
    <div>
      <Link
        className={`${
          pathName === link ? "text-[#6951DC] font-bold " : "text-bold"
        }`}
        href={link}
      >
        {title}
      </Link>
    </div>
  );
}
