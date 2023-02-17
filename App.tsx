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
  const start_time = '2022-12-07T16:02:58Z'
   
  const planType = "pac-professional-12"
  const planDate = Math.round(Number.parseInt(planType.split("-")[2])*30.5)
  const startDate = new Date(start_time)
  const endDate = new Date(startDate.setDate(startDate.getDate()+planDate))
  const today = new Date(Date.now())

  console.log({ endDate });
  if (endDate < today) {    
    console.log('expired');
  } else {
    console.log('validate')
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
