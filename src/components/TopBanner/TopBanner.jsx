import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../../asset/css/custom.css';

export class TopBanner extends Component {
  render() {
    return (
      <>
        <Container className='topFixedBanner'></Container>
      </>
    );
  }
}

export default TopBanner;
