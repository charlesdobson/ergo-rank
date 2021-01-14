import React from 'react';
import { Button, Input, Form } from 'antd';
import './ContactView.css';

const ContactView = () => {
  const onFinish = () => {
    console.log('Success');
  };

  const onFinishFailed = () => {
    console.log('Failure');
  };

  return (
    <div className="contact-view-content">
      <p className="contact-form-title">Contact Us</p>
      <Form
        className="contact-form"
        name="contact"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        method="POST"
        data-netlify="true"
      >
        <Input type="hidden" name="form-name" value="contact" />
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name'
            }
          ]}
        >
          <Input className="contact-form-input" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Please input your email'
            }
          ]}
        >
          <Input className="contact-form-input" placeholder="you@domain.com" />
        </Form.Item>

        <Form.Item name="message">
          <Input.TextArea
            className="contact-form-input"
            placeholder="Message"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            form="contact"
            className="contact-form-button"
          >
            Submit
          </Button>
        </Form.Item>
        <div className="field">
          <div data-netlify-recaptcha="true" />
        </div>
      </Form>
    </div>
  );
};

export default ContactView;
