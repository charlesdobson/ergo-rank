import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Button, List } from 'antd';
import { FaChair, FaKeyboard } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import './ImprovementsView.css';

const data = [
  {
    title: 'Chair',
    color: '#1dd1a1',
    icon: <FaChair size={24} style={{ color: '#1dd1a1' }} />
  },
  {
    title: 'Monitor',
    color: '#1dd1a1',
    icon: <FiMonitor size={24} style={{ color: '#565387' }} />
  },
  {
    title: 'Accessories',
    color: '#1dd1a1',
    icon: <FaKeyboard size={24} style={{ color: '#10ac84' }} />
  },
  {
    title: 'Health',
    color: '#1dd1a1',
    icon: <GiHealthNormal size={24} style={{ color: '#7679b4' }} />
  }
];

const ImprovementsView = () => {
  const [takeTest, setTakeTest] = useState(false);

  const handleSubmit = () => {
    setTakeTest(true);
  };

  return takeTest ? (
    <Redirect to="/test" />
  ) : (
    <div className="improvements-view">
      <div className="improvements-view-content">
        <p>Here&apos;s how you can improve your setup:</p>
        <div className="improvements-view-individual-results">
          {/* <p>Here&apos;s how you can improve your setup:</p> */}

          <List
            grid={{ md: 2 }}
            style={{
              marginLeft: '10vw',
              marginRight: '10vw',
              marginTop: '5vh',
              marginBottom: '5vh'
            }}
            dataSource={data}
            // header={<p>Here&apos;s how you can improve your setup:</p>}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={item.icon}
                  title={item.title}
                  style={{ color: item.colour }}
                  // eslint-disable-next-line prettier/prettier
                  description={(
                    <ul>
                      <li>This is some improvement data</li>
                      <li>This is some more improvement data</li>
                      <li>This is improvement data</li>
                    </ul>
                    // eslint-disable-next-line prettier/prettier
                  )}
                />
              </List.Item>
            )}
          />
        </div>
        <Button type="primary" size="large" onClick={handleSubmit}>
          TAKE THE TEST AGAIN
        </Button>
      </div>
    </div>
  );
};

export default withRouter(ImprovementsView);
