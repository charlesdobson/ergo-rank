import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
// import icon from 'public/assets/ergorank-logo-new.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <span className="navigation-logo">
        ErgoRank
        {/* <img src={icon}></img> */}
      </span>
      <span className="navigation-links">
        <NavLink
          to="/"
          className="link-button"
          exact
          activeStyle={{ borderBottom: '0.2vh solid #f8f9fa' }}
        >
          Home
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          to="/test"
          className="link-button"
          exact
          activeStyle={{ borderBottom: '0.2vh solid #f8f9fa' }}
        >
          Test
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          to="/results"
          className="link-button"
          exact
          activeStyle={{ borderBottom: '0.2vh solid #f8f9fa' }}
        >
          Results
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  );
};

export default withRouter(NavBar);
