import React, { Component } from 'react';

export default class AuthView extends Component {
  render() {
    return  (
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
    )
  }
}
