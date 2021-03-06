import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

export class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: [],
      techDescription: [],
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ChartData)
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

    RestClient.GetRequest(AppUrl.HomeTechDesc)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            techDescription: result[0]['tech_description'],
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
      return (
        <>
          <Container>
            <LightSpeed right>
              <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
              <div className='bottomBar'></div>
            </LightSpeed>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart width={150} height={40} data={this.state.MyData}>
                    <XAxis dataKey='Technology' />
                    <Tooltip />
                    <Bar dataKey='Projects' fill='#051b35' />
                  </BarChart>
                </ResponsiveContainer>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <Zoom top>
                  <p className='text-justify serviceDescription'>{ReactHtmlParser(this.state.techDescription)}</p>
                </Zoom>
              </Col>
            </Row>
          </Container>
        </>
      );
    } // end of else
  }
}

export default Analysis;
