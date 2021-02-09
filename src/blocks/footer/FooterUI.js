import React from 'react';
import Copyright from '../footer/Copyright';
// import FooterMenu from '../footer/FooterMenu';
// import FooterWIdget from '../footer/FooterWIdget';

const FooterUI = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrapper">
        <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
          <div className="logo logo-secondary">
            <img src="assets/img/logo/logo-light.svg" alt="Logo" />
          </div>
        </div>

        <div className="footer">
          <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
            <div className="align-self-center">
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUI;
