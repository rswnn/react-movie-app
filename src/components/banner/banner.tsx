import React from "react";
import { ResultEntity } from "../../redux/reducers/movie/list";
import { image_url } from "../../config";
import Image from "../image/image";

interface Props {
  detail?: ResultEntity;
}

const Banner = ({ detail }: Props) => {
  const tempYear: any = detail && detail?.release_date;
  const year = new Date(tempYear).getFullYear();
  return (
    <div className="pt-5">
      <div
        className="banner_height"
        style={{
          backgroundImage: detail
            ? `url(${image_url}${detail?.backdrop_path})`
            : "none",
        }}
      >
        <div className="w-100" />
        <div className="banner_bg-img">
          <div className="d-flex ml-5">
            <Image path={detail?.poster_path} rounded="rounded" />
            <div className="text-light pt-5 pl-4">
              <h2 className="font-weight-bold">{detail?.title}</h2>
              <p>{year}</p>
              <div className="banner_overview">
                <h3 className="font-weight-bold">Overview</h3>
                <p>{detail?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
