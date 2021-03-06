import React, { ReactNode } from "react";
import { trimOn } from "../../helper/trim-string";

type Props = {
  children: ReactNode;
  title: string;
  desc: string;
  date: string;
  shadow?: boolean | false;
  zoom?: boolean | false;
};

const Card = ({
  children,
  title,
  date,
  shadow = false,
  zoom = false,
}: Props) => {
  return (
    <div
      className={`card mt-3 mb-3 rounded ${shadow && "card_shadow"} ${
        zoom && "card_zoom"
      }`}
    >
      {children}
      <div className="card-body">
        <h5 className="card-title">{trimOn(title, 15)}</h5>
        <span className="card-text">{date}</span>
      </div>
    </div>
  );
};

export default Card;
