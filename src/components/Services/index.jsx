"use client";

import servicesData from "@/constants/servicesData";
import IconCard from "../IconCard";
import Image from "next/image";
import expandIcon from "../../assets/expand.png";
import { useState } from "react";
import { X } from "lucide-react";
import Card from "../Card";
import CallToAction from "../CallToAction";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[400px] gap-[10px] px-[10px] lg:px-[0px]">
      {servicesData.map((elm) => (
        <div
          onClick={() => {
            setOpenModal(true);
            setSelectedService(elm);
          }}
          key={elm.id}
          className="group relative flex-1 hover:flex-[3] transition-all duration-400 ease-in-out overflow-hidden bg-cover bg-center bg-no-repeat grayscale p-[10px] rounded-[10px] flex items-end cursor-pointer"
          style={{ backgroundImage: `url(${elm.bgImage})` }}
        >
          <p className="flex h-[40%] text-[30px] font-bold group-hover:hidden text-[#fff] underline lg:no-underline text-shadow-lg overflow-hidden p-[10px] rounded bg-black/50">
            {elm.title}
          </p>
          <Image
            className="lg:hidden absolute w-[20px] bottom-[20px] right-[20px]"
            src={expandIcon}
            alt="Expand Arrows Icon"
          ></Image>
          <div className="relative hidden group-hover:block h-full p-[10px] rounded bg-black/80">
            <IconCard
              generalStyles="h-full flex flex-col justify-between text-[#fff]"
              mainText={elm.title}
              secondaryText={elm.description}
              extraText={`$${elm.price}/monthly`}
              extraDesctiption={`$${elm.annualPrice}/annually`}
              mainStyles={"font-bold text-[40px] underline"}
              secondaryStyles={"font-normal text-[24px]"}
              extraTextStyles={"font-bold text-[30px]"}
              extraDesctiptionStyles={"font-bold text-[30px]"}
            />
            <Image
              className="absolute w-[30px] bottom-[10px] right-[10px]"
              src={expandIcon}
              alt="Expand Arrows Icon"
            ></Image>
          </div>
        </div>
      ))}
      {openModal && selectedService && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-1000 px-[10px] lg:px-[0px]"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="flex flex-col lg:gap-[20px] gap-[10px] justify-between bg-white rounded-xl lg:p-[30px] p-[10px] max-w-[1000px] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              <X size={20} />
            </button>
            <h4 className="font-bold lg:text-[40px] text-[26px] max-w-[75%] lg:max-w-none lg:text-center">
              {selectedService.title}
            </h4>
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[20px] font-bold lg:text-[30px] text-[20px]">
              <p className="text-[#4A90E2]">${selectedService.price}/monthly</p>
              <p>OR</p>
              <p className="text-[#4A90E2]">
                ${selectedService.annualPrice}/annually
              </p>
            </div>
            <p className="lg:font-normal font-bold lg:text-[18px] text-[14px] text-[#4b5563] lg:my-[30px]">
              {selectedService.description}
            </p>
            <div className="flex flex-col gap-[10px]">
              <h5 className="font-bold lg:text-[30px] text-[22px] text-[#4A90E2]">
                Benefits:
              </h5>
              <div className="lg:hidden">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {selectedService.benefits.map((service, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        text={service.benefit}
                        value={service.about}
                        styles={
                          "flex flex-col gap-[10px] cursor-default border border-gray-100/50 hover:shadow-md transition duration-300 shadow-sm rounded-lg p-6 flex-1 bg-[#eff6ff]"
                        }
                        titleStyles={"font-bold text-[20px] text-[#4A90E2]"}
                        descriptionStyles={
                          "font-bold text-[14px] leading-[141%] lg:text-[#1a1a1a] text-[#4b5563]"
                        }
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="hidden lg:flex justify-evenly gap-x-[30px]">
                {selectedService.benefits.map((service, index) => {
                  return (
                    <Card
                      key={index}
                      text={service.benefit}
                      value={service.about}
                      styles={
                        "flex flex-col gap-[10px] cursor-default border border-gray-100/50 hover:shadow-md transition duration-300 shadow-sm rounded-lg p-6 flex-1 bg-[#eff6ff]"
                      }
                      titleStyles={"font-bold text-[22px] text-[#4A90E2]"}
                      descriptionStyles={
                        "font-medium text-[16px] leading-[141%] text-[#1a1a1a]"
                      }
                    />
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block">
              <CallToAction />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
