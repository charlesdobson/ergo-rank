import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress } from 'antd';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon
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
  return (
    <>
      <div className="results-view">
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
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#7679b4',
                  '100%': '#10ac84'
                }}
                percent={Math.round(overallScore)}
                // percent={87}
              />
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
                // style={{ backgroundColor: '#2e86de' }}
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
                // style={{ backgroundColor: '#54a0ff' }}
                style={{ backgroundColor: '#7679b4' }}
              >
                <p className="results-view-card-grade">
                  {`${Math.round(healthScore)}%`}
                </p>
                <p className="results-view-card-title">Health</p>
              </Card>
            </div>
            <div className="results-view-share-button">
              <p>Share your score!</p>
              <FacebookShareButton
                url="https://ergorank.com/"
                style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
              >
                <FacebookIcon size={35} borderRadius="2px" />
              </FacebookShareButton>
              <LinkedinShareButton
                url="https://ergorank.com/"
                style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
              >
                <LinkedinIcon size={35} borderRadius="2px" />
              </LinkedinShareButton>
              <TwitterShareButton
                url="https://ergorank.com/"
                style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
              >
                <TwitterIcon size={35} borderRadius="2px" />
              </TwitterShareButton>
              <EmailShareButton
                url="https://ergorank.com/"
                style={{ paddingLeft: '0.2vw', paddingRight: '0.2vw' }}
              >
                <EmailIcon size={35} borderRadius="2px" />
              </EmailShareButton>
              {/* <Button type="primary" size="large" ghost>
                SHARE YOUR SCORE
              </Button> */}
            </div>
            {/* <div
              className="results-view-improvements"
              style={{ paddingTop: '10vh' }}
            > */}
            {/* <p>
                <span className="results-view-improvements-emphasis">
                  You&apos;re doing a great job!&nbsp;
                </span>
                There are some small fixes you can make to improve your
                workspace ergonomics.
              </p> */}
            {/* <Button type="primary" size="large">
                IMPROVE YOUR SCORE
              </Button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

ResultsView.propTypes = {
  overallScore: PropTypes.number,
  chairScore: PropTypes.number,
  monitorScore: PropTypes.number,
  accessoriesScore: PropTypes.number,
  healthScore: PropTypes.number
  // chairQuestionResults: PropTypes.objectOf(PropTypes.object()),
  // monitorQuestionResults: PropTypes.objectOf(PropTypes.object()),
  // accessoriesQuestionResults: PropTypes.objectOf(PropTypes.object()),
  // healthQuestionResults: PropTypes.objectOf(PropTypes.object())
};

ResultsView.defaultProps = {
  overallScore: 0,
  chairScore: 0,
  monitorScore: 0,
  accessoriesScore: 0,
  healthScore: 0
  // chairQuestionResults: {},
  // monitorQuestionResults: {},
  // accessoriesQuestionResults: {},
  // healthQuestionResults: {}
};

export default ResultsView;
