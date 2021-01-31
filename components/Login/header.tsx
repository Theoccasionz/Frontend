import { FC } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

const LoginHeader: FC = () => {
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
              <a>Fee Structure</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>Services</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/">
              <a>FAQs</a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LoginHeader;
