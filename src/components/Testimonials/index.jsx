import testimonialsData from "@/constants/testimonialsData";
import Heading from "../Heading";
import Container from "../Container";
import IconCard from "../IconCard";

export default function Testimonials() {
  return (
    <div className="bg-[#fff] py-[120px]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-[60px]">
          <Heading
            firstLine={"Trusted by data-driven"}
            secondLine={"teams."}
            subTitle={
              "Join the companies that have switched to Ledger for precision accounting."
            }
            alignment={"left"}
          />
          <div className="flex flex-col gap-[32px] px-[10px] lg:px-[0px]">
            {testimonialsData.map((elm) => {
              return (
                <IconCard
                  key={elm.author}
                  generalStyles={
                    "flex flex-col bg-[#f8fafc] border border-gray-100 rounded-xl p-[10px] lg:p-[33px] cursor-default hover:shadow-xl transition duration-600"
                  }
                  source={elm.image}
                  altText={elm.alt}
                  mainText={elm.title}
                  secondaryText={elm.description}
                  mainStyles={elm.titleStyle}
                  secondaryStyles={elm.descriptionStyle}
                  imgStyles={elm.imgStyle}
                  extraText={elm.author}
                  extraDesctiption={elm.position}
                  extraTextStyles={elm.authorStyles}
                  extraDesctiptionStyles={elm.positionStyles}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
