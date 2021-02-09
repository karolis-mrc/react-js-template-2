import React from 'react';

const NewsTags = () => {
  return (
    <div className="tags">
      <p>
        <a title="Management" href={process.env.PUBLIC_URL + '/news'}>
          Management
        </a>
        <a title="Event" href={process.env.PUBLIC_URL + '/news'}>
          Event
        </a>
        <a title="Agency" href={process.env.PUBLIC_URL + '/news'}>
          Agency
        </a>
      </p>
    </div>
  );
};

export default NewsTags;
