import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleServices from '../blocks/page-title/PageTitleServices';
import ServicesContent from '../blocks/services/ServicesContent';

const Services = () => {
  document.body.classList.add('archive');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Services | Olum - Business & Events Management Agency HTML Template</title>

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

      <main id="main" className="site-main pb-0">
        <PageTitleServices />

        <div id="page-content" className="spacer p-top-xl">
          <div className="content">
            <div id="services" className="block-2">
              <ServicesContent />
            </div>
            <section id="we-guarantee" className="block spacer p-top-xl">
              <div className="wrapper">
                <div className="title">
                  <h2>We guarantee</h2>
                </div>

                <div className="description max-width-1">
                  <p>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
                    you a complete account of the system, and expound the.
                  </p>
                </div>
              </div>
            </section>

            <div className="spacer p-top-xl">
              <div className="img-no-wrap-3">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src="assets/img/placeholder/1920x631.jpg" alt="Services" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Services;
