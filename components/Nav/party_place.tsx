import { FC } from 'react';
import Carousel from '../Carousel';
import SkeletonFeatured from '../Skeleton/SkeletonFeatured';

type Props = {
  occasionData: Array<any>;
  placeData: Array<any>;
  themeData: Array<any>;
  posterData: Array<any>;
};

const PartyPlace: FC<Props> = ({ occasionData, placeData, themeData, posterData }) => {
  return (
    <main>
      {posterData.length > 0 ? (
        <div>
          <Carousel items={posterData} responsive={{ 568: { items: 1 } }} />
        </div>
      ) : (
        <SkeletonFeatured />
      )}
      <section style={{ background: 'rgb(173 216 230 / 65%)', padding: '1rem', margin: '0.75rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Choose your occasion</h3>
        <Carousel items={occasionData} />
      </section>
      <section style={{ background: 'rgb(249 224 223)', padding: '1rem', margin: '0.75rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Theme Based</h3>
        <Carousel items={themeData} />
      </section>
      <section style={{ background: '#FFFFE0', padding: '1rem', margin: '0.75rem' }}>
        <h3 style={{ borderBottom: '1px solid #999999' }}>Place</h3>
        <Carousel items={placeData} />
      </section>
    </main>
  );
};

export default PartyPlace;
