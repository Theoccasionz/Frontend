import { FC, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import SkeletonFeatured from '../components/Skeleton/SkeletonFeatured';
import PartyNav from '../components/Nav';
import Carousel from '../components/Carousel';
import { fetchPartyThemes, fetchDJThemes, fetchSpecialParties } from '../server';
import PartyThemeCard from '../components/PartyThemeCard';

const responsive = {
  200: {items:1},
  568: { items: 2 },
  768: { items: 3 },
  992: { items: 4 },
  1400: { items: 6 },
};

const Index: FC = () => {
  const [partyThemes, setPartyThemes] = useState([]);
  const [djThemes, setDjThemes] = useState([]);
  const [specialParties, setSpecialParties] = useState([]);

  const getPartyThemes = async () => {
    let response;
    response = await fetchPartyThemes();
    if (!response.error) {
      let themesList: any[] = [];
      response.forEach((r: any) =>
        themesList.push(<PartyThemeCard name={r.Theme_Name} image={r.Image_url} count={r.count} />)
      );
      // @ts-ignore
      setPartyThemes(themesList);
    }
  };

  const getDJThemes = async () => {
    let response;
    response = await fetchDJThemes();
    if (!response.error) {
      let themesList: any[] = [];
      response.forEach((r: any) =>
        themesList.push(<PartyThemeCard name={r.Theme_Name} image={r.Image_url} count={r.count} />)
      );
      // @ts-ignore
      setDjThemes(themesList);
    }
  };

  const getSpecialParties = async () => {
    let response;
    response = await fetchSpecialParties();
    if (!response.error) {
      let themesList: any[] = [];
      response.forEach((r: any) =>
        themesList.push(<PartyThemeCard name={r.Theme_Name} image={r.Image_url} count={r.count} />)
      );
      // @ts-ignore
      setSpecialParties(themesList);
    }
  };

  useEffect(() => {
    getPartyThemes();
    getDJThemes();
    getSpecialParties();
  }, []);

  return (
    <Layout>
      <div>
        <PartyNav />
      </div>

      <h1>Party Themes</h1>
      <Carousel items={partyThemes} responsive={responsive} />

      <h1>DJ in your Town</h1>
      <Carousel items={djThemes} responsive={responsive} />

      <h1>Popular Parties</h1>
      <SkeletonFeatured />

      <h1>Party Special</h1>
      <Carousel items={specialParties} responsive={responsive} />
    </Layout>
  );
};

export default Index;
