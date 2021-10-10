import React, { Component } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
      <>
        <Container className='text-center'>
          <Row>
            <Col>
              <h1 className='serviceName'>Page is Not Found</h1>
              <h1 className='notFound'>404</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NotFound;
