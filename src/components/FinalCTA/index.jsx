import CallToAction from "../CallToAction";
import Container from "../Container";
import Heading from "../Heading";

export default function FinalCTA() {
  return (
    <section className="bg-[#000] py-[120px] px-[10px] lg:px-0">
      <Container>
        <div className="flex flex-col gap-y-[40px]">
          <Heading
            secondLine={"Ready for clarity?"}
            subTitle={
              "Start your 14-day free trial today. No credit card required. Cancel anytime."
            }
            alignment={"Center"}
          />
          <CallToAction />
        </div>
      </Container>
    </section>
  );
}
