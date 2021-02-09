import React from 'react';

const FooterWidget = () => {
  return (
    <div className="footer-widgets">
      <div className="footer-widget-area d-flex flex-wrap justify-content-lg-end justify-content-xl-end">
        <div className="widget widget_text">
          <h6 className="widget-title">Manager</h6>

          <div className="textwidget">
            <p>
              <a href="tel:+43253312523">+432 533 12 523</a>
            </p>
            <p>
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
          </div>
        </div>

        <div className="widget widget_text">
          <h6 className="widget-title">CEO</h6>

          <div className="textwidget">
            <p>
              <a href="tel:+43253312523">+432 533 12 523</a>
            </p>
            <p>
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
