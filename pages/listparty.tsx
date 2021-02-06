import { FC, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import ListPartyForm from '../components/host/form';
import ListPartyHeader from '../components/host/header';

const ListPartyPage: FC = () => {
  return (
    <Fragment>
      <ListPartyHeader />
      <Container fluid>Fixed venue details</Container>
      <Container>
        <ListPartyForm />
      </Container>
    </Fragment>
  );
};

export default ListPartyPage;
