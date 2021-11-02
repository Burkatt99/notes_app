import React, { Component } from "react";
import "./style.css";
import logo from '../../../images/logo.png';
import settings from '../../../images/settings.png';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="menu">
            <div className = "logo">
            <Link className="link" to="/">
              <img alt="logo" src ={logo}/>
              </Link>
            </div>
              <div className="sett">
              <Link  to="/settings">
              <img alt="settings" src ={settings}/>
              </Link>
              <p>Settings</p>
              </div>
      </div>
    );
  }
}

export default Header;
