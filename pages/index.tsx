import { FC, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import SkeletonFeatured from '../components/Skeleton/SkeletonFeatured';
import PartyNav from '../components/Nav';
import Carousel from '../components/Carousel';
import { fetchPartyThemes, fetchDJThemes } from '../server';
import PartyThemeCard from '../components/PartyThemeCard';

const Index: FC = () => {
  const [partyThemes, setPartyThemes] = useState([]);
  const [djThemes, setDjThemes] = useState([]);

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
      console.log(response);
      response.forEach((r: any) =>
        themesList.push(<PartyThemeCard name={r.Theme_Name} image={r.Image_url} count={r.count} />)
      );
      // @ts-ignore
      setDjThemes(themesList);
    }
  };

  useEffect(() => {
    getPartyThemes();
    getDJThemes();
    console.log('HELO');
  }, []);

  return (
    <Layout>
      <div>
        <PartyNav />
      </div>

      <h1>Party Themes</h1>
      <Carousel items={partyThemes} />

      <h1>DJ in your Town</h1>
      <Carousel items={djThemes}/>

      <h1>Popular Parties</h1>
      <SkeletonFeatured />

      <h1>Party Special</h1>
      <Carousel />
    </Layout>
  );
};

export default Index;
