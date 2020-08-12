import React, { useEffect, useState } from "react";
import { ListMoviePageProps } from "../../enhance/dashboard";
import useInfiniteScroll from "../../../utils/infinite-scroll/use-infinite-scroll";
import { ResultEntity } from "../../../redux/reducers/movie/list";
import { useHistory } from "react-router-dom";
import { usePage } from "../../../context/context";

import Image from "../../../components/image/image";
import Card from "../../../components/card/card";
import Container from "../../../components/container/container";
import Subtitle from "../../../components/subtitle/subtitle";
import CardSkelton from "../../../components/card-skelton/card-skelton";

const { width } = window.screen;

const Index = ({ lists, onNowPlayingMovie }: ListMoviePageProps) => {
  const {
    item,
    setItem,
    setPageContext,
    pageContext,
    oldPage,
    setOldPage,
  } = usePage();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const { results } = lists.lists;
  const { total_pages } = lists.lists;
  let history = useHistory();
  useEffect(() => {
    if (item.length === 0) {
      onNowPlayingMovie(pageContext);
      setPageContext(pageContext + 1);
    }
  }, []);

  useEffect(() => {
    if (results) {
      if (oldPage !== pageContext) {
        setItem((prevState: ResultEntity[]) => {
          if (prevState !== results) {
            return [...prevState, ...results];
          } else return prevState;
        });
      }
    }
  }, [results]);

  function fetchMoreListItems() {
    if (pageContext <= total_pages) {
      onNowPlayingMovie(pageContext);
      setPageContext(pageContext + 1);
    }
    setIsFetching(false);
  }

  function handleClick(data: ResultEntity) {
    history.push({
      pathname: `/detail/${data.id}`,
      state: data,
    });
    setOldPage(pageContext);
  }

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
                    shadow
                    zoom
                  >
                    <Image path={res.poster_path} rounded="rounded-top" />
                  </Card>
                </div>
              )
            )}
        </div>
        <div className="row">
          {isFetching && item.length !== 0 ? (
            <CardSkelton array={width >= 768 ? 4 : 1} />
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};

export default Index;
