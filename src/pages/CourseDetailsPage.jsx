import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class CourseDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      courseID: match.params.courseID,
      courseName: match.params.courseName,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Course Details ' />
        <PageTop pageTitle={this.state.courseName} />
        <CourseDetails id={this.state.courseID} />
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
