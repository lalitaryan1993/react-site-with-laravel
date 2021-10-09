import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ProjectDetailPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      ProjectPassedID: match.params.projectID,
      projectName: match.params.projectName,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title='Project Details ' />
        <PageTop pageTitle={this.state.projectName} />
        <ProjectDetails id={this.state.ProjectPassedID} />
        <Footer />
      </>
    );
  }
}

export default ProjectDetailPage;
