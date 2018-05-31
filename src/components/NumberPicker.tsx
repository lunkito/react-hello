import * as React from 'react';

interface NumberPickerState {
  counter: number;
}

interface NumberPickProp {
  value?: number;
  max?: number;
  min?: number;
}

export default class NumberPicker extends React.Component<NumberPickProp, NumberPickerState> {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.value || 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  incrementCounter() {
    if (this.props.max === undefined || this.state.counter < this.props.max) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }
  decreaseCounter() {
    if (this.props.min === undefined || this.state.counter > this.props.min) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return <div>
      <button className='plus' onClick={this.incrementCounter}>+</button>
      <div className='result'>{this.state.counter}</div>
      <button className='minus' onClick={this.decreaseCounter}>-</button>
    </div>;
  }
}