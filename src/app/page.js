"use client";

import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import Heading from "@/components/Heading";
import UpdateLine from "@/components/UpdateLine";
import circle from "../assets/updateGifs/blinking_blue_dot.gif";
import toolsData from "@/constants/toolsData";
import stepsData from "@/constants/stepsData";
import IconCard from "@/components/IconCard";
import Container from "@/components/Container";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="pt-[80px]">
      <Container>
        <UpdateLine
          icon={circle}
          text={"Remote service is now also available."}
          bgColor={"#eff6ff"}
          textColor={"#4a90e2"}
          altText={"Blinking Blue Dot"}
        />
        <h1 className="font-bold text-[61px] leading-[1.18] text-center text-[#1a1a1a]">
          HDN Accounting Group
        </h1>
        <Hero pageDescription="Real-time financial clarity for modern businesses. Precise, transparent, and effortless automated bookkeeping." />
        <CallToAction bgMode={"light"} />
        <Experience />
      </Container>
      <section className="bg-[#fff] py-[120px]">
        <Container>
          <Heading
            firstLine={"Precision tools for"}
            secondLine={"financial excellence."}
            subTitle={
              "We've stripped away the complexity to provide a pure, unadulterated view of your company's financial health."
            }
            alignment={"left"}
          />
          <div className="flex gap-[48px] mt-[80px] justify-between">
            {toolsData &&
              toolsData.map((elm) => {
                return (
                  <IconCard
                    key={elm.title}
                    generalStyles={
                      "p-[15px] rounded-md flex flex-col gap-[20px] max-w-[350px] cursor-default hover:scale-105 hover:shadow-xl transition duration-600"
                    }
                    source={elm.image}
                    altText={elm.alt}
                    mainText={elm.title}
                    secondaryText={elm.description}
                    mainStyles={elm.titleStyle}
                    secondaryStyles={elm.descriptionStyle}
                    imgStyles={elm.imgStyle}
                  />
                );
              })}
          </div>
        </Container>
      </section>
      <section className="py-[120px]">
        <Container>
          <Heading
            firstLine={"Connect us now"}
            secondLine={"with just 3 steps."}
            subTitle={"Three steps to complete financial clarity."}
            alignment={"center"}
          />
          <div className="flex gap-[48px] mt-[80px] justify-between">
            {stepsData.map((elm) => {
              return (
                <IconCard
                  key={elm.title}
                  generalStyles={
                    "bg-white p-[33px] rounded-xl flex flex-col gap-[20px] max-w-[350px] border border-gray-100  cursor-default hover:scale-105 hover:shadow-xl transition duration-600 "
                  }
                  source={elm.image}
                  altText={elm.alt}
                  mainText={elm.title}
                  secondaryText={elm.description}
                  mainStyles={elm.titleStyle}
                  secondaryStyles={elm.descriptionStyle}
                  imgStyles={elm.imgStyle}
                />
              );
            })}
          </div>
        </Container>
      </section>
      <Testimonials />
    </div>
  );
}
