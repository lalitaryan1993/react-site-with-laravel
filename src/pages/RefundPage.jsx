import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import RefundDescription from '../components/RefundDescription/RefundDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class RefundPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title='Refund Policy' />
        <PageTop pageTitle='Refund Policy' />
        <RefundDescription />
        <Footer />
      </>
    );
  }
}

export default RefundPage;
