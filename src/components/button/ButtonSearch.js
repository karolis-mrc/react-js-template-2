import React from 'react';

const ButtonSearch = () => {
  return (
    <div className="input-group-append">
      <button type="submit" className="btn btn-link border-0 p-0 min-w-auto">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default ButtonSearch;
