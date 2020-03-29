import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress } from 'antd';
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
        <img src={celebration} alt="" />
        <div className="results-view-content">
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
                '0%': '#2e86de',
                '100%': '#10ac84'
              }}
              percent={Math.round(overallScore)}
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
              style={{ backgroundColor: '#2e86de' }}
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
              style={{ backgroundColor: '#54a0ff' }}
            >
              <p className="results-view-card-grade">
                {`${Math.round(healthScore)}%`}
              </p>
              <p className="results-view-card-title">Health</p>
            </Card>
          </div>
          {/* <div className='results-view-button' style={{ paddingTop: '10vh'}}>
						<Button type="primary">Improve your score</Button>
					</div> */}
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
};

ResultsView.defaultProps = {
  overallScore: 0,
  chairScore: 0,
  monitorScore: 0,
  accessoriesScore: 0,
  healthScore: 0
};

export default ResultsView;
