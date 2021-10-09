import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import projectDetails from '../../asset/images/pdetails.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyProjectId: props.id,
      img_two: '',
      project_name: '',
      project_description: '',
      project_features: '',
      live_preview: '',
    };
  }
  componentDidMount() {
    RestClient.GetRequest(`${AppUrl.ProjectDetails}/${this.state.MyProjectId}`)
      .then((result) => {
        console.log(result);
        if (result !== null) {
          this.setState({
            ...result,
          });
        }
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className='about-thumb-wrap after-shape'>
                <img alt='' src={this.state.img_two} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className='mt-5'>
              <div className='project-details'>
                <h1 className='projectDetailsText'>{this.state.project_name}</h1>
                <p className='detailsName'>{ReactHtmlParser(this.state.project_description)}</p>

                <p className='cardSubTitle text-justify'>
                  <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} />{' '}
                  {ReactHtmlParser(this.state.project_features)}
                </p>
                <Button variant='info'>
                  <a
                    className='text-decoration-none'
                    href={this.state.live_preview}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProjectDetails;
