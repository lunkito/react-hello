import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './containers/Footer';

// MOBX ---------------------------------------------
import { Provider } from 'mobx-react';
import stores from './stores';

function increment() {
  stores.counterStore.increment(1);
}

function decrement() {
  stores.counterStore.decrement(1);
}

export default class App extends React.Component {
  render() {
    return <Provider {...stores}>
      <Router>
        <div>
          <Header/>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Footer />
        </div>
      </Router>
    </Provider>;
  }
}