import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Button, Card, Progress } from 'antd';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';

import celebration from 'public/assets/celebration.svg';
import './ResultsView.css';

const ResultsView = ({
  overallScore,
  chairScore,
  monitorScore,
  accessoriesScore,
  healthScore
}) => {
  const [improvements, setImprovements] = useState(false);

  const handleSubmit = () => {
    setImprovements(true);
  };

  return improvements ? (
    <Redirect push to="/improvements" />
  ) : (
    <div className="results-view-content">
      <img src={celebration} alt="" />
      <div className="results-view-results">
        <div className="results-view-overall-score">
          <span
            style={{
              fontSize: '1.5em',
              fontWeight: '500',
              paddingBottom: '2vh'
            }}
          >
            Your overall score:
          </span>
          <br />
          <br />
          {overallScore !== 100 && (
            <Progress
              type="circle"
              strokeColor={{
                '5%': '#7679b4',
                '95%': '#10ac84'
              }}
              percent={Math.round(overallScore)}
            />
          )}
          {overallScore === 100 && (
            <Progress
              type="circle"
              strokeColor={{
                '5%': '#7679b4',
                '95%': '#10ac84'
              }}
              percent={100}
              format={() => '100%'}
            />
          )}
        </div>
        <div className="results-view-individual-scores">
          <Card
            className="results-view-card"
            bordered={false}
            style={{ backgroundColor: '#1dd1a1' }}
          >
            <p className="results-view-card-grade">
              {`${Math.round(chairScore)}%`}
            </p>
            <p className="results-view-card-title">Chair</p>
          </Card>
          <Card
            className="results-view-card"
            bordered={false}
            style={{ backgroundColor: '#565387' }}
          >
            <p className="results-view-card-grade">
              {`${Math.round(monitorScore)}%`}
            </p>
            <p className="results-view-card-title">Monitor</p>
          </Card>
          <Card
            className="results-view-card"
            bordered={false}
            style={{ backgroundColor: '#10ac84' }}
          >
            <p className="results-view-card-grade">
              {`${Math.round(accessoriesScore)}%`}
            </p>
            <p className="results-view-card-title">Accessories</p>
          </Card>
          <Card
            className="results-view-card"
            bordered={false}
            style={{ backgroundColor: '#7679b4' }}
          >
            <p className="results-view-card-grade">
              {`${Math.round(healthScore)}%`}
            </p>
            <p className="results-view-card-title">Health</p>
          </Card>
        </div>
        <Button
          style={{ marginTop: '5vh' }}
          type="primary"
          size="large"
          onClick={handleSubmit}
        >
          IMPROVE YOUR RESULTS
        </Button>
      </div>
      <div className="results-view-share-buttons">
        <p>Share your score!</p>
        <FacebookShareButton
          url="https://ergorank.com/"
          style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
          quote={`I scored ${Math.round(
            overallScore
          )}% on my workspace setup! Take the test to see how you rank!`}
          hashtag="#ergorank"
        >
          <FacebookIcon size={35} borderRadius="2px" />
        </FacebookShareButton>
        <LinkedinShareButton
          url="https://ergorank.com/"
          style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
          title={`I scored ${Math.round(
            overallScore
          )}% on my workspace setup! Take the test to see how you rank!`}
          source="https://ergorank.com/"
        >
          <LinkedinIcon size={35} borderRadius="2px" />
        </LinkedinShareButton>
        <TwitterShareButton
          url="https://ergorank.com/"
          style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
          title={`I scored ${Math.round(
            overallScore
          )}% on my workspace setup! Take the test to see how you rank!`}
          hashtag={['ergorank']}
        >
          <TwitterIcon size={35} borderRadius="2px" />
        </TwitterShareButton>
      </div>
    </div>
  );
};

ResultsView.propTypes = {
  overallScore: PropTypes.number,
  chairScore: PropTypes.number,
  monitorScore: PropTypes.number,
  accessoriesScore: PropTypes.number,
  healthScore: PropTypes.number
};

ResultsView.defaultProps = {
  overallScore: 0,
  chairScore: 0,
  monitorScore: 0,
  accessoriesScore: 0,
  healthScore: 0
};

export default withRouter(ResultsView);
