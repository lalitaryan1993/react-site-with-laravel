import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
class PrivacyDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPrivacy: '...',
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            aboutPrivacy: result[0]['privacy'],
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
            <Col lg={12} md={12} sm={12}>
              {ReactHtmlParser(this.state.aboutPrivacy)}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PrivacyDescription;
