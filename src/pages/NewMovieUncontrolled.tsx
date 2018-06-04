import * as React from 'react';
import { Link } from 'react-router-dom';

export default class NewMovieControlled extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  input: HTMLInputElement;

  handleSubmit(event) {
    event.preventDefault();
    alert(`Creando nueva peli: ${this.input.value}`);
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input ref={inputComponent => this.input = inputComponent} type='text' name='name'/>
      </form>
    </div>;
  }
}