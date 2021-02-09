import React from 'react';

const WidgetTagCloud = () => {
  return (
    <div className="widget widget_tag_cloud">
      <h6 className="widget-title">Tags</h6>

      <div className="tagcloud">
        <a title="Management" href={process.env.PUBLIC_URL + '/news'} className="tag-cloud-link">
          Management
        </a>
        <a title="Cosmetic" href={process.env.PUBLIC_URL + '/news'} className="tag-cloud-link">
          Cosmetic
        </a>
        <a title="Agency" href={process.env.PUBLIC_URL + '/news'} className="tag-cloud-link">
          Agency
        </a>
      </div>
    </div>
  );
};

export default WidgetTagCloud;
