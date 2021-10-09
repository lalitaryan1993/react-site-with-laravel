import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faClipboard, faClone, faTags, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseID: props.id,
      long_description: '',
      long_title: '',
      small_img: '',
      short_description: '',
      short_title: '',
      skill_all: '',
      total_duration: '',
      total_lecture: '',
      total_student: '',
      video_url: '',
    };
  }
  componentDidMount() {
    RestClient.GetRequest(`${AppUrl.courseDetails}/${this.state.courseID}`)
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
            <Col lg={8} md={6} sm={12}>
              <h1 className='courseDetailsText'>{this.state.long_title}</h1>
              <img alt='' className='courseDetailsImg' src={this.state.small_img} />
              <br></br> <br></br>
              <p className='CourseAllDescription'>{ReactHtmlParser(this.state.long_description)}</p>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className='widget_feature'>
                <h4 className='widget-title text-center'>Course Features</h4>
                <hr />
                <ul>
                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faUser} /> <span> Enrolled :</span>{' '}
                    {this.state.total_student} students
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faClock} /> <span>Duration :</span>{' '}
                    {this.state.total_duration} hours
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faClipboard} /> <span>Lectures :</span>{' '}
                    {this.state.total_lecture}
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faClone} /> <span>Categories:</span> Technology
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faTags} /> <span>Tags:</span> Android, JavaScript
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> <span>Instructor:</span> Lalit
                    Aryan
                  </li>
                </ul>
                <div className='price-wrap text-center'>
                  <h5>
                    Price:<span>$54.00</span>
                  </h5>
                  <Button variant='warning'>ENROLL COURSE</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className='widget_feature'>
                <h1 className='courseDetailsText'> Skill You Need </h1>
                <hr />
                <ul>
                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Metus interdum metus
                  </li>
                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Ligula cur maecenas
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Metus interdum metus
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} />
                    Ligula cur maecenass
                  </li>

                  <li>
                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Metus interdum metus
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Player src={this.state.video_url}>
                <BigPlayButton position='center' />
              </Player>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CourseDetails;
