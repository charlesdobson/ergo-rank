import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Button, Divider, Form, Radio, Steps } from 'antd';
import { FaChair, FaKeyboard } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import './TestView.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Chair',
    icon: <FaChair />,
    questions: [
      {
        name: 'chairFeetSupported',
        question:
          'Are your feet fully supported and flat on the floor when seated?'
      },
      {
        name: 'chairBackSupported',
        question: "Is your back fully supported by your chair's backrest?"
      },
      {
        name: 'chairArmrestAdjustable',
        question:
          'Do your armrests allow you to position yourself close to your workstation?'
      }
    ]
  },
  {
    title: 'Monitor',
    icon: <FiMonitor />,
    questions: [
      {
        name: 'monitorPosition',
        question:
          'Are you able to position yourself directly in front of your monitor(s)?'
      },
      {
        name: 'monitorHeight',
        question:
          'Is your monitor height slightly below eye level when properly seated?'
      },
      {
        name: 'monitorGlare',
        question: 'Is your monitor free from glare?'
      }
    ]
  },
  {
    title: 'Accessories',
    icon: <FaKeyboard />,
    questions: [
      {
        name: 'accessoryHeight',
        question: 'Are your keyboard, mouse, and work surface at elbow height?'
      },
      {
        name: 'accessoryDistance',
        question: 'Are your frequently used accessories within easy reach?'
      },
      {
        name: 'accessoryPosition',
        question:
          'When using your keyboard and mouse, are your wrists straight and your arms relaxed?'
      }
    ]
  },
  {
    title: 'Health',
    icon: <GiHealthNormal />,
    questions: [
      {
        name: 'healthEyeBreaks',
        question: 'Do you take frequent breaks from looking at your monitor?'
      },
      {
        name: 'healthPhysicalBreaks',
        question: 'Do you take frequent breaks with light exercise?'
      },
      {
        name: 'healthLightLevel',
        question: 'Is your room lighting adequate for reading and writing?'
      }
    ]
  }
];

const TestView = ({ onChange }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = values => {
    setCurrentStep(currentStep + 1);
    onChange(steps[currentStep].title, values);
  };

  return currentStep === 4 ? (
    <Redirect to="/results" />
  ) : (
    <>
      <div className="test-view">
        <div className="test-view-content">
          <div className="test-view-text-content">
            <p>Take the test to find out how you can improve your workspace!</p>
          </div>
          <div className="test-view-steps">
            <Steps current={currentStep}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} icon={item.icon} />
              ))}
            </Steps>
            <Divider style={{ backgroundColor: '#f0f2f5' }} />
            <div className="steps-content">
              <Form
                className="steps-content-form"
                id={`test-${steps[currentStep].title}-form`}
                onFinish={handleSubmit}
                onFinishFailed={() => {}}
                hideRequiredMark
                labelCol={{ span: 18 }}
                wrapperCol={{ span: 6 }}
              >
                {steps[currentStep].questions.map(q => (
                  <Form.Item
                    name={q.name}
                    label={q.question}
                    key={q.name}
                    colon={false}
                    rules={[{ required: true, message: 'Required' }]}
                    className="steps-content-form-item"
                  >
                    <div className="steps-radio-group">
                      <Radio.Group>
                        <Radio value={100}>Yes</Radio>
                        <Radio value={0}>No</Radio>
                      </Radio.Group>
                    </div>
                  </Form.Item>
                ))}
              </Form>
            </div>
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  type="primary"
                  size="large"
                  form={`test-${steps[currentStep].title}-form`}
                  key="submit"
                  htmlType="submit"
                >
                  NEXT
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  type="primary"
                  size="large"
                  form={`test-${steps[currentStep].title}-form`}
                  key="submit"
                  htmlType="submit"
                >
                  SUBMIT
                </Button>
              )}
              {currentStep > 0 && (
                <Button
                  type="primary"
                  ghost
                  size="large"
                  style={{ marginLeft: 8 }}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  PREVIOUS
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TestView.propTypes = {
  onChange: PropTypes.func
};

TestView.defaultProps = {
  onChange: () => {}
};

export default withRouter(TestView);
