import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoaderIcon from '../../asset/images/loader.svg';
class Loading extends Component {
  render() {
    return (
      <>
        <Container className='text-center'>
          <Row>
            <Col>
              <img className='LoaderAnimation' src={LoaderIcon} alt='loader' />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Loading;
