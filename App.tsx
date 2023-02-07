import * as React from 'react';
import './style.scss';

function Header() {
  return (
    <div className="header">
      <h1>This site</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="login-form">
      <div className="logo"></div>
      <div className="div-username">
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" value="" />
      </div>
      <div className="div-password">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
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
