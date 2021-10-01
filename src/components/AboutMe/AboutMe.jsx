import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import face from '../../asset/images/face.png';
import { init } from 'ityped';

class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement');
    init(myElement, { showCursor: false, strings: ['Web Developer!', 'Web Designer'] });
  }

  render() {
    return (
      <>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>ABOUT ME</h1>
          <div className='bottom'></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className='aboutMeImage'>
                <img className='aboutImg' alt='aboutImg' src={face} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className='aboutMeBody'>
                <h2 className='aboutMeDetails'>HI There, I'm</h2>
                <h2 className='aboutMeTitle'>Lalit Aryan</h2>
                <h3 className='aboutMeDetails'>
                  Work as <span id='myElement'> </span>{' '}
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutMe;
