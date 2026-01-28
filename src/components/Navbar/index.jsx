"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navbarData from "@/constants/navbarData";
import logo from "../../assets/logo.jpeg";
import Container from "../Container";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-888 bg-[#f8fafc]/90 backdrop-blur shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-[10px]">
          <div>
            <Link className="flex items-center gap-x-[8px]" href={"/"}>
              <div className="rounded-[20px] overflow-hidden">
                <Image
                  src={logo}
                  alt="HDN Logo"
                  className="w-[50px] h-[50px]"
                ></Image>
              </div>
              <p>HDN Accounting</p>
            </Link>
          </div>
          <div className="flex gap-x-[32px] font-normal">
            {navbarData.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition ${
                    isActive
                      ? "text-[#4A90E2] font-medium"
                      : "text-[#1a1a1a] hover:text-[#4A90E2]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
