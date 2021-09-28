import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import NavbarComponents from '../components/Navbar/Navbar.components';

const DefaultLayout = (props) => {
  return (
    <>
      <NavbarComponents />
      <HeroCarousel />
      {props.children}
    </>
  );
};

export default DefaultLayout;
