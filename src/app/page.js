"use client";

import Hero from "@/components/Hero";
import UpdateLine from "@/components/UpdateLine";
import Heading from "@/components/Heading";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import IconCard from "@/components/IconCard";
import Container from "@/components/Container";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import toolsData from "@/constants/toolsData";
import circle from "../assets/updateGifs/blinking_blue_dot.gif";

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
        <h1 className="px-[10px] lg:p-[0px] font-bold text-[61px] leading-[1.18] text-center text-[#1a1a1a]">
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
          <div className="flex flex-col lg:flex-row gap-[48px] mt-[80px] justify-between">
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
      <Steps />
      <Testimonials />
    </div>
  );
}
