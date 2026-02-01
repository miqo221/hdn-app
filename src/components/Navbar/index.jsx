"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navbarData from "@/constants/navbarData";
import logo from "../../assets/logo.jpeg";
import Container from "../Container";
import Button from "../Button";
import menuIcon from "../../assets/hamburger.png";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-888 bg-[#f8fafc]/95 lg:bg-[#f8fafc]/90 lg:backdrop-blur shadow-sm px-[10px] lg:px-[0]">
      <Container>
        <div className="flex justify-between items-center py-[10px]">
          <Link className="flex items-center gap-x-[8px]" href={"/"}>
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src={logo}
                alt="HDN Logo"
                className="w-[50px] h-[50px]"
              ></Image>
            </div>
            <p className="font-bold lg:font-normal">HDN Accounting</p>
          </Link>
          <div className="hidden lg:flex gap-x-[32px] font-normal">
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
          <Button
            handleClick={() => setMenuOpen(!menuOpen)}
            btnImage={menuIcon}
            imageAlt={"Hamburger menu icon."}
            styles={"lg:hidden"}
          />
        </div>
        {menuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col items-end">
              {navbarData.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-base ${
                      isActive ? "text-[#4A90E2] font-medium" : "text-[#1a1a1a]"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
