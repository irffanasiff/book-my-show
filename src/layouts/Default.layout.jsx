import React from 'react';
import NavbarComponents from '../components/Navbar/Navbar.components';

const DefaultLayout = (props) => {
  return (
    <>
      <NavbarComponents />
      {props.children}
    </>
  );
};

export default DefaultLayout;
