import { FC, Fragment } from 'react';
import Carousel from '../Carousel';
import SkeletonFeatured from '../Skeleton/SkeletonFeatured';

type Props = {
  occasionData?: Array<any>;
  placeData?: Array<any>;
  themeData?: Array<any>;
  posterData: Array<any>;
  placesPage?: boolean;
};

const responsive = {
  360: { items: 1.5 },
  500: { items: 2 },
  700: { items: 3 },
  900: { items: 5 },
  1200: { items: 6 },
};

const PartyPlace: FC<Props> = ({
  occasionData,
  placeData,
  themeData,
  posterData,
  placesPage = false,
}) => {
  return (
    <main>
      {posterData.length > 0 ? (
        <div>
          <Carousel
            items={posterData}
            responsive={{ 568: { items: 1 } }}
            autoPlay={true}
            autoPlayInterval={3000}
          />
        </div>
      ) : (
        <SkeletonFeatured />
      )}
      {!placesPage && (
        <Fragment>
          <section
            style={{ background: 'rgb(173 216 230 / 65%)', padding: '0.5rem', margin: '0.75rem' }}
          >
            <h1 style={{ borderBottom: '1px solid #999999', fontSize: '2.25rem' }}>Occasions</h1>
            <Carousel items={occasionData} />
          </section>
          <section style={{ background: 'rgb(249 224 223)', padding: '0.5rem', margin: '0.75rem' }}>
            <h1 style={{ borderBottom: '1px solid #999999', fontSize: '2.25rem' }}>Theme Based</h1>
            <Carousel items={themeData} />
          </section>
          <section style={{ background: '#FFFFE0', padding: '0.5rem', margin: '0.75rem' }}>
            <h3 style={{ borderBottom: '1px solid #999999', fontSize: '2.25rem' }}>Setup Place</h3>
            <Carousel items={placeData} responsive={responsive} />
          </section>
        </Fragment>
      )}
    </main>
  );
};

export default PartyPlace;
