import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import newMovieControlled from './pages/NewMovieControlled';
import newMovieUncontrolled from './pages/NewMovieUncontrolled';

// REDUX ---------------------------------------------
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { AppState } from './reducers';
import { decrementCounter, incrementCounter } from './actions';

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);

function increment() {
  store.dispatch(incrementCounter(1));
}

function decrement() {
  store.dispatch(decrementCounter(1));
}

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <Router>
        <div>
          <Header/>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/newMovieControlled' component={newMovieControlled}/>
          <Route path='/newMovieUncontrolled' component={newMovieUncontrolled}/>
        </div>
      </Router>
    </Provider>;
  }
}