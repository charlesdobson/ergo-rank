import React from 'react';
import { Input, Button } from 'antd';
import './ContactView.css';

// const validateMessages = {
//   required: 'This field is required!',
//   types: {
//     email: 'Invalid email!'
//   }
// };

const ContactView = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="contact-view-content">
      <p className="contact-form-title">Contact Us</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <Input type="hidden" name="form-name" value="contact" />
        <Input className="contact-form-input" placeholder="Name" name="user" />
        <Input
          className="contact-form-input"
          placeholder="you@domain.com"
          name="email"
        />
        <Input.TextArea
          className="contact-form-input"
          placeholder="Message"
          name="message"
        />
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="contact-form-button"
        >
          Submit
        </Button>
      </form>

      {/* <Form
        className="contact-form"
        name="contact"
        onSubmit={handleSubmit}
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
      </Form> */}
    </div>
  );
};

export default ContactView;
