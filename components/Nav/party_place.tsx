import { FC } from 'react';
import Carousel from '../Carousel';
import SkeletonFeatured from '../Skeleton/SkeletonFeatured';

const PartyPlace: FC = () => {
  return (
    <main>
      <SkeletonFeatured />
      <h3>Choose your occasion</h3>
      <Carousel items={[]} />
      <h3>Theme Based</h3>
      <Carousel items={[]} />
      <h3>Place</h3>
      <Carousel items={[]} />
    </main>
  );
};

export default PartyPlace;
