import React, { Fragment, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';

import style from '../../styles/party-place/primaryHeader.module.css';

const PrimaryHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HOW_IT_WORKS = [
    {
      heading: 'Search & Discover',
      description:
        'Amazing Instant Party Ready Small Decoration Setups for every Occasion, Place and Theme Decor you want',
    },
    {
      heading: 'Select & Book',
      description:
        'Your Favourite Decoration Setup at an affordable price for anytime you want with free cancellation before setup day',
    },
    {
      heading: 'Decoration Setup & Pay',
      description:
        'Our Decoration expert will setup the decoration at your place and Payment can be done after the service through cash, Google Pay or Paytm',
    },
    {
      heading: 'Enjoy & Celebrate',
      description: 'With your loved ones while we make your celebrations hassle free',
    },
  ];
  return (
    <Fragment>
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
            <span style={{ cursor: 'pointer', alignSelf: 'center' }} onClick={handleShow}>
              How it works
            </span>
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
      <Modal show={show} onHide={handleClose} dialogClassName="modal-80w">
        <Modal.Body>
          <Row>
            {HOW_IT_WORKS.map(({ heading, description }, index) => (
              <Col sm={12} key={index + heading} className="mb-3">
                <Row className="align-items-center my-2">
                  <Col sm={6} md={8}>
                    <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{heading}</h3>
                    <p>{description}</p>
                  </Col>
                  <Col sm={6} md={4}>
                    <img loading="lazy" src={`/images/${heading}.png`} width="100%" />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default PrimaryHeader;
