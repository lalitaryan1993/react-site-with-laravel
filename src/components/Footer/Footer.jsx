import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '...',
      email: '...',
      phone: '...',
      facebook: '...',
      twitter: '...',
      instagram: '...',
      footer_credit: '...',
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.FooterData)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            ...result[0],
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      return (
        <>
          <Container fluid className='footerSection'>
            <Row>
              <Col lg='3' md={6} sm={12} className='p-5 text-center'>
                <h2 className='footerName text-center'>Follow Us </h2>

                <div className='social-container'>
                  <a className='facebook social' href={this.state.facebook}>
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                  </a>
                  <a href={this.state.instagram} className='instagram social'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                  </a>
                  <a href={this.state.twitter} className='twitter social'>
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                  </a>
                </div>
              </Col>

              <Col lg='3' md={6} sm={12} className='p-5 text-justify'>
                <h2 className='footerName'>Address </h2>
                <p className='footerDescription'>
                  {this.state.address} <br></br>
                  <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}
                  <br></br>
                  <FontAwesomeIcon icon={faPhone} /> Phone : {this.state.phone}
                  <br></br>
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
              {this.state.footer_credit}
            </a>
          </Container>
        </>
      );
    }
  }
}

export default Footer;
