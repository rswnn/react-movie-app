import React, { useEffect, useState } from "react";
import { ListMoviePageProps } from "../../enhance/dashboard";
import useInfiniteScroll from "../../../components/infinite-scroll/use-infinite-scroll";
import { ResultEntity } from "../../../redux/reducers/movie/list";
import { useHistory } from "react-router-dom";
import { usePage } from "../../../context/context";

import Image from "../../../components/image/image";
import Card from "../../../components/card/card";
import Container from "../../../components/container/container";
import Subtitle from "../../../components/subtitle/subtitle";

const Index = ({ lists, onNowPlayingMovie }: ListMoviePageProps) => {
  const { item, setItem, setPageContext, pageContext } = usePage();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [page, setPage] = useState(1);
  const { results } = lists.lists;
  const { total_pages } = lists.lists;
  let history = useHistory();
  useEffect(() => {
    let init = pageContext === 1 ? 1 : pageContext + 1;
    onNowPlayingMovie(init);
    setPageContext(init);
  }, []);

  useEffect(() => {
    setItem((prevState: ResultEntity[]) => {
      if (prevState !== results) {
        return [...prevState, ...results];
      } else return prevState;
    });
  }, [results]);

  function fetchMoreListItems() {
    let increment;
    if (pageContext <= total_pages) {
      increment = pageContext + 1;
      setPageContext(increment);
      onNowPlayingMovie(increment);
      setPage(increment);
    }
    setIsFetching(false);
  }

  function handleClick(data: ResultEntity) {
    history.push({
      pathname: "/detail",
      state: data,
    });
  }

  console.log(item);

  return (
    <>
      <Container>
        <Subtitle title="Now Playing" />
        <div className="row">
          {results &&
            item?.map(
              (
                res: ResultEntity,
                index: string | number | null | undefined
              ) => (
                <div
                  className="col-md-3"
                  key={index}
                  onClick={() => handleClick(res)}
                >
                  <Card
                    title={res.title}
                    desc={res.overview}
                    date={res.release_date}
                  >
                    <Image path={res.poster_path} rounded="rounded-top" />
                  </Card>
                </div>
              )
            )}
        </div>
      </Container>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default Index;
