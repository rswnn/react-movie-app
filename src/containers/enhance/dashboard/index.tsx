import React from "react";
import Dashboard from "../../pages/dashboard";
import { connect } from "react-redux";
import { compose } from "redux";
import { onNowPlayingMovie } from "../../../redux/actions";
import ReduxState, {
  ListMovieInitialState,
} from "../../../redux/reducers/redux-state";

interface ListMovieDispatchState {
  lists: ListMovieInitialState;
}

interface ProductDispatchProps {
  onNowPlayingMovie: (page: number) => void;
}

export type ListMoviePageProps = ListMovieDispatchState & ProductDispatchProps;

const mapStateToProps = (state: ReduxState): ListMovieDispatchState => {
  return {
    lists: state.movie,
  };
};

const mapDispatchToProps: ProductDispatchProps = {
  onNowPlayingMovie,
};

const render = (props: ListMoviePageProps) => {
  return (
    <>
      <Dashboard {...props} />
    </>
  );
};

const enhance = compose<React.ComponentClass>(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(render);
