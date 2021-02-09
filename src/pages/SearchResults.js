import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleSearch from '../blocks/page-title/PageTitleSearch';
import SearchItemsData from '../data/search-results/searchItems';

const SearchResults = () => {
  document.body.classList.add('search-results');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Search results | Olum - Business & Events Management Agency HTML Template</title>

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
        <PageTitleSearch />

        <div id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="row gutter-width-sm with-pb-lg" id="results">
              {SearchItemsData &&
                SearchItemsData.map((item, key) => {
                  return (
                    <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <h4>
                            <a title={item.title} className="d-block" href={process.env.PUBLIC_URL + item.link}>
                              {item.title}
                            </a>
                          </h4>
                          <p>
                            <a title={item.category} className="extra-bold" href="/news">
                              Event
                            </a>
                          </p>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default SearchResults;
