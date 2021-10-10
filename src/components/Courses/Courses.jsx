import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.CourseHome)
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
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      const MyList = this.state.MyData;
      const MyView = MyList.map((item, index) => {
        return (
          <Col lg={6} md={12} sm={12} key={index}>
            <Zoom bottom>
              <Row>
                <Col lg={6} md={6} sm={12} className='p-2'>
                  <img className='courseImg' alt='course' src={item.small_img} />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className='text-justify serviceName'>{item.short_title}</h5>
                  <p className='text-justify serviceDescription'>{item.short_description}</p>
                  <Link className='courseViewMore float-left' to={`/courseDetails/${item.id}/${item.long_title}`}>
                    View Details
                  </Link>
                </Col>
              </Row>
            </Zoom>
          </Col>
        );
      });

      return (
        <>
          <Container>
            <h1 className='serviceMainTitle'>OUR Courses</h1>
            <div className='bottomBar'></div>
            <Row>{MyView}</Row>
          </Container>
        </>
      );
    } // end of else
  } // end of render
} // end of class

export default Courses;
