import { FC, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Registration } from '../../../server/registration';

const VendorRegistrationForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    const {
      companyName,
      vendorName,
      address,
      mobilenumber,
      alternatemobilenumber,
      email,
      vtype,
      city,
    } = data;
    let vendorData = {
      Company_Name: companyName,
      Vendor_Name: vendorName,
      Vendor_Address: address,
      Vendor_MobileNo: mobilenumber,
      Vendor_Email: email,
      Vendor_City_server: city,
      Vendor_Type: vtype,
    };

    let response;
    response = await Registration(vendorData, 'vendor');
    if (!response.error) {
      alert('Submitted Sucessfully');
    } else {
      alert(response.error);
    }
  };

  return (
    <Fragment>
      {loading && 'Loading ...'}
      <Row>
        <Col xs={10} md={8} lg={6} className="mx-auto my-4">
          <h2 className="text-center mb-3">Vendor Registration Form</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Party type
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  ref={register({ required: true })}
                  style={errors.companyName && { border: '1px solid red' }}
                />
                {errors.companyName && <small className="text-danger">Company Name required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Vendor Name
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="vendorName"
                  placeholder="Vendor Name"
                  ref={register({ required: true })}
                  style={errors.vendorName && { border: '1px solid red' }}
                />
                {errors.vendorName && <small className="text-danger">Vendor Name required</small>}
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
                  placeholder="Address"
                  ref={register({ required: true })}
                  style={errors.address && { border: '1px solid red' }}
                />
                {errors.address && <small className="text-danger">Address required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Mobile Number
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="mobilenumber"
                  placeholder="9999999999"
                  ref={register({ required: true })}
                  style={errors.mobilenumber && { border: '1px solid red' }}
                />
                {errors.mobilenumber && (
                  <small className="text-danger">Mobile number Required</small>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Alternate Mobile Number
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="alternatemobilenumber"
                  placeholder="9999999999"
                  ref={register()}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Email Id
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="example@try.com"
                  ref={register({ required: true })}
                  style={errors.email && { border: '1px solid red' }}
                />
                {errors.email && <small className="text-danger">Email Required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                Vendor type
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="vtype"
                  placeholder="Vendor Type"
                  ref={register({ required: true })}
                  style={errors.vtype && { border: '1px solid red' }}
                />
                {errors.vtype && <small className="text-danger">Vendor type required</small>}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={12} lg={4}>
                City Served
              </Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="City Served"
                  ref={register({ required: true })}
                  style={errors.city && { border: '1px solid red' }}
                />
                {errors.city && <small className="text-danger">City Served required</small>}
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="checkbox"
                label="I agree to terms and conditions and I will be working for the occasionz as a vendor"
                ref={register({ required: true })}
              />
              {errors.checkbox && <small className="text-danger">Please check the box</small>}
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default VendorRegistrationForm;
