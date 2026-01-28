import Image from "next/image";
import Link from "next/link";

export default function IconCard({
  generalStyles,
  source,
  altText,
  mainText,
  secondaryText,
  mainStyles,
  secondaryStyles,
  imgStyles,
  extraText,
  extraDesctiption,
  extraTextStyles,
  extraDesctiptionStyles,
  socialLinksArray,
}) {
  return (
    <div className={`${generalStyles}`}>
      {source && (
        <Image src={source} alt={altText || "Icon"} className={imgStyles} />
      )}
      <h4 className={`${mainStyles}`}>{mainText}</h4>
      <p className={`${secondaryStyles}`}>{secondaryText}</p>
      {extraText && (
        <div>
          <p className={`${extraTextStyles}`}>{extraText}</p>
          <p className={`${extraDesctiptionStyles}`}>{extraDesctiption}</p>
        </div>
      )}
      {socialLinksArray && (
        <div className="flex gap-x-[16px]">
          {socialLinksArray.map((element, index) => {
            return (
              <Link href={element.href} key={index}>
                <Image
                  src={element.icon}
                  alt={element.alt}
                  className="w-[32px] h-[32px] hover:scale-115 hover:shadow-xl transition duration-200"
                ></Image>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
