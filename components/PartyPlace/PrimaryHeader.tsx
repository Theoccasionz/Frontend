import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import style from '../../styles/party-place/primaryHeader.module.css';

const PrimaryHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Form inline>
        <Form.Control as="select">
          <option>Jaipur</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="">
            <a href="/signup" className={style.link}>
              How it Works
            </a>
          </Link>
          <Link href="">
            <a href="/signup" className={style.link}>
              Login
            </a>
          </Link>
          <Link href="">
            <a href="/signup" className={style.link}>
              Signup
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryHeader;
