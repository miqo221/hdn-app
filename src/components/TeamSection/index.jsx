import IconCard from "../IconCard";
import Heading from "../Heading";
import teamData from "@/constants/teamData";
import Container from "../Container";

export default function TeamSection() {
  return (
    <div className="py-[120px] bg-[#fff]">
      <Container>
        <div className="flex lg:flex-row-reverse flex-col justify-between items-center ">
          <Heading
            firstLine={"Our team of"}
            secondLine={"dedicated professionals"}
            alignment={"right"}
          />
          <div className="flex lg:items-start justify-center flex-wrap lg:gap-[50px] gap-[10px] lg:max-w-[50%]">
            {teamData.map((person, index) => {
              return (
                <IconCard
                  key={index}
                  generalStyles={
                    "flex flex-col lg:gap-y-[25px] gap-y-[10px] hover:scale-105 transition duration-600 max-w-[120px] lg:max-w-none"
                  }
                  source={person.image}
                  mainText={person.title}
                  secondaryText={person.description}
                  mainStyles={person.titleStyle}
                  secondaryStyles={person.descriptionStyle}
                  imgStyles={person.imgStyle}
                  socialLinksArray={person.socialMediaLinks}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
