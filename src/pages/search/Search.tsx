import React from 'react';
import { Helmet } from 'react-helmet-async';

const Search = () => {
  return (
    <div>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Search`}</title>
      </Helmet>
    </div>
  );
};

export default Search;
