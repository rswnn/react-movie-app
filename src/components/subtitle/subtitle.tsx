import React from "react";

interface Props {
  title: string;
}

const Subtitle = ({ title }: Props) => {
  return <h2 className="mt-5 font-weight-bold">{title}</h2>;
};

export default Subtitle;
