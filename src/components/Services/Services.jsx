import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';
export class Services extends Component {
  render() {
    return (
      <>
        <Container>
          <h1 className='serviceMainTitle'>OUR SERVICES</h1>
          <div className='bottomBar'></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className='serviceCard text-center'>
                <img className='designIcon' src={designIcon} alt='design Icon' />
                <h2 className='serviceName'>E-Commerce</h2>
                <p className='serviceDescription'>I will design and develop e-commerce online store website.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className='serviceCard text-center'>
                <img className='designIcon' src={ecommerceIcon} alt='E-Commerce Icon' />
                <h2 className='serviceName'>Web Design</h2>
                <p className='serviceDescription'>
                  Qualified web design and attractive effects which catch the visitor's Eye.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className='serviceCard text-center'>
                <img className='designIcon' src={webIcon} alt='web Icon' />
                <h2 className='serviceName'>E-Commerce</h2>
                <p className='serviceDescription'>
                  CLean and fresh issue free code to make your website dynamic perfectly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Services;
