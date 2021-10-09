import React, { Component } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '...',
      email: '...',
      phone: '...',
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.FooterData)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            address: result[0]['address'],
            email: result[0]['email'],
            phone: result[0]['phone'],
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sendContact() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    // alert(name + ' ' + email + ' ' + message);
    let JsonData = { email, name, message };
    RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(JsonData))
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          alert('Message sent successfully', result);
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
          <Container className='mt-5'>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h1 className='serviceName'>Quick Connect</h1>

                <Form>
                  <Form.Group>
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control id='name' type='text' placeholder='Enter Your Name' />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control id='email' type='email' placeholder='Enter Your email' />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Message </Form.Label>
                    <Form.Control id='message' as='textarea' rows={3} />
                  </Form.Group>

                  <Button variant='primary' type='button' onClick={this.sendContact}>
                    Submit
                  </Button>
                </Form>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <h1 className='serviceName'>Discuss Now</h1>

                <p className='serviceDescription'>
                  {this.state.address}
                  <br></br>
                  <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}
                  <br></br>
                  <FontAwesomeIcon icon={faPhone} /> Phone : {this.state.phone}
                  <br></br>
                </p>
              </Col>
            </Row>
          </Container>
        </>
      );
    } // end of else
  }
}

export default ContactSection;
