import { FC } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import SkeletonParty from '../components/Skeleton/SkeletonParty';
import Nav from 'react-bootstrap/Nav';

const Page: FC = () => {
  return (
    <Layout>
      <Container fluid>
        <SkeletonParty />
        <Nav variant="pills" defaultActiveKey="private-party" justify>
          <Nav.Item>
            <Nav.Link eventKey="private-party">Private Parties</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Parties in your Town</Nav.Link>
          </Nav.Item>
        </Nav>
        <SkeletonParty />
        <SkeletonParty />
      </Container>
    </Layout>
  );
};

export default Page;
