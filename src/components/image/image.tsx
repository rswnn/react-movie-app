import React from "react";
import { image_url } from "../../config";

interface Props {
  path?: string;
  rounded: string;
}

const Image = ({ path, rounded = "" }: Props) => {
  return (
    <img
      className={`img-fluid img-custom img-custom-zoom ${rounded}`}
      src={
        path
          ? `${image_url}${path}`
          : "https://www.kindpng.com/picc/m/607-6077088_movie-clipart-film-showing-acting-clipart-hd-png.png"
      }
    />
  );
};

export default Image;
