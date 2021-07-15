import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PartyPlace from '../../components/PartyPlace';
import { fetchDesigns } from '../../server/design';
import PosterCard from '../../components/PartyPlace/PosterCard';
import { posterData } from '../../server/party-place';
import LayoutPartyPlace from '../../layouts/party-place';
import Carousel from '../../components/Carousel';
import SkeletonFeatured from '../../components/Skeleton/SkeletonFeatured';

const PartyPlaceTheme = () => {
  const router = useRouter();

  const [posters, setPosters] = useState([]);

  // const getDesigns = async () => {

  //   let response = await fetchDesigns({
  //     theme: router.query.theme as string,
  //     occasion: router.query.occasion as string,
  //     place: router.query.place as string,
  //   });
  //   if (!response.error) {
  //     console.log('res is', response);
  //     setDesignData(response);
  //   } else {
  //     // error handling hehre
  //   }
  // };
  const POSTER_BASE_URL = `https://res.cloudinary.com/the-occassion/`;
  const fetchPosters = async () => {
    let response = await posterData();
    if (!response.error) {
      let postersJSX: any[] = [];
      response.forEach((el: any) => {
        if (el.Poster_Active) {
          postersJSX.push(
            <PosterCard url={`${POSTER_BASE_URL}${el.Poster_url}`} name={el.Poster_Name} />
          );
        }
      });
      // @ts-ignore
      setPosters(postersJSX);
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      // getDesigns();
    }
  }, [router]);

  useEffect(() => {
    fetchPosters();
  }, []);
  return (
    <LayoutPartyPlace>
      <div>
        {posters.length > 0 ? (
          <div>
            <Carousel
              items={posters}
              responsive={{ 568: { items: 1 } }}
              autoPlay={true}
              autoPlayInterval={3000}
            />
          </div>
        ) : (
          <SkeletonFeatured />
        )}

        <PartyPlace
          heading={
            (router.query.theme as string) ||
            (router.query.occasion as string) ||
            (router.query.place as string)
          }
          // partyData={designData}
        />
      </div>
    </LayoutPartyPlace>
  );
};

export default PartyPlaceTheme;
