import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../reducers';
import { incrementCounter } from '../actions';
import { connect } from 'react-redux';

export interface HeaderProps {
  counter: number;
  incrementCounter?: (value: number) => {};
  decrementCounter?: (value: number) => {};
}

const mapStateToProps = (state: AppState) => {
  return { counter: state.counter.value };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: (value: number) => dispatch(incrementCounter(value)),
  decrementCounter: (value: number) => dispatch(incrementCounter(value))
});

class Header extends React.Component<HeaderProps, {}> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.incrementCounter(2);
  }
  decrement() {
    this.props.decrementCounter(2);
  }

  render() {
    return <ul>
      <li>Number of movies: {this.props.counter}</li>
      <li><button onClick={this.increment}>+</button></li>
      <li><button onClick={this.decrement}>-</button></li>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/movies'>Movies</Link></li>
      <li><Link to='/newMovieUncontrolled'>New Movie Uncontrolled</Link></li>
      <li><Link to='/newMovieControlled'>New Movie Controlled</Link></li>
    </ul>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);