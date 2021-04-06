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
      <section style={{ background: '#B0D3F4', padding: '1rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Choose your occasion</h3>
        <Carousel items={occasionData} />
      </section>
      <section style={{ background: '#ffcccb', padding: '1rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Theme Based</h3>
        <Carousel items={themeData} />
      </section>
      <section style={{ background: '#FFFFE0', padding: '1rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Place</h3>
        <Carousel items={placeData} />
      </section>
    </main>
  );
};

export default PartyPlace;
