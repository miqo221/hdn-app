import DefaultLinks from "../DefaultLinks";
import Container from "../Container";
import logo from "../../assets/logo.jpeg";
import linkedinLogo from "../../assets/mediaIconsFilled/linkedin.png";
import facebookLogo from "../../assets/mediaIconsFilled/facebook.png";
import instagramLogo from "../../assets/mediaIconsFilled/instagram.png";

import {
  productLinksArray,
  companyLinksArray,
  legalLinksArray,
} from "@/constants/footerLinksData";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#fff] py-[65px] px-[10px] lg-px-[0]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-x-[180px] gap-y-[60px] justify-between">
          <div className="flex flex-col gap-y-[25px] justify-start">
            <Link className="flex items-center gap-x-[8px]" href={"/"}>
              <div className="rounded-[50px] overflow-hidden">
                <Image
                  src={logo}
                  alt="HDN Logo"
                  className="w-[50px] h-[50px]"
                ></Image>
              </div>
              <p className="font-bold text-[17px] leading-[165%] text-[#1a1a1a]">
                HDN Accounting
              </p>
            </Link>
            <p className="max-w-[300px] font-normal text-[13px] leading-[176%] text-[#6b7280]">
              Modern accounting infrastructure for the next generation of
              businesses.
            </p>
            <div className="flex gap-x-[16px]">
              <Link
                href={
                  "https://www.linkedin.com/company/hdn-accounting-group-llc/posts/?feedView=all"
                }
              >
                <Image
                  src={linkedinLogo}
                  alt="HDN Logo"
                  className="w-[32px] h-[32px] rounded-[50px] hover:scale-115 hover:shadow-xl transition duration-200"
                ></Image>
              </Link>
              <Link href={"https://www.facebook.com/"}>
                <Image
                  src={facebookLogo}
                  alt="HDN Logo"
                  className="w-[32px] h-[32px] rounded-[50px] hover:scale-115 hover:shadow-xl transition duration-200"
                ></Image>
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <Image
                  src={instagramLogo}
                  alt="HDN Logo"
                  className="w-[32px] h-[32px] rounded-[50px] hover:scale-115 hover:shadow-xl transition duration-200"
                ></Image>
              </Link>
            </div>
          </div>
          <div className="flex lg:gap-x-[150px] justify-between items-center">
            <DefaultLinks title={"Product"} linkArray={productLinksArray} />
            <DefaultLinks title={"Company"} linkArray={companyLinksArray} />
            <DefaultLinks title={"Legal"} linkArray={legalLinksArray} />
          </div>
        </div>
        <hr className="block h-px border-0 border-t border-t-gray-300 p-0 my-[33px]" />
        <div className="flex flex-col lg:flex-row gap-y-[30px] justify-between">
          <p className="font-normal text-[11px] leading-[168%] text-[#6b7280]">
            © 2026 HDN Accounting Inc. All rights reserved.
          </p>
          <div className="flex gap-x-[32px]">
            <Link
              className="font-normal text-[11px] leading-[168%] text-[#6b7280]"
              href={"/privacy"}
            >
              Privacy Policy
            </Link>
            <Link
              className="font-normal text-[11px] leading-[168%] text-[#6b7280]"
              href={"/terms"}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
