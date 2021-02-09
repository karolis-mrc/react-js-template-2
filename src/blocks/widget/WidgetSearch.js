import React from 'react';
import ButtonSearch from '../../components/button/ButtonSearch';

const WidgetSearch = () => {
  return (
    <div className="widget widget_search">
      <h6 className="widget-title">Search</h6>
      <form className="search-form" role="search" method="get" action={process.env.PUBLIC_URL + '/search-results'}>
        <div className="search input-group">
          <input className="form-lg" type="text" placeholder="Type here to search" name="s" />

          <div className="input-group-append">
            <ButtonSearch />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WidgetSearch;
