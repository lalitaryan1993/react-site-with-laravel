import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
class AppRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/service'>
            <AllServicePage />
          </Route>

          <Route exact path='/course' component={AllCoursesPage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />

          <Route exact path='/refund' component={RefundPage} />
          <Route exact path='/terms' component={TermsPage} />
          <Route exact path='/privacy' component={PrivacyPage} />
          <Route exact path='/projectDetails/:projectID/:projectName' component={ProjectDetailPage} />
          <Route exact path='/courseDetails/:courseID/:courseName' component={CourseDetailsPage} />
        </Switch>
      </>
    );
  }
}

export default AppRouter;
