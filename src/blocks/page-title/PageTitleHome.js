import React from 'react';

const PageTitleHome = () => {
  return (
    <section id="page-title" className="block">
      <div className="wrapper">
        <div className="title">
          <h1>
            Events organization with our <br />
            professional team.
          </h1>
        </div>

        <div className="spacer p-top-lg no-space">
          <a
            title="Services"
            className="btn btn-lg btn-link btn-line line-active p-0 border-0 min-w-auto link-no-space spacer m-right-xs"
            href={process.env.PUBLIC_URL + '/services'}
          >
            Services
          </a>
          <a
            title="Contacts"
            className="btn btn-lg btn-link btn-line p-0 border-0 min-w-auto link-no-space"
            href={process.env.PUBLIC_URL + '/contacts'}
          >
            Contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageTitleHome;
