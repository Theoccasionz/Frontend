import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './singleparty.module.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';

type Data = {
  Design_ImageUrls: string;
  Design_Theme: string;
  Design_Theme_Desc: string;
  Design_Rentals: string;
  Design_Non_Rentals: string;
  Design_Service_Desc: string;
  Design_Occasion_Specialized: string;
  Design_Setup_Place: string;
  Design_Setup_Duration: string;
  Design_Price: string;
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

  const handleCloseBook = () => setShow(false);
  const handleShowBook = () => setShow(true);

   const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

   interface FormData {
     id: string;
     number: string;
     password: string;
   }

   const onSubmit = (data: FormData, e: any) => {
     console.log(typeof data);
   };

  return (
    <main className={`p-3 ${style.card}`}>
      <div>
        <img
          className="w-100"
          height="400"
          loading="lazy"
          src={data.Design_ImageUrls}
          alt={`${data.Design_Theme} ${data.Design_Occasion_Specialized}`}
        />
      </div>
      <div>
        <h3 className="">{data.Design_Occasion_Specialized}</h3>
        <h3 className="">{data.Design_Setup_Place}</h3>
        <h3 className="">{data.Design_Theme}</h3>
        <h3 className="">{data.Design_Setup_Duration}</h3>
        <p
          className="d-flex justify-content-around align-items-center"
          style={{ flexWrap: 'wrap' }}
        >
          <div className="mx-2">Rs.{data.Design_Price}</div>
          <Button variant="primary" className="mx-2 my-1">
            Book
          </Button>
          <Button variant="info" onClick={handleShow} className="mx-2 my-1">
            Inclusions
          </Button>
        </p>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.Design_Theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.Design_Theme_Desc}</p>
          <p>{data.Design_Rentals}</p>
          <p>{data.Design_Non_Rentals}</p>
          <p>{data.Design_Service_Desc}</p>
          <p className="d-flex justify-content-end">
            <p className="mx-2">{data.Design_Price}</p>
            <p className="mx-2">terms &amp; conditions</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
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
              <Form.Label column md={12} lg={2}>
                Name
              </Form.Label>
              <Col md={12} lg={4}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={register({ required: true })}
                />
                {errors.name && <small className="text-danger">Name required</small>}
              </Col>
              <Form.Label column md={12} lg={2}>
                Contact Number
              </Form.Label>
              <Col md={12} lg={4}>
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
              <Col md={12} lg={4}>
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
              <Form.Label column md={12} lg={2}>
                Nearest Landmark
              </Form.Label>
              <Col md={12} lg={4}>
                <Form.Control
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  ref={register()}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Set up date and time
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="pfeatures"
                  placeholder="Party features"
                  ref={register({ required: true })}
                />
                {errors.pfeatures && <small className="text-danger">Party features required</small>}
              </Col>
            </Form.Group>
           
            <div className="text-center">
              <Button variant="primary" type="submit">
                Book
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBook}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Singleparty;
