import React from "react";

const Empty = () => {
  return (
    <div className="text-center opacity-custom col">
      <img
        src={require("../../assets/svg/image.svg")}
        width="70"
        height="70"
        alt="Movie"
      />
    </div>
  );
};

export default Empty;
