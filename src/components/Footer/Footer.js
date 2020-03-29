import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import mappedin from 'public/assets/mappedin-logo-white.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="homeview-footer">
      <span>
        <span className="author-text">Built with </span>
        <HeartFilled style={{ color: '#f5222d' }} />
        <span className="author-text"> at </span>
        <a href="https://mappedin.com/">
          <img className="mappedin-logo" src={mappedin} alt="mappedin" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
