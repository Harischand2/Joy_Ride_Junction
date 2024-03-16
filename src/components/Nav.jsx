import React from 'react'
import logo from '../Images/logo.jpg';
import {Link} from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand">
    <div className="container">
      <div className="navbar-brand mental_logo">
        <img src={logo} alt="Mental health logo"/>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item nav_link">  <Link to="/" className="nav-link active" aria-current="page"> Home Page </Link>  </li>
        <li className="nav-item nav_link">  <Link to="/mood" className="nav-link active" aria-current="page"> Mood Page </Link> </li>
        {/* <li className="nav-item nav_link">  <Link to="/info" className="nav-link active" aria-current="page"> Info Page </Link> </li> */}
      </ul>
    </div>
    </nav>
  );
}
