import React, { useState } from 'react';
// import { Input, Button } from 'antd';
import './ContactView.css';

// const validateMessages = {
//   required: 'This field is required!',
//   types: {
//     email: 'Invalid email!'
//   }
// };

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', formData })
    })
      // eslint-disable-next-line no-alert
      .then(() => alert('Success!'))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-view-content">
      <p className="contact-form-title">Contact Us</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {/* <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input name="test" />
        <button type="submit">Submit</button> */}
      {/* <Input type="hidden" name="form-name" value="contact" />
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
        </Button> */}
      {/* </form> */}

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
