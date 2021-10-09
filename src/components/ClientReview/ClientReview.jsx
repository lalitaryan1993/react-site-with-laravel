import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export class ClientReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReview)
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
        <div>
          <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='circleImg' alt='client review' src={item.client_img} />
              <h2 className='reviewName'>{item.client_title}</h2>
              <p className='reviewDescription'>{item.client_description} </p>
            </Col>
          </Row>
        </div>
      );
    });

    const settings = {
      autoPlay: true,
      autoPlaySpeed: 3000,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <Container fluid className='sliderBack'>
          <h1 className='reviewMainTitle'>TESTIMONIAL</h1>
          <div className='reviewBottomBar'></div>
          <Slider {...settings}>{MyView}</Slider>
        </Container>
      </>
    );
  }
}

export default ClientReview;
