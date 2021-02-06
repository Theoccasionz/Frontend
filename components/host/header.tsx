import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ListPartyHeader: React.FC = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link href="/index">
          <a>The Occasionz</a>
        </Link>
      </Navbar.Brand>
      <Nav.Item>The Host Account</Nav.Item>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          
          <Nav.Link>
            <Link href="/">
              <a>Logout</a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ListPartyHeader;
