import React, { Fragment, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import style from '../../styles/party-place/primaryHeader.module.css';

import { useForm } from 'react-hook-form';

const PrimaryHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visible, setVisible] = useState(false);
  const [isSignUpOpened, setIsSignUpOpened] = useState(false);

  const handleToggle = () => setVisible(visible => !visible);

  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onTouched' });

  const resetForm = () => {
    reset(
      {
        name: '',
        emaill: '',
        password: '',
        number: '',
      },
      {
        keepDirty: false,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
        keepErrors: false,
      }
    );
  };

  const onSubmit = (data: FormData, e: any) => {
    console.log(data);
    e.preventDefault();
  };

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
          <Form.Control as="select" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
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
              <span
                style={{ cursor: 'pointer', alignSelf: 'center' }}
                onClick={() => {
                  setIsSignUpOpened(false);
                  handleToggle();
                }}
              >
                Login
              </span>
              <span>/</span>
              <span
                style={{ cursor: 'pointer', alignSelf: 'center' }}
                onClick={() => {
                  setIsSignUpOpened(true);
                  handleToggle();
                }}
              >
                Signup
              </span>
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
      <Modal show={visible} onHide={handleToggle} dialogClassName="modal-80w">
        <Modal.Header className="d-flex align-items-center" closeButton>
          <div className="text-center" style={{ flexGrow: 1 }}>
            <h2>The Occasionz</h2>
            <div>
              <span
                className={`${style.authLabels} mr-3 ${!isSignUpOpened ? style.underline : ''}`}
                onClick={() => {
                  resetForm();
                  setIsSignUpOpened(false);
                }}
              >
                Login
              </span>
              <span
                className={`${style.authLabels} ml-3 ${isSignUpOpened ? style.underline : ''}`}
                onClick={() => {
                  resetForm();
                  setIsSignUpOpened(true);
                }}
              >
                Signup
              </span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={style.form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {isSignUpOpened && (
                <Form.Group controlId="forname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={register({ required: true })}
                  />
                  {errors.name && <small className="text-danger">Required Field</small>}
                </Form.Group>
              )}
              <Form.Group controlId="foremail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="hello@world.com"
                  ref={register({ required: true })}
                />
                {errors.email && <small className="text-danger">Required Field</small>}
              </Form.Group>
              <Form.Group controlId="forpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="*****"
                  ref={register({ required: true })}
                />
                {errors.password && <small className="text-danger">Password Required</small>}
              </Form.Group>
              {isSignUpOpened && (
                <Form.Group controlId="forpassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="number"
                    type="number"
                    placeholder="9900990090"
                    ref={register({ required: true })}
                  />
                  {errors.number && <small className="text-danger">Password Required</small>}
                </Form.Group>
              )}

              <div className="text-center">
                <Button variant="primary" type="submit">
                  {isSignUpOpened ? 'Register' : 'Login'}
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default PrimaryHeader;
