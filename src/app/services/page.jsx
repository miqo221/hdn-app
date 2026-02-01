"use client";

import UpdateLine from "@/components/UpdateLine";
import Container from "@/components/Container";
import icon from "../../assets/updateGifs/professional.gif";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import Carousel from "@/components/Carousel";
import clientsData from "@/constants/clientsData";

export default function Service() {
  return (
    <div className="pt-[80px]">
      <Container>
        <UpdateLine
          icon={icon}
          text={"Professional and predictable accounting."}
          bgColor="#ffb8b8"
          textColor="#e83930bb"
          altText={"Abc icon"}
        />
        <h1 className="font-bold text-[61px] leading-[1.18] text-center text-[#1a1a1a]">
          Our core services
        </h1>
        <Hero
          pageDescription={
            "Our services are built to simplify your financial operations and provide clarity where it matters most. From day-to-day accounting to strategic financial planning, HDN Accounting Group LLC delivers reliable, compliant, and timely solutions that support sustainable business growth."
          }
        />
      </Container>
      <section className="bg-[white] py-[120px]">
        <Container>
          <Services />
        </Container>
      </section>
      <Container>
        <Steps />
        <Carousel clients={clientsData} />
      </Container>
      <Testimonials />
      <Container>
        <Experience />
      </Container>
    </div>
  );
}
