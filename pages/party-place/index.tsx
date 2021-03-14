import { FC, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import PartyNav from '../../components/Nav';
import PartyPlace from '../../components/Nav/party_place';
import PartyCard from '../../components/PartyPlace/partyCard';
import { partyPlaceData } from '../../server/party-place';

const PartyTown: FC = () => {
  const [occasionData, setOccasionData] = useState([]);
  const [themeData, setThemeData] = useState([]);
  const [placeData, setPlaceData] = useState([]);

  const fetchPartiesData = async () => {
    let response = await partyPlaceData();
    if (!response.error) {
      let occasions: any[] = [];
      response.occassion.forEach((occ: any) => {
        occasions.push(<PartyCard value={occ.Design_Occasion_Specialized} url="occasion" />);
      });
      // @ts-ignore
      setOccasionData(occasions);

      let places: any[] = [];
      response.places.forEach((occ: any) => {
        places.push(<PartyCard value={occ.Design_Setup_Place} url="place" />);
      });
      // @ts-ignore
      setPlaceData(places);

      let themes: any[] = [];
      response.themes.forEach((occ: any) => {
        themes.push(<PartyCard value={occ.Design_Theme} url="theme" />);
      });
      // @ts-ignore
      setThemeData(themes);
    } else {
      // error handling
    }
  };
  useEffect(() => {
    fetchPartiesData();
  }, []);
  return (
    <Layout>
      <PartyNav />
      <PartyPlace occasionData={occasionData} themeData={themeData} placeData={placeData} />
    </Layout>
  );
};

export default PartyTown;
