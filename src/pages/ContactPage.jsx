import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Contact Us' />
        <PageTop pageTitle='Contact Us' />
        <ContactSection />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
