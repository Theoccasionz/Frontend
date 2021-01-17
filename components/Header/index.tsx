import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header: React.FC = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link href="/index">
          <a>The Occasionz</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          <Nav.Link>
            <Link href="/">
              <a>How it Works</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>List your parties</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>Login</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>Signup</a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
