import * as React from 'react';
import { MoviesStore } from '../stores/MoviesStore';
import { inject, observer } from 'mobx-react';

export interface MoviesProps {
  moviesStore?: MoviesStore;
}

@inject('moviesStore')
@observer
export default class Movies extends React.Component<MoviesProps, {}> {
  componentDidMount() {
    this.props.moviesStore.loadAll();
  }

  render() {
    const { movies } = this.props.moviesStore;
    return <React.Fragment>
      <p>movies</p>
      <ul>
        {movies && movies.map(movie => <li key={movie._id}>{movie.name}</li>)}
      </ul>
    </React.Fragment>;
  }
}