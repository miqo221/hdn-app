export default function Hero({ pageDescription }) {
  return (
    <div>
      <h2 className="font-bold text-[40px] leading-[1.18] text-center text-[#1a1a1a] m-[32px]">
        We handle the <span className="text-[#4A90E2]">numbers</span>, so you
        can focus on <span className="text-[#4A90E2]">growth</span>
      </h2>
      <h3 className="font-normal text-[17px] leading-[1.48] text-center text-[#4b5563] my-[40px]">
        {pageDescription}
      </h3>
    </div>
  );
}
