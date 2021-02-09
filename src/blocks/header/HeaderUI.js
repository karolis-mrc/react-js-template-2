import React from 'react';
import HeaderLogo from '../../blocks/logo/HeaderLogo';

const HeaderUI = ({ logoColor }) => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper">
        <div className="header-content d-flex justify-content-between">
          <div className="header-logo">
            <HeaderLogo logoColor={logoColor} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUI;
