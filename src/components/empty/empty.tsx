import React from "react";

interface Props {
  message?: string;
}

const Empty = ({ message = "" }: Props) => {
  return (
    <div className="text-center opacity-custom mt-3">
      <img
        src={require("../../assets/svg/image.svg")}
        width="100"
        height="100"
        alt="Movie"
      />
      <h3>{message}</h3>
    </div>
  );
};

export default Empty;
