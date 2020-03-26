import React from 'react';
import { Card, Progress } from 'antd';
import celebration from 'public/assets/celebration.svg';
import './ResultsView.css';

const ResultsView = () => {
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
              percent={80}
            />
          </div>
          <div className="results-view-individual-scores">
            <Card
              className="results-view-card"
              bordered={false}
              style={{ backgroundColor: '#1dd1a1' }}
            >
              <p className="results-view-card-grade">95%</p>
              <p className="results-view-card-title">Chair</p>
            </Card>
            <Card
              className="results-view-card"
              bordered={false}
              style={{ backgroundColor: '#00d2d3' }}
            >
              <p className="results-view-card-grade">80%</p>
              <p className="results-view-card-title">Desk</p>
            </Card>
            <Card
              className="results-view-card"
              bordered={false}
              style={{ backgroundColor: '#2e86de' }}
            >
              <p className="results-view-card-grade">72%</p>
              <p className="results-view-card-title">Monitor</p>
            </Card>
            <Card
              className="results-view-card"
              bordered={false}
              style={{ backgroundColor: '#10ac84' }}
            >
              <p className="results-view-card-grade">86%</p>
              <p className="results-view-card-title">Accessories</p>
            </Card>
            <Card
              className="results-view-card"
              bordered={false}
              style={{ backgroundColor: '#54a0ff' }}
            >
              <p className="results-view-card-grade">68%</p>
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

export default ResultsView;
