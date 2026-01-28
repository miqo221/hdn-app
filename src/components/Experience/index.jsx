"use client";

import Card from "../Card";
import experienceData from "@/constants/experienceData";

export default function Experience() {
  return (
    <div>
      <div className="flex justify-center gap-x-[24px]">
        {experienceData.map((item) => {
          return (
            <Card
              key={item.title}
              text={item.title}
              value={item.value}
              styles={
                "cursor-default my-[80px] border border-gray-100/50 hover:shadow-md transition duration-300 bg-white shadow-sm rounded-lg p-6 w-[300px]"
              }
              titleStyles={
                "font-medium text-[11px] leading-[168%] text-gray-500"
              }
              descriptionStyles={
                "font-medium text-[25px] leading-[141%] text-[#1a1a1a]"
              }
            />
          );
        })}
      </div>
      <hr className="block h-px border-0 border-t border-t-gray-300 p-0" />
      <p className="font-normal text-[11px] leading-[168%] text-center text-[#6b7280] my-[80px]">
        Trusted by forward-thinking companies in Armenia
      </p>
    </div>
  );
}
