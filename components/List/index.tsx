import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkeletonCard from '../Skeleton/SkeletonCard';

type Props = {
  data: Number[];
  heading?: Boolean;
};

const List: React.FC<Props> = ({ data, heading }) => {
  return (
    <Container fluid>
      <Row>
        {data.map(d => (
          <Col id={`${d}`}>
            <SkeletonCard heading={heading} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
