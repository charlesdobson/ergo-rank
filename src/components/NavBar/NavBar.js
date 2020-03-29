import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import icon from 'public/assets/ergorank-logo-new.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/" className="navigation-logo">
        ErgoRank
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
