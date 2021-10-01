import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export class ClientReview extends Component {
  render() {
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
          <Slider {...settings}>
            <div>
              <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className='circleImg'
                    alt='client review'
                    src='https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg'
                  />
                  <h2 className='reviewName'>Lalit Aryan</h2>
                  <p className='reviewDescription'>
                    Hi! I'm Lalit Aryan. I'm a web developer with a serious love for coding I am a passionate Web
                    Developer, Programmer.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className='circleImg'
                    alt='client review'
                    src='https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'
                  />
                  <h2 className='reviewName'>Lalit Aryan</h2>
                  <p className='reviewDescription'>
                    Hi! I'm Lalit Aryan. I'm a web developer with a serious love for coding I am a passionate Web
                    Developer, Programmer.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className='circleImg'
                    alt='client review'
                    src='https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg'
                  />
                  <h2 className='reviewName'>Lalit Aryan</h2>
                  <p className='reviewDescription'>
                    Hi! I'm Lalit Aryan. I'm a web developer with a serious love for coding I am a passionate Web
                    Developer, Programmer.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </>
    );
  }
}

export default ClientReview;
