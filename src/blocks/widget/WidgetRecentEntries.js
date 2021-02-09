import React from 'react';

const WidgetRecentEntries = () => {
  return (
    <div className="widget widget_recent_entries">
      <h6 className="widget-title">Recent posts</h6>

      <ul className="list-unstyled items">
        <li className="item">
          <div className="row gutter-width-xs">
            <div className="col-3">
              <a href={process.env.PUBLIC_URL + '/news-single-post'}>
                <div className="img object-fit overflow-hidden">
                  <div className="object-fit-cover transform-scale-h">
                    <img src="assets/img/placeholder/88x88.jpg" alt="Neque porro quisquam est qui dolorem at vero do" />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-9 align-self-center">
              <p className="item-t-head">
                <a title="Neque porro quisquam est qui dolorem at vero do" href={process.env.PUBLIC_URL + '/news-single-post'}>
                  Neque porro quisquam est qui dolorem at vero do
                </a>
              </p>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="row gutter-width-xs">
            <div className="col-3">
              <a href={process.env.PUBLIC_URL + '/news-single-post'}>
                <div className="img object-fit overflow-hidden">
                  <div className="object-fit-cover transform-scale-h">
                    <img src="assets/img/placeholder/88x88.jpg" alt="Neque porro quisquam est qui dolorem at vero do" />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-9 align-self-center">
              <p className="item-t-head">
                <a title="Neque porro quisquam est qui dolorem at vero do" href={process.env.PUBLIC_URL + '/news-single-post'}>
                  Neque porro quisquam est qui dolorem at vero do
                </a>
              </p>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="row gutter-width-xs">
            <div className="col-3">
              <a href={process.env.PUBLIC_URL + '/news-single-post'}>
                <div className="img object-fit overflow-hidden">
                  <div className="object-fit-cover transform-scale-h">
                    <img src="assets/img/placeholder/88x88.jpg" alt="Neque porro quisquam est qui dolorem at vero do" />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-9 align-self-center">
              <p className="item-t-head">
                <a title="Neque porro quisquam est qui dolorem at vero do" href={process.env.PUBLIC_URL + '/news-single-post'}>
                  Neque porro quisquam est qui dolorem at vero do
                </a>
              </p>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="row gutter-width-xs">
            <div className="col-3">
              <a href={process.env.PUBLIC_URL + '/news-single-post'}>
                <div className="img object-fit overflow-hidden">
                  <div className="object-fit-cover transform-scale-h">
                    <img src="assets/img/placeholder/88x88.jpg" alt="Neque porro quisquam est qui dolorem at vero do" />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-9 align-self-center">
              <p className="item-t-head">
                <a title="Neque porro quisquam est qui dolorem at vero do" href={process.env.PUBLIC_URL + '/news-single-post'}>
                  Neque porro quisquam est qui dolorem at vero do
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WidgetRecentEntries;
