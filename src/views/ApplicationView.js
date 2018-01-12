import React, { Component } from 'react';

import AuthContainer from '../containers/AuthContainer.js';
import AccountContainer from '../containers/AccountContainer.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ApplicationView extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">

          <Link to="/auth">Auth</Link>
          <Link to="/account">Account</Link>

          <h1>app</h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <Router>
            <section>
              <Route path="/auth" component={AuthContainer} />
              <Route path="/account" component={AccountContainer} />
            </section>
          </Router>

        </div>
      </div>
    );
  }
}
