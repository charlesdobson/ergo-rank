import React, { useState } from 'react';
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
        name: 'feet-supported',
        question:
          'Are your feet fully supported and flat on the floor when seated?'
      },
      {
        name: 'back-supported',
        question: "Is your back fully supported by your chair's backrest?"
      },
      {
        name: 'armrest-adjustable',
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
        name: 'monitor-position',
        question:
          'Are you able to position yourself directly in front of your monitor(s)?'
      },
      {
        name: 'monitor-height',
        question:
          'Is your monitor height slightly below eye level when properly seated?'
      },
      {
        name: 'monitor-glare',
        question: 'Is your monitor free from glare?'
      }
    ]
  },
  {
    title: 'Accessories',
    icon: <FaKeyboard />,
    questions: [
      {
        name: 'accessory-height',
        question: 'Are your keyboard, mouse, and work surface at elbow height?'
      },
      {
        name: 'accessory-distance',
        question: 'Are your frequently used accessories within easy reach?'
      },
      {
        name: 'accessory-position',
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
        name: 'eye-breaks',
        question: 'Do you take frequent breaks from looking at your monitor?'
      },
      {
        name: 'physical-breaks',
        question: 'Do you take frequent breaks with light exercise?'
      },
      {
        name: 'light-level',
        question: 'Is your room lighting adequate for reading and writing?'
      }
    ]
  }
];

const TestView = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
    if (currentStep === steps.length - 1) {
      setSubmitted(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return submitted ? (
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
              >
                {steps[currentStep].questions.map(q => (
                  <Form.Item
                    name={q.name}
                    label={q.question}
                    key={q.name}
                    // wrapperCol={{ span: 16, offset: 2 }}
                    colon={false}
                    rules={[{ required: true, message: 'Required' }]}
                  >
                    <Radio.Group>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>
                ))}
              </Form>
            </div>
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  type="primary"
                  form={`test-${steps[currentStep].title}-form`}
                  key="submit"
                  htmlType="submit"
                >
                  Next
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  type="primary"
                  form={`test-${steps[currentStep].title}-form`}
                  key="submit"
                  htmlType="submit"
                >
                  Submit
                </Button>
              )}
              {currentStep > 0 && (
                <Button
                  style={{ marginLeft: 8 }}
                  onClick={() => setCurrentStep(currentStep - 1)}
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

export default withRouter(TestView);
