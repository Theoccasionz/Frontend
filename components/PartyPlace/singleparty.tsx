import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
type Data = {
  url: string;
  themeName: string;
  aboutTheme: string;
  ritems: string;
  nritems: string;
  aboutservice: string;
  occasion: string;
  place: string;
  setupDuration: string;
  cost: string;
};

type Props = {
  data: Data;
};

const Singleparty = (props: Props) => {
  const [show, setShow] = useState(false);
  const { data } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="p-3">
      <div>
        <img
          className="w-100"
          height="400"
          loading="lazy"
          src={data.url}
          alt={`${data.themeName} ${data.occasion}`}
        />
      </div>
      <div>
        <h3 className="">{data.occasion}</h3>
        <h3 className="">{data.place}</h3>
        <h3 className="">{data.themeName}</h3>
        <h3 className="">{data.setupDuration}</h3>
        <p className="d-flex justify-content-around align-items-center">
          <div className="mx-2">Rs.{data.cost}</div>
          <Button variant="primary" className="mx-2">
            Book
          </Button>
          <Button variant="info" onClick={handleShow} className="mx-2">
            Inclusions
          </Button>
        </p>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.themeName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.aboutTheme}</p>
          <p>{data.ritems}</p>
          <p>{data.nritems}</p>
          <p>{data.aboutservice}</p>
          <p className="d-flex justify-content-end">
            <p className="mx-2">{data.cost}</p>
            <p className="mx-2">terms &amp; conditions</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Singleparty;
