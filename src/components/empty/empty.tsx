import React from "react";

const Empty = () => {
  return (
    <div className="text-center opacity-custom mt-3">
      <img
        src={require("../../assets/svg/image.svg")}
        width="100"
        height="100"
      />
      <h3>Not Available :(</h3>
    </div>
  );
};

export default Empty;
