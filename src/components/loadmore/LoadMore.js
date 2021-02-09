import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreButton = () => {
  return (
    <div className="loadmore spacer m-top-lg">
      <Link
        to="header"
        id="loadmore"
        data-type="blog"
        title="Load more"
        spy={true}
        smooth={true}
        duration={0}
        className="btn btn-gradient"
        href="#header"
      >
        Loadmore
      </Link>
    </div>
  );
};

export default LoadMoreButton;
