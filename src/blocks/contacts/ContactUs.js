import React from 'react';

const ContactsUs = () => {
  return (
    <div className="spacer p-top-lg no-space">
      <a
        title="Contact us"
        className="btn btn-lg btn-link btn-line p-0 border-0 min-w-auto link-no-space spacer m-right-xs"
        href={process.env.PUBLIC_URL + '/contacts'}
      >
        Contact us
      </a>
    </div>
  );
};

export default ContactsUs;
