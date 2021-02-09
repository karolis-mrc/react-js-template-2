import React from 'react';

const AboutOurTeam = () => {
  return (
    <div className="about-content-secondary spacer m-top-xl">
      <div className="row gutter-width-sm">
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div className="img-no-wrap-2">
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src="assets/img/placeholder/660x990.jpg" alt="About Us" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-11 col-sm-8 col-md-8 col-lg-8 col-xl-8 align-self-center col-last">
          <div className="description max-width-2">
            <div className="item">
              <h3>Who are we?</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was bor.
              </p>
            </div>

            <div className="item">
              <h3>Our vision</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account.
              </p>
            </div>

            <div className="item">
              <h3>Our mission</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account all this mistaken idea of denouncing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
