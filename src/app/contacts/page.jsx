"use client";

import Container from "@/components/Container";
import UpdateLine from "@/components/UpdateLine";
import globeIcon from "../../assets/updateGifs/globe.gif";
import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";
import SolvedProblems from "@/components/SolvedProblems";
import TeamSection from "@/components/TeamSection";

export default function Contact() {
  return (
    <div className="pt-[80px]">
      <Container>
        <UpdateLine
          icon={globeIcon}
          text={"Qucik response and seamless support to our partners."}
          textColor="#e88c30"
          bgColor={"#e88c3033"}
          altText={"Globe Icon"}
        />
        <h1 className="font-bold text-[61px] leading-[1.18] text-center text-[#1a1a1a]">
          Our contacts
        </h1>
        <Hero
          pageDescription={
            "Have questions or ready to move forward? Get in touch with HDN Accounting Group LLC to explore how our expertise can support your business goals with clarity, compliance, and confidence."
          }
        />
      </Container>
      <Contacts />
      <Container>
        <SolvedProblems />
      </Container>
      <TeamSection />
    </div>
  );
}
