import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { CounterStore } from '../stores/CounterStore';

export interface FooterProps {
  counterStore?: CounterStore;
}

@inject('counterStore')
@observer
export default class Footer extends React.Component<FooterProps, {}> {
  render() {
    return <footer>
      <div>{this.props.counterStore.counter}</div>
    </footer>;
  }
}
