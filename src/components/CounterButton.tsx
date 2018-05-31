import * as React from 'react';

export interface CounterButtonState {
  numberOfClicks: number;
}

export default class CounterButton extends React.Component<{}, CounterButtonState> {
  constructor(props) {
    super(props);

    // Unico momento en el que no se hace setState, en el constructor
    this.state = {
      numberOfClicks: 0
    };

    // this.incrementCount El this se refiere al Counterbutton
    // Cuando hace click, el this de la funcion se refiere al boton html, no al Counterbutton => Peta

    // this.incrementCount.bind(this). el this de bind(this) se refiere al Componente ya que no se ha terminado el constructor => no hay <button>
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    return <button onClick={this.incrementCount}>{this.state.numberOfClicks}</button>;
  }
}