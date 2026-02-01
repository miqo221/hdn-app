"use client";

import valuesData from "@/constants/valuesData";
import Heading from "../Heading";
import IconCard from "../IconCard";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Values() {
  return (
    <div className="my-[120px] px-[10px] lg:px-[0px]">
      <Heading
        firstLine={"Our"}
        secondLine={"values"}
        alignment={"left"}
        subTitle={
          "Our values define how we work, how we communicate, and how we protect our clients’ interests. They guide every financial decision we make and ensure that our services are built on trust, precision, and long-term collaboration."
        }
      />
      <div className="flex mt-[120px] gap-[48px] w-full lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
        >
          {valuesData &&
            valuesData.map((elm, index) => (
              <SwiperSlide key={index}>
                <IconCard
                  generalStyles="flex flex-col flex-1 bg-white p-[10px] justify-start items-center gap-[10px] shadow-sm rounded h-[250px]"
                  source={elm.image}
                  altText={elm.title}
                  mainText={elm.title}
                  secondaryText={elm.description}
                  mainStyles={elm.titleStyles}
                  secondaryStyles={elm.descriptionStyles}
                  imgStyles={elm.imageStyles}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="hidden lg:flex mt-[120px] gap-[48px] w-full">
        {valuesData &&
          valuesData.map((elm, index) => (
            <IconCard
              key={index}
              generalStyles="flex flex-col flex-1 bg-white p-[35px] justify-center items-center gap-[60px] shadow-xl rounded hover:shadow-md transition"
              source={elm.image}
              altText={elm.title}
              mainText={elm.title}
              secondaryText={elm.description}
              mainStyles={elm.titleStyles}
              secondaryStyles={elm.descriptionStyles}
              imgStyles={elm.imageStyles}
            />
          ))}
      </div>
    </div>
  );
}
