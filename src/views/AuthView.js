import React, { Component } from 'react';

export default class AuthView extends Component {
  render() {
    return  (
      <form>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <button className="button">Validate</button>
      </form>
    )
  }
}
