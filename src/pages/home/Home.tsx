import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Home`}</title>
      </Helmet>
    </div>
  );
};

export default Home;
