import React from 'react';
import Copyright from '../footer/Copyright';
import FooterMenu from '../footer/FooterMenu';
import FooterWIdget from '../footer/FooterWIdget';

const Footer404 = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrapper">
        <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
          <FooterWIdget />
        </div>

        <div className="footer">
          <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
            <div className="align-self-center">
              <Copyright />
            </div>

            <div className="align-self-center">
              <FooterMenu />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer404;
