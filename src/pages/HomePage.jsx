import React, { Component } from 'react';
import Video from '../components/Video/Video';
import AboutMe from '../components/AboutMe/AboutMe';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Welcome from '../components/Welcome/Welcome';

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title='Home - Lets Explore' />
        <TopBanner />
        <Welcome />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Video />
        <ClientReview />
        <AboutMe />
        <Footer />
      </>
    );
  }
}

export default HomePage;
