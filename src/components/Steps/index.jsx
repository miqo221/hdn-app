import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container";
import Heading from "../Heading";
import stepsData from "@/constants/stepsData";
import IconCard from "../IconCard";

import "swiper/css";
import "swiper/css/pagination";

export default function Steps() {
  return (
    <section className="py-[120px] px-[10px] lg:px-[0px]">
      <Container>
        <Heading
          firstLine="Connect us now"
          secondLine="with just 3 steps."
          subTitle="Three steps to complete financial clarity."
          alignment="center"
        />
        <div className="mt-[80px] lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
          >
            {stepsData.map((elm) => (
              <SwiperSlide key={elm.title}>
                <IconCard
                  generalStyles="bg-white p-[33px] rounded-xl flex flex-col gap-[20px] border border-gray-100"
                  source={elm.image}
                  altText={elm.alt}
                  mainText={elm.title}
                  secondaryText={elm.description}
                  mainStyles={elm.titleStyle}
                  secondaryStyles={elm.descriptionStyle}
                  imgStyles={elm.imgStyle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:flex gap-[48px] mt-[80px] justify-between">
          {stepsData.map((elm) => (
            <IconCard
              key={elm.title}
              generalStyles="bg-white p-[33px] rounded-xl flex flex-col gap-[20px] max-w-[350px] border border-gray-100 hover:scale-105 hover:shadow-xl transition"
              source={elm.image}
              altText={elm.alt}
              mainText={elm.title}
              secondaryText={elm.description}
              mainStyles={elm.titleStyle}
              secondaryStyles={elm.descriptionStyle}
              imgStyles={elm.imgStyle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
