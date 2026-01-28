import Link from "next/link";

export default function DefaultLinks({ title, linkArray }) {
  return (
    <div className="flex flex-col items-start gap-y-[24px]">
      <h3 className="font-bold text-[13px] leading-[176%] text-[#1a1a1a] cursor-default">
        {title}
      </h3>
      <div className="flex flex-col items-start gap-y-[16px]">
        {linkArray.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.path}
              className="font-normal text-[11px] leading-[168%] text-[#4b5563] hover:scale-105 hover:text-[#1a1a1a] transition duration-200"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
