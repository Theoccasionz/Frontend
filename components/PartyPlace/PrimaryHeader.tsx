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
        <Form.Control as="select" style={{ fontSize: '1.5rem' }}>
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
          <Link href="/howitworks">
            <a href="/howitworks" className={style.link} style={{ alignSelf: 'center' }}>
              How it Works
            </a>
          </Link>
          <div style={{ alignSelf: 'center', fontSize: '1.5rem' }}> |</div>
          <div style={{ alignSelf: 'center' }}>
            <Link href="/login">
              <a href="/login" className={style.link}>
                Login
              </a>
            </Link>
            <span>/</span>
            <Link href="/signup">
              <a
                href="/signup"
                className={style.link}
                style={{ marginLeft: '0', paddingLeft: '0' }}
              >
                Signup
              </a>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryHeader;
