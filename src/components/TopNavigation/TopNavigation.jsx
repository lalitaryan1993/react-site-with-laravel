import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navLogo from '../../asset/images/Logo.png';

export class TopNavigation extends Component {
  constructor(params) {
    super(params);
    this.state = {
      navBarTitle: 'navTitle',
      navBarBg: 'navBg',
      variant: 'dark',
      navBarItem: 'navItem',
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: 'navTitleScroll',
        navBarBg: 'navBgScroll',
        variant: 'light',
        navBarItem: 'navItemScroll',
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: 'navTitle',
        navBarBg: 'navBg',
        variant: 'dark',
        navBarItem: 'navItem',
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect fixed='top' expand='lg' className={this.state.navBarBg} variant={this.state.variant}>
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href='#home'>
              <img src={navLogo} className='navLogo' alt='Logo' /> Lets Explore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  Home
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  About
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  Services
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  Courses
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  Portfolio
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href='#deets'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopNavigation;
