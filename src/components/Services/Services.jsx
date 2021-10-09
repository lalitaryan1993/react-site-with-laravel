import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            MyData: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ title: '????', subTitle: '????' });
      });
  }

  render() {
    const MyList = this.state.MyData;
    const MyView = MyList.map((item, index) => {
      return (
        <Col key={index} lg={4} md={6} sm={12}>
          <div className='serviceCard text-center'>
            <img className='designIcon' src={item.service_logo} alt='design Icon' />
            <h2 className='serviceName'>{item.service_name}</h2>
            <p className='serviceDescription'>{item.service_description}</p>
          </div>
        </Col>
      );
    });
    return (
      <>
        <Container>
          <h1 className='serviceMainTitle'>OUR SERVICES</h1>
          <div className='bottomBar'></div>
          <Row>{MyView}</Row>
        </Container>
      </>
    );
  }
}

export default Services;
