import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

import { addVendor, getVendors } from '../../../server/admin/index';

import 'rsuite-table/dist/css/rsuite-table.css';
import styles from '../../../styles/admin/vendor-details.module.css';

const VendorDetailsComp = () => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [idFilter, setIdFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const handleShow = (id?: Number) => {
    if (id) {
      let result: any = allData.find((d: any) => d.Vendor_Id === id);
      if (result) {
        reset(
          {
            name: result.Vendor_Name,
            id: result.Vendor_Id,
            city: result.Vendor_City_server,
            type: result.Vendor_Type,
            contact: result.Vendor_MobileNo,
            alternate: result.Vendor_Alt_MobileNo,
            email: result.Vendor_Email,
            address: result.Vendor_Address,
            owner: result.Company_Name,
          },
          {
            errors: false,
            dirtyFields: false,
            isDirty: false,
            isSubmitted: false,
            touched: false,
            isValid: false,
            submitCount: false,
          }
        );
      }
    }
    setShow(true);
  };
  const handleClose = () => {
    reset(
      {
        name: '',
        id: '',
        city: '',
        type: '',
        contact: '',
        alternate: '',
        email: '',
        address: '',
        owner: '',
      },
      {
        errors: false,
        dirtyFields: false,
        isDirty: false,
        isSubmitted: false,
        touched: false,
        isValid: false,
        submitCount: false,
      }
    );
    setShow(false);
  };
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    e.preventDefault();

    const { name, id, city, type, contact, alternate, email, address, owner } = data;

    let vendorData = {
      Company_Name: owner,
      Vendor_Address: address,
      Vendor_Alt_MobileNo: alternate,
      Vendor_City_server: city,
      Vendor_Email: email,
      Vendor_Id: id,
      Vendor_MobileNo: contact,
      Vendor_Name: name,
      Vendor_Type: type,
    };

    try {
      let response = await addVendor(vendorData);
      console.log(response);
    } catch (error) {
      alert(error);
    }

    handleClose();
  };

  const fetchVendors = async () => {
    try {
      let response = await getVendors();
      setAllData(response);
      setFilteredData(response);
    } catch (error) {
      alert(error);
    }
  };

  const renderOptions = (data: any, field: string) => {
    let options: any[] = [];
    options.push('all');
    data.forEach((element: any) => {
      let found = options.some(el => el === element[field]);
      if (!found) {
        options.push(element[field]);
      }
    });
    return options.map((opt: any, i: any) => (
      //@ts-ignore
      <option value={opt} key={`${opt}-${i}`}>
        {opt}
      </option>
    ));
  };

  useEffect(() => {
    if (idFilter === 'all' && typeFilter === 'all') {
      setFilteredData(allData);
    } else if (idFilter === 'all') {
      setFilteredData(allData.filter((el: any) => el.Vendor_Type === typeFilter));
    } else if (typeFilter === 'all') {
      setFilteredData(allData.filter((el: any) => el.Vendor_Id == idFilter));
    } else {
      setFilteredData(
        allData.filter((el: any) => el.Vendor_Id == idFilter && el.Vendor_Type === typeFilter)
      );
    }
  }, [idFilter, typeFilter]);

  useEffect(() => {
    fetchVendors();
  }, []);
  return (
    <main>
      <div className="text-right">
        <button className={`${styles.addBtn} mt-4`} onClick={() => handleShow(undefined)}>
          Add
        </button>
      </div>
      <section className="mt-4 d-flex align-items-center">
        <div>
          <label htmlFor="Occassion">Vendor Id</label>
          <select className={``} name="Occassion" onChange={e => setIdFilter(e.target.value)}>
            {renderOptions(allData, 'Vendor_Id')}
          </select>
        </div>
        <div className="ml-4">
          <label htmlFor="Theme">Vendor Type</label>
          <select className={``} name="Theme" onChange={e => setTypeFilter(e.target.value)}>
            {renderOptions(allData, 'Vendor_Type')}
          </select>
        </div>
      </section>
      <section className="mt-4">
        <Table data={filteredData} height={300}>
          <Column width={300} align="center" fixed resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="Vendor_Id" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="Vendor_Name" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Contact Number</HeaderCell>
            <Cell dataKey="Vendor_MobileNo" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Alternate Number</HeaderCell>
            <Cell dataKey="Vendor_Alt_MobileNo" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Email ID</HeaderCell>
            <Cell dataKey="Vendor_Email" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Vendor Type</HeaderCell>
            <Cell dataKey="Vendor_Type" />
          </Column>
          <Column width={300} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                return (
                  <span>
                    <button
                      className={styles.edit}
                      onClick={() => {
                        handleShow(rowData.Vendor_Id);
                      }}
                    >
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
                  ref={register({ required: false })}
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
