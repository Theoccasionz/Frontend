import { FC, useState, useEffect } from 'react';
import PartyPlace from '../../components/Nav/party_place';
import PartyCard from '../../components/PartyPlace/partyCard';
import PosterCard from '../../components/PartyPlace/PosterCard';
import LayoutPartyPlace from '../../layouts/party-place';
import { partyPlaceData, posterData } from '../../server/party-place';

const PartyTown: FC = () => {
  const POSTER_BASE_URL = `https://res.cloudinary.com/the-occassion/`;
  const [occasionData, setOccasionData] = useState([]);
  const [themeData, setThemeData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [posters, setPosters] = useState([]);

  const fetchPartiesData = async () => {
    let response = await partyPlaceData();
    if (!response.error) {
      console.log(response);
      let occasions: any[] = [];
      response.occassion.forEach((occ: any) => {
        occasions.push(
          <PartyCard
            value={occ.Design_Occasion_Specialized}
            imgURL={occ.Design_Occasion_Specialized_Image_url}
            url="occasion"
          />
        );
      });
      // @ts-ignore
      setOccasionData(occasions);

      let places: any[] = [];
      response.places.forEach((occ: any) => {
        places.push(
          <PartyCard
            value={occ.Design_Setup_Place}
            imgURL={occ.Design_Setup_Place_Image_url}
            url="place"
          />
        );
      });
      // @ts-ignore
      setPlaceData(places);

      let themes: any[] = [];
      response.themes.forEach((occ: any) => {
        themes.push(
          <PartyCard value={occ.Design_Theme} imgURL={occ.Design_Theme_Image_url} url="theme" />
        );
      });
      // @ts-ignore
      setThemeData(themes);
    } else {
      // error handling
    }
  };

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
    fetchPartiesData();
    fetchPosters();
  }, []);
  return (
    <LayoutPartyPlace>
      <PartyPlace
        occasionData={occasionData}
        themeData={themeData}
        placeData={placeData}
        posterData={posters}
      />
    </LayoutPartyPlace>
  );
};

export default PartyTown;
