import React from 'react';

const WidgetCategories = () => {
  return (
    <div className="widget widget_categories">
      <h6 className="widget-title">Categories</h6>

      <ul>
        <li className="cat-item">
          <a title="Event" href={process.env.PUBLIC_URL + '/news'}>
            Event
          </a>
        </li>

        <li className="cat-item">
          <a title="Business" href={process.env.PUBLIC_URL + '/news'}>
            Business
          </a>
        </li>

        <li className="cat-item">
          <a title="Agency" href={process.env.PUBLIC_URL + '/news'}>
            Agency
          </a>
        </li>

        <li className="cat-item">
          <a title="Management" href={process.env.PUBLIC_URL + '/news'}>
            Management
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WidgetCategories;
