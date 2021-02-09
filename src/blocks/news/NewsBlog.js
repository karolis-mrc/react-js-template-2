import React from 'react';
import NewsHomeItemsData from '../../data/news/newsHomeItems';

const NewsBlog = () => {
  return (
    <div className="col-xl-8 col-lg-8  col-md-12 order-0 order-lg-1 order-xl-1 style-default">
      <div className="row gutter-width-sm with-pb-lg" id="results">
        {NewsHomeItemsData &&
          NewsHomeItemsData.map((item, key) => {
            return (
              <div key={key} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="card card-post">
                  <div className="card-top position-relative">
                    <a title={item.title} href={process.env.PUBLIC_URL + item.link}>
                      <div className="img object-fit overflow-hidden">
                        <div className="object-fit-cover transform-scale-h">
                          <img className="card-top-img" src={item.imgLink} alt={item.title} />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="card-body">
                    <div className="card-meta">
                      <p>
                        <span>
                          <a className="a-small" href={process.env.PUBLIC_URL + item.link}>
                            {item.author}
                          </a>
                        </span>
                        <span className="s-small">-</span>
                        <span className="s-small">Comments ({item.comments})</span>
                        <span className="s-small">-</span>
                        <span className="category">
                          <a title="{item.category}" className="a-small" href={process.env.PUBLIC_URL + '/news'}>
                            {item.category}
                          </a>
                        </span>
                      </p>
                    </div>

                    <h4 className="card-title">
                      <a title={item.title} href={process.env.PUBLIC_URL + item.link}>
                        {item.title}
                      </a>
                    </h4>

                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewsBlog;
