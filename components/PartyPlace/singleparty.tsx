import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import style from './singleparty.module.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { IMG_BASE_URL } from '../../constants';

type Data = {
  Design_ImageUrls_Array: string[];
  Design_Theme: string;
  Design_Theme_Desc: string;
  Design_Rentals: string;
  Design_Non_Rentals: string;
  Design_Service_Desc: string;
  Design_Occasion_Specialized: string;
  Design_Setup_Place: string;
  Design_Setup_Duration: string;
  Design_Price: string;
  Design_Inclusions: string;
  Design_Name: string;
};

type Props = {
  data: Data;
};

const Singleparty = (props: Props) => {
  const [show, setShow] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const { data } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseBook = () => setShowBook(false);
  const handleShowBook = () => setShowBook(true);

  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  interface FormData {
    id: string;
    number: string;
    password: string;
  }

  const onSubmit = (data: FormData, e: any) => {
    console.log(e.preventDefault());
  };

  return (
    <main className={`p-3 ${style.card}`}>
      <div>
        <Carousel>
          {data.Design_ImageUrls_Array.map((url: string, index) => (
            <Carousel.Item key={url + index + Math.floor(Math.random() * Math.pow(10, 9))}>
              <img
                className="w-100"
                height="400"
                loading="lazy"
                src={IMG_BASE_URL + url}
                alt={`${data.Design_Theme} ${data.Design_Occasion_Specialized}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <p className="mb-0">
          <span className="h2">Design Name:</span>{' '}
          <span style={{ fontSize: '1.75rem' }}>{data.Design_Name}</span>
        </p>
        <p className="mb-0">
          <span className="h2">Occasion:</span>{' '}
          <span style={{ fontSize: '1.75rem' }}>{data.Design_Occasion_Specialized}</span>
        </p>
        <p className="mb-0">
          <span className="h2">Place:</span>{' '}
          <span style={{ fontSize: '1.75rem' }}>{data.Design_Setup_Place}</span>
        </p>
        <p className="mb-0">
          <span className="h2">Theme:</span>
          <span style={{ fontSize: '1.75rem' }}>{data.Design_Theme}</span>
        </p>
        <p className="mb-0">
          <span className="h2">Setup Time:</span>
          <span style={{ fontSize: '1.75rem' }}>{data.Design_Setup_Duration}</span>
        </p>
        <p
          className="d-flex justify-content-around align-items-center"
          style={{ flexWrap: 'wrap' }}
        >
          <div className="mx-2">Rs.{data.Design_Price}</div>
          <Button onClick={handleShowBook} className={`mx-2 my-1 ${style.button}`}>
            Book
          </Button>
          <Button onClick={handleShow} className={`mx-2 my-1 ${style.button}`}>
            Inclusions
          </Button>
        </p>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.Design_Theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>About Theme: </strong>
            {data.Design_Theme_Desc}
          </p>
          <p>
            <strong>Rental Items: </strong>
            {data.Design_Rentals}
          </p>
          <p>
            <strong>Non Rental Items: </strong>
            {data.Design_Non_Rentals}
          </p>
          <p>
            <strong>Service Description :</strong>
            {data.Design_Service_Desc}
          </p>
          <p>
            <strong>Design Inclusions :</strong>
            {data.Design_Inclusions}
          </p>
          <p className="d-flex justify-content-end">
            <p className="mx-2">Rs. {data.Design_Price}</p>
            <p className="mx-2">terms &amp; conditions</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={style.button}
            onClick={() => {
              handleClose();
              handleShowBook();
            }}
          >
            Book
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showBook} onHide={handleCloseBook} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.Design_Theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{data.Design_Theme} - Booking</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Name
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={register({ required: true })}
                />
                {errors.name && <small className="text-danger">Name required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Contact Number
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  type="number"
                  name="number"
                  placeholder="Contact Number"
                  ref={register({ required: true })}
                />
                {errors.number && <small className="text-danger">Contact Number required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Address
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Name"
                  ref={register({ required: true })}
                />
                {errors.address && <small className="text-danger">Address required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Nearest Landmark
              </Form.Label>
              <Col lg={10}>
                <Form.Control type="text" name="landmark" placeholder="Landmark" ref={register()} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Any comments
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="any_comments"
                  placeholder="Comments"
                  ref={register({ required: true })}
                />
                {errors.any_comments && <small className="text-danger">Required field.</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2}>
                Set Up Date
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  type="date"
                  name="date"
                  placeholder="01/01/2021"
                  ref={register({ required: true })}
                />
                {errors.date && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column md={2}>
                <strong>Decoration Start Time (24 hr format)</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Group as={Row}>
                  <Form.Label column md={2}>
                    Hours
                  </Form.Label>
                  <Col md={4}>
                    <Form.Control
                      type="number"
                      name="hours"
                      ref={register({ required: true })}
                      placeholder="0"
                    />
                    {errors.hours && <small className="text-danger">Required field</small>}
                  </Col>
                  <Form.Label column md={2}>
                    Minutes
                  </Form.Label>
                  <Col md={4}>
                    <Form.Control
                      type="number"
                      name="minutes"
                      ref={register({ required: true })}
                      placeholder="0"
                    />
                    {errors.minutes && <small className="text-danger">Required field</small>}
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>

            <div className="text-center">
              <Button className={style.button} type="submit">
                Book
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default Singleparty;
