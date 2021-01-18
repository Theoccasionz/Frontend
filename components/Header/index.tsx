import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

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
          <Nav.Item>
            <Form inline>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option selected={true}>Location</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Nav.Item>

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
