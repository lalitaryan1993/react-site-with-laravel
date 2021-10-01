import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class PageTop extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className='topFixedPage p-0'>
          <div className='topPageOverlay'>
            <Container className='topContentPage'>
              <Row>
                <Col className='text-center'>
                  <h4 className='topPageTitle'>{this.props.pageTitle} </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default PageTop;
