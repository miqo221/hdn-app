import Container from "@/components/Container";
import UpdateLine from "@/components/UpdateLine";
import clock from "../../assets/updateGifs/clock.gif";
import TeamSection from "@/components/TeamSection";
import Carousel from "@/components/Carousel";
import clientsData from "@/constants/clientsData";
import Experience from "@/components/Experience";
import SolvedProblems from "@/components/SolvedProblems";
import Heading from "@/components/Heading";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import Hero from "@/components/Hero";

export default function About() {
  return (
    <div className="pt-[80px]">
      <Container>
        <UpdateLine
          icon={clock}
          text={"We usually respond within one business day."}
          bgColor="#9bffa0"
          textColor="#03860a"
          altText={"Clock icon"}
        />
        <h1 className="font-bold text-[61px] leading-[1.18] text-center text-[#1a1a1a]">
          About HDN Accounting
        </h1>
        <Hero
          pageDescription={
            "At HDN Accounting Group LLC, we specialize in providing professional outsourced accounting and financial consulting services tailored to the needs of small and medium-sized businesses. Our mission is to help you save time, reduce overhead costs, and ensure financial clarity and compliance so you can focus on what matters most: growing your business."
          }
        />
        <Experience />
        <Values />
      </Container>
      <TeamSection />
      <Container>
        <Carousel clients={clientsData} />
        <SolvedProblems />
      </Container>
      <Testimonials />
    
    </div>
  );
}
