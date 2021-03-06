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
  items: Array<JSX.Element>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultResponsive = {
  568: { items: 1 },
  768: { items: 3 },
  992: { items: 5 },
};

const Carousel: FC<Props> = ({ items, responsive, autoPlay = false, autoPlayInterval = 3000 }) => {
  return (
    <AliceCarousel
      mouseTracking
      infinite={true}
      items={(items.length > 0 && items) || defaultItems}
      responsive={responsive || defaultResponsive}
      disableDotsControls={true}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
    />
  );
};

export default Carousel;
