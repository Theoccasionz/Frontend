import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { VendorRegistrationForm } from '../../components/Registration/vendor';

const VendorRegistration = () => {
  return (
    <Fragment>
      <Container fluid>
        <VendorRegistrationForm />
      </Container>
    </Fragment>
  );
};

export default VendorRegistration;
