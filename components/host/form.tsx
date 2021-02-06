import { FC, Fragment } from 'react';

import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ListPartyForm: FC = () => {
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
    <Fragment>
      <h3 className="text-center">List a party</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row}>
          <Form.Label column md={12} lg={2}>
            Party type
          </Form.Label>
          <Col md={12} lg={4}>
            <Form.Control
              type="text"
              name="ptype"
              placeholder="Party type"
              ref={register({ required: true })}
            />
            {errors.ptype && <small className="text-danger">Party type required</small>}
          </Col>
          <Form.Label column md={12} lg={2}>
            Theme Name
          </Form.Label>
          <Col md={12} lg={4}>
            <Form.Control
              type="text"
              name="tname"
              placeholder="Theme Name"
              ref={register({ required: true })}
            />
            {errors.tname && <small className="text-danger">Theme Name required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={12} lg={2}>
            Theme logo
          </Form.Label>
          <Col md={12} lg={2}>
            <Form.Control type="file" name="tlogo" />
          </Col>
          <Form.Label column md={12} lg={1}>
            Date
          </Form.Label>
          <Col md={12} lg={3}>
            <Form.Control
              type="date"
              name="date"
              placeholder="Date"
              ref={register({ required: true })}
            />
            {errors.date && <small className="text-danger">Date Required</small>}
          </Col>
          <Form.Label column md={12} lg={1}>
            Time
          </Form.Label>
          <Col md={12} lg={3}>
            <Form.Control
              type="text"
              name="date"
              placeholder="Time"
              ref={register({ required: true })}
            />
            {errors.time && <small className="text-danger">Time Required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={12} lg={2}>
            No. of Passes
          </Form.Label>
          <Col md={12} lg={2}>
            <Form.Control
              type="text"
              name="number_pass"
              placeholder="Number of passes"
              ref={register({ required: true })}
            />
            {errors.number_pass && <small className="text-danger">Time Required</small>}
          </Col>
          <Form.Label column md={12} lg={1}>
            Date
          </Form.Label>
          <Col md={12} lg={3}>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              ref={register({ required: true })}
            />
            {errors.price && <small className="text-danger">Date Required</small>}
          </Col>
          <Form.Label column md={12} lg={1}>
            Discount
          </Form.Label>
          <Col md={12} lg={3}>
            <Form.Control type="number" name="discount" placeholder="Discount" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={12} lg={4}>
            Party Features
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
        <Form.Group as={Row}>
          <Form.Label column md={12} lg={4}>
            Details
          </Form.Label>
          <Col md={12} lg={8}>
            <Form.Control
              as="textarea"
              rows={5}
              name="pdetails"
              placeholder="Party details"
              //   ref={register({ required: true })}
            />
            {/* {errors.ptype && <small className="text-danger">Party features required</small>} */}
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            List Party
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default ListPartyForm;
