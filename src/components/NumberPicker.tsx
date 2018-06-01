import * as React from 'react';
import * as styles from './numberPicker.css';

interface NumberPickerState {
  counter: number;
}

interface NumberPickProp {
  value?: number;
  max?: number;
  min?: number;
}

const numberPickerStyle: React.CSSProperties = {
  display: 'flex'
};

const buttonStyle: React.CSSProperties = {
  background: 'red',
  width: '40px',
  height: '40px',
  color: 'white',
  border: '1px solid #f33',
  borderRadius: '50%',
  margin: '10px',
  outline: 'none'
};

const divStyle: React.CSSProperties = {
  lineHeight: '60px'
};

export default class NumberPicker extends React.Component<NumberPickProp, NumberPickerState> {
  constructor(props) {
    super(props);
    this.checkInitialValues(props);

    this.state = {
      counter: this.props.value || 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  checkInitialValues(props: NumberPickProp) {
    if (props.value > props.max || props.value < props.min) {
      throw new Error();
    }
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
    return <div style={numberPickerStyle} className={styles.container}>
      <button style={buttonStyle} onClick={this.decreaseCounter}>-</button>
      <div style={divStyle}>{this.state.counter}</div>
      <button style={buttonStyle} onClick={this.incrementCounter}>+</button>
    </div>;
  }
}