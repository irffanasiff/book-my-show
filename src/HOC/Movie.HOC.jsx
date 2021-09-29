import React from 'react';
import { Route } from 'react-router-dom';
import MovieLayout from '../layouts/Movie.layout';

const DefaultHOC = ({ component: Component, ...restProperties }) => {
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

export default DefaultHOC;
