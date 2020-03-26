import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import desk from 'public/assets/desk.svg';
import './HomeView.css';

const HomeView = () => {
  return (
    <>
      <div className="home-view">
        <div className="home-view-content">
          <img src={desk} alt="chair" />
          <div className="content-text">
            <p>Do you want to be comfortable at work? So do we!</p>
            <br />
            <p>
              That&apos;s why we created this&nbsp;
              <span className="content-text-emphasis">
                ergonomic assessment
              </span>
              &nbsp;tool.
            </p>
            <br />
            <p>
              Take the&nbsp;
              <Link to="/test" className="text-link">
                test
              </Link>
              , make some adjustments, and see your ergonomic&nbsp;
              <Link to="/results" className="text-link">
                ranking
              </Link>
              &nbsp;climb!
            </p>
            <br />
            <div className="get-started-button">
              <Link to="/test" className="text-link">
                <Button type="primary">GET STARTED</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
