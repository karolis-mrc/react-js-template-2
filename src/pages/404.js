import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer404 from '../blocks/footer/Footer404';

import PageTitle404 from '../blocks/page-title/PageTitle404';
import BackToHome from '../components/button/BackToHome';
import SearchForm from '../components/form/SearchForm';

const page404 = () => {
  document.body.classList.add('error404');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>404 | Olum - Business & Events Management Agency HTML Template</title>

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

      <Header logoColor="light" />

      <main id="main" className="site-main">
        <PageTitle404 />

        <div id="page-content">
          <div className="wrapper">
            <div className="content">
              <p className="text w-75 mb-0 after">
                The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for
                it. Maybe try a search?
              </p>
              <div class="form w-75">
                <SearchForm />
              </div>
              <BackToHome />
            </div>
          </div>
        </div>
      </main>

      <Footer404 />
    </Fragment>
  );
};

export default page404;
