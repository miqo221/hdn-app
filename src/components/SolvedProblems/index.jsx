import IconCard from "../IconCard";
import Heading from "../Heading";
import Image from "next/image";
import icon1 from "../../assets/solutionIcons/icon1.png";
import icon2 from "../../assets/solutionIcons/icon2.png";
import icon3 from "../../assets/solutionIcons/icon3.png";
import icon4 from "../../assets/solutionIcons/icon4.png";

export default function SolvedProblems() {
  return (
    <div className="my-[60px]">
      <Heading
        firstLine={"Why choose us"}
        secondLine={"What problems we solve?!"}
        alignment={"center"}
      />
      <div className="flex lg:flex-row flex-col justify-center lg:gap-[60px] gap-[20px] px-[10px] lg:px-[0px]">
        <div className="flex flex-col items-center justify-center lg:gap-[60px] gap-[20px] lg:mt-[120px]">
          <div className="flex lg:flex-row flex-col-reverse bg-white lg:p-[35px] p-[10px] justify-start items-center lg:gap-[60px] gap-[20px] shadow-xl rounded  hover:shadow-md transition">
            <IconCard
              generalStyles={
                "flex flex-col lg:gap-[30px] gap-[10px] lg:w-[400px]"
              }
              mainText={"Financial literacy"}
              secondaryText={
                "We translate complex financial data into clear, understandable insights, so you always know where your business stands and what decisions to make next."
              }
              mainStyles={"font-bold lg:text-[30px] text-[20px] text-[#1a1a1a]"}
              secondaryStyles={
                "lg:font-normal font-bold lg:text-[17px] text-[12px] text-[#4b5563]"
              }
            />
            <Image
              className="lg:w-[100px] w-[50px]"
              src={icon1}
              alt="Financial literacy"
            />
          </div>
          <div className="flex lg:flex-row flex-col bg-white lg:p-[35px] p-[10px] justify-end lg:text-end items-center lg:gap-[60px] gap-[20px] shadow-xl rounded hover:shadow-md transition">
            <Image
              className="lg:w-[100px] w-[50px]"
              src={icon2}
              alt="Financial clarity"
            />
            <IconCard
              generalStyles={
                "flex flex-col lg:gap-[30px] gap-[10px] lg:w-[400px]"
              }
              mainText={"Financial clarity"}
              secondaryText={
                "No jargon, no confusion. We turn your financial information into a simple, structured view that supports confident planning and growth."
              }
              mainStyles={"font-bold lg:text-[30px] text-[20px] text-[#1a1a1a]"}
              secondaryStyles={
                "lg:font-normal font-bold lg:text-[17px] text-[12px] text-[#4b5563]"
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:gap-[60px] gap-[20px]">
          <div className="flex lg:flex-row flex-col-reverse bg-white lg:p-[35px] p-[10px] justify-start items-center lg:gap-[60px] gap-[20px] shadow-xl rounded  hover:shadow-md transition">
            <IconCard
              generalStyles={
                "flex flex-col lg:gap-[30px] gap-[10px] lg:w-[400px]"
              }
              mainText={"Decision-ready insights"}
              secondaryText={
                "Your numbers are organized and explained in a way that helps you make informed decisions, not just file reports."
              }
              mainStyles={"font-bold lg:text-[30px] text-[20px] text-[#1a1a1a]"}
              secondaryStyles={
                "lg:font-normal font-bold lg:text-[17px] text-[12px] text-[#4b5563]"
              }
            />
            <Image
              className="lg:w-[100px] w-[50px]"
              src={icon3}
              alt="Decision-ready insights"
            />
          </div>
          <div className="flex lg:flex-row flex-col bg-white lg:p-[35px] p-[10px] lg:text-end items-center lg:gap-[60px] gap-[20px] shadow-xl rounded hover:shadow-md transition">
            <Image
              className="lg:w-[100px] w-[50px]"
              src={icon4}
              alt="Confidence in your numbers"
            />
            <IconCard
              generalStyles={
                "flex flex-col lg:gap-[30px] gap-[10px] lg:w-[400px]"
              }
              mainText={"Confidence in your numbers"}
              secondaryText={
                "We ensure your financial data is accurate, transparent, and easy to interpret removing uncertainty from everyday business decisions."
              }
              mainStyles={"font-bold lg:text-[30px] text-[20px] text-[#1a1a1a]"}
              secondaryStyles={
                "lg:font-normal font-bold lg:text-[17px] text-[12px] text-[#4b5563]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
