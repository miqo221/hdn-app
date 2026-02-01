export default function Heading({
  firstLine,
  secondLine,
  subTitle,
  alignment,
}) {
  return (
    <div
      className={`flex flex-col gap-y-[60px] px-[10px] lg:px-[0px] ${
        alignment === "left"
          ? "items-start text-start"
          : alignment === "right"
            ? "items-end lg:text-end"
            : "items-center text-center"
      }`}
    >
      <div>
        <h2 className="font-bold text-[40px] leading-[0.9] text-[#1a1a1a]">
          {firstLine}
        </h2>
        <br />
        <h2 className="font-bold text-[40px] leading-[0.9] text-[#9ca3af]">
          {secondLine}
        </h2>
      </div>
      <h3 className="max-w-[700px] font-[400] text-[17px]  text-[#4b5563]">
        {subTitle}
      </h3>
    </div>
  );
}
