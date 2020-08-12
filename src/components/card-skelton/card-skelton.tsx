import React, { useEffect, useState } from "react";

interface Props {
  array: number;
}

const CardSkelton = ({ array }: Props) => {
  var randoms = [...Array(array)].map(() => Math.floor(Math.random() * 9));
  return (
    <>
      {randoms &&
        randoms.map((res, index) => (
          <div className="col-md-3 mt-3 mb-3" key={index}>
            <div className={`card skelton`}>
              <div className="img-custom" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <span className="card-text"></span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardSkelton;
