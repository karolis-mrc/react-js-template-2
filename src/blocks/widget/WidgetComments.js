import React from 'react';

const WidgetComments = () => {
  return (
    <div className="widget widget_recent_comments">
      <h6 className="widget-title">Recent Comments</h6>

      <ul id="recentcomments">
        <li className="recentcomments">
          <span className="comment-author-link">Andres White</span> on
          <a title="Lorem ipsum dolor sit amet, consectetur adipisc." href={process.env.PUBLIC_URL + '/news-single-post#comments'}>
            “Lorem ipsum dolor sit amet, consectetur adipisc.”
          </a>
        </li>

        <li className="recentcomments">
          <span className="comment-author-link">Andres White</span> on
          <a title="Lorem ipsum dolor sit amet, consectetur adipisc." href={process.env.PUBLIC_URL + '/news-single-post#comments'}>
            “Lorem ipsum dolor sit amet, consectetur adipisc.”
          </a>
        </li>

        <li className="recentcomments">
          <span className="comment-author-link">Andres White</span> on
          <a title="Lorem ipsum dolor sit amet, consectetur adipisc." href={process.env.PUBLIC_URL + '/news-single-post#comments'}>
            “Lorem ipsum dolor sit amet, consectetur adipisc.”
          </a>
        </li>

        <li className="recentcomments">
          <span className="comment-author-link">Andres White</span> on
          <a title="Lorem ipsum dolor sit amet, consectetur adipisc." href={process.env.PUBLIC_URL + '/news-single-post#comments'}>
            “Lorem ipsum dolor sit amet, consectetur adipisc.”
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WidgetComments;
