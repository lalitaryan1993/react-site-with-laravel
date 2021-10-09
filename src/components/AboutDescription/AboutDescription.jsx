import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class AboutDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutDesc: '...',
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            aboutDesc: result[0]['about'],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Container className='mt-5'>
          <Row>
            <Col sm={12} lg={12} md={12}>
              {ReactHtmlParser(this.state.aboutDesc)}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutDescription;
