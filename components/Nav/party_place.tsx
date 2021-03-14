import { FC } from 'react';
import Carousel from '../Carousel';
import SkeletonFeatured from '../Skeleton/SkeletonFeatured';

type Props = {
  occasionData: Array<any>;
  placeData: Array<any>;
  themeData: Array<any>;
};

const PartyPlace: FC<Props> = ({ occasionData, placeData, themeData }) => {
  return (
    <main>
      <SkeletonFeatured />
      <h3>Choose your occasion</h3>
      <Carousel items={occasionData} />
      <h3>Theme Based</h3>
      <Carousel items={themeData} />
      <h3>Place</h3>
      <Carousel items={placeData} />
    </main>
  );
};

export default PartyPlace;
