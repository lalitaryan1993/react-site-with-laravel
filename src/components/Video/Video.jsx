import React, { Component } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_url: '',
      video_description: '',
      loading: true,
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
      return (
        <>
          <Container className='text-center'>
            <Zoom top>
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
            </Zoom>
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
    } // end else
  } // end render
}

export default Video;
