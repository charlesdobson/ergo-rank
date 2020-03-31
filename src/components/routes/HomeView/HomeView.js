import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import desk from 'public/assets/desk.svg';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-view-content">
      <img src={desk} alt="chair" />
      <div className="content-text">
        <p className="content-text-header">
          Do you want to be comfortable while you work?
        </p>
        <br />
        <br />
        <p className="content-text-subtitle">
          So do we! That&apos;s why we created this&nbsp;
          <span className="content-text-subtitle-emphasis">
            ergonomic assessment
          </span>
          &nbsp;tool.
        </p>
        <br />
        <p className="content-text-description">
          Whether you&apos;re setting up a work from home space, starting a new
          job, or have never done an ergonomic assessment before, ErgoRank can
          show you how to improve your setup!
        </p>
        <br />
        <p className="content-text-command-statement">
          <span className="content-text-command-statement-emphasis">
            Take the test
          </span>
          , make some&nbsp;
          <span className="content-text-command-statement-emphasis">
            adjustments
          </span>
          , and see your&nbsp;
          <span className="content-text-command-statement-emphasis">
            ergonomic ranking&nbsp;
          </span>
          climb!
        </p>
        <br />
        <Link to="/test">
          <Button type="primary" size="large">
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(HomeView);
