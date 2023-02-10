import * as React from 'react';
import './style.scss';
import { ComponentCreator } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <h1>This site</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        <label htmlFor="username">UserName</label>
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div className="row">
        <button className="primary">Sign Up</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}
