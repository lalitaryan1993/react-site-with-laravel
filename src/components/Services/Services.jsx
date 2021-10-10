import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            MyData: result,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ title: '????', subTitle: '????' });
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      const MyList = this.state.MyData;
      const MyView = MyList.map((item, index) => {
        return (
          <Col key={index} lg={4} md={6} sm={12}>
            <Zoom bottom>
              <div className='serviceCard text-center'>
                <img className='designIcon' src={item.service_logo} alt='design Icon' />
                <h2 className='serviceName'>{item.service_name}</h2>
                <p className='serviceDescription'>{item.service_description}</p>
              </div>
            </Zoom>
          </Col>
        );
      });
      return (
        <>
          <Container>
            <LightSpeed right>
              <h1 className='serviceMainTitle'>OUR SERVICES</h1>
              <div className='bottomBar'></div>
            </LightSpeed>
            <Row>{MyView}</Row>
          </Container>
        </>
      );
    }
  }
}

export default Services;
