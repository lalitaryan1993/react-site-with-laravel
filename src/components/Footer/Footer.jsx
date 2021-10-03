import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid className='footerSection'>
          <Row>
            <Col lg='3' md={6} sm={12} className='p-5 text-center'>
              <h2 className='footerName text-center'>Follow Us </h2>

              <div className='social-container'>
                <a className='facebook social' href='#'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='#' className='instagram social'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
                <a href='#' className='twitter social'>
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
              </div>
            </Col>

            <Col lg='3' md={6} sm={12} className='p-5 text-justify'>
              <h2 className='footerName'>Address </h2>
              <p className='footerDescription'>
                Munda Khera, Jhajjar, Haryana <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email : mail@lalitaryan.com<br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone : +91-8901505876<br></br>
              </p>
            </Col>

            <Col lg='3' md={6} sm={12} className='p-5 text-justify'>
              <h2 className='footerName '>Information </h2>
              <Link className='footerLink' to='/about'>
                About Me{' '}
              </Link>{' '}
              <br></br>
              <Link className='footerLink' to='/about'>
                Company Profile{' '}
              </Link>{' '}
              <br></br>
              <Link className='footerLink' to='/contact'>
                Contact Us{' '}
              </Link>{' '}
              <br></br>
            </Col>

            <Col lg='3' md={6} sm={12} className='p-5 text-justify'>
              <h2 className='footerName '>Policy </h2>
              <Link className='footerLink' to='/refund'>
                Refund Policy{' '}
              </Link>{' '}
              <br></br>
              <Link className='footerLink' to='/terms'>
                Terms And Condition{' '}
              </Link>{' '}
              <br></br>
              <Link className='footerLink' to='/privacy'>
                Privacy And Policy{' '}
              </Link>{' '}
              <br></br>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className='text-center copyrightSection'>
          <a className='copyrightLink' href='#'>
            © Copyright 2021 by Lalit Aryan, All Rights Reserved
          </a>
        </Container>
      </>
    );
  }
}

export default Footer;
