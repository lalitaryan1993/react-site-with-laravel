import React, { Component } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_url: '',
      video_description: '',
    };
  }

  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeVideo)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          this.setState({
            video_url: result[0]['video_url'],
            video_description: result[0]['video_description'],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
          <div className='bottomBar'></div>
          <Row>
            <Col lg={6} md={6} sm={12} className='videoText'>
              <p className='serviceDescription text-justify'>{ReactHtmlParser(this.state.video_description)}</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='videoCard'>
              <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash} />
            </Col>
          </Row>
        </Container>

        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player src={this.state.video_url}>
              <BigPlayButton position='center' />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Video;
