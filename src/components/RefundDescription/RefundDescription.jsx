import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
class RefundDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refundDesc: '...',
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            refundDesc: result[0]['refund'],
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
          <Container className='mt-5'>
            <Row>
              <Col lg={12} md={12} sm={12}>
                {ReactHtmlParser(this.state.refundDesc)}
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default RefundDescription;
