import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { Technology: 'PHP', Projects: 80 },
        { Technology: 'MySql', Projects: 90 },
        { Technology: 'Laravel', Projects: 50 },
        { Technology: 'React', Projects: 40 },
        { Technology: 'Vue Js', Projects: 60 },
        { Technology: 'JavaScript', Projects: 90 },
        { Technology: 'Wordpress', Projects: 80 },
      ],
    };
  }

  render() {
    return (
      <>
        <Container>
          <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
          <div className='bottomBar'></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart width={150} height={40} data={this.state.data}>
                  <XAxis dataKey='Technology' />
                  <Tooltip />
                  <Bar dataKey='Projects' fill='#051b35' />
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className='text-justify serviceDescription'>
                Hi! I'm Lalit Aryan. I'm a web developer with a serious love for coding and passionate Web Developer,
                Programmer.
                <br />
                <br />I am working online for last 4 years and I have a lot of experience in web development. I have
                worked with many different types of projects.
                <br />
                <br />I have worked with PHP, JavaScript, HTML, CSS, Bootstrap, JQuery, React, Wordpress, MySQL,
                Laravel, Vue, Git, Github and many more.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Analysis;
