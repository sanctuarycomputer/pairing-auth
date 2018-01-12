import React, { Component } from 'react';

// Routing
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer.js';
import AuthContainer from './containers/AuthContainer.js';
import AccountContainer from './containers/AccountContainer.js';

// Components
import Header from './components/Header';

// Redux
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reducers from './state/reducers';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware, promiseMiddleware()];

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(...middlewares)),
);

// App
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <main className='container'>
            <Header />
            <section>
              <Route path="/" component={HomeContainer} exact />
              <Route path="/auth" component={AuthContainer} />
              <Route path="/profile" component={AccountContainer} />
            </section>
          </main>
        </Router>
      </Provider>
    );
  }
}
