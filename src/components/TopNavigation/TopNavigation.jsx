import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navLogo from '../../asset/images/Logo.png';
import { NavLink } from 'react-router-dom';
export class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarTitle: 'navTitle',
      navBarBg: 'navBg',
      variant: 'dark',
      navBarItem: 'navItem',
      pageTitle: props.title,
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
        <title>{this.state.pageTitle}</title>
        <Navbar collapseOnSelect fixed='top' expand='lg' className={this.state.navBarBg} variant={this.state.variant}>
          <Container>
            <Navbar.Brand className={this.state.navBarTitle}>
              <NavLink exact to='/' className='navItem'>
                {' '}
                <img src={navLogo} className='navLogo' alt='Logo' /> Lets Explore
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/'>
                    HOME
                  </NavLink>{' '}
                </Nav.Link>

                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/about'>
                    ABOUT
                  </NavLink>{' '}
                </Nav.Link>

                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/service'>
                    SERVICE
                  </NavLink>{' '}
                </Nav.Link>

                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/course'>
                    COURSES
                  </NavLink>{' '}
                </Nav.Link>

                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/portfolio'>
                    PORTFOLIO
                  </NavLink>{' '}
                </Nav.Link>

                <Nav.Link>
                  {' '}
                  <NavLink exact className={this.state.navBarItem} to='/contact'>
                    CONTACT US
                  </NavLink>{' '}
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
