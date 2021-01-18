import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkeletonCard from '../Skeleton/SkeletonCard';

type Props = {
  data: Number[];
  heading?: Boolean;
};

const List: React.FC<Props> = ({ data, heading }) => {
  return (
    <Row>
      {data.map(d => (
        <Col sm={12} md={6} lg={3} key={`${d}`}>
          <SkeletonCard heading={heading} />
        </Col>
      ))}
    </Row>
  );
};

export default List;
