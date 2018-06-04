import * as React from 'react';
import { Link } from 'react-router-dom';

interface NewMovieStates {
  name: string;
}

export default class NewMovieControlled extends React.Component<{}, NewMovieStates> {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Creando nueva peli: ${this.state.name}`);
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
      </form>
    </div>;
  }
}