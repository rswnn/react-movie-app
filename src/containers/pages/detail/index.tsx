import React, { useEffect, useState } from "react";
import { ListMovieSimilarPageProps } from "../../enhance/detail";
import { ResultEntity } from "../../../redux/reducers/movie/list";
import { useLocation } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

import Image from "../../../components/image/image";
import Card from "../../../components/card/card";
import Container from "../../../components/container/container";
import Subtitle from "../../../components/subtitle/subtitle";
import useInfiniteScroll from "../../../utils/infinite-scroll/use-infinite-scroll";
import Banner from "../../../components/banner/banner";
import CardSkelton from "../../../components/card-skelton/card-skelton";

const { width } = window.screen;
interface Location {
  state: ResultEntity;
}

const Index = ({
  lists,
  onSimilarMNovie,
  onSimilarMovieReset,
}: ListMovieSimilarPageProps) => {
  const { id } = useParams();
  let history = useHistory();
  let location: Location = useLocation();
  const [item, setItem] = useState<ResultEntity[]>([]);
  const [page, setPage] = React.useState<number>();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const { results } = lists.movie_similar;
  const { total_pages } = lists.movie_similar;
  const detail = location.state;

  useEffect(() => {
    if (detail) {
      onSimilarMNovie(1, id);
      setPage(1);
    }
    return () => {
      setItem([]);
      onSimilarMovieReset();
    };
  }, [detail]);

  useEffect(() => {
    setItem((prevState: ResultEntity[]) => {
      return [...prevState, ...results];
    });
  }, [results]);

  function fetchMoreListItems() {
    if (page) {
      if (page <= total_pages) {
        console.log(total_pages);
        if (detail) {
          onSimilarMNovie(page + 1, id);
        }
        setPage(page + 1);
      }
    }
    setIsFetching(false);
  }

  const handleClick = (data: ResultEntity) => {
    history.push({
      pathname: `/detail/${data.id}`,
      state: data,
    });
  };

  return (
    <>
      <Banner detail={detail && detail} />
      {detail && (
        <Container>
          {item.length > 0 && <Subtitle title="Similar Movie" />}
          <div className="row">
            {results &&
              item?.map((res: ResultEntity, index: number) => (
                <div
                  className="col-md-3"
                  key={index}
                  onClick={() => handleClick(res)}
                >
                  <Card
                    title={res.title}
                    desc={res.overview}
                    date={res.release_date}
                    shadow
                    zoom
                  >
                    <Image path={res.poster_path} rounded="rounded" />
                  </Card>
                </div>
              ))}
          </div>
          <div className="row">
            {isFetching && item.length !== 0 ? (
              <CardSkelton array={width >= 768 ? 4 : 1} />
            ) : (
              ""
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Index;
