import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class PageNotFound extends Component {
  render() {
    return (
      <>
        <TopNavigation title='404 Page Not Found' />
        <PageTop pageTitle='Page Not Found' />
        <NotFound />
        <Footer />
      </>
    );
  }
}

export default PageNotFound;
