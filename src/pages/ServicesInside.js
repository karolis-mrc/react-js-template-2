import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside';
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const ServicesInside = () => {
  document.body.classList.add('single');
  document.body.classList.add('single-adveits_services');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Service inside | Olum - Business & Events Management Agency HTML Template</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleServicesInside />

        <div id="page-content" className="spacer p-top-xl">
          <div className="content">
            <div className="img-no-wrap-3">
              <div className="img object-fit">
                <div className="object-fit-cover">
                  <img src="assets/img/placeholder/1920x631.jpg" alt="Services" />
                </div>
              </div>
            </div>

            <div className="spacer p-top-xl">
              <div className="wrapper">
                <div className="row gutter-width-sm with-pb-md">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="description">
                      <h2>Location</h2>
                      <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and expound the.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="description">
                      <h2>Vision</h2>
                      <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and expound the.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BackToServices />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ServicesInside;
