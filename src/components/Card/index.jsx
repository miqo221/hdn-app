import React from "react";

const Card = ({ text, value, styles, titleStyles, descriptionStyles }) => {
  return (
    <div
      className={`${styles}`}
    >
      <h2 className={`${titleStyles}`}>{text}</h2>
      <h3 className={`${descriptionStyles}`}>{value}</h3>
    </div>
  );
};

export default Card;
