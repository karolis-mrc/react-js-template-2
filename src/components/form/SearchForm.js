import React from 'react';
import ButtonSearch from '../../components/button/ButtonSearch';

const SearchForm = () => {
  return (
    <form className="search-form" role="search" method="get" action={process.env.PUBLIC_URL + '/search-results'}>
      <div className="search input-group">
        <input className="form-lg" type="text" placeholder="Type to search" name="s" />

        <ButtonSearch />
      </div>
    </form>
  );
};

export default SearchForm;
