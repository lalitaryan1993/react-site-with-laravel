import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';

export class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '.....',
      subTitle: '.....',
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            title: result[0]['home_title'],
            subTitle: result[0]['home_subtitle'],
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ title: '????', subTitle: '????' });
      });
  }
  render() {
    let loader = null;
    if (this.state.loading === true) {
      loader = <Loading />;
    } else {
      loader = null;
    }
    return (
      <>
        <Container fluid className='topFixedBanner'>
          <div className='topBannerOverlay'>
            <Container className='topContent'>
              <Row>
                {loader !== null ? (
                  loader
                ) : (
                  <Col className='text-center'>
                    <h1 className='topTitle' id='topTitle'>
                      {this.state.title}
                    </h1>
                    <h4 className='topSubTitle'>{this.state.subTitle}</h4>

                    <Button variant='primary'>Learn More</Button>
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default TopBanner;
