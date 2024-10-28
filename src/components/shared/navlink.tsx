"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ link, title, onClick, className }: INavLink) {
  const pathName = usePathname();

  return (
    <div className={className}>
      <Link
        onClick={onClick}
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
