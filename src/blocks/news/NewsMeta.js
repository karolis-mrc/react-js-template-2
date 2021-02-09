import React from 'react';

const NewsMeta = () => {
  return (
    <div className="meta">
      <p>
        <span className="date">29 April, 2020</span>
        <span>
          <a href={process.env.PUBLIC_URL + '/news-single-post'}>By admin</a>
        </span>
        <span>-</span>
        <span>Comments (1)</span>
        <span>-</span>
        <span className="category">
          <a title="Event" href={process.env.PUBLIC_URL + '/news'}>
            Event
          </a>
        </span>
      </p>
    </div>
  );
};

export default NewsMeta;
