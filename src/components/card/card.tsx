import React, { ReactNode } from "react";
import { trimOn } from "../../helper/trim-string";

type Props = {
  children: ReactNode;
  title: string;
  desc: string;
  date: string;
};

const Card = ({ children, title, date }: Props) => {
  return (
    <div className="shadow card mt-3 mb-3 rounded">
      {children}
      <div className="card-body">
        <h5 className="card-title">{trimOn(title, 15)}</h5>
        <span className="card-text">{date}</span>
      </div>
    </div>
  );
};

export default Card;
