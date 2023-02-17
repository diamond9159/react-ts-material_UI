import * as React from 'react';
import './style.scss';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <h1>This site</h1>
    </div>
  );
}

function Login() {
  const date = new Date('2022-12-07T16:02:58Z');
  date.setDate(date.getDate() + 71);
  const today = new Date(Date.now());
  if (date < today) {
    console.log({ date });
    console.log('expired');
  }

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
