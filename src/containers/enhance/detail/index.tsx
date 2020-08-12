import React from "react";
import Detail from "../../pages/detail";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { onSimilarMNovie, onSimilarMovieReset } from "../../../redux/actions";
import ReduxState, {
  ListMovieInitialState,
} from "../../../redux/reducers/redux-state";

interface ListMovieSimilarDispatchState {
  lists: ListMovieInitialState;
}

interface MovieSimilarDipatchProps {
  onSimilarMNovie: (page: number, movie_id: number) => void;
  onSimilarMovieReset: () => void;
}

export type ListMovieSimilarPageProps = ListMovieSimilarDispatchState &
  MovieSimilarDipatchProps;

const mapStateToProps = (state: ReduxState): ListMovieSimilarDispatchState => {
  return {
    lists: state.movie,
  };
};

const mapDispatchToProps: MovieSimilarDipatchProps = {
  onSimilarMNovie,
  onSimilarMovieReset,
};

const render = (props: ListMovieSimilarPageProps) => {
  return (
    <>
      <Detail {...props} />
    </>
  );
};

const enhance = compose<React.ComponentClass>(
  // withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(render);
