import Image from "next/image";

export default function UpdateLine({ icon, text, bgColor, textColor, altText }) {
  return (
    <div className="flex justify-center mt-[64px] mb-[32px] cursor-default">
      <div
        style={{ backgroundColor: bgColor }}
        className="flex justify-center items-center gap-[12px] py-[4px] px-[12px] rounded-full"
      >
        <Image src={icon} alt={altText} className="w-[16px]"></Image>
        <p 
        style={{ color: textColor }}
        className="font-bold text-[10px] leading-[157%] uppercase">
          {text}
        </p>
      </div>
    </div>
  );
}
