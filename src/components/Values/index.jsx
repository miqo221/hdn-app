import valuesData from "@/constants/valuesData";
import Heading from "../Heading";
import IconCard from "../IconCard";

export default function Values() {
  return (
    <div className="my-[120px]">
      <Heading
        firstLine={"Our"}
        secondLine={"values"}
        alignment={"left"}
        subTitle={
          "Our values define how we work, how we communicate, and how we protect our clients’ interests. They guide every financial decision we make and ensure that our services are built on trust, precision, and long-term collaboration."
        }
      />
      <div className="flex mt-[120px] gap-[48px] w-full">
        {valuesData &&
          valuesData.map((elm, index) => {
            return (
              <IconCard
                key={index}
                generalStyles="flex flex-col flex-1 bg-white p-[35px] justify-center items-center gap-[60px] shadow-xl rounded hover:shadow-md transition"
                source={elm.image}
                altText={elm.title}
                mainText={elm.title}
                secondaryText={elm.description}
                mainStyles={elm.titleStyles}
                secondaryStyles={elm.descriptionStyles}
                imgStyles={elm.imageStyles}
              />
            );
          })}
      </div>
    </div>
  );
}
