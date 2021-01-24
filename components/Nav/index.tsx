import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';

const Index: FC = () => {
  return (
    <Nav variant="pills" defaultActiveKey="private-party" justify>
      <Nav.Item>
        <Nav.Link eventKey="private-party">Private Parties</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Parties in your Town</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">Party at your place</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="party-store">Party Store</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Index;
