import { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from '../components/Carousel';
import Layout from '../components/Layout';
import SkeletonCard from '../components/Skeleton/SkeletonCard';

const Page: FC = () => {
  const responsive = { 568: { items: 1 } };

  return (
    <Layout>
      <h2 className="text-center">Halloween party- at your own risk</h2>
      <Carousel responsive={responsive} />
      <Row className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map(d => (
          <Col key={d} lg={4} md={12} className="mx-auto">
            <SkeletonCard heading={true} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Page;
