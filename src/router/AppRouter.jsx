import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';

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
        </Switch>
      </>
    );
  }
}

export default AppRouter;
