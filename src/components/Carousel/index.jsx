import Image from "next/image";
import Heading from "../Heading";

export default function Carousel({ clients }) {
  return (
    <div className="overflow-hidden w-full p-[120px]">
      <Heading firstLine={""} secondLine={"Our clients"} alignment={"center"} />
      <div className="flex w-max animate-marquee gap-x-[48px]">
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={client.logo}
              alt={client.name}
              className="h-[40px] w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
