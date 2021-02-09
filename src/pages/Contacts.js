import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleContacts from '../blocks/page-title/PageTitleContacts.js';

import ContactsList from '../blocks/contacts/ContactsList';
import ContactsForm from '../components/form/ContactsForm';

const Contacts = () => {
  document.body.classList.add('page');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Contacts | Olum - Business & Events Management Agency HTML Template</title>

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
        <PageTitleContacts />

        <div className="content">
          <div className="clearfix">
            <ContactsList />
            <section id="contact-form" className="block spacer p-top-xl">
              <div className="wrapper">
                <div className="title">
                  <h2>Write us here</h2>
                </div>

                <div className="description">
                  <p>But I must explain to you how all this mistaken.</p>
                </div>
                <div className="spacer p-top-lg">
                  <ContactsForm />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Contacts;
