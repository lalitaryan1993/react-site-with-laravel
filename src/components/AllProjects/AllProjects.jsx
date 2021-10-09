import React, { Component } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loading from '../Loading/Loading';
class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll)
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
          <Col lg={4} key={index} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img variant='top' src={item.img_one} />
              <Card.Body>
                <Card.Title className='serviceName'>{item.project_name}</Card.Title>
                <Card.Text className='serviceDescription'>{item.project_description}</Card.Text>
                <Button variant='primary'>
                  <Link className='link-style' to={`/projectDetails/${item.id}/${item.project_name}`}>
                    {' '}
                    View More{' '}
                  </Link>{' '}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });

      return (
        <>
          <Container className='text-center'>
            <h1 className='serviceMainTitle'>ALL PROJECTS</h1>
            <div className='bottom'></div>

            <Row>{MyView}</Row>
          </Container>
        </>
      );
    } //end of else
  }
}

export default AllProjects;
