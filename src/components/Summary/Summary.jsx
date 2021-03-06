import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { faCheckSquare, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
export class Summary extends Component {
  render() {
    return (
      <>
        <Container fluid className='summaryBanner'>
          <div className='summaryBannerOverlay'>
            <Container className='text-center'>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className='countSection'>
                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon className='iconProject' icon={faGlobe} />
                        <h2 className='countNumber'>
                          <CountUp start={0} end={35000} duration={1}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h2>
                        <h4 className='countTitle'>Students Worldwide</h4>

                        <hr className='hrBar ' />
                      </Zoom>
                    </Col>
                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon className='iconProject' icon={faLaptop} />
                        <h2 className='countNumber'>
                          <CountUp start={0} end={22} duration={1.1}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h2>
                        <h4 className='countTitle'>Course Published</h4>
                        <hr className='hrBar ' />
                      </Zoom>
                    </Col>
                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon className='iconProject' icon={faStar} />
                        <h2 className='countNumber'>
                          <CountUp start={0} end={3000} duration={1.2}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h2>
                        <h4 className='countTitle'>Student Review</h4>
                        <hr className='hrBar ' />
                      </Zoom>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <LightSpeed right>
                    <Card className='workCard'>
                      <Card.Body>
                        <Card.Title className='cardTitle'>What I Have Achieved</Card.Title>
                        <Card.Text>
                          <p className='cardSubTitle text-start'>
                            <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Requirement Gathering
                          </p>
                          <p className='cardSubTitle text-start'>
                            <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> System Analysis
                          </p>
                          <p className='cardSubTitle text-start'>
                            <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Coding Testing
                          </p>
                          <p className='cardSubTitle text-start'>
                            <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Implementation
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </LightSpeed>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default Summary;
