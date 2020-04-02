import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import desk from 'public/assets/desk.svg';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-view-content">
      <img src={desk} alt="Ergonomic desk setup" />
      <div className="content-text">
        <h1 className="content-text-header">
          Do you want to be comfortable while you work?
        </h1>
        <br />
        <br />
        <p className="content-text-description">
          So do we! That&apos;s why we created this&nbsp;
          <span className="content-text-description-emphasis">
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
        <p className="content-text-description">
          <span className="content-text-description-emphasis">
            Take the test
          </span>
          , make some&nbsp;
          <span className="content-text-description-emphasis">adjustments</span>
          , and see your&nbsp;
          <span className="content-text-description-emphasis">
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
