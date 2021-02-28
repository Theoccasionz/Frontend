import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const RegistrationForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  const onSubmit = (data: any, e: any) => {
    console.log(typeof data);
  };

  return (
    <Row>
      <Col xs={10} md={8} lg={6} className="mx-auto my-4">
        <h2 className="text-center mb-3">Venue Registration Form</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Party type
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="ptype"
                placeholder="Party Type"
                ref={register({ required: true })}
                style={errors.ptype && { border: '1px solid red' }}
              />
              {errors.ptype && <small className="text-danger">Company Name required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Select State
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                as="select"
                name="state"
                ref={register({ required: true })}
                style={errors.state && { border: '1px solid red' }}
              >
                {[1, 2, 3, 4, 5].map(d => (
                  <option key={`state-${d}`}>{d}</option>
                ))}
              </Form.Control>
              {errors.state && <small className="text-danger">State required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Select City
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                as="select"
                name="city"
                ref={register({ required: true })}
                style={errors.city && { border: '1px solid red' }}
              >
                {[1, 2, 3, 4, 5].map(d => (
                  <option key={`city-${d}`}>{d}</option>
                ))}
              </Form.Control>
              {errors.city && <small className="text-danger">City required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              GST Number
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="gst"
                placeholder="000000"
                ref={register({ required: true })}
                style={errors.gst && { border: '1px solid red' }}
              />
              {errors.gst && <small className="text-danger">GST Number Required</small>}
            </Col>
          </Form.Group>
          <h3>Information to be displayed on portal</h3>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Venue Name
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="venueName"
                placeholder="Example Venue"
                ref={register({ required: true })}
                style={errors.venueName && { border: '1px solid red' }}
              />
              {errors.venueName && <small className="text-danger">Venue Name Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Logo
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control type="file" name="logo" ref={register()} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Venue Name
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="area"
                placeholder="Example area"
                ref={register({ required: true })}
                style={errors.area && { border: '1px solid red' }}
              />
              {errors.area && <small className="text-danger">Area Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Address
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="address"
                placeholder="Example address"
                ref={register({ required: true })}
                style={errors.address && { border: '1px solid red' }}
              />
              {errors.address && <small className="text-danger">Address Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Area Pin Code
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="pincode"
                placeholder="000000"
                ref={register({ required: true })}
                style={errors.pincode && { border: '1px solid red' }}
              />
              {errors.pincode && <small className="text-danger">Pin Code Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Phone Number
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="pnumber"
                placeholder="9999999999"
                ref={register({ required: true })}
              />
              {errors.pnumber && <small className="text-danger">Phone number Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Mail Id
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="email"
                name="mailportal"
                placeholder="example@try.com"
                ref={register({ required: true })}
              />
              {errors.mailportal && <small className="text-danger">Mail Required</small>}
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Venue
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                as="select"
                name="venuetype"
                ref={register({ required: true })}
                style={errors.venuetype && { border: '1px solid red' }}
              >
                {[1, 2, 3, 4, 5].map(d => (
                  <option key={`venue-${d}`}>{d}</option>
                ))}
              </Form.Control>
              {errors.city && <small className="text-danger">Venue Type Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Venue Description
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                as="textarea"
                rows={3}
                name="venuedisrciption"
                placeholder="A good place"
                ref={register()}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Venue Images
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control type="file" name="logo" multiple ref={register()} />
            </Col>
          </Form.Group>
          <h3>Contact Details</h3>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Owner/Manager Name
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="ownername"
                placeholder="Mr Smith"
                ref={register({ required: true })}
                style={errors.ownername && { border: '1px solid red' }}
              />
              {errors.ownername && <small className="text-danger">Owner Name Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Contact Number
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="text"
                name="contactnumber"
                placeholder="9999999999"
                ref={register({ required: true })}
                style={errors.contactnumber && { border: '1px solid red' }}
              />
              {errors.contactnumber && (
                <small className="text-danger">Contact Number Required</small>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={4}>
              Company Mail Id
            </Form.Label>
            <Col md={12} lg={8}>
              <Form.Control
                type="email"
                name="mail"
                placeholder="example@comp.com"
                ref={register({ required: true })}
                style={errors.mail && { border: '1px solid red' }}
              />
              {errors.email && <small className="text-danger">Company Email Required</small>}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={12} lg={8}>
              <strong>Note:</strong> Cancel cheque required for account information
            </Form.Label>
            <Col md={12} lg={4}>
              <Form.Control
                type="file"
                name="ccheque"
                multiple
                ref={register({ required: true })}
                style={errors.ccheque && { border: '1px solid red' }}
              />
              {errors.ccheque && <small className="text-danger">Cancelled Cheque Required</small>}
            </Col>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default RegistrationForm;
