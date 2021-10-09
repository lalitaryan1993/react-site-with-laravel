import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import error from '../../asset/images/error.svg';
class WentWrong extends Component {
  render() {
    return (
      <>
        <Container className='text-center'>
          <Row>
            <Col>
              <img className='errorIcon' src={error} alt='error' />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default WentWrong;
