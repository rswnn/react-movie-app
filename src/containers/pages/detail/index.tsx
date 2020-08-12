import React, { useEffect, useState } from "react";
import { ListMoviePageProps } from "../../enhance/dashboard";
import { ResultEntity } from "../../../redux/reducers/movie/list";
import { useLocation } from "react-router-dom";

import Image from "../../../components/image/image";
import Card from "../../../components/card/card";
import Container from "../../../components/container/container";
import Subtitle from "../../../components/subtitle/subtitle";
import useInfiniteScroll from "../../../components/infinite-scroll/use-infinite-scroll";
import Banner from "../../../components/banner/banner";

interface Location {
  state: ResultEntity;
}

const Index = ({ lists, onNowPlayingMovie }: ListMoviePageProps) => {
  let location: Location = useLocation();
  const [detail, setDetail] = useState<ResultEntity>();
  const [item, setItem] = useState<ResultEntity[]>([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [page, setPage] = useState(1);
  const { results } = lists.lists;
  const { total_pages } = lists.lists;
  useEffect(() => {
    setDetail(location.state);
  }, []);

  useEffect(() => {
    setItem((prevState) => {
      return [...prevState, ...results];
    });
  }, [results]);

  function fetchMoreListItems() {
    let increment;
    if (!lists.lists.loading) {
      if (page <= total_pages) {
        increment = page + 1;
        onNowPlayingMovie(increment);
        setIsFetching(false);
        setPage(increment);
      }
    }
  }

  return (
    <>
      <Banner detail={detail && detail} />
      <Container>
        <Subtitle title="Similar Movie" />
        {/* <div className="row">
        {results &&
          item?.map((res, index) => (
            <div
              className="col-md-3"
              key={index}
              onClick={() => alert(res.title)}
            >
              <Card title={res.title} desc={res.overview}>
                <Image path={res.poster_path} />
              </Card>
            </div>
          ))}
        {lists.lists.loading && "Fetching more list items..."}
      </div> */}
      </Container>
    </>
  );
};

export default Index;
