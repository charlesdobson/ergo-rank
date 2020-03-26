import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import mappedin from 'public/assets/mappedin-logo-white.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="homeview-footer">
      <span className="author-text">
        <span>Built with </span>
        <HeartFilled style={{ color: '#f5222d' }} />
        <span> at </span>
        <a href="https://mappedin.com/" className="mappedin-text">
          <img className="mappedin-logo" src={mappedin} alt="mappedin" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
