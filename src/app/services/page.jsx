import UpdateLine from "@/components/UpdateLine";
import Container from "@/components/Container";
import icon from "../../assets/updateGifs/professional.gif";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import stepsData from "@/constants/stepsData";
import Heading from "@/components/Heading";
import IconCard from "@/components/IconCard";
import Testimonials from "@/components/Testimonials";
import clientsData from "@/constants/clientsData";
import Carousel from "@/components/Carousel";

export default function Service() {
  return (
    <div className="pt-[80px]">
      <Container>
        <UpdateLine
          icon={icon}
          text={"Professional accounting with predictable turnaround times."}
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
        <section className="py-[80px] flex flex-col gap-[60px]">
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
          <Carousel clients={clientsData} />
        </section>
      </Container>
      <Testimonials />
      <Container>
        <Experience />
      </Container>
     
    </div>
  );
}
