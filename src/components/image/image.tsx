import React from "react";
import { image_url } from "../../config";

interface Props {
  path?: string;
  rounded?: string;
}

const Image = ({ path, rounded = "rounded" }: Props) => {
  return (
    <img
      className={`img-fluid img-custom img-custom-zoom ${rounded}`}
      src={
        path
          ? `${image_url}${path}`
          : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
      }
      alt="movie"
    />
  );
};

export default Image;
