import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">sanctucompu</h1>
        <Link to="/" className='button'>Home</Link>
        <Link to="/auth" className='button'>Login</Link>
        <Link to="/profile" className='button'>Account</Link>
      </div>
    </div>
  </section>
);
