import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DesignForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  const onSubmit = (data: any, e: any) => {
    console.log(typeof data);
  };

  return (
    <Row>
      <Col xs={10} md={8} lg={6} className="mx-auto my-4">
        <h2 className="text-center mb-3">Design Addition Form</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Design Name
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="designName"
                placeholder="Design Name"
                ref={register({ required: true })}
                style={errors.designName && { border: '1px solid red' }}
              />
              {errors.designName && <small className="text-danger">Design Name required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Occasion Specialized
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="occasionSpecialized"
                placeholder="Occasion Specialized"
                ref={register({ required: true })}
                style={errors.occasionSpecialized && { border: '1px solid red' }}
              />
              {errors.occasionSpecialized && <small className="text-danger">Vendor Name required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Theme Based
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="theme"
                placeholder="Theme"
                ref={register({ required: true })}
                style={errors.theme && { border: '1px solid red' }}
              />
              {errors.theme && <small className="text-danger">Theme Based required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Set up Place
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="setupPlace"
                placeholder="Place"
                ref={register({ required: true })}
                style={errors.setupPlace && { border: '1px solid red' }}
              />
              {errors.setupPlace && <small className="text-danger">Set Up Place Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Set up Duration
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="setupDuration"
                placeholder="Place"
                ref={register({ required: true })}
                style={errors.setupDuration && { border: '1px solid red' }}
              />
              {errors.setupDuration && <small className="text-danger">Set Up Duration Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Inclusion
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="inclusion"
                placeholder="Vendor Type"
                ref={register({ required: true })}
                style={errors.inclusion && { border: '1px solid red' }}
              />
              {errors.inclusion && <small className="text-danger">Innclusion required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Rental items
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="ritems"
                placeholder="Rental Items"
                ref={register({ required: true })}
                style={errors.ritems && { border: '1px solid red' }}
              />
              {errors.ritems && <small className="text-danger">Rental Items required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Non Rental items
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="nritems"
                placeholder="Rental Items"
                ref={register({ required: true })}
                style={errors.nritems && { border: '1px solid red' }}
              />
              {errors.nritems && <small className="text-danger">Non Rental Items required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Image
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control type="file" name="image" ref={register()} />
            </Col>
          </Form.Group>
          
          <div className="text-center">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default DesignForm;
