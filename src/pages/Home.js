import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import HomeAboutUs from '../blocks/home/HomeAboutUs';
import AboutOurTeam from '../blocks/about/AboutOurTeam';
import HomePartners from '../blocks/home/HomePartners';
import ServicesContent from '../blocks/services/ServicesContent';

const Home = () => {
  document.body.classList.add('home');
  document.body.classList.add('header-absolute-true');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Home | Olum - Business & Events Management Agency HTML Template</title>

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
        <div className="content">
          <div className="clearfix">
            <PageTitleHome />

            <section id="about-us" className="block spacer p-top-xl overflow-hidden">
              <div className="wrapper">
                <HomeAboutUs />

                <AboutOurTeam />
              </div>
            </section>
            <section id="services" className="block-2 spacer p-top-xl">
              <div className="wrapper">
                <div className="title">
                  <h2>Our Services</h2>
                </div>
              </div>
              <ServicesContent />
            </section>
            <HomePartners />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
