import React, { Fragment } from 'react';
import '../../assets/css/App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from '../MainContent'

const Static = () => {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

export default Static;
