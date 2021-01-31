import { FC } from 'react';

import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const LoginForm: FC = () => {
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
    <Container>
      <Row>
        <Col xs={10} md={8} lg={6} className="mx-auto mt-4">
          <h3 className="text-center">Host Sign-In</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="forId">
              <Form.Label>Login ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                placeholder="Unique Login Id"
                ref={register({ required: true })}
              />
              {errors.id && <small className="text-danger">Id Required</small>}
            </Form.Group>
            <Form.Group controlId="fornumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="number"
                type="text"
                placeholder="9999999999"
                ref={register({ required: true })}
              />
              {errors.number && <small className="text-danger">Number Required</small>}
            </Form.Group>
            <Form.Group controlId="forpassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="*****"
                ref={register({ required: true })}
              />
              {errors.password && <small className="text-danger">Password Required</small>}
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
