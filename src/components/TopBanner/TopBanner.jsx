import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

export class TopBanner extends Component {
  render() {
    return (
      <>
        <Container fluid className='topFixedBanner'>
          <div className='topBannerOverlay'>
            <Container className='topContent'>
              <Row>
                <Col className='text-center'>
                  <h1 className='topTitle'>LETS EXPLORE</h1>
                  <h4 className='topSubTitle'>Learn Professionally</h4>

                  <Button variant='primary'>Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default TopBanner;
