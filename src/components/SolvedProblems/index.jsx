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
      <div className="flex justify-center gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-[60px] mt-[120px]">
          <div className="flex bg-white p-[35px] justify-start items-center gap-[60px] shadow-xl rounded  hover:shadow-md transition">
            <IconCard
              generalStyles={"flex flex-col gap-[30px] w-[400px]"}
              mainText={"Financial literacy"}
              secondaryText={
                "We translate complex financial data into clear, understandable insights, so you always know where your business stands and what decisions to make next."
              }
              mainStyles={"font-bold text-[30px] text-[#1a1a1a]"}
              secondaryStyles={"font-normal text-[17px] text-[#4b5563]"}
            />
            <Image className="w-[100px]" src={icon1} alt="Financial literacy" />
          </div>
          <div className="flex bg-white p-[35px] justify-end text-end items-center gap-[60px] shadow-xl rounded hover:shadow-md transition">
            <Image className="w-[100px]" src={icon2} alt="Financial clarity" />
            <IconCard
              generalStyles={"flex flex-col gap-[30px] w-[400px]"}
              mainText={"Financial clarity"}
              secondaryText={
                "No jargon, no confusion. We turn your financial information into a simple, structured view that supports confident planning and growth."
              }
              mainStyles={"font-bold text-[30px] text-[#1a1a1a]"}
              secondaryStyles={"font-normal text-[17px] text-[#4b5563]"}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[60px]">
          <div className="flex bg-white p-[35px] justify-start items-center gap-[60px] shadow-xl rounded  hover:shadow-md transition">
            <IconCard
              generalStyles={"flex flex-col gap-[30px] w-[400px]"}
              mainText={"Decision-ready insights"}
              secondaryText={
                "Your numbers are organized and explained in a way that helps you make informed decisions, not just file reports."
              }
              mainStyles={"font-bold text-[30px] text-[#1a1a1a]"}
              secondaryStyles={"font-normal text-[17px] text-[#4b5563]"}
            />
            <Image
              className="w-[100px]"
              src={icon3}
              alt="Decision-ready insights"
            />
          </div>
          <div className="flex bg-white p-[35px] text-end items-center gap-[60px] shadow-xl rounded hover:shadow-md transition">
            <Image
              className="w-[100px]"
              src={icon4}
              alt="Confidence in your numbers"
            />
            <IconCard
              generalStyles={"flex flex-col gap-[30px] w-[400px]"}
              mainText={"Confidence in your numbers"}
              secondaryText={
                "We ensure your financial data is accurate, transparent, and easy to interpret — removing uncertainty from everyday business decisions."
              }
              mainStyles={"font-bold text-[30px] text-[#1a1a1a]"}
              secondaryStyles={"font-normal text-[17px] text-[#4b5563]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
