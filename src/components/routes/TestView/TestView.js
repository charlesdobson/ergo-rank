import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Radio, Steps } from 'antd';
import { FaChair, FaKeyboard } from 'react-icons/fa';
import { GiHealthNormal, GiTable } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import './TestView.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Chair',
    icon: <FaChair />,
    content: (
      <Form className="steps-content-form" colon={false}>
        <Form.Item
          name="feet-supported"
          label="Are your feet fully supported and flat on the floor when seated?"
          required
          wrapperCol={{ span: 16, offset: 2 }}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="back-supported"
          label="Is your back fully supported by your chair's backrest?"
          required
          wrapperCol={{ span: 16, offset: 5 }}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="armrest-adjustable"
          label="Do your armrests allow you to position yourself close to your workstation?"
          required
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    )
  },
  {
    title: 'Desk',
    icon: <GiTable />,
    content: 'Questions about desks'
  },
  {
    title: 'Monitor',
    icon: <FiMonitor />,
    content: 'Questions about monitors'
  },
  {
    title: 'Accessories',
    icon: <FaKeyboard />,
    content: 'Questions about keyboards and mouses'
  },
  {
    title: 'Health',
    icon: <GiHealthNormal />,
    content: 'Questions about healthy health'
  }
];

const TestView = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="test-view">
        <div className="test-view-content">
          <div className="test-view-text-content">
            <p>Take the test to find out how you can improve your workspace!</p>
          </div>
          <div className="test-view-steps">
            <Steps current={current} style={{ width: '80vw' }}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} icon={item.icon} />
              ))}
            </Steps>
            <Divider style={{ backgroundColor: '#f0f2f5' }} />
            <div className="steps-content">
              {steps[current].content}
              {/* <Form className='steps-content-form' colon={false}>
                  <Form.Item name="feet-supported" label="Are your feet fully supported and flat on the floor when seated?" required={true} wrapperCol={{span: 16, offset: 2}}>
                    <Radio.Group>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="back-supported" label="Is your back fully supported by your chair's backrest?" required={true} wrapperCol={{span: 16, offset: 5}}>
                    <Radio.Group>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="armrest-adjustable" label="Do your armrests allow you to position yourself close to your workstation?" required={true}>
                    <Radio.Group>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form> */}
            </div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => setCurrent(current + 1)}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Link to="/results" className="text-link">
                  <Button type="primary">Submit</Button>
                </Link>
              )}
              {current > 0 && (
                <Button
                  style={{ marginLeft: 8 }}
                  onClick={() => setCurrent(current - 1)}
                >
                  Previous
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestView;
