import React, { Fragment } from 'react';
import '../../assets/css/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const Static = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default Static;
