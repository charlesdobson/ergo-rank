import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactView.css';

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Invalid email!'
  }
};

const ContactView = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div className="contact-view-content">
      <p className="contact-form-title">Contact Us</p>
      <Form
        className="contact-form"
        name="contact"
        onFinish={handleSubmit}
        method="post"
        data-netlify="true"
        validateMessages={validateMessages}
      >
        <Input type="hidden" name="form-name" value="contact" />
        <Form.Item
          name={['user', 'name']}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input className="contact-form-input" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          rules={[
            {
              type: 'email'
            }
          ]}
          validateTrigger={validateMessages}
        >
          <Input className="contact-form-input" placeholder="you@domain.com" />
        </Form.Item>

        <Form.Item name={['user', 'message']}>
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
