import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import { RegistrationForm } from '../../components/Registration';

const RegistrationPage = () => {
  return (
    <Fragment>
      <Container fluid>
        <RegistrationForm />
      </Container>
    </Fragment>
  );
};

export default RegistrationPage;
