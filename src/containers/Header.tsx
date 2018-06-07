import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { CounterStore } from '../stores/CounterStore';

export interface HeaderProps {
  counterStore?: CounterStore;
}

// El store se mete dentro del componente como propiedad
@inject('counterStore')
// La clase tiene que estar pendiente del store
@observer

export default class Header extends React.Component<HeaderProps, {}> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.counterStore.increment(2);
  }
  decrement() {
    this.props.counterStore.decrement(2);
  }

  render() {
    return <ul>
      <li>Number of movies: {this.props.counterStore.counter}</li>
      <li><button onClick={this.increment}>+</button></li>
      <li><button onClick={this.decrement}>-</button></li>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/movies'>Movies</Link></li>
    </ul>;
  }
}