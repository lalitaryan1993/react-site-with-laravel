import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

class AboutDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutDesc: '...',
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information)
      .then((result) => {
        // console.log(result);
        if (result == null) {
          this.setState({ error: true, loading: false });
        } else {
          this.setState({ aboutDesc: result[0]['about'], loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else if (this.state.loading === false && this.state.error === false) {
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
    } // end of else statement
    else if (this.state.error === true) {
      return <WentWrong />;
    } // end if for error
  }
}

export default AboutDescription;
