import { ToastContainer, toast } from "react-toastify";
import Heading from "@/components/Heading";
import contactInfo from "@/constants/contactInfo";
import IconCard from "@/components/IconCard";
import Button from "@/components/Button";
import copyIcon from "../../assets/copy.png";
import Container from "../Container";

export default function Contacts() {
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="bg-[#fff] py-[120px]">
      <Container>
        <Heading
          firstLine={"Get in touch"}
          secondLine={"with our team."}
          subTitle={
            "We’re here to answer your questions and support your business."
          }
          alignment={"left"}
        />
        <div className="my-[80px] flex items-center justify-between gap-[16px]">
          {contactInfo.map((elm, index) => {
            return (
              <div className="flex-1 relative" key={index}>
                <IconCard
                  generalStyles={
                    "p-[24px] border border-[#dadee7] rounded-[16px] bg-white shadow-md flex flex-col items-start gap-[10px]"
                  }
                  mainText={elm.name}
                  mainStyles={
                    "capitalize font-medium text-[11px] leading-[168%] text-gray-500"
                  }
                  secondaryText={elm.value}
                  secondaryStyles={
                    "font-medium text-[20px] leading-[141%] text-[#1a1a1a]"
                  }
                  source={elm.icon}
                  extraText={"Tip: tap the action for a quick shortcut"}
                  extraTextStyles={
                    "font-normal text-[12px] leading-[133%] text-[#636b7e] mt-[36px]"
                  }
                />
                <div className="absolute flex items-center gap-[8px] top-[24px] right-[24px]">
                  {elm.name === "address" ? (
                    <a
                      target="blank"
                      href="https://maps.app.goo.gl/bxyDfo5szCvLkr446"
                      className="cursor-pointer border border-black/10 rounded-[20px] w-[56px] h-[32px] shadow-sm bg-transparent font-medium text-xs text-[#171c26] flex items-center justify-center hover:bg-[#000] hover:text-[#fff] transition duration-300"
                    >
                      Open
                    </a>
                  ) : elm.name === "email" ? (
                    <a
                      href="mailto:office.hdngroup@gmail.com"
                      className="border border-[#4A90E2] bg-[#4A90E2] rounded-[20px] shadow-lg w-[54px] h-[32px] font-medium text-xs text-white flex items-center justify-center hover:bg-[#fff] hover:text-[#4A90E2] transition duration-300"
                    >
                      Send
                    </a>
                  ) : elm.name === "phone" ? (
                    <a
                      href="tel:+37433055202"
                      className="border border-[#4A90E2] bg-[#4A90E2] rounded-[20px] shadow-lg w-[54px] h-[32px] font-medium text-xs text-white flex items-center justify-center hover:bg-[#fff] hover:text-[#4A90E2] transition duration-300"
                    >
                      Call
                    </a>
                  ) : null}
                  <Button
                    btnImage={copyIcon}
                    imageAlt={"Copy icon"}
                    styles={
                      "border border-black/10 rounded-[20px] w-[36px] h-[36px] shadow-sm bg-transparent rounded-[20px] w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-200 transition duration-300"
                    }
                    handleClick={() => handleCopy(elm.value)}
                  />
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
