import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

import 'rsuite-table/dist/css/rsuite-table.css';
import styles from '../../../styles/admin/vendor-details.module.css';

const fakeData = [
  {
    vendor_name: 'Random',
    vendor_id: Math.floor(Math.random() * 10000).toString(),
    contact_number: Math.floor(Math.random() * 1000000000).toString(),
    alternate_number: Math.floor(Math.random() * 1000000000).toString(),
    emailId: 'Random Email ID',
    vendor_type: 'Random Vendor',
  },
  {
    vendor_name: 'Random',
    vendor_id: Math.floor(Math.random() * 10000).toString(),
    contact_number: Math.floor(Math.random() * 1000000000).toString(),
    alternate_number: Math.floor(Math.random() * 1000000000).toString(),
    emailId: 'Random Email ID of trying@gmail.com',
    vendor_type: 'Random Vendor',
  },
  {
    vendor_name: 'Random',
    vendor_id: Math.floor(Math.random() * 10000).toString(),
    contact_number: Math.floor(Math.random() * 1000000000).toString(),
    alternate_number: Math.floor(Math.random() * 1000000000).toString(),
    emailId: 'Random Email ID',
    vendor_type: 'Random Vendor',
  },
  {
    vendor_name: 'Random',
    vendor_id: Math.floor(Math.random() * 10000).toString(),
    contact_number: Math.floor(Math.random() * 1000000000).toString(),
    alternate_number: Math.floor(Math.random() * 1000000000).toString(),
    emailId: 'Random Email ID',
    vendor_type: 'Random Vendor',
  },
];
const VendorDetailsComp = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  const onSubmit = (data: any, e: any) => {
    console.log(typeof data);
    console.log(data);
    e.preventDefault();

    handleClose();
  };

  return (
    <main>
      <div className="text-right">
        <button className={`${styles.addBtn} mt-4`} onClick={handleShow}>
          Add
        </button>
      </div>
      <section className="mt-4 d-flex align-items-center">
        <div>
          <label htmlFor="Occassion">Vendor Id</label>
          <select className={``} name="Occassion" onChange={() => console.log('HELLO')}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="ml-4">
          <label htmlFor="Theme">Vendor Type</label>
          <select className={``} name="Theme" onChange={() => console.log('Hello')}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>
      <section className="mt-4">
        <Table data={fakeData} height={300}>
          <Column width={100} align="center" fixed resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="vendor_id" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="vendor_name" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Contact Number</HeaderCell>
            <Cell dataKey="contact_number" />
          </Column>
          <Column align="center" flexGrow={1} minWidth={200}>
            <HeaderCell>Alternate Number</HeaderCell>
            <Cell dataKey="alternate_number" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Email ID</HeaderCell>
            <Cell dataKey="emailId" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Vendor Type</HeaderCell>
            <Cell dataKey="vendor_type" />
          </Column>
          <Column width={200} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                return (
                  <span>
                    <button className={styles.edit} onClick={handleShow}>
                      {' '}
                      <b>Edit</b>{' '}
                    </button>{' '}
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Vendor Registration Form</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Vendor Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={register({ required: true })}
                  style={errors.name && { border: '1px solid red' }}
                />
                {errors.name && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Vendor ID
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="aj9116"
                  ref={register({ required: true })}
                  style={errors.id && { border: '1px solid red' }}
                />
                {errors.id && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                City Served
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Jaipur"
                  ref={register({ required: true })}
                  style={errors.city && { border: '1px solid red' }}
                />
                {errors.city && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Vendor Type
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="Random"
                  ref={register({ required: true })}
                  style={errors.type && { border: '1px solid red' }}
                />
                {errors.type && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Contact Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="contact"
                  placeholder="9999999999"
                  ref={register({ required: true })}
                  style={errors.contact && { border: '1px solid red' }}
                />
                {errors.contact && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Alternate Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="alternate"
                  placeholder="0123456789"
                  ref={register({ required: true })}
                  style={errors.alternate && { border: '1px solid red' }}
                />
                {errors.alternate && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Email ID
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="test@example.com"
                  ref={register({ required: true })}
                  style={errors.email && { border: '1px solid red' }}
                />
                {errors.email && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  ref={register({ required: true })}
                  style={errors.address && { border: '1px solid red' }}
                />
                {errors.address && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Owner Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="owner"
                  placeholder="Name"
                  ref={register({ required: true })}
                  style={errors.owner && { border: '1px solid red' }}
                />
                {errors.owner && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>

            <Form.Group className="text-right">
              <Button variant="secondary" onClick={handleClose} type="button" className="mr-3">
                Delete
              </Button>
              <Button variant="primary" type="submit">
                Save 
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default VendorDetailsComp;
