import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';

const DefaultHOC = ({ component: Component, ...restProperties }) => {
  return (
    <>
      <Route
        {...restProperties}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
