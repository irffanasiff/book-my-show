import React from 'react';
import { Route } from 'react-router-dom';
import MovieLayout from '../layouts/Default.layout';

const MovietHOC = ({ component: Component, ...restProperties }) => {
  return (
    <>
      <Route
        {...restProperties}
        component={(props) => (
          <MovieLayout>
            <Component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovietHOC;
