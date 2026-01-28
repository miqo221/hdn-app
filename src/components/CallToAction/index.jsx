"use client";

import React, { useState } from "react";
import Button from "../Button";
import { X } from "lucide-react";
import Image from "next/image";
import amFlag from "../../assets/contactIcons/armenia.png";
import mail from "../../assets/contactIcons/mail.png";

const CallToAction = ({ bgMode }) => {
  const [content, setContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const identifyText = (e) => {
    setContent(e.currentTarget.innerText);
    setShowModal(true);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`px-16 py-8 rounded-md ${
          bgMode === "light" ? "bg-[#eff6ff]" : null
        }`}
      >
        <h3
          className={`${bgMode === "light" ? "text-black" : "text-[#4b5563]"}`}
        >
          <Button
            styles={`${
              bgMode !== "light"
                ? "border border-gray-700 bg-[#000]"
                : "bg-[#1a1a1a]"
            } rounded-md mx-[5] px-16 py-3.5 font-bold text-sm leading-relaxed text-center text-white hover:bg-[#333333] hover:scale-105 transition transform duration-300 ease-in-out`}
            buttonText={"CALL"}
            handleClick={identifyText}
          />{" "}
          or{" "}
          <Button
            styles="mx-[5] border border-gray-200 rounded-md px-16 py-3.5 bg-white font-bold text-sm leading-relaxed text-[#1a1a1a] hover:bg-gray-100 hover:scale-105 hover:border-gray-300 transition transform duration-300 ease-in-out"
            buttonText={"EMAIL"}
            handleClick={identifyText}
          />{" "}
          if you want to contact us
        </h3>{" "}
        {showModal && (
          <div
            className="fixed inset-0 999 flex items-center justify-center bg-black/50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black transition-all duration-300 cursor-pointer"
              >
                <X size={20} />
              </button>
              {content === "CALL" && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Call us</h4>
                  <a
                    className="text-gray-600 cursor-pointer inline-flex items-center gap-x-[10px] px-[10px] py-[4px] rounded-md hover:bg-[#a1c1eb] hover:text-gray-800 transition transform duration-300 ease-in-out"
                    href="tel:+37433055202"
                  >
                    <Image
                      src={amFlag}
                      alt="Armenian Flag"
                      className="w-[20px]"
                    ></Image>
                    <span>Phone: +374 33 055 202</span>
                  </a>
                </div>
              )}

              {content === "EMAIL" && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Email us</h4>
                  <a
                    className="text-gray-600 cursor-pointer inline-flex items-center gap-x-[10px] px-[10px] py-[4px] rounded-md hover:bg-[#a1c1eb] hover:text-gray-800 transition transform duration-300 ease-in-out"
                    href="mailto:office.hdngroup@gmail.com"
                  >
                    <Image
                      src={mail}
                      alt="Email Icon"
                      className="w-[20px]"
                    ></Image>
                    <span>Email: office.hdngroup@gmail.com</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
