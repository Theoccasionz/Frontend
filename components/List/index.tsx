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
        <Col key={`${d}`}>
          <SkeletonCard heading={heading} />
        </Col>
      ))}
    </Row>
  );
};

export default List;
