"use client";

import Image from "next/image";

export default function Button({
  styles,
  buttonText,
  btnImage,
  imageAlt,
  handleClick,
}) {
  return (
    <button className={`${styles} cursor-pointer`} onClick={handleClick}>
      {btnImage ? (
        <div>
          <Image src={btnImage} alt={imageAlt} />
          {buttonText}
        </div>
      ) : (
        buttonText
      )}
    </button>
  );
}
