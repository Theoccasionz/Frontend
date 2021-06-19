import React, { useState, useEffect } from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { imageUpload } from '../../../server';

import styles from '../../../styles/admin/posters.module.css';
import 'rsuite-table/dist/css/rsuite-table.css';
import { getPosters, addPoster, deletePoster, displayTogglePoster } from '../../../server/admin';

const fakeData = [
  //   {
  //     id: 1,
  //     avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg',
  //     city: 'New Amieshire',
  //     email: 'Leora13@yahoo.com',
  //     firstName: 'Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe',
  //     lastName: 'Schuppe',
  //     street: 'Ratke Port',
  //     zipCode: '17026-3154',
  //     date: '2016-09-23T07:57:40.195Z',
  //     bs: 'global drive functionalities',
  //     catchPhrase: 'Intuitive impactful software',
  //     companyName: 'Lebsack - Nicolas',
  //     words: 'saepe et omnis',
  //     sentence: 'Quos aut sunt id nihil qui.',
  //     stars: 820,
  //     followers: 70,
  //   },
  //   {
  //     id: 2,
  //     avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/thaisselenator_/128.jpg',
  //     city: 'New Gust',
  //     email: 'Mose_Gerhold51@yahoo.com',
  //     firstName: 'Janis',
  //     lastName: 'Vandervort',
  //     street: 'Dickinson Keys',
  //     zipCode: '43767',
  //     date: '2017-03-06T09:59:12.551Z',
  //     bs: 'e-business maximize bandwidth',
  //     catchPhrase: 'De-engineered discrete secured line',
  //     companyName: 'Glover - Hermiston',
  //     words: 'deleniti dolor nihil',
  //     sentence: 'Illo quidem libero corporis laborum.',
  //     stars: 1200,
  //     followers: 170,
  //   },
  //   {
  //     id: 3,
  //     avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg',
  //     city: 'Lefflerstad',
  //     email: 'Frieda.Sauer61@gmail.com',
  //     firstName: 'Makenzie',
  //     lastName: 'Bode',
  //     street: 'Legros Divide',
  //     zipCode: '54812',
  //     date: '2016-12-08T13:44:26.557Z',
  //     bs: 'plug-and-play e-enable content',
  //     catchPhrase: 'Ergonomic 6th generation challenge',
  //     companyName: 'Williamson - Kassulke',
  //     words: 'quidem earum magnam',
  //     sentence: 'Nam qui perferendis ut rem vitae saepe.',
  //     stars: 610,
  //     followers: 170,
  //   },
  {
    id: '1',
    name: 'Hello',
    date: new Date().toString(),
    action: 'New action',
  },
  {
    id: '2',
    name: 'Hello',
    date: new Date().toString(),
    action: 'New action',
  },
  {
    id: '3',
    name: 'Hello',
    date: new Date().toString(),
    action: 'New action',
  },
];

const PostersComp = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onTouched' });
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

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const fetchPosters = async () => {
    try {
      let response = await getPosters();
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosters();
  }, []);

  const handleDeletePoster = async (id: any) => {
    if (confirm(`Are you sure you want to delete the poster with id=${id}`)) {
      try {
        let data = { id };
        let response = await deletePoster(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleTogglePoster = async (id: any, active: number) => {
    if (confirm(`Are you sure you want to ${active ? 'hide' : 'show'} the poster with id=${id}`)) {
      try {
        let data = { id };
        let response = await displayTogglePoster(data);
      } catch (error) {
        console.error(error);
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
          new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate(),
        Poster_Upload_Time:
          new Date().getHours().toString() +
          ':' +
          new Date().getMinutes() +
          ':' +
          new Date().getSeconds(),
      };
      let uploadResponse: any;
      uploadResponse = await addPoster(posterData);
    } catch (error) {
      console.log(error);
      alert('ERROR IN UPLOADING');
    }
    handleClose();
  };

  return (
    <main>
      <h3>Posters</h3>
      <section>
        <div className="d-flex align-items-center">
          <h4 className="mr-2">Home Page</h4>
          <button className={styles.addBtn} onClick={handleShow}>
            Add
          </button>
        </div>
        <Table data={data} height={300}>
          <Column width={100} align="center" fixed resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="Poster_Id" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="Poster_Name" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Date</HeaderCell>
            <Cell title="yyyy-mm-dd">
              {rowData => {
                const { Poster_Upload_Date } = rowData;
                const uploadDate =
                  new Date(Poster_Upload_Date).getFullYear() +
                  '-' +
                  new Date(Poster_Upload_Date).getMonth() +
                  '-' +
                  new Date(Poster_Upload_Date).getDate();
                return <span>{uploadDate}</span>;
              }}
            </Cell>
          </Column>
          <Column width={200} align="center">
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
                      <b>Don't display</b>{' '}
                    </button>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>
      <section className="mt-4">
        <div className="d-flex align-items-center">
          <h4 className="mr-2">Listing Page</h4>
          <button className={styles.addBtn} onClick={handleShow}>
            Add
          </button>
        </div>
        <Table data={data} height={300}>
          <Column width={100} align="center" fixed resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="Poster_Id" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="Poster_Name" />
          </Column>
          <Column align="center" flexGrow={1}>
            <HeaderCell>Date</HeaderCell>
            <Cell title="yyyy-mm-dd">
              {rowData => {
                const { Poster_Upload_Date } = rowData;
                const uploadDate =
                  new Date(Poster_Upload_Date).getFullYear() +
                  '-' +
                  new Date(Poster_Upload_Date).getMonth() +
                  '-' +
                  new Date(Poster_Upload_Date).getDate();
                return <span>{uploadDate}</span>;
              }}
            </Cell>
          </Column>
          <Column width={200} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                function handleAction() {
                  alert(`id:${rowData.id}`);
                }
                return (
                  <span>
                    <button className={styles.delete} onClick={handleAction}>
                      {' '}
                      <b>Delete</b>{' '}
                    </button>{' '}
                    |
                    <button className={styles.noDisplay} onClick={handleAction}>
                      {' '}
                      <b>Don't display</b>{' '}
                    </button>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
              <Form.Label column md={4} sm={6}>
                Theme Name
              </Form.Label>
              <Col md={8} sm={6}>
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
            <Form.Group>
              <label htmlFor="upload" className={styles.label}>
                <input
                  type="file"
                  id="upload"
                  name="image"
                  hidden={true}
                  ref={register({ required: true })}
                  onChange={handleImageChange}
                />
                Upload Image
              </label>
              {errors.image && <small className="text-danger">Image is required</small>}
            </Form.Group>
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

export default PostersComp;
