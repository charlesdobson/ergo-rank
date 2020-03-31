import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Button, Empty, List } from 'antd';
import { FaChair, FaKeyboard } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import './ImprovementsView.css';

const data = [
  {
    title: 'Chair',
    color: '#1dd1a1',
    icon: <FaChair size={24} style={{ color: '#10ac84' }} />,
    improvements: []
  },
  {
    title: 'Monitor',
    color: '#1dd1a1',
    icon: <FiMonitor size={24} style={{ color: '#10ac84' }} />,
    improvements: []
  },
  {
    title: 'Accessories',
    color: '#1dd1a1',
    icon: <FaKeyboard size={24} style={{ color: '#10ac84' }} />,
    improvements: []
  },
  {
    title: 'Health',
    color: '#1dd1a1',
    icon: <GiHealthNormal size={24} style={{ color: '#10ac84' }} />,
    improvements: []
  }
];

const ImprovementsView = ({
  chairFeetSupported,
  chairBackSupported,
  chairArmrestAdjustable,
  monitorPosition,
  monitorHeight,
  monitorGlare,
  accessoryHeight,
  accessoryDistance,
  accessoryPosition,
  healthEyeBreaks,
  healthPhysicalBreaks,
  healthLightLevel
}) => {
  const [takeTest, setTakeTest] = useState(false);
  const [seeResults, setSeeResults] = useState(false);

  const handleTestSubmit = () => {
    setTakeTest(true);
  };
  const handleBackSubmit = () => {
    setSeeResults(true);
  };

  const setImprovements = () => {
    data[0].improvements = [];
    data[1].improvements = [];
    data[2].improvements = [];
    data[3].improvements = [];
    if (chairFeetSupported !== 100) {
      data[0].improvements.push(
        'Lower your chair until your feet are fully supported or use a footrest to support your feet'
      );
    }
    if (chairBackSupported !== 100) {
      data[0].improvements.push(
        'Adjust the chair back and seat pan until properly supported'
      );
    }
    if (chairArmrestAdjustable !== 100) {
      data[0].improvements.push(
        'Adjust your armrests until you can position yourself close to your workstation or remove them completely'
      );
    }
    if (monitorPosition !== 100) {
      data[1].improvements.push(
        'Reposition your monitor or your chair so your monitor is directly in front of you'
      );
    }
    if (monitorHeight !== 100) {
      data[1].improvements.push(
        "Adjust monitor height with the built-in adjustments or a monitor stand until it's slightly below eye level"
      );
    }
    if (monitorGlare !== 100) {
      data[1].improvements.push(
        'Adjust overhead lighting or cover windows to reduce glare on your monitor'
      );
    }
    if (accessoryHeight !== 100) {
      data[2].improvements.push(
        'Reposition your workstation, keyboard or chair until your keyboard, mouse and work surface are at elbow height'
      );
    }
    if (accessoryDistance !== 100) {
      data[2].improvements.push(
        'Rearrange your workspace until all frequently used items are within easy reach'
      );
    }
    if (accessoryPosition !== 100) {
      data[2].improvements.push(
        'Check your posture and reposition your keyboard and mouse height until your wrists are straight when using them'
      );
    }
    if (healthEyeBreaks !== 100) {
      data[3].improvements.push(
        'Set a reminder to refocus on a picture or a wall every 30 minutes'
      );
    }
    if (healthPhysicalBreaks !== 100) {
      data[3].improvements.push(
        'Set a reminder to take physical/postural breaks every hour'
      );
    }
    if (healthLightLevel !== 100) {
      data[3].improvements.push(
        'Obtain a desk lamp or improve overhead lighting to provide adequate light for reading and writing'
      );
    }
  };

  setImprovements();

  if (takeTest) {
    return <Redirect push to="/test" />;
  }
  if (seeResults) {
    return <Redirect push to="/results" />;
  }

  return (
    <div className="improvements-view-content">
      <p>Here are some tips on how you can improve your setup:</p>
      <div className="improvements-view-individual-results">
        <List
          grid={{ lg: 2 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                style={{ color: item.colour }}
                // eslint-disable-next-line prettier/prettier
                description={(
                  <>
                    <ul>
                      {item.improvements.map(improvement => (
                        <li key={Math.random() + item.title}>{improvement}</li>
                      ))}
                    </ul>
                    {item.improvements.length === 0 && (
                      <Empty
                        // eslint-disable-next-line prettier/prettier
                        description={(
                          <span className="improvements-view-empty-result">
                            Your setup is ergonomic! Keep up the great work!
                          </span>
                          // eslint-disable-next-line prettier/prettier
                        )}
                        imageStyle={{ display: 'none' }}
                        style={{ float: 'left' }}
                      />
                    )}
                  </>
                  // eslint-disable-next-line prettier/prettier
                  )}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="resource-links">
        <p>
          For more information on workspace ergonomics, check out the links
          below:
        </p>
        <ul>
          <li>
            <a href="http://ergo.human.cornell.edu/ergoguide.html">
              Cornell University Ergonomics
            </a>
          </li>
          <li>
            <a href="https://depts.washington.edu/hhpccweb/health-resource/computer-workstation-ergonomics/">
              University of Washington Computer Workstation Ergonomics
            </a>
          </li>
          <li>
            <a href="https://ehs.princeton.edu/book/export/html/72">
              Princeton Computer Workstations & Ergonomics
            </a>
          </li>
        </ul>
        {/* <a href="http://ergo.human.cornell.edu/ergoguide.html">
          Cornell University Ergonomics
        </a>
        <a href="https://depts.washington.edu/hhpccweb/health-resource/computer-workstation-ergonomics/">
          University of Washington Computer Workstation Ergonomics
        </a>
        <a href="https://ehs.princeton.edu/book/export/html/72">
          Princeton Computer Workstations & Ergonomics
        </a> */}
      </div>
      <span className="route-buttons">
        <Button type="primary" size="large" onClick={handleTestSubmit}>
          TAKE TEST AGAIN
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="primary" size="large" ghost onClick={handleBackSubmit}>
          BACK TO RESULTS
        </Button>
      </span>
    </div>
  );
};

ImprovementsView.propTypes = {
  chairFeetSupported: PropTypes.number,
  chairBackSupported: PropTypes.number,
  chairArmrestAdjustable: PropTypes.number,
  monitorPosition: PropTypes.number,
  monitorHeight: PropTypes.number,
  monitorGlare: PropTypes.number,
  accessoryHeight: PropTypes.number,
  accessoryDistance: PropTypes.number,
  accessoryPosition: PropTypes.number,
  healthEyeBreaks: PropTypes.number,
  healthPhysicalBreaks: PropTypes.number,
  healthLightLevel: PropTypes.number
};

ImprovementsView.defaultProps = {
  chairFeetSupported: 0,
  chairBackSupported: 0,
  chairArmrestAdjustable: 0,
  monitorPosition: 0,
  monitorHeight: 0,
  monitorGlare: 0,
  accessoryHeight: 0,
  accessoryDistance: 0,
  accessoryPosition: 0,
  healthEyeBreaks: 0,
  healthPhysicalBreaks: 0,
  healthLightLevel: 0
};

export default withRouter(ImprovementsView);
