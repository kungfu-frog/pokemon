import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="logo-text">Pokemon</span>
      </div>
      <button className="fight-button">Fight!</button>
    </div>
  );
};

export default Header;
