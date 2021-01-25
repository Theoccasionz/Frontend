import { FC } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Col from 'react-bootstrap/Col';

import SkeletonCard from '../Skeleton/SkeletonCard';
import 'react-alice-carousel/lib/alice-carousel.css';

const defaultItems = [
  <Col>
    <SkeletonCard heading={true} />
  </Col>,
  <Col>
    <SkeletonCard heading={true} />
  </Col>,
  <Col>
    <SkeletonCard heading={true} />
  </Col>,
  <Col>
    <SkeletonCard heading={true} />
  </Col>,
];

interface Props {
  responsive?: any;
  items?: Array<JSX.Element>;
}

const defaultResponsive = {
  568: { items: 1 },
  768: { items: 2 },
  992: { items: 4 },
};

const Carousel: FC<Props> = ({ items, responsive }) => {
  return (
    <AliceCarousel
      mouseTracking
      infinite={true}
      items={items || defaultItems}
      responsive={responsive || defaultResponsive}
      disableDotsControls={true}
    />
  );
};

export default Carousel;
