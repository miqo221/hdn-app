import IconCard from "../IconCard";
import Heading from "../Heading";
import teamData from "@/constants/teamData";
import Container from "../Container";

export default function TeamSection() {
  return (
    <div className="py-[120px] bg-[#fff]">
      <Container>
        <div className="flex flex-row-reverse justify-between items-center ">
          <Heading
            firstLine={"Our team of"}
            secondLine={"dedicated professionals"}
            alignment={"right"}
          />
          <div className="flex items-start flex-wrap gap-[50px] max-w-[50%]">
            {teamData.map((person, index) => {
              return (
                <IconCard
                  key={index}
                  generalStyles={
                    "flex flex-col gap-y-[25px] hover:scale-105 transition duration-600"
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
