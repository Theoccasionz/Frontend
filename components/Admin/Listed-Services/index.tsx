import React, { useState, useEffect } from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { imageUpload } from '../../../server';
import Loading from '../../Loading/loading';

import styles from '../../../styles/admin/posters.module.css';
import 'rsuite-table/dist/css/rsuite-table.css';
import { getPosters, addPoster, deletePoster, displayTogglePoster } from '../../../server/admin';

const ListedServices = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [fields, setFields] = useState<any>([
    { packageName: null, price: null, description: null },
  ]);

  const [data, setData] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onTouched' });
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setImage(null);
    reset(
      {
        name: '',
        image: null,
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
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleAddField = () => {
    const values = [...fields];
    values.push({ packageName: null, price: null, description: null });
    setFields(values);
  };

  const handleChangeField = (i: any, event: any, fieldName: string) => {
    const values = [...fields];
    values[i][fieldName] = event.target.value;
    setFields(values);
  };

  const handleRemoveField = (i: any) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  const fetchPosters = async () => {
    try {
      setLoading(true);
      let response = await getPosters();
      setLoading(false);
      setData(response);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosters();
  }, []);

  const handleDeletePoster = async (id: any) => {
    if (confirm(`Are you sure you want to delete the poster with id=${id}`)) {
      try {
        setLoading(true);
        let response = await deletePoster(id);
        setLoading(false);
        if (response.error) {
          throw new Error(response.error);
        } else {
          alert('Deleted successfully. Reload to see changes.');
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const handleTogglePoster = async (id: any, active: number) => {
    if (confirm(`Are you sure you want to ${active ? 'hide' : 'show'} the poster with id=${id}`)) {
      try {
        setLoading(true);
        let data = { id, content: { Poster_Active: active ^ 1 } };
        let response = await displayTogglePoster(data);
        if (response.error) {
          throw new Error(response.error);
        } else {
          alert('Updated successfully. Reload to see changes.');
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('fileName', data.name);
    formData.append('image', image as File);

    try {
      let response: any;
      response = await imageUpload(formData);
      let posterData = {
        Poster_url: response[0].url,
        Poster_Name: data.name,
        Poster_Active: '1',
        Poster_Upload_Date:
          new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        Poster_Upload_Time:
          new Date().getHours().toString() +
          ':' +
          new Date().getMinutes() +
          ':' +
          new Date().getSeconds(),
      };
      let uploadResponse: any;
      uploadResponse = await addPoster(posterData);
      alert('Sucessfully added the poster');
    } catch (error) {
      console.log(error);
      alert('ERROR IN UPLOADING');
    }
    handleClose();
  };

  return (
    <main>
      {loading && <Loading />}
      <section>
        <div className="d-flex align-items-center justify-content-between">
          <h3>Services</h3>
          <button className={styles.addBtn} onClick={handleShow}>
            Add
          </button>
        </div>
        <Table data={data} height={300}>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Title</HeaderCell>
            <Cell dataKey="Poster_Id" />
          </Column>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Video Link</HeaderCell>
            <Cell dataKey="Poster_Id" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Vendor</HeaderCell>
            <Cell dataKey="Poster_Name" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Vendor Contact</HeaderCell>
            <Cell title="yyyy-mm-dd">
              {rowData => {
                const { Poster_Upload_Date } = rowData;
                const uploadDate =
                  new Date(Poster_Upload_Date).getFullYear() +
                  '-' +
                  (new Date(Poster_Upload_Date).getMonth() + 1).toString() +
                  '-' +
                  new Date(Poster_Upload_Date).getDate();
                return <span>{uploadDate}</span>;
              }}
            </Cell>
          </Column>
          <Column width={300} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                return (
                  <span>
                    <button
                      className={styles.delete}
                      onClick={() => handleDeletePoster(rowData.Poster_Id)}
                    >
                      {' '}
                      <b>Delete</b>{' '}
                    </button>{' '}
                    |
                    <button
                      className={styles.noDisplay}
                      onClick={() => handleTogglePoster(rowData.Poster_Id, rowData.Poster_Active)}
                    >
                      {' '}
                      <b>{rowData.Poster_Active ? "Don't display" : 'Display'}</b>{' '}
                    </button>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>Service Model</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
              <Form.Label column md={4} sm={6}>
                Title
              </Form.Label>
              <Col md={8} sm={6}>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  ref={register({ required: true })}
                  style={errors.title && { border: '1px solid red' }}
                />
                {errors.title && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={4} sm={6}>
                Video Link
              </Form.Label>
              <Col md={8} sm={6}>
                <Form.Control
                  type="text"
                  name="link"
                  placeholder="Video link"
                  ref={register({ required: true })}
                  style={errors.link && { border: '1px solid red' }}
                />
                {errors.link && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={2} sm={6}>
                Vendor Name
              </Form.Label>
              <Col md={4} sm={6}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Vendor name"
                  ref={register({ required: true })}
                  style={errors.name && { border: '1px solid red' }}
                />
                {errors.name && <small className="text-danger">Required field</small>}
              </Col>
              <Form.Label column md={2} sm={6}>
                Vendor Contact
              </Form.Label>
              <Col md={4} sm={6}>
                <Form.Control
                  type="number"
                  name="contact"
                  placeholder="Vendor Contact"
                  ref={register({ required: true })}
                  style={errors.contact && { border: '1px solid red' }}
                />
                {errors.contact && <small className="text-danger">Required field</small>}
              </Col>
            </Form.Group>
            <Form.Group>
              <Button variant="secondary" onClick={handleAddField} type="button" className="mr-3">
                Add Package
              </Button>
            </Form.Group>
            {fields.map((field: any, idx: any) => {
              return (
                <Form.Group as={Row} key={`${field}-${idx}`} className="align-items-center">
                  <Form.Label column md={2} sm={6}>
                    Package-{idx}
                  </Form.Label>
                  <Col md={4} sm={6}>
                    <Form.Control
                      type="text"
                      name={`Name-${idx}`}
                      placeholder="Name"
                      ref={register({ required: true })}
                      onChange={e => handleChangeField(idx, e, 'packageName')}
                      style={errors.title && { border: '1px solid red' }}
                    />
                    {errors.name && <small className="text-danger">Required field</small>}
                  </Col>
                  <Form.Label column md={2} sm={6}>
                    Price
                  </Form.Label>
                  <Col md={4} sm={6}>
                    <Form.Control
                      type="number"
                      name={`price-${idx}`}
                      placeholder="Price"
                      ref={register({ required: true })}
                      onChange={e => handleChangeField(idx, e, 'price')}
                      style={errors.title && { border: '1px solid red' }}
                    />
                    {errors.name && <small className="text-danger">Required field</small>}
                  </Col>
                  <Form.Label column md={4} sm={5} className="mt-2">
                    Description
                  </Form.Label>
                  <Col md={6} sm={5} className="mt-2">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name={`description-${idx}`}
                      placeholder="Description"
                      ref={register({ required: true })}
                      onChange={e => handleChangeField(idx, e, 'price')}
                      style={errors.title && { border: '1px solid red' }}
                    />
                    {errors.name && <small className="text-danger">Required field</small>}
                  </Col>
                  <Col sm={2}>
                    <Button type="button" onClick={() => handleRemoveField(idx)}>
                      X
                    </Button>
                  </Col>
                </Form.Group>
              );
            })}
            <div className="">
              <label htmlFor="image_design" className="mr-3">
                Upload Image
              </label>
              <input
                type="file"
                id="upload"
                name="image_design"
                // onChange={e => setDesignFiles(e.target.files)}
                ref={register({ required: true })}
                multiple={true}
              />
              {errors.image_design && <small className="text-danger">Required Field</small>}
            </div>
            <Form.Group className="text-right">
              <Button variant="secondary" onClick={handleClose} type="button" className="mr-3">
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default ListedServices;
